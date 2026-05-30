import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'JFK to Queens Car Service | Black Car Service Queens NYC | Eagle Eye Chauffeur',
  description:
    'JFK Airport to Queens car service — flat rates, real-time flight tracking, meet & greet at all terminals. Professional TLC-licensed chauffeur, no surge pricing. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/jfk-to-queens-black-car-service` },
};

const faqs = [
  {
    q: 'How much does a car service from JFK to Queens cost?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Queens destinations are close to JFK which often makes this one of our most affordable routes. Get an instant quote on our booking page.',
  },
  {
    q: 'How long does it take from JFK to Queens neighborhoods?',
    a: 'JFK is located in southeast Queens, so many trips within Queens are surprisingly short. Forest Hills and Jamaica can be 15–20 minutes; Flushing and Astoria 25–40 minutes; Long Island City 25–35 minutes.',
  },
  {
    q: 'Which Queens neighborhoods do you serve?',
    a: 'We serve all Queens neighborhoods — Astoria, Long Island City, Flushing, Forest Hills, Jamaica, Bayside, Jackson Heights, Richmond Hill, Howard Beach, and more. No area surcharges.',
  },
  {
    q: 'Where does my chauffeur meet me at JFK?',
    a: 'Your chauffeur meets you in the arrivals hall of your terminal with a name sign, just past baggage claim. You receive a WhatsApp message with the exact meeting spot before you land.',
  },
  {
    q: 'Is there a JFK to Queens surcharge?',
    a: 'No. Unlike taxis which have a flat $70+ rate specifically to Manhattan, our pricing to Queens is based on the actual route. Queens destinations are often less than Manhattan rates. No hidden surcharges.',
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: 'Flat rate — locked at booking, no surprises', uber: 'Surge pricing at JFK is extremely common' },
  { feature: 'Driver', blackCar: 'Licensed, TLC-certified professional chauffeur', uber: 'Variable — no luxury standard required' },
  { feature: 'Vehicle', blackCar: 'Luxury sedan or SUV, always clean', uber: 'Unknown vehicle class until assigned' },
  { feature: 'Meet & Greet', blackCar: 'Chauffeur at arrivals with name sign', uber: 'Parking garage rideshare pickup' },
  { feature: 'Flight Tracking', blackCar: 'Real-time — adjusted for delays automatically', uber: 'None — you must re-request if delayed' },
  { feature: 'Wait Time', blackCar: '60 minutes complimentary after landing', uber: 'Driver may cancel if wait is too long' },
];

export default function JFKToQueensBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'JFK to Queens Black Car Service', url: `${getSiteUrl()}/services/routes/jfk-to-queens-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="JFK to Queens Black Car Service"
        description="Premium black car service from JFK Airport to all Queens neighborhoods. Flat rates, real-time flight tracking, meet & greet at arrivals. 24/7 availability."
        areaServed="Queens, New York City, NY"
        url={`${getSiteUrl()}/services/routes/jfk-to-queens-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              JFK to Queens Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              JFK Airport sits in southeastern Queens — making it the closest major airport to Queens
              neighborhoods. Eagle Eye Chauffeur provides flat-rate, door-to-door black car service
              from JFK to every Queens destination, with a professional chauffeur waiting at your terminal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book JFK to Queens
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
              Popular Routes from JFK to Queens
            </h2>
            <div className="space-y-3">
              {[
                { from: 'JFK → Astoria', time: '25–40 min' },
                { from: 'JFK → Long Island City', time: '25–35 min' },
                { from: 'JFK → Flushing / Main Street', time: '25–35 min' },
                { from: 'JFK → Forest Hills / Rego Park', time: '15–25 min' },
                { from: 'JFK → Jackson Heights', time: '20–30 min' },
                { from: 'JFK → Jamaica', time: '10–20 min' },
                { from: 'JFK → Bayside / Fresh Meadows', time: '20–30 min' },
                { from: 'JFK → Howard Beach', time: '10–20 min' },
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
              Black Car vs. Rideshare for JFK to Queens
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
              <Link href="/services/airport/jfk" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All JFK routes &amp; terminals</div>
              </Link>
              <Link href="/services/routes/jfk-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK to Manhattan</div>
                <div className="text-sm text-brand-grey mt-1">Midtown, Downtown &amp; more</div>
              </Link>
              <Link href="/services/areas/queens" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Queens Service</div>
                <div className="text-sm text-brand-grey mt-1">All Queens rides &amp; hourly</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              JFK to Queens — FAQ
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
                Book Your JFK to Queens Car Service
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
