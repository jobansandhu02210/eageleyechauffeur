import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Nassau County Car Service | Eagle Eye Chauffeur Long Island',
  description:
    'Nassau County car service — Mineola, Hempstead, Great Neck, Garden City, Hicksville. Airport transfers to JFK & LGA. Professional black car service 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/nassau-county` },
};

export default function NassauCountyPage() {
  return (
    <>
      <ServiceJsonLd
        name="Nassau County Car Service"
        description="Premium black car service throughout Nassau County, Long Island. Serving Great Neck, Garden City, Mineola, and all Nassau towns."
        areaServed="Nassau County, Long Island, NY"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Nassau County Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Reliable chauffeur service across all of Nassau County. From Great Neck to 
              Jones Beach, Garden City to Hicksville — we cover every Nassau town.
            </p>
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book Now
            </Link>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Nassau County Service Areas
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 text-brand-grey">
              {['Great Neck', 'Garden City', 'Mineola', 'Hempstead', 'Hicksville', 'Long Beach', 'Jones Beach', 'Roslyn', 'Manhasset', 'Port Washington', 'Glen Cove', 'Oyster Bay', 'Syosset', 'Plainview', 'Massapequa', 'Wantagh', 'Levittown', 'Uniondale'].map((town) => (
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
                Popular Routes from Nassau County
              </h2>
              <ul className="space-y-3 text-brand-grey mb-6">
                <li><strong>Nassau ↔ JFK Airport</strong> — 20-30 min drive</li>
                <li><strong>Nassau ↔ LGA Airport</strong> — 25-35 min drive</li>
                <li><strong>Nassau ↔ Manhattan</strong> — 35-50 min drive</li>
                <li><strong>Nassau ↔ Hamptons</strong> — 60-90 min drive</li>
              </ul>
              <Link
                href="/book"
                className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book Nassau County Transfer
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
