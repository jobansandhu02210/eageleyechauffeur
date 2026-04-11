import { NextResponse, type NextRequest } from 'next/server';
import { assertAllowedPlacesCaller } from '@/lib/places-request';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const denied = assertAllowedPlacesCaller(request);
  if (denied) return denied;

  const enabled = Boolean(process.env.PLACES_SERVER_API_KEY?.trim());
  return NextResponse.json({ enabled });
}
