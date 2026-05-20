import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Brooklyn Chauffeur & Black Car Service | Eagle Eye NYC',
  description:
    'Luxury black car and chauffeur service in Brooklyn NYC. Airport transfers to JFK, LGA, EWR, hourly hire, and corporate travel. Professional drivers, flat-rate pricing. Book Eagle Eye Chauffeur.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/brooklyn` },
};

const faqs = [
  {
    q: 'Do you offer Brooklyn to JFK airport transfers?',
    a: 'Yes. Brooklyn to JFK is one of our most popular routes, starting at $75. Short drive, no surprises — your price is locked at booking.',
  },
  {
    q: 'What areas of Brooklyn do you serve?',
    a: 'We cover all of Brooklyn including DUMBO, Williamsburg, Park Slope, Downtown Brooklyn, Bay Ridge, Sheepshead Bay, Coney Island, Bensonhurst, Flatbush, and more.',
  },
  {
    q: 'Can I book a chauffeur for a Brooklyn event?',
    a: 'Absolutely. We provide chauffeur service for weddings, corporate events, and special occasions throughout Brooklyn. Hourly packages available.',
  },
  {
    q: 'How far in advance should I book a Brooklyn pickup?',
    a: 'We recommend at least 24 hours for standard rides. For events, weddings, or multiple vehicles, 48-72 hours is preferred.',
  },
];

export default function BrooklynPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
        { name: 'Brooklyn', url: `${getSiteUrl()}/services/areas/brooklyn` },
      ]} />
      <ServiceJsonLd
        name="Brooklyn Chauffeur Service"
        description="Premium black car and chauffeur service throughout Brooklyn, New York City. Airport transfers, hourly hire, and corporate travel."
        areaServed="Brooklyn, New York, NY"
        url={`${getSiteUrl()}/services/areas/brooklyn`}
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Brooklyn Chauffeur Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Executive black car service across all of Brooklyn. From DUMBO to Park Slope,
              Williamsburg to Downtown Brooklyn — arrive in style with a professional chauffeur at your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book Now
              </Link>
              <Link
                href="/services/routes/jfk-to-brooklyn"
                className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors"
              >
                JFK ↔ Brooklyn Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                Neighborhoods We Serve in Brooklyn
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-brand-grey">
                <li>DUMBO & Brooklyn Heights</li>
                <li>Williamsburg & Greenpoint</li>
                <li>Park Slope & Prospect Heights</li>
                <li>Downtown Brooklyn & Fort Greene</li>
                <li>Bay Ridge & Dyker Heights</li>
                <li>Sheepshead Bay & Marine Park</li>
                <li>Coney Island & Brighton Beach</li>
                <li>Bensonhurst & Gravesend</li>
                <li>Flatbush & Crown Heights</li>
                <li>Bushwick & East New York</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Airport routes */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Airport Transfers from Brooklyn
            </h2>
            <div className="space-y-3">
              {[
                { label: 'Brooklyn → JFK', price: '$75+', time: '25-40 min', href: '/services/routes/jfk-to-brooklyn' },
                { label: 'Brooklyn → LGA', price: '$65+', time: '25-40 min', href: '/services/airport/lga' },
                { label: 'Brooklyn → EWR', price: '$95+', time: '40-55 min', href: '/services/airport/ewr' },
                { label: 'Brooklyn → Manhattan', price: '$65+', time: '20-35 min', href: '/services/routes/manhattan-to-brooklyn' },
              ].map((r) => (
                <Link key={r.label} href={r.href} className="flex justify-between items-center bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
                  <span className="font-medium text-brand-black">{r.label}</span>
                  <span className="text-brand-grey text-sm">{r.price} · {r.time}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Brooklyn Chauffeur FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
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
