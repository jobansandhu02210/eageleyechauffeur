import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Huntington Car Service | Black Car & JFK Airport Transfers Suffolk County | Eagle Eye',
  description:
    'Huntington NY black car service — flat-rate JFK, LGA & EWR airport transfers from Suffolk County\'s North Shore. Huntington Village & Cold Spring Harbor covered. No surge pricing. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/huntington` },
};

const faqs = [
  {
    q: 'How long is the drive from Huntington to JFK Airport?',
    a: 'Typically 45–65 minutes via the Long Island Expressway (LIE) and Belt Parkway. Huntington is in western Suffolk County, and the LIE provides direct access. We recommend departing at least 3 hours before your flight.',
  },
  {
    q: 'Do you serve Huntington Village, Huntington Station, and Cold Spring Harbor?',
    a: 'Yes. We cover all of the Town of Huntington including Huntington Village, Huntington Station, Cold Spring Harbor, Lloyd Neck, and Centerport — all under the same flat-rate standard.',
  },
  {
    q: 'Is there executive car service from Huntington to Manhattan?',
    a: 'Yes. Daily corporate car service from Huntington to Midtown Manhattan and all NYC destinations — flat rate, professional chauffeur, door-to-door. A practical alternative to the LIRR for executives.',
  },
  {
    q: 'Do you offer Huntington to LaGuardia (LGA) transfers?',
    a: 'Yes. LGA is approximately 45–60 minutes from Huntington via the LIE. For domestic flights, LGA is often a convenient option. We serve all three major NYC airports.',
  },
];

const routes = [
  { label: 'Huntington to JFK Airport', time: '45–65 min' },
  { label: 'Huntington to LaGuardia (LGA)', time: '45–60 min' },
  { label: 'Huntington to Newark (EWR)', time: '75–95 min' },
  { label: 'Huntington to Manhattan (Midtown)', time: '70–90 min' },
  { label: 'Huntington to Brooklyn', time: '65–80 min' },
  { label: 'Huntington to Westchester (HPN)', time: '70–90 min' },
];

export default function HuntingtonPage() {
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
          { name: 'Huntington', url: `${siteUrl}/services/areas/huntington` },
        ]}
      />
      <ServiceJsonLd
        name="Huntington Car Service"
        description="Premium black car and chauffeur service in Huntington, Suffolk County. Flat-rate airport transfers to JFK, LGA, and EWR from the North Shore. Corporate travel and 24/7 availability."
        areaServed="Huntington, Suffolk County, NY"
        url={`${siteUrl}/services/areas/huntington`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · North Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Huntington Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service throughout Huntington, Suffolk County. Flat-rate airport transfers to JFK, LGA, and EWR, executive rides into Manhattan, and 24/7 availability — no surge pricing, ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Huntington Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Huntington via the LIE. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Huntington Car Service — FAQ</h2>
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
              <Link href="/services/areas/long-island" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Long Island Car Service</div>
                <div className="text-sm text-brand-grey mt-1">Nassau & Suffolk Counties</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Huntington Ride</h2>
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
