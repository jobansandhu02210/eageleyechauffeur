import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Staten Island Car Service | Black Car & Chauffeur | Eagle Eye Chauffeur',
  description:
    'Premium black car and chauffeur service in Staten Island, NY. Luxury rides to JFK, LGA, EWR airports and Manhattan. Professional drivers 24/7. Book Eagle Eye Chauffeur.',
  keywords: ['Staten Island car service', 'Staten Island black car', 'Staten Island chauffeur', 'Staten Island to JFK', 'Staten Island to Manhattan'],
  alternates: { canonical: `${getSiteUrl()}/services/areas/staten-island` },
};

export default function StatenIslandPage() {
  return (
    <>
      <ServiceJsonLd
        name="Staten Island Car Service"
        description="Luxury black car and chauffeur service in Staten Island, New York City."
        areaServed="Staten Island, New York, NY"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
              Staten Island Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl">
              Reliable, professional black car service throughout Staten Island. Airport transfers, corporate commutes, and private rides handled with care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Book Now
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
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-6">
              Neighborhoods We Serve on Staten Island
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {['St. George', 'Stapleton', 'Tottenville', 'Great Kills', 'Annadale', 'New Dorp', 'Richmond', 'Eltingville', 'Huguenot', 'Rossville', 'Pleasant Plains', 'Prince\'s Bay'].map((n, i) => (
                <div key={i} className="p-3 bg-brand-white border border-brand-light text-sm text-brand-dark text-center">
                  {n}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
              Popular Routes from Staten Island
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Staten Island to JFK Airport',
                'Staten Island to Newark Airport (EWR)',
                'Staten Island to LaGuardia (LGA)',
                'Staten Island to Manhattan',
                'Staten Island to Brooklyn',
                'Staten Island to New Jersey',
                'St. George to Midtown Manhattan',
                'Tottenville to JFK',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">Book Your Staten Island Ride</h2>
            <p className="text-brand-grey mb-8">Available 24/7. Get a quote instantly or reach us on WhatsApp.</p>
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
