import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'HPN Westchester Airport Car Service | Transfers | Eagle Eye',
  description:
    'Westchester County Airport (HPN) car service — professional black car transfers. Flat rates from White Plains, Westchester, Manhattan, and Fairfield.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/hpn-airport` },
};

const faqs = [
  {
    q: 'Where is Westchester Airport (HPN) located?',
    a: 'Westchester County Airport (HPN) is located in White Plains, NY, approximately 30 miles north of Midtown Manhattan. It is served by American Airlines with connections to major US hubs including Philadelphia and Charlotte.',
  },
  {
    q: 'Do you handle the private jet and charter terminal at HPN?',
    a: 'Yes. Eagle Eye serves both commercial arrivals and private/FBO terminals at Westchester Airport. Simply specify your terminal type — commercial or private/charter — when booking so your driver goes to the correct location.',
  },
  {
    q: 'How long is the drive from Manhattan to HPN?',
    a: 'Typically 45–65 minutes depending on traffic conditions and your pickup location. Uptown addresses (Upper East Side, Upper West Side) are generally faster since they are already further north. Allow extra time during weekday rush hours.',
  },
  {
    q: 'Do you serve Connecticut travelers flying from HPN?',
    a: 'Yes. Greenwich, Stamford, Darien, Westport, and all of Fairfield County are well within reach of HPN. Many Connecticut residents prefer HPN over JFK or LGA because the drive is significantly shorter and security lines are minimal.',
  },
  {
    q: 'Is there meet & greet service at HPN arrivals?',
    a: 'Yes. Your chauffeur meets you at the arrivals area with a name sign. HPN is a small, easy-to-navigate terminal — the process is fast and stress-free compared to larger airports.',
  },
];

const eaglEyeBenefits = [
  { title: 'Flat rate locked at booking', desc: 'Your price is confirmed before you book — no changes for traffic, time of day, or demand.' },
  { title: 'TLC-licensed professional chauffeur', desc: 'Every driver is background-checked, licensed, and trained to a professional service standard.' },
  { title: 'Luxury sedan or SUV', desc: 'Clean, late-model vehicles in the class you booked — confirmed before your trip.' },
  { title: 'Meet & greet at arrivals', desc: 'Your chauffeur meets you at the arrivals area with a name sign — stress-free at this small, easy terminal.' },
  { title: 'Real-time flight tracking', desc: 'Your driver adjusts automatically for delays — no need to re-request or update anyone.' },
  { title: 'No hidden fees', desc: 'All tolls included. The rate you see at booking is the rate you pay — nothing added at drop-off.' },
];

const popularRoutes = [
  { label: 'HPN → Manhattan (Midtown)', time: '45–65 min' },
  { label: 'HPN → White Plains / Westchester', time: '10–20 min' },
  { label: 'HPN → Stamford, CT', time: '30–45 min' },
  { label: 'HPN → Greenwich, CT', time: '35–50 min' },
  { label: 'HPN → Upper East Side / Upper West Side', time: '45–65 min' },
  { label: 'Manhattan → HPN', time: '45–65 min' },
  { label: 'Fairfield County, CT → HPN', time: '25–45 min' },
  { label: 'Brooklyn → HPN', time: '65–85 min' },
];

const whatsIncluded = [
  'Real-time flight tracking — driver adjusts for delays at no extra charge',
  'Meet & greet at arrivals with name sign',
  'Flat-rate pricing locked at booking — no surge pricing',
  'Door-to-door pickup at your exact address',
  '60 minutes complimentary wait time after landing',
  'Luggage assistance at pickup and terminal',
  '24/7 support via phone or WhatsApp',
];

