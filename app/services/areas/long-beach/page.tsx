import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Long Beach Car Service | JFK Transfers Nassau',
  description:
    'Long Beach NY black car service — flat-rate JFK, LGA & EWR airport transfers from the barrier island city. TLC-licensed chauffeur. No surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/long-beach` },
};

const faqs = [
  {
    q: 'How long is the drive from Long Beach to JFK Airport?',
    a: 'Typically 25–40 minutes via the Loop Parkway and Belt Parkway. Long Beach is on a barrier island connected to Nassau County by the Loop Parkway, and JFK is a straightforward run once you cross the bridge.',
  },
  {
    q: 'Do you pick up from anywhere in Long Beach including the beachfront?',
    a: 'Yes. We serve all Long Beach addresses — the boardwalk area, the city center, and all residential neighborhoods. Your chauffeur arrives at your exact address.',
  },
  {
    q: 'Is there a flat rate from Long Beach to Manhattan?',
    a: 'Yes. Every booking includes a flat rate confirmed at the time you book — no surge pricing, no meter. Door-to-door from Long Beach to any Manhattan destination.',
  },
  {
    q: 'Do you offer Long Beach airport transfers for early morning flights?',
    a: 'Yes — available 24/7. Early morning JFK and LGA departures are common runs from Long Beach. Your driver is confirmed the evening before and your rate never changes for off-hours service.',
  },
];

const routes = [
  { label: 'Long Beach to JFK Airport', time: '25–40 min' },
  { label: 'Long Beach to LaGuardia (LGA)', time: '40–55 min' },
  { label: 'Long Beach to Newark (EWR)', time: '60–80 min' },
  { label: 'Long Beach to Manhattan (Midtown)', time: '55–75 min' },
  { label: 'Long Beach to Brooklyn', time: '40–55 min' },
  { label: 'Long Beach to Nassau County', time: '20–35 min' },
];

export default function LongBeachPage() {
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
          { name: 'Long Beach', url: `${siteUrl}/services/areas/long-beach` },
        ]}
      />
      <ServiceJsonLd
        name="Long Beach NY Car Service"
        description="Premium black car and chauffeur service in Long Beach, NY. Flat-rate airport transfers to JFK, LGA, and EWR from Nassau County's barrier island city. 24/7 availability."
        areaServed="Long Beach, Nassau County, NY"
        url={`${siteUrl}/services/areas/long-beach`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · South Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Long Beach Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service in Long Beach, NY — Nassau County&apos;s South Shore barrier island city. Flat-rate airport transfers to JFK in under 40 minutes, rides to Manhattan, and 24/7 service with no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Long Beach Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Long Beach. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Long Beach Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">Closest airport for Long Beach</div>
              </Link>
              <Link href="/services/areas/rockville-centre" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Rockville Centre Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring South Shore community</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Long Beach Ride</h2>
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
