import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Manhattan to LaGuardia Car Service | LGA Airport Transfers | Eagle Eye Chauffeur',
  description:
    'Manhattan to LaGuardia (LGA) car service — flat rates, door-to-door pickup from any Manhattan address. NYC\'s closest major airport. No surge pricing. Book Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/manhattan-to-lga-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Manhattan to LGA?',
    a: 'All rates are flat and confirmed at booking — no surge pricing. Get an instant quote on our booking page by entering your Manhattan address and LGA as the destination.',
  },
  {
    q: 'How early should I leave Manhattan for a LGA flight?',
    a: 'We recommend scheduling your pickup at least 2.5 hours before departure. During rush hour (7-9am and 5-8pm), the drive can take 35-50 minutes, so build in extra buffer.',
  },
  {
    q: 'Will my chauffeur come to my hotel or apartment in Manhattan?',
    a: 'Yes. Your driver picks you up directly at your Manhattan address. Just step outside when your driver arrives and you are on your way.',
  },
  {
    q: 'Do you cover early morning departures from LGA?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. We confirm your driver the evening before for all early morning departures.',
  },
  {
    q: 'Which terminal at LGA do I depart from?',
    a: 'LGA has Terminal B (Delta, American) and Terminal C/D (United, Southwest, others). Your chauffeur drops you at the correct terminal based on your airline.',
  },
];


export default function ManhattanToLGABlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Manhattan to LGA Black Car Service', url: `${getSiteUrl()}/services/routes/manhattan-to-lga-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Manhattan to LGA Black Car Service"
        description="Premium black car service from Manhattan to LaGuardia Airport. Flat rates, door-to-door pickup, 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/manhattan-to-lga-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan to LaGuardia Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              LaGuardia is the closest major airport to Manhattan — and with Eagle Eye Chauffeur,
              getting there is effortless. Flat-rate black car service from any Manhattan address,
              professional chauffeur at your door, and a price that does not move regardless of traffic or time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Manhattan to LGA
              </Link>
              <Link href="/services/airport/lga" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All LGA Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular Routes from Manhattan to LGA
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Midtown Manhattan → LGA', time: '20–30 min' },
                { from: 'Financial District / Wall Street → LGA', time: '25–40 min' },
                { from: 'Times Square / Theater District → LGA', time: '20–30 min' },
                { from: 'Upper East Side → LGA', time: '20–30 min' },
                { from: 'Upper West Side → LGA', time: '25–35 min' },
                { from: 'Chelsea / Meatpacking District → LGA', time: '25–35 min' },
                { from: 'SoHo / Tribeca → LGA', time: '25–40 min' },
                { from: 'Harlem → LGA', time: '20–30 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All rates are flat and confirmed at booking. No surge pricing — ever. <Link href="/book" className="underline">Get an instant quote →</Link></p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Why Eagle Eye for Manhattan to LGA
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises during rush hour.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Door-to-Door Pickup', body: 'Your driver comes directly to your Manhattan address — no walking to a corner or curbside zone.' },
                { title: 'Driver Confirmed the Evening Before', body: 'You receive your chauffeur\'s name, number, and vehicle details the night before departure.' },
                { title: 'Pre-Dawn Availability Guaranteed', body: 'Early morning LGA departures are fully covered. Your flat rate never changes regardless of the hour.' }
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
                <li><strong className="text-brand-black">Door-to-door pickup</strong> — your chauffeur arrives at your Manhattan address on time, every time.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. Traffic and rush hour never change it.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — you receive your driver details the evening before, not minutes before pickup.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — your chauffeur helps with bags at pickup and drop-off at the terminal.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/lga-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">LGA to Manhattan</div>
                <div className="text-sm text-brand-grey mt-1">Arrivals — meet &amp; greet service</div>
              </Link>
              <Link href="/services/airport/lga" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">LGA Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All LGA routes &amp; terminals</div>
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
              Manhattan to LGA Black Car — FAQ
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
                Book Your Manhattan to LGA Black Car
              </h2>
              <p className="text-brand-silver mb-6">Instant confirmation. Flat rate. Professional chauffeur at your door.</p>
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