export default function HPNAreaPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'HPN Airport', url: `${getSiteUrl()}/services/areas/hpn-airport` },
        ]}
      />
      <ServiceJsonLd
        name="Westchester Airport Car Service"
        description="Professional black car service to and from Westchester County Airport (HPN). Commercial and private/FBO terminals served. Flat-rate pricing, meet & greet, real-time flight tracking."
        areaServed="Westchester County Airport, White Plains, NY; Fairfield County, CT"
        url={`${getSiteUrl()}/services/areas/hpn-airport`}
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Westchester County Airport · HPN</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
            Westchester Airport Car Service | HPN Black Car Transfers
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-4">
            Westchester County Airport (HPN) is located in White Plains, NY — the ideal departure point for Westchester residents, Fairfield County Connecticut travelers, and northern Manhattan. Skip the long drives to JFK and LGA. HPN has shorter security lines, easier parking, and a stress-free boarding experience.
          </p>
          <p className="text-brand-silver max-w-2xl mb-4">
            Eagle Eye Chauffeur provides professional black car service to and from HPN for both commercial and private/charter flights. Whether you are connecting via American Airlines or arriving on a private jet at one of the FBOs, your chauffeur is ready at your specific terminal with a name sign.
          </p>
          <p className="text-brand-silver max-w-2xl mb-8">
            Flat rate, no surge pricing, real-time flight tracking, and 24/7 availability — including early morning departures and late-night arrivals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book HPN Transfer
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About HPN */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            About Westchester County Airport
          </h2>
          <p className="text-brand-grey mb-6">
            HPN is a small regional airport located in White Plains, New York, roughly 30 miles north of Midtown Manhattan. It serves commercial passengers via American Airlines connections to major US hubs including Philadelphia (PHL) and Charlotte (CLT), and handles significant private jet and charter traffic via its FBO facilities.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-brand-white border border-brand-light p-5">
              <div className="font-semibold text-brand-black mb-2">Commercial Terminal</div>
              <p className="text-sm text-brand-grey">
                American Airlines operates scheduled service to major hubs. One terminal building — quick check-in, minimal lines, and an easy walk from curb to gate. Your driver meets you at arrivals with a name sign.
              </p>
            </div>
            <div className="bg-brand-white border border-brand-light p-5">
              <div className="font-semibold text-brand-black mb-2">Private / FBO Terminals</div>
              <p className="text-sm text-brand-grey">
                HPN hosts multiple FBO facilities serving private jet and charter activity. Eagle Eye serves all FBO terminals — specify your FBO at booking and your driver will be at the correct location.
              </p>
            </div>
            <div className="bg-brand-white border border-brand-light p-5">
              <div className="font-semibold text-brand-black mb-2">Location &amp; Access</div>
              <p className="text-sm text-brand-grey">
                Located directly off Route 120 in White Plains. Accessible from I-287, the Hutchinson River Parkway, and the Merritt Parkway. Easy for Westchester and Connecticut travelers to reach without highway congestion.
              </p>
            </div>
            <div className="bg-brand-white border border-brand-light p-5">
              <div className="font-semibold text-brand-black mb-2">Why HPN for CT &amp; Westchester Travelers</div>
              <p className="text-sm text-brand-grey">
                Fairfield County and Westchester residents save significant travel time versus driving to JFK or LGA. Shorter security lines, simpler parking, and a faster boarding process make HPN the smart choice for local travelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Popular HPN Routes
          </h2>
          <p className="text-brand-grey mb-8">
            Times are typical estimates under normal traffic. HPN&apos;s northern Westchester location makes it significantly faster to reach for Connecticut and Westchester residents versus other NYC-area airports.
          </p>
          <div className="space-y-3">
            {popularRoutes.map((route) => (
              <div
                key={route.label}
                className="flex justify-between items-center bg-brand-offwhite border border-brand-light p-4"
              >
                <span className="font-medium text-brand-black">{route.label}</span>
                <span className="text-brand-grey text-sm">{route.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book Your HPN Route
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            What&apos;s Included with Every HPN Ride
          </h2>
          <p className="text-brand-grey mb-8">
            Every Eagle Eye booking to or from HPN comes with the full professional service — no extras, no upsells.
          </p>
          <div className="bg-brand-white border border-brand-light p-6 lg:p-8">
            <ul className="space-y-4">
              {whatsIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-grey">
                  <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-3 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book HPN Transfer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Why Choose Eagle Eye at HPN
          </h2>
          <p className="text-brand-grey mb-8">
            A pre-booked professional black car eliminates all uncertainty at HPN — for early morning flights, late-night arrivals, or private FBO pickups, your driver is confirmed and waiting.
          </p>
          <ul className="space-y-3">
            {eaglEyeBenefits.map((benefit) => (
              <li key={benefit.title} className="flex items-start gap-3 bg-brand-offwhite border border-brand-light p-4">
                <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                <div>
                  <span className="font-medium text-brand-black">{benefit.title} — </span>
                  <span className="text-brand-grey text-sm">{benefit.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
            HPN Car Service — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-white border border-brand-light p-5 lg:p-6">
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/areas/westchester"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">Westchester Service</div>
              <div className="text-sm text-brand-grey">All Westchester County neighborhoods served</div>
            </Link>
            <Link
              href="/services/areas/jfk-airport"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">JFK Airport Service</div>
              <div className="text-sm text-brand-grey">All 8 terminals, meet & greet, flat rates</div>
            </Link>
            <Link
              href="/services/areas/connecticut"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">Connecticut Service</div>
              <div className="text-sm text-brand-grey">Greenwich, Stamford, Fairfield County and beyond</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">
            Book Your Westchester Airport Transfer
          </h2>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto">
            Commercial or private terminal. Flat rate. Professional chauffeur. Confirmed before you travel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book HPN Transfer
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
