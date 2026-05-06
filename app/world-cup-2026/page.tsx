import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import WorldCupLeadCapture from '@/components/WorldCupLeadCapture';

export const metadata: Metadata = {
  title: {
    absolute: 'World Cup 2026 NYC | Chauffeur Service for MetLife Stadium Matches | Eagle Eye',
  },
  description:
    'Premium chauffeur service for 2026 FIFA World Cup matches at MetLife Stadium. Luxury sedans & SUVs, fixed pricing, flight tracking for inbound fans. Book your World Cup ride in NYC.',
  keywords: [
    'World Cup 2026 NYC',
    'World Cup chauffeur NYC',
    'MetLife Stadium transportation',
    'World Cup car service NYC',
    'FIFA World Cup 2026 chauffeur',
    'World Cup match transportation NYC',
    'MetLife Stadium limo service',
    'FIFA 2026 New York car service',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026` },
  openGraph: {
    url: `${getSiteUrl()}/world-cup-2026`,
    title: 'World Cup 2026 NYC | Chauffeur Service for MetLife Stadium Matches | Eagle Eye',
    description:
      'Premium chauffeur service for 2026 FIFA World Cup matches at MetLife Stadium. Luxury sedans & SUVs, fixed pricing, flight tracking for inbound fans.',
  },
};

const matchDayTips = [
  {
    title: 'Avoid the Parking Nightmare',
    body: 'MetLife Stadium parking fills up hours before kickoff and can take over an hour to exit after the match. With Eagle Eye, your chauffeur drops you at the gate and picks you up at a pre-arranged location — no parking, no walking miles, no post-match traffic stress.',
  },
  {
    title: 'Pre-Match Tailgate in Comfort',
    body: 'Arrive early and enjoy the pre-match atmosphere without worrying about your car. Hourly booking means your chauffeur is on standby — run to the tailgate, grab food, enjoy the fan zone, and your ride is ready whenever you are.',
  },
  {
    title: 'Multi-Match Packages',
    body: 'Attending multiple matches? We offer discounted multi-match packages. Same driver for every match, preferred pickup times, and priority booking for the biggest games.',
  },
  {
    title: 'Group Transport',
    body: 'Traveling with friends or corporate clients? Our Business Class SUVs seat up to 6 in luxury. First Class SUVs offer the premium experience for VIP groups.',
  },
];

const travelOptions = [
  {
    title: 'From Manhattan to MetLife',
    description: 'Door-to-door luxury from any Manhattan hotel or residence to MetLife Stadium. Fixed pricing, no surge, no stress.',
    duration: '~25 min from Midtown',
    price: 'Get a quote',
  },
  {
    title: 'From JFK Airport to MetLife',
    description: 'Arriving from overseas for the World Cup? We track your flight and pick you up at baggage claim. Direct to your hotel or straight to the match.',
    duration: '~50 min from JFK',
    price: 'Get a quote',
  },
  {
    title: 'From Newark Airport (EWR) to MetLife',
    description: 'EWR is the closest airport to MetLife Stadium. Quick 20-minute transfer in a luxury vehicle. Perfect for last-minute arrivals.',
    duration: '~20 min from EWR',
    price: 'Get a quote',
  },
  {
    title: 'Hourly Match-Day Chauffeur',
    description: 'Full-day chauffeur for match day: hotel pickup, pre-match stops, stadium drop-off, post-match pickup, and return. Everything on one booking.',
    duration: 'Hourly — as needed',
    price: 'Get a quote',
  },
];

export default function WorldCupPage() {
  return (
    <div className="bg-brand-offwhite">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] bg-brand-black">
        <Image
          src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1200&q=80"
          alt="World Cup 2026 at MetLife Stadium"
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-charcoal/80 border border-brand-dark text-brand-silver text-sm mb-6">
                <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                FIFA World Cup 2026 — June 11 to July 19
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white leading-tight">
                World Cup 2026 in NYC
              </h1>
              <p className="mt-4 text-lg text-brand-silver max-w-2xl">
                Premium chauffeur service for every match at MetLife Stadium. Luxury sedans, SUVs, flight tracking, and fixed pricing — so you can focus on the beautiful game.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-light transition-colors text-sm"
                >
                  Book Your World Cup Ride
                </Link>
                <a
                  href={`tel:${CONTACT_PHONE_E164}`}
                  className="inline-flex items-center justify-center px-8 py-4 border border-brand-white text-brand-white font-medium hover:bg-brand-charcoal transition-colors text-sm"
                >
                  Call {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-brand-charcoal border-y border-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-brand-white">8</div>
              <div className="text-sm text-brand-silver mt-1">Matches at MetLife</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-white">48</div>
              <div className="text-sm text-brand-silver mt-1">Teams Worldwide</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-white">39</div>
              <div className="text-sm text-brand-silver mt-1">Days of Football</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-white">24/7</div>
              <div className="text-sm text-brand-silver mt-1">Service Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Stadium */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-brand-black mb-4">
                Matches at MetLife Stadium
              </h2>
              <p className="text-brand-grey leading-relaxed mb-6">
                MetLife Stadium in East Rutherford, NJ — just 8 miles from Midtown Manhattan — will host <strong>8 matches</strong> during the 2026 FIFA World Cup, including group stage games and at least one knockout-round fixture. With nearly 90,000 fans per match, getting to and from the stadium is the biggest challenge of match day.
              </p>
              <p className="text-brand-grey leading-relaxed mb-6">
                Public transportation means NJ Transit from Penn Station followed by a shuttle bus. Driving means hours of traffic and $50+ parking. A professional chauffeur service is the stress-free alternative: door-to-door luxury, no parking, no waiting for trains, and your driver handles everything.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors text-sm"
                >
                  Book Your Ride
                </Link>
                <a
                  href={WHATSAPP_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-brand-black text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors text-sm gap-2"
                >
                  <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book on WhatsApp
                </a>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 bg-brand-light">
              <Image
                src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80"
                alt="MetLife Stadium aerial view"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Match Schedule */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-4">
            MetLife Stadium Match Schedule
          </h2>
          <p className="text-brand-grey text-center mb-10 max-w-2xl mx-auto">
            All 8 World Cup matches at MetLife Stadium. Every date is a surge-pricing nightmare — except with us.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-black">
                  <th className="text-left py-3 px-4 font-semibold text-brand-black">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-brand-black">Phase</th>
                  <th className="text-left py-3 px-4 font-semibold text-brand-black">Match</th>
                  <th className="text-left py-3 px-4 font-semibold text-brand-black">Kickoff</th>
                  <th className="text-center py-3 px-4">
                    <Link href="/book" className="text-sm font-medium text-brand-black hover:underline">Book Ride →</Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: 'June 14', phase: 'Group Stage', match: 'Match 1', time: 'TBD' },
                  { date: 'June 16', phase: 'Group Stage', match: 'Match 2', time: 'TBD' },
                  { date: 'June 19', phase: 'Group Stage', match: 'Match 3', time: 'TBD' },
                  { date: 'June 22', phase: 'Group Stage', match: 'Match 4', time: 'TBD' },
                  { date: 'June 25', phase: 'Group Stage', match: 'Match 5', time: 'TBD' },
                  { date: 'June 28', phase: 'Group Stage', match: 'Match 6', time: 'TBD' },
                  { date: 'July 2', phase: 'Knockout', match: 'Round of 16', time: 'TBD' },
                  { date: 'July 7', phase: 'Knockout', match: 'Quarterfinal', time: 'TBD' },
                ].map((m, i) => (
                  <tr key={i} className="border-b border-brand-light hover:bg-brand-offwhite transition-colors">
                    <td className="py-3 px-4 font-medium text-brand-black">{m.date}</td>
                    <td className="py-3 px-4 text-brand-grey">{m.phase}</td>
                    <td className="py-3 px-4 text-brand-grey">{m.match}</td>
                    <td className="py-3 px-4 text-brand-grey">{m.time}</td>
                    <td className="py-3 px-4 text-center">
                      <Link href="/book" className="text-sm text-brand-black hover:underline font-medium">
                        Book
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6 text-xs text-brand-grey">
            Schedule subject to FIFA confirmation. We will update match details as they are announced.
          </p>
        </div>
      </section>

      {/* Travel Options */}
      <section className="py-16 lg:py-24 bg-brand-offwhite border-y border-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-4">
            Match-Day Travel Options
          </h2>
          <p className="text-brand-grey text-center mb-12 max-w-2xl mx-auto">
            Choose the right vehicle and route for your World Cup experience. Every option includes flight tracking, professional chauffeur, and fixed pricing.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelOptions.map((option, i) => (
              <div key={i} className="border border-brand-light p-6 bg-brand-offwhite">
                <h3 className="font-serif text-lg font-semibold text-brand-black mb-2">{option.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed mb-4">{option.description}</p>
                <div className="text-xs text-brand-silver mb-4">{option.duration}</div>
                <Link
                  href="/book"
                  className="text-sm font-medium text-brand-black hover:underline"
                >
                  {option.price} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorldCupLeadCapture />

      {/* Why Book With Us for the World Cup */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-4">
            Why Eagle Eye for World Cup 2026?
          </h2>
          <p className="text-brand-grey text-center mb-12 max-w-2xl mx-auto">
            Tailored for the biggest sporting event in the world. Every detail matters.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-brand-black flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-brand-black mb-1">Fixed Pricing, No Surge</h3>
                <p className="text-sm text-brand-grey">While Uber surges 3-4x on match days, our prices stay the same. Book with confidence.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-brand-black flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-brand-black mb-1">Flight Tracking for Inbound Fans</h3>
                <p className="text-sm text-brand-grey">Flying in for the match? We track your flight and adjust pickup automatically. Delayed? No charge.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-brand-black flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-brand-black mb-1">Group & VIP Transport</h3>
                <p className="text-sm text-brand-grey">SUVs for groups of 4-6, corporate packages, and multi-vehicle coordination for larger parties.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-brand-black flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-brand-black mb-1">Premium Fleet</h3>
                <p className="text-sm text-brand-grey">Business Class and First Class sedans and SUVs. Every vehicle professionally maintained and spotless.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Match Day Tips */}
      <section className="py-16 lg:py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-white text-center mb-4">
            Match Day Pro Tips
          </h2>
          <p className="text-brand-silver text-center mb-12 max-w-2xl mx-auto">
            Make the most of your World Cup match day experience.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {matchDayTips.map((tip, i) => (
              <div key={i} className="bg-brand-dark p-6">
                <h3 className="font-serif text-lg font-semibold text-brand-white mb-3">{tip.title}</h3>
                <p className="text-brand-silver text-sm leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-4">
            Ready for the World Cup?
          </h2>
          <p className="text-brand-grey mb-8">
            Book your match-day transportation now. Early reservations recommended — World Cup demand is expected to be extremely high.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book Your Ride
            </Link>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-black text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors"
            >
              Call {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
