import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: {
    absolute: 'World Cup 2026 MetLife Stadium Car Service | Transportation Guide | Eagle Eye',
  },
  description:
    'World Cup 2026 MetLife Stadium car service — flat-rate chauffeur from Manhattan, JFK, EWR, LGA & Long Island. Full match schedule, transit comparison, and dedicated Final (July 19) packages. Book now.',
  keywords: [
    'World Cup 2026 MetLife car service',
    'MetLife Stadium transportation World Cup',
    'World Cup 2026 car service NYC',
    'MetLife Stadium chauffeur 2026',
    'FIFA World Cup 2026 New Jersey car service',
    'World Cup Final MetLife car service',
    'MetLife Stadium black car service',
    'how to get to MetLife Stadium World Cup',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026` },
  openGraph: {
    url: `${getSiteUrl()}/world-cup-2026`,
    title: 'World Cup 2026 MetLife Stadium Car Service | Eagle Eye Chauffeur',
    description:
      'Flat-rate chauffeur service for every World Cup match at MetLife Stadium. Manhattan, JFK, EWR, LGA & Long Island pickups. Book before spots fill — the Final is July 19.',
    images: [{ url: `${getSiteUrl()}/og-image.jpg`, width: 1200, height: 630, alt: 'World Cup 2026 MetLife Stadium Car Service' }],
  },
};

const matchSchedule = [
  { date: 'Jun 12', day: 'Thu', round: 'Group Stage', note: 'Opening weekend' },
  { date: 'Jun 15', day: 'Sun', round: 'Group Stage', note: '' },
  { date: 'Jun 18', day: 'Wed', round: 'Group Stage', note: '' },
  { date: 'Jun 22', day: 'Sun', round: 'Group Stage', note: '' },
  { date: 'Jun 26', day: 'Thu', round: 'Group Stage', note: 'Final group stage' },
  { date: 'Jun 29', day: 'Sun', round: 'Group Stage', note: 'Final group stage' },
  { date: 'Jul 2',  day: 'Thu', round: 'Round of 16', note: 'Knockout begins' },
  { date: 'Jul 6',  day: 'Mon', round: 'Quarterfinal', note: '' },
  { date: 'Jul 19', day: 'Sun', round: '🏆 THE FINAL', note: 'Biggest match on earth', highlight: true },
];

const transitComparison = [
  {
    option: 'NJ Transit Train',
    cost: '~$105 round-trip',
    time: '35 min from Penn St.',
    pain: 'Sold-out fast, massive crowds, 90-min wait after final whistle, no door-to-door',
    rating: '⭐⭐',
  },
  {
    option: 'Direct Bus (NYC–MetLife)',
    cost: '~$40–60 round-trip',
    time: '45–75 min',
    pain: 'No set schedule, crowds, standing room only on return, drops at stadium perimeter',
    rating: '⭐⭐',
  },
  {
    option: 'Uber / Lyft',
    cost: '$150–350+ surge',
    time: '25–60 min',
    pain: 'Surge pricing 3–5× on match days, unpredictable wait, no guaranteed pickup after match',
    rating: '⭐',
  },
  {
    option: 'Drive & Park',
    cost: '$50–80 parking',
    time: '45–90 min to exit',
    pain: 'Post-match gridlock takes 60–90 minutes to escape. Not worth it for any match.',
    rating: '⭐',
  },
  {
    option: 'Eagle Eye Chauffeur',
    cost: 'Flat rate — locked at booking',
    time: '20–50 min by origin',
    pain: '✓ No surge. ✓ Door-to-door. ✓ Pre-arranged post-match pickup. ✓ Skip the queues.',
    rating: '⭐⭐⭐⭐⭐',
  },
];

const routePages = [
  { label: 'Manhattan → MetLife', href: '/world-cup-2026/manhattan-to-metlife', time: '~25 min', desc: 'From any Midtown or downtown hotel' },
  { label: 'Newark Airport → MetLife', href: '/world-cup-2026/newark-to-metlife', time: '~15 min', desc: 'Closest airport — fastest transfer' },
  { label: 'JFK Airport → MetLife', href: '/world-cup-2026/jfk-to-metlife', time: '~50 min', desc: 'Direct from international arrivals' },
  { label: 'LaGuardia → MetLife', href: '/world-cup-2026/lga-to-metlife', time: '~35 min', desc: 'No connections, door-to-door' },
  { label: 'Long Island → MetLife', href: '/world-cup-2026/long-island-to-metlife', time: '~45–60 min', desc: 'Nassau & Suffolk County pickups' },
  { label: 'NYC Hotel → MetLife', href: '/world-cup-2026/nyc-hotel-to-metlife', time: '~25 min', desc: 'Concierge-style hotel pickup' },
];

const faqs = [
  {
    q: 'How far is MetLife Stadium from Manhattan?',
    a: 'MetLife Stadium is approximately 8 miles from Midtown Manhattan in East Rutherford, New Jersey. The drive takes 20–35 minutes without traffic, though match days add time — plan an extra 30–45 minutes for arrival buffer.',
  },
  {
    q: 'How much does car service from Manhattan to MetLife cost for the World Cup?',
    a: 'Eagle Eye Chauffeur uses flat-rate pricing confirmed at booking — no surge, no surprises. Rates depend on your exact pickup location, vehicle class, and timing. Get an instant quote on our booking page.',
  },
  {
    q: 'Is the NJ Transit train to MetLife available for World Cup matches?',
    a: 'Yes, NJ Transit runs event trains from Penn Station to Meadowlands Station. However, demand is extreme for World Cup matches — trains sell out fast, cost approximately $105 round-trip for event pricing, and post-match wait times of 60–90 minutes are common. Pre-booked car service avoids all of this.',
  },
  {
    q: 'Will Uber surge price on World Cup match days?',
    a: 'Yes. During major World Cup matches at MetLife, rideshare apps like Uber and Lyft apply surge pricing of 3–5× normal rates. A typical $60 ride can cost $180–$300+ after a match. Eagle Eye Chauffeur locks your price at booking with no surge ever.',
  },
  {
    q: 'Can you pick me up after the match at MetLife?',
    a: 'Yes. We coordinate a pre-arranged post-match pickup point near the stadium. Your chauffeur stays in contact via WhatsApp throughout the match and is ready when you exit — no waiting in rideshare queues.',
  },
  {
    q: 'Do you have service for the World Cup Final on July 19?',
    a: 'Yes — and we strongly recommend booking the Final as early as possible. The World Cup Final at MetLife on July 19, 2026 is the highest-demand transportation event of the year. We have a dedicated Final page with booking details.',
  },
  {
    q: 'Can you handle airport transfers AND match-day rides?',
    a: 'Yes. Many World Cup visitors combine: airport arrival → hotel → match day → return airport. We handle the full itinerary. Multi-leg bookings with the same driver can be arranged — contact us to plan your stay.',
  },
];

export default function WorldCup2026Page() {
  const siteUrl = getSiteUrl();
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'World Cup 2026', url: `${siteUrl}/world-cup-2026` },
  ];

  return (
    <>
      <ServiceJsonLd
        name="World Cup 2026 MetLife Stadium Car Service"
        description="Flat-rate chauffeur service for FIFA World Cup 2026 matches at MetLife Stadium, East Rutherford NJ. Pickups from Manhattan, JFK, EWR, LGA, and Long Island. No surge pricing."
        areaServed="New York–New Jersey Metro Area"
        url={`${siteUrl}/world-cup-2026`}
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* HERO */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-charcoal to-brand-black opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-green-900/40 border border-green-700 text-green-400 text-xs font-semibold px-4 py-2 mb-6 tracking-wide uppercase">
            FIFA World Cup 2026 · June 11 – July 19 · MetLife Stadium NJ
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            World Cup 2026 MetLife Stadium Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-4">
            Flat-rate chauffeur service for every match at MetLife Stadium — including the Final on July 19. No surge pricing, no parking nightmare, no crowded trains. Just a professional driver waiting at your door.
          </p>
          <p className="text-brand-silver text-sm mb-10 max-w-xl">
            Serving Manhattan, JFK, Newark (EWR), LaGuardia (LGA), Long Island, and all NYC hotels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-brand-offwhite transition-colors text-center">
              Request a World Cup Quote
            </Link>
            <Link href="/world-cup-2026/final" className="inline-block bg-green-700 text-white font-semibold px-8 py-4 text-sm tracking-wide hover:bg-green-600 transition-colors text-center">
              🏆 Final Transport — July 19
            </Link>
            <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-white transition-colors text-center">
              Call {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-brand-charcoal border-y border-brand-dark text-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
            <div><div className="text-2xl font-bold">9</div><div className="text-brand-silver mt-1">Matches at MetLife</div></div>
            <div><div className="text-2xl font-bold">48</div><div className="text-brand-silver mt-1">Nations Competing</div></div>
            <div><div className="text-2xl font-bold">Jul 19</div><div className="text-brand-silver mt-1">World Cup Final</div></div>
            <div><div className="text-2xl font-bold">24/7</div><div className="text-brand-silver mt-1">Booking Available</div></div>
          </div>
        </div>
      </section>

      {/* MATCH SCHEDULE */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            MetLife Stadium — Full Match Schedule 2026
          </h2>
          <p className="text-brand-grey text-sm mb-8">
            Every FIFA World Cup 2026 match at MetLife Stadium, East Rutherford, NJ. Confirm kickoff times at FIFA.com.
          </p>
          <div className="space-y-3">
            {matchSchedule.map((m) => (
              <div
                key={m.date}
                className={`flex items-center gap-4 p-4 border rounded transition-colors ${
                  m.highlight
                    ? 'border-green-600 bg-green-950 text-white'
                    : 'border-brand-light bg-brand-offwhite'
                }`}
              >
                <div className={`text-center w-16 shrink-0 ${m.highlight ? 'text-green-300' : 'text-brand-silver'}`}>
                  <div className="font-bold text-sm">{m.date}</div>
                  <div className="text-xs">{m.day}</div>
                </div>
                <div className="flex-1">
                  <div className={`font-semibold text-sm ${m.highlight ? 'text-white' : 'text-brand-black'}`}>{m.round}</div>
                  {m.note && <div className={`text-xs mt-0.5 ${m.highlight ? 'text-green-300' : 'text-brand-silver'}`}>{m.note}</div>}
                </div>
                {m.highlight ? (
                  <Link href="/world-cup-2026/final" className="shrink-0 text-xs bg-green-600 text-white font-semibold px-3 py-1.5 hover:bg-green-500 transition-colors">
                    Final Quote →
                  </Link>
                ) : (
                  <Link href="/contact" className="shrink-0 text-xs border border-brand-dark text-brand-black font-medium px-3 py-1.5 hover:bg-brand-black hover:text-white transition-colors">
                    Get Quote →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-brand-silver">
            Dates shown are approximate match days. Exact kickoff times confirmed at FIFA.com. Book your transfer for any match day above.
          </p>
        </div>
      </section>

      {/* TRANSIT PAIN COMPARISON */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            How to Get to MetLife for the World Cup — Honest Comparison
          </h2>
          <p className="text-brand-grey text-sm mb-8 max-w-2xl">
            Every option ranked by real World Cup match-day conditions — not normal-day commutes.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-black text-brand-white text-left">
                  <th className="px-4 py-3 font-semibold">Option</th>
                  <th className="px-4 py-3 font-semibold">Cost</th>
                  <th className="px-4 py-3 font-semibold">Drive Time</th>
                  <th className="px-4 py-3 font-semibold">Match-Day Reality</th>
                  <th className="px-4 py-3 font-semibold text-center">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-light">
                {transitComparison.map((t, i) => (
                  <tr key={t.option} className={i === transitComparison.length - 1 ? 'bg-green-950 text-white' : 'bg-brand-white'}>
                    <td className={`px-4 py-4 font-semibold ${i === transitComparison.length - 1 ? 'text-green-300' : 'text-brand-black'}`}>{t.option}</td>
                    <td className={`px-4 py-4 ${i === transitComparison.length - 1 ? 'text-white' : 'text-brand-grey'}`}>{t.cost}</td>
                    <td className={`px-4 py-4 ${i === transitComparison.length - 1 ? 'text-white' : 'text-brand-grey'}`}>{t.time}</td>
                    <td className={`px-4 py-4 text-xs leading-relaxed ${i === transitComparison.length - 1 ? 'text-green-200' : 'text-brand-grey'}`}>{t.pain}</td>
                    <td className="px-4 py-4 text-center">{t.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROUTE PAGES */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Book by Your Origin — Pick Your Route
          </h2>
          <p className="text-brand-grey text-sm mb-8">
            Select where you are travelling from for exact pricing and route details.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {routePages.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="border border-brand-light bg-brand-offwhite p-6 hover:border-brand-dark transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-brand-black group-hover:underline">{r.label}</h3>
                  <span className="text-brand-silver text-sm shrink-0 ml-2">{r.time}</span>
                </div>
                <p className="text-brand-grey text-sm">{r.desc}</p>
                <span className="inline-block mt-3 text-xs text-brand-black font-medium group-hover:underline">See route details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="bg-green-900 text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-3">Most Important Date of the Tournament</div>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            🏆 World Cup Final — July 19, 2026
          </h2>
          <p className="text-green-200 max-w-xl mx-auto leading-relaxed mb-8">
            MetLife Stadium. The biggest match on earth. Rideshares will surge to $300+. Trains will be sold out. Request a custom Final quote before spots fill.
          </p>
          <Link href="/world-cup-2026/final" className="inline-block bg-white text-green-900 font-semibold px-8 py-4 text-sm tracking-wide hover:bg-green-100 transition-colors">
            Request Final Transport Quote →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-12">
            World Cup 2026 Transport FAQ
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-brand-light pb-8">
                <h3 className="font-semibold text-brand-black mb-3">{faq.q}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-brand-black text-brand-white py-14 lg:py-18">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-4">Request Your World Cup Transfer Quote</h2>
          <p className="text-brand-silver mb-8">Custom World Cup pricing · No surge · Door-to-door · Pre-arranged post-match pickup</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-brand-offwhite transition-colors">
              Request a Quote
            </Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-white transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
