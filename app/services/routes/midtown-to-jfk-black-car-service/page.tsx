import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Midtown Manhattan to JFK Black Car Service | Eagle Eye Chauffeur',
  description:
    'Midtown to JFK black car service — $85 flat rate, door-to-door pickup from hotels, offices, apartments. No surge pricing. Professional chauffeurs. Book Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/midtown-to-jfk-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Midtown to JFK?',
    a: 'Black car service from Midtown Manhattan to JFK is $85 flat. This covers all Midtown neighborhoods — Times Square, Grand Central, Penn Station, Hudson Yards, Rockefeller Center. No surge pricing, ever.',
  },
  {
    q: 'How long does the drive from Midtown to JFK take?',
    a: 'In normal traffic, Midtown to JFK takes 35-50 minutes via the Queens-Midtown Tunnel or the Queensboro Bridge. During morning rush hour (7-9am), allow 55-70 minutes.',
  },
  {
    q: 'Do you pick up from Midtown hotels?',
    a: 'Yes. We pick up directly at hotel entrances, apartment buildings, and offices throughout Midtown. Your driver pulls up to your exact address — no rideshare zones.',
  },
  {
    q: 'Can I book a black car for a corporate departure from Midtown?',
    a: 'Absolutely. We handle corporate accounts with monthly invoicing, multi-passenger bookings, and executive SUV options. Contact us to set up a business account.',
  },
  {
    q: 'What if my Midtown meeting runs late and I need to rush to JFK?',
    a: 'Call or WhatsApp us and we will do our best to accommodate a schedule change. As long as a vehicle is available, we can adjust pickup times.',
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: '$85 flat — locked at booking', uber: 'Surge pricing — unpredictable, especially peak hours' },
  { feature: 'Driver', blackCar: 'Licensed, TLC-certified professional chauffeur', uber: 'Variable — no luxury standard required' },
  { feature: 'Vehicle', blackCar: 'Luxury sedan or SUV, always clean', uber: 'Unknown vehicle class until assigned' },
  { feature: 'Pickup', blackCar: 'Hotel entrance or building door', uber: 'Rideshare zone — may require walking with luggage' },
  { feature: 'Corporate Use', blackCar: 'Invoicing, corporate accounts, multi-passenger', uber: 'Expense reports only — no dedicated account management' },
  { feature: 'Reliability', blackCar: 'Driver confirmed the evening before departure', uber: 'Driver assigned minutes before pickup' },
];

export default function MidtownToJFKBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Midtown to JFK Black Car Service', url: `${getSiteUrl()}/services/routes/midtown-to-jfk-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Midtown Manhattan to JFK Black Car Service"
        description="Premium black car service from Midtown Manhattan to JFK Airport. $85 flat rate, hotel and office pickup, 24/7 availability."
        areaServed="Midtown Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/midtown-to-jfk-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Midtown Manhattan to JFK Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              The most requested departure route in NYC — Midtown to JFK, done professionally.
              An $85 flat rate, pickup directly at your hotel or office entrance, and a confirmed
              chauffeur the night before your flight. No surge. No uncertainty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Midtown to JFK
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
              Midtown to JFK Pricing by Area
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Times Square / Theater District → JFK', price: '$85', time: '40–50 min', miles: '17 mi' },
                { from: 'Grand Central / Murray Hill → JFK', price: '$85', time: '35–45 min', miles: '16 mi' },
                { from: 'Penn Station / Hudson Yards → JFK', price: '$85', time: '40–55 min', miles: '17 mi' },
                { from: 'Rockefeller Center / Fifth Ave → JFK', price: '$85', time: '40–50 min', miles: '16 mi' },
                { from: 'Park Avenue / Midtown East → JFK', price: '$85', time: '35–45 min', miles: '16 mi' },
                { from: 'Javits Center / West Side → JFK', price: '$85', time: '40–55 min', miles: '18 mi' },
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
              Black Car Service vs. Uber for Midtown to JFK
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
                <li><strong className="text-brand-black">Hotel and office door pickup</strong> — your chauffeur pulls up directly to your Midtown entrance.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — $85 from Midtown to JFK, confirmed at booking. Traffic does not change it.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — you receive your driver details the evening before your trip.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — your chauffeur helps load bags from hotel lobby or building entrance.</li>
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
              Midtown to JFK Black Car — FAQ
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
                Book Your Midtown to JFK Black Car
              </h2>
              <p className="text-brand-silver mb-6">$85 flat. No surge. Professional chauffeur at your Midtown address.</p>
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
