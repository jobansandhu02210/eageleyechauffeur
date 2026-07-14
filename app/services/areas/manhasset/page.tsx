import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Manhasset Car Service | Black Car & Airport Transfers Gold Coast | Eagle Eye',
  description:
    'Manhasset black car and chauffeur service — flat-rate JFK & LGA airport transfers from Nassau County\'s Gold Coast. Miracle Mile area. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/manhasset` },
};

const faqs = [
  {
    q: 'How long is the drive from Manhasset to JFK Airport?',
    a: 'Typically 25–40 minutes via the LIE and Belt Parkway. Manhasset is also well positioned for LaGuardia — usually 25–35 minutes — making it one of the most airport-accessible North Shore communities.',
  },
  {
    q: 'Do you provide executive car service from Manhasset to Manhattan?',
    a: 'Yes. Daily corporate and executive service from Manhasset to Midtown, the Financial District, and all Manhattan destinations. Flat rates, professional chauffeur, door-to-door service.',
  },
  {
    q: 'Do you serve the Miracle Mile shopping area in Manhasset?',
    a: 'Yes. We provide car service to and from the Miracle Mile (Northern Boulevard) and all Manhasset addresses — residential, corporate, and retail.',
  },
  {
    q: 'Is there a Manhasset to Westchester car service?',
    a: 'Yes. We run Manhasset to Westchester County transfers for HPN airport, corporate campuses, and residential destinations. Flat rate confirmed at booking.',
  },
];

const routes = [
  { label: 'Manhasset to JFK Airport', time: '25–40 min' },
  { label: 'Manhasset to LaGuardia (LGA)', time: '25–35 min' },
  { label: 'Manhasset to Newark (EWR)', time: '60–80 min' },
  { label: 'Manhasset to Manhattan (Midtown)', time: '50–65 min' },
  { label: 'Manhasset to Westchester (HPN)', time: '45–60 min' },
  { label: 'Manhasset to Brooklyn', time: '50–65 min' },
];

export default function ManhassetPage() {
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
          { name: 'Manhasset', url: `${siteUrl}/services/areas/manhasset` },
        ]}
      />
      <ServiceJsonLd
        name="Manhasset Car Service"
        description="Premium black car and chauffeur service in Manhasset, NY. Flat-rate airport transfers to JFK and LGA from Nassau County's Gold Coast. Corporate travel and 24/7 availability."
        areaServed="Manhasset, Nassau County, NY"
        url={`${siteUrl}/services/areas/manhasset`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · Gold Coast</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Manhasset Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service in Manhasset, Nassau County. Flat-rate transfers to both JFK and LaGuardia, executive rides into Manhattan, and door-to-door service from the Miracle Mile and all Manhasset neighborhoods. No surge pricing, 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Manhasset Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Manhasset. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Manhasset Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">Closest airport for Manhasset</div>
              </Link>
              <Link href="/services/areas/great-neck" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Great Neck Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring Gold Coast community</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Manhasset Ride</h2>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">Flat rates confirmed at booking. Driver confirmed the evening before. No surge pricing.</p>
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
