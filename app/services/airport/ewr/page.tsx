import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Newark Airport Black Car Service to NYC | Flat Rates from $95 | Eagle Eye',
  description:
    'Newark Airport (EWR) black car service to Manhattan and NYC — flat rates from $95, all tolls included, real-time flight tracking, meet & greet. No hidden fees. Book 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/airport/ewr` },
};

const ewrFaqs = [
  {
    q: 'How much is a black car from Newark Airport to Manhattan?',
    a: 'Black car service from EWR to Manhattan starts at $95. This flat rate includes all tolls — Lincoln or Holland Tunnel plus airport toll. No hidden fees at the end of your ride.',
  },
  {
    q: 'Are tolls included in the Newark Airport black car price?',
    a: 'Yes. All tunnel and airport tolls are included in your quoted price. What you see at booking is what you pay. Nothing is added at the end of your ride.',
  },
  {
    q: 'How is EWR black car service different from the NJ Transit train?',
    a: 'NJ Transit from EWR to Manhattan takes 30-45 minutes plus a connection, with no luggage help. Our black car service picks you up at arrivals and delivers you door-to-door in the same time — with a professional chauffeur handling your bags.',
  },
  {
    q: 'Do you track flights at Newark Liberty Airport?',
    a: 'Yes. We monitor your EWR flight in real-time and adjust your pickup automatically for delays or early arrivals at no extra charge.',
  },
  {
    q: 'Where does my driver meet me at EWR?',
    a: 'Your chauffeur meets you in the ground transportation area of your terminal (A, B, or C) with a name sign. You receive a WhatsApp message with the exact meeting point before landing.',
  },
  {
    q: 'Can I book EWR black car service for a New Jersey destination?',
    a: 'Yes. We serve Jersey City, Hoboken, Newark, and other NJ destinations. EWR to NJ locations starts at $55.',
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: 'Flat rate from $95 — all tolls included', njtransit: '$15-20 + connecting cab/uber at each end', uber: 'Surge pricing + tolls added on top' },
  { feature: 'Meet & Greet', blackCar: 'Arrivals hall, name sign in your terminal', njtransit: 'No — self-service', uber: 'Rideshare lot — long walk from terminals' },
  { feature: 'Luggage', blackCar: 'Chauffeur assists at pickup and drop-off', njtransit: 'You carry everything', uber: 'No assistance' },
  { feature: 'Flight Tracking', blackCar: 'Real-time — adjusted for delays', njtransit: 'No', uber: 'No' },
  { feature: 'Door-to-Door', blackCar: 'Yes — terminal to your exact address', njtransit: 'No — Penn Station then another ride', uber: 'Yes (rideshare zone pickup)' },
  { feature: 'Hidden Fees', blackCar: 'None — tolls and tips all included', njtransit: 'Subway/taxi at each end adds cost', uber: 'Tolls charged separately on top' },
];

