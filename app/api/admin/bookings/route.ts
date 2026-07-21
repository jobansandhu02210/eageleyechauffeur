import { NextResponse, type NextRequest } from 'next/server';
import { assertAdmin } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

/**
 * Lists bookings for the admin dashboard. Protected by the same admin password
 * (ADMIN_USERNAME / ADMIN_PASSWORD) that guards the /admin pages.
 *   GET /api/admin/bookings
 */
export async function GET(request: NextRequest) {
  const denied = assertAdmin(request);
  if (denied) return denied;

  try {
    const { prisma } = await import('@/lib/prisma');
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: 'desc' },
      take: 200,
      select: {
        id: true,
        createdAt: true,
        service: true,
        vehicle: true,
        pickup: true,
        dropoff: true,
        airport: true,
        date: true,
        time: true,
        passengers: true,
        hours: true,
        customerName: true,
        customerEmail: true,
        customerPhone: true,
        promoCode: true,
        quoteAmount: true,
        specialRequests: true,
        paymentStatus: true,
        chargedAmount: true,
        paidAt: true,
        stripeCustomerId: true,
        stripePaymentMethodId: true,
      },
    });
    return NextResponse.json({ ok: true, bookings });
  } catch (err) {
    console.error('[admin/bookings] DB error', err);
    return NextResponse.json(
      { error: 'Database is not configured or unreachable. Set DATABASE_URL and run migrations.' },
      { status: 503 }
    );
  }
}
