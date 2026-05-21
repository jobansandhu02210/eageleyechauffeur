import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LGA Airport Black Car Service NYC | Flat Rates from $75 | Eagle Eye',
  description:
    'LaGuardia Airport black car service — flat rates from $75, real-time flight tracking, meet & greet. NYC closest major airport. No surge pricing. Book Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/airport/lga` },
};

const lgaFaqs = [
  {
    q: 'How much is a black car from LaGuardia to Manhattan?',
    a: 'Black car service from LGA to Manhattan starts at $75. LaGuardia is NYC\'s closest major airport to Midtown — typically just 20-30 minutes away in normal traffic.',
  },
  {
    q: 'How is black car service from LGA different from a taxi?',
    a: 'Taxis use metered pricing — your final cost depends on traffic. Our black car service is flat-rate, confirmed at booking. You also get a professional chauffeur waiting at arrivals with a name sign, not a taxi queue.',
  },
  {
    q: 'Do you track flights at LaGuardia Airport?',
    a: 'Yes. We monitor your LGA flight live and adjust pickup time automatically — no extra charge for delays or early arrivals.',
  },
  {
    q: 'Where does my driver meet me at LGA?',
    a: 'Your chauffeur meets you in the arrivals area with a name sign. You\'ll receive a WhatsApp message with the exact meeting point before you land. We cover Terminal B and Terminal C/D.',
  },
  {
    q: 'Do you serve all LGA terminals?',
    a: 'Yes. We service Terminal B (Delta, American) and Terminal C/D (United, Southwest, others).',
  },
  {
    q: 'Can I book a black car for a LGA departure?',
    a: 'Yes. We handle both arrivals and departures. For departures, your driver picks you up at your address and drops you at your departure terminal.',
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: 'Flat rate from $75 — locked at booking', yellowCab: 'Metered + tolls — unpredictable', uber: 'Surge pricing — spikes during peak hours' },
  { feature: 'Meet & Greet', blackCar: 'Arrivals hall, name sign', yellowCab: 'Taxi stand queue', uber: 'Rideshare lot — walk required' },
  { feature: 'Luggage Help', blackCar: 'Yes — chauffeur assists', yellowCab: 'Varies by driver', uber: 'No' },
  { feature: 'Flight Tracking', blackCar: 'Yes — real-time, no charge', yellowCab: 'No', uber: 'No' },
  { feature: 'Vehicle Quality', blackCar: 'Luxury sedan or SUV', yellowCab: 'Standard taxi', uber: 'Unknown until assigned' },
  { feature: 'Wait Time', blackCar: '60 min complimentary after landing', yellowCab: 'None — meter runs', uber: 'Driver may cancel if delayed' },
];

