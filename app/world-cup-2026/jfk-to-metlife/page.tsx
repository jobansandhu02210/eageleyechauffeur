import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'JFK to MetLife Stadium | World Cup 2026 Car Service',
  description:
    'JFK Airport to MetLife Stadium car service for World Cup 2026. Direct international arrivals transfer to MetLife — ~50 minutes. Meet & greet.',
  keywords: [
    'JFK to MetLife Stadium World Cup 2026',
    'JFK airport MetLife Stadium car service',
    'JFK to MetLife World Cup transfer',
    'JFK airport World Cup 2026 chauffeur',
    'JFK to New Jersey MetLife stadium',
    'international arrivals JFK MetLife Stadium',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026/jfk-to-metlife` },
};

const faqs = [
  { q: 'How long is the drive from JFK to MetLife Stadium?', a: 'The drive from JFK Airport to MetLife Stadium is approximately 45–60 minutes depending on traffic. On World Cup match days, allow extra time — plan 90+ minutes before kickoff if you are going directly from JFK to the stadium.' },
  { q: 'Is JFK a good airport for World Cup fans attending MetLife matches?', a: 'JFK is the primary international gateway for most overseas fans. While it is not the closest airport to MetLife (EWR is closer), the direct transfer is straightforward with Eagle Eye — we meet you at baggage claim and take you wherever you need to go, hotel or stadium.' },
  { q: 'Do you offer meet and greet at JFK for World Cup arrivals?', a: 'Yes. Your chauffeur meets you inside the terminal at baggage claim with a name sign, assists with luggage, and escorts you to the vehicle. We serve all JFK terminals — T1, T4, T5, T7, and T8.' },
  { q: 'Can I go directly from JFK to MetLife Stadium for a match?', a: 'Yes. We handle direct JFK-to-stadium transfers. If your flight lands with enough time before kickoff, your driver will take you straight to MetLife. We monitor your flight and adjust pickup timing so you make the match.' },
  { q: 'What about JFK to hotel, then hotel to MetLife on match day?', a: 'Yes — multi-leg bookings are available. Many international fans book JFK to Manhattan hotel on arrival, then a separate Manhattan-to-MetLife transfer on match day. We can handle both with the same service.' },
];

export default function JFKToMetLifePage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="JFK Airport to MetLife Stadium World Cup Car Service" description="Direct flat-rate transfer from JFK International Airport to MetLife Stadium for World Cup 2026. Meet & greet at all JFK terminals, flight tracking, no surge pricing." areaServed="New York City, NY" url={`${siteUrl}/world-cup-2026/jfk-to-metlife`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'World Cup 2026', url: `${siteUrl}/world-cup-2026` }, { name: 'JFK to MetLife', url: `${siteUrl}/world-cup-2026/jfk-to-metlife` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">World Cup 2026 · International Arrivals</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            JFK Airport to MetLife Stadium — World Cup Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Flying into JFK for the World Cup? We meet you at baggage claim and take you directly to MetLife Stadium or your Manhattan hotel — flat-rate, no surge, all terminals covered.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>⏱ ~50 min to MetLife</span>
            <span>✈️ All JFK terminals</span>
            <span>🛬 Meet & greet at arrivals</span>
            <span>🔄 Flight tracked live</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors text-center">Request a World Cup Quote</Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors text-center">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8">Arriving at JFK for the World Cup</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Met at Baggage Claim', body: 'Your chauffeur is inside the terminal at arrivals with a name sign. After clearing customs and collecting baggage, you are met and escorted to your vehicle — no stress after a long flight.' },
              { title: 'Direct to MetLife or Hotel', body: 'Going straight to a match? Direct to MetLife. Checking in first? Hotel pickup on match day. We handle both and coordinate your itinerary.' },
              { title: 'Delayed International Flights', body: 'JFK international arrivals can be delayed by customs processing. We track everything and your driver waits — no extra charge for tracked delays.' },
              { title: 'Group Travel Welcome', body: 'Travelling with a group of fans? Our SUVs accommodate 5–7 passengers with luggage. Ideal for international fan groups arriving together.' },
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
          <h2 className="font-serif text-2xl font-semibold mb-3">Book JFK → MetLife Now</h2>
          <p className="text-green-200 text-sm mb-6">Meet & greet · All terminals · Flat-rate · No surge</p>
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
