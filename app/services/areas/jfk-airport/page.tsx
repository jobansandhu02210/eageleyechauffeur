import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'JFK Airport Car Service NYC | Black Car Transfers All Terminals | Eagle Eye',
  description:
    'JFK Airport black car service — meet & greet, real-time flight tracking, all terminals. Flat rates from Manhattan, Brooklyn, Queens, Long Island &.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/jfk-airport` },
};

const faqs = [
  {
    q: 'Where does my driver meet me at JFK?',
    a: 'Your chauffeur meets you in the ground transportation area of your specific terminal with a name sign. You will also receive a WhatsApp message with the exact meeting point before your flight lands — so you never have to search.',
  },
  {
    q: 'Does Eagle Eye cover all JFK terminals?',
    a: 'Yes — we cover T1, T2, T4, T5, T7, and T8. Your driver is assigned to your specific terminal based on your airline, so there is no confusion at pickup.',
  },
  {
    q: 'How long does it take from JFK to Manhattan?',
    a: 'Approximately 40–55 minutes to Midtown under normal traffic conditions. The FDR Drive to Midtown is the most common route. During peak evening hours (5–8pm), plan for additional time.',
  },
  {
    q: 'Is there free wait time after my JFK flight lands?',
    a: 'Yes — 60 minutes complimentary wait time is included after your flight lands. That covers customs, baggage claim, and walking to ground transportation — no rush.',
  },
  {
    q: 'Can I book a JFK pickup for someone else?',
    a: "Absolutely. Provide the passenger's name and flight number at booking. Your driver will meet them at arrivals with their name on the sign. You will receive real-time updates throughout.",
  },
];

const eaglEyeBenefits = [
  { title: 'Flat rate — tolls included', desc: 'Your price is locked at booking. All applicable tolls are included — no itemized charges at drop-off.' },
  { title: 'TLC-licensed professional chauffeur', desc: 'Every driver is background-checked, licensed, and trained to a professional service standard.' },
  { title: 'Luxury sedan or SUV', desc: 'Clean, late-model vehicles in the class you booked — confirmed before your trip.' },
  { title: 'Meet & greet at arrivals', desc: 'Your chauffeur meets you in the ground transportation area of your specific terminal with a name sign.' },
  { title: 'Real-time flight tracking', desc: 'Your driver adjusts automatically for delays — you receive updates via WhatsApp before landing.' },
  { title: 'No hidden fees', desc: 'Tolls included. 60-minute complimentary wait time included. The rate at booking is the rate you pay.' },
];

const terminals = [
  {
    name: 'Terminal 1',
    airlines: 'Lufthansa, Korean Air, Japan Airlines, Air France, and other foreign carriers',
    detail: 'Driver waits in the ground floor arrivals area with a name sign, just past baggage claim. Long customs queues common on transatlantic flights — your 60-minute wait time covers it.',
  },
  {
    name: 'Terminal 4',
    airlines: 'Delta (main international hub), KLM, Air France, Cathay Pacific, Emirates, Etihad, Virgin Atlantic, and many others',
    detail: "JFK's largest and busiest terminal. Long walk from gates to baggage claim is common. Driver meets you on the ground level arrivals hall. Allow extra time at immigration.",
  },
  {
    name: 'Terminal 5',
    airlines: 'JetBlue (main hub)',
    detail: 'Compact, well-organized terminal — one of the easiest to navigate at JFK. Arrivals ground floor. Driver positioned just past baggage claim exit with name sign.',
  },
  {
    name: 'Terminal 7',
    airlines: 'British Airways, Finnair, Korean Air (select routes)',
    detail: 'Ground level arrivals — driver waits with name sign past baggage claim and customs. International arrivals only, so customs wait time applies.',
  },
  {
    name: 'Terminal 8',
    airlines: 'American Airlines (main hub), British Airways (oneworld partner)',
    detail: 'Arrivals on Level 1. Chauffeur is positioned past baggage claim and customs with name sign. Larger terminal — allow time to walk from gates to ground transportation.',
  },
];

