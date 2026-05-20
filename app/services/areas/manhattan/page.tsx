import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Manhattan Chauffeur Service | Luxury Black Car NYC | Eagle Eye',
  description:
    'Premium Manhattan chauffeur service. Luxury black car for business travel, airport transfers to JFK LGA EWR, and hourly hire. Professional drivers, no surge pricing. Book Eagle Eye Chauffeur.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/manhattan` },
};

const faqs = [
  {
    q: 'Do you serve all of Manhattan?',
    a: 'Yes. We cover all Manhattan neighborhoods — Midtown, Financial District, Upper East Side, Upper West Side, Harlem, Chelsea, SoHo, Tribeca, and more.',
  },
  {
    q: 'Can I book hourly chauffeur service in Manhattan?',
    a: 'Absolutely. Our hourly hire service is perfect for back-to-back meetings, roadshows, or a full day of errands. Your driver stays with you for the entire booking.',
  },
  {
    q: 'How do I book airport transfer from Manhattan?',
    a: 'Book online or via WhatsApp. Provide your Manhattan pickup address, destination airport, and flight details. We track your flight and confirm your driver the day before.',
  },
  {
    q: 'Is there a minimum booking for Manhattan rides?',
    a: 'Point-to-point rides have no minimum. Hourly bookings typically start at 2 hours. Contact us for specific requirements.',
  },
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
        name="Manhattan Chauffeur Service"
        description="Luxury black car and chauffeur service throughout Manhattan, New York City. Airport transfers, hourly hire, and corporate travel."
        areaServed="Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/manhattan`}
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan Chauffeur Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Professional black car and chauffeur service throughout Manhattan. From Midtown business meetings
              to Financial District offices and Upper East Side residences — arrive on time, in style, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book Now
              </Link>
              <Link
                href="/services/hourly"
                className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors"
              >
                Hourly Hire
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Manhattan Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/airport" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">JFK, LGA, EWR, HPN</div>
              </Link>
              <Link href="/services/hourly" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Hourly Chauffeur</div>
                <div className="text-sm text-brand-grey mt-1">By the hour, your schedule</div>
              </Link>
              <Link href="/services/corporate" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Corporate Travel</div>
                <div className="text-sm text-brand-grey mt-1">Roadshows, exec transport</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                Neighborhoods We Serve in Manhattan
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-brand-grey">
                <li>Midtown & Times Square</li>
                <li>Financial District & Wall Street</li>
                <li>Upper East Side</li>
                <li>Upper West Side</li>
                <li>Chelsea & Meatpacking District</li>
                <li>SoHo & Tribeca</li>
                <li>Gramercy & Flatiron</li>
                <li>Central Park West</li>
                <li>Harlem & East Harlem</li>
                <li>Battery Park & Lower Manhattan</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Airport routes from Manhattan */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Airport Transfers from Manhattan
            </h2>
            <div className="space-y-3">
              {[
                { label: 'Manhattan → JFK', price: '$85+', time: '35-50 min', href: '/services/routes/jfk-to-manhattan' },
                { label: 'Manhattan → LGA', price: '$75+', time: '20-35 min', href: '/services/airport/lga' },
                { label: 'Manhattan → EWR', price: '$95+', time: '30-45 min', href: '/services/airport/ewr' },
                { label: 'Manhattan → HPN', price: '$120+', time: '45-60 min', href: '/services/airport/hpn' },
              ].map((r) => (
                <Link key={r.label} href={r.href} className="flex justify-between items-center bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
                  <span className="font-medium text-brand-black">{r.label}</span>
                  <span className="text-brand-grey text-sm">{r.price} · {r.time}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Manhattan Chauffeur FAQ
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
