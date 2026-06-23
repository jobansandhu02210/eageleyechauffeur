import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Ronkonkoma Car Service | Black Car, JFK & MacArthur Airport Transfers | Eagle Eye',
  description:
    'Ronkonkoma black car service — flat-rate JFK, LGA, EWR & MacArthur (ISP) airport transfers from central Suffolk County. No surge pricing. TLC-licensed. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/ronkonkoma` },
};

const faqs = [
  {
    q: 'How long is the drive from Ronkonkoma to JFK Airport?',
    a: 'Typically 40–55 minutes via the Long Island Expressway (LIE) and Belt Parkway. Ronkonkoma is centrally located in Suffolk with direct LIE access westbound to JFK.',
  },
  {
    q: 'Do you provide transfers to MacArthur Airport (ISP) from Ronkonkoma?',
    a: 'Yes. Long Island MacArthur Airport is just minutes from Ronkonkoma. We provide flat-rate transfers to ISP for departures and meet-and-greet arrivals service.',
  },
  {
    q: 'Is there a car service from Ronkonkoma to Manhattan?',
    a: 'Yes. Door-to-door from Ronkonkoma to any Manhattan destination. Flat rate confirmed at booking — a comfortable alternative to the LIRR for direct service.',
  },
  {
    q: 'Do you serve Lake Ronkonkoma and surrounding communities?',
    a: 'Yes. We serve all of Ronkonkoma including the Lake Ronkonkoma area, and neighboring communities like Hauppauge, Holbrook, and Bohemia.',
  },
];

const routes = [
  { label: 'Ronkonkoma to JFK Airport', time: '40–55 min' },
  { label: 'Ronkonkoma to MacArthur Airport (ISP)', time: '5–15 min' },
  { label: 'Ronkonkoma to LaGuardia (LGA)', time: '45–60 min' },
  { label: 'Ronkonkoma to Newark (EWR)', time: '75–95 min' },
  { label: 'Ronkonkoma to Manhattan (Midtown)', time: '70–85 min' },
  { label: 'Ronkonkoma to Brooklyn', time: '60–75 min' },
];

export default function RonkonkomaPage() {
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
          { name: 'Ronkonkoma', url: `${siteUrl}/services/areas/ronkonkoma` },
        ]}
      />
      <ServiceJsonLd
        name="Ronkonkoma Car Service"
        description="Premium black car and chauffeur service in Ronkonkoma, Suffolk County. Flat-rate transfers to JFK, LGA, EWR, and MacArthur Airport (ISP). TLC-licensed, 24/7 availability."
        areaServed="Ronkonkoma, Suffolk County, NY"
        url={`${siteUrl}/services/areas/ronkonkoma`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · MacArthur Airport Hub</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Ronkonkoma Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service in Ronkonkoma, central Suffolk County — minutes from MacArthur Airport (ISP). Flat-rate transfers to all airports including JFK, LGA, EWR, and ISP. No surge pricing. Available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Ronkonkoma Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Ronkonkoma. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Ronkonkoma Car Service — FAQ</h2>
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
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Ronkonkoma Ride</h2>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">Flat rates confirmed at booking. All airports covered. No surge pricing. 24/7.</p>
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
