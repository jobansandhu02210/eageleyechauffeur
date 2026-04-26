import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Upstate NY Car Service | Eagle Eye Chauffeur NYC',
  description:
    'NYC to Upstate New York car service — Albany, Buffalo, Rochester, Syracuse, Hudson Valley. Long-distance chauffeur service. Luxury sedan & SUV.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/upstate-ny` },
};

export default function UpstateNYPage() {
  return (
    <>
      <ServiceJsonLd
        name="Upstate New York Car Service"
        description="Long-distance chauffeur service from NYC to Upstate New York. Serving Albany, Hudson Valley, Saratoga, and all Upstate NY destinations."
        areaServed="New York State, USA"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Upstate New York Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Long-distance chauffeur service from NYC to Upstate New York. Hudson Valley, 
              Catskills, Albany, Saratoga Springs — comfortable sedan and SUV for any trip.
            </p>
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book Your Upstate Ride
            </Link>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Upstate NY Service Areas
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 text-brand-grey">
              {['Albany', 'Hudson Valley', 'Saratoga Springs', 'Catskills', 'Poughkeepsie', 'Kingston', 'New Paltz', 'Beacon', 'Cold Spring', 'Woodstock', 'Rhinebeck', 'Lake George', 'Schenectady', 'Troy', 'Ithaca', 'Syracuse', 'Rochester', 'Buffalo'].map((town) => (
                <div key={town} className="bg-brand-white border border-brand-light p-3 font-medium text-brand-black">
                  {town}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                Popular Upstate Routes
              </h2>
              <ul className="space-y-3 text-brand-grey mb-6">
                <li><strong>NYC ↔ Hudson Valley</strong> — 90 min drive</li>
                <li><strong>NYC ↔ Albany</strong> — 2.5 hour drive</li>
                <li><strong>NYC ↔ Catskills</strong> — 2 hour drive</li>
                <li><strong>NYC ↔ Saratoga Springs</strong> — 3 hour drive</li>
                <li><strong>JFK ↔ Hudson Valley</strong> — 90 min drive</li>
              </ul>
              <Link
                href="/book"
                className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book Upstate Transfer
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
