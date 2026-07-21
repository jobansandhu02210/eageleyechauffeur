import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'LaGuardia to MetLife Stadium | World Cup 2026',
  description:
    'LaGuardia Airport (LGA) to MetLife Stadium car service for World Cup 2026. Direct transfer ~35 minutes. Meet & greet at Terminal B & C, flat-rate.',
  keywords: [
    'LaGuardia to MetLife Stadium World Cup',
    'LGA to MetLife Stadium 2026',
    'LaGuardia airport World Cup car service',
    'LGA MetLife Stadium transfer',
    'LGA to New Jersey World Cup 2026',
    'LaGuardia to MetLife chauffeur',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026/lga-to-metlife` },
};

const faqs = [
  { q: 'How long does it take to get from LaGuardia to MetLife Stadium?', a: 'LaGuardia Airport (LGA) to MetLife Stadium is approximately 30–45 minutes by car, depending on traffic. On World Cup match days, allow 60 minutes and depart early. Your chauffeur plans the route around live traffic.' },
  { q: 'Is there a direct transfer from LGA to MetLife for World Cup?', a: 'Yes. Eagle Eye Chauffeur offers direct, no-connection transfers from LGA Terminal B or C to MetLife Stadium. No trains, no buses, no connections — just door-to-door.' },
  { q: 'Where does my driver meet me at LaGuardia?', a: 'Your chauffeur meets you inside the terminal at arrivals with a name sign. We serve the newly rebuilt Terminal B and Terminal C at LGA.' },
  { q: 'Do you track my flight from LGA?', a: 'Yes. We monitor your flight live and adjust pickup timing automatically. If your flight is delayed, your driver waits at no extra charge.' },
  { q: 'Can I go from LGA to my Manhattan hotel first, then to MetLife on match day?', a: 'Yes. Many fans book LGA to hotel on arrival day, then a separate Manhattan to MetLife transfer on match day. We coordinate both bookings and can assign the same driver.' },
];

export default function LGAToMetLifePage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="LaGuardia Airport to MetLife Stadium World Cup Car Service" description="Direct flat-rate transfer from LaGuardia Airport (LGA) to MetLife Stadium for World Cup 2026. Meet & greet at Terminal B & C, flight tracking, no surge pricing." areaServed="New York City, NY" url={`${siteUrl}/world-cup-2026/lga-to-metlife`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'World Cup 2026', url: `${siteUrl}/world-cup-2026` }, { name: 'LGA to MetLife', url: `${siteUrl}/world-cup-2026/lga-to-metlife` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">World Cup 2026 · LaGuardia Airport Transfer</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            LaGuardia Airport (LGA) to MetLife Stadium — World Cup Transfer
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Direct, no-connection transfer from LaGuardia to MetLife Stadium. Approximately 35 minutes. Meet & greet at the rebuilt Terminal B or C, flat-rate pricing, no surge pricing ever.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>⏱ ~35 min to MetLife</span>
            <span>✈️ Terminal B & C covered</span>
            <span>🛬 Meet & greet at arrivals</span>
            <span>🔒 Flat rate — no surge</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors text-center">Request a World Cup Quote</Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors text-center">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8">LGA to MetLife — What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Newly Rebuilt Terminals', body: 'LGA Terminal B and Terminal C are both modern, and the pickup flow for chauffeur services is clear. Your driver knows exactly where to meet you.' },
              { title: 'No Connections', body: 'No AirTrain, no NJ Transit transfers. LGA to MetLife is a direct drive over the George Washington Bridge or through the Lincoln Tunnel — single vehicle, door-to-door.' },
              { title: 'Flight Delay Protected', body: 'LGA is known for weather delays. We track your flight and adjust automatically — your driver is never at the airport before you arrive.' },
              { title: 'Direct to Stadium or Hotel', body: 'Arriving day-of-match? Straight to MetLife. Arriving early? To your hotel. Either way, one booking handles it.' },
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
            {faqs.map((f) => (<div key={f.q} className="border-b border-brand-light pb-6"><h3 className="font-semibold text-brand-black mb-2">{f.q}</h3><p className="text-brand-grey text-sm leading-relaxed">{f.a}</p></div>))}
          </div>
        </div>
      </section>

      <section className="bg-green-900 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold mb-3">Book LGA → MetLife Now</h2>
          <p className="text-green-200 text-sm mb-6">Meet & greet · Direct transfer · Flat-rate · No surge</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link href="/contact" className="inline-block bg-white text-green-900 font-semibold px-8 py-3 text-sm hover:bg-green-100 transition-colors">Request a Quote</Link>
            <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-block border border-green-500 text-white font-semibold px-8 py-3 text-sm hover:border-green-300 transition-colors">Call {CONTACT_PHONE_DISPLAY}</a>
          </div>
          <Link href="/world-cup-2026" className="text-green-400 text-xs underline hover:text-green-200">← All World Cup routes & match schedule</Link>
        </div>
      </section>
    </>
  );
}
