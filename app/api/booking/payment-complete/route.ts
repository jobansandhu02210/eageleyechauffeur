import { NextResponse, type NextRequest } from 'next/server';
import { stripe } from '@/lib/stripe';
import { Resend } from 'resend';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY } from '@/lib/contact';
import { escapeHtml } from '@/lib/escape-html';
import { assertAllowedPlacesCaller } from '@/lib/places-request';
import { publicEmailSendError } from '@/lib/resend-user-error';

export const dynamic = 'force-dynamic';

function str(v: unknown, max = 500): string {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, max);
}

/**
 * Called after the customer's card is saved via SetupIntent. Records the saved
 * payment method on the booking and notifies both parties. No charge happens
 * here — the trip is charged later via /api/booking/[id]/charge.
 */
export async function POST(request: NextRequest) {
  const denied = assertAllowedPlacesCaller(request);
  if (denied) return denied;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const setupIntentId = str(body.setupIntentId, 200);
  const bookingId = str(body.bookingId, 200);

  if (!setupIntentId) {
    return NextResponse.json({ error: 'setupIntentId is required.' }, { status: 400 });
  }

  // Verify the card was saved successfully with Stripe
  let setupIntent: Awaited<ReturnType<typeof stripe.setupIntents.retrieve>>;
  try {
    setupIntent = await stripe.setupIntents.retrieve(setupIntentId);
  } catch (err) {
    console.error('[payment-complete] failed to retrieve SetupIntent', err);
    return NextResponse.json({ error: 'Could not verify card.' }, { status: 502 });
  }

  if (setupIntent.status !== 'succeeded') {
    return NextResponse.json(
      { error: `Card was not saved (status: ${setupIntent.status}).` },
      { status: 400 }
    );
  }

  const paymentMethodId =
    typeof setupIntent.payment_method === 'string'
      ? setupIntent.payment_method
      : setupIntent.payment_method?.id ?? null;
  const customerId =
    typeof setupIntent.customer === 'string'
      ? setupIntent.customer
      : setupIntent.customer?.id ?? null;
  const meta = setupIntent.metadata ?? {};

  // Set the saved card as the customer's default and record it on the booking.
  if (customerId && paymentMethodId) {
    try {
      await stripe.customers.update(customerId, {
        invoice_settings: { default_payment_method: paymentMethodId },
      });
    } catch (err) {
      console.warn('[payment-complete] could not set default payment method:', err);
    }
  }

  if (bookingId) {
    try {
      const { prisma } = await import('@/lib/prisma');
      await prisma.booking.update({
        where: { id: bookingId },
        data: {
          paymentStatus: 'card_saved',
          stripePaymentMethodId: paymentMethodId,
          stripeCustomerId: customerId,
        },
      });
    } catch (err) {
      console.warn('[payment-complete] DB update failed (non-fatal):', err);
    }
  }

  // Emails
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json({ ok: true, emailSent: false });
  }

  const resend = new Resend(apiKey);
  const from = process.env.EMAIL_FROM?.trim() || 'Eagle Eye Chauffeur <onboarding@resend.dev>';
  const to = process.env.BOOKING_NOTIFY_TO?.trim() || CONTACT_EMAIL_BOOKINGS;

  const customerName = meta.customerName || str(body.customerName, 200);
  const customerEmail = meta.customerEmail || str(body.customerEmail, 200);
  const service = meta.service || str(body.service, 100);
  const vehicle = meta.vehicle || str(body.vehicle, 200);
  const date = meta.date || str(body.date, 50);
  const time = meta.time || str(body.time, 20);
  const pickup = meta.pickup || str(body.pickup, 500);
  const promoCode = meta.promoCode || str(body.promoCode, 64);
  const quoteAmount = meta.quoteAmount || str(body.quoteAmount, 20);

  const pickupDatetime = new Date(`${date}T${time}`);
  const twoHoursFromNow = new Date(Date.now() + 2 * 60 * 60 * 1000);
  const isLastMinute = !isNaN(pickupDatetime.getTime()) && pickupDatetime < twoHoursFromNow;

  const urgentBanner = isLastMinute
    ? `<div style="background:#dc2626;color:#fff;padding:14px 16px;font-size:15px;font-weight:700;margin-bottom:16px;border-radius:4px">⚠️ LAST-MINUTE BOOKING — pick-up is within 2 hours. Respond immediately.</div>`
    : '';

  const businessHtml = `${urgentBanner}
<p><strong>✅ New booking — card on file (charge after trip)</strong></p>
<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
  <tr><td style="padding:6px 12px 6px 0;font-weight:600">Guest name</td><td>${escapeHtml(customerName)}</td></tr>
  <tr><td style="padding:6px 12px 6px 0;font-weight:600">Guest email</td><td>${escapeHtml(customerEmail)}</td></tr>
  <tr><td style="padding:6px 12px 6px 0;font-weight:600">Service</td><td>${escapeHtml(service)}</td></tr>
  <tr><td style="padding:6px 12px 6px 0;font-weight:600">Vehicle</td><td>${escapeHtml(vehicle)}</td></tr>
  <tr><td style="padding:6px 12px 6px 0;font-weight:600">Date &amp; time</td><td>${escapeHtml(date)} at ${escapeHtml(time)}</td></tr>
  <tr><td style="padding:6px 12px 6px 0;font-weight:600">Pick-up</td><td>${escapeHtml(pickup)}</td></tr>
  ${promoCode ? `<tr><td style="padding:6px 12px 6px 0;font-weight:600">Promo code</td><td>${escapeHtml(promoCode)}</td></tr>` : ''}
  <tr><td style="padding:6px 12px 6px 0;font-weight:600">Website estimate</td><td>${quoteAmount && quoteAmount !== '0' ? `$${escapeHtml(quoteAmount)}` : '—'}</td></tr>
  ${bookingId ? `<tr><td style="padding:6px 12px 6px 0;font-weight:600">Booking ID</td><td>${escapeHtml(bookingId)}</td></tr>` : ''}
  <tr><td style="padding:6px 12px 6px 0;font-weight:600">Stripe customer</td><td>${escapeHtml(customerId ?? '—')}</td></tr>
</table>
<p style="margin-top:14px;font-size:14px"><strong>The customer's card is securely saved.</strong> After the trip, charge the final amount from your admin (booking ID above) or the Stripe dashboard.</p>`;

  const subject = `${isLastMinute ? '⚠️ URGENT — ' : ''}New booking (card on file) — ${customerName} — ${service}`;

  await resend.emails.send({ from, to: [to], replyTo: customerEmail, subject, html: businessHtml });

  // Confirm to customer
  const customerHtml = `<p>Hi ${escapeHtml(customerName)},</p>
<p>Your booking with <strong>Eagle Eye Chauffeur</strong> is confirmed. Your card is securely saved and will be charged the final fare after your trip is complete — nothing is charged now.</p>
<p><strong>Trip details:</strong> ${escapeHtml(service)} — ${escapeHtml(vehicle)} on <strong>${escapeHtml(date)} at ${escapeHtml(time)}</strong>.</p>
<p>Pick-up: <strong>${escapeHtml(pickup)}</strong></p>
<p>Our driver will be in touch ahead of your trip. For any changes or questions, contact us at <a href="mailto:${escapeHtml(CONTACT_EMAIL_BOOKINGS)}">${escapeHtml(CONTACT_EMAIL_BOOKINGS)}</a> or call/text ${escapeHtml(CONTACT_PHONE_DISPLAY)}.</p>
<p>— Eagle Eye Chauffeur</p>`;

  const { error: guestError } = await resend.emails.send({
    from,
    to: [customerEmail],
    replyTo: to,
    subject: `Booking confirmed — Eagle Eye Chauffeur — ${date} at ${time}`,
    html: customerHtml,
  });

  if (guestError) {
    console.error('[payment-complete] guest email failed:', publicEmailSendError(guestError.message));
    return NextResponse.json({ ok: true, emailSent: false });
  }

  return NextResponse.json({ ok: true, emailSent: true });
}
