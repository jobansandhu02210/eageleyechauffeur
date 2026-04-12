/**
 * Server-only: driving distance via Google Distance Matrix API.
 * Enable "Distance Matrix API" for the same key as Places (server key).
 */
export async function getDrivingMiles(
  origin: string,
  destination: string,
  apiKey: string
): Promise<number | null> {
  const o = origin.trim();
  const d = destination.trim();
  if (!o || !d) return null;

  const url = new URL('https://maps.googleapis.com/maps/api/distancematrix/json');
  url.searchParams.set('origins', o);
  url.searchParams.set('destinations', d);
  url.searchParams.set('units', 'imperial');
  url.searchParams.set('key', apiKey);

  try {
    const res = await fetch(url.toString(), { cache: 'no-store' });
    const data = (await res.json()) as {
      status: string;
      rows?: { elements?: { status: string; distance?: { value: number } }[] }[];
    };
    if (data.status !== 'OK') return null;
    const el = data.rows?.[0]?.elements?.[0];
    if (!el || el.status !== 'OK' || !el.distance?.value) return null;
    return el.distance.value / 1609.344;
  } catch {
    return null;
  }
}
