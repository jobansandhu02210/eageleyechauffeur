import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Mineola Car Service | Black Car & JFK Airport Transfers Nassau County | Eagle Eye',
  description:
    'Mineola black car and chauffeur service — flat-rate JFK, LGA & EWR airport transfers from the Nassau County seat. TLC-licensed driver. No surge pricing. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/mineola` },
};

const faqs = [
  {
    q: 'How long is the drive from Mineola to JFK Airport?',
    a: 'Typically 20–30 minutes via the Belt Parkway or Southern State Parkway. Mineola is centrally located in Nassau County with easy access to both major parkways heading west toward JFK.',
  },
  {
    q: 'Do you serve Mineola for early morning airport pickups?',
    a: 'Yes — Eagle Eye operates 24/7. Early morning departures are among our most common runs. Your driver is confirmed the evening before, your rate is locked, and there is no surge pricing at any hour.',
  },
  {
    q: 'Can I book a Mineola to Manhattan black car for corporate travel?',
    a: 'Yes. Point-to-point service from Mineola to any Manhattan destination, plus hourly hire for full days of meetings. Flat rates confirmed at booking.',
  },
  {
    q: 'Do you serve Winthrop University Hospital area in Mineola?',
    a: 'Yes. We provide medical appointment transportation, hospital transfers, and all point-to-point rides throughout Mineola — including the hospital and courthouse district.',
  },
];

const routes = [
  { label: 'Mineola to JFK Airport', time: '20–30 min' },
  { label: 'Mineola to LaGuardia (LGA)', time: '28–40 min' },
  { label: 'Mineola to Newark (EWR)', time: '55–70 min' },
  { label: 'Mineola to Manhattan (Midtown)', time: '45–60 min' },
  { label: 'Mineola to Brooklyn', time: '40–55 min' },
  { label: 'Mineola to Westchester (HPN)', time: '50–65 min' },
];

export default function MineolaPage() {
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
          { name: 'Mineola', url: `${siteUrl}/services/areas/mineola` },
        ]}
      />
      <ServiceJsonLd
        name="Mineola Car Service"
        description="Premium black car and chauffeur service in Mineola, Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR. Corporate travel and 24/7 availability."
        areaServed="Mineola, Nassau County, NY"
        url={`${siteUrl}/services/areas/mineola`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County Seat</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Mineola Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service in Mineola, the Nassau County seat. Flat-rate airport transfers to JFK in under 30 minutes, executive corporate rides into Manhattan, and 24/7 availability — no surge pricing, ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Get an Instant Quote
              </Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Mineola Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Mineola. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Mineola Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">Meet & greet, flight tracking</div>
              </Link>
              <Link href="/services/areas/garden-city" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Garden City Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring community</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Mineola Ride</h2>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">Flat rates confirmed at booking. Available 24/7. No surge pricing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Get an Instant Quote
              </Link>
              <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-flex items-center justify-center px-8 py-4 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors">
                Call {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
