import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LaGuardia Airport Car Service NYC | LGA Transfers | Eagle Eye',
  description:
    'LaGuardia Airport (LGA) black car service — meet & greet, flight tracking, all terminals. Flat rates from Manhattan, Brooklyn, Queens. No surge. Book.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/lga-airport` },
};

const faqs = [
  {
    q: 'Where does the driver meet me at LaGuardia?',
    a: 'Your chauffeur meets you in the ground transportation area of your terminal (B or C) with a name sign. You will receive a WhatsApp message with the exact pickup location before your flight lands — so there is no searching or confusion.',
  },
  {
    q: 'How close is LaGuardia to Manhattan?',
    a: 'LGA is approximately 8 miles from Midtown Manhattan. In light traffic, the drive takes 20–35 minutes. During peak rush hour (5–8pm), allow 45–60 minutes. We track traffic conditions and pick the fastest route.',
  },
  {
    q: 'Does Eagle Eye charge surge pricing for early morning LGA flights?',
    a: 'Never. All rates are flat and locked at booking. A 5am departure costs the same as a noon flight. Eagle Eye flat rates never change regardless of the hour.',
  },
  {
    q: 'Is the new LaGuardia terminal easy to navigate?',
    a: 'Yes. The new Terminal B and C facilities opened in 2022 and are modern, clearly signposted, and easy to navigate. Your driver meets you in the designated arrivals pickup area with a name sign, making it stress-free.',
  },
  {
    q: 'Can I book LGA car service for an early morning flight?',
    a: 'Absolutely. Eagle Eye operates 24/7. Your driver is confirmed the evening before your trip and will be at your door at exactly the time you need — no late arrivals, no cancellations.',
  },
];

const eaglEyeBenefits = [
  { title: 'Flat rate locked at booking', desc: 'Your price is confirmed before you book — no changes for traffic, time of day, or demand.' },
  { title: 'TLC-licensed professional chauffeur', desc: 'Every driver is background-checked, licensed, and trained to a professional service standard.' },
  { title: 'Luxury sedan or SUV', desc: 'Clean, late-model vehicles in the class you booked — confirmed before your trip.' },
  { title: 'Meet & greet at arrivals', desc: 'Your chauffeur meets you at the ground transportation area of your terminal with a name sign — no searching required.' },
  { title: 'Real-time flight tracking', desc: 'Your driver adjusts automatically for delays — you receive updates via WhatsApp before landing.' },
  { title: 'No hidden fees', desc: 'Tolls included. 60-minute complimentary wait time included. The rate at booking is the rate you pay.' },
];

const lgaTerminals = [
  {
    name: 'Terminal B',
    airlines: 'American Airlines, United Airlines, Southwest Airlines, Alaska Airlines — the primary terminal at the new LGA',
    detail:
      'The main rebuilt terminal at LaGuardia. Ground transportation pickup is on the lower level, clearly marked. Your driver waits with a name sign at the arrivals exit. Terminal B handles the majority of LGA traffic.',
  },
  {
    name: 'Terminal C',
    airlines: 'Delta Air Lines (primary Delta hub at LGA)',
    detail:
      'Delta&apos;s dedicated terminal at the rebuilt LaGuardia. Modern, compact, and easy to navigate. Ground level arrivals area — driver positioned at the exit with a name sign.',
  },
];

