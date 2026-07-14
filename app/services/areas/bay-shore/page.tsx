import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Bay Shore Car Service | JFK Transfers Suffolk County | Eagle Eye',
  description:
    'Bay Shore black car service — flat-rate JFK, LGA & EWR airport transfers from Suffolk County\'s South Shore. Fire Island ferry area. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/bay-shore` },
};

const faqs = [
  {
    q: 'How long is the drive from Bay Shore to JFK Airport?',
    a: 'Typically 35–50 minutes via the Southern State Parkway and Belt Parkway. Bay Shore has direct access to the Southern State Parkway, and the route to JFK is a straightforward parkway run.',
  },
  {
    q: 'Do you serve the Bay Shore Fire Island ferry area?',
    a: 'Yes. We provide car service to and from the Bay Shore ferry terminal, in addition to all Bay Shore residential and commercial addresses.',
  },
  {
    q: 'Is there a flat-rate car service from Bay Shore to Manhattan?',
    a: 'Yes. Door-to-door from Bay Shore to any Manhattan destination — flat rate confirmed at booking, luxury vehicle, 24/7 availability.',
  },
  {
    q: 'Do you serve Brightwaters and Brentwood near Bay Shore?',
    a: 'Yes. We cover Bay Shore and all neighboring communities including Brightwaters, Brentwood, Central Islip, and Islip — all at flat rates.',
  },
];

const routes = [
  { label: 'Bay Shore to JFK Airport', time: '35–50 min' },
  { label: 'Bay Shore to LaGuardia (LGA)', time: '45–60 min' },
  { label: 'Bay Shore to Newark (EWR)', time: '70–90 min' },
  { label: 'Bay Shore to Manhattan (Midtown)', time: '65–85 min' },
  { label: 'Bay Shore to Brooklyn', time: '55–70 min' },
  { label: 'Bay Shore to MacArthur Airport (ISP)', time: '15–25 min' },
];

export default function BayShorePage() {
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
          { name: 'Bay Shore', url: `${siteUrl}/services/areas/bay-shore` },
        ]}
      />
      <ServiceJsonLd
        name="Bay Shore Car Service"
        description="Premium black car and chauffeur service in Bay Shore, Suffolk County. Flat-rate airport transfers to JFK, LGA, and EWR from the South Shore. Fire Island ferry area. 24/7 availability."
        areaServed="Bay Shore, Suffolk County, NY"
        url={`${siteUrl}/services/areas/bay-shore`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · South Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Bay Shore Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service in Bay Shore, Suffolk County — the main gateway to Fire Island. Flat-rate airport transfers to JFK, LGA, and EWR, rides to Manhattan, and 24/7 service with no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Bay Shore Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Bay Shore. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Bay Shore Car Service — FAQ</h2>
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
              <Link href="/services/areas/babylon" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Babylon Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring South Shore community</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Bay Shore Ride</h2>
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
