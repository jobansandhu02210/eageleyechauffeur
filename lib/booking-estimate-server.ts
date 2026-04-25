/**
 * Server-only pricing: per-mile rates are NOT exposed to the client bundle.
 * Customer UI receives only totals and generic line labels via /api/booking/estimate.
 */
import { resolveDrivingMilesForPricing } from '@/lib/google-driving-distance';
import { getPlacesServerApiKey } from '@/lib/places-env';

const VEHICLE_PER_MILE_USD: Record<string, number> = {
  'business-sedan': 7.5,
  'business-suv': 9.5,
  'first-suv': 11.5,
  'first-sedan': 15,
};

const EXTRA_PASSENGER = 15;
const INCLUDED_PASSENGERS = 4;
const EXTRA_LUGGAGE = 8;
const INCLUDED_LUGGAGE = 3;

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

function roundUsd2(n: number): number {
  return Math.round((n + Number.EPSILON) * 100) / 100;
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
  let distanceSource: 'hourly_model' | 'distance_matrix' | 'straight_line_approx' = 'hourly_model';

  if (input.service === 'hourly') {
    const h = Math.max(2, Math.min(24, input.hours || 2));
    miles = Math.max(10, h * 12);
    distanceSource = 'hourly_model';
  } else if (!key) {
    return {
      incomplete: true,
      message: 'Price estimates need the server Google Maps key (see GOOGLE-APIS.md).',
    };
  } else if (input.service === 'airport') {
    const dest = AIRPORT_DEST[input.airport];
    const resolved = await resolveDrivingMilesForPricing(input.pickup, dest, key);
    if (!resolved) {
      return {
        incomplete: true,
        message:
          'Unable to calculate driving distance for this route. Check pick-up and airport, or contact us for a quote.',
      };
    }
    miles = resolved.miles;
    distanceSource = resolved.source;
  } else {
    const resolved = await resolveDrivingMilesForPricing(input.pickup, input.dropoff, key);
    if (!resolved) {
      return {
        incomplete: true,
        message:
          'Unable to calculate driving distance for this route. Check both addresses or contact us for a quote.',
      };
    }
    miles = resolved.miles;
    distanceSource = resolved.source;
  }

  const tripCharge = roundUsd2(Math.max(0, miles * rate));
  const tripLineLabel =
    input.service === 'hourly'
      ? 'Trip estimate'
      : distanceSource === 'straight_line_approx'
        ? `Trip estimate (~${Math.round(miles)} mi, route approximate)`
        : `Trip estimate (${Math.round(miles)} mi)`;
  const lines: { label: string; amount: number }[] = [{ label: tripLineLabel, amount: tripCharge }];

  if (input.passengers > INCLUDED_PASSENGERS) {
    const n = input.passengers - INCLUDED_PASSENGERS;
    lines.push({ label: `Additional passengers (${n})`, amount: n * EXTRA_PASSENGER });
  }
  if (input.luggage > INCLUDED_LUGGAGE) {
    const n = input.luggage - INCLUDED_LUGGAGE;
    lines.push({ label: `Additional luggage (${n})`, amount: n * EXTRA_LUGGAGE });
  }

  const amount = roundUsd2(lines.reduce((s, l) => s + l.amount, 0));

  let label = 'Point-to-point (estimated)';
  if (input.service === 'hourly') {
    label = `${Math.max(2, input.hours || 2)} hour charter (estimated)`;
  } else if (input.service === 'airport') {
    label = 'Airport transfer (estimated)';
  }

  return { incomplete: false, amount, label, lines };
}
