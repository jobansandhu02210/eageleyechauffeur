import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Westchester Airport Car Service | HPN Black Car | Eagle Eye Chauffeur',
  description:
    'Luxury HPN Westchester County Airport car service. Black car transfers to/from Manhattan, Westchester, Connecticut. Flight tracking, meet-and-greet. Book Eagle Eye Chauffeur.',
  keywords: ['HPN car service', 'Westchester airport transfer', 'Westchester County Airport black car', 'HPN limo service', 'White Plains airport car service'],
  alternates: { canonical: `${getSiteUrl()}/services/areas/hpn-airport` },
};

export default function HPNPage() {
  return (
    <>
      <ServiceJsonLd
        name="Westchester Airport Car Service"
        description="Luxury black car service to and from Westchester County Airport (HPN), White Plains, NY."
        areaServed="Westchester County Airport, White Plains, NY"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Airport Transfers</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
              Westchester Airport Car Service (HPN)
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl">
              The preferred choice for HPN transfers. Professional chauffeurs serving Westchester, Manhattan, and Connecticut from White Plains Airport.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Book HPN Transfer
              </Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
              Why Choose Eagle Eye for HPN?
            </h2>
            <ul className="space-y-4">
              {[
                'Local knowledge of Westchester roads and traffic patterns',
                'Real-time flight tracking for all HPN arrivals and departures',
                'Meet-and-greet at baggage claim',
                'Serve Westchester, Fairfield County CT, Manhattan, and NYC',
                'Perfect for corporate travelers preferring the smaller, quieter HPN terminal',
                'Fixed rates with no hidden fees',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-grey">
                  <span className="text-brand-black font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
              Popular HPN Routes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'HPN to Midtown Manhattan',
                'HPN to Greenwich, CT',
                'HPN to Stamford, CT',
                'HPN to White Plains',
                'HPN to Scarsdale / Larchmont',
                'HPN to Financial District NYC',
                'Manhattan to HPN',
                'Greenwich CT to HPN',
              ].map((route, i) => (
                <div key={i} className="flex items-center gap-3 p-3 border border-brand-light bg-brand-offwhite text-sm text-brand-dark">
                  <span className="text-brand-silver">→</span>
                  {route}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-offwhite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">Book Your HPN Transfer</h2>
            <p className="text-brand-grey mb-8">Instant quote online or reach us instantly on WhatsApp.</p>
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
