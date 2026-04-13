import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Book NYC Chauffeur — Request & Invoice',
  description:
    'Request NYC chauffeur service online: point-to-point, hourly, and JFK LGA EWR airport transfers. We confirm by email and send your invoice. Eagle Eye Chauffeur.',
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
