import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'JFK to Brooklyn Car Service | Eagle Eye Chauffeur',
  description:
    'JFK to Brooklyn car service for $75+. Williamsburg, Park Slope, DUMBO, Downtown Brooklyn. Flight tracking, meet & greet. Book your JFK to Brooklyn ride.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/jfk-to-brooklyn` },
};

export default function JFKToBrooklynPage() {
  return (
    <>
      <ServiceJsonLd
        name="JFK to Brooklyn Car Service"
        description="Quick JFK to Brooklyn airport transfers. Fast, direct rides to Williamsburg, Park Slope, DUMBO, and all Brooklyn neighborhoods."
        areaServed="Brooklyn, NY; New York City, NY"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              JFK to Brooklyn Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Fast and direct JFK to Brooklyn transfers. JFK is the closest major airport to 
              Brooklyn — only 12 miles to Downtown Brooklyn. Professional chauffeur service 
              starting from $75.
            </p>
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book JFK to Brooklyn
            </Link>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              JFK to Brooklyn Pricing
            </h2>
            <div className="space-y-3">
              {[
                { from: 'JFK → Williamsburg', price: '$75+', time: '20-30 min' },
                { from: 'JFK → Downtown Brooklyn', price: '$75+', time: '20-30 min' },
                { from: 'JFK → Park Slope', price: '$70+', time: '20-30 min' },
                { from: 'JFK → DUMBO', price: '$75+', time: '20-30 min' },
                { from: 'JFK → Greenpoint', price: '$80+', time: '25-35 min' },
                { from: 'JFK → Coney Island', price: '$65+', time: '15-25 min' },
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
                Why JFK to Brooklyn with Eagle Eye
              </h2>
              <ul className="space-y-3 text-brand-grey mb-6">
                <li><strong>Closest airport to Brooklyn</strong> — fastest transfer option</li>
                <li><strong>No taxi line</strong> — pre-booked chauffeur waiting for you</li>
                <li><strong>Flat-rate pricing</strong> — no surge, no meter</li>
                <li><strong>Flight tracked</strong> — we know when you land</li>
              </ul>
              <Link
                href="/book"
                className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book JFK to Brooklyn
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
