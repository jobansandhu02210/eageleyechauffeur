'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GooglePlacesAutocomplete } from '@/components/GooglePlacesAutocomplete';

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
  'Payment',
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

  const quote = getQuote(service, vehicle, service === 'hourly' ? hours : undefined);
  const canProceed =
    (step === 1 &&
      pickup.trim() &&
      (service === 'point-to-point' ? dropoff.trim() : true) &&
      (service !== 'airport' || airport)) ||
    (step === 2 && date && time) ||
    (step === 3) ||
    (step === 4) ||
    (step === 5);

  const next = () => {
    if (step < 5 && canProceed) setStep(step + 1);
  };
  const prev = () => setStep(Math.max(1, step - 1));

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
                />
                {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
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

          {/* Step 5: Payment */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="bg-brand-offwhite border border-brand-light p-6">
                <h3 className="font-serif text-lg font-semibold text-brand-black mb-2">
                  Summary
                </h3>
                <ul className="text-sm text-brand-grey space-y-1">
                  <li>{SERVICE_LABELS[service]} • {VEHICLE_LABELS[vehicle]}</li>
                  <li>Pick-up: {pickup || '—'}</li>
                  {dropoff && <li>Drop-off: {dropoff}</li>}
                  <li>{date} at {time}</li>
                  <li className="font-medium text-brand-black mt-2">Total: ${quote.amount}</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-brand-black mb-2">
                  Secure payment
                </p>
                <p className="text-brand-grey text-sm mb-4">
                  Payment integration (e.g. Stripe) can be connected here. For now, complete your booking by calling us or using the contact form.
                </p>
                <div className="border-2 border-dashed border-brand-light p-8 text-center text-brand-silver text-sm">
                  Payment form placeholder. Integrate Stripe or your preferred provider.
                </div>
                <p className="mt-4 text-sm text-brand-grey">
                  <a href="tel:+12125551234" className="text-brand-black font-medium underline">(212) 555-1234</a>
                  {' '}or{' '}
                  <Link href="/contact" className="text-brand-black font-medium underline">contact us</Link> to confirm your booking.
                </p>
              </div>
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
            ) : (
              <span className="text-brand-grey text-sm sm:self-center">
                Booking can be completed by phone or contact form.
              </span>
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
