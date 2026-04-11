import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function hostnameAllowed(hostname: string): boolean {
  const h = hostname.toLowerCase();
  if (h === 'localhost' || h === '127.0.0.1') return true;
  if (h === 'vercel.app' || h.endsWith('.vercel.app')) return true;
  if (h === 'eagleeyechauffeur.com' || h.endsWith('.eagleeyechauffeur.com')) return true;

  const raw = process.env.PLACES_ALLOWED_HOST_SUFFIXES;
  if (raw) {
    for (const suffix of raw
      .split(',')
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean)) {
      if (h === suffix || h.endsWith(`.${suffix}`)) return true;
    }
  }
  return false;
}

function hostnameFromBrowserHeaders(request: NextRequest): string | null {
  const referer = request.headers.get('referer');
  const origin = request.headers.get('origin');
  for (const u of [referer, origin]) {
    if (!u) continue;
    try {
      return new URL(u).hostname;
    } catch {
      continue;
    }
  }
  return null;
}

/**
 * Limits /api/places/* to your own site UI. Pair with a Google key restricted to Places API only.
 */
export function assertAllowedPlacesCaller(request: NextRequest): NextResponse | null {
  const fromRef = hostnameFromBrowserHeaders(request);
  if (fromRef && hostnameAllowed(fromRef)) {
    return null;
  }

  const secFetchSite = request.headers.get('sec-fetch-site');
  if (secFetchSite === 'same-origin' || secFetchSite === 'same-site') {
    const hostHeader = request.headers.get('host')?.split(':')[0]?.toLowerCase();
    if (hostHeader && hostnameAllowed(hostHeader)) {
      return null;
    }
  }

  return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
}
