import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Westchester Airport Car Service (HPN) | Eagle Eye Chauffeur',
  description:
    'Westchester County Airport (HPN) car service to NYC and beyond. Luxury sedan & SUV, flight tracking, corporate travel. Book Eagle Eye Chauffeur.',
  alternates: { canonical: `${getSiteUrl()}/services/airport/hpn` },
};

const hpnFaqs = [
  {
    q: 'How much is a car service from Westchester Airport (HPN) to Manhattan?',
    a: 'Prices start at $120 for a business sedan from HPN to Manhattan, typically a 35-50 minute ride depending on traffic.',
  },
  {
    q: 'Do you track flights at Westchester Airport?',
    a: 'Yes. We monitor your HPN flight and adjust pickup timing automatically. No extra charge for delays.',
  },
  {
    q: 'Is HPN good for corporate travelers avoiding JFK and LGA?',
    a: 'Absolutely. HPN is far less congested than JFK or LGA, making it ideal for executives who value time. Quick check-in and minimal security lines.',
  },
  {
    q: 'Do you serve Greenwich and Stamford from HPN?',
    a: 'Yes. We regularly transfer passengers from HPN to Greenwich, Stamford, and other Connecticut destinations. Ask for a custom quote.',
  },
];

export default function HPNPage() {
  return (
    <>
      <FaqJsonLd faqs={hpnFaqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Airport Transfers', url: `${getSiteUrl()}/services/airport` },
        { name: 'Westchester Airport', url: `${getSiteUrl()}/services/airport/hpn` },
      ]} />
      <ServiceJsonLd
        name="Westchester County Airport Car Service"
        description="Premium Westchester County Airport transfers to Manhattan, Westchester, and Connecticut. Luxury fleet and professional chauffeurs."
        areaServed="New York City, NY; Westchester County, NY"
        url={`${getSiteUrl()}/services/airport/hpn`}
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

        <section className="pb-16">
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

        {/* FAQ */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Westchester Airport Car Service FAQ
            </h2>
            <div className="space-y-4">
              {hpnFaqs.map((faq) => (
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
