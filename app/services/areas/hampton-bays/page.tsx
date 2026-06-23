import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Hampton Bays Car Service | Black Car & JFK Airport Transfers East End | Eagle Eye',
  description:
    'Hampton Bays black car service — flat-rate JFK & LGA airport transfers from the East End of Long Island. No surge pricing on summer weekends. TLC-licensed. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/hampton-bays` },
};

const faqs = [
  {
    q: 'How long is the drive from Hampton Bays to JFK Airport?',
    a: 'Typically 80–100 minutes via the LIE or Sunrise Highway (Route 27). On summer Friday afternoons and Saturday mornings, allow 2–2.5 hours due to Hamptons traffic. We plan departure times accordingly and track conditions in real time.',
  },
  {
    q: 'Is there surge pricing for Hampton Bays rides on summer weekends?',
    a: 'Never. Your rate is flat and confirmed at booking — the same price whether you book for a summer Friday or a January Tuesday. No surge pricing, ever.',
  },
  {
    q: 'Do you provide Hampton Bays to Manhattan car service?',
    a: 'Yes. Door-to-door from Hampton Bays to any Manhattan destination at a flat rate confirmed at booking. A comfortable alternative to the Hampton Jitney or LIRR for direct service.',
  },
  {
    q: 'Do you serve Ponquogue, Good Ground, and all Hampton Bays neighborhoods?',
    a: 'Yes. We cover all of Hampton Bays including the canal area, the bay side, Ponquogue, and all residential addresses — same flat-rate standard throughout.',
  },
];

const routes = [
  { label: 'Hampton Bays to JFK Airport', time: '80–100 min' },
  { label: 'Hampton Bays to LaGuardia (LGA)', time: '90–110 min' },
  { label: 'Hampton Bays to Newark (EWR)', time: '110–130 min' },
  { label: 'Hampton Bays to Manhattan (Midtown)', time: '100–120 min' },
  { label: 'Hampton Bays to Westhampton Beach', time: '15–25 min' },
  { label: 'Hampton Bays to Southampton', time: '20–30 min' },
];

export default function HamptonBaysPage() {
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
          { name: 'Hampton Bays', url: `${siteUrl}/services/areas/hampton-bays` },
        ]}
      />
      <ServiceJsonLd
        name="Hampton Bays Car Service"
        description="Premium black car and chauffeur service in Hampton Bays, East End Long Island. Flat-rate JFK and LGA airport transfers. No surge pricing on summer weekends. TLC-licensed, 24/7."
        areaServed="Hampton Bays, Suffolk County, NY"
        url={`${siteUrl}/services/areas/hampton-bays`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · East End</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Hampton Bays Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Professional black car service in Hampton Bays, East End Long Island. Flat-rate airport transfers to JFK and LGA, direct rides to Manhattan, and no surge pricing — not even on summer Fridays. Available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Hampton Bays Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Hampton Bays. Times vary significantly with summer weekend traffic — we plan around it. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Hampton Bays Car Service — FAQ</h2>
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
              <Link href="/services/areas/hamptons" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">The Hamptons Service</div>
                <div className="text-sm text-brand-grey mt-1">East Hampton, Southampton, Montauk</div>
              </Link>
              <Link href="/services/airport/jfk" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">Meet & greet, all terminals</div>
              </Link>
              <Link href="/services/areas/westhampton-beach" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Westhampton Beach Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring East End community</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Hampton Bays Ride</h2>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">Flat rate confirmed at booking. No surge pricing — even on summer weekends. Available 24/7.</p>
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
