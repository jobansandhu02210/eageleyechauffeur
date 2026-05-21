import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Manhattan to JFK Black Car Service | Eagle Eye Chauffeur',
  description:
    'Manhattan to JFK black car service — flat rates from $85, flight monitoring, door-to-door pickup. Professional chauffeurs, no surge pricing. Book Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/manhattan-to-jfk-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Manhattan to JFK?',
    a: 'Black car service from Manhattan to JFK starts at $85 from Midtown. Your exact price depends on your pickup neighborhood and vehicle choice. All rates are flat — confirmed at booking.',
  },
  {
    q: 'How early should I book my Manhattan to JFK black car?',
    a: 'We recommend booking at least 24 hours in advance. For early morning departures (before 6am), booking 48 hours ahead ensures your preferred vehicle is available.',
  },
  {
    q: 'Will my chauffeur come to my building door?',
    a: 'Yes. Your chauffeur picks you up directly at your Manhattan address — apartment building, hotel, or office. No walking to a corner or waiting at a rideshare zone.',
  },
  {
    q: 'What if I have a lot of luggage for JFK?',
    a: 'Our SUV option (Cadillac Escalade or similar) handles large luggage loads comfortably. Just mention your bag count when booking and we match you to the right vehicle.',
  },
  {
    q: 'Do you cover early morning flights from JFK?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. Pre-dawn pickups — even 3am or 4am — are fully available. Your driver will be confirmed the evening before your trip.',
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: 'Flat rate from $85 — locked at booking', uber: 'Surge pricing — can double during rush hour' },
  { feature: 'Driver', blackCar: 'Licensed, TLC-certified professional chauffeur', uber: 'Variable — no luxury standard required' },
  { feature: 'Vehicle', blackCar: 'Luxury sedan or SUV, always clean', uber: 'Unknown vehicle class until driver is assigned' },
  { feature: 'Pickup', blackCar: 'Door-to-door — chauffeur comes to your address', uber: 'Pin-drop pickup, may not reach your exact door' },
  { feature: 'Reliability', blackCar: 'Confirmed driver the evening before your trip', uber: 'Driver assigned close to pickup time' },
  { feature: 'Early Mornings', blackCar: 'Pre-dawn availability guaranteed', uber: 'Surge pricing spikes on early morning departures' },
];

export default function ManhattanToJFKBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Manhattan to JFK Black Car Service', url: `${getSiteUrl()}/services/routes/manhattan-to-jfk-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Manhattan to JFK Black Car Service"
        description="Premium black car service from Manhattan to JFK Airport. Flat rates from $85, door-to-door pickup, 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/manhattan-to-jfk-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan to JFK Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Start your trip the right way. Door-to-door black car service from any Manhattan address
              to JFK Airport — flat rate confirmed at booking, professional chauffeur at your door,
              and plenty of time to make your flight stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Manhattan to JFK
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
              Manhattan to JFK Black Car Pricing
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Midtown Manhattan → JFK', price: '$85', time: '35–50 min', miles: '16 mi' },
                { from: 'Financial District / Wall Street → JFK', price: '$85', time: '35–50 min', miles: '16 mi' },
                { from: 'Times Square / Theater District → JFK', price: '$85', time: '40–50 min', miles: '17 mi' },
                { from: 'Chelsea / Meatpacking District → JFK', price: '$85', time: '35–50 min', miles: '16 mi' },
                { from: 'Upper East Side → JFK', price: '$90', time: '40–55 min', miles: '18 mi' },
                { from: 'Upper West Side → JFK', price: '$95', time: '45–60 min', miles: '19 mi' },
                { from: 'SoHo / Tribeca → JFK', price: '$85', time: '35–50 min', miles: '16 mi' },
                { from: 'Harlem / East Harlem → JFK', price: '$95', time: '45–60 min', miles: '20 mi' },
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
              Black Car Service vs. Uber for Manhattan to JFK
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
                <li><strong className="text-brand-black">Door-to-door pickup</strong> — your chauffeur arrives at your Manhattan address, not a nearby corner.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. Traffic, time of day, and demand do not change it.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — you receive your driver details the evening before, not minutes before pickup.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — your chauffeur helps with bags at pickup and drop-off.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              Manhattan to JFK — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              JFK Airport is 16 miles from Midtown Manhattan. In normal traffic, the drive takes 35–50 minutes.
              During peak hours — weekday mornings (7–9am) and evenings (5–8pm) — allow 60–75 minutes.
              We recommend scheduling pickup at least 3 hours before your departure time.
            </p>
            <p className="text-brand-grey mb-4">
              Your chauffeur takes the most efficient route in real-time — typically the Queens-Midtown Tunnel
              or the Brooklyn Bridge to the Belt Parkway, depending on current conditions.
            </p>
            <p className="text-brand-grey">
              Terminal drop-off is curbside at departures. Your driver pulls directly to your airline terminal.
            </p>
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
              Manhattan to JFK Black Car — FAQ
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
                Book Your Manhattan to JFK Black Car
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
