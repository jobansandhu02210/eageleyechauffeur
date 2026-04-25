import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Bronx Car Service | Black Car & Chauffeur | Eagle Eye Chauffeur',
  description:
    'Luxury black car and chauffeur service in the Bronx, NY. Airport transfers to JFK, LGA, EWR, rides to Manhattan and beyond. Professional drivers 24/7.',
  keywords: ['Bronx car service', 'Bronx black car', 'Bronx chauffeur service', 'Bronx to JFK', 'Bronx to Manhattan car service'],
  alternates: { canonical: `${getSiteUrl()}/services/areas/bronx` },
};

export default function BronxPage() {
  return (
    <>
      <ServiceJsonLd
        name="Bronx Car Service"
        description="Luxury black car and chauffeur service in the Bronx, New York City."
        areaServed="The Bronx, New York, NY"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
              Bronx Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl">
              Professional black car service throughout the Bronx. Airport transfers, corporate rides, and point-to-point travel — done with style.
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
              Neighborhoods We Serve in the Bronx
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {['Riverdale', 'Fordham', 'Pelham Bay', 'Co-op City', 'Morris Park', 'Hunts Point', 'Kingsbridge', 'Throgs Neck', 'City Island', 'Woodlawn', 'Norwood', 'Mott Haven'].map((n, i) => (
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
              Popular Routes from the Bronx
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Bronx to JFK Airport',
                'Bronx to LaGuardia (LGA)',
                'Bronx to Newark Airport (EWR)',
                'Bronx to Manhattan',
                'Bronx to Westchester',
                'Bronx to Brooklyn',
                'Riverdale to Midtown',
                'Co-op City to JFK',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">Book Your Bronx Ride</h2>
            <p className="text-brand-grey mb-8">Available 24/7. Instant quote or message us directly on WhatsApp.</p>
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
