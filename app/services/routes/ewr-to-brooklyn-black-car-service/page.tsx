import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Newark Airport to Brooklyn Car Service | EWR Black Car | Eagle Eye Chauffeur',
  description:
    'Newark Airport (EWR) to Brooklyn car service — flat rates, real-time flight tracking, meet & greet at all terminals. Professional chauffeur, no surge pricing. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/ewr-to-brooklyn-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car service from Newark Airport to Brooklyn?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Get an instant quote on our booking page by entering your EWR terminal and Brooklyn address.',
  },
  {
    q: 'How long does it take from EWR to Brooklyn?',
    a: 'Expect 45–70 minutes depending on your Brooklyn destination and traffic. The Goethals Bridge or Staten Island routes add some distance, but your driver always picks the fastest option in real time.',
  },
  {
    q: 'Do you track flights at Newark Liberty Airport?',
    a: 'Yes. We monitor your EWR arrival in real time. If your flight is delayed or arrives early, we adjust your pickup automatically — no calls needed and no extra charge.',
  },
  {
    q: 'Which terminals at Newark Airport do you serve?',
    a: 'We serve all Newark terminals — Terminal A, Terminal B, and Terminal C. Your driver is at the correct terminal based on your flight details.',
  },
  {
    q: 'Do you serve all Brooklyn neighborhoods from Newark?',
    a: 'Yes. We cover every Brooklyn neighborhood — Williamsburg, DUMBO, Park Slope, Bay Ridge, Flatbush, Bushwick, Brooklyn Heights, and more. No area surcharges.',
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: 'Flat rate — confirmed at booking, no changes', uber: 'Surge pricing — spikes at peak arrivals' },
  { feature: 'Driver', blackCar: 'Licensed, TLC-certified professional chauffeur', uber: 'Variable quality, no luxury standard' },
  { feature: 'Vehicle', blackCar: 'Luxury sedan or SUV, always spotless', uber: 'Unknown until driver is assigned' },
  { feature: 'Meet & Greet', blackCar: 'Chauffeur at arrivals with name sign', uber: 'Curbside pickup — requires navigation' },
  { feature: 'Flight Tracking', blackCar: 'Real-time — adjusted for any delay', uber: 'None — re-book if flight changes' },
  { feature: 'Wait Time', blackCar: '60 minutes complimentary after landing', uber: 'Driver may cancel if wait is too long' },
];

export default function EWRToBrooklynBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Newark to Brooklyn Black Car Service', url: `${getSiteUrl()}/services/routes/ewr-to-brooklyn-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Newark Airport to Brooklyn Black Car Service"
        description="Premium black car service from Newark Liberty Airport to Brooklyn. Flat rates, real-time flight tracking, meet & greet at all terminals. 24/7 availability."
        areaServed="Brooklyn, New York City, NY"
        url={`${getSiteUrl()}/services/routes/ewr-to-brooklyn-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Newark Airport to Brooklyn Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Newark Liberty to Brooklyn is one of the most popular airport-to-borough routes in the
              New York area. Eagle Eye Chauffeur provides a flat-rate, door-to-door black car service
              with a professional chauffeur waiting at arrivals — no apps to reload, no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book EWR to Brooklyn
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
              Popular Routes from EWR to Brooklyn
            </h2>
            <div className="space-y-3">
              {[
                { from: 'EWR → Williamsburg', time: '45–60 min' },
                { from: 'EWR → DUMBO / Brooklyn Heights', time: '45–60 min' },
                { from: 'EWR → Park Slope', time: '50–65 min' },
                { from: 'EWR → Downtown Brooklyn', time: '45–60 min' },
                { from: 'EWR → Flatbush / Crown Heights', time: '55–70 min' },
                { from: 'EWR → Bay Ridge', time: '40–55 min' },
                { from: 'EWR → Bushwick', time: '50–65 min' },
                { from: 'EWR → Sunset Park', time: '45–60 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All rates are flat and confirmed at booking. No surge pricing — ever. <Link href="/book" className="underline">Get an instant quote →</Link></p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Black Car vs. Rideshare for EWR to Brooklyn
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
                What Is Included in Every EWR to Brooklyn Booking
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">Real-time flight tracking</strong> — we monitor your EWR arrival and adjust your pickup for any delay or early landing, at no extra charge.</li>
                <li><strong className="text-brand-black">Meet &amp; greet at arrivals</strong> — your chauffeur waits with a name sign in the arrivals hall.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is locked at booking. Traffic, tolls, and demand never change it.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and maintained to the highest standard.</li>
                <li><strong className="text-brand-black">60 minutes complimentary wait</strong> — no rush once you land.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — reach us via WhatsApp or phone any time.</li>
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
              <Link href="/services/airport/ewr" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">EWR Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All Newark routes &amp; terminals</div>
              </Link>
              <Link href="/services/routes/ewr-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">EWR to Manhattan</div>
                <div className="text-sm text-brand-grey mt-1">All Manhattan neighborhoods</div>
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
              Newark to Brooklyn — FAQ
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
                Book Your Newark to Brooklyn Black Car
              </h2>
              <p className="text-brand-silver mb-6">Instant confirmation. Flat rate. Chauffeur waiting when you land.</p>
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
