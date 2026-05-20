import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Newark Airport Car Service (EWR) | Eagle Eye Chauffeur NYC',
  description:
    'Newark Liberty Airport (EWR) car service to Manhattan and NYC. Black car, sedan & SUV transfers, flight tracking, meet & greet. 24/7 Newark airport transportation.',
  alternates: { canonical: `${getSiteUrl()}/services/airport/ewr` },
};

const ewrFaqs = [
  {
    q: 'How much is a car service from Newark Airport to Manhattan?',
    a: 'Prices start at $95 from EWR to Manhattan. This includes tolls for the Lincoln or Holland Tunnel — no hidden fees.',
  },
  {
    q: 'Do you track flights at Newark Liberty Airport?',
    a: 'Yes. We monitor your EWR flight in real-time and adjust your pickup automatically for delays or early arrivals at no extra charge.',
  },
  {
    q: 'Where does my driver meet me at EWR?',
    a: 'Your chauffeur meets you in the ground transportation area of your terminal with a name sign. We cover all three EWR terminals (A, B, C).',
  },
  {
    q: 'Are tolls included in the EWR price?',
    a: 'Yes. Tunnel and airport tolls are included in your quoted price. No surprise fees at the end of your ride.',
  },
];

export default function EWRPage() {
  return (
    <>
      <FaqJsonLd faqs={ewrFaqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Airport Transfers', url: `${getSiteUrl()}/services/airport` },
        { name: 'Newark Airport', url: `${getSiteUrl()}/services/airport/ewr` },
      ]} />
      <ServiceJsonLd
        name="Newark Airport Car Service"
        description="Premium Newark Liberty Airport transfers to Manhattan, Brooklyn, and New Jersey. Luxury sedan and SUV fleet, real-time flight tracking."
        areaServed="New York City, NY; Newark, NJ"
        url={`${getSiteUrl()}/services/airport/ewr`}
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Newark Airport (EWR) Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Seamless Newark Airport transfers to Manhattan, Brooklyn, and all of NYC. 
              Flight tracking, meet & greet, and door-to-door service in our luxury fleet.
            </p>
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book Your EWR Transfer
            </Link>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular EWR Routes
            </h2>
            <div className="space-y-3">
              {[
                { from: 'EWR ↔ Manhattan', price: '$95+', miles: '16 mi' },
                { from: 'EWR ↔ Brooklyn', price: '$95+', miles: '20 mi' },
                { from: 'EWR ↔ Queens', price: '$100+', miles: '22 mi' },
                { from: 'EWR ↔ New Jersey', price: '$55+', miles: '8 mi' },
                { from: 'EWR ↔ Westchester', price: '$120+', miles: '35 mi' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                EWR Airport Transfer Features
              </h2>
              <ul className="space-y-3 text-brand-grey mb-6">
                <li><strong>Meet & Greet at Arrivals</strong> — chauffeur waits with name sign</li>
                <li><strong>Flight tracking included</strong> — we monitor your flight, no extra charge</li>
                <li><strong>Tunnel & toll included</strong> — no hidden fees</li>
                <li><strong>24/7 availability</strong> — early morning and red-eye flights covered</li>
              </ul>
              <Link
                href="/book"
                className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book EWR Transfer
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Newark Airport Car Service FAQ
            </h2>
            <div className="space-y-4">
              {ewrFaqs.map((faq) => (
                <div key={faq.q} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-1">{faq.q}</h3>
                  <p className="text-sm text-brand-grey">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
