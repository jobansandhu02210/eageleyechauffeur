import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Valley Stream Car Service | Black Car & JFK Airport Transfers | Eagle Eye Chauffeur',
  description:
    'Valley Stream black car service — flat-rate JFK airport transfers in as little as 15 minutes. LGA & EWR also covered. TLC-licensed chauffeur. No surge pricing. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/valley-stream` },
};

const faqs = [
  {
    q: 'How close is Valley Stream to JFK Airport?',
    a: 'Valley Stream is one of the closest Nassau County communities to JFK — typically just 15–25 minutes via the Belt Parkway. It sits right on the Queens/Nassau border, making JFK airport transfers exceptionally fast and affordable.',
  },
  {
    q: 'Do you serve all of Valley Stream including South Valley Stream and Gibson?',
    a: 'Yes. We serve all Valley Stream neighborhoods including South Valley Stream, Gibson, and every residential address in the 11580 and 11581 zip codes.',
  },
  {
    q: 'Is there surge pricing for Valley Stream to JFK rides?',
    a: 'Never. Your rate is flat and confirmed at booking — even for 4am JFK departures on peak travel days. What you see is what you pay.',
  },
  {
    q: 'Can I book a Valley Stream to Manhattan black car for daily commuting?',
    a: 'Yes. We offer both point-to-point and hourly car service for Valley Stream to Manhattan commuters and executives. Flat rates, professional chauffeur, door-to-door service.',
  },
];

const routes = [
  { label: 'Valley Stream to JFK Airport', time: '15–25 min' },
  { label: 'Valley Stream to LaGuardia (LGA)', time: '30–40 min' },
  { label: 'Valley Stream to Newark (EWR)', time: '50–65 min' },
  { label: 'Valley Stream to Manhattan (Midtown)', time: '40–55 min' },
  { label: 'Valley Stream to Brooklyn', time: '25–40 min' },
  { label: 'Valley Stream to Queens', time: '20–30 min' },
];

export default function ValleyStreamPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Nassau County', url: `${siteUrl}/services/areas/nassau-county` },
          { name: 'Valley Stream', url: `${siteUrl}/services/areas/valley-stream` },
        ]}
      />
      <ServiceJsonLd
        name="Valley Stream Car Service"
        description="Premium black car service in Valley Stream, NY. Flat-rate JFK airport transfers in as little as 15 minutes. One of the closest Nassau communities to JFK. TLC-licensed, 24/7."
        areaServed="Valley Stream, Nassau County, NY"
        url={`${siteUrl}/services/areas/valley-stream`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · Closest to JFK</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Valley Stream Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Valley Stream is one of the closest Nassau County communities to JFK Airport — just 15–25 minutes away. Eagle Eye Chauffeur provides flat-rate black car service with no surge pricing, professional drivers, and 24/7 availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Valley Stream Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Valley Stream. All tolls included. Flat rates confirmed at booking.</p>
            <div className="space-y-3">
              {routes.map((r) => (
                <div key={r.label} className="bg-brand-offwhite border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black text-sm">{r.label}</span>
                  <span className="text-brand-grey text-sm tabular-nums">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4"><Link href="/book" className="underline">Get a flat-rate quote →</Link></p>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Valley Stream Car Service — FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-2">{faq.q}</h3>
                  <p className="text-sm text-brand-grey">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/areas/nassau-county" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau communities</div>
              </Link>
              <Link href="/services/airport/jfk" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">15 min from Valley Stream</div>
              </Link>
              <Link href="/services/areas/elmont" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Elmont Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring community near JFK</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Valley Stream Ride</h2>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">JFK in 15 minutes. Flat rates. Available 24/7. No surge pricing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-flex items-center justify-center px-8 py-4 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors">Call {CONTACT_PHONE_DISPLAY}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
