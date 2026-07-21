import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Hempstead Car Service | JFK Transfers Nassau',
  description:
    'Hempstead black car service — flat-rate JFK, LGA & EWR airport transfers from Nassau County\'s largest township. TLC-licensed chauffeur. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/hempstead` },
};

const faqs = [
  {
    q: 'How long is the drive from Hempstead to JFK Airport?',
    a: 'Typically 20–30 minutes via the Belt Parkway. Hempstead village is centrally located in Nassau County with direct parkway access, making JFK one of the fastest airport runs in Nassau.',
  },
  {
    q: 'Do you serve the Village of Hempstead and the Township of Hempstead?',
    a: 'Yes. We cover both the incorporated Village of Hempstead and communities throughout the Town of Hempstead — including Uniondale, East Meadow, Franklin Square, Elmont, and surrounding areas.',
  },
  {
    q: 'Is there a flat-rate car service from Hempstead to Manhattan?',
    a: 'Yes. Point-to-point and hourly corporate car service from Hempstead to any Manhattan destination — flat rate confirmed at booking, professional chauffeur, door-to-door.',
  },
  {
    q: 'Do you provide service near Hofstra University and Nassau Coliseum?',
    a: 'Yes. We serve the entire Uniondale/Hempstead area including Hofstra University, the Nassau Hub area, and all surrounding neighborhoods.',
  },
];

const routes = [
  { label: 'Hempstead to JFK Airport', time: '20–30 min' },
  { label: 'Hempstead to LaGuardia (LGA)', time: '30–45 min' },
  { label: 'Hempstead to Newark (EWR)', time: '55–70 min' },
  { label: 'Hempstead to Manhattan (Midtown)', time: '45–60 min' },
  { label: 'Hempstead to Brooklyn', time: '35–50 min' },
  { label: 'Hempstead to Queens', time: '25–40 min' },
];

export default function HempsteadPage() {
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
          { name: 'Hempstead', url: `${siteUrl}/services/areas/hempstead` },
        ]}
      />
      <ServiceJsonLd
        name="Hempstead Car Service"
        description="Premium black car and chauffeur service in Hempstead, Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR. Corporate travel and 24/7 availability."
        areaServed="Hempstead, Nassau County, NY"
        url={`${siteUrl}/services/areas/hempstead`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Hempstead Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service throughout Hempstead, Nassau County. Flat-rate airport transfers to JFK in under 30 minutes, executive rides to Manhattan, and 24/7 availability with no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Hempstead Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Hempstead. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Hempstead Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">20 min from Hempstead</div>
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
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Hempstead Ride</h2>
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
