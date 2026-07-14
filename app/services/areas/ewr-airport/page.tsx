import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Newark Airport Car Service NYC | EWR Black Car, Tolls Included | Eagle Eye',
  description:
    'Newark Airport (EWR) black car service — meet & greet, all tolls included, real-time flight tracking. Flat rates from Manhattan, Brooklyn, New.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/ewr-airport` },
};

const faqs = [
  {
    q: 'Are tunnel tolls included for EWR rides?',
    a: 'Yes — 100%. Lincoln Tunnel, Holland Tunnel, and the Newark airport toll are all included in your flat rate. You will never see a surprise toll charge added to your bill. The rate you see at booking is the rate you pay.',
  },
  {
    q: 'Where does the driver meet me at Newark Airport?',
    a: 'Your chauffeur meets you in the ground transportation area of your terminal (A, B, or C) with a name sign. You will receive a WhatsApp message with the exact meeting point before your flight lands.',
  },
  {
    q: 'How long does EWR to Manhattan take?',
    a: 'Approximately 30–45 minutes in normal traffic via the Lincoln or Holland Tunnel. During peak hours (7–9am and 5–7pm), allow 50–65 minutes. Your driver monitors traffic and selects the fastest tunnel route.',
  },
  {
    q: 'Do you serve all 3 EWR terminals?',
    a: 'Yes — Terminal A (United domestic), Terminal B (American Airlines and international carriers), and Terminal C (United international and Star Alliance). Your driver is assigned to your specific terminal based on your airline.',
  },
  {
    q: 'Can I book EWR car service from New Jersey suburbs?',
    a: 'Absolutely. Hoboken, Jersey City, Princeton, Morristown, and all New Jersey communities are served for EWR transfers. Your flat rate covers the full door-to-terminal distance with all tolls included.',
  },
];

const eaglEyeBenefits = [
  { title: 'Flat rate — all tolls included', desc: 'Lincoln Tunnel, Holland Tunnel, and Newark airport tolls are all part of your confirmed flat rate. No itemized surprises at drop-off.' },
  { title: 'TLC-licensed professional chauffeur', desc: 'Every driver is background-checked, licensed, and trained to a professional service standard.' },
  { title: 'Luxury sedan or SUV', desc: 'Clean, late-model vehicles in the class you booked — confirmed before your trip.' },
  { title: 'Meet & greet at arrivals', desc: 'Your chauffeur meets you at the ground transportation area with a name sign — no searching required.' },
  { title: 'Real-time flight tracking', desc: 'Your driver adjusts automatically for delays — no need to re-request or update anyone.' },
  { title: 'No hidden fees', desc: 'All tolls included. The rate you see at booking is the rate you pay — nothing added at drop-off.' },
];

const ewrTerminals = [
  {
    name: 'Terminal A',
    airlines: 'United Airlines domestic routes, Southwest Airlines, Air Canada (select routes)',
    detail:
      'Ground Transportation is on Level 1. Your driver waits with a name sign at the arrivals exit past baggage claim. The AirTrain connects Terminal A to B and C if needed.',
  },
  {
    name: 'Terminal B',
    airlines: 'United Airlines international (legacy Continental gates), select international carriers',
    detail:
      'Level 1 ground transportation area — driver holds name sign at the exits from baggage claim. Terminal B handles international departures and arrivals on legacy Continental routes.',
  },
  {
    name: 'Terminal C',
    airlines: 'United Airlines (main hub, domestic and international), Star Alliance partners, Copa Airlines, Lufthansa, TAP Air Portugal',
    detail:
      "United's primary hub at EWR — the busiest terminal. Ground floor arrivals. Driver positioned at the Ground Transportation exit with a name sign. AirTrain connects all terminals for easy inter-terminal movement.",
  },
];

