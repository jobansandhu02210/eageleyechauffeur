import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Brooklyn Black Car Service | Airport Transfers & Chauffeur NYC | Eagle Eye',
  description:
    'Brooklyn black car service — airport transfers to JFK, LGA, EWR from all Brooklyn neighborhoods. Flat-rate pricing, no surge. Professional chauffeurs. Book Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/brooklyn` },
};

const faqs = [
  {
    q: 'How much is a black car from Brooklyn to JFK Airport?',
    a: 'Brooklyn to JFK black car service starts at $75 — flat rate, no surge pricing. Most Brooklyn neighborhoods are 20-35 minutes from JFK.',
  },
  {
    q: 'What neighborhoods in Brooklyn do you serve?',
    a: 'We cover all of Brooklyn including DUMBO, Williamsburg, Park Slope, Downtown Brooklyn, Brooklyn Heights, Bay Ridge, Sheepshead Bay, Coney Island, Bensonhurst, Flatbush, Crown Heights, Bushwick, and more.',
  },
  {
    q: 'Is Brooklyn black car service more reliable than Uber for airport trips?',
    a: 'Yes. With Eagle Eye, your driver is confirmed the evening before your trip. Your price is flat — no surge at 5am on a Monday. And your chauffeur helps with luggage. Uber offers none of these guarantees.',
  },
  {
    q: 'Can I book a black car for a Brooklyn event or wedding?',
    a: 'Absolutely. We provide chauffeur service for weddings, corporate events, and special occasions throughout Brooklyn. Hourly packages available.',
  },
  {
    q: 'How far in advance should I book a Brooklyn black car pickup?',
    a: 'We recommend at least 24 hours for standard rides. For events, weddings, or multiple vehicles, 48-72 hours is preferred.',
  },
];

const comparisonRows = [
  { feature: 'Price to JFK', blackCar: 'From $75 flat — locked at booking', uber: 'Surge pricing — spikes on early mornings and peak hours' },
  { feature: 'Driver', blackCar: 'Licensed, TLC-certified professional chauffeur', uber: 'Variable — no luxury standard required' },
  { feature: 'Vehicle', blackCar: 'Luxury sedan or SUV, always clean', uber: 'Unknown vehicle class until assigned' },
  { feature: 'Pickup', blackCar: 'Building entrance, any Brooklyn address', uber: 'Pin-drop, may require walking to corner' },
  { feature: 'Reliability', blackCar: 'Driver confirmed the evening before', uber: 'Driver assigned minutes before pickup' },
  { feature: 'Luggage Help', blackCar: 'Yes — chauffeur assists at pickup and drop-off', uber: 'No' },
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
        name="Brooklyn Black Car Service"
        description="Premium black car and chauffeur service throughout Brooklyn, New York City. Airport transfers to JFK, LGA, EWR, hourly hire, and corporate travel."
        areaServed="Brooklyn, New York, NY"
        url={`${getSiteUrl()}/services/areas/brooklyn`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Brooklyn Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Executive black car service across all of Brooklyn. From DUMBO to Park Slope,
              Williamsburg to Downtown Brooklyn — flat-rate pricing, professional chauffeur at your door,
              and no surge pricing for JFK airport transfers or anywhere else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Now
              </Link>
              <Link href="/services/routes/brooklyn-to-jfk-black-car-service" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                Brooklyn → JFK Pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Brooklyn Black Car vs. Uber
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-black text-brand-white">
                    <th className="text-left p-3 font-medium">Feature</th>
                    <th className="text-left p-3 font-medium">Eagle Eye Black Car</th>
                    <th className="text-left p-3 font-medium">Uber / Rideshare</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-brand-white' : 'bg-brand-offwhite'}>
                      <td className="p-3 font-medium text-brand-black">{row.feature}</td>
                      <td className="p-3 text-brand-grey">{row.blackCar}</td>
                      <td className="p-3 text-brand-grey">{row.uber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                Neighborhoods We Serve in Brooklyn
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-brand-grey">
                <li>DUMBO &amp; Brooklyn Heights</li>
                <li>Williamsburg &amp; Greenpoint</li>
                <li>Park Slope &amp; Prospect Heights</li>
                <li>Downtown Brooklyn &amp; Fort Greene</li>
                <li>Bay Ridge &amp; Dyker Heights</li>
                <li>Sheepshead Bay &amp; Marine Park</li>
                <li>Coney Island &amp; Brighton Beach</li>
                <li>Bensonhurst &amp; Gravesend</li>
                <li>Flatbush &amp; Crown Heights</li>
                <li>Bushwick &amp; East New York</li>
                <li>Red Hook &amp; Carroll Gardens</li>
                <li>Cobble Hill &amp; Boerum Hill</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Airport Black Car Transfers from Brooklyn
            </h2>
            <div className="space-y-3">
              {[
                { label: 'Brooklyn to JFK Black Car', price: '$75+', time: '20–35 min', href: '/services/routes/brooklyn-to-jfk-black-car-service' },
                { label: 'Brooklyn to LGA Black Car', price: '$65+', time: '25–40 min', href: '/services/airport/lga' },
                { label: 'Brooklyn to EWR Black Car', price: '$95+', time: '40–55 min', href: '/services/airport/ewr' },
                { label: 'Brooklyn to Manhattan Black Car', price: '$65+', time: '20–35 min', href: '/services/routes/manhattan-to-brooklyn' },
              ].map((r) => (
                <Link key={r.label} href={r.href} className="flex justify-between items-center bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
                  <span className="font-medium text-brand-black">{r.label}</span>
                  <span className="text-brand-grey text-sm">{r.price} · {r.time}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Brooklyn Black Car Service — FAQ
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
