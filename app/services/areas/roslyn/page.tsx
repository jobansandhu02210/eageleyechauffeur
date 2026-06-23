import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Roslyn Car Service | Black Car & Airport Transfers Nassau County | Eagle Eye',
  description:
    'Roslyn black car service — flat-rate JFK & LGA airport transfers from the Gold Coast North Shore. Roslyn Heights & Roslyn Harbor covered. No surge pricing. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/roslyn` },
};

const faqs = [
  {
    q: 'How long is the drive from Roslyn to JFK Airport?',
    a: 'Typically 25–40 minutes via the LIE and Belt Parkway. Roslyn also has convenient access to LaGuardia — usually 25–40 minutes — making both airports practical depending on your airline.',
  },
  {
    q: 'Do you serve Roslyn Heights and Roslyn Harbor as well as the village?',
    a: 'Yes. We cover the entire Roslyn area including Roslyn village, Roslyn Heights, Roslyn Harbor, and Roslyn Estates — all under the same flat-rate standard.',
  },
  {
    q: 'Is there executive car service from Roslyn to Manhattan?',
    a: 'Yes. Point-to-point and hourly executive car service from Roslyn to any Manhattan destination. Flat rates confirmed at booking, professional chauffeur, door-to-door.',
  },
  {
    q: 'Do you provide black car service for Roslyn events and weddings?',
    a: 'Yes. We serve events, galas, weddings, and special occasions throughout Roslyn and Nassau County. Hourly packages available for multi-stop itineraries.',
  },
];

const routes = [
  { label: 'Roslyn to JFK Airport', time: '25–40 min' },
  { label: 'Roslyn to LaGuardia (LGA)', time: '25–40 min' },
  { label: 'Roslyn to Newark (EWR)', time: '60–80 min' },
  { label: 'Roslyn to Manhattan (Midtown)', time: '50–65 min' },
  { label: 'Roslyn to Westchester (HPN)', time: '45–60 min' },
  { label: 'Roslyn to Brooklyn', time: '50–65 min' },
];

export default function RoslynPage() {
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
          { name: 'Roslyn', url: `${siteUrl}/services/areas/roslyn` },
        ]}
      />
      <ServiceJsonLd
        name="Roslyn Car Service"
        description="Premium black car and chauffeur service in Roslyn, Nassau County. Flat-rate airport transfers to JFK and LGA from the Gold Coast North Shore. Corporate travel and 24/7 availability."
        areaServed="Roslyn, Nassau County, NY"
        url={`${siteUrl}/services/areas/roslyn`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · Gold Coast North Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Roslyn Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service throughout Roslyn — the village, Roslyn Heights, and Roslyn Harbor. Flat-rate airport transfers to JFK and LGA, executive rides to Manhattan, and 24/7 service with no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Roslyn Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Roslyn. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Roslyn Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">Meet & greet, all terminals</div>
              </Link>
              <Link href="/services/areas/manhasset" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhasset Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring Gold Coast community</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Roslyn Ride</h2>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">Flat rates confirmed at booking. Available 24/7. No surge pricing.</p>
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
