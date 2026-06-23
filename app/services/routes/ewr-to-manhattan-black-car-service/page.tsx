import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Newark Airport to Manhattan Car Service | EWR Black Car, Tolls Included | Eagle Eye',
  description:
    'Newark Airport (EWR) to Manhattan car service — flat rates, all tolls included, real-time flight tracking, meet & greet at arrivals. Professional chauffeur. No hidden fees. Book 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/ewr-to-manhattan-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Newark Airport to Manhattan?',
    a: 'All rates are flat and confirmed at booking — all tolls included, no hidden fees. Get an instant quote on our booking page by entering your EWR terminal and Manhattan destination.',
  },
  {
    q: 'Are tolls included in the EWR to Manhattan black car price?',
    a: 'Yes. All tunnel and airport tolls are included in your quoted price. What you see at booking is what you pay — nothing added at the end.',
  },
  {
    q: 'Where does my chauffeur meet me at Newark Airport?',
    a: 'Your chauffeur meets you in the ground transportation area of your terminal (A, B, or C) with a name sign. You receive a WhatsApp message with the exact meeting point before landing.',
  },
  {
    q: 'How long does it take from EWR to Manhattan?',
    a: 'The drive from Newark Airport to Midtown Manhattan is approximately 16 miles and takes 30-45 minutes in normal traffic. During peak hours, allow 50-65 minutes.',
  },
  {
    q: 'Do you track flights at Newark Liberty Airport?',
    a: 'Yes. We monitor your EWR flight in real time and adjust pickup automatically for any delays or early arrivals — at no extra charge.',
  },
];


export default function EWRToManhattanBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Newark Airport to Manhattan Black Car Service', url: `${getSiteUrl()}/services/routes/ewr-to-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Newark Airport to Manhattan Black Car Service"
        description="Premium black car service from Newark Liberty Airport (EWR) to Manhattan. Flat rates, tolls included, flight tracking, meet & greet. 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/ewr-to-manhattan-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Newark Airport to Manhattan Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              EWR to Manhattan, done right. Flat-rate black car service from Newark Liberty Airport
              to any Manhattan neighborhood — all tolls included, professional chauffeur waiting at arrivals,
              and a price that does not change when traffic backs up on the turnpike.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book EWR to Manhattan
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
              Popular Routes from EWR to Manhattan
            </h2>
            <div className="space-y-3">
              {[
                { from: 'EWR → Midtown Manhattan', time: '30–45 min' },
                { from: 'EWR → Financial District / Wall Street', time: '30–45 min' },
                { from: 'EWR → Times Square / Theater District', time: '30–45 min' },
                { from: 'EWR → Chelsea / Meatpacking District', time: '30–45 min' },
                { from: 'EWR → Upper East Side', time: '40–55 min' },
                { from: 'EWR → Upper West Side', time: '40–55 min' },
                { from: 'EWR → SoHo / Tribeca', time: '30–45 min' },
                { from: 'EWR → Harlem', time: '45–60 min' },
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
              Why Eagle Eye for Newark Airport to Manhattan
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Flat Rate — All Tolls Included', body: 'Your price includes all tunnel and airport tolls. What you see at booking is what you pay — nothing added at the end.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Meet & Greet at Arrivals', body: 'Your chauffeur waits with a name sign at your EWR terminal — Terminals A, B, and C all covered.' },
                { title: 'Real-Time Flight Tracking', body: 'We monitor your EWR arrival and adjust your driver automatically for any delay — at no extra charge.' },
                { title: 'No Hidden Fees', body: 'All tolls and tips are included in your flat rate. No surprise charges when you arrive at your destination.' },
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
                <li><strong className="text-brand-black">Real-time flight tracking</strong> — we monitor your EWR arrival and adjust pickup for delays at no extra charge.</li>
                <li><strong className="text-brand-black">Meet &amp; greet at arrivals</strong> — your chauffeur waits with a name sign past baggage claim in your terminal.</li>
                <li><strong className="text-brand-black">All tolls included</strong> — Lincoln Tunnel, Holland Tunnel, and airport tolls are in your quoted price. Zero hidden fees.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking and never changes due to traffic or demand.</li>
                <li><strong className="text-brand-black">Complimentary wait time</strong> — 60 minutes of free wait time after your flight lands.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              Newark Airport to Manhattan — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              Newark Liberty Airport (EWR) is located in New Jersey, approximately 16 miles from Midtown Manhattan.
              The drive takes 30–45 minutes in normal traffic via the Lincoln Tunnel or Holland Tunnel,
              depending on your destination and real-time conditions.
            </p>
            <p className="text-brand-grey mb-4">
              EWR has three terminals: A (United), B (American, British Airways, others), and C (United).
              Your chauffeur meets you at the ground transportation area of your terminal with a name sign.
            </p>
            <p className="text-brand-grey">
              During peak hours, the approach to the Lincoln Tunnel can add 20–30 minutes. We build this
              into our scheduling so your driver is never rushed.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/manhattan-to-ewr-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to EWR</div>
                <div className="text-sm text-brand-grey mt-1">Departures — door-to-door service</div>
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
              Newark Airport to Manhattan Black Car — FAQ
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
                Book Your Newark Airport to Manhattan Black Car
              </h2>
              <p className="text-brand-silver mb-6">Flat rate. All tolls included. Chauffeur waiting when you land.</p>
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
