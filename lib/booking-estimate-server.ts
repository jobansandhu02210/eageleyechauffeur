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

/** Rough zip code / area distance estimation for NYC area */
function estimateMilesNYC(pickup: string, dropoff: string): number {
  const p = pickup.toLowerCase();
  const d = dropoff.toLowerCase();
  
  // Manhattan areas
  const manhattan = ['manhattan', 'midtown', 'downtown', 'uptown', 'upper east', 'upper west', 'chelsea', 'soho', 'tribeca', 'financial district', 'fidi', 'times square', 'hell\'s kitchen', 'murray hill', 'gramercy'];
  // Outer boroughs
  const brooklyn = ['brooklyn', 'williamsburg', 'dumbo', 'park slope', 'bay ridge', 'coney island'];
  const queens = ['queens', 'jfk', 'la guardia', 'laguardia', 'astoria', 'long island city', 'lic'];
  const bronx = ['bronx'];
  const staten = ['staten'];
  // Airports
  const airports = ['jfk airport', 'john f kennedy', 'la guardia', 'laguardia airport', 'newark airport', 'newark liberty', 'ewr'];
  
  const isManhattan = (s: string) => manhattan.some(area => s.includes(area));
  const isBrooklyn = (s: string) => brooklyn.some(area => s.includes(area));
  const isQueens = (s: string) => queens.some(area => s.includes(area)) || s.includes('jfk') || s.includes('lga');
  const isBronx = (s: string) => bronx.some(area => s.includes(area));
  const isStaten = (s: string) => staten.some(area => s.includes(area));
  const isAirport = (s: string) => airports.some(area => s.includes(area));
  
  // Manhattan ↔ Manhattan = short trip
  if (isManhattan(p) && isManhattan(d)) return 3;
  // Manhattan ↔ Brooklyn
  if ((isManhattan(p) && isBrooklyn(d)) || (isBrooklyn(p) && isManhattan(d))) return 8;
  // Manhattan ↔ Queens
  if ((isManhattan(p) && isQueens(d)) || (isQueens(p) && isManhattan(d))) return 12;
  // Manhattan ↔ JFK
  if ((isManhattan(p) && d.includes('jfk')) || (p.includes('jfk') && isManhattan(d))) return 18;
  // Manhattan ↔ LGA
  if ((isManhattan(p) && (d.includes('laguardia') || d.includes('la guardia'))) || ((p.includes('laguardia') || p.includes('la guardia')) && isManhattan(d))) return 10;
  // Manhattan ↔ Newark
  if ((isManhattan(p) && d.includes('newark')) || (p.includes('newark') && isManhattan(d))) return 16;
  // Brooklyn ↔ JFK
  if ((isBrooklyn(p) && d.includes('jfk')) || (p.includes('jfk') && isBrooklyn(d))) return 12;
  // Queens ↔ JFK
  if ((isQueens(p) && d.includes('jfk')) || (p.includes('jfk') && isQueens(d))) return 8;
  // Airport generic
  if (isAirport(p) || isAirport(d)) return 20;
  
  return FALLBACK_MILES;
}

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
    if (key && dest) {
      const m = await getDrivingMiles(input.pickup, dest, key);
      miles = m != null ? m : estimateMilesNYC(input.pickup, input.airport);
    } else {
      miles = estimateMilesNYC(input.pickup, input.airport);
    }
  } else {
    if (key) {
      const m = await getDrivingMiles(input.pickup, input.dropoff, key);
      miles = m != null ? m : estimateMilesNYC(input.pickup, input.dropoff);
    } else {
      miles = estimateMilesNYC(input.pickup, input.dropoff);
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
