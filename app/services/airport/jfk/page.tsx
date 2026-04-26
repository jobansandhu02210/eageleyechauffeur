import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'JFK Airport Car Service | Eagle Eye Chauffeur NYC',
  description:
    'JFK to Manhattan car service starting at $85. Luxury black car, sedan & SUV, real-time flight tracking, meet & greet. 24/7 JFK airport transfers by Eagle Eye Chauffeur.',
  alternates: { canonical: `${getSiteUrl()}/services/airport/jfk` },
};

export default function JFKPage() {
  return (
    <>
      <ServiceJsonLd
        name="JFK Airport Car Service"
        description="Premium JFK airport transfer service. Luxury sedan and SUV, real-time flight tracking, and meet & greet at arrivals. Serving all NYC airports."
        areaServed="New York City, NY"
      />
      <div className="bg-brand-offwhite">
        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              JFK Airport Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Reliable JFK airport transfers with professional chauffeurs. 
              Flight tracking, meet & greet, and door-to-door service in luxury sedans and SUVs. 
              24/7 availability.
            </p>
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book Your JFK Transfer
            </Link>
          </div>
        </section>

        {/* Route pricing */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular JFK Routes
            </h2>
            <div className="space-y-3">
              {[
                { from: 'JFK ↔ Manhattan', price: '$85+', miles: '16 mi' },
                { from: 'JFK ↔ Brooklyn', price: '$75+', miles: '12 mi' },
                { from: 'JFK ↔ Queens', price: '$65+', miles: '8 mi' },
                { from: 'JFK ↔ Bronx', price: '$85+', miles: '20 mi' },
                { from: 'JFK ↔ Staten Island', price: '$95+', miles: '30 mi' },
                { from: 'JFK ↔ Westchester', price: '$110+', miles: '35 mi' },
                { from: 'JFK ↔ Long Island', price: '$70+', miles: '15 mi' },
                { from: 'JFK ↔ New Jersey', price: '$120+', miles: '25 mi' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                Why Book Your JFK Ride with Eagle Eye
              </h2>
              <ul className="space-y-3 text-brand-grey">
                <li><strong>Real-time flight tracking</strong> — we monitor your flight so we&apos;re there when you land, even if delayed</li>
                <li><strong>Meet & Greet</strong> — your chauffeur meets you at arrivals with a name sign</li>
                <li><strong>No surge pricing</strong> — your quote is locked when you book</li>
                <li><strong>Luxury fleet</strong> — perfectly maintained sedans and SUVs</li>
                <li><strong>24/7 support</strong> — call or WhatsApp anytime</li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/book"
                  className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
                >
                  Book JFK Transfer
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              JFK Car Service FAQ
            </h2>
            <div className="space-y-4">
              <div className="bg-brand-white border border-brand-light p-5">
                <h3 className="font-medium text-brand-black mb-1">How much is a car service from JFK to Manhattan?</h3>
                <p className="text-sm text-brand-grey">Prices start at $85 for a business sedan from JFK to Midtown Manhattan. The exact price depends on your drop-off location and vehicle choice.</p>
              </div>
              <div className="bg-brand-white border border-brand-light p-5">
                <h3 className="font-medium text-brand-black mb-1">Do you monitor flight delays?</h3>
                <p className="text-sm text-brand-grey">Yes. We track your flight in real-time so we adjust pickup timing automatically. No extra charge for delays.</p>
              </div>
              <div className="bg-brand-white border border-brand-light p-5">
                <h3 className="font-medium text-brand-black mb-1">Where does the chauffeur meet me at JFK?</h3>
                <p className="text-sm text-brand-grey">Your chauffeur meets you at the arrivals level with a name sign, just past baggage claim. You also get a WhatsApp message with the exact meeting spot before landing.</p>
              </div>
              <div className="bg-brand-white border border-brand-light p-5">
                <h3 className="font-medium text-brand-black mb-1">Do you offer child seats?</h3>
                <p className="text-sm text-brand-grey">Yes. Let us know when booking and we&apos;ll have a car seat ready at no extra charge.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
