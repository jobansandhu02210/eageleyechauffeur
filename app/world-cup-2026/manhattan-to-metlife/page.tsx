import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Manhattan to MetLife Stadium World Cup 2026 | Car Service | Eagle Eye Chauffeur',
  description:
    'Manhattan to MetLife Stadium car service for World Cup 2026. Flat-rate chauffeur from any hotel or address in Manhattan to MetLife — ~25 minutes. No surge pricing. Pre-arranged post-match pickup. Book now.',
  keywords: [
    'Manhattan to MetLife Stadium World Cup',
    'Manhattan to MetLife car service',
    'NYC to MetLife Stadium 2026',
    'Manhattan MetLife Stadium World Cup chauffeur',
    'Times Square to MetLife Stadium World Cup',
    'Midtown Manhattan to MetLife World Cup car service',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026/manhattan-to-metlife` },
};

const faqs = [
  { q: 'How long does it take to drive from Manhattan to MetLife Stadium?', a: 'On a normal day, 20–30 minutes from Midtown Manhattan. On World Cup match days, allow 45–60 minutes and plan to arrive 90+ minutes before kickoff. Your chauffeur will monitor traffic and plan the optimal departure time.' },
  { q: 'What is the best way to get from Manhattan to MetLife for the World Cup?', a: 'Pre-booked private car service is the most reliable option. NJ Transit trains are sold out or severely overcrowded. Rideshares surge to $150–$300+ on match days. A flat-rate chauffeur from Eagle Eye locks your price at booking and provides door-to-door service from any Manhattan address.' },
  { q: 'How much does car service from Manhattan to MetLife cost?', a: 'Eagle Eye uses flat-rate pricing confirmed at booking with no surge. Price depends on your exact Manhattan pickup location and vehicle class. Get an instant quote on our booking page.' },
  { q: 'Do you pick up from Manhattan hotels for the World Cup?', a: 'Yes. We offer concierge-style hotel pickup from any Manhattan hotel — Midtown, Times Square, Upper East Side, Tribeca, Financial District, or anywhere in the borough. Your driver is at the hotel entrance at your scheduled time.' },
  { q: 'Can I get a post-match pickup from MetLife back to Manhattan?', a: 'Yes — and this is critical on match days. We pre-arrange your post-match pickup point. Your driver waits and contacts you via WhatsApp when you are ready to leave. No rideshare surge on the way back.' },
];

export default function ManhattanToMetLifePage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="Manhattan to MetLife Stadium World Cup Car Service" description="Flat-rate chauffeur from Manhattan to MetLife Stadium for World Cup 2026 matches. Door-to-door from any Manhattan hotel or address. No surge pricing." areaServed="Manhattan, New York" url={`${siteUrl}/world-cup-2026/manhattan-to-metlife`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'World Cup 2026', url: `${siteUrl}/world-cup-2026` }, { name: 'Manhattan to MetLife', url: `${siteUrl}/world-cup-2026/manhattan-to-metlife` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">World Cup 2026 · MetLife Stadium</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            Manhattan to MetLife Stadium — World Cup Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Flat-rate chauffeur from any Manhattan hotel, residence, or office to MetLife Stadium. Approximately 25 minutes from Midtown. No surge pricing — your fare is locked at booking.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>⏱ ~25 min from Midtown</span>
            <span>💰 Flat rate — no surge</span>
            <span>🚪 Door-to-door pickup</span>
            <span>📱 Post-match pickup included</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors text-center">Request a World Cup Quote</Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors text-center">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8">Why Take a Car from Manhattan to MetLife?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Pickup at Your Hotel Door', body: 'Your chauffeur meets you at the hotel entrance or lobby, loads your bags, and takes you directly to MetLife — no walking to a train station with gear.' },
              { title: 'No Surge After the Match', body: 'On the return, rideshares surge to $200–$300+ after a match. Your pre-booked Eagle Eye price never changes, regardless of demand.' },
              { title: 'Any Manhattan Address', body: 'Times Square, Upper East Side, Tribeca, Financial District, Chelsea — we pick up from anywhere. Not just Midtown.' },
              { title: 'Match-Day Traffic Planned In', body: 'Your driver factors in World Cup traffic and plans departure time so you arrive with time to spare.' },
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
          <h2 className="font-serif text-2xl font-semibold mb-3">Book Manhattan → MetLife Now</h2>
          <p className="text-green-200 text-sm mb-6">Flat-rate · Door-to-door · Post-match pickup · No surge</p>
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
