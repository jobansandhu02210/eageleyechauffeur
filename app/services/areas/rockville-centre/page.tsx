import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Rockville Centre Car Service | Black Car & Airport Transfers Nassau | Eagle Eye',
  description:
    'Rockville Centre black car service — flat-rate JFK, LGA & EWR airport transfers from Nassau County\'s South Shore. TLC-licensed chauffeur. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/rockville-centre` },
};

const faqs = [
  {
    q: 'How long is the drive from Rockville Centre to JFK Airport?',
    a: 'Typically 20–35 minutes via the Belt Parkway. Rockville Centre is a centrally located South Shore Nassau community with direct access to the Southern State Parkway heading west toward JFK.',
  },
  {
    q: 'Do you offer Rockville Centre to Manhattan executive car service?',
    a: 'Yes. Daily corporate and executive rides from Rockville Centre to Midtown Manhattan, the Financial District, and all NYC destinations. Flat rates confirmed at booking.',
  },
  {
    q: 'Is there a flat rate for Rockville Centre black car service?',
    a: 'Yes. Every Eagle Eye booking is flat-rate — confirmed at the time you book, never changed for traffic, time of day, or weather.',
  },
  {
    q: 'Do you serve Oceanside, Baldwin, and neighboring South Shore towns?',
    a: 'Yes. We serve Rockville Centre and all surrounding South Shore communities including Oceanside, Baldwin, Lynbrook, and Malverne under the same flat-rate standard.',
  },
];

const routes = [
  { label: 'Rockville Centre to JFK Airport', time: '20–35 min' },
  { label: 'Rockville Centre to LaGuardia (LGA)', time: '35–50 min' },
  { label: 'Rockville Centre to Newark (EWR)', time: '55–75 min' },
  { label: 'Rockville Centre to Manhattan (Midtown)', time: '50–65 min' },
  { label: 'Rockville Centre to Brooklyn', time: '35–50 min' },
  { label: 'Rockville Centre to Long Beach', time: '15–25 min' },
];

export default function RockvilleCentrePage() {
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
          { name: 'Rockville Centre', url: `${siteUrl}/services/areas/rockville-centre` },
        ]}
      />
      <ServiceJsonLd
        name="Rockville Centre Car Service"
        description="Premium black car and chauffeur service in Rockville Centre, Nassau County. Flat-rate JFK, LGA, and EWR airport transfers. Corporate travel and 24/7 availability."
        areaServed="Rockville Centre, Nassau County, NY"
        url={`${siteUrl}/services/areas/rockville-centre`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · South Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Rockville Centre Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service in Rockville Centre, Nassau County. Flat-rate airport transfers to JFK in under 35 minutes, executive rides to Manhattan, and 24/7 service with no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Rockville Centre Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Rockville Centre. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Rockville Centre Car Service — FAQ</h2>
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
              <Link href="/services/areas/long-beach" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Long Beach Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring South Shore city</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Rockville Centre Ride</h2>
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
