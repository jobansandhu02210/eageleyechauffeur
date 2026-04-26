import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'JFK to Manhattan Car Service | Eagle Eye Chauffeur',
  description:
    'JFK to Manhattan car service — luxury black car, sedan & SUV. Flat rates from $85, flight tracking, meet & greet. 24/7 JFK airport transfers. Book online.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/jfk-to-manhattan` },
};

export default function JFKToManhattanPage() {
  return (
    <>
      <ServiceJsonLd
        name="JFK to Manhattan Car Service"
        description="Premium JFK to Manhattan airport transfer. Luxury sedan and SUV, flight tracking, meet & greet at arrivals. 24/7 flat-rate pricing."
        areaServed="New York City, NY"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              JFK to Manhattan Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              The most popular JFK route — direct transfers from JFK Airport to anywhere in Manhattan. 
              Business sedan from $85, flight tracking included, meet & greet at arrivals.
            </p>
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book JFK to Manhattan
            </Link>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              JFK to Manhattan Pricing
            </h2>
            <div className="space-y-3">
              {[
                { from: 'JFK → Midtown', price: '$85+', time: '35-50 min', miles: '16 mi' },
                { from: 'JFK → Financial District', price: '$85+', time: '35-50 min', miles: '16 mi' },
                { from: 'JFK → Upper East Side', price: '$90+', time: '40-55 min', miles: '18 mi' },
                { from: 'JFK → Upper West Side', price: '$95+', time: '45-60 min', miles: '19 mi' },
                { from: 'JFK → Times Square', price: '$85+', time: '40-50 min', miles: '17 mi' },
                { from: 'JFK → Chelsea', price: '$85+', time: '35-50 min', miles: '16 mi' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.price} · {r.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                What You Get
              </h2>
              <ul className="space-y-3 text-brand-grey mb-6">
                <li><strong>Meet & Greet</strong> — chauffeur waits with name sign at arrivals</li>
                <li><strong>Flight tracking</strong> — auto-adjusted pickup for delays</li>
                <li><strong>No surge</strong> — price locked at booking</li>
                <li><strong>Sedan or SUV</strong> — choose your vehicle</li>
              </ul>
              <Link
                href="/book"
                className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book JFK to Manhattan
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
