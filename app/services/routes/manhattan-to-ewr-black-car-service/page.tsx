import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Manhattan to Newark Airport Car Service | EWR Tolls | Eagle Eye',
  description:
    'Manhattan to Newark Airport (EWR) car service — flat rates, all tolls included, door-to-door pickup from any address. Professional chauffeur. No.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/manhattan-to-ewr-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Manhattan to Newark Airport?',
    a: 'All rates are flat and confirmed at booking — all tolls included, no hidden fees. Get an instant quote on our booking page by entering your Manhattan address and EWR as the destination.',
  },
  {
    q: 'How far in advance should I leave Manhattan for a EWR flight?',
    a: 'We recommend scheduling pickup at least 3 hours before your flight. The drive is 30-45 minutes in normal traffic, but the Lincoln Tunnel approach can add 20-30 minutes during peak hours.',
  },
  {
    q: 'Are tunnel tolls included in the price?',
    a: 'Yes. All tolls — including the Lincoln or Holland Tunnel and the airport toll — are included in your flat rate. Zero surprise fees when you arrive.',
  },
  {
    q: 'Which Newark Airport terminal will I be dropped at?',
    a: 'Your driver drops you at the correct departures terminal based on your airline. EWR has Terminal A (United domestic), Terminal B (American, international carriers), and Terminal C (United international). Just confirm your airline when booking.',
  },
  {
    q: 'Do you handle large luggage for EWR departures?',
    a: 'Yes. Our SUV option (Escalade or similar) accommodates large bags and multiple passengers comfortably. Mention your luggage count when booking.',
  },
  {
    q: 'Which route do you take from Manhattan to Newark Airport?',
    a: 'Your chauffeur selects the optimal route in real time — the Lincoln Tunnel is the primary route for Midtown pickups, while the Holland Tunnel serves lower Manhattan and Tribeca pickups most efficiently. All toll costs are included in your flat rate.',
  },
  {
    q: 'How long does it take from Manhattan to EWR?',
    a: 'The drive from Manhattan to Newark Airport takes 30–45 minutes in normal traffic. During peak hours — weekday mornings (7–9am) and evenings (5–8pm) — the Lincoln Tunnel approach can add 20–30 minutes. We recommend allowing 3 hours before your departure for stress-free travel.',
  },
  {
    q: 'Why do some travelers prefer EWR over JFK?',
    a: 'Newark Airport often has more United Airlines international connections, lower fares on certain routes, and can be faster to reach from Midtown via the Lincoln Tunnel than JFK via Queens. EWR is also the closest airport for Hudson Yards and west Midtown clients.',
  },
  {
    q: 'Are tolls included in the Manhattan to EWR rate?',
    a: 'Yes — all Holland Tunnel or Lincoln Tunnel tolls are included in your flat rate. No surprise charges at the end of the ride.',
  },
];


