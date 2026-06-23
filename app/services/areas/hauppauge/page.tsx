import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Hauppauge Car Service | Black Car & JFK Airport Transfers Suffolk County | Eagle Eye',
  description:
    'Hauppauge black car service — flat-rate JFK, LGA & EWR airport transfers from Suffolk County\'s business hub. Corporate travel for Hauppauge Industrial Park. No surge pricing. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/hauppauge` },
};

const faqs = [
  {
    q: 'How long is the drive from Hauppauge to JFK Airport?',
    a: 'Typically 45–60 minutes via the Long Island Expressway (LIE) and Belt Parkway. Hauppauge has direct LIE access and is well positioned for both JFK and LaGuardia transfers.',
  },
  {
    q: 'Do you provide corporate car service for the Hauppauge Industrial Park?',
    a: 'Yes. Eagle Eye Chauffeur serves the Hauppauge Industrial Park — one of the largest industrial parks in the US — with executive airport transfers, corporate rides to Manhattan, and hourly hire for business days.',
  },
  {
    q: 'Is there a flat-rate car service from Hauppauge to Manhattan?',
    a: 'Yes. Point-to-point and hourly corporate car service from Hauppauge to any Manhattan destination. Flat rate confirmed at booking, professional chauffeur, door-to-door service.',
  },
  {
    q: 'Do you serve Commack, Brentwood, and Nesconset near Hauppauge?',
    a: 'Yes. We serve Hauppauge and all surrounding communities including Commack, Brentwood, Nesconset, and Islandia — all at flat rates.',
  },
];

const routes = [
  { label: 'Hauppauge to JFK Airport', time: '45–60 min' },
  { label: 'Hauppauge to LaGuardia (LGA)', time: '50–65 min' },
  { label: 'Hauppauge to Newark (EWR)', time: '80–100 min' },
  { label: 'Hauppauge to Manhattan (Midtown)', time: '70–90 min' },
  { label: 'Hauppauge to MacArthur Airport (ISP)', time: '15–25 min' },
  { label: 'Hauppauge to Brooklyn', time: '65–80 min' },
];

export default function HauppaugePage() {
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
          { name: 'Hauppauge', url: `${siteUrl}/services/areas/hauppauge` },
        ]}
      />
      <ServiceJsonLd
        name="Hauppauge Car Service"
        description="Premium black car and chauffeur service in Hauppauge, Suffolk County. Corporate travel for the Hauppauge Industrial Park. Flat-rate airport transfers to JFK, LGA, EWR, and ISP. 24/7."
        areaServed="Hauppauge, Suffolk County, NY"
        url={`${siteUrl}/services/areas/hauppauge`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · Business Hub</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Hauppauge Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service in Hauppauge, Suffolk County — home of the Hauppauge Industrial Park. Flat-rate airport transfers to JFK, LGA, EWR, and MacArthur ISP, executive corporate rides, and 24/7 availability with no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Hauppauge Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Hauppauge. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Hauppauge Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">MacArthur Airport area</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Hauppauge Ride</h2>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">Corporate and airport transfers. Flat rates. Available 24/7. No surge pricing.</p>
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
