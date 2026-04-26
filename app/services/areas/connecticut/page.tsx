import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Connecticut Car Service | Eagle Eye Chauffeur NYC',
  description:
    'NYC to Connecticut car service — Stamford, Greenwich, Norwalk, Darien, New Haven. Airport transfers to JFK, LGA, HPN. Professional chauffeur service.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/connecticut` },
};

export default function ConnecticutPage() {
  return (
    <>
      <ServiceJsonLd
        name="Connecticut Car Service"
        description="Premium car service from NYC to Connecticut. Serving Stamford, Greenwich, Norwalk, Darien, New Haven, and all CT towns."
        areaServed="Connecticut, USA"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Connecticut Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Professional chauffeur service from NYC to Connecticut. Serving Stamford, 
              Greenwich, Norwalk, Darien, New Canaan, Westport, and Fairfield County.
            </p>
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book Your CT Ride
            </Link>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Connecticut Service Areas
            </h2>
            <div className="grid sm:grid-cols-3 gap-3 text-brand-grey">
              {['Stamford', 'Greenwich', 'Norwalk', 'Darien', 'New Canaan', 'Westport', 'Fairfield', 'Bridgeport', 'Danbury', 'New Haven', 'Milford', 'Shelton', 'Trumbull', 'Stratford', 'Ridgefield', 'Wilton', 'Wallingford', 'Southbury'].map((town) => (
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
                CT Airport Transfers
              </h2>
              <ul className="space-y-3 text-brand-grey mb-6">
                <li><strong>Connecticut ↔ JFK</strong> — 50-90 min drive</li>
                <li><strong>Connecticut ↔ LGA</strong> — 45-75 min drive</li>
                <li><strong>Connecticut ↔ HPN</strong> — 20-40 min drive</li>
                <li><strong>Connecticut ↔ Manhattan</strong> — 60-90 min drive</li>
              </ul>
              <Link
                href="/book"
                className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book Connecticut Transfer
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
