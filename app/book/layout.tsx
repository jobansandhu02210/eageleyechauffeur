import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Book NYC Chauffeur — Instant Quote',
  description:
    'Book NYC chauffeur service online: instant quotes for point-to-point, hourly hire, and JFK LGA EWR airport transfers. Eagle Eye Chauffeur.',
  keywords: siteKeywords,
  alternates: { canonical: `${getSiteUrl()}/book` },
  openGraph: {
    url: `${getSiteUrl()}/book`,
    title: 'Book NYC Chauffeur | Eagle Eye Chauffeur',
    description:
      'Reserve luxury black car service in New York — sedans, SUVs, and Sprinters for airports and hourly travel.',
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
