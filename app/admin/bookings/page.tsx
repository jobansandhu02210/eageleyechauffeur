'use client';

import { useCallback, useEffect, useState } from 'react';

type Booking = {
  id: string;
  createdAt: string;
  service: string;
  vehicle: string | null;
  pickup: string;
  dropoff: string | null;
  airport: string | null;
  date: string | null;
  time: string | null;
  passengers: number | null;
  hours: number | null;
  customerName: string | null;
  customerEmail: string | null;
  customerPhone: string | null;
  promoCode: string | null;
  quoteAmount: number | null;
  specialRequests: string | null;
  paymentStatus: string | null;
  chargedAmount: number | null;
  paidAt: string | null;
  stripeCustomerId: string | null;
  stripePaymentMethodId: string | null;
};

const STATUS_STYLES: Record<string, string> = {
  card_saved: 'bg-blue-100 text-blue-800',
  charged: 'bg-green-100 text-green-800',
  charge_failed: 'bg-red-100 text-red-800',
  pending: 'bg-gray-100 text-gray-600',
};

function StatusBadge({ status }: { status: string | null }) {
  const s = status ?? 'pending';
  const label =
    s === 'card_saved' ? 'Card on file' :
    s === 'charged' ? 'Charged' :
    s === 'charge_failed' ? 'Charge failed' :
    'No card';
  return (
    <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded ${STATUS_STYLES[s] ?? STATUS_STYLES.pending}`}>
      {label}
    </span>
  );
}

function BookingCard({
  booking,
  onCharged,
}: {
  booking: Booking;
  onCharged: () => void;
}) {
  const [fare, setFare] = useState<string>(booking.quoteAmount ? String(booking.quoteAmount) : '');
  const [tip, setTip] = useState<string>('');
  const [charging, setCharging] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const fareNum = parseFloat(fare) || 0;
  const tipNum = parseFloat(tip) || 0;
  const total = fareNum + tipNum;

  // Chargeable if we have a Stripe customer — the server reconciles the actual
  // card from Stripe even when the DB didn't record the payment method.
  const hasCard = !!booking.stripeCustomerId;
  const alreadyCharged = booking.paymentStatus === 'charged';

  async function charge() {
    if (fareNum <= 0) {
      setMsg({ ok: false, text: 'Enter a fare greater than $0.' });
      return;
    }
    if (!window.confirm(`Charge ${booking.customerName ?? 'this customer'} a total of $${total.toFixed(2)} (fare $${fareNum.toFixed(2)} + tip $${tipNum.toFixed(2)})?`)) {
      return;
    }
    setCharging(true);
    setMsg(null);
    try {
      const res = await fetch(`/api/booking/${booking.id}/charge`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ amount: fareNum, tip: tipNum }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setMsg({ ok: false, text: data.error ?? 'Charge failed.' });
        setCharging(false);
        return;
      }
      setMsg({ ok: true, text: `Charged $${data.chargedAmount?.toFixed(2)} successfully.` });
      setCharging(false);
      onCharged();
    } catch {
      setMsg({ ok: false, text: 'Network error.' });
      setCharging(false);
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p className="font-semibold text-gray-900">{booking.customerName ?? 'Unnamed'}</p>
          <p className="text-sm text-gray-500">{booking.customerEmail}{booking.customerPhone ? ` · ${booking.customerPhone}` : ''}</p>
        </div>
        <StatusBadge
          status={
            alreadyCharged ? 'charged'
            : booking.paymentStatus === 'charge_failed' ? 'charge_failed'
            : hasCard ? 'card_saved'
            : 'pending'
          }
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-700 mb-4">
        <div><span className="text-gray-400">Service:</span> {booking.service}{booking.vehicle ? ` · ${booking.vehicle}` : ''}</div>
        <div><span className="text-gray-400">When:</span> {booking.date} {booking.time}</div>
        <div className="sm:col-span-2"><span className="text-gray-400">Pick-up:</span> {booking.pickup}</div>
        {booking.dropoff && <div className="sm:col-span-2"><span className="text-gray-400">Drop-off:</span> {booking.dropoff}</div>}
        {booking.airport && <div><span className="text-gray-400">Airport:</span> {booking.airport}</div>}
        {booking.hours && <div><span className="text-gray-400">Hours:</span> {booking.hours}</div>}
        {booking.promoCode && <div><span className="text-gray-400">Promo:</span> {booking.promoCode}</div>}
        {booking.quoteAmount != null && <div><span className="text-gray-400">Web estimate:</span> ${booking.quoteAmount}</div>}
        {booking.specialRequests && <div className="sm:col-span-2"><span className="text-gray-400">Notes:</span> {booking.specialRequests}</div>}
      </div>

      {alreadyCharged ? (
        <div className="bg-green-50 border border-green-200 rounded p-3 text-sm text-green-800">
          ✅ Charged ${booking.chargedAmount?.toFixed(2)} on {booking.paidAt ? new Date(booking.paidAt).toLocaleString() : '—'}
        </div>
      ) : !hasCard ? (
        <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-500">
          No saved card on file — this booking cannot be charged here.
        </div>
      ) : (
        <div className="border-t border-gray-100 pt-4">
          <div className="flex flex-wrap items-end gap-3">
            <label className="text-sm">
              <span className="block text-gray-500 mb-1">Final fare ($)</span>
              <input
                type="number" min="0" step="0.01" value={fare}
                onChange={(e) => setFare(e.target.value)}
                className="w-32 px-3 py-2 border border-gray-300 rounded"
                placeholder="0.00"
              />
            </label>
            <label className="text-sm">
              <span className="block text-gray-500 mb-1">Tip ($)</span>
              <input
                type="number" min="0" step="0.01" value={tip}
                onChange={(e) => setTip(e.target.value)}
                className="w-28 px-3 py-2 border border-gray-300 rounded"
                placeholder="0.00"
              />
            </label>
            <div className="text-sm">
              <span className="block text-gray-500 mb-1">Total</span>
              <div className="px-3 py-2 font-semibold text-gray-900 tabular-nums">${total.toFixed(2)}</div>
            </div>
            <button
              onClick={charge}
              disabled={charging}
              className="ml-auto px-6 py-2 bg-black text-white font-medium rounded hover:bg-gray-800 disabled:opacity-50"
            >
              {charging ? 'Charging…' : 'Charge card'}
            </button>
          </div>
          {msg && (
            <p className={`mt-3 text-sm ${msg.ok ? 'text-green-700' : 'text-red-600'}`}>{msg.text}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/bookings', { credentials: 'same-origin' });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(
          res.status === 401
            ? 'Not signed in. Reload the page and enter your admin username & password.'
            : data.error ?? 'Failed to load.'
        );
        setLoading(false);
        return;
      }
      setBookings(data.bookings ?? []);
    } catch {
      setError('Network error.');
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Bookings</h1>
            <p className="text-sm text-gray-500">Charge saved cards after each trip.</p>
          </div>
          <button onClick={load} className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-100">
            Refresh
          </button>
        </div>

        {error && <div className="bg-red-50 border border-red-200 rounded p-4 text-sm text-red-700 mb-4">{error}</div>}
        {loading && <p className="text-gray-500">Loading…</p>}
        {!loading && bookings.length === 0 && !error && <p className="text-gray-500">No bookings yet.</p>}

        <div className="space-y-4">
          {[...bookings]
            .sort((a, b) => {
              // Rank: chargeable (card, not charged) → charged → no card.
              const rank = (x: Booking) =>
                x.paymentStatus !== 'charged' && x.stripeCustomerId ? 0 : x.paymentStatus === 'charged' ? 1 : 2;
              return rank(a) - rank(b);
            })
            .map((b) => (
              <BookingCard key={b.id} booking={b} onCharged={load} />
            ))}
        </div>
      </div>
    </div>
  );
}
