import { Resend } from 'resend';
import { NextResponse, type NextRequest } from 'next/server';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY } from '@/lib/contact';
import { escapeHtml } from '@/lib/escape-html';
import { assertAllowedPlacesCaller } from '@/lib/places-request';
import { publicEmailSendError } from '@/lib/resend-user-error';

export const dynamic = 'force-dynamic';

const MAX = 4000;

function str(v: unknown, max = 500): string {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, max);
}

function num(v: unknown, min: number, max: number, def: number): number {
  const n = typeof v === 'number' ? v : parseInt(String(v), 10);
  if (Number.isNaN(n)) return def;
  return Math.min(max, Math.max(min, n));
}

function oneLine(s: string, max: number): string {
  return s.replace(/[\r\n]+/g, ' ').trim().slice(0, max);
}

export async function POST(request: NextRequest) {
  const denied = assertAllowedPlacesCaller(request);
  if (denied) return denied;

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email is not configured. Add RESEND_API_KEY in Vercel (see .env.example).' },
      { status: 503 }
    );
  }

  const from = process.env.EMAIL_FROM?.trim() || 'Eagle Eye Chauffeur <onboarding@resend.dev>';
  const to = process.env.BOOKING_NOTIFY_TO?.trim() || CONTACT_EMAIL_BOOKINGS;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const customerName = str(body.customerName, 200);
  const customerEmail = str(body.customerEmail, 200);
  const customerPhone = str(body.customerPhone, 50);
  if (!customerName || !customerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
    return NextResponse.json({ error: 'Name and a valid email are required.' }, { status: 400 });
  }

  const service = str(body.service, 100);
  const vehicle = str(body.vehicle, 200);
  const pickup = str(body.pickup, MAX);
  const dropoff = str(body.dropoff, MAX);
  const airport = str(body.airport, 200);
  const date = str(body.date, 50);
  const time = str(body.time, 20);
  const passengers = num(body.passengers, 1, 20, 1);
  const luggage = num(body.luggage, 0, 50, 0);
  const hours = body.hours != null ? num(body.hours, 1, 24, 2) : undefined;
  const specialRequests = str(body.specialRequests, MAX);
  const quoteAmount = num(body.quoteAmount, 0, 100000, 0);
  const quoteLabel = str(body.quoteLabel, 200);

  if (!pickup || !date || !time) {
    return NextResponse.json({ error: 'Missing required booking fields.' }, { status: 400 });
  }

  const rows: [string, string][] = [
    ['Service', service],
    ['Vehicle', vehicle],
    ['Pick-up', pickup],
    ['Drop-off', dropoff || '—'],
    ['Airport', airport || '—'],
    ['Date', date],
    ['Time', time],
    ['Passengers', String(passengers)],
    ['Luggage (bags)', String(luggage)],
    ['Hours', hours != null ? String(hours) : '—'],
    ['Quote', `$${quoteAmount} (${quoteLabel})`],
    ['Special requests', specialRequests || '—'],
    ['', ''],
    ['Guest name', customerName],
    ['Guest email', customerEmail],
    ['Guest phone', customerPhone || '—'],
  ];

  const tableHtml = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`
    )
    .join('');

  const html = `<p>New booking request from the website.</p>
<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${tableHtml}</table>
<p style="margin-top:16px;font-size:13px;color:#666">Reply to this email to reach the guest.</p>`;

  const resend = new Resend(apiKey);
  const subject = `New booking: ${oneLine(service || 'Request', 60)} — ${oneLine(customerName, 80)}`;

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: customerEmail,
    subject,
    html,
  });

  if (error) {
    console.error('[booking/notify]', error);
    return NextResponse.json(
      { error: publicEmailSendError(error.message) },
      { status: 502 }
    );
  }

  const confirmHtml = `<p>Hi ${escapeHtml(customerName)},</p>
<p>Thank you — we received your booking request for Eagle Eye Chauffeur.</p>
<p><strong>Summary:</strong> ${escapeHtml(service)} on ${escapeHtml(date)} at ${escapeHtml(time)}. Estimated total: <strong>$${quoteAmount}</strong> (${escapeHtml(quoteLabel)}).</p>
<p>Our team will confirm availability and final pricing shortly. If this is urgent, call or text us at <strong>${escapeHtml(CONTACT_PHONE_DISPLAY)}</strong>.</p>
<p>— Eagle Eye Chauffeur<br/><a href="mailto:${escapeHtml(CONTACT_EMAIL_BOOKINGS)}">${escapeHtml(CONTACT_EMAIL_BOOKINGS)}</a></p>`;

  await resend.emails
    .send({
      from,
      to: [customerEmail],
      subject: 'We received your booking request — Eagle Eye Chauffeur',
      html: confirmHtml,
    })
    .catch((e) => console.error('[booking/notify] guest confirmation email failed', e));

  return NextResponse.json({ ok: true, id: data?.id });
}
