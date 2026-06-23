import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Patchogue Car Service | Black Car & JFK Airport Transfers Suffolk County | Eagle Eye',
  description:
    'Patchogue black car service — flat-rate JFK, LGA & EWR airport transfers from the Suffolk County South Shore. Medford & Blue Point also covered. No surge pricing. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/patchogue` },
};

const faqs = [
  {
    q: 'How long is the drive from Patchogue to JFK Airport?',
    a: 'Typically 40–60 minutes via the Southern State Parkway and Belt Parkway. Patchogue has direct parkway access westbound toward JFK, and our drivers know the most efficient route for current traffic conditions.',
  },
  {
    q: 'Do you serve Medford, Blue Point, and East Patchogue near Patchogue?',
    a: 'Yes. We cover the entire Patchogue area including North Patchogue, Medford, Blue Point, and East Patchogue — all under the same flat-rate standard.',
  },
  {
    q: 'Is there a car service from Patchogue to Manhattan?',
    a: 'Yes. Door-to-door from Patchogue to any Manhattan destination — flat rate confirmed at booking. MacArthur Airport (ISP) transfers are also available.',
  },
  {
    q: 'Do you provide car service to MacArthur Airport (ISP) from Patchogue?',
    a: 'Yes. Long Island MacArthur Airport in Ronkonkoma is approximately 20–30 minutes from Patchogue. We provide transfers to ISP as well as all three major NYC airports.',
  },
];

const routes = [
  { label: 'Patchogue to JFK Airport', time: '40–60 min' },
  { label: 'Patchogue to LaGuardia (LGA)', time: '50–65 min' },
  { label: 'Patchogue to Newark (EWR)', time: '75–95 min' },
  { label: 'Patchogue to Manhattan (Midtown)', time: '70–90 min' },
  { label: 'Patchogue to MacArthur Airport (ISP)', time: '20–30 min' },
  { label: 'Patchogue to Brooklyn', time: '60–75 min' },
];

export default function PatchoguePage() {
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
          { name: 'Patchogue', url: `${siteUrl}/services/areas/patchogue` },
        ]}
      />
      <ServiceJsonLd
        name="Patchogue Car Service"
        description="Premium black car and chauffeur service in Patchogue, Suffolk County. Flat-rate airport transfers to JFK, LGA, EWR, and MacArthur ISP. Corporate travel and 24/7 availability."
        areaServed="Patchogue, Suffolk County, NY"
        url={`${siteUrl}/services/areas/patchogue`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · South Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Patchogue Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service in Patchogue, Suffolk County. Flat-rate airport transfers to JFK, LGA, EWR, and MacArthur ISP, rides to Manhattan, and 24/7 service — no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Patchogue Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Patchogue. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Patchogue Car Service — FAQ</h2>
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
              <Link href="/services/areas/ronkonkoma" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Ronkonkoma Service</div>
                <div className="text-sm text-brand-grey mt-1">MacArthur Airport nearby</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Patchogue Ride</h2>
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
