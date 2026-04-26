import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Westchester Airport Car Service (HPN) | Eagle Eye Chauffeur',
  description:
    'Westchester County Airport (HPN) car service to NYC and beyond. Luxury sedan & SUV, flight tracking, corporate travel. Book Eagle Eye Chauffeur.',
  alternates: { canonical: `${getSiteUrl()}/services/airport/hpn` },
};

export default function HPNPage() {
  return (
    <>
      <ServiceJsonLd
        name="Westchester County Airport Car Service"
        description="Premium Westchester County Airport transfers to Manhattan, Westchester, and Connecticut. Luxury fleet and professional chauffeurs."
        areaServed="New York City, NY; Westchester County, NY"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Westchester Airport (HPN) Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Premium Westchester County Airport transfers. Ideal for corporate travelers heading 
              to Manhattan, White Plains, Greenwich, and Stamford.
            </p>
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book HPN Transfer
            </Link>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular HPN Routes
            </h2>
            <div className="space-y-3">
              {[
                { from: 'HPN ↔ Manhattan', price: '$120+', miles: '35 mi' },
                { from: 'HPN ↔ Westchester', price: '$55+', miles: '5 mi' },
                { from: 'HPN ↔ Connecticut', price: '$65+', miles: '12 mi' },
                { from: 'HPN ↔ Bronx', price: '$95+', miles: '25 mi' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                HPN Airport Transfer Features
              </h2>
              <ul className="space-y-3 text-brand-grey mb-6">
                <li><strong>Corporate-ready</strong> — expense reports and receipts provided</li>
                <li><strong>Flight tracking</strong> — included at no extra cost</li>
                <li><strong>Professional chauffeurs</strong> — business attire, punctual service</li>
              </ul>
              <Link
                href="/book"
                className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book HPN Transfer
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
