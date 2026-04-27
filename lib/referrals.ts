import { prisma } from '@/lib/prisma';
import { normalizePromoCode } from '@/lib/referral-utils';

export type ReferralLookupResult =
  | { ok: true; driverId: string; driverName: string; code: string }
  | { ok: false; message: string };

export async function lookupDriverByPromoCode(codeRaw: string): Promise<ReferralLookupResult> {
  const code = normalizePromoCode(codeRaw);
  if (!code) return { ok: false, message: 'Enter a promo code.' };

  const driver = await prisma.driver.findFirst({
    where: { code, active: true },
    select: { id: true, name: true, code: true },
  });

  if (!driver) return { ok: false, message: 'Promo code not found.' };
  return { ok: true, driverId: driver.id, driverName: driver.name, code: driver.code };
}

export async function recordReferralBooking(input: {
  promoCode: string;
  customerEmail?: string | null;
  customerPhone?: string | null;
  booking: {
    service: string;
    pickup: string;
    dropoff?: string | null;
    airport?: string | null;
    date?: string | null;
    time?: string | null;
    vehicle?: string | null;
    passengers?: number | null;
    luggage?: number | null;
    hours?: number | null;
    specialRequests?: string | null;
    quoteAmount?: number | null;
    quoteLabel?: string | null;
    customerName?: string | null;
  };
}) {
  const code = normalizePromoCode(input.promoCode);
  if (!code) return { ok: false as const, message: 'Missing promo code.' };

  const driver = await prisma.driver.findFirst({
    where: { code, active: true },
    select: { id: true, name: true, code: true },
  });
  if (!driver) return { ok: false as const, message: 'Invalid promo code.' };

  const booking = await prisma.booking.create({
    data: {
      service: input.booking.service,
      pickup: input.booking.pickup,
      dropoff: input.booking.dropoff ?? null,
      airport: input.booking.airport ?? null,
      date: input.booking.date ?? null,
      time: input.booking.time ?? null,
      vehicle: input.booking.vehicle ?? null,
      passengers: input.booking.passengers ?? null,
      luggage: input.booking.luggage ?? null,
      hours: input.booking.hours ?? null,
      specialRequests: input.booking.specialRequests ?? null,
      quoteAmount: input.booking.quoteAmount ?? null,
      quoteLabel: input.booking.quoteLabel ?? null,
      customerName: input.booking.customerName ?? null,
      customerEmail: input.customerEmail ?? null,
      customerPhone: input.customerPhone ?? null,
      promoCode: driver.code,
      driverId: driver.id,
      referral: {
        create: {
          promoCode: driver.code,
          driverId: driver.id,
          customerEmail: input.customerEmail ?? null,
          customerPhone: input.customerPhone ?? null,
        },
      },
    },
    select: { id: true, createdAt: true, promoCode: true },
  });

  return { ok: true as const, booking, driver };
}

export async function referralStats() {
  const drivers = await prisma.driver.findMany({
    where: { active: true },
    select: { id: true, name: true, code: true, createdAt: true },
    orderBy: { name: 'asc' },
  });

  const counts = await prisma.referral.groupBy({
    by: ['driverId'],
    _count: { _all: true },
  });

  const bookings = await prisma.booking.groupBy({
    by: ['driverId'],
    where: { driverId: { not: null } },
    _count: { _all: true },
  });

  const byDriver = new Map<string, { referrals: number; bookings: number }>();
  counts.forEach((c) => byDriver.set(c.driverId, { referrals: c._count._all, bookings: 0 }));
  bookings.forEach((b) => {
    const cur = byDriver.get(b.driverId ?? '') ?? { referrals: 0, bookings: 0 };
    byDriver.set(b.driverId ?? '', { ...cur, bookings: b._count._all });
  });

  return drivers.map((d) => ({
    ...d,
    referrals: byDriver.get(d.id)?.referrals ?? 0,
    bookings: byDriver.get(d.id)?.bookings ?? 0,
  }));
}

