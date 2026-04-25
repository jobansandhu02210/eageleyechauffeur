import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Long Island Car Service | Luxury Black Car | Eagle Eye Chauffeur',
  description:
    'Premium Long Island car service. Luxury black car rides to NYC airports, Manhattan, and the Hamptons. Professional chauffeur 24/7. Book Eagle Eye Chauffeur.',
  keywords: ['Long Island car service', 'Long Island chauffeur', 'Long Island black car NYC', 'Hamptons car service', 'Nassau County car service'],
  alternates: { canonical: `${getSiteUrl()}/services/areas/long-island` },
};

export default function LongIslandPage() {
  return (
    <>
      <ServiceJsonLd
        name="Long Island Car Service"
        description="Luxury black car and chauffeur service throughout Long Island, New York."
        areaServed="Long Island, New York"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
              Long Island Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl">
              Luxury chauffeur service across Nassau and Suffolk County. Airport transfers, corporate travel, and Hamptons rides done right.
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
              Areas We Serve on Long Island
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {['Garden City', 'Great Neck', 'Manhasset', 'Roslyn', 'Jericho', 'Syosset', 'Woodbury', 'Southampton', 'East Hampton', 'Bridgehampton', 'Huntington', 'Melville'].map((n, i) => (
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
              Popular Long Island Routes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Long Island to JFK Airport',
                'Long Island to LaGuardia (LGA)',
                'Long Island to Newark (EWR)',
                'Long Island to Manhattan',
                'Long Island to the Hamptons',
                'Great Neck to Midtown Manhattan',
                'Garden City to JFK',
                'Hamptons to NYC',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">Book Your Long Island Ride</h2>
            <p className="text-brand-grey mb-8">Available 24/7. Instant quote online or reach us on WhatsApp.</p>
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