export default function LGAPage() {
  return (
    <>
      <FaqJsonLd faqs={lgaFaqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Airport Transfers', url: `${getSiteUrl()}/services/airport` },
        { name: 'LaGuardia Airport', url: `${getSiteUrl()}/services/airport/lga` },
      ]} />
      <ServiceJsonLd
        name="LGA Airport Black Car Service"
        description="Premium LaGuardia Airport black car service. Flat rates from $75, real-time flight tracking, meet & greet at arrivals. All terminals. 24/7 availability."
        areaServed="New York City, NY"
        url={`${getSiteUrl()}/services/airport/lga`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              LGA Airport Black Car Service NYC
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              LaGuardia is NYC&apos;s closest major airport to Midtown — just 9 miles away. Make the most
              of that with a flat-rate black car service, professional chauffeur waiting at arrivals,
              and a price that does not move regardless of traffic or time of day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Your LGA Transfer
              </Link>
              <Link href="/services/routes/lga-to-manhattan-black-car-service" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                LGA → Manhattan Pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              LGA Black Car Rates &amp; Pricing
            </h2>
            <div className="space-y-3">
              {[
                { from: 'LGA ↔ Midtown Manhattan', price: '$75+', miles: '9 mi', time: '20–30 min', href: '/services/routes/lga-to-manhattan-black-car-service' },
                { from: 'LGA ↔ Financial District', price: '$80+', miles: '12 mi', time: '25–40 min', href: '/services/routes/lga-to-manhattan-black-car-service' },
                { from: 'LGA ↔ Upper East Side', price: '$75+', miles: '8 mi', time: '20–30 min', href: '/services/routes/lga-to-manhattan-black-car-service' },
                { from: 'LGA ↔ Brooklyn', price: '$65+', miles: '12 mi', time: '25–40 min', href: '/services/areas/brooklyn' },
                { from: 'LGA ↔ Queens', price: '$55+', miles: '5 mi', time: '15–25 min', href: '/services/areas/queens' },
                { from: 'LGA ↔ Bronx', price: '$70+', miles: '12 mi', time: '20–35 min', href: '/services/areas/bronx' },
                { from: 'LGA ↔ Long Island', price: '$75+', miles: '15 mi', time: '25–40 min', href: '/services/areas/long-island' },
                { from: 'LGA ↔ Westchester', price: '$95+', miles: '25 mi', time: '35–50 min', href: '/services/areas/westchester' },
              ].map((r) => (
                <Link key={r.from} href={r.href} className="flex justify-between items-center bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.price} · {r.time}</span>
                </Link>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All rates are flat. Gratuity and tolls included. No surge pricing.</p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              LGA Black Car vs. Yellow Cab &amp; Uber
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-black text-brand-white">
                    <th className="text-left p-3 font-medium">Feature</th>
                    <th className="text-left p-3 font-medium">Eagle Eye Black Car</th>
                    <th className="text-left p-3 font-medium">Yellow Cab</th>
                    <th className="text-left p-3 font-medium">Uber</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-brand-white' : 'bg-brand-offwhite'}>
                      <td className="p-3 font-medium text-brand-black">{row.feature}</td>
                      <td className="p-3 text-brand-grey">{row.blackCar}</td>
                      <td className="p-3 text-brand-grey">{row.yellowCab}</td>
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
              LGA Terminal Pickup Guide
            </h2>
            <div className="space-y-4">
              {[
                { terminal: 'Terminal B', airlines: 'Delta, American Airlines, and most carriers', pickup: 'Ground floor arrivals — your chauffeur meets you past baggage claim with a name sign. Terminal B is the main renovated terminal at LGA.' },
                { terminal: 'Terminal C / D', airlines: 'United, Southwest, Spirit, and others', pickup: 'Arrivals level, ground floor — driver holds name sign just past baggage claim exit. You\'ll receive a WhatsApp message with exact meeting spot.' },
              ].map((t) => (
                <div key={t.terminal} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-1">{t.terminal} — {t.airlines}</h3>
                  <p className="text-sm text-brand-grey">{t.pickup}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                Why Eagle Eye for LGA Transfers
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">Closest airport to Midtown</strong> — LGA is just 9 miles from Midtown. With Eagle Eye, you are at your hotel in 20 minutes.</li>
                <li><strong className="text-brand-black">Flight tracking included</strong> — we adjust for any delays automatically, no extra charge.</li>
                <li><strong className="text-brand-black">Transparent pricing</strong> — no surprises, no surge. What you see at booking is what you pay.</li>
                <li><strong className="text-brand-black">Professional chauffeurs</strong> — licensed, insured, uniformed.</li>
                <li><strong className="text-brand-black">24/7 availability</strong> — early morning and late-night flights fully covered.</li>
              </ul>
              <div className="mt-8">
                <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular LGA Black Car Routes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/services/routes/lga-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">LGA to Manhattan Black Car</div>
                <div className="text-sm text-brand-grey mt-1">From $75 — 20–30 min</div>
              </Link>
              <Link href="/services/routes/manhattan-to-lga-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to LGA Black Car</div>
                <div className="text-sm text-brand-grey mt-1">From $75 — 20–30 min</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              LGA Car Service FAQ
            </h2>
            <div className="space-y-4">
              {lgaFaqs.map((faq) => (
                <div key={faq.q} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-1">{faq.q}</h3>
                  <p className="text-sm text-brand-grey">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
