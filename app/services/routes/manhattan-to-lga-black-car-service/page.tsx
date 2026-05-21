import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Manhattan to LGA Black Car Service | Eagle Eye Chauffeur',
  description:
    'Manhattan to LaGuardia black car service — flat rates from $75, door-to-door pickup. NYC closest major airport, fast professional transfers. Book Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/manhattan-to-lga-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Manhattan to LGA?',
    a: 'Black car service from Manhattan to LaGuardia starts at $75 from Midtown. LGA is NYC\'s closest major airport — the ride is typically 20-30 minutes in normal traffic.',
  },
  {
    q: 'How early should I leave Manhattan for a LGA flight?',
    a: 'We recommend scheduling your pickup at least 2.5 hours before departure. During rush hour (7-9am and 5-8pm), the drive can take 35-50 minutes, so build in extra buffer.',
  },
  {
    q: 'Will my chauffeur come to my hotel or apartment in Manhattan?',
    a: 'Yes. Your driver picks you up directly at your Manhattan address — no rideshare corner, no curbside zone. Just step outside when your driver arrives.',
  },
  {
    q: 'Do you cover early morning departures from LGA?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. We confirm your driver the evening before for all early morning departures.',
  },
  {
    q: 'Which terminal at LGA do I depart from?',
    a: 'LGA has Terminal B (Delta, American) and Terminal C/D (United, Southwest, others). Your chauffeur drops you at the correct terminal based on your airline.',
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: 'Flat rate from $75 — locked at booking', uber: 'Surge pricing — doubles during rush hour' },
  { feature: 'Driver', blackCar: 'Licensed, TLC-certified professional chauffeur', uber: 'Variable — no luxury standard required' },
  { feature: 'Vehicle', blackCar: 'Luxury sedan or SUV, always clean', uber: 'Unknown vehicle class until assigned' },
  { feature: 'Pickup', blackCar: 'Door-to-door — chauffeur comes to your address', uber: 'Pin-drop, may not reach your exact door' },
  { feature: 'Reliability', blackCar: 'Driver confirmed the evening before departure', uber: 'Driver assigned close to pickup time' },
  { feature: 'Early Mornings', blackCar: 'Pre-dawn availability guaranteed', uber: 'Surge pricing spikes on early departures' },
];

export default function ManhattanToLGABlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Manhattan to LGA Black Car Service', url: `${getSiteUrl()}/services/routes/manhattan-to-lga-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Manhattan to LGA Black Car Service"
        description="Premium black car service from Manhattan to LaGuardia Airport. Flat rates from $75, door-to-door pickup, 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/manhattan-to-lga-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan to LGA Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              LaGuardia is the closest major airport to Manhattan — and with Eagle Eye Chauffeur,
              getting there is effortless. Flat-rate black car service from any Manhattan address,
              professional chauffeur at your door, and a price that does not move regardless of traffic or time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Manhattan to LGA
              </Link>
              <Link href="/services/airport/lga" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All LGA Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Manhattan to LGA Black Car Pricing
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Midtown Manhattan → LGA', price: '$75', time: '20–30 min', miles: '9 mi' },
                { from: 'Financial District / Wall Street → LGA', price: '$80', time: '25–40 min', miles: '12 mi' },
                { from: 'Times Square / Theater District → LGA', price: '$75', time: '20–30 min', miles: '9 mi' },
                { from: 'Upper East Side → LGA', price: '$75', time: '20–30 min', miles: '8 mi' },
                { from: 'Upper West Side → LGA', price: '$80', time: '25–35 min', miles: '10 mi' },
                { from: 'Chelsea / Meatpacking District → LGA', price: '$80', time: '25–35 min', miles: '10 mi' },
                { from: 'SoHo / Tribeca → LGA', price: '$80', time: '25–40 min', miles: '11 mi' },
                { from: 'Harlem → LGA', price: '$75', time: '20–30 min', miles: '8 mi' },
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
              Black Car Service vs. Uber for Manhattan to LGA
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
                <li><strong className="text-brand-black">Door-to-door pickup</strong> — your chauffeur arrives at your Manhattan address on time, every time.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. Traffic and rush hour never change it.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — you receive your driver details the evening before, not minutes before pickup.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — your chauffeur helps with bags at pickup and drop-off at the terminal.</li>
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
              <Link href="/services/routes/lga-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">LGA to Manhattan</div>
                <div className="text-sm text-brand-grey mt-1">Arrivals — black car from $75</div>
              </Link>
              <Link href="/services/airport/lga" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">LGA Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All LGA routes &amp; terminals</div>
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
              Manhattan to LGA Black Car — FAQ
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
                Book Your Manhattan to LGA Black Car
              </h2>
              <p className="text-brand-silver mb-6">Instant confirmation. Flat rate. Professional chauffeur at your door.</p>
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
