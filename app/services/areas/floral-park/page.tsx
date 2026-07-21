import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Floral Park Car Service | JFK Transfers Nassau',
  description:
    'Floral Park black car service — flat-rate JFK, LGA & EWR airport transfers from western Nassau County. Stewart Manor & New Hyde Park also covered. No.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/floral-park` },
};

const faqs = [
  {
    q: 'How long is the drive from Floral Park to JFK Airport?',
    a: 'Typically 20–30 minutes via the Belt Parkway. Floral Park is in western Nassau, close to the Queens border, which puts JFK within an easy 20–30 minute drive via the parkway.',
  },
  {
    q: 'Do you serve both the Village of Floral Park (NY) and Floral Park (Queens)?',
    a: 'Yes. We serve the incorporated Village of Floral Park in Nassau County as well as the Floral Park neighborhood in Queens, New York — both under the same flat-rate standard.',
  },
  {
    q: 'Is there a car service from Floral Park to Manhattan?',
    a: 'Yes. Door-to-door from Floral Park to any Manhattan destination — flat rate confirmed at booking, professional chauffeur, no parking or train transfers needed.',
  },
  {
    q: 'Do you serve Stewart Manor and New Hyde Park near Floral Park?',
    a: 'Yes. We cover Floral Park, Stewart Manor, New Hyde Park, Garden City Park, and all neighboring communities in western Nassau — all at flat rates.',
  },
];

const routes = [
  { label: 'Floral Park to JFK Airport', time: '20–30 min' },
  { label: 'Floral Park to LaGuardia (LGA)', time: '28–40 min' },
  { label: 'Floral Park to Newark (EWR)', time: '55–70 min' },
  { label: 'Floral Park to Manhattan (Midtown)', time: '45–60 min' },
  { label: 'Floral Park to Brooklyn', time: '35–50 min' },
  { label: 'Floral Park to Queens', time: '20–30 min' },
];

export default function FloralParkPage() {
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
          { name: 'Floral Park', url: `${siteUrl}/services/areas/floral-park` },
        ]}
      />
      <ServiceJsonLd
        name="Floral Park Car Service"
        description="Premium black car service in Floral Park, Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR from western Nassau. TLC-licensed, 24/7 availability."
        areaServed="Floral Park, Nassau County, NY"
        url={`${siteUrl}/services/areas/floral-park`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · Western</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Floral Park Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service in Floral Park, western Nassau County. Flat-rate airport transfers to JFK in just 20–30 minutes, executive rides to Manhattan, and 24/7 availability — no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Floral Park Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Floral Park. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Floral Park Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">20 min from Floral Park</div>
              </Link>
              <Link href="/services/areas/new-hyde-park" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">New Hyde Park Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring community</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Floral Park Ride</h2>
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
