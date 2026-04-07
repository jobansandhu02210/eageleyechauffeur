import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnalyticsPlaceholder } from '@/components/AnalyticsPlaceholder';
import { LocalBusinessJsonLd } from '@/components/JsonLd';
import { SplashScreen } from '@/components/SplashScreen';
import { getSiteUrl } from '@/lib/site';
import { defaultSiteDescription, siteKeywords } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'Eagle Eye Chauffeur | NYC Luxury Chauffeur & Black Car — JFK LGA EWR Airport',
    template: '%s | Eagle Eye Chauffeur',
  },
  description: defaultSiteDescription,
  keywords: [...siteKeywords],
  authors: [{ name: 'Eagle Eye Chauffeur', url: siteUrl }],
  creator: 'Eagle Eye Chauffeur',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Eagle Eye Chauffeur',
    title: 'Eagle Eye Chauffeur | NYC Luxury Chauffeur & Black Car Service',
    description: defaultSiteDescription,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eagle Eye Chauffeur — luxury black car service in New York City',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eagle Eye Chauffeur | NYC Chauffeur & Airport Car Service',
    description: defaultSiteDescription,
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code for Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <LocalBusinessJsonLd />
        <SplashScreen />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <AnalyticsPlaceholder />
      </body>
    </html>
  );
}
