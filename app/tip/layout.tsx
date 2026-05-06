import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Tip Your Chauffeur | Eagle Eye — NYC Luxury Car Service',
  },
  description:
    'Show appreciation for your NYC chauffeur. Calculate a tip for your Eagle Eye ride — 10%, 15%, or 20% of the fare. Tipping guidelines for black car service in New York.',
  keywords: [
    'tip chauffeur NYC',
    'how much to tip car service NYC',
    'black car service tipping',
    'NYC chauffeur tip calculator',
    'Eagle Eye Chauffeur tip',
  ],
  alternates: { canonical: `${getSiteUrl()}/tip` },
  openGraph: {
    url: `${getSiteUrl()}/tip`,
    title: 'Tip Your Chauffeur | Eagle Eye — NYC Luxury Car Service',
    description:
      'Show appreciation for your NYC chauffeur. Calculate a tip for your Eagle Eye ride.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tip Your Chauffeur — Eagle Eye',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tip Your Chauffeur | Eagle Eye NYC',
    description:
      'Show appreciation for your NYC chauffeur. Calculate a tip for your Eagle Eye ride.',
    images: [`${getSiteUrl()}/og-image.jpg`],
  },
};

export default function TipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
