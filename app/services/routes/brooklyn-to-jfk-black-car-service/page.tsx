import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Brooklyn to JFK Black Car Service | Eagle Eye Chauffeur',
  description:
    'Brooklyn to JFK black car service — flat rates from $75, door-to-door pickup, real-time flight tracking. Professional chauffeurs from DUMBO, Williamsburg, Park Slope. Book 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/brooklyn-to-jfk-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Brooklyn to JFK?',
    a: 'Black car service from Brooklyn to JFK starts at $75, depending on your neighborhood. DUMBO, Brooklyn Heights, and Park Slope are typically $75. Farther neighborhoods like Sheepshead Bay or Bay Ridge may be slightly higher.',
  },
  {
    q: 'How long does it take from Brooklyn to JFK?',
    a: 'Brooklyn is the closest NYC borough to JFK — just 10-15 miles depending on your neighborhood. The drive takes 20-35 minutes in normal traffic. During peak hours, allow 40-55 minutes.',
  },
  {
    q: 'Do you pick up from all Brooklyn neighborhoods?',
    a: 'Yes. We serve all of Brooklyn — DUMBO, Williamsburg, Park Slope, Downtown Brooklyn, Brooklyn Heights, Bay Ridge, Sheepshead Bay, Flatbush, Crown Heights, Bushwick, and more.',
  },
  {
    q: 'Is black car service from Brooklyn to JFK worth it over the subway?',
    a: 'The JFK AirTrain requires a transfer and takes 60-90 minutes door-to-terminal. Black car service from most Brooklyn neighborhoods takes 20-35 minutes, door-to-terminal, with your luggage handled. For most travelers, the time saved and convenience is well worth the difference.',
  },
  {
    q: 'Can I get a black car from Brooklyn for an early morning JFK flight?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. Early morning departures from Brooklyn are fully covered — your driver is confirmed the evening before.',
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: 'Flat rate from $75 — locked at booking', uber: 'Surge pricing — spikes on early mornings and peak hours' },
  { feature: 'Driver', blackCar: 'Licensed, TLC-certified professional chauffeur', uber: 'Variable — no luxury standard required' },
  { feature: 'Vehicle', blackCar: 'Luxury sedan or SUV, always clean', uber: 'Unknown vehicle class until assigned' },
  { feature: 'Pickup', blackCar: 'Door-to-door from your Brooklyn address', uber: 'Pin-drop, may require walking to corner' },
  { feature: 'vs. AirTrain', blackCar: '20-35 min direct, door-to-terminal', uber: 'Similar to AirTrain in timing with surge risk' },
  { feature: 'Reliability', blackCar: 'Driver confirmed the evening before', uber: 'Driver assigned close to pickup time' },
];

export default function BrooklynToJFKBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Brooklyn to JFK Black Car Service', url: `${getSiteUrl()}/services/routes/brooklyn-to-jfk-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Brooklyn to JFK Black Car Service"
        description="Premium black car service from Brooklyn to JFK Airport. Flat rates from $75, door-to-door pickup from all Brooklyn neighborhoods. 24/7 availability."
        areaServed="Brooklyn, New York City, NY"
        url={`${getSiteUrl()}/services/routes/brooklyn-to-jfk-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Brooklyn to JFK Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Brooklyn is the closest NYC borough to JFK — and Eagle Eye Chauffeur makes the most of it.
              Flat-rate black car pickup from any Brooklyn neighborhood, professional chauffeur at your door,
              and a price that does not surge at 5am on a Monday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Brooklyn to JFK
              </Link>
              <Link href="/services/airport/jfk" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All JFK Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Brooklyn to JFK Black Car Pricing by Neighborhood
            </h2>
            <div className="space-y-3">
              {[
                { from: 'DUMBO / Brooklyn Heights → JFK', price: '$75', time: '20–30 min', miles: '10 mi' },
                { from: 'Williamsburg / Greenpoint → JFK', price: '$75', time: '20–30 min', miles: '11 mi' },
                { from: 'Park Slope / Prospect Heights → JFK', price: '$75', time: '20–30 min', miles: '10 mi' },
                { from: 'Downtown Brooklyn / Fort Greene → JFK', price: '$75', time: '20–30 min', miles: '10 mi' },
                { from: 'Crown Heights / Flatbush → JFK', price: '$75', time: '15–25 min', miles: '8 mi' },
                { from: 'Bay Ridge / Dyker Heights → JFK', price: '$80', time: '25–35 min', miles: '13 mi' },
                { from: 'Sheepshead Bay / Marine Park → JFK', price: '$80', time: '20–30 min', miles: '11 mi' },
                { from: 'Bushwick / East New York → JFK', price: '$75', time: '15–25 min', miles: '8 mi' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.price} flat · {r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All prices are flat rate. Gratuity and tolls included. No surge pricing — ever.</p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Black Car Service vs. Uber for Brooklyn to JFK
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
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                What Is Included in Every Booking
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">Door-to-door pickup</strong> — your chauffeur arrives at your Brooklyn address, not a nearby corner.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking and never changes due to traffic or demand.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — you receive your driver details the evening before, not minutes before pickup.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — your chauffeur helps load and unload bags at every stop.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/jfk-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK to Manhattan</div>
                <div className="text-sm text-brand-grey mt-1">Arrivals — black car from $85</div>
              </Link>
              <Link href="/services/airport/jfk" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All JFK routes &amp; terminals</div>
              </Link>
              <Link href="/services/areas/brooklyn" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Brooklyn Service</div>
                <div className="text-sm text-brand-grey mt-1">All Brooklyn rides &amp; hourly</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Brooklyn to JFK Black Car — FAQ
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
                Book Your Brooklyn to JFK Black Car
              </h2>
              <p className="text-brand-silver mb-6">Flat rate. No surge. Professional chauffeur at your Brooklyn door.</p>
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
