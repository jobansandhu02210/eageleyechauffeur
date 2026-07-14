import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Long Island to MetLife Stadium World Cup 2026 | Car Service | Eagle Eye Chauffeur',
  description:
    'Long Island to MetLife Stadium car service for World Cup 2026. Nassau and Suffolk County pickups — flat-rate, no surge. Garden City, Great Neck, Huntington, Hamptons and all Long Island communities. Book now.',
  keywords: [
    'Long Island to MetLife Stadium World Cup',
    'Long Island World Cup 2026 car service',
    'Nassau County to MetLife Stadium',
    'Suffolk County to MetLife World Cup',
    'Long Island MetLife Stadium transfer',
    'Garden City to MetLife World Cup',
    'Great Neck to MetLife Stadium World Cup',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026/long-island-to-metlife` },
};

const faqs = [
  { q: 'How long does it take to drive from Long Island to MetLife Stadium?', a: 'From western Nassau County (Garden City, Valley Stream, Elmont): approximately 45–60 minutes. From central Nassau (Great Neck, Manhasset, New Hyde Park): 50–70 minutes. From western Suffolk (Huntington, Babylon): 60–80 minutes. On World Cup match days, add 30+ minutes and plan to depart early.' },
  { q: 'Is there a direct car service from Nassau County to MetLife for the World Cup?', a: 'Yes. Eagle Eye Chauffeur picks up from any Nassau County address — Garden City, Great Neck, Manhasset, Mineola, New Hyde Park, Port Washington, Roslyn, Valley Stream, and everywhere in between — and takes you directly to MetLife Stadium.' },
  { q: 'What about Suffolk County pickups for the World Cup?', a: 'Yes. We serve all of Suffolk County including Huntington, Babylon, Smithtown, Hempstead, and the Hamptons. Longer drives, but the same flat-rate, no-surge pricing applies.' },
  { q: 'Should I drive myself from Long Island to MetLife for the World Cup?', a: 'We strongly advise against it. MetLife Stadium parking during the World Cup fills hours before kickoff and the post-match exit can take 90+ minutes. A pre-booked car service drops you at the gate and picks you up at a pre-arranged spot after the match.' },
  { q: 'Can a group of Long Island fans book together?', a: 'Absolutely. Our Business Class SUVs seat 5–6 and First Class SUVs seat 6–7. A group from Long Island sharing one vehicle is cost-effective and stress-free compared to everyone driving separately.' },
];

const liAreas = [
  { area: 'Nassau County', places: 'Garden City, Great Neck, Manhasset, New Hyde Park, Mineola, Valley Stream, Rockville Centre, Port Washington, Roslyn, Hicksville, Hempstead, Westbury' },
  { area: 'Suffolk County', places: 'Huntington, Babylon, Bay Shore, Smithtown, Commack, Hauppauge, Ronkonkoma, Patchogue' },
  { area: 'The Hamptons', places: 'Southampton, East Hampton, Hampton Bays, Westhampton Beach, Montauk' },
];

export default function LongIslandToMetLifePage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="Long Island to MetLife Stadium World Cup Car Service" description="Flat-rate car service from Nassau and Suffolk County, Long Island to MetLife Stadium for World Cup 2026. All Long Island communities covered. No surge pricing." areaServed="Long Island, New York" url={`${siteUrl}/world-cup-2026/long-island-to-metlife`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'World Cup 2026', url: `${siteUrl}/world-cup-2026` }, { name: 'Long Island to MetLife', url: `${siteUrl}/world-cup-2026/long-island-to-metlife` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">World Cup 2026 · Nassau & Suffolk County</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            Long Island to MetLife Stadium — World Cup Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Flat-rate chauffeur from any Long Island community — Nassau County, Suffolk County, and the Hamptons — to MetLife Stadium for World Cup 2026 matches. Door-to-door, no surge, pre-arranged post-match pickup.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>⏱ 45–80 min by location</span>
            <span>📍 All LI communities</span>
            <span>👥 Groups welcome</span>
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
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Long Island Areas We Serve for World Cup</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {liAreas.map((a) => (
              <div key={a.area} className="border border-brand-light bg-brand-offwhite p-5">
                <h3 className="font-semibold text-brand-black mb-2 text-sm">{a.area}</h3>
                <p className="text-brand-grey text-xs leading-relaxed">{a.places}</p>
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
          <h2 className="font-serif text-2xl font-semibold mb-3">Book Long Island → MetLife Now</h2>
          <p className="text-green-200 text-sm mb-6">All LI communities · Flat-rate · No surge · Group SUVs available</p>
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
