import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LGA to Manhattan Black Car Service | Eagle Eye Chauffeur',
  description:
    'LGA to Manhattan black car service — flat rates from $75, real-time flight tracking, meet & greet. NYC closest major airport — fast, professional transfers. Book 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/lga-to-manhattan-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from LGA to Manhattan?',
    a: 'Black car service from LaGuardia to Manhattan starts at $75 for a business sedan. LGA is NYC\'s closest major airport to Midtown — typically a 20-30 minute ride.',
  },
  {
    q: 'Where does my chauffeur meet me at LaGuardia?',
    a: 'Your chauffeur meets you in the arrivals area of your terminal with a name sign. LGA has Terminal B and Terminal C/D — we cover both. You receive a WhatsApp message with the exact meeting point before you land.',
  },
  {
    q: 'Do you track flights at LGA?',
    a: 'Yes. We monitor your LaGuardia flight in real time and adjust pickup automatically for any delays or early arrivals — no extra charge.',
  },
  {
    q: 'Is black car service from LGA faster than taking a taxi?',
    a: 'The drive time is the same, but your experience is completely different. Your driver is already waiting when you clear baggage claim. No taxi queue, no surge pricing, no uncertainty.',
  },
  {
    q: 'Can I book LGA black car service for early morning arrivals?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. Red-eye and early morning arrivals at LaGuardia are fully covered.',
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: 'Flat rate from $75 — locked at booking', uber: 'Surge pricing — spikes during peak hours' },
  { feature: 'Driver', blackCar: 'Licensed, TLC-certified professional chauffeur', uber: 'Variable — no luxury standard required' },
  { feature: 'Vehicle', blackCar: 'Luxury sedan or SUV, always clean', uber: 'Unknown vehicle class until assigned' },
  { feature: 'Meet & Greet', blackCar: 'Chauffeur at arrivals with name sign', uber: 'Curbside pickup at rideshare zone' },
  { feature: 'Flight Tracking', blackCar: 'Real-time — adjusted for delays automatically', uber: 'None — you must re-request if flight changes' },
  { feature: 'Wait Time', blackCar: '60 minutes complimentary after landing', uber: 'Driver may cancel if you are slow to exit' },
];

export default function LGAToManhattanBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'LGA to Manhattan Black Car Service', url: `${getSiteUrl()}/services/routes/lga-to-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="LGA to Manhattan Black Car Service"
        description="Premium black car service from LaGuardia Airport to Manhattan. Flat rates from $75, real-time flight tracking, meet & greet at arrivals. 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/lga-to-manhattan-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              LGA to Manhattan Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              LaGuardia is NYC&apos;s closest major airport to Midtown — just 9 miles away. Make the most
              of that proximity with a flat-rate black car service that has a professional chauffeur
              waiting the moment you clear baggage claim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book LGA to Manhattan
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
              LGA to Manhattan Black Car Pricing
            </h2>
            <div className="space-y-3">
              {[
                { from: 'LGA → Midtown Manhattan', price: '$75', time: '20–30 min', miles: '9 mi' },
                { from: 'LGA → Financial District / Wall Street', price: '$80', time: '25–40 min', miles: '12 mi' },
                { from: 'LGA → Times Square / Theater District', price: '$75', time: '20–30 min', miles: '9 mi' },
                { from: 'LGA → Upper East Side', price: '$75', time: '20–30 min', miles: '8 mi' },
                { from: 'LGA → Upper West Side', price: '$80', time: '25–35 min', miles: '10 mi' },
                { from: 'LGA → Chelsea / Meatpacking District', price: '$80', time: '25–35 min', miles: '10 mi' },
                { from: 'LGA → SoHo / Tribeca', price: '$80', time: '25–40 min', miles: '11 mi' },
                { from: 'LGA → Harlem', price: '$75', time: '20–30 min', miles: '8 mi' },
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
              Black Car Service vs. Uber for LGA to Manhattan
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
                <li><strong className="text-brand-black">Real-time flight tracking</strong> — we monitor your LGA arrival and adjust pickup for delays or early landings at no extra charge.</li>
                <li><strong className="text-brand-black">Meet &amp; greet at arrivals</strong> — your chauffeur waits with a name sign past baggage claim.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. Traffic and demand never change it.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Complimentary wait time</strong> — 60 minutes of free wait time after your flight lands.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              LGA to Manhattan — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              LaGuardia is just 9 miles from Midtown Manhattan — the closest major airport to the city center.
              In normal traffic, the ride takes 20–30 minutes. During peak hours, allow 35–50 minutes.
            </p>
            <p className="text-brand-grey mb-4">
              LGA was recently renovated. Terminal B (Delta, American) and Terminal C/D (United, Southwest) both
              have clear arrivals areas. Your driver sends the exact meeting spot via WhatsApp before you land.
            </p>
            <p className="text-brand-grey">
              The route to Manhattan typically uses the Grand Central Parkway to the Queens-Midtown Tunnel or
              the Triborough Bridge, depending on your destination and real-time traffic.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/manhattan-to-lga-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to LGA</div>
                <div className="text-sm text-brand-grey mt-1">Departures — black car from $75</div>
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
              LGA to Manhattan Black Car — FAQ
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
                Book Your LGA to Manhattan Black Car
              </h2>
              <p className="text-brand-silver mb-6">Instant confirmation. No surge pricing. Chauffeur waiting when you land.</p>
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
