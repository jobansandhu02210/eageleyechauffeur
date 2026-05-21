import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Newark Airport to Manhattan Black Car Service | Eagle Eye Chauffeur',
  description:
    'EWR to Manhattan black car service — flat rates from $95, tolls included, real-time flight tracking, meet & greet. Professional chauffeurs, no hidden fees. Book 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/ewr-to-manhattan-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Newark Airport to Manhattan?',
    a: 'Black car service from EWR to Manhattan starts at $95. This is a flat rate that includes all tolls (Lincoln Tunnel or Holland Tunnel) — no hidden fees at the end of your ride.',
  },
  {
    q: 'Are tolls included in the EWR to Manhattan black car price?',
    a: 'Yes. All tunnel and airport tolls are included in your quoted price. What you see at booking is what you pay — nothing added at the end.',
  },
  {
    q: 'Where does my chauffeur meet me at Newark Airport?',
    a: 'Your chauffeur meets you in the ground transportation area of your terminal (A, B, or C) with a name sign. You receive a WhatsApp message with the exact meeting point before landing.',
  },
  {
    q: 'How long does it take from EWR to Manhattan?',
    a: 'The drive from Newark Airport to Midtown Manhattan is approximately 16 miles and takes 30-45 minutes in normal traffic. During peak hours, allow 50-65 minutes.',
  },
  {
    q: 'Do you track flights at Newark Liberty Airport?',
    a: 'Yes. We monitor your EWR flight in real time and adjust pickup automatically for any delays or early arrivals — at no extra charge.',
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: 'Flat rate from $95 — tolls & fees included', uber: 'Surge pricing plus tolls added on top' },
  { feature: 'Driver', blackCar: 'Licensed, TLC-certified professional chauffeur', uber: 'Variable — no luxury standard required' },
  { feature: 'Vehicle', blackCar: 'Luxury sedan or SUV, always clean', uber: 'Unknown vehicle class until assigned' },
  { feature: 'Meet & Greet', blackCar: 'Chauffeur at arrivals with name sign', uber: 'Curbside rideshare zone — often a walk away' },
  { feature: 'Flight Tracking', blackCar: 'Real-time — adjusted for delays automatically', uber: 'None — you must re-request if flight changes' },
  { feature: 'Hidden Fees', blackCar: 'None — tolls and tips included', uber: 'Tolls added on top of surge fare' },
];

export default function EWRToManhattanBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Newark Airport to Manhattan Black Car Service', url: `${getSiteUrl()}/services/routes/ewr-to-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Newark Airport to Manhattan Black Car Service"
        description="Premium black car service from Newark Liberty Airport (EWR) to Manhattan. Flat rates from $95, tolls included, flight tracking, meet & greet. 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/ewr-to-manhattan-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Newark Airport to Manhattan Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              EWR to Manhattan, done right. Flat-rate black car service from Newark Liberty Airport
              to any Manhattan neighborhood — all tolls included, professional chauffeur waiting at arrivals,
              and a price that does not change when traffic backs up on the turnpike.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book EWR to Manhattan
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
              EWR to Manhattan Black Car Pricing
            </h2>
            <div className="space-y-3">
              {[
                { from: 'EWR → Midtown Manhattan', price: '$95', time: '30–45 min', miles: '16 mi' },
                { from: 'EWR → Financial District / Wall Street', price: '$95', time: '30–45 min', miles: '15 mi' },
                { from: 'EWR → Times Square / Theater District', price: '$95', time: '30–45 min', miles: '16 mi' },
                { from: 'EWR → Chelsea / Meatpacking District', price: '$95', time: '30–45 min', miles: '16 mi' },
                { from: 'EWR → Upper East Side', price: '$100', time: '40–55 min', miles: '19 mi' },
                { from: 'EWR → Upper West Side', price: '$100', time: '40–55 min', miles: '19 mi' },
                { from: 'EWR → SoHo / Tribeca', price: '$95', time: '30–45 min', miles: '15 mi' },
                { from: 'EWR → Harlem', price: '$105', time: '45–60 min', miles: '21 mi' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.price} flat · {r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All prices are flat rate. Tolls, gratuity included. No surge pricing — ever.</p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Black Car Service vs. Uber for Newark Airport to Manhattan
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
                <li><strong className="text-brand-black">Real-time flight tracking</strong> — we monitor your EWR arrival and adjust pickup for delays at no extra charge.</li>
                <li><strong className="text-brand-black">Meet &amp; greet at arrivals</strong> — your chauffeur waits with a name sign past baggage claim in your terminal.</li>
                <li><strong className="text-brand-black">All tolls included</strong> — Lincoln Tunnel, Holland Tunnel, and airport tolls are in your quoted price. Zero hidden fees.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking and never changes due to traffic or demand.</li>
                <li><strong className="text-brand-black">Complimentary wait time</strong> — 60 minutes of free wait time after your flight lands.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              Newark Airport to Manhattan — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              Newark Liberty Airport (EWR) is located in New Jersey, approximately 16 miles from Midtown Manhattan.
              The drive takes 30–45 minutes in normal traffic via the Lincoln Tunnel or Holland Tunnel,
              depending on your destination and real-time conditions.
            </p>
            <p className="text-brand-grey mb-4">
              EWR has three terminals: A (United), B (American, British Airways, others), and C (United).
              Your chauffeur meets you at the ground transportation area of your terminal with a name sign.
            </p>
            <p className="text-brand-grey">
              During peak hours, the approach to the Lincoln Tunnel can add 20–30 minutes. We build this
              into our scheduling so your driver is never rushed.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/manhattan-to-ewr-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to EWR</div>
                <div className="text-sm text-brand-grey mt-1">Departures — black car from $95</div>
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
              Newark Airport to Manhattan Black Car — FAQ
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
                Book Your Newark Airport to Manhattan Black Car
              </h2>
              <p className="text-brand-silver mb-6">Flat rate. All tolls included. Chauffeur waiting when you land.</p>
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
