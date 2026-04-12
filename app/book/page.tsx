'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GooglePlacesAutocomplete } from '@/components/GooglePlacesAutocomplete';
import {
  CONTACT_EMAIL_BOOKINGS,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from '@/lib/contact';

type ServiceType = 'point-to-point' | 'hourly' | 'airport';
type VehicleType = 'business-sedan' | 'business-suv' | 'first-suv' | 'first-sedan';

const SERVICE_LABELS: Record<ServiceType, string> = {
  'point-to-point': 'Point-to-Point',
  hourly: 'Hourly Chauffeur',
  airport: 'Airport Transfer',
};

const VEHICLE_LABELS: Record<VehicleType, string> = {
  'business-sedan': 'Business Class Sedan',
  'business-suv': 'Business Class SUV',
  'first-suv': 'First Class SUV',
  'first-sedan': 'First Class Sedan',
};

const AIRPORTS = ['JFK - John F. Kennedy', 'LGA - LaGuardia', 'EWR - Newark Liberty', 'HPN - Westchester County'];

// Simplified quote calculation (replace with real pricing logic/API)
function getQuote(
  service: ServiceType,
  vehicle: VehicleType,
  hours?: number
): { amount: number; label: string } {
  const base: Record<VehicleType, number> = {
    'business-sedan': 85,
    'business-suv': 120,
    'first-suv': 145,
    'first-sedan': 110,
  };
  const hourly: Record<VehicleType, number> = {
    'business-sedan': 75,
    'business-suv': 95,
    'first-suv': 115,
    'first-sedan': 90,
  };
  const v = base[vehicle];
  if (service === 'hourly' && hours && hours >= 2) {
    const total = v + (hours - 1) * hourly[vehicle];
    return { amount: Math.round(total), label: `${hours} hours` };
  }
  if (service === 'airport') return { amount: v + 45, label: 'Airport (meet & greet)' };
  return { amount: v + 25, label: 'Point-to-point (estimate)' };
}

const STEPS = [
  'Service & locations',
  'Date & time',
  'Vehicle & guests',
  'Details & quote',
  'Confirm',
];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceType>('point-to-point');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [vehicle, setVehicle] = useState<VehicleType>('business-sedan');
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(0);
  const [hours, setHours] = useState(2);
  const [specialRequests, setSpecialRequests] = useState('');
  const [airport, setAirport] = useState('');
  const [placesServerEnabled, setPlacesServerEnabled] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [bookingError, setBookingError] = useState<string | null>(null);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail.trim());

  useEffect(() => {
    let cancelled = false;
    fetch('/api/places/config', { credentials: 'same-origin' })
      .then((r) => (r.ok ? r.json() : { enabled: false }))
      .then((d: { enabled?: boolean }) => {
        if (!cancelled) setPlacesServerEnabled(!!d.enabled);
      })
      .catch(() => {
        if (!cancelled) setPlacesServerEnabled(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const quote = getQuote(service, vehicle, service === 'hourly' ? hours : undefined);
  const canProceed =
    (step === 1 &&
      pickup.trim() &&
      (service === 'point-to-point' ? dropoff.trim() : true) &&
      (service !== 'airport' || airport)) ||
    (step === 2 && date && time) ||
    (step === 3) ||
    (step === 4) ||
    (step === 5 && bookingSubmitted);

  const next = () => {
    if (step < 5 && canProceed) setStep(step + 1);
  };
  const prev = () => setStep(Math.max(1, step - 1));

  const submitBooking = async () => {
    if (!customerName.trim() || !emailOk) return;
    setBookingStatus('sending');
    setBookingError(null);
    try {
      const res = await fetch('/api/booking/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({
          service: SERVICE_LABELS[service],
          vehicle: VEHICLE_LABELS[vehicle],
          pickup,
          dropoff: service === 'point-to-point' || service === 'hourly' ? dropoff : '',
          airport: service === 'airport' ? airport : '',
          date,
          time,
          passengers,
          luggage,
          hours: service === 'hourly' ? hours : undefined,
          specialRequests,
          quoteAmount: quote.amount,
          quoteLabel: quote.label,
          customerName: customerName.trim(),
          customerEmail: customerEmail.trim(),
          customerPhone: customerPhone.trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setBookingError(typeof data.error === 'string' ? data.error : 'Could not send booking.');
        setBookingStatus('error');
        return;
      }
      setBookingSubmitted(true);
      setBookingStatus('idle');
    } catch {
      setBookingError('Network error. Please try again or call us.');
      setBookingStatus('error');
    }
  };

  return (
    <div className="bg-brand-offwhite min-h-screen py-12 lg:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black">
            Book Your Ride
          </h1>
          <p className="mt-2 text-brand-grey">
            Get an instant quote and secure your chauffeur in a few steps.
          </p>
        </div>

        {/* Step indicator */}
        <ol className="flex justify-between mb-10 text-xs sm:text-sm" aria-label="Progress">
          {STEPS.map((label, i) => (
            <li
              key={i}
              className={`flex-1 text-center ${i + 1 <= step ? 'text-brand-black font-medium' : 'text-brand-silver'}`}
            >
              <span className="hidden sm:inline">{label}</span>
              <span className="sm:hidden">{i + 1}</span>
            </li>
          ))}
        </ol>

        <div className="bg-brand-white border border-brand-light p-6 sm:p-8 shadow-sm">
          {/* Step 1: Service & locations */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-brand-black mb-3">
                  Service type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(Object.keys(SERVICE_LABELS) as ServiceType[]).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setService(s)}
                      className={`py-3 px-4 border text-sm font-medium transition-colors ${
                        service === s
                          ? 'border-brand-black bg-brand-black text-brand-white'
                          : 'border-brand-light text-brand-dark hover:border-brand-grey'
                      }`}
                    >
                      {SERVICE_LABELS[s]}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <GooglePlacesAutocomplete
                  id="pickup"
                  label="Pick-up location"
                  value={pickup}
                  onChange={setPickup}
                  placeholder="Address, airport, or hotel"
                  serverProxyEnabled={placesServerEnabled}
                />
                {placesServerEnabled && (
                  <p className="mt-1 text-xs text-brand-silver">Address suggestions powered by Google</p>
                )}
              </div>
              {(service === 'point-to-point' || service === 'hourly') && (
                <div>
                  <GooglePlacesAutocomplete
                    id="dropoff"
                    label={`Drop-off location${service === 'hourly' ? ' (optional for hourly)' : ''}`}
                    value={dropoff}
                    onChange={setDropoff}
                    placeholder="Address, airport, or hotel"
                    serverProxyEnabled={placesServerEnabled}
                  />
                </div>
              )}
              {service === 'airport' && (
                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Airport
                  </label>
                  <select
                    value={airport}
                    onChange={(e) => setAirport(e.target.value)}
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                  >
                    <option value="">Select airport</option>
                    {AIRPORTS.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Date & time */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-brand-black mb-2">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().slice(0, 10)}
                  className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-brand-black mb-2">
                  Time
                </label>
                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                />
              </div>
            </div>
          )}

          {/* Step 3: Vehicle & guests */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-brand-black mb-3">
                  Vehicle
                </label>
                <div className="space-y-2">
                  {(Object.keys(VEHICLE_LABELS) as VehicleType[]).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setVehicle(v)}
                      className={`w-full py-3 px-4 border text-left text-sm font-medium transition-colors ${
                        vehicle === v
                          ? 'border-brand-black bg-brand-black text-brand-white'
                          : 'border-brand-light text-brand-dark hover:border-brand-grey'
                      }`}
                    >
                      {VEHICLE_LABELS[v]}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="passengers" className="block text-sm font-medium text-brand-black mb-2">
                    Passengers
                  </label>
                  <input
                    id="passengers"
                    type="number"
                    min={1}
                    max={10}
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                  />
                </div>
                <div>
                  <label htmlFor="luggage" className="block text-sm font-medium text-brand-black mb-2">
                    Luggage (bags)
                  </label>
                  <input
                    id="luggage"
                    type="number"
                    min={0}
                    max={20}
                    value={luggage}
                    onChange={(e) => setLuggage(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                  />
                </div>
              </div>
              {service === 'hourly' && (
                <div>
                  <label htmlFor="hours" className="block text-sm font-medium text-brand-black mb-2">
                    Hours
                  </label>
                  <input
                    id="hours"
                    type="number"
                    min={2}
                    max={12}
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                  />
                </div>
              )}
            </div>
          )}

          {/* Step 4: Details & quote */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="requests" className="block text-sm font-medium text-brand-black mb-2">
                  Special requests
                </label>
                <textarea
                  id="requests"
                  rows={3}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Child seat, accessibility needs, etc."
                  className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black resize-y"
                />
              </div>
              <div className="bg-brand-offwhite border border-brand-light p-6">
                <h3 className="font-serif text-lg font-semibold text-brand-black mb-2">
                  Your quote
                </h3>
                <p className="text-brand-grey text-sm mb-2">{quote.label}</p>
                <p className="text-2xl font-semibold text-brand-black">
                  ${quote.amount}
                  {service === 'hourly' && <span className="text-base font-normal text-brand-grey"> total</span>}
                </p>
                <p className="mt-2 text-xs text-brand-silver">
                  Final price may vary slightly based on route and wait time. No hidden fees.
                </p>
              </div>
            </div>
          )}

          {/* Step 5: Confirm & notify */}
          {step === 5 && (
            <div className="space-y-6">
              {bookingSubmitted ? (
                <div className="bg-brand-offwhite border border-brand-light p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold text-brand-black mb-2">
                    Request received
                  </h3>
                  <p className="text-brand-grey text-sm">
                    We emailed you a confirmation copy. Our team will follow up shortly at{' '}
                    <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="text-brand-black underline">
                      {CONTACT_EMAIL_BOOKINGS}
                    </a>
                    . Questions? Call{' '}
                    <a href={`tel:${CONTACT_PHONE_E164}`} className="text-brand-black underline">
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <>
                  <div className="bg-brand-offwhite border border-brand-light p-6">
                    <h3 className="font-serif text-lg font-semibold text-brand-black mb-2">
                      Summary
                    </h3>
                    <ul className="text-sm text-brand-grey space-y-1">
                      <li>{SERVICE_LABELS[service]} • {VEHICLE_LABELS[vehicle]}</li>
                      <li>Pick-up: {pickup || '—'}</li>
                      {dropoff && <li>Drop-off: {dropoff}</li>}
                      {service === 'airport' && airport && <li>Airport: {airport}</li>}
                      <li>{date} at {time}</li>
                      <li className="font-medium text-brand-black mt-2">Estimate: ${quote.amount}</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-brand-black mb-4">
                      Your contact details
                    </h3>
                    <p className="text-brand-grey text-sm mb-4">
                      We&apos;ll send this request to {CONTACT_EMAIL_BOOKINGS} and email you a confirmation.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cust-name" className="block text-sm font-medium text-brand-black mb-2">
                          Full name
                        </label>
                        <input
                          id="cust-name"
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          autoComplete="name"
                          className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="cust-email" className="block text-sm font-medium text-brand-black mb-2">
                          Email
                        </label>
                        <input
                          id="cust-email"
                          type="email"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          autoComplete="email"
                          className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="cust-phone" className="block text-sm font-medium text-brand-black mb-2">
                          Phone <span className="text-brand-silver font-normal">(optional)</span>
                        </label>
                        <input
                          id="cust-phone"
                          type="tel"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          autoComplete="tel"
                          className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                          placeholder={CONTACT_PHONE_DISPLAY}
                        />
                      </div>
                    </div>
                    {bookingError && (
                      <p className="mt-4 text-sm text-red-600" role="alert">
                        {bookingError}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="mt-8 flex flex-col-reverse sm:flex-row gap-4 justify-between">
            <button
              type="button"
              onClick={prev}
              className="py-3 px-6 border border-brand-dark text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Back
            </button>
            {step < 5 ? (
              <button
                type="button"
                onClick={next}
                disabled={!canProceed}
                className="py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            ) : bookingSubmitted ? (
              <Link
                href="/"
                className="py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors text-center sm:inline-block"
              >
                Back to home
              </Link>
            ) : (
              <button
                type="button"
                onClick={submitBooking}
                disabled={bookingStatus === 'sending' || !customerName.trim() || !emailOk}
                className="py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {bookingStatus === 'sending' ? 'Sending…' : 'Submit booking request'}
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-brand-grey">
          <Link href="/contact" className="hover:text-brand-black underline">
            Need help? Contact us
          </Link>
        </p>
      </div>
    </div>
  );
}
