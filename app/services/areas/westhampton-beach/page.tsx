import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Westhampton Beach Car Service | Black Car & JFK Airport Transfers | Eagle Eye',
  description:
    'Westhampton Beach black car service — flat-rate JFK & LGA airport transfers from the East End. No surge pricing on summer weekends. TLC-licensed chauffeur. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/westhampton-beach` },
};

const faqs = [
  {
    q: 'How long is the drive from Westhampton Beach to JFK Airport?',
    a: 'Typically 75–95 minutes via the LIE or Sunrise Highway (Route 27) under normal traffic. On summer Friday afternoons and holiday weekends, allow 2–2.5 hours. We plan routes and departure times to account for East End traffic patterns.',
  },
  {
    q: 'Is there surge pricing for Westhampton Beach rides on summer weekends?',
    a: 'Never. Your rate is flat and locked at the time of booking — the same price regardless of season, day, or demand. No summer surcharges.',
  },
  {
    q: 'Do you serve Westhampton, Quogue, and East Quogue near Westhampton Beach?',
    a: 'Yes. We cover Westhampton Beach village, Westhampton, Quogue, East Quogue, and Remsenburg — all under the same flat-rate standard.',
  },
  {
    q: 'Can I book a Westhampton Beach to Manhattan black car?',
    a: 'Yes. Door-to-door from Westhampton Beach to any Manhattan address — flat rate confirmed at booking, luxury sedan or SUV, direct service without bus or train transfers.',
  },
];

const routes = [
  { label: 'Westhampton Beach to JFK Airport', time: '75–95 min' },
  { label: 'Westhampton Beach to LaGuardia (LGA)', time: '85–105 min' },
  { label: 'Westhampton Beach to Manhattan (Midtown)', time: '95–115 min' },
  { label: 'Westhampton Beach to Newark (EWR)', time: '105–125 min' },
  { label: 'Westhampton Beach to Hampton Bays', time: '15–25 min' },
  { label: 'Westhampton Beach to Southampton', time: '25–40 min' },
];

export default function WesthamptonBeachPage() {
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
          { name: 'Westhampton Beach', url: `${siteUrl}/services/areas/westhampton-beach` },
        ]}
      />
      <ServiceJsonLd
        name="Westhampton Beach Car Service"
        description="Premium black car service in Westhampton Beach, East End Long Island. Flat-rate JFK and LGA airport transfers. No surge pricing on summer weekends. TLC-licensed, 24/7."
        areaServed="Westhampton Beach, Suffolk County, NY"
        url={`${siteUrl}/services/areas/westhampton-beach`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · East End</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Westhampton Beach Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Professional black car service in Westhampton Beach and the surrounding East End communities. Flat-rate airport transfers to JFK and LGA, direct rides to Manhattan, and no surge pricing — ever. Available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Westhampton Beach Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Westhampton Beach. Summer weekend times may vary. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Westhampton Beach Car Service — FAQ</h2>
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
              <Link href="/services/areas/hampton-bays" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Hampton Bays Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring East End community</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Westhampton Beach Ride</h2>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">Flat rate confirmed at booking. No surge pricing — summer or otherwise. Available 24/7.</p>
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
