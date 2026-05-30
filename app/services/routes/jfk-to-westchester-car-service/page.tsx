import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'JFK to Westchester Car Service | Airport Black Car | Eagle Eye Chauffeur',
  description:
    'JFK Airport to Westchester car service — flat rates, real-time flight tracking, meet & greet at arrivals. White Plains, Scarsdale, Greenwich. No surge pricing. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/jfk-to-westchester-car-service` },
};

const faqs = [
  {
    q: 'How much is a car service from JFK to Westchester?',
    a: 'All rates are flat and confirmed at booking — no surge pricing. JFK to Westchester is a popular long-haul airport transfer. Get an instant quote on our booking page.',
  },
  {
    q: 'How long does it take from JFK to Westchester?',
    a: 'Depending on your Westchester destination and traffic: White Plains is typically 50–70 minutes from JFK; Scarsdale 45–65 minutes; Yonkers 40–55 minutes; Greenwich CT 65–80 minutes.',
  },
  {
    q: 'Do you track my flight for a JFK to Westchester transfer?',
    a: 'Yes. We monitor your JFK arrival in real time. If your flight is delayed or arrives early, your driver adjusts automatically — no extra charge and no calls needed.',
  },
  {
    q: 'Can you take me from JFK directly to a Westchester hotel or office?',
    a: 'Yes. We provide fully door-to-door service — from your JFK terminal directly to any Westchester address. Hotels, corporate parks, private residences — all covered.',
  },
  {
    q: 'Is JFK to Westchester available at 3am for early morning flights?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. Early morning departures and late night arrivals for Westchester transfers are fully covered.',
  },
];

export default function JFKToWestchesterPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'JFK to Westchester Car Service', url: `${getSiteUrl()}/services/routes/jfk-to-westchester-car-service` },
      ]} />
      <ServiceJsonLd
        name="JFK to Westchester Car Service"
        description="Premium black car service from JFK Airport to all Westchester County destinations. Flat rates, real-time flight tracking, meet & greet at arrivals. 24/7 availability."
        areaServed="Westchester County, NY"
        url={`${getSiteUrl()}/services/routes/jfk-to-westchester-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              JFK to Westchester Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Flying into JFK and heading to Westchester? Eagle Eye Chauffeur provides a flat-rate,
              door-to-door black car service with a professional chauffeur waiting at your terminal.
              No shared shuttles, no surge pricing, no stops — straight to your Westchester destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book JFK to Westchester
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
              Popular JFK to Westchester Routes
            </h2>
            <div className="space-y-3">
              {[
                { from: 'JFK → White Plains', time: '50–70 min' },
                { from: 'JFK → Scarsdale', time: '45–65 min' },
                { from: 'JFK → Yonkers', time: '40–55 min' },
                { from: 'JFK → New Rochelle', time: '40–55 min' },
                { from: 'JFK → Bronxville', time: '45–60 min' },
                { from: 'JFK → Larchmont / Mamaroneck', time: '45–65 min' },
                { from: 'JFK → Rye', time: '50–70 min' },
                { from: 'JFK → Greenwich, CT', time: '65–85 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All rates flat and confirmed at booking. <Link href="/book" className="underline">Get an instant quote →</Link></p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              JFK to Westchester — FAQ
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
                Book Your JFK to Westchester Car Service
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
