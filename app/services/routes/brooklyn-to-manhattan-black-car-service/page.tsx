import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Brooklyn to Manhattan Car Service | Black Car NYC | Eagle Eye Chauffeur',
  description:
    'Brooklyn to Manhattan car service — flat rates, professional TLC-licensed chauffeur, door-to-door. No surge pricing. All Brooklyn neighborhoods. Book Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/brooklyn-to-manhattan-black-car-service` },
};

const faqs = [
  {
    q: 'How much does a black car service from Brooklyn to Manhattan cost?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Get an instant quote on our booking page by entering your Brooklyn address and Manhattan destination.',
  },
  {
    q: 'How long does it take from Brooklyn to Manhattan by black car?',
    a: 'Williamsburg and DUMBO to Midtown is typically 20–35 minutes; Park Slope to Midtown 25–40 minutes; Bay Ridge to Midtown 35–55 minutes. Your driver monitors traffic and takes the fastest route.',
  },
  {
    q: 'Do you serve all Brooklyn neighborhoods?',
    a: 'Yes. We pick up from every Brooklyn neighborhood — Williamsburg, DUMBO, Brooklyn Heights, Park Slope, Bay Ridge, Flatbush, Bushwick, Crown Heights, Sunset Park, Bensonhurst, and more.',
  },
  {
    q: 'Can I book a one-way trip from Brooklyn to Manhattan?',
    a: 'Absolutely. One-way point-to-point trips are our most common booking type. Book online for an instant confirmation.',
  },
  {
    q: 'Is there a minimum booking for Brooklyn to Manhattan rides?',
    a: 'Point-to-point rides have no minimum. Just enter your Brooklyn pickup and Manhattan destination on our booking page for an instant flat-rate quote.',
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: 'Flat rate — confirmed at booking, no changes', uber: 'Surge pricing in peak hours and bad weather' },
  { feature: 'Driver', blackCar: 'Licensed, TLC-certified professional chauffeur', uber: 'Variable — no luxury standard required' },
  { feature: 'Vehicle', blackCar: 'Luxury sedan or SUV, always clean', uber: 'Unknown until driver is assigned' },
  { feature: 'Pickup', blackCar: 'Exact address — door-to-door', uber: 'May require walking to a pickup zone' },
  { feature: 'Reliability', blackCar: 'Confirmed booking, driver notified in advance', uber: 'Driver can cancel last-minute' },
];

export default function BrooklynToManhattanPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Brooklyn to Manhattan Black Car Service', url: `${getSiteUrl()}/services/routes/brooklyn-to-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Brooklyn to Manhattan Black Car Service"
        description="Premium black car service from Brooklyn to Manhattan. Flat rates, professional TLC-licensed chauffeur, door-to-door from all Brooklyn neighborhoods."
        areaServed="Brooklyn, New York City, NY"
        url={`${getSiteUrl()}/services/routes/brooklyn-to-manhattan-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Brooklyn to Manhattan Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Skip the subway delays and rideshare surge. Eagle Eye Chauffeur provides flat-rate black
              car service from any Brooklyn neighborhood directly to your Manhattan destination — door
              to door, professional chauffeur, confirmed price before you book.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Brooklyn to Manhattan
              </Link>
              <Link href="/services/areas/brooklyn" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All Brooklyn Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular Brooklyn to Manhattan Routes
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Williamsburg → Midtown Manhattan', time: '20–35 min' },
                { from: 'DUMBO → Financial District', time: '10–20 min' },
                { from: 'Brooklyn Heights → Wall Street', time: '10–20 min' },
                { from: 'Park Slope → Midtown', time: '25–40 min' },
                { from: 'Flatbush → Midtown', time: '30–45 min' },
                { from: 'Bay Ridge → Midtown', time: '35–55 min' },
                { from: 'Bushwick → Lower East Side', time: '20–35 min' },
                { from: 'Crown Heights → Upper West Side', time: '30–45 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All rates flat and confirmed at booking. No surge pricing — ever. <Link href="/book" className="underline">Get an instant quote →</Link></p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Black Car vs. Uber for Brooklyn to Manhattan
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/areas/brooklyn" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Brooklyn Service</div>
                <div className="text-sm text-brand-grey mt-1">All Brooklyn rides &amp; hourly</div>
              </Link>
              <Link href="/services/routes/brooklyn-to-jfk-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Brooklyn to JFK</div>
                <div className="text-sm text-brand-grey mt-1">Airport transfers from Brooklyn</div>
              </Link>
              <Link href="/services/areas/manhattan" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan Service</div>
                <div className="text-sm text-brand-grey mt-1">All Manhattan rides &amp; hourly</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Brooklyn to Manhattan — FAQ
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

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-black p-8 text-center">
              <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
                Book Your Brooklyn to Manhattan Car Service
              </h2>
              <p className="text-brand-silver mb-6">Instant confirmation. Flat rate. Professional chauffeur.</p>
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Reserve Now
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
