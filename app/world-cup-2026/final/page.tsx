import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: {
    absolute: 'World Cup Final 2026 | MetLife Stadium Car Service | Eagle Eye',
  },
  description:
    'World Cup Final 2026 car service to MetLife Stadium, July 19. Flat-rate from Manhattan, JFK, LGA & EWR. No surge pricing. Pre-arranged post-match pickup.',
  keywords: [
    'World Cup Final 2026 car service',
    'World Cup Final MetLife July 19',
    'World Cup Final transportation New York',
    'MetLife Stadium Final car service',
    'FIFA World Cup Final 2026 chauffeur',
    'New York New Jersey stadium World Cup Final transport',
    'July 19 2026 car service MetLife',
    'World Cup Final 2026 transportation NYC',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026/final` },
  openGraph: {
    url: `${getSiteUrl()}/world-cup-2026/final`,
    title: 'World Cup Final 2026 | MetLife Stadium Car Service | Eagle Eye',
    description:
      'Book luxury car service for the World Cup Final at MetLife Stadium, July 19, 2026. Flat rate, no surge, pre-arranged post-Final pickup. Spots fill fast.',
  },
};

const faqs = [
  {
    q: 'When is the 2026 FIFA World Cup Final?',
    a: 'The 2026 FIFA World Cup Final is on Sunday, July 19, 2026, at MetLife Stadium in East Rutherford, New Jersey. It is the single biggest sporting event of the year globally.',
  },
  {
    q: 'How do I get to MetLife Stadium for the World Cup Final?',
    a: 'The best option for the Final is pre-booked private car service. NJ Transit trains will be sold out or standing-room-only. Rideshare apps will surge to $250–$400+ on Final day. Eagle Eye Chauffeur locks your price at booking with no surge.',
  },
  {
    q: 'Can you pick me up after the World Cup Final?',
    a: 'Yes — and this is one of the most important parts of Final day transport. We coordinate a pre-arranged post-match pickup point. Your chauffeur stays in contact via WhatsApp during the match and meets you at the agreed location when you exit, bypassing all rideshare queues.',
  },
  {
    q: 'How early should I book for the World Cup Final?',
    a: 'As early as possible. The World Cup Final is the single highest-demand transportation event of 2026. We recommend booking your Final transport immediately — vehicles and time slots fill weeks in advance.',
  },
  {
    q: 'What is the difference between a regular booking and a Final package?',
    a: 'A World Cup Final booking includes dedicated Final-day coordination, pre-arranged post-match pickup, direct WhatsApp contact with your driver throughout the day, and priority routing. Your flat rate covers all of this.',
  },
  {
    q: 'Can you handle large groups for the Final?',
    a: 'Yes. Our Business Class SUVs seat 5–6 passengers and First Class SUVs seat 6–7. For larger groups, we arrange multiple vehicles. Contact us to plan group Final transport.',
  },
  {
    q: 'What if the match goes to extra time or penalties?',
    a: 'Finals can run 30+ minutes of extra time and penalties. We account for this — your post-match pickup is flexible. Your driver waits for you and adjusts with no extra charge for match duration.',
  },
];

const origins = [
  { label: 'From Manhattan', href: '/world-cup-2026/manhattan-to-metlife', time: '~25 min' },
  { label: 'From Newark Airport (EWR)', href: '/world-cup-2026/newark-to-metlife', time: '~15 min' },
  { label: 'From JFK Airport', href: '/world-cup-2026/jfk-to-metlife', time: '~50 min' },
  { label: 'From LaGuardia (LGA)', href: '/world-cup-2026/lga-to-metlife', time: '~35 min' },
  { label: 'From Long Island', href: '/world-cup-2026/long-island-to-metlife', time: '~45–60 min' },
  { label: 'From NYC Hotel', href: '/world-cup-2026/nyc-hotel-to-metlife', time: '~25 min' },
];

export default function WorldCupFinalPage() {
  const siteUrl = getSiteUrl();
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'World Cup 2026', url: `${siteUrl}/world-cup-2026` },
    { name: 'World Cup Final', url: `${siteUrl}/world-cup-2026/final` },
  ];

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: '2026 FIFA World Cup Final',
    startDate: '2026-07-19',
    location: {
      '@type': 'StadiumOrArena',
      name: 'MetLife Stadium',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1 MetLife Stadium Dr',
        addressLocality: 'East Rutherford',
        addressRegion: 'NJ',
        postalCode: '07073',
        addressCountry: 'US',
      },
    },
    organizer: { '@type': 'Organization', name: 'FIFA' },
    description: 'The 2026 FIFA World Cup Final at MetLife Stadium, East Rutherford, New Jersey.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <ServiceJsonLd
        name="World Cup Final 2026 Car Service — MetLife Stadium July 19"
        description="Luxury flat-rate car service for the 2026 FIFA World Cup Final at MetLife Stadium on July 19. Pickups from Manhattan, JFK, EWR, LGA, and Long Island. No surge pricing. Pre-arranged post-Final pickup."
        areaServed="New York–New Jersey Metro Area"
        url={`${siteUrl}/world-cup-2026/final`}
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* HERO */}
      <section className="bg-green-950 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-green-800/50 border border-green-600 text-green-300 text-xs font-semibold px-4 py-2 mb-6 tracking-widest uppercase">
            🏆 MetLife Stadium · East Rutherford NJ · Sunday July 19 2026
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            World Cup Final 2026 — Car Service to MetLife Stadium
          </h1>
          <p className="text-green-200 text-lg max-w-2xl leading-relaxed mb-4">
            The biggest match on earth. One hundred thousand fans. Rideshares surging to $300+. Trains sold out. Your World Cup Final transport should be the one thing you don't have to worry about.
          </p>
          <p className="text-green-300 text-sm mb-10 font-medium">
            Eagle Eye Chauffeur: Flat rate locked at booking · No surge pricing · Pre-arranged post-Final pickup
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-white text-green-900 font-semibold px-8 py-4 text-sm tracking-wide hover:bg-green-100 transition-colors text-center">
              Request a Final Quote
            </Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-green-500 text-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-green-300 transition-colors text-center">
              WhatsApp — Get Quote
            </a>
            <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-block border border-green-700 text-green-300 font-semibold px-8 py-4 text-sm tracking-wide hover:border-green-500 transition-colors text-center">
              Call {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="bg-brand-black text-brand-white py-8 border-b border-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
            <div><div className="font-bold text-green-400 text-lg">July 19, 2026</div><div className="text-brand-silver mt-1">Match Date</div></div>
            <div><div className="font-bold text-green-400 text-lg">MetLife Stadium</div><div className="text-brand-silver mt-1">East Rutherford, NJ</div></div>
            <div><div className="font-bold text-green-400 text-lg">~82,500</div><div className="text-brand-silver mt-1">Capacity</div></div>
            <div><div className="font-bold text-green-400 text-lg">Get a Quote</div><div className="text-brand-silver mt-1">Spots filling fast</div></div>
          </div>
        </div>
      </section>

      {/* WHY BOOK NOW */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8">
            Why Transport on Final Day is Different
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Rideshare Will Be Unusable',
                body: 'On World Cup Final day, every fan at MetLife opens Uber simultaneously after the match. Surge pricing hits 4–6× instantly. A $70 ride to Manhattan becomes $300–$400 or simply unavailable. Your pre-booked car is already waiting.',
              },
              {
                title: 'NJ Transit Will Be Overwhelmed',
                body: 'Even with expanded Final-day service, NJ Transit trains sell out and post-match wait times of 90+ minutes are realistic. That is not how you end the greatest sporting event of the year.',
              },
              {
                title: 'Parking Is Not an Option',
                body: 'MetLife Stadium parking for the Final starts at $80+ and requires arriving hours before kickoff. Post-Final gridlock takes 60–90 minutes to clear. This is the one day you absolutely should not drive.',
              },
              {
                title: 'Price Locked, No Surprises',
                body: 'Eagle Eye locks your flat rate the moment you book — regardless of what happens to rideshare prices on July 19. What you pay today is what you pay on Final day.',
              },
              {
                title: 'Post-Final Pickup, Coordinated',
                body: 'The Final may go to extra time and penalties. Your chauffeur stays available and in contact throughout. When you exit, your driver meets you at the pre-arranged point — no queue, no wait.',
              },
              {
                title: 'The Final Deserves Better',
                body: 'You spent hundreds on tickets. You flew across the world or drove from Long Island. The ride home from the World Cup Final should match the occasion — not end with you standing on a platform at midnight.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-brand-light bg-brand-offwhite p-6">
                <h3 className="font-semibold text-brand-black mb-2">{item.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PICK YOUR ORIGIN */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Where Are You Coming From?
          </h2>
          <p className="text-brand-grey text-sm mb-8">Select your origin for route-specific details and pricing.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {origins.map((o) => (
              <Link
                key={o.href}
                href={o.href}
                className="flex items-center justify-between bg-brand-white border border-brand-light p-5 hover:border-green-600 transition-colors group"
              >
                <div>
                  <div className="font-semibold text-brand-black group-hover:text-green-700 transition-colors">{o.label}</div>
                  <div className="text-brand-silver text-xs mt-0.5">{o.time} to MetLife</div>
                </div>
                <span className="text-brand-grey group-hover:text-green-600 transition-colors">→</span>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/contact" className="inline-block bg-green-700 text-white font-semibold px-8 py-4 text-sm hover:bg-green-600 transition-colors">
              Request a Final Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-12">
            World Cup Final Transport FAQ
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

      {/* FINAL CTA */}
      <section className="bg-green-900 text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Secure Your World Cup Final Transport
          </h2>
          <p className="text-green-200 mb-2">July 19, 2026 · MetLife Stadium · East Rutherford, NJ</p>
          <p className="text-green-300 text-sm mb-8 max-w-md mx-auto">
            Flat-rate pricing · No surge · Door-to-door · Post-Final pickup included
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-green-900 font-semibold px-8 py-4 text-sm tracking-wide hover:bg-green-100 transition-colors">
              Request a Final Quote
            </Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-green-500 text-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-green-300 transition-colors">
              WhatsApp Us
            </a>
          </div>
          <p className="mt-6 text-green-400 text-xs">
            ← <Link href="/world-cup-2026" className="underline hover:text-green-200">Back to full World Cup schedule & all routes</Link>
          </p>
        </div>
      </section>
    </>
  );
}
