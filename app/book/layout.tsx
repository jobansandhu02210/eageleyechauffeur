import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Book NYC Chauffeur Service Online | Instant Quote | Eagle Eye',
  },
  description:
    'Book your luxury NYC chauffeur online in seconds. Get instant quotes for airport transfers, hourly hire & point-to-point rides. 24/7 booking available.',
  alternates: { canonical: `${getSiteUrl()}/book` },
  openGraph: {
    url: `${getSiteUrl()}/book`,
    title: 'Book NYC Chauffeur Service Online | Instant Quote | Eagle Eye',
    description:
      'Book your luxury NYC chauffeur online in seconds. Get instant quotes for airport transfers, hourly hire & point-to-point rides. 24/7 booking available.',
  },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
