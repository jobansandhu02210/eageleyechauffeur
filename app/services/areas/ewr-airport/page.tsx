import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Newark Airport Car Service | EWR Black Car NYC | Eagle Eye Chauffeur',
  description:
    'Luxury Newark EWR airport car service from NYC. Black car transfers to/from Manhattan, Brooklyn, Queens. Flight tracking, meet-and-greet. Book Eagle Eye Chauffeur.',
  keywords: ['Newark airport car service', 'EWR black car NYC', 'EWR airport transfer Manhattan', 'Newark Liberty car service', 'EWR limo NYC'],
  alternates: { canonical: `${getSiteUrl()}/services/areas/ewr-airport` },
};

export default function EWRPage() {
  return (
    <>
      <ServiceJsonLd
        name="Newark Airport Car Service"
        description="Luxury black car and chauffeur service to and from Newark Liberty International Airport (EWR)."
        areaServed="Newark Liberty International Airport, Newark, NJ"
      />
      <div className="bg-brand-offwhite">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Airport Transfers</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
              Newark Airport Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl">
              Premium EWR transfers from Manhattan and all NYC boroughs. We handle the NJ traffic — you relax.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Book EWR Transfer
              </Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
              Why Choose Eagle Eye for EWR?
            </h2>
            <ul className="space-y-4">
              {[
                'We know the NJ Turnpike and Lincoln Tunnel routes — always the fastest path',
                'Real-time flight tracking for all EWR terminals (A, B, C)',
                'Meet-and-greet at baggage claim with personalized sign',
                'Fixed pricing — no surprise tolls or fees added later',
                'Available 24/7 including red-eye and early morning departures',
                'All vehicle classes: Business Sedan, Business SUV, First Class options',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-grey">
                  <span className="text-brand-black font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Popular routes */}
        <section className="py-16 lg:py-20 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
              Popular EWR Routes We Serve
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'EWR to Midtown Manhattan',
                'EWR to Financial District / Wall Street',
                'EWR to Upper East / West Side',
                'EWR to Brooklyn',
                'EWR to Queens',
                'EWR to Long Island',
                'EWR to Westchester County',
                'EWR to Connecticut',
                'Manhattan to EWR',
                'Brooklyn to EWR',
              ].map((route, i) => (
                <div key={i} className="flex items-center gap-3 p-3 border border-brand-light bg-brand-offwhite text-sm text-brand-dark">
                  <span className="text-brand-silver">→</span>
                  {route}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-offwhite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">Book Your EWR Transfer Today</h2>
            <p className="text-brand-grey mb-8">Instant quote online or message us on WhatsApp. Confirmation within minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Get an Instant Quote
              </Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