const popularRoutes = [
  { label: 'EWR → Midtown Manhattan', time: '30–45 min' },
  { label: 'EWR → Financial District', time: '30–45 min' },
  { label: 'EWR → Upper East / West Side', time: '40–55 min' },
  { label: 'EWR → Brooklyn', time: '40–55 min' },
  { label: 'EWR → Hoboken / Jersey City', time: '20–30 min' },
  { label: 'Manhattan → EWR', time: '30–45 min' },
  { label: 'Brooklyn → EWR', time: '45–60 min' },
  { label: 'Princeton, NJ → EWR', time: '35–50 min' },
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

export default function EWRAreaPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Newark Airport', url: `${getSiteUrl()}/services/areas/ewr-airport` },
        ]}
      />
      <ServiceJsonLd
        name="Newark Airport Car Service"
        description="Luxury black car service to and from Newark Liberty International Airport (EWR). All terminals covered. All tolls included. Meet & greet, real-time flight tracking, flat-rate pricing."
        areaServed="Newark Liberty International Airport, Newark, NJ; New York City, NY"
        url={`${getSiteUrl()}/services/areas/ewr-airport`}
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Newark Airport · EWR · All Tolls Included</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
            Newark Airport Car Service | All Tolls Included, Meet &amp; Greet, Flat Rates
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-4">
            Newark Liberty International is 16 miles from Midtown Manhattan — across the Hudson River via the Lincoln or Holland Tunnel. Eagle Eye includes every toll in your flat rate, confirmed before you book — no itemized surprises at drop-off.
          </p>
          <p className="text-brand-silver max-w-2xl mb-4">
            Three terminals, all major airlines, and a professional chauffeur waiting with your name sign at arrivals. Whether you are flying United from Terminal C, American from Terminal B, or landing at Terminal A, your driver is already at your gate level.
          </p>
          <p className="text-brand-silver max-w-2xl mb-8">
            We also serve New Jersey residents heading to EWR from Hoboken, Jersey City, Princeton, and all NJ communities — with the same flat rate and toll-included guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book EWR Transfer
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

      {/* EWR Terminals */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            All EWR Terminals Covered
          </h2>
          <p className="text-brand-grey mb-8">
            Newark Airport has three terminals connected by the AirTrain. Your driver is assigned to your specific terminal at the time of booking based on your airline and flight details. No coordination required on your end.
          </p>
          <div className="space-y-4">
            {ewrTerminals.map((t) => (
              <div key={t.name} className="bg-brand-white border border-brand-light p-5 lg:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div className="font-semibold text-brand-black text-lg">{t.name}</div>
                </div>
                <div className="text-sm text-brand-charcoal font-medium mb-3">{t.airlines}</div>
                <p className="text-sm text-brand-grey leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-brand-white border border-brand-light p-5">
            <p className="text-sm text-brand-grey">
              <strong className="text-brand-black">All Tolls Included:</strong> Lincoln Tunnel, Holland Tunnel, and Newark airport tolls are all part of your flat rate. No itemized surprises at drop-off.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Popular EWR Routes
          </h2>
          <p className="text-brand-grey mb-8">
            All route times are estimates under normal traffic. Cross-Hudson travel times depend heavily on time of day. Your driver monitors tunnel conditions and selects the fastest crossing in real-time.
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
              Book Your EWR Route
            </Link>
          </div>
        </div>
      </section>

      {/* Arrival Pickup Protocol */}
      <section className="py-16 lg:py-20 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-3">
            EWR Arrivals: How Pickup Works
          </h2>
          <p className="text-brand-silver mb-8 max-w-2xl">
            Newark has three terminals all connected by the AirTrain. Here is exactly how arrivals pickup works at EWR.
          </p>
          <div className="space-y-5">
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">1. AirTrain &amp; terminal layout</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                EWR&apos;s AirTrain connects all three terminals. Your driver is assigned to your specific terminal (A, B, or C) based on your airline — no inter-terminal scramble required. You will receive a WhatsApp update with your driver&apos;s exact position before you reach baggage claim.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">2. Pickup at Ground Transportation — Level 1</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                In each terminal, ground transportation pickup is on Level 1. Follow signs to &ldquo;Ground Transportation&rdquo; or &ldquo;Car Service&rdquo; after collecting your bags. Your driver holds your name sign at the designated car service / taxi area on Level 1 of your terminal.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">3. Terminal-specific notes</div>
              <ul className="text-brand-silver text-sm space-y-2 mt-2">
                <li><strong className="text-brand-white">Terminal A:</strong> Domestic arrivals, shorter customs process. Quick exit to Level 1 ground transportation.</li>
                <li><strong className="text-brand-white">Terminal B:</strong> International arrivals on legacy Continental gates. Customs can take 20–45 minutes — your 60-minute wait covers it.</li>
                <li><strong className="text-brand-white">Terminal C (main hub):</strong> United&apos;s busiest EWR terminal. Level 1 Ground Transportation is clearly signed. International arrivals — allow time for customs and immigration.</li>
              </ul>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">4. All tolls included</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                Your driver travels through the Lincoln or Holland Tunnel to reach EWR from New York, or via the NJ Turnpike from New Jersey. Every toll is included in your flat rate — nothing added at drop-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve From EWR */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Neighborhoods We Serve From EWR
          </h2>
          <p className="text-brand-grey mb-8">
            Newark Airport serves both New York City and all of New Jersey. Eagle Eye covers every destination from EWR at a flat rate with all tolls included — no itemized surprises.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/services/areas/midtown-manhattan" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Midtown Manhattan</div>
              <div className="text-sm text-brand-grey">30–45 min — all tunnel tolls included</div>
            </Link>
            <Link href="/services/areas/financial-district" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Financial District</div>
              <div className="text-sm text-brand-grey">30–45 min — via Holland Tunnel</div>
            </Link>
            <Link href="/services/areas/hoboken" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Hoboken</div>
              <div className="text-sm text-brand-grey">20–30 min — fastest EWR connection</div>
            </Link>
            <Link href="/services/areas/jersey-city" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Jersey City</div>
              <div className="text-sm text-brand-grey">20–30 min via NJ Turnpike</div>
            </Link>
            <Link href="/services/areas/princeton-nj" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Princeton NJ</div>
              <div className="text-sm text-brand-grey">35–50 min — closest airport to Central NJ</div>
            </Link>
            <Link href="/services/areas/brooklyn" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Brooklyn</div>
              <div className="text-sm text-brand-grey">45–60 min via Goethals or BQE route</div>
            </Link>
            <Link href="/services/areas/upper-west-side" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Upper West Side</div>
              <div className="text-sm text-brand-grey">40–55 min — Lincoln Tunnel, West Side</div>
            </Link>
            <Link href="/services/areas/greenwich-ct" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Greenwich CT</div>
              <div className="text-sm text-brand-grey">75–95 min — full tri-state coverage</div>
            </Link>
          </div>
          <div className="mt-6">
            <Link href="/book" className="inline-flex items-center justify-center px-8 py-3 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
              Book EWR Transfer
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            What&apos;s Included — ALL TOLLS INCLUDED
          </h2>
          <p className="text-brand-grey mb-8">
            EWR transfers involve tunnels, airport tolls, and NJ Turnpike fees. With Eagle Eye, all of it is in your flat rate — confirmed at booking. Every item below is standard on every booking.
          </p>
          <div className="bg-brand-white border border-brand-light p-6 lg:p-8">
            <ul className="space-y-4">
              {whatsIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-grey">
                  <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-3 text-brand-grey">
                <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                <span>
                  <strong className="text-brand-black">ALL TOLLS INCLUDED</strong> — Lincoln Tunnel, Holland Tunnel, and Newark airport toll are part of your flat rate
                </span>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-3 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book EWR Transfer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Why Choose Eagle Eye at Newark Airport
          </h2>
          <p className="text-brand-grey mb-8">
            EWR transfers involve tunnels, airport tolls, and cross-Hudson travel — Eagle Eye includes everything in your flat rate and covers every detail from flight tracking to luggage assistance.
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

      {/* EWR Terminal Quick-Reference */}
      <section className="py-14 bg-brand-black text-brand-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-white mb-2">EWR Terminal Quick-Reference</h2>
          <p className="text-brand-silver text-sm mb-6">All three terminals connected by AirTrain — your driver is assigned to your specific terminal.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-charcoal text-brand-white">
                  <th className="text-left p-4 font-medium">Terminal</th>
                  <th className="text-left p-4 font-medium">Key Airlines</th>
                  <th className="text-left p-4 font-medium">Pickup Note</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-brand-charcoal bg-opacity-40">
                  <td className="p-4 font-medium text-brand-white">Terminal A</td>
                  <td className="p-4 text-brand-silver">United domestic short-haul</td>
                  <td className="p-4 text-brand-silver">AirTrain connects all terminals — Ground Transportation Level 1</td>
                </tr>
                <tr className="bg-brand-charcoal bg-opacity-20">
                  <td className="p-4 font-medium text-brand-white">Terminal B</td>
                  <td className="p-4 text-brand-silver">United international, Air Canada</td>
                  <td className="p-4 text-brand-silver">Ground Transportation Level 1</td>
                </tr>
                <tr className="bg-brand-charcoal bg-opacity-40">
                  <td className="p-4 font-medium text-brand-white">Terminal C</td>
                  <td className="p-4 text-brand-silver">United hub (majority of flights)</td>
                  <td className="p-4 text-brand-silver">Most EWR departures — Ground Transportation Level 1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-brand-silver text-sm mt-6">
            All tolls (Holland or Lincoln Tunnel) are included in your flat rate. Your driver meets you at Ground Transportation Level 1 of your terminal.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
            Newark Airport Car Service — Frequently Asked Questions
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

      {/* Related Routes */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
            Related Routes &amp; Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/routes/manhattan-to-ewr-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">Manhattan → EWR</div>
              <div className="text-sm text-brand-grey">Door-to-terminal, all tolls included</div>
            </Link>
            <Link
              href="/services/routes/ewr-to-manhattan-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">EWR → Manhattan</div>
              <div className="text-sm text-brand-grey">Meet & greet arrivals service, flat rate</div>
            </Link>
            <Link
              href="/services/areas/new-jersey"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">New Jersey Service</div>
              <div className="text-sm text-brand-grey">All NJ communities served to/from NYC</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">
            Book Your Newark Airport Transfer
          </h2>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto">
            All tolls included. Flat rate locked at booking. Driver tracking your flight. No tunnel toll surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book EWR Transfer
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
