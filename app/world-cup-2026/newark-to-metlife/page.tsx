import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Newark Airport to MetLife Stadium World Cup 2026 | EWR Car Service | Eagle Eye',
  description:
    'Newark Airport (EWR) to MetLife Stadium car service for World Cup 2026. Closest airport to MetLife — just 15 minutes. Flat-rate, meet & greet, no surge. Book direct airport-to-stadium transfer now.',
  keywords: [
    'Newark Airport to MetLife Stadium World Cup',
    'EWR to MetLife Stadium 2026',
    'Newark airport World Cup car service',
    'EWR MetLife Stadium transfer',
    'Newark to MetLife World Cup chauffeur',
    'EWR airport to World Cup 2026',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026/newark-to-metlife` },
};

const faqs = [
  { q: 'How far is Newark Airport from MetLife Stadium?', a: 'Newark Liberty International Airport (EWR) is approximately 10 miles from MetLife Stadium — the closest major airport. The drive takes 15–25 minutes depending on traffic, making EWR the fastest airport option for World Cup fans.' },
  { q: 'Can I go directly from EWR to MetLife Stadium?', a: 'Yes. Eagle Eye Chauffeur offers direct airport-to-stadium transfers. We meet you at arrivals with a name sign, load your luggage, and take you straight to MetLife. No hotel stop required if you are going directly to a match.' },
  { q: 'Should I fly into Newark for the World Cup?', a: 'If you are choosing between airports specifically for World Cup matches at MetLife, EWR is the best choice. It is 10 miles from the stadium, compared to 35+ miles for JFK or LGA. The transfer is shorter, cheaper, and faster.' },
  { q: 'What if my flight into Newark is delayed?', a: 'We track your flight in real time. If your flight is delayed, your driver adjusts pickup timing automatically at no extra charge. This is especially important for international fans connecting for World Cup matches.' },
  { q: 'Can you take me from EWR to my hotel first, then to MetLife?', a: 'Yes. Multi-leg bookings are available — EWR to hotel, then hotel to MetLife on match day. Or EWR to MetLife directly if you are heading straight to the match.' },
];

export default function NewarkToMetLifePage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="Newark Airport to MetLife Stadium World Cup Car Service" description="Direct flat-rate transfer from Newark Liberty Airport (EWR) to MetLife Stadium for World Cup 2026. Meet & greet, flight tracking, no surge pricing. Closest airport to MetLife Stadium." areaServed="Newark, New Jersey" url={`${siteUrl}/world-cup-2026/newark-to-metlife`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'World Cup 2026', url: `${siteUrl}/world-cup-2026` }, { name: 'Newark to MetLife', url: `${siteUrl}/world-cup-2026/newark-to-metlife` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">World Cup 2026 · Closest Airport to MetLife</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            Newark Airport (EWR) to MetLife Stadium — World Cup Transfer
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            EWR is the closest major airport to MetLife Stadium — just 10 miles, approximately 15 minutes. The fastest airport-to-stadium transfer for World Cup 2026. Meet & greet at arrivals, flat-rate pricing, no surge.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>⏱ ~15 min to MetLife</span>
            <span>✈️ Closest airport to stadium</span>
            <span>🛬 Meet & greet at arrivals</span>
            <span>🔒 Flat rate — no surge</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors text-center">Get Instant Quote</Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors text-center">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8">EWR → MetLife: The Fastest World Cup Transfer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Only 10 Miles Away', body: 'MetLife Stadium is closer to Newark Airport than any other major airport. The drive is 15–25 minutes — you can land and be at the stadium in under an hour even accounting for baggage.' },
              { title: 'Direct Airport-to-Stadium', body: 'No connections. No train transfers. No baggage shuttles. We meet you at EWR arrivals with a name sign and take you directly to MetLife Stadium gate.' },
              { title: 'Flight Tracked Automatically', body: 'Your driver monitors your inbound flight live. Landing early or delayed — your driver adjusts at no extra charge.' },
              { title: 'Luggage Handled', body: 'Coming straight from the airport with bags? No problem. Your chauffeur assists with luggage from arrivals to vehicle. Plenty of room in our SUVs for gear.' },
            ].map((i) => (
              <div key={i.title} className="border border-brand-light bg-brand-offwhite p-6">
                <h3 className="font-semibold text-brand-black mb-2">{i.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-offwhite py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">FAQ</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-brand-light pb-6">
                <h3 className="font-semibold text-brand-black mb-2">{f.q}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-900 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold mb-3">Book EWR → MetLife Now</h2>
          <p className="text-green-200 text-sm mb-6">Meet & greet · Flat-rate · Direct to stadium · No surge</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link href="/book" className="inline-block bg-white text-green-900 font-semibold px-8 py-3 text-sm hover:bg-green-100 transition-colors">Get Quote</Link>
            <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-block border border-green-500 text-white font-semibold px-8 py-3 text-sm hover:border-green-300 transition-colors">Call {CONTACT_PHONE_DISPLAY}</a>
          </div>
          <Link href="/world-cup-2026" className="text-green-400 text-xs underline hover:text-green-200">← All World Cup routes & match schedule</Link>
        </div>
      </section>
    </>
  );
}
