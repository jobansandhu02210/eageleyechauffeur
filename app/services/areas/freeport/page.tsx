import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Freeport Car Service | JFK Transfers Nassau',
  description:
    'Freeport black car service — flat-rate JFK, LGA & EWR airport transfers from Nassau County\'s South Shore Nautical Mile. TLC-licensed chauffeur. No.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/freeport` },
};

const faqs = [
  {
    q: 'How long is the drive from Freeport to JFK Airport?',
    a: 'Typically 25–40 minutes via the Southern State Parkway and Belt Parkway. Freeport has straightforward parkway access, and the Belt Parkway runs directly past JFK.',
  },
  {
    q: 'Do you provide car service from Freeport to Manhattan?',
    a: 'Yes. Point-to-point rides from Freeport to any Manhattan neighborhood — Midtown, the Financial District, Upper East Side, and beyond. Flat rate confirmed at booking.',
  },
  {
    q: 'Is there a flat rate for Freeport airport transfers?',
    a: 'Yes. Every booking is flat-rate, confirmed when you book. No surge pricing for summer weekends, early mornings, or any other time.',
  },
  {
    q: 'Do you serve Merrick and Bellmore near Freeport?',
    a: 'Yes. We serve Freeport and neighboring South Shore communities including Merrick, Bellmore, North Bellmore, and Baldwin — all at flat rates.',
  },
];

const routes = [
  { label: 'Freeport to JFK Airport', time: '25–40 min' },
  { label: 'Freeport to LaGuardia (LGA)', time: '40–55 min' },
  { label: 'Freeport to Newark (EWR)', time: '60–80 min' },
  { label: 'Freeport to Manhattan (Midtown)', time: '50–65 min' },
  { label: 'Freeport to Brooklyn', time: '40–55 min' },
  { label: 'Freeport to Long Beach', time: '15–25 min' },
];

export default function FreeportPage() {
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
          { name: 'Freeport', url: `${siteUrl}/services/areas/freeport` },
        ]}
      />
      <ServiceJsonLd
        name="Freeport Car Service"
        description="Premium black car and chauffeur service in Freeport, Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR from the South Shore Nautical Mile. 24/7 availability."
        areaServed="Freeport, Nassau County, NY"
        url={`${siteUrl}/services/areas/freeport`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · South Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Freeport Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service in Freeport, Nassau County — home of the famous Nautical Mile. Flat-rate airport transfers to JFK, executive rides to Manhattan, and 24/7 availability with no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Freeport Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Freeport. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Freeport Car Service — FAQ</h2>
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
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Freeport Ride</h2>
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
