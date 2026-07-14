import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'NYC Hotel to MetLife Stadium World Cup 2026 | Chauffeur Service | Eagle Eye',
  description:
    'NYC hotel to MetLife Stadium chauffeur service for World Cup 2026. Concierge pickup from any Manhattan hotel — Times Square, Midtown, Tribeca, Upper East Side. Flat-rate, no surge, post-match return. Book now.',
  keywords: [
    'NYC hotel to MetLife Stadium World Cup',
    'Manhattan hotel to MetLife Stadium 2026',
    'hotel shuttle MetLife World Cup 2026',
    'Times Square to MetLife Stadium World Cup',
    'Midtown hotel to MetLife World Cup car service',
    'NYC hotel chauffeur MetLife 2026',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026/nyc-hotel-to-metlife` },
};

const hotels = [
  { area: 'Times Square / Midtown', examples: 'Marriott Marquis, Westin Times Square, Renaissance, Hilton Midtown, Sheraton Times Square' },
  { area: 'Midtown East', examples: 'Grand Hyatt, Waldorf Astoria, Four Seasons 57th St, The Pierre, Loews Regency' },
  { area: 'Upper East Side', examples: 'The Carlyle, Mark Hotel, The Surrey, Loews Regency' },
  { area: 'Lower Manhattan / Tribeca', examples: 'Four Seasons Downtown, Conrad NY, Arlo SoHo, Walker Hotel' },
];

const faqs = [
  { q: 'Do you pick up directly from hotel lobbies in NYC?', a: 'Yes. We offer concierge-style hotel pickup — your chauffeur is at the hotel entrance or lobby at your scheduled time. We coordinate with hotel security and concierge desks for smooth departure.' },
  { q: 'Which NYC hotels do you serve for World Cup MetLife transfers?', a: 'We serve every hotel in Manhattan — Times Square, Midtown, Upper East Side, Upper West Side, Tribeca, SoHo, Financial District, and all areas. Enter your hotel address on the booking page for an instant quote.' },
  { q: 'How much is a hotel-to-MetLife car service for the World Cup?', a: 'Rates depend on your hotel location and vehicle class. All prices are flat — confirmed at booking with no surge. Hotels near Midtown typically see the fastest transit time (~25 min) and competitive rates.' },
  { q: 'Can you return me to my NYC hotel after the match?', a: 'Yes — and this is the most important part of match-day planning. We pre-arrange your post-match pickup from MetLife. Your driver waits and contacts you via WhatsApp when you are ready. No surge, no queue, return to your hotel.' },
  { q: 'Can I book a full day — hotel pickup, match, and hotel return?', a: 'Yes. A full match-day package covers hotel pickup, drop at MetLife Stadium, wait or return during the match, and post-match hotel return. Contact us to arrange a full-day package with your driver.' },
  { q: 'Do hotel concierges recommend Eagle Eye for World Cup transport?', a: 'Eagle Eye Chauffeur is available for any NYC hotel guest. If your hotel concierge does not already have our information, contact us directly — we are available 24/7 and work alongside hotel concierge teams.' },
];

export default function NYCHotelToMetLifePage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="NYC Hotel to MetLife Stadium World Cup Chauffeur Service" description="Concierge-style hotel pickup from any Manhattan hotel to MetLife Stadium for World Cup 2026. Flat-rate, no surge, post-match hotel return. Serving Times Square, Midtown, Tribeca, and all NYC hotels." areaServed="Manhattan, New York" url={`${siteUrl}/world-cup-2026/nyc-hotel-to-metlife`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'World Cup 2026', url: `${siteUrl}/world-cup-2026` }, { name: 'NYC Hotel to MetLife', url: `${siteUrl}/world-cup-2026/nyc-hotel-to-metlife` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">World Cup 2026 · Concierge Hotel Pickup</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            NYC Hotel to MetLife Stadium — World Cup Chauffeur
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Staying in a Manhattan hotel for the World Cup? Eagle Eye Chauffeur picks you up at your hotel entrance and takes you directly to MetLife Stadium — approximately 25 minutes from Midtown. Flat-rate, no surge, with pre-arranged post-match return.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>⏱ ~25 min from Midtown</span>
            <span>🏨 Any NYC hotel</span>
            <span>🔄 Post-match return available</span>
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
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Hotels We Serve for World Cup 2026</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {hotels.map((h) => (
              <div key={h.area} className="border border-brand-light bg-brand-offwhite p-5">
                <h3 className="font-semibold text-brand-black mb-2 text-sm">{h.area}</h3>
                <p className="text-brand-grey text-xs leading-relaxed">{h.examples}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-brand-silver text-xs">Don't see your hotel? We serve all Manhattan hotels — enter your address on the booking page for an instant quote.</p>
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
          <h2 className="font-serif text-2xl font-semibold mb-3">Book Hotel → MetLife Now</h2>
          <p className="text-green-200 text-sm mb-6">Any NYC hotel · Flat-rate · Post-match return · No surge</p>
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
