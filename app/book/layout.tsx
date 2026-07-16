import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Book NYC Black Car Service | Instant Quote | Eagle Eye',
  description:
    'Book your NYC black car service online — flat-rate airport transfers to JFK, LGA & EWR. Instant quote, no surge pricing. Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/book` },
  robots: { index: true, follow: true },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
