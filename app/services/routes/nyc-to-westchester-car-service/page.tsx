import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'NYC to Westchester Car Service | Black Car to Westchester | Eagle Eye Chauffeur',
  description:
    'NYC to Westchester car service — flat-rate black car, professional chauffeur, door-to-door. White Plains, Scarsdale, Greenwich, Stamford. No surge pricing. Book Eagle Eye Chauffeur.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/nyc-to-westchester-car-service` },
};

const faqs = [
  {
    q: 'How much is a car service from NYC to Westchester?',
    a: 'All rates are flat and confirmed at booking — no surge pricing. Pricing varies by your NYC pickup location and Westchester destination. Get an instant quote on our booking page.',
  },
  {
    q: 'How long does NYC to Westchester take?',
    a: 'From Midtown Manhattan, expect 30–60 minutes depending on your Westchester destination and traffic. White Plains is typically 35–45 minutes; Greenwich/Stamford area 45–60 minutes.',
  },
  {
    q: 'Which Westchester towns do you serve?',
    a: 'We serve all Westchester County — White Plains, Scarsdale, Rye, Yonkers, New Rochelle, Bronxville, Larchmont, Mamaroneck, Port Chester, and across the Connecticut border to Greenwich and Stamford.',
  },
  {
    q: 'Do you offer corporate car service to Westchester offices?',
    a: 'Yes. We are a preferred corporate transportation provider for professionals commuting between NYC and Westchester business districts. Monthly accounts and invoicing available.',
  },
  {
    q: 'Can you pick up from JFK or LGA and go directly to Westchester?',
    a: 'Yes. Airport-to-Westchester is a popular route. We track your flight and pick you up at arrivals, then drive directly to your Westchester address — no stops.',
  },
];

export default function NYCToWestchesterPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'NYC to Westchester Car Service', url: `${getSiteUrl()}/services/routes/nyc-to-westchester-car-service` },
      ]} />
      <ServiceJsonLd
        name="NYC to Westchester Car Service"
        description="Luxury black car service from New York City to all Westchester County destinations. Flat rates, professional chauffeur, door-to-door."
        areaServed="Westchester County, NY"
        url={`${getSiteUrl()}/services/routes/nyc-to-westchester-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              NYC to Westchester Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Eagle Eye Chauffeur connects New York City to all Westchester County destinations with
              flat-rate black car service. Whether it&apos;s a corporate commute, airport connection, or
              special occasion — your professional chauffeur handles the drive so you don&apos;t have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book NYC to Westchester
              </Link>
              <Link href="/services/areas/westchester" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                Westchester Service Details
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular NYC to Westchester Routes
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Manhattan → White Plains', time: '35–50 min' },
                { from: 'Manhattan → Scarsdale', time: '35–45 min' },
                { from: 'Manhattan → Yonkers', time: '25–40 min' },
                { from: 'Manhattan → New Rochelle', time: '30–45 min' },
                { from: 'Manhattan → Bronxville', time: '30–45 min' },
                { from: 'Manhattan → Larchmont / Mamaroneck', time: '35–50 min' },
                { from: 'Manhattan → Rye / Port Chester', time: '40–55 min' },
                { from: 'Manhattan → Greenwich, CT', time: '45–65 min' },
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
              NYC to Westchester — FAQ
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
                Book Your NYC to Westchester Car Service
              </h2>
              <p className="text-brand-silver mb-6">Flat rate. Professional chauffeur. Door to door.</p>
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