const popularRoutes = [
  { label: 'LGA → Midtown Manhattan', time: '20–35 min' },
  { label: 'LGA → Upper East Side', time: '20–30 min' },
  { label: 'LGA → Financial District', time: '30–45 min' },
  { label: 'LGA → Brooklyn', time: '30–45 min' },
  { label: 'LGA → Queens (Astoria, LIC)', time: '15–25 min' },
  { label: 'Manhattan → LGA', time: '20–35 min' },
  { label: 'Brooklyn → LGA', time: '30–45 min' },
  { label: 'Westchester → LGA', time: '35–50 min' },
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

export default function LGAAreaPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'LaGuardia Airport', url: `${getSiteUrl()}/services/areas/lga-airport` },
        ]}
      />
      <ServiceJsonLd
        name="LaGuardia Airport Car Service"
        description="Luxury black car service to and from LaGuardia Airport (LGA). All terminals covered. Meet & greet, real-time flight tracking, flat-rate pricing with no surge pricing."
        areaServed="LaGuardia Airport, Queens, New York, NY"
        url={`${getSiteUrl()}/services/areas/lga-airport`}
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">LaGuardia Airport · LGA</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
            LaGuardia Airport Car Service | All Terminals, Flat Rates, No Surge
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-4">
            LaGuardia is Manhattan&apos;s closest major airport — just 8 miles from Midtown. When traffic cooperates, it&apos;s the fastest airport run in New York. Eagle Eye makes sure you never waste that advantage — your professional chauffeur is waiting at arrivals with your name when you land.
          </p>
          <p className="text-brand-silver max-w-2xl mb-8">
            Your professional chauffeur meets you inside at arrivals with a name sign, your rate is locked before you board, and real-time flight tracking means your driver adjusts automatically if your flight is early or delayed. No surge. No tolls on top. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book LGA Transfer
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

      {/* LGA Terminals */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            LaGuardia Terminal Guide
          </h2>
          <p className="text-brand-grey mb-8">
            The new LaGuardia Airport opened its rebuilt Terminal B and C facilities in 2022. Both are modern, well-organized, and significantly easier to navigate than the old layout. Your driver is assigned to the correct terminal based on your airline at booking.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {lgaTerminals.map((t) => (
              <div key={t.name} className="bg-brand-white border border-brand-light p-6">
                <div className="font-semibold text-brand-black text-lg mb-1">{t.name}</div>
                <div className="text-sm text-brand-charcoal font-medium mb-3">{t.airlines}</div>
                <p className="text-sm text-brand-grey leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-brand-white border border-brand-light p-5">
            <p className="text-sm text-brand-grey">
              <strong className="text-brand-black">Note:</strong> Terminal assignments are confirmed with your booking and driver. You will receive a WhatsApp message with exact pickup location before landing. No guessing required.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Popular LGA Routes
          </h2>
          <p className="text-brand-grey mb-8">
            LGA&apos;s proximity to Manhattan, Queens, and Brooklyn makes it one of the fastest airport options when you use a professional car service. Estimated times are for normal traffic — your driver monitors conditions and adjusts in real-time.
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
              Book Your LGA Route
            </Link>
          </div>
        </div>
      </section>

      {/* Arrival Pickup Protocol */}
      <section className="py-16 lg:py-20 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-3">
            LGA Arrivals: How Pickup Works
          </h2>
          <p className="text-brand-silver mb-8 max-w-2xl">
            The rebuilt LaGuardia is significantly easier to navigate than the old airport. Here is exactly what to expect when you land.
          </p>
          <div className="space-y-5">
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">1. Flight tracking &amp; driver staging</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                Your driver monitors your flight from departure through landing. As you approach baggage claim, you will receive a WhatsApp message with your driver&apos;s name, vehicle, and the exact pickup location at your terminal.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">2. Terminal B (main building)</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                Terminal B is the primary building at the new LGA, serving American, United, Southwest, and Alaska. The ride-share and black car waiting area is on the lower arrivals level. Your driver holds your name sign at the designated ground transportation exit — clearly marked from baggage claim.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">3. Terminal C (Delta)</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                Delta&apos;s Terminal C is compact and easy to exit. Ground transportation pickup is at the lower level. Your driver is positioned with your name sign just outside the arrivals doors — one of the fastest pickups at any NY area airport.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">4. Wait time included</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                60 minutes of complimentary wait time is included from when your flight lands. LGA is domestic-only, so there is no customs wait — most passengers clear baggage claim in 15–25 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve From LGA */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Neighborhoods We Serve From LGA
          </h2>
          <p className="text-brand-grey mb-8">
            LaGuardia&apos;s location in Queens makes it the closest airport to Midtown, the Upper East Side, and much of Brooklyn. Eagle Eye covers every destination from LGA at a flat rate with tolls included.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/services/areas/midtown-manhattan" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Midtown Manhattan</div>
              <div className="text-sm text-brand-grey">Closest major airport to Midtown — 20–30 min</div>
            </Link>
            <Link href="/services/areas/upper-east-side" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Upper East Side</div>
              <div className="text-sm text-brand-grey">20–30 min — among the fastest pickups at LGA</div>
            </Link>
            <Link href="/services/areas/upper-west-side" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Upper West Side</div>
              <div className="text-sm text-brand-grey">25–40 min via the Triborough approach</div>
            </Link>
            <Link href="/services/areas/harlem" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Harlem</div>
              <div className="text-sm text-brand-grey">20–35 min — one of the closest Manhattan neighborhoods</div>
            </Link>
            <Link href="/services/areas/westchester" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Westchester</div>
              <div className="text-sm text-brand-grey">35–50 min — White Plains, Scarsdale, New Rochelle</div>
            </Link>
            <Link href="/services/areas/brooklyn" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Brooklyn</div>
              <div className="text-sm text-brand-grey">30–45 min — Park Slope, DUMBO, Williamsburg</div>
            </Link>
            <Link href="/services/areas/queens" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Queens</div>
              <div className="text-sm text-brand-grey">15–25 min — Astoria, LIC, Flushing, Forest Hills</div>
            </Link>
            <Link href="/services/areas/bronx" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Bronx</div>
              <div className="text-sm text-brand-grey">20–35 min — Riverdale, Fordham, Co-op City</div>
            </Link>
          </div>
          <div className="mt-6">
            <Link href="/book" className="inline-flex items-center justify-center px-8 py-3 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
              Book LGA Transfer
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            What&apos;s Included with Every LGA Ride
          </h2>
          <p className="text-brand-grey mb-8">
            Every Eagle Eye booking at LaGuardia includes the full service experience. Nothing is extra. Nothing is hidden.
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
                Book LGA Transfer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Why Choose Eagle Eye at LaGuardia
          </h2>
          <p className="text-brand-grey mb-8">
            With Eagle Eye, your professional chauffeur meets you inside at arrivals with a name sign, your flat rate is locked before you board, and real-time flight tracking means no waiting, no confusion.
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

      {/* LGA Terminal Quick-Reference */}
      <section className="py-14 bg-brand-black text-brand-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-white mb-2">LGA Terminal Quick-Reference</h2>
          <p className="text-brand-silver text-sm mb-6">Airlines and pickup zones at the rebuilt LaGuardia Airport.</p>
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
                  <td className="p-4 font-medium text-brand-white">Terminal B</td>
                  <td className="p-4 text-brand-silver">American, United, Southwest, Alaska, Spirit</td>
                  <td className="p-4 text-brand-silver">New 2022 building — car service at designated ground-level zones</td>
                </tr>
                <tr className="bg-brand-charcoal bg-opacity-20">
                  <td className="p-4 font-medium text-brand-white">Terminal C</td>
                  <td className="p-4 text-brand-silver">Delta (all Delta flights)</td>
                  <td className="p-4 text-brand-silver">Separate building — confirm terminal before arrival</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-brand-silver text-sm mt-6">
            LGA is the closest commercial airport to Midtown Manhattan — approximately 8 miles, 20–30 min. Designated car service pickup zones are at the arrivals ground level.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
            LaGuardia Car Service — Frequently Asked Questions
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
              href="/services/routes/manhattan-to-lga-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">Manhattan → LGA</div>
              <div className="text-sm text-brand-grey">Door-to-terminal from any Manhattan address</div>
            </Link>
            <Link
              href="/services/routes/lga-to-manhattan-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">LGA → Manhattan</div>
              <div className="text-sm text-brand-grey">Meet & greet arrivals service to all neighborhoods</div>
            </Link>
            <Link
              href="/services/areas/jfk-airport"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">JFK Airport Service</div>
              <div className="text-sm text-brand-grey">All 8 terminals covered at JFK</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">
            Book Your LaGuardia Transfer Now
          </h2>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto">
            Flat rate confirmed instantly. Driver assigned and tracking your flight. No surprises at pickup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book LGA Transfer
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
