import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Long Island Black Car Service | NYC Airport Transfers & Chauffeur | Eagle Eye',
  description:
    'Long Island black car service — airport transfers to JFK, LGA, EWR from Nassau and Suffolk County. Flat-rate pricing, professional chauffeurs. Book Eagle Eye Chauffeur 24/7.',
  keywords: ['Long Island black car service', 'Long Island chauffeur', 'Long Island to JFK car service', 'Hamptons car service', 'Nassau County black car'],
  alternates: { canonical: `${getSiteUrl()}/services/areas/long-island` },
};

const faqs = [
  {
    q: 'How much is a black car from Long Island to JFK Airport?',
    a: 'Long Island black car service to JFK starts at $70 for shorter Nassau County locations like Garden City or Great Neck. Price varies by your exact pickup location and vehicle choice.',
  },
  {
    q: 'Do you serve both Nassau and Suffolk County?',
    a: 'Yes. We serve all of Nassau County (Garden City, Great Neck, Manhasset, Hempstead, Roslyn, Jericho) and Suffolk County (Huntington, Babylon, Melville, Port Washington, Smithtown, Hauppauge, Oyster Bay).',
  },
  {
    q: 'Can I book black car service from the Hamptons to JFK?',
    a: 'Yes. We provide Hamptons to JFK black car service from Southampton, East Hampton, Bridgehampton, Amagansett, and Montauk. Advance booking recommended for summer weekends.',
  },
  {
    q: 'Is Long Island black car service available early in the morning?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. Early morning departures from any Long Island location are fully covered — your driver is confirmed the evening before.',
  },
  {
    q: 'Do you serve Long Island for corporate travel and hourly hire?',
    a: 'Absolutely. We provide hourly black car hire for Long Island corporate clients, including transportation for roadshows, executive meetings, and multi-stop business days.',
  },
];

export default function LongIslandPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
        { name: 'Long Island', url: `${getSiteUrl()}/services/areas/long-island` },
      ]} />
      <ServiceJsonLd
        name="Long Island Black Car Service"
        description="Luxury black car and chauffeur service throughout Long Island, New York. Airport transfers to JFK, LGA, EWR from Nassau and Suffolk County."
        areaServed="Long Island, New York"
        url={`${getSiteUrl()}/services/areas/long-island`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Service Areas</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
              Long Island Black Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl">
              Luxury black car and chauffeur service across Nassau and Suffolk County. Airport transfers,
              corporate travel, and Hamptons rides — flat-rate pricing, no surge, professional chauffeurs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Book Now
              </Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-6">
              Long Island Black Car Pricing
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Garden City / Hempstead → JFK', price: '$70+', time: '20–30 min' },
                { from: 'Great Neck / Manhasset → JFK', price: '$80+', time: '25–35 min' },
                { from: 'Roslyn / Jericho → JFK', price: '$85+', time: '30–40 min' },
                { from: 'Huntington / Babylon → JFK', price: '$95+', time: '40–55 min' },
                { from: 'Hamptons (Southampton / East Hampton) → JFK', price: '$185+', time: '90–120 min' },
                { from: 'Long Island → Manhattan', price: '$80+', time: '30–50 min' },
                { from: 'Long Island → EWR', price: '$120+', time: '50–70 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.price} · {r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All rates are flat. Gratuity and tolls included. No surge pricing.</p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
              Areas We Serve on Long Island
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-brand-black mb-3">Nassau County</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Garden City', 'Great Neck', 'Manhasset', 'Roslyn', 'Jericho', 'Syosset', 'Woodbury', 'Hempstead', 'Oyster Bay', 'Port Washington'].map((n) => (
                    <div key={n} className="p-2 bg-brand-offwhite border border-brand-light text-sm text-brand-dark">
                      {n}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-brand-black mb-3">Suffolk County &amp; Hamptons</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Huntington', 'Melville', 'Babylon', 'Southampton', 'East Hampton', 'Bridgehampton', 'Amagansett', 'Montauk', 'Smithtown', 'Hauppauge'].map((n) => (
                    <div key={n} className="p-2 bg-brand-offwhite border border-brand-light text-sm text-brand-dark">
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-6">
              Popular Long Island Black Car Routes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { route: 'Long Island to JFK Airport', href: '/services/airport/jfk' },
                { route: 'Long Island to LaGuardia (LGA)', href: '/services/airport/lga' },
                { route: 'Long Island to Newark (EWR)', href: '/services/airport/ewr' },
                { route: 'Long Island to Manhattan', href: '/services/areas/manhattan' },
                { route: 'Great Neck to JFK Black Car', href: '/services/airport/jfk' },
                { route: 'Garden City to JFK Black Car', href: '/services/airport/jfk' },
                { route: 'Hamptons to NYC Black Car', href: '/services/areas/manhattan' },
                { route: 'Long Island to the Hamptons', href: '/services/areas/hamptons' },
              ].map((item) => (
                <Link key={item.route} href={item.href} className="flex items-center gap-3 p-3 border border-brand-light bg-brand-white hover:border-brand-dark text-sm text-brand-dark transition-colors">
                  <span className="text-brand-silver">→</span>
                  {item.route}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Long Island Black Car Service — FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-1">{faq.q}</h3>
                  <p className="text-sm text-brand-grey">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-offwhite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">Book Your Long Island Black Car</h2>
            <p className="text-brand-grey mb-8">Available 24/7. Flat-rate pricing. Instant quote online or reach us on WhatsApp.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Get an Instant Quote
              </Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
