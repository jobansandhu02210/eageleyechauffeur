import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Eagle Eye Chauffeur NYC | Book Luxury Car Service 24/7',
  },
  description:
    'Contact Eagle Eye Chauffeur for premium NYC transportation. Call (929) 919-6499 or WhatsApp us 24/7. Quick quotes, instant bookings, professional service.',
  alternates: { canonical: `${getSiteUrl()}/contact` },
  openGraph: {
    url: `${getSiteUrl()}/contact`,
    title: 'Contact Eagle Eye Chauffeur NYC | Book Luxury Car Service 24/7',
    description:
      'Contact Eagle Eye Chauffeur for premium NYC transportation. Call (929) 919-6499 or WhatsApp us 24/7. Quick quotes, instant bookings, professional service.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
