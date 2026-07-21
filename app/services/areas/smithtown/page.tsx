import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Smithtown Car Service | JFK Transfers Suffolk County',
  description:
    'Smithtown black car service — flat-rate JFK, LGA & EWR airport transfers from central Suffolk County. Kings Park & St. James also covered. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/smithtown` },
};

const faqs = [
  {
    q: 'How long is the drive from Smithtown to JFK Airport?',
    a: 'Typically 45–65 minutes via the Long Island Expressway (LIE) and Belt Parkway. Smithtown has direct LIE access, and the route is straightforward. We recommend departing at least 3 hours before your flight.',
  },
  {
    q: 'Do you serve Kings Park, St. James, and Nesconset near Smithtown?',
    a: 'Yes. We cover the entire Town of Smithtown including Kings Park, St. James, Nesconset, and Hauppauge — all at flat rates confirmed at booking.',
  },
  {
    q: 'Is there a flat-rate car service from Smithtown to Manhattan?',
    a: 'Yes. Door-to-door from Smithtown to any Manhattan destination — Midtown, the Financial District, or anywhere else — at a flat rate confirmed at the time you book.',
  },
  {
    q: 'Do you provide corporate car service from Smithtown for Hauppauge Industrial Park?',
    a: 'Yes. We serve the Hauppauge Industrial Park area and all corporate locations throughout Smithtown and central Suffolk County. Hourly hire available for full business days.',
  },
];

const routes = [
  { label: 'Smithtown to JFK Airport', time: '45–65 min' },
  { label: 'Smithtown to LaGuardia (LGA)', time: '50–65 min' },
  { label: 'Smithtown to Newark (EWR)', time: '80–100 min' },
  { label: 'Smithtown to Manhattan (Midtown)', time: '75–90 min' },
  { label: 'Smithtown to Brooklyn', time: '65–80 min' },
  { label: 'Smithtown to MacArthur Airport (ISP)', time: '20–30 min' },
];

export default function SmithtownPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Suffolk County', url: `${siteUrl}/services/areas/suffolk-county` },
          { name: 'Smithtown', url: `${siteUrl}/services/areas/smithtown` },
        ]}
      />
      <ServiceJsonLd
        name="Smithtown Car Service"
        description="Premium black car and chauffeur service in Smithtown, Suffolk County. Flat-rate airport transfers to JFK, LGA, and EWR. Corporate travel and 24/7 availability."
        areaServed="Smithtown, Suffolk County, NY"
        url={`${siteUrl}/services/areas/smithtown`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · Central</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Smithtown Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service in Smithtown, central Suffolk County. Flat-rate airport transfers to JFK, LGA, and EWR, executive rides to Manhattan, and 24/7 service — no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Smithtown Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Smithtown via the LIE. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Smithtown Car Service — FAQ</h2>
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
              <Link href="/services/areas/suffolk-county" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Suffolk County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Suffolk communities</div>
              </Link>
              <Link href="/services/airport/jfk" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">Meet & greet, all terminals</div>
              </Link>
              <Link href="/services/areas/hauppauge" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Hauppauge Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring community</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Smithtown Ride</h2>
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
