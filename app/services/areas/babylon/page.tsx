import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Babylon Car Service | JFK Transfers Suffolk County | Eagle Eye',
  description:
    'Babylon NY black car service — flat-rate JFK, LGA & EWR airport transfers from the South Shore. West Babylon & North Babylon also served. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/babylon` },
};

const faqs = [
  {
    q: 'How long is the drive from Babylon to JFK Airport?',
    a: 'Typically 35–50 minutes via the Southern State Parkway and Belt Parkway. Babylon has direct Southern State access, and the route to JFK is well-established. Allow 3 hours before departure for airport trips.',
  },
  {
    q: 'Do you serve West Babylon and North Babylon as well as the village?',
    a: 'Yes. We cover the entire Babylon area including Babylon Village, West Babylon, North Babylon, Amityville, Copiague, and Lindenhurst — all under the same flat-rate standard.',
  },
  {
    q: 'Is there a car service from Babylon to Manhattan?',
    a: 'Yes. Door-to-door from Babylon to any Manhattan destination — flat rate confirmed at booking, luxury sedan or SUV, no LIRR required.',
  },
  {
    q: 'Do you serve the Fire Island ferry terminal area near Babylon?',
    a: 'Yes. We provide car service to the Babylon ferry terminal and the broader Babylon waterfront area, in addition to all residential and commercial addresses.',
  },
];

const routes = [
  { label: 'Babylon to JFK Airport', time: '35–50 min' },
  { label: 'Babylon to LaGuardia (LGA)', time: '45–60 min' },
  { label: 'Babylon to Newark (EWR)', time: '70–90 min' },
  { label: 'Babylon to Manhattan (Midtown)', time: '65–85 min' },
  { label: 'Babylon to Brooklyn', time: '50–65 min' },
  { label: 'Babylon to Nassau County', time: '20–35 min' },
];

export default function BabylonPage() {
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
          { name: 'Babylon', url: `${siteUrl}/services/areas/babylon` },
        ]}
      />
      <ServiceJsonLd
        name="Babylon Car Service"
        description="Premium black car and chauffeur service in Babylon, Suffolk County. Flat-rate airport transfers to JFK, LGA, and EWR from the South Shore. 24/7 availability."
        areaServed="Babylon, Suffolk County, NY"
        url={`${siteUrl}/services/areas/babylon`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · South Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Babylon Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service in Babylon, Suffolk County. Flat-rate airport transfers to JFK, LGA, and EWR, rides to Manhattan, and 24/7 service — no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Babylon Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Babylon via the Southern State Parkway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Babylon Car Service — FAQ</h2>
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
              <Link href="/services/areas/bay-shore" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Bay Shore Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring South Shore community</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Babylon Ride</h2>
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