export default function EWRPage() {
  return (
    <>
      <FaqJsonLd faqs={ewrFaqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Airport Transfers', url: `${getSiteUrl()}/services/airport` },
        { name: 'Newark Airport', url: `${getSiteUrl()}/services/airport/ewr` },
      ]} />
      <ServiceJsonLd
        name="Newark Airport Black Car Service"
        description="Premium Newark Liberty Airport black car service to Manhattan, Brooklyn, and New Jersey. Flat rates from $95, all tolls included, flight tracking, meet & greet."
        areaServed="New York City, NY; Newark, NJ"
        url={`${getSiteUrl()}/services/airport/ewr`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Newark Airport Black Car Service to NYC
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              EWR to Manhattan — flat rate, all tolls included, zero hidden fees. A professional
              chauffeur meets you at arrivals with a name sign and delivers you door-to-door.
              No surge pricing. No tunnel toll surprises at the end of your ride.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Your EWR Transfer
              </Link>
              <Link href="/services/routes/ewr-to-manhattan-black-car-service" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                EWR → Manhattan Pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              EWR Black Car Rates &amp; Pricing
            </h2>
            <div className="space-y-3">
              {[
                { from: 'EWR ↔ Midtown Manhattan', price: '$95+', miles: '16 mi', time: '30–45 min', href: '/services/routes/ewr-to-manhattan-black-car-service' },
                { from: 'EWR ↔ Financial District', price: '$95+', miles: '15 mi', time: '30–45 min', href: '/services/routes/ewr-to-manhattan-black-car-service' },
                { from: 'EWR ↔ Brooklyn', price: '$95+', miles: '20 mi', time: '40–55 min', href: '/services/areas/brooklyn' },
                { from: 'EWR ↔ Queens', price: '$100+', miles: '22 mi', time: '40–55 min', href: '/services/areas/queens' },
                { from: 'EWR ↔ New Jersey (Jersey City / Hoboken)', price: '$55+', miles: '8 mi', time: '15–25 min', href: '/services/areas/new-jersey' },
                { from: 'EWR ↔ Westchester', price: '$120+', miles: '35 mi', time: '50–65 min', href: '/services/areas/westchester' },
                { from: 'EWR ↔ Long Island', price: '$120+', miles: '30 mi', time: '50–65 min', href: '/services/areas/long-island' },
              ].map((r) => (
                <Link key={r.from} href={r.href} className="flex justify-between items-center bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.price} · {r.time}</span>
                </Link>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All rates are flat. Tolls and gratuity included. No surge pricing.</p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              EWR Black Car vs. NJ Transit &amp; Uber
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-black text-brand-white">
                    <th className="text-left p-3 font-medium">Feature</th>
                    <th className="text-left p-3 font-medium">Eagle Eye Black Car</th>
                    <th className="text-left p-3 font-medium">NJ Transit</th>
                    <th className="text-left p-3 font-medium">Uber</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-brand-white' : 'bg-brand-offwhite'}>
                      <td className="p-3 font-medium text-brand-black">{row.feature}</td>
                      <td className="p-3 text-brand-grey">{row.blackCar}</td>
                      <td className="p-3 text-brand-grey">{row.njtransit}</td>
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
              EWR Terminal Pickup Guide
            </h2>
            <div className="space-y-4">
              {[
                { terminal: 'Terminal A', airlines: 'United Airlines (domestic)', pickup: 'Ground floor arrivals — your chauffeur meets you past baggage claim with a name sign. Terminal A is connected to the AirTrain but your driver handles the whole journey.' },
                { terminal: 'Terminal B', airlines: 'American Airlines, British Airways, Air Canada, and international carriers', pickup: 'Arrivals level — driver holds name sign past baggage claim and customs. You receive a WhatsApp message with exact meeting point before landing.' },
                { terminal: 'Terminal C', airlines: 'United Airlines (international)', pickup: 'Ground level arrivals — driver waits at the exit from customs and baggage claim with your name sign.' },
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
                EWR Airport Transfer Features
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">Meet &amp; Greet at Arrivals</strong> — chauffeur waits with name sign in your terminal, not at a rideshare lot.</li>
                <li><strong className="text-brand-black">All tolls included</strong> — Lincoln Tunnel, Holland Tunnel, and airport toll are all in your quoted price. Zero extra fees.</li>
                <li><strong className="text-brand-black">Flight tracking included</strong> — we monitor your flight, no extra charge for delays.</li>
                <li><strong className="text-brand-black">60 minutes free wait time</strong> — you have one hour after landing before any wait charges apply.</li>
                <li><strong className="text-brand-black">24/7 availability</strong> — early morning and red-eye flights fully covered.</li>
              </ul>
              <div className="mt-8">
                <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                  Book EWR Transfer
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular EWR Black Car Routes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/services/routes/ewr-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">EWR to Manhattan Black Car</div>
                <div className="text-sm text-brand-grey mt-1">From $95 — 30–45 min</div>
              </Link>
              <Link href="/services/routes/manhattan-to-ewr-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to EWR Black Car</div>
                <div className="text-sm text-brand-grey mt-1">From $95 — 30–45 min</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Newark Airport Car Service FAQ
            </h2>
            <div className="space-y-4">
              {ewrFaqs.map((faq) => (
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
