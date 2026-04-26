import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Hamptons Car Service | Eagle Eye Chauffeur NYC',
  description:
    'NYC to Hamptons car service. Luxury sedan & SUV transfers to East Hampton, Southampton, Montauk, Amagansett. Flat rates, flight tracking, 24/7. Book Eagle Eye Chauffeur.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/hamptons` },
};

export default function HamptonsPage() {
  return (
    <>
      <ServiceJsonLd
        name="Hamptons Car Service"
        description="Premium car service from NYC to the Hamptons. Transfers to East Hampton, Southampton, Montauk, and all Hamptons destinations."
        areaServed="The Hamptons, Long Island, NY"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Hamptons Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Premium transportation from NYC to the Hamptons. Whether you&apos;re heading 
              to East Hampton for the weekend, Southampton for a wedding, or Montauk for a 
              summer getaway — we get you there in comfort and style.
            </p>
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book Your Hamptons Ride
            </Link>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular Hamptons Routes
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Manhattan → East Hampton', price: '$350+', miles: '100 mi', time: '2h' },
                { from: 'Manhattan → Southampton', price: '$340+', miles: '95 mi', time: '1h 50m' },
                { from: 'Manhattan → Montauk', price: '$400+', miles: '120 mi', time: '2h 30m' },
                { from: 'Manhattan → Amagansett', price: '$360+', miles: '105 mi', time: '2h 10m' },
                { from: 'JFK → East Hampton', price: '$320+', miles: '85 mi', time: '1h 40m' },
                { from: 'East Hampton → Southampton', price: '$85+', miles: '15 mi', time: '25m' },
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
                Why Choose Eagle Eye for the Hamptons
              </h2>
              <ul className="space-y-3 text-brand-grey mb-6">
                <li><strong>Door-to-door service</strong> — pick up anywhere in NYC, drop off at your Hamptons home</li>
                <li><strong>No Jitney wait</strong> — private car, leave when you&apos;re ready</li>
                <li><strong>Luggage included</strong> — no baggage fees or limits</li>
                <li><strong>Summer weekend specials</strong> — ask about our weekend packages</li>
                <li><strong>Pet friendly</strong> — bring your dog along</li>
              </ul>
              <Link
                href="/book"
                className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book Your Hamptons Transfer
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