const popularRoutes = [
  { label: 'JFK → Midtown Manhattan', time: '40–55 min' },
  { label: 'JFK → Financial District', time: '35–50 min' },
  { label: 'JFK → Upper East Side', time: '40–55 min' },
  { label: 'JFK → Brooklyn', time: '25–40 min' },
  { label: 'JFK → Queens', time: '15–30 min' },
  { label: 'Manhattan → JFK', time: '40–55 min' },
  { label: 'Brooklyn → JFK', time: '25–40 min' },
  { label: 'Long Island → JFK', time: '20–60 min (varies by community)' },
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

export default function JFKAreaPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'JFK Airport', url: `${getSiteUrl()}/services/areas/jfk-airport` },
        ]}
      />
      <ServiceJsonLd
        name="JFK Airport Black Car Service"
        description="Luxury black car service to and from John F. Kennedy International Airport. All terminals covered. Meet & greet, real-time flight tracking, flat-rate pricing with no surge."
        areaServed="JFK Airport, Queens, New York, NY"
        url={`${getSiteUrl()}/services/areas/jfk-airport`}
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">JFK Airport · All Terminals</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
            JFK Airport Car Service | All Terminals, Meet &amp; Greet, Flat Rates
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-4">
            John F. Kennedy International serves over 60 million passengers across 8 terminals and virtually every major airline in the world. Eagle Eye Chauffeur covers every single one — with a professional driver waiting at your specific terminal, real-time flight tracking, and a flat rate locked at booking.
          </p>
          <p className="text-brand-silver max-w-2xl mb-8">
            Whether you are flying Delta at Terminal 4, JetBlue at Terminal 5, or American at Terminal 8, your chauffeur is already there. No surge pricing. No confusion. Meet-and-greet service right at your terminal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book JFK Transfer
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

      {/* JFK Terminals */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            All JFK Terminals Covered
          </h2>
          <p className="text-brand-grey mb-8">
            JFK's terminal layout can be confusing — multiple buildings, different airlines, and varying ground transportation setups. Eagle Eye assigns your driver to your specific terminal based on your airline and flight number. You never need to guess where to go.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {terminals.map((t) => (
              <div key={t.name} className="bg-brand-white border border-brand-light p-5">
                <div className="font-semibold text-brand-black mb-1">{t.name}</div>
                <div className="text-sm text-brand-charcoal mb-2 font-medium">{t.airlines}</div>
                <p className="text-sm text-brand-grey">{t.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-6">
            Terminal assignments can change. Your confirmation will always list your driver&apos;s exact terminal location. WhatsApp updates sent before landing.
          </p>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Popular Routes From &amp; To JFK
          </h2>
          <p className="text-brand-grey mb-8">
            All times are typical estimates under normal traffic conditions. Route times can vary based on time of day and traffic. Your driver monitors conditions in real-time and selects the fastest path.
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
              Book Your Route
            </Link>
          </div>
        </div>
      </section>

      {/* Arrival Pickup Protocol */}
      <section className="py-16 lg:py-20 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-3">
            JFK Arrivals: How Pickup Works
          </h2>
          <p className="text-brand-silver mb-8 max-w-2xl">
            JFK arrivals are always on the Ground level of each terminal. Here is exactly what happens when you land.
          </p>
          <div className="space-y-5">
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">1. Cell lot &amp; flight tracking</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                Your driver monitors your flight from wheels-down. They wait in the JFK cell lot until your flight is confirmed on the ground, then move to your terminal. You receive a WhatsApp message with your driver&apos;s name, vehicle, and exact pickup location before you reach baggage claim.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">2. Terminal-specific notes</div>
              <ul className="text-brand-silver text-sm space-y-2 mt-2">
                <li><strong className="text-brand-white">T4:</strong> JFK&apos;s largest terminal — the walk from gates to baggage claim and ground transportation is long. Allow extra time. Driver waits on the Ground level arrivals hall.</li>
                <li><strong className="text-brand-white">T5 (JetBlue):</strong> Compact and well-signed — fastest exit at JFK. Driver is steps from the baggage claim exit.</li>
                <li><strong className="text-brand-white">T8 (American):</strong> Arrivals on Level 1. Follow signs to Ground Transportation on Level 1 — driver holds your name sign at the exit.</li>
                <li><strong className="text-brand-white">T1 &amp; T7:</strong> International only. Customs can take 30–60 minutes. Your 60-minute complimentary wait covers it — no rush.</li>
              </ul>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">3. Meet your driver</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                Your chauffeur holds a name sign at the designated arrivals exit of your terminal. No need to find a pickup zone or walk to a remote lot. 60 minutes of complimentary wait time is included — the clock starts when your flight lands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve From JFK */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Neighborhoods We Serve From JFK
          </h2>
          <p className="text-brand-grey mb-8">
            Eagle Eye covers the full metro area from JFK — Manhattan, Brooklyn, Queens, Long Island, Westchester, and beyond. Your flat rate covers the entire journey, tolls included.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/services/areas/midtown-manhattan" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Midtown Manhattan</div>
              <div className="text-sm text-brand-grey">40–55 min — most direct via Belt &amp; FDR</div>
            </Link>
            <Link href="/services/areas/upper-east-side" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Upper East Side</div>
              <div className="text-sm text-brand-grey">40–55 min — via Queens Midtown Tunnel</div>
            </Link>
            <Link href="/services/areas/financial-district" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Financial District</div>
              <div className="text-sm text-brand-grey">35–50 min — direct via BQE &amp; Battery Tunnel</div>
            </Link>
            <Link href="/services/areas/brooklyn" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Brooklyn</div>
              <div className="text-sm text-brand-grey">25–40 min — Park Slope, DUMBO, Williamsburg</div>
            </Link>
            <Link href="/services/areas/queens" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Queens</div>
              <div className="text-sm text-brand-grey">15–30 min — Astoria, Forest Hills, Flushing</div>
            </Link>
            <Link href="/services/areas/long-island" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Long Island</div>
              <div className="text-sm text-brand-grey">20–90 min — Nassau, Suffolk, The Hamptons</div>
            </Link>
            <Link href="/services/areas/westchester" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">Westchester</div>
              <div className="text-sm text-brand-grey">55–80 min — White Plains, Scarsdale, Rye</div>
            </Link>
            <Link href="/services/areas/hamptons" className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black mb-1">The Hamptons</div>
              <div className="text-sm text-brand-grey">90–120 min — Southampton, East Hampton</div>
            </Link>
          </div>
          <div className="mt-6">
            <Link href="/book" className="inline-flex items-center justify-center px-8 py-3 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
              Book JFK Transfer
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            What&apos;s Included with Every JFK Ride
          </h2>
          <p className="text-brand-grey mb-8">
            No add-ons. No upsells. Everything below is standard on every Eagle Eye booking at JFK.
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
                Book JFK Transfer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="py-16 lg:py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Why Choose Eagle Eye at JFK
          </h2>
          <p className="text-brand-grey mb-8">
            With a professional black car, your driver is already at your specific terminal when you land, your rate is flat with all tolls included, and 60 minutes of wait time is built in. No walking to distant pickup zones, no surprises.
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

      {/* JFK Terminal Quick-Reference */}
      <section className="py-14 bg-brand-black text-brand-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-white mb-2">JFK Terminal Quick-Reference</h2>
          <p className="text-brand-silver text-sm mb-6">Airlines and pickup notes by terminal — confirmed at booking.</p>
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
                  <td className="p-4 font-medium text-brand-white">Terminal 1</td>
                  <td className="p-4 text-brand-silver">Lufthansa, JAL, Air Canada, Air China</td>
                  <td className="p-4 text-brand-silver">International — longer customs walk</td>
                </tr>
                <tr className="bg-brand-charcoal bg-opacity-20">
                  <td className="p-4 font-medium text-brand-white">Terminal 4</td>
                  <td className="p-4 text-brand-silver">Delta (hub), Air France, KLM, Cathay Pacific</td>
                  <td className="p-4 text-brand-silver">Largest terminal — allow extra time</td>
                </tr>
                <tr className="bg-brand-charcoal bg-opacity-40">
                  <td className="p-4 font-medium text-brand-white">Terminal 5</td>
                  <td className="p-4 text-brand-silver">JetBlue (all flights)</td>
                  <td className="p-4 text-brand-silver">Most compact terminal — quickest exit</td>
                </tr>
                <tr className="bg-brand-charcoal bg-opacity-20">
                  <td className="p-4 font-medium text-brand-white">Terminal 7</td>
                  <td className="p-4 text-brand-silver">British Airways, Finnair, Korean Air</td>
                  <td className="p-4 text-brand-silver">Ground Transportation Level 1</td>
                </tr>
                <tr className="bg-brand-charcoal bg-opacity-40">
                  <td className="p-4 font-medium text-brand-white">Terminal 8</td>
                  <td className="p-4 text-brand-silver">American Airlines, British Airways (shared)</td>
                  <td className="p-4 text-brand-silver">Renovated, efficient arrivals</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-brand-silver text-sm mt-6">
            Your driver meets you at Ground Transportation / Arrivals level of your terminal. Provide your terminal and flight number at booking — we track your flight live and adjust for any delays.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
            JFK Airport Car Service — Frequently Asked Questions
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
            Related JFK Routes &amp; Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/routes/jfk-to-manhattan-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">JFK → Manhattan</div>
              <div className="text-sm text-brand-grey">Meet & greet, all terminals to Midtown and beyond</div>
            </Link>
            <Link
              href="/services/routes/manhattan-to-jfk-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">Manhattan → JFK</div>
              <div className="text-sm text-brand-grey">Door-to-terminal, any Manhattan neighborhood</div>
            </Link>
            <Link
              href="/services/routes/jfk-to-brooklyn"
              className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black mb-1">JFK → Brooklyn</div>
              <div className="text-sm text-brand-grey">Direct service, all Brooklyn neighborhoods</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-4">
            Ready to Book Your JFK Transfer?
          </h2>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto">
            Lock in your flat rate now. Confirmation within minutes. Your driver is tracking your flight before you even board.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book JFK Transfer
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