export default function ManhattanToEWRBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Manhattan to Newark Airport Black Car Service', url: `${getSiteUrl()}/services/routes/manhattan-to-ewr-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Manhattan to Newark Airport Black Car Service"
        description="Premium black car service from Manhattan to Newark Liberty Airport (EWR). Flat rates, all tolls included, door-to-door pickup, 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/manhattan-to-ewr-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan to Newark Airport Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Getting from Manhattan to EWR without the stress of surge pricing or hidden tunnel fees.
              Flat-rate black car service — all tolls included, professional chauffeur at your door,
              and a confirmed driver the night before your departure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Manhattan to EWR
              </Link>
              <Link href="/services/airport/ewr" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All EWR Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular Routes from Manhattan to EWR
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Midtown Manhattan → EWR', time: '30–45 min' },
                { from: 'Financial District / Wall Street → EWR', time: '30–45 min' },
                { from: 'Times Square / Theater District → EWR', time: '30–45 min' },
                { from: 'Chelsea / Meatpacking District → EWR', time: '30–45 min' },
                { from: 'Upper East Side → EWR', time: '40–55 min' },
                { from: 'Upper West Side → EWR', time: '40–55 min' },
                { from: 'SoHo / Tribeca → EWR', time: '30–45 min' },
                { from: 'Harlem → EWR', time: '45–60 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All rates are flat. Tolls included. No surge pricing — ever. <Link href="/book" className="underline">Get an instant quote →</Link></p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Why Eagle Eye for Manhattan to Newark Airport
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                                { title: 'Flat Rate — All Tolls Included', body: 'Your price includes all tunnel and toll costs. What you see at booking is what you pay — nothing added at the end.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Door-to-Door Pickup', body: 'Your driver comes to your exact Manhattan address — building entrance, hotel, or office door.' },
                { title: 'Driver Confirmed the Evening Before', body: 'You receive your chauffeur\'s name, number, and vehicle details the night before departure.' },
                { title: 'No Hidden Fees', body: 'All tolls and tips are included in your flat rate. No surprise charges when you reach the terminal.' }
              ].map((item) => (
                <div key={item.title} className="bg-brand-white border border-brand-light p-4">
                  <div className="flex items-start gap-3 mb-1">
                    <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                    <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                  </div>
                  <p className="text-brand-grey text-sm pl-6">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                What Is Included in Every Booking
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">Door-to-door pickup</strong> — your chauffeur arrives at your Manhattan address on time.</li>
                <li><strong className="text-brand-black">All tolls included</strong> — Lincoln or Holland Tunnel plus airport tolls are in your quoted price. No extras.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking and does not change due to traffic or demand.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — you receive your driver details the evening before, not minutes before pickup.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — your chauffeur helps with bags at pickup and terminal drop-off.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16 bg-brand-offwhite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">
              Newark Airport — Terminal Guide
            </h2>
            <p className="text-brand-grey mb-6 text-sm">Your driver drops you at the departures level of your terminal. Confirm your airline when booking and we go directly to the right terminal.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-black text-brand-white">
                    <th className="text-left p-3 font-semibold">Terminal</th>
                    <th className="text-left p-3 font-semibold">Airlines</th>
                    <th className="text-left p-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-brand-white">
                    <td className="p-3 font-medium text-brand-black">Terminal A</td>
                    <td className="p-3 text-brand-grey">United domestic short-haul, some international</td>
                    <td className="p-3 text-brand-grey">Ground Transportation Level 1 — AirTrain connects all terminals</td>
                  </tr>
                  <tr className="bg-brand-offwhite">
                    <td className="p-3 font-medium text-brand-black">Terminal B</td>
                    <td className="p-3 text-brand-grey">United international, Air Canada, Lufthansa (some)</td>
                    <td className="p-3 text-brand-grey">AirTrain accessible — follow signs to Ground Transportation</td>
                  </tr>
                  <tr className="bg-brand-white">
                    <td className="p-3 font-medium text-brand-black">Terminal C</td>
                    <td className="p-3 text-brand-grey">United hub (majority of flights), most United gates</td>
                    <td className="p-3 text-brand-grey">Most EWR departures use Terminal C — Ground Transportation Level 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-brand-grey text-sm mt-4">All tolls (Holland Tunnel or Lincoln Tunnel) are included in your flat rate from Manhattan to EWR. No hidden charges.</p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/ewr-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">EWR to Manhattan</div>
                <div className="text-sm text-brand-grey mt-1">Arrivals — meet &amp; greet service</div>
              </Link>
              <Link href="/services/airport/ewr" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">EWR Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All EWR routes &amp; terminals</div>
              </Link>
              <Link href="/services/areas/manhattan" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan Service</div>
                <div className="text-sm text-brand-grey mt-1">All Manhattan rides &amp; hourly</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Manhattan to Newark Airport Black Car — FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-1">{faq.q}</h3>
                  <p className="text-sm text-brand-grey">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-black p-8 text-center">
              <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
                Book Your Manhattan to Newark Black Car
              </h2>
              <p className="text-brand-silver mb-6">Flat rate. All tolls included. Professional chauffeur at your door.</p>
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Reserve Now
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
