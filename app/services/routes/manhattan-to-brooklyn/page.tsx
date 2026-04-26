import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Manhattan to Brooklyn Car Service | Eagle Eye Chauffeur',
  description:
    'Fast Manhattan to Brooklyn chauffeur service. Williamsburg, DUMBO, Park Slope, Downtown Brooklyn. Flat rates, 24/7. Sedan & SUV available. Book now.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/manhattan-to-brooklyn` },
};

export default function ManhattanToBrooklynPage() {
  return (
    <>
      <ServiceJsonLd
        name="Manhattan to Brooklyn Car Service"
        description="Professional chauffeur service from Manhattan to Brooklyn. Serving Williamsburg, DUMBO, Park Slope, Greenpoint, and all Brooklyn neighborhoods."
        areaServed="Manhattan, NY; Brooklyn, NY"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan to Brooklyn Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Quick, comfortable rides from Manhattan to Brooklyn. Whether you&apos;re heading 
              to Williamsburg for dinner, DUMBO for a meeting, or Barclays Center for a show 
              — we get you across the bridge in comfort.
            </p>
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book Your Brooklyn Ride
            </Link>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular Destinations
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Midtown → Williamsburg', price: '$75+', time: '15 min' },
                { from: 'Midtown → DUMBO', price: '$75+', time: '15 min' },
                { from: 'Midtown → Park Slope', price: '$85+', time: '25 min' },
                { from: 'Financial District → Brooklyn Heights', price: '$65+', time: '10 min' },
                { from: 'Upper East Side → Greenpoint', price: '$85+', time: '20 min' },
                { from: 'Midtown → Barclays Center', price: '$80+', time: '20 min' },
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
                Why Eagle Eye for Cross-Borough Rides
              </h2>
              <ul className="space-y-3 text-brand-grey mb-6">
                <li><strong>No surge pricing</strong> — your quote is locked at booking</li>
                <li><strong>All bridges covered</strong> — Brooklyn Bridge, Manhattan Bridge, Williamsburg Bridge</li>
                <li><strong>Professional drivers</strong> — licensed and insured</li>
              </ul>
              <Link
                href="/book"
                className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
