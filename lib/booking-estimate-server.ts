/**
 * Server-only pricing: per-mile rates are NOT exposed to the client bundle.
 * Customer UI receives only totals and generic line labels via /api/booking/estimate.
 */
import { getDrivingMiles } from '@/lib/google-driving-distance';
import { getPlacesServerApiKey } from '@/lib/places-env';

const VEHICLE_PER_MILE_USD: Record<string, number> = {
  'business-sedan': 9,
  'business-suv': 11,
  'first-suv': 13,
  'first-sedan': 16,
};

const EXTRA_PASSENGER = 15;
const INCLUDED_PASSENGERS = 4;
const EXTRA_LUGGAGE = 8;
const INCLUDED_LUGGAGE = 3;

/** Used when Matrix is unavailable or addresses incomplete. */
const FALLBACK_MILES = 14;

const AIRPORT_DEST: Record<string, string> = {
  'JFK - John F. Kennedy': 'John F. Kennedy International Airport, Jamaica, NY, USA',
  'LGA - LaGuardia': 'LaGuardia Airport, Queens, NY, USA',
  'EWR - Newark Liberty': 'Newark Liberty International Airport, NJ, USA',
  'HPN - Westchester County': 'Westchester County Airport, White Plains, NY, USA',
};

const ALLOWED_VEHICLES = new Set(Object.keys(VEHICLE_PER_MILE_USD));

export type BookingEstimateResponse =
  | { incomplete: true; message: string }
  | {
      incomplete: false;
      amount: number;
      label: string;
      lines: { label: string; amount: number }[];
    };

function perMileRate(vehicle: string): number {
  return VEHICLE_PER_MILE_USD[vehicle] ?? VEHICLE_PER_MILE_USD['business-sedan'];
}

export async function computeBookingEstimate(input: {
  service: string;
  vehicle: string;
  pickup: string;
  dropoff: string;
  airport: string;
  hours: number;
  passengers: number;
  luggage: number;
}): Promise<BookingEstimateResponse> {
  const vehicle = ALLOWED_VEHICLES.has(input.vehicle) ? input.vehicle : 'business-sedan';
  const rate = perMileRate(vehicle);
  const key = getPlacesServerApiKey();

  if (input.service === 'point-to-point') {
    if (!input.pickup.trim() || !input.dropoff.trim()) {
      return {
        incomplete: true,
        message: 'Enter pick-up and drop-off for a price estimate.',
      };
    }
  }

  if (input.service === 'airport') {
    if (!input.pickup.trim() || !input.airport.trim()) {
      return {
        incomplete: true,
        message: 'Enter pick-up location and airport for a price estimate.',
      };
    }
    if (!AIRPORT_DEST[input.airport]) {
      return { incomplete: true, message: 'Select a valid airport.' };
    }
  }

  let miles: number;

  if (input.service === 'hourly') {
    const h = Math.max(2, Math.min(24, input.hours || 2));
    miles = Math.max(10, h * 12);
  } else if (input.service === 'airport') {
    const dest = AIRPORT_DEST[input.airport];
    if (key) {
      const m = await getDrivingMiles(input.pickup, dest, key);
      miles = m != null ? m : FALLBACK_MILES;
    } else {
      miles = FALLBACK_MILES;
    }
  } else {
    if (key) {
      const m = await getDrivingMiles(input.pickup, input.dropoff, key);
      miles = m != null ? m : FALLBACK_MILES;
    } else {
      miles = FALLBACK_MILES;
    }
  }

  const tripCharge = Math.max(0, Math.round(miles * rate));
  const lines: { label: string; amount: number }[] = [{ label: 'Trip estimate', amount: tripCharge }];

  if (input.passengers > INCLUDED_PASSENGERS) {
    const n = input.passengers - INCLUDED_PASSENGERS;
    lines.push({ label: `Additional passengers (${n})`, amount: n * EXTRA_PASSENGER });
  }
  if (input.luggage > INCLUDED_LUGGAGE) {
    const n = input.luggage - INCLUDED_LUGGAGE;
    lines.push({ label: `Additional luggage (${n})`, amount: n * EXTRA_LUGGAGE });
  }

  const amount = lines.reduce((s, l) => s + l.amount, 0);

  let label = 'Point-to-point (estimated)';
  if (input.service === 'hourly') {
    label = `${Math.max(2, input.hours || 2)} hour charter (estimated)`;
  } else if (input.service === 'airport') {
    label = 'Airport transfer (estimated)';
  }

  return { incomplete: false, amount, label, lines };
}
