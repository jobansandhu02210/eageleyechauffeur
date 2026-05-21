import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'JFK to Manhattan Black Car Service | Eagle Eye Chauffeur',
  description:
    'JFK to Manhattan black car service — flat rates from $85, real-time flight tracking, meet & greet at arrivals. Professional chauffeurs, no surge pricing. Book Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/jfk-to-manhattan-black-car-service` },
};

const faqs = [
  {
    q: 'How much does a black car service from JFK to Manhattan cost?',
    a: 'Black car service from JFK to Manhattan starts at $85 for a business sedan to Midtown. Price depends on your exact drop-off location and vehicle choice. All rates are flat — no surge pricing.',
  },
  {
    q: 'How is black car service different from Uber for JFK to Manhattan?',
    a: 'Black car service uses professional, licensed chauffeurs in luxury sedans and SUVs. Your price is locked at booking — no surge. We track your flight and meet you at arrivals with a name sign. Uber prices spike during peak hours and drivers are not vetted to the same standard.',
  },
  {
    q: 'Where will my chauffeur meet me at JFK?',
    a: 'Your chauffeur meets you in the arrivals hall with a name sign, just past baggage claim. You receive a WhatsApp message with the exact meeting point before you land.',
  },
  {
    q: 'What if my JFK flight is delayed?',
    a: 'We track your flight in real time. If your flight is delayed, we adjust your pickup automatically at no extra charge. You will never land to find no driver waiting.',
  },
  {
    q: 'Can I book a JFK to Manhattan black car for early morning or late night?',
    a: 'Yes. Eagle Eye Chauffeur operates 24 hours a day, 7 days a week. Red-eye arrivals and pre-dawn departures are fully covered.',
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: 'Flat rate from $85 — locked at booking', uber: 'Surge pricing — can double during peak hours' },
  { feature: 'Driver', blackCar: 'Licensed, TLC-certified professional chauffeur', uber: 'Variable — no luxury standard required' },
  { feature: 'Vehicle', blackCar: 'Luxury sedan or SUV, always clean', uber: 'Unknown vehicle class until driver is assigned' },
  { feature: 'Meet & Greet', blackCar: 'Chauffeur at arrivals with name sign', uber: 'Curbside pickup, often requires walking' },
  { feature: 'Flight Tracking', blackCar: 'Real-time — adjusted for delays automatically', uber: 'None — you must re-book if flight changes' },
  { feature: 'Cancellation', blackCar: 'Flexible — contact us directly', uber: 'Fees apply after driver is assigned' },
];

export default function JFKToManhattanBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'JFK to Manhattan Black Car Service', url: `${getSiteUrl()}/services/routes/jfk-to-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="JFK to Manhattan Black Car Service"
        description="Premium black car service from JFK Airport to Manhattan. Flat rates from $85, real-time flight tracking, meet & greet at arrivals. 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/jfk-to-manhattan-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              JFK to Manhattan Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              The most-traveled airport route in New York City — done right. Flat-rate black car service
              from JFK Airport to any Manhattan neighborhood. Flight tracking, meet &amp; greet, and a
              professional chauffeur waiting the moment you clear baggage claim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book JFK to Manhattan
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
              JFK to Manhattan Black Car Pricing
            </h2>
            <div className="space-y-3">
              {[
                { from: 'JFK → Midtown Manhattan', price: '$85', time: '35–50 min', miles: '16 mi' },
                { from: 'JFK → Financial District / Wall Street', price: '$85', time: '35–50 min', miles: '16 mi' },
                { from: 'JFK → Times Square / Theater District', price: '$85', time: '40–50 min', miles: '17 mi' },
                { from: 'JFK → Chelsea / Meatpacking District', price: '$85', time: '35–50 min', miles: '16 mi' },
                { from: 'JFK → Upper East Side', price: '$90', time: '40–55 min', miles: '18 mi' },
                { from: 'JFK → Upper West Side', price: '$95', time: '45–60 min', miles: '19 mi' },
                { from: 'JFK → SoHo / Tribeca', price: '$85', time: '35–50 min', miles: '16 mi' },
                { from: 'JFK → Harlem / East Harlem', price: '$95', time: '45–60 min', miles: '20 mi' },
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
              Black Car Service vs. Uber for JFK to Manhattan
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
                <li><strong className="text-brand-black">Real-time flight tracking</strong> — we monitor your JFK arrival and adjust pickup if your flight is delayed or early. No extra charge.</li>
                <li><strong className="text-brand-black">Meet &amp; greet at arrivals</strong> — your chauffeur waits with a name sign past baggage claim. No curbside hunting.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. It does not change due to traffic, time of day, or demand.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Complimentary wait time</strong> — 60 minutes of free wait time after your flight lands. No rush to get out fast.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              JFK to Manhattan — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              JFK Airport is located in Queens, approximately 16 miles southeast of Midtown Manhattan.
              Drive time is typically 35–50 minutes in normal traffic. Peak hours — weekday mornings
              (7–9am) and evenings (5–8pm) — can extend the ride to 60–75 minutes.
            </p>
            <p className="text-brand-grey mb-4">
              Your chauffeur takes the most efficient route depending on real-time traffic — typically
              the Van Wyck Expressway to the Queens-Midtown Tunnel or the Belt Parkway to the Brooklyn Bridge,
              depending on your Manhattan destination.
            </p>
            <p className="text-brand-grey">
              All JFK terminal pickups are handled at the arrivals level. Your driver will send you the exact
              meeting spot via WhatsApp before you land.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/manhattan-to-jfk-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to JFK</div>
                <div className="text-sm text-brand-grey mt-1">Departures — black car from $85</div>
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
              JFK to Manhattan Black Car Service — FAQ
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
                Book Your JFK to Manhattan Black Car
              </h2>
              <p className="text-brand-silver mb-6">Instant confirmation. No surge pricing. Professional chauffeur waiting when you land.</p>
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
