import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Manhattan to Hamptons Car Service | NYC to Hamptons Chauffeur | Eagle Eye',
  description:
    'Manhattan to Hamptons car service — flat-rate black car, professional chauffeur, door-to-door. Southampton, East Hampton, Bridgehampton, Montauk. No surge pricing. Book Eagle Eye Chauffeur.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/manhattan-to-hamptons-car-service` },
};

const faqs = [
  {
    q: 'How much is a car service from Manhattan to the Hamptons?',
    a: 'All rates are flat and confirmed at booking — no surge pricing. The Hamptons is a long-distance route, so pricing reflects the full door-to-door journey. Get an instant quote on our booking page by entering your Manhattan address and Hamptons destination.',
  },
  {
    q: 'How long does it take from Manhattan to the Hamptons?',
    a: 'Typical drive time is 2.5–4 hours depending on traffic, your Hamptons destination, and day of week. Summer Fridays are the heaviest — allow extra time. Your driver tracks conditions in real time and chooses the best route.',
  },
  {
    q: 'Do you serve all Hamptons villages?',
    a: 'Yes. We serve all Hamptons destinations — Southampton, East Hampton, Bridgehampton, Sag Harbor, Westhampton Beach, Montauk, and more. No area surcharges.',
  },
  {
    q: 'Can I book a one-way or round-trip car service to the Hamptons?',
    a: 'Both options are available. Many clients book round-trip for the weekend. We can also arrange a return pickup from the Hamptons at any time — just let us know when booking.',
  },
  {
    q: 'Is the Hamptons car service available for early morning departures?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. Early morning departures from Manhattan to avoid Hamptons traffic are a popular option — your driver can be at your door at 5am or earlier.',
  },
  {
    q: 'Do you offer Hamptons car service from other NYC boroughs?',
    a: 'Yes. We can pick up from Brooklyn, Queens, the Bronx, or Staten Island for Hamptons trips. Add your borough pickup address to the booking form for an accurate quote.',
  },
];

export default function ManhattanToHamptonsPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Manhattan to Hamptons Car Service', url: `${getSiteUrl()}/services/routes/manhattan-to-hamptons-car-service` },
      ]} />
      <ServiceJsonLd
        name="Manhattan to Hamptons Car Service"
        description="Luxury black car service from Manhattan to all Hamptons villages. Flat rates, professional chauffeur, door-to-door. Southampton, East Hampton, Montauk, Sag Harbor."
        areaServed="Hamptons, Southampton, East Hampton, NY"
        url={`${getSiteUrl()}/services/routes/manhattan-to-hamptons-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan to Hamptons Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              The Hamptons run deserves a vehicle and driver worthy of the destination. Eagle Eye Chauffeur
              provides flat-rate, door-to-door black car service from any Manhattan address directly to your
              Hamptons property — no tolls surprise, no traffic stress, no surge pricing on summer Fridays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Hamptons Car Service
              </Link>
              <Link href="/services/areas/hamptons" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                Hamptons Service Details
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Hamptons Destinations We Serve
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Manhattan → Southampton', time: '2.5–3.5 hrs' },
                { from: 'Manhattan → East Hampton', time: '3–4 hrs' },
                { from: 'Manhattan → Bridgehampton', time: '2.5–3.5 hrs' },
                { from: 'Manhattan → Sag Harbor', time: '3–4 hrs' },
                { from: 'Manhattan → Westhampton Beach', time: '2–3 hrs' },
                { from: 'Manhattan → Montauk', time: '3.5–5 hrs' },
                { from: 'Manhattan → Water Mill', time: '2.5–3.5 hrs' },
                { from: 'Manhattan → Amagansett', time: '3–4 hrs' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">Times are estimates. Summer Fridays: allow extra time. <Link href="/book" className="underline">Get a flat-rate quote →</Link></p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                Why Choose a Chauffeur for the Hamptons Run
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">No summer surge pricing</strong> — our flat rate is the same whether it&apos;s a Tuesday in October or a Friday in July.</li>
                <li><strong className="text-brand-black">Door-to-door service</strong> — from your Manhattan lobby directly to your Hamptons address. No parking, no stops.</li>
                <li><strong className="text-brand-black">Professional, discreet chauffeur</strong> — background-checked, TLC-licensed, and trained to a luxury standard.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — travel in comfort with plenty of space for luggage and weekend bags.</li>
                <li><strong className="text-brand-black">Work in the car</strong> — the back of our sedans and SUVs is your private office for the 3-hour drive.</li>
                <li><strong className="text-brand-black">24/7 availability</strong> — beat the traffic with an early morning departure or return Sunday evening.</li>
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
              <Link href="/services/areas/hamptons" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Hamptons Service</div>
                <div className="text-sm text-brand-grey mt-1">All Hamptons routes &amp; info</div>
              </Link>
              <Link href="/services/areas/long-island" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Long Island Service</div>
                <div className="text-sm text-brand-grey mt-1">Nassau &amp; Suffolk County rides</div>
              </Link>
              <Link href="/services/hourly" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Hourly Chauffeur</div>
                <div className="text-sm text-brand-grey mt-1">Keep your driver all day</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Manhattan to Hamptons — FAQ
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
                Book Your Hamptons Car Service
              </h2>
              <p className="text-brand-silver mb-6">Flat rate. Professional chauffeur. Door to door, Manhattan to the Hamptons.</p>
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
