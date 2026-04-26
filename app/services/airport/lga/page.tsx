import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LaGuardia Airport Car Service (LGA) | Eagle Eye Chauffeur',
  description:
    'LGA airport car service in NYC — sedan & SUV transfers to Manhattan, Brooklyn, Queens. Flight tracking, meet & greet, flat-rate pricing. Book Eagle Eye Chauffeur.',
  alternates: { canonical: `${getSiteUrl()}/services/airport/lga` },
};

export default function LGAPage() {
  return (
    <>
      <ServiceJsonLd
        name="LaGuardia Airport Car Service"
        description="Professional LaGuardia airport transfers to Manhattan and all NYC boroughs. Luxury fleet, flight tracking, meet & greet."
        areaServed="New York City, NY"
      />
      <div className="bg-brand-offwhite">
        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              LaGuardia Airport (LGA) Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Fast, professional LaGuardia airport transfers. Only 20 minutes from Midtown — 
              be at Javits Center, Times Square, or your Upper East Side hotel before you know it.
            </p>
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book Your LGA Transfer
            </Link>
          </div>
        </section>

        {/* Routes */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular LGA Routes
            </h2>
            <div className="space-y-3">
              {[
                { from: 'LGA ↔ Manhattan', price: '$75+', miles: '9 mi' },
                { from: 'LGA ↔ Brooklyn', price: '$65+', miles: '12 mi' },
                { from: 'LGA ↔ Queens', price: '$55+', miles: '5 mi' },
                { from: 'LGA ↔ Bronx', price: '$70+', miles: '12 mi' },
                { from: 'LGA ↔ Long Island', price: '$75+', miles: '15 mi' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                Why Eagle Eye for LGA Transfers
              </h2>
              <ul className="space-y-3 text-brand-grey mb-6">
                <li><strong>Close & convenient</strong> — LGA is NYC&apos;s closest airport to Midtown</li>
                <li><strong>Flight tracking</strong> — we adjust for any delays automatically</li>
                <li><strong>Transparent pricing</strong> — no surprises, no surge</li>
                <li><strong>Professional chauffeurs</strong> — licensed, insured, uniformed</li>
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
