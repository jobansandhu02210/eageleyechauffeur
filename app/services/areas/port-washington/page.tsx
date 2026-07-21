import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Port Washington Car Service | JFK & LGA Transfers',
  description:
    'Port Washington black car service — flat-rate JFK & LGA airport transfers from Nassau County\'s North Shore waterfront. TLC-licensed chauffeur. No.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/port-washington` },
};

const faqs = [
  {
    q: 'How long does it take from Port Washington to JFK Airport?',
    a: 'Typically 30–45 minutes via the LIE and Belt Parkway. Port Washington is also close to LaGuardia — usually 30–40 minutes — making both airports convenient.',
  },
  {
    q: 'Do you offer Port Washington to Manhattan black car service?',
    a: 'Yes. Daily executive and corporate car service from Port Washington to Midtown Manhattan and all NYC destinations. Flat rates confirmed at booking — an alternative to the LIRR for door-to-door comfort.',
  },
  {
    q: 'Do you serve all neighborhoods in Port Washington?',
    a: 'Yes. Sands Point, Port Washington North, Flower Hill, Manorhaven, and all Port Washington peninsula addresses are fully covered.',
  },
  {
    q: 'Is there a car service from Port Washington to Westchester or Connecticut?',
    a: 'Yes. We provide transfers from Port Washington to Westchester County, HPN airport, and Connecticut destinations. Flat rate confirmed at booking.',
  },
];

const routes = [
  { label: 'Port Washington to JFK Airport', time: '30–45 min' },
  { label: 'Port Washington to LaGuardia (LGA)', time: '30–40 min' },
  { label: 'Port Washington to Newark (EWR)', time: '65–85 min' },
  { label: 'Port Washington to Manhattan (Midtown)', time: '55–70 min' },
  { label: 'Port Washington to Westchester (HPN)', time: '50–65 min' },
  { label: 'Port Washington to Brooklyn', time: '55–70 min' },
];

export default function PortWashingtonPage() {
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
          { name: 'Port Washington', url: `${siteUrl}/services/areas/port-washington` },
        ]}
      />
      <ServiceJsonLd
        name="Port Washington Car Service"
        description="Premium black car and chauffeur service in Port Washington, Nassau County. Flat-rate airport transfers to JFK and LGA from the North Shore waterfront community. 24/7 availability."
        areaServed="Port Washington, Nassau County, NY"
        url={`${siteUrl}/services/areas/port-washington`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · North Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Port Washington Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service in Port Washington, Nassau County&apos;s North Shore waterfront community. Flat-rate airport transfers to JFK and LaGuardia, executive rides into Manhattan, and 24/7 service — no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Port Washington Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Port Washington. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Port Washington Car Service — FAQ</h2>
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
              <Link href="/services/airport/lga" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">LaGuardia (LGA) Transfers</div>
                <div className="text-sm text-brand-grey mt-1">Convenient for North Shore</div>
              </Link>
              <Link href="/services/areas/great-neck" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Great Neck Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring North Shore community</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Port Washington Ride</h2>
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
