import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'LaGuardia to Manhattan Car Service | LGA Flat Rate Black Car | Eagle Eye Chauffeur',
  description:
    'LaGuardia (LGA) to Manhattan car service — flat rates, real-time flight tracking, meet & greet at arrivals. NYC\'s closest airport to Midtown. No surge pricing. Book 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/lga-to-manhattan-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from LGA to Manhattan?',
    a: 'All rates are flat and confirmed at booking — no surge pricing. Get an instant quote on our booking page by entering your LGA terminal and Manhattan destination.',
  },
  {
    q: 'Where does my chauffeur meet me at LaGuardia?',
    a: 'Your chauffeur meets you in the arrivals area of your terminal with a name sign. LGA has Terminal B and Terminal C/D — we cover both. You receive a WhatsApp message with the exact meeting point before you land.',
  },
  {
    q: 'Do you track flights at LGA?',
    a: 'Yes. We monitor your LaGuardia flight in real time and adjust pickup automatically for any delays or early arrivals — no extra charge.',
  },
  {
    q: 'Is black car service from LGA faster than taking a taxi?',
    a: 'The drive time is the same, but your experience is completely different. Your driver is already waiting when you clear baggage claim. No taxi queue, no surge pricing, no uncertainty.',
  },
  {
    q: 'Can I book LGA black car service for early morning arrivals?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. Red-eye and early morning arrivals at LaGuardia are fully covered.',
  },
];


export default function LGAToManhattanBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'LGA to Manhattan Black Car Service', url: `${getSiteUrl()}/services/routes/lga-to-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="LGA to Manhattan Black Car Service"
        description="Premium black car service from LaGuardia Airport to Manhattan. Flat rates, real-time flight tracking, meet & greet at arrivals. 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/lga-to-manhattan-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              LaGuardia to Manhattan Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              LaGuardia is NYC&apos;s closest major airport to Midtown — just 9 miles away. Make the most
              of that proximity with a flat-rate black car service that has a professional chauffeur
              waiting the moment you clear baggage claim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book LGA to Manhattan
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
              Popular Routes from LGA to Manhattan
            </h2>
            <div className="space-y-3">
              {[
                { from: 'LGA → Midtown Manhattan', time: '20–30 min' },
                { from: 'LGA → Financial District / Wall Street', time: '25–40 min' },
                { from: 'LGA → Times Square / Theater District', time: '20–30 min' },
                { from: 'LGA → Upper East Side', time: '20–30 min' },
                { from: 'LGA → Upper West Side', time: '25–35 min' },
                { from: 'LGA → Chelsea / Meatpacking District', time: '25–35 min' },
                { from: 'LGA → SoHo / Tribeca', time: '25–40 min' },
                { from: 'LGA → Harlem', time: '20–30 min' },
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
              Why Eagle Eye for LGA to Manhattan
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises during peak hours.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Meet & Greet at Arrivals', body: 'Your chauffeur waits with a name sign past baggage claim — no searching for your ride.' },
                { title: 'Real-Time Flight Tracking', body: 'We monitor your LGA arrival and adjust your driver automatically for any delay — at no extra charge.' },
                { title: '60 Minutes Complimentary Wait', body: 'No rushing once you land — your driver waits up to 60 minutes after touchdown at no extra charge.' },
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
                <li><strong className="text-brand-black">Real-time flight tracking</strong> — we monitor your LGA arrival and adjust pickup for delays or early landings at no extra charge.</li>
                <li><strong className="text-brand-black">Meet &amp; greet at arrivals</strong> — your chauffeur waits with a name sign past baggage claim.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. Traffic and demand never change it.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Complimentary wait time</strong> — 60 minutes of free wait time after your flight lands.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              LGA to Manhattan — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              LaGuardia is just 9 miles from Midtown Manhattan — the closest major airport to the city center.
              In normal traffic, the ride takes 20–30 minutes. During peak hours, allow 35–50 minutes.
            </p>
            <p className="text-brand-grey mb-4">
              LGA was recently renovated. Terminal B (Delta, American) and Terminal C/D (United, Southwest) both
              have clear arrivals areas. Your driver sends the exact meeting spot via WhatsApp before you land.
            </p>
            <p className="text-brand-grey">
              The route to Manhattan typically uses the Grand Central Parkway to the Queens-Midtown Tunnel or
              the Triborough Bridge, depending on your destination and real-time traffic.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/manhattan-to-lga-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to LGA</div>
                <div className="text-sm text-brand-grey mt-1">Departures — door-to-door service</div>
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
              LGA to Manhattan Black Car — FAQ
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
                Book Your LGA to Manhattan Black Car
              </h2>
              <p className="text-brand-silver mb-6">Instant confirmation. No surge pricing. Chauffeur waiting when you land.</p>
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
