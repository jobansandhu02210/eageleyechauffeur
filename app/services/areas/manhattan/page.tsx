import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Manhattan Black Car Service | Luxury Chauffeur NYC | Eagle Eye',
  description:
    'Manhattan black car service — professional chauffeurs, flat-rate pricing, airport transfers to JFK, LGA, EWR. No surge pricing. Book Eagle Eye Chauffeur for luxury rides throughout Manhattan.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/manhattan` },
};

const faqs = [
  {
    q: 'Do you serve all of Manhattan for black car service?',
    a: 'Yes. We cover all Manhattan neighborhoods — Midtown, Financial District, Upper East Side, Upper West Side, Harlem, Chelsea, SoHo, Tribeca, and more. No area surcharges.',
  },
  {
    q: 'How much is a Manhattan black car service to JFK?',
    a: 'Manhattan black car to JFK starts at $85 — flat rate, confirmed at booking, no surge pricing. The exact price depends on your Manhattan pickup address.',
  },
  {
    q: 'Is black car service in Manhattan more expensive than Uber?',
    a: 'In normal conditions, our black car rates are comparable to Uber Black. The key difference: our price is flat and confirmed at booking. Uber surges during peak hours, bad weather, and early mornings — we never do.',
  },
  {
    q: 'Can I book hourly black car service in Manhattan?',
    a: 'Absolutely. Our hourly hire service is perfect for back-to-back meetings, roadshows, or a full day of errands. Your driver stays with you for the entire booking. Contact us for hourly rates.',
  },
  {
    q: 'How do I book a black car for a Manhattan airport transfer?',
    a: 'Book online or via WhatsApp. Provide your Manhattan pickup address, destination airport, and flight details. We track your flight and confirm your driver the day before.',
  },
  {
    q: 'Is there a minimum booking for Manhattan black car rides?',
    a: 'Point-to-point rides have no minimum. Hourly bookings typically start at 2 hours. Contact us for specific requirements.',
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: 'Flat rate — locked at booking, no changes', uber: 'Surge pricing — doubles during peak hours and bad weather' },
  { feature: 'Driver', blackCar: 'Licensed, TLC-certified professional chauffeur', uber: 'Variable — no luxury standard required' },
  { feature: 'Vehicle', blackCar: 'Luxury sedan or SUV, always clean', uber: 'Unknown vehicle class until assigned' },
  { feature: 'Pickup', blackCar: 'Exact address — hotel lobby, building entrance', uber: 'May require walking to rideshare zone' },
  { feature: 'Hourly Use', blackCar: 'By the hour — driver stays with you all day', uber: 'Per trip only — re-book every time' },
  { feature: 'Corporate', blackCar: 'Invoicing, accounts, multi-vehicle coordination', uber: 'Expense reports only' },
];

export default function ManhattanPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
        { name: 'Manhattan', url: `${getSiteUrl()}/services/areas/manhattan` },
      ]} />
      <ServiceJsonLd
        name="Manhattan Black Car Service"
        description="Luxury black car and chauffeur service throughout Manhattan, New York City. Airport transfers, hourly hire, and corporate travel."
        areaServed="Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/manhattan`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Professional black car and chauffeur service throughout Manhattan. From Midtown business meetings
              to Financial District offices and Upper East Side residences — flat-rate pricing, no surge,
              and a luxury vehicle at your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Now
              </Link>
              <Link href="/services/hourly" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                Hourly Hire
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Manhattan Black Car Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/airport" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">JFK, LGA, EWR, HPN — flat rate</div>
              </Link>
              <Link href="/services/hourly" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Hourly Black Car</div>
                <div className="text-sm text-brand-grey mt-1">By the hour, your schedule</div>
              </Link>
              <Link href="/services/corporate" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Corporate Travel</div>
                <div className="text-sm text-brand-grey mt-1">Roadshows, exec transport</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Manhattan Black Car vs. Uber
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
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                Neighborhoods We Serve in Manhattan
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-brand-grey">
                <li>Midtown &amp; Times Square</li>
                <li>Financial District &amp; Wall Street</li>
                <li>Upper East Side</li>
                <li>Upper West Side</li>
                <li>Chelsea &amp; Meatpacking District</li>
                <li>SoHo &amp; Tribeca</li>
                <li>Gramercy &amp; Flatiron</li>
                <li>Central Park West</li>
                <li>Harlem &amp; East Harlem</li>
                <li>Battery Park &amp; Lower Manhattan</li>
                <li>Hell&apos;s Kitchen &amp; Hudson Yards</li>
                <li>Carnegie Hill &amp; Yorkville</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Airport Black Car Transfers from Manhattan
            </h2>
            <div className="space-y-3">
              {[
                { label: 'Manhattan to JFK Black Car', price: '$85+', time: '35–50 min', href: '/services/routes/manhattan-to-jfk-black-car-service' },
                { label: 'JFK to Manhattan Black Car', price: '$85+', time: '35–50 min', href: '/services/routes/jfk-to-manhattan-black-car-service' },
                { label: 'Manhattan to LGA Black Car', price: '$75+', time: '20–30 min', href: '/services/routes/manhattan-to-lga-black-car-service' },
                { label: 'LGA to Manhattan Black Car', price: '$75+', time: '20–30 min', href: '/services/routes/lga-to-manhattan-black-car-service' },
                { label: 'Manhattan to EWR Black Car', price: '$95+', time: '30–45 min', href: '/services/routes/manhattan-to-ewr-black-car-service' },
                { label: 'EWR to Manhattan Black Car', price: '$95+', time: '30–45 min', href: '/services/routes/ewr-to-manhattan-black-car-service' },
              ].map((r) => (
                <Link key={r.label} href={r.href} className="flex justify-between items-center bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
                  <span className="font-medium text-brand-black">{r.label}</span>
                  <span className="text-brand-grey text-sm">{r.price} · {r.time}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Manhattan Black Car Service — FAQ
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

      </div>
    </>
  );
}
