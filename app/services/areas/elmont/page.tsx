import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Elmont Car Service | JFK Transfers Nassau | Eagle Eye',
  description:
    'Elmont black car service — flat-rate JFK airport transfers in as little as 15 minutes. UBS Arena area served. TLC-licensed chauffeur. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/elmont` },
};

const faqs = [
  {
    q: 'How close is Elmont to JFK Airport?',
    a: 'Elmont is one of the closest Nassau County communities to JFK — typically just 15–25 minutes via the Belt Parkway. Located right on the Queens/Nassau border, it is among the shortest airport runs in all of Nassau.',
  },
  {
    q: 'Do you provide car service to and from UBS Arena in Elmont?',
    a: 'Yes. We provide event car service to and from UBS Arena (home of the New York Islanders) for concerts, sports events, and all arena events. Book in advance for popular shows.',
  },
  {
    q: 'Is there a flat-rate car service from Elmont to Manhattan?',
    a: 'Yes. Door-to-door from Elmont to any Manhattan destination — Midtown, FiDi, or anywhere else — at a flat rate confirmed at the time you book.',
  },
  {
    q: 'Do you serve Franklin Square and Floral Park near Elmont?',
    a: 'Yes. We cover Elmont and surrounding west Nassau communities including Franklin Square, Floral Park, and Stewart Manor under the same flat-rate standard.',
  },
];

const routes = [
  { label: 'Elmont to JFK Airport', time: '15–25 min' },
  { label: 'Elmont to LaGuardia (LGA)', time: '30–40 min' },
  { label: 'Elmont to Newark (EWR)', time: '50–65 min' },
  { label: 'Elmont to Manhattan (Midtown)', time: '40–55 min' },
  { label: 'Elmont to Brooklyn', time: '25–40 min' },
  { label: 'Elmont to UBS Arena', time: '5–10 min' },
];

export default function ElmontPage() {
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
          { name: 'Elmont', url: `${siteUrl}/services/areas/elmont` },
        ]}
      />
      <ServiceJsonLd
        name="Elmont Car Service"
        description="Premium black car service in Elmont, Nassau County. JFK airport transfers in as little as 15 minutes. UBS Arena event service. TLC-licensed, 24/7 availability."
        areaServed="Elmont, Nassau County, NY"
        url={`${siteUrl}/services/areas/elmont`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · Closest to JFK · UBS Arena</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Elmont Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Elmont sits right on the Nassau/Queens border — just 15–25 minutes from JFK Airport. Eagle Eye Chauffeur provides flat-rate black car service with no surge pricing, plus event car service to UBS Arena. Available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Elmont Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Elmont. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Elmont Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">15 min from Elmont</div>
              </Link>
              <Link href="/services/areas/valley-stream" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Valley Stream Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring community near JFK</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Elmont Ride</h2>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">JFK in 15 minutes. UBS Arena service. Flat rates. No surge pricing. 24/7.</p>
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
