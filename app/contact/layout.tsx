import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact — Book NYC Chauffeur & Quotes',
  description:
    'Contact Eagle Eye Chauffeur for NYC black car quotes, airport pickups (JFK LGA EWR HPN), and corporate travel. Phone, email, or form — fast replies.',
  keywords: siteKeywords,
  alternates: { canonical: `${getSiteUrl()}/contact` },
  openGraph: {
    url: `${getSiteUrl()}/contact`,
    title: 'Contact Eagle Eye Chauffeur | NYC',
    description:
      'Request a quote or ask about chauffeur service in Manhattan, airports, and the tri-state area.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
