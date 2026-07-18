import { NextResponse, type NextRequest } from 'next/server';

/**
 * Verifies a request against the same HTTP Basic Auth credentials used by
 * middleware.ts (ADMIN_USERNAME / ADMIN_PASSWORD). Use this to protect admin
 * API routes so a single admin password guards both pages and APIs.
 *
 * Returns a 401 NextResponse if the request is not authorized, or null if it is.
 *
 * If ADMIN_PASSWORD is not set (e.g. local dev before setup), this allows the
 * request through — matching middleware.ts behavior so you're not locked out.
 */
export function assertAdmin(request: NextRequest): NextResponse | null {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null; // not configured — don't lock out during setup

  const auth = request.headers.get('authorization') || '';
  const [scheme, encoded] = auth.split(' ');
  if (scheme !== 'Basic' || !encoded) return unauthorized();

  try {
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    const idx = decoded.indexOf(':');
    const user = decoded.slice(0, idx);
    const pass = decoded.slice(idx + 1);
    const okUser = (process.env.ADMIN_USERNAME ?? 'admin') === user;
    const okPass = pass === password;
    if (!okUser || !okPass) return unauthorized();
    return null;
  } catch {
    return unauthorized();
  }
}

function unauthorized(): NextResponse {
  return NextResponse.json(
    { error: 'Unauthorized' },
    { status: 401, headers: { 'WWW-Authenticate': 'Basic realm="Admin", charset="UTF-8"' } }
  );
}
