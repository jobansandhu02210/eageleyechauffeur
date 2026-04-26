import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Suffolk County Car Service | Eagle Eye Chauffeur Long Island',
  description:
    'Suffolk County car service — Huntington, Smithtown, Riverhead, Patchogue, Ronkonkoma. Airport transfers, Hamptons service, corporate travel. Book now.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/suffolk-county` },
};

export default function SuffolkCountyPage() {
  return (
    <>
      <ServiceJsonLd
        name="Suffolk County Car Service"
        description="Professional chauffeur service throughout Suffolk County, Long Island. Serving Huntington, Smithtown, Riverhead, and all Suffolk towns."
        areaServed="Suffolk County, Long Island, NY"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Suffolk County Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Comprehensive chauffeur service across Suffolk County. From Huntington and 
              Smithtown to Riverhead and Montauk — we cover Suffolk from border to tip.
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
              Suffolk County Service Areas
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 text-brand-grey">
              {['Huntington', 'Smithtown', 'Riverhead', 'Patchogue', 'Ronkonkoma', 'Babylon', 'Islip', 'Commack', 'Deer Park', 'Brentwood', 'Centereach', 'Selden', 'Medford', 'Sayville', 'Port Jefferson', 'Stony Brook', 'Greenport', 'Montauk'].map((town) => (
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
                Popular Routes from Suffolk County
              </h2>
              <ul className="space-y-3 text-brand-grey mb-6">
                <li><strong>Suffolk ↔ JFK Airport</strong> — 40-60 min</li>
                <li><strong>Suffolk ↔ LGA Airport</strong> — 45-65 min</li>
                <li><strong>Suffolk ↔ Manhattan</strong> — 60-90 min</li>
                <li><strong>Suffolk ↔ Hamptons</strong> — 30-60 min</li>
                <li><strong>Suffolk ↔ Connecticut</strong> — ferry accessible</li>
              </ul>
              <Link
                href="/book"
                className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book Suffolk Transfer
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
