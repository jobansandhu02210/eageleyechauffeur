import { NextResponse, type NextRequest } from 'next/server';
import { stripe } from '@/lib/stripe';
import { assertAllowedPlacesCaller } from '@/lib/places-request';

export const dynamic = 'force-dynamic';

const MAX = 4000;

function str(v: unknown, max = 500): string {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, max);
}

function num(v: unknown, min: number, max: number, def: number): number {
  const n = typeof v === 'number' ? v : parseFloat(String(v));
  if (Number.isNaN(n)) return def;
  return Math.min(max, Math.max(min, n));
}

/**
 * Card-on-file flow: this creates a Stripe SetupIntent (saves the customer's
 * card without charging). The final amount is charged after the trip via
 * /api/booking/[id]/charge (off-session). No funds are held at booking time.
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
  const specialRequests = str(body.specialRequests, MAX);
  const promoCode = str(body.promoCode, 64).toUpperCase();
  const quoteAmount = num(body.quoteAmount, 0, 100000, 0);
  const quoteLabel = str(body.quoteLabel, 200);
  const hours = body.hours != null ? num(body.hours, 1, 24, 2) : undefined;

  if (!pickup || !date || !time) {
    return NextResponse.json({ error: 'Missing required booking fields.' }, { status: 400 });
  }

  const stripeAvailable = !!process.env.STRIPE_SECRET_KEY?.trim();
  if (!stripeAvailable) {
    return NextResponse.json({ error: 'Payment is not configured yet. Contact us to book.' }, { status: 503 });
  }

  // Reuse an existing Stripe Customer for this email if one exists, so repeat
  // customers (and abandoned/retried attempts) don't create duplicate records.
  let customer: Awaited<ReturnType<typeof stripe.customers.create>>;
  const existing = await stripe.customers.list({ email: customerEmail, limit: 1 });
  if (existing.data.length > 0) {
    customer = await stripe.customers.update(existing.data[0].id, {
      name: customerName,
      phone: customerPhone || undefined,
      metadata: { service, date, time, pickup: pickup.slice(0, 499) },
    });
  } else {
    customer = await stripe.customers.create({
      name: customerName,
      email: customerEmail,
      phone: customerPhone || undefined,
      metadata: { service, date, time, pickup: pickup.slice(0, 499) },
    });
  }

  let bookingId: string | null = null;

  // Save booking to DB (best-effort — card save still works if DB is unavailable)
  try {
    const { prisma } = await import('@/lib/prisma');
    const booking = await prisma.booking.create({
      data: {
        service,
        pickup,
        dropoff: dropoff || null,
        airport: airport || null,
        date,
        time,
        vehicle,
        passengers: typeof body.passengers === 'number' ? body.passengers : 1,
        luggage: typeof body.luggage === 'number' ? body.luggage : 0,
        hours: hours ?? null,
        specialRequests: specialRequests || null,
        quoteAmount: quoteAmount || null,
        quoteLabel: quoteLabel || null,
        customerName,
        customerEmail,
        customerPhone: customerPhone || null,
        promoCode: promoCode || null,
        stripeCustomerId: customer.id,
        paymentStatus: 'pending',
      },
    });
    bookingId = booking.id;
  } catch (dbErr) {
    console.warn('[create-intent] DB unavailable — proceeding without booking record:', dbErr);
  }

  const setupIntent = await stripe.setupIntents.create({
    customer: customer.id,
    usage: 'off_session',
    payment_method_types: ['card'],
    metadata: {
      bookingId: bookingId ?? '',
      customerName,
      customerEmail,
      service,
      vehicle,
      date,
      time,
      pickup: pickup.slice(0, 499),
      promoCode,
      quoteAmount: String(quoteAmount),
    },
  });

  if (bookingId) {
    try {
      const { prisma } = await import('@/lib/prisma');
      await prisma.booking.update({
        where: { id: bookingId },
        data: { stripeSetupIntentId: setupIntent.id },
      });
    } catch {
      // non-fatal
    }
  }

  return NextResponse.json({
    clientSecret: setupIntent.client_secret,
    bookingId,
    customerId: customer.id,
    mode: 'setup',
  });
}
