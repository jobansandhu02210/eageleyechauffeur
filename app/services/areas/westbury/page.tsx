import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Westbury Car Service | Black Car & JFK Airport Transfers Nassau County | Eagle Eye',
  description:
    'Westbury black car service — flat-rate JFK, LGA & EWR airport transfers from central Nassau County. Old Westbury & New Cassel also served. No surge pricing. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/westbury` },
};

const faqs = [
  {
    q: 'How long is the drive from Westbury to JFK Airport?',
    a: 'Typically 25–35 minutes via the Southern State Parkway and Belt Parkway. Westbury is centrally located in Nassau County with good parkway access in all directions.',
  },
  {
    q: 'Do you serve Old Westbury and New Cassel near Westbury?',
    a: 'Yes. We cover Westbury village, Old Westbury (including the estate district near NYIT), and New Cassel — all under the same flat-rate standard.',
  },
  {
    q: 'Is there executive black car service from Westbury to Manhattan?',
    a: 'Yes. Point-to-point and hourly corporate car service from Westbury to any Manhattan destination. Flat rates confirmed at booking, luxury sedan or SUV, door-to-door.',
  },
  {
    q: 'Do you service NYCB Live (UBS Arena) in nearby Elmont from Westbury?',
    a: 'Yes. We provide event car service to and from UBS Arena, as well as event pickup/dropoff from Westbury for concerts, sports, and special events throughout Nassau County.',
  },
];

const routes = [
  { label: 'Westbury to JFK Airport', time: '25–35 min' },
  { label: 'Westbury to LaGuardia (LGA)', time: '30–45 min' },
  { label: 'Westbury to Newark (EWR)', time: '55–75 min' },
  { label: 'Westbury to Manhattan (Midtown)', time: '45–60 min' },
  { label: 'Westbury to Brooklyn', time: '40–55 min' },
  { label: 'Westbury to UBS Arena (Elmont)', time: '10–20 min' },
];

export default function WestburyPage() {
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
          { name: 'Westbury', url: `${siteUrl}/services/areas/westbury` },
        ]}
      />
      <ServiceJsonLd
        name="Westbury Car Service"
        description="Premium black car and chauffeur service in Westbury, Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR. Corporate travel, events, and 24/7 availability."
        areaServed="Westbury, Nassau County, NY"
        url={`${siteUrl}/services/areas/westbury`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · Central</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Westbury Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service in Westbury, central Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR, executive rides to Manhattan, and 24/7 service — no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Westbury Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Westbury. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Westbury Car Service — FAQ</h2>
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
              <Link href="/services/areas/garden-city" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Garden City Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring community</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Westbury Ride</h2>
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
