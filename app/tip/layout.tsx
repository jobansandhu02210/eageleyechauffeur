import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Tip Your Chauffeur | Eagle Eye — NYC Luxury Car Service',
  },
  description:
    'Leave a tip for your Eagle Eye Chauffeur driver. Enter your ride total and pay securely by card via Stripe.',
  // Noindex: this is a utility page for existing customers, not a search landing page.
  // Removing from robots.ts disallow so Stripe can redirect back here after payment.
  robots: { index: false, follow: false },
  alternates: { canonical: `${getSiteUrl()}/tip` },
};

export default function TipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
