import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Manhattan to Newark Airport Black Car Service | Eagle Eye Chauffeur',
  description:
    'Manhattan to EWR black car service — flat rates from $95, all tolls included, door-to-door pickup. Professional chauffeurs, no hidden fees. Book Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/manhattan-to-ewr-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Manhattan to Newark Airport?',
    a: 'Black car service from Manhattan to EWR starts at $95. This flat rate includes all tolls — Lincoln Tunnel or Holland Tunnel. No fees added at the end of your ride.',
  },
  {
    q: 'How far in advance should I leave Manhattan for a EWR flight?',
    a: 'We recommend scheduling pickup at least 3 hours before your flight. The drive is 30-45 minutes in normal traffic, but the Lincoln Tunnel approach can add 20-30 minutes during peak hours.',
  },
  {
    q: 'Are tunnel tolls included in the price?',
    a: 'Yes. All tolls — including the Lincoln or Holland Tunnel and the airport toll — are included in your flat rate. Zero surprise fees when you arrive.',
  },
  {
    q: 'Which Newark Airport terminal will I be dropped at?',
    a: 'Your driver drops you at the correct departures terminal based on your airline. EWR has Terminal A (United domestic), Terminal B (American, international carriers), and Terminal C (United international). Just confirm your airline when booking.',
  },
  {
    q: 'Do you handle large luggage for EWR departures?',
    a: 'Yes. Our SUV option (Escalade or similar) accommodates large bags and multiple passengers comfortably. Mention your luggage count when booking.',
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: 'Flat rate from $95 — all tolls included', uber: 'Base fare + surge + tolls added on top' },
  { feature: 'Driver', blackCar: 'Licensed, TLC-certified professional chauffeur', uber: 'Variable — no luxury standard required' },
  { feature: 'Vehicle', blackCar: 'Luxury sedan or SUV, always clean', uber: 'Unknown vehicle class until assigned' },
  { feature: 'Pickup', blackCar: 'Door-to-door — chauffeur at your address', uber: 'Pin-drop, may not reach your exact building' },
  { feature: 'Reliability', blackCar: 'Driver confirmed the evening before departure', uber: 'Driver assigned close to pickup time' },
  { feature: 'Hidden Fees', blackCar: 'None — tolls and tips all included', uber: 'Tolls charged separately on top of fare' },
];

export default function ManhattanToEWRBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Manhattan to Newark Airport Black Car Service', url: `${getSiteUrl()}/services/routes/manhattan-to-ewr-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Manhattan to Newark Airport Black Car Service"
        description="Premium black car service from Manhattan to Newark Liberty Airport (EWR). Flat rates from $95, all tolls included, door-to-door pickup, 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/manhattan-to-ewr-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan to Newark Airport Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Getting from Manhattan to EWR without the stress of surge pricing or hidden tunnel fees.
              Flat-rate black car service — all tolls included, professional chauffeur at your door,
              and a confirmed driver the night before your departure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Manhattan to EWR
              </Link>
              <Link href="/services/airport/ewr" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All EWR Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Manhattan to EWR Black Car Pricing
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Midtown Manhattan → EWR', price: '$95', time: '30–45 min', miles: '16 mi' },
                { from: 'Financial District / Wall Street → EWR', price: '$95', time: '30–45 min', miles: '15 mi' },
                { from: 'Times Square / Theater District → EWR', price: '$95', time: '30–45 min', miles: '16 mi' },
                { from: 'Chelsea / Meatpacking District → EWR', price: '$95', time: '30–45 min', miles: '16 mi' },
                { from: 'Upper East Side → EWR', price: '$100', time: '40–55 min', miles: '19 mi' },
                { from: 'Upper West Side → EWR', price: '$100', time: '40–55 min', miles: '19 mi' },
                { from: 'SoHo / Tribeca → EWR', price: '$95', time: '30–45 min', miles: '15 mi' },
                { from: 'Harlem → EWR', price: '$105', time: '45–60 min', miles: '21 mi' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.price} flat · {r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All prices are flat rate. Tolls and gratuity included. No surge pricing — ever.</p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Black Car Service vs. Uber for Manhattan to Newark Airport
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
                <li><strong className="text-brand-black">Door-to-door pickup</strong> — your chauffeur arrives at your Manhattan address on time.</li>
                <li><strong className="text-brand-black">All tolls included</strong> — Lincoln or Holland Tunnel plus airport tolls are in your quoted price. No extras.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking and does not change due to traffic or demand.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — you receive your driver details the evening before, not minutes before pickup.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — your chauffeur helps with bags at pickup and terminal drop-off.</li>
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
              <Link href="/services/routes/ewr-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">EWR to Manhattan</div>
                <div className="text-sm text-brand-grey mt-1">Arrivals — black car from $95</div>
              </Link>
              <Link href="/services/airport/ewr" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">EWR Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All EWR routes &amp; terminals</div>
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
              Manhattan to Newark Airport Black Car — FAQ
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
                Book Your Manhattan to Newark Black Car
              </h2>
              <p className="text-brand-silver mb-6">Flat rate. All tolls included. Professional chauffeur at your door.</p>
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
