import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'JFK to Manhattan Black Car Service | Eagle Eye Chauffeur',
  description:
    'JFK to Manhattan black car service — flat rates, real-time flight tracking, meet & greet at arrivals. Professional chauffeurs, no surge pricing. Book Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/jfk-to-manhattan-black-car-service` },
};

const faqs = [
  {
    q: 'How much does a black car service from JFK to Manhattan cost?',
    a: 'All rates are flat and confirmed at booking — no surge pricing. Get an instant quote on our booking page by entering your JFK terminal and Manhattan destination.',
  },
  {
    q: 'What makes Eagle Eye black car service different for JFK to Manhattan?',
    a: 'Eagle Eye uses professional, licensed chauffeurs in luxury sedans and SUVs. Your price is locked at booking — no surge pricing, ever. We track your flight and meet you at arrivals with a name sign. Confirmed the night before, with 24/7 phone and WhatsApp support.',
  },
  {
    q: 'Where will my chauffeur meet me at JFK?',
    a: 'Your chauffeur meets you in the arrivals hall with a name sign, just past baggage claim. You receive a WhatsApp message with the exact meeting point before you land.',
  },
  {
    q: 'What if my JFK flight is delayed?',
    a: 'We track your flight in real time. If your flight is delayed, we adjust your pickup automatically at no extra charge. You will never land to find no driver waiting.',
  },
  {
    q: 'Can I book a JFK to Manhattan black car for early morning or late night?',
    a: 'Yes. Eagle Eye Chauffeur operates 24 hours a day, 7 days a week. Red-eye arrivals and pre-dawn departures are fully covered.',
  },
];


export default function JFKToManhattanBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'JFK to Manhattan Black Car Service', url: `${getSiteUrl()}/services/routes/jfk-to-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="JFK to Manhattan Black Car Service"
        description="Premium black car service from JFK Airport to Manhattan. Flat rates, real-time flight tracking, meet & greet at arrivals. 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/jfk-to-manhattan-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              JFK to Manhattan Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              The most-traveled airport route in New York City — done right. Flat-rate black car service
              from JFK Airport to any Manhattan neighborhood. Flight tracking, meet &amp; greet, and a
              professional chauffeur waiting the moment you clear baggage claim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book JFK to Manhattan
              </Link>
              <Link href="/services/airport/jfk" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All JFK Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular Routes from JFK to Manhattan
            </h2>
            <div className="space-y-3">
              {[
                { from: 'JFK → Midtown Manhattan', time: '35–50 min' },
                { from: 'JFK → Financial District / Wall Street', time: '35–50 min' },
                { from: 'JFK → Times Square / Theater District', time: '40–50 min' },
                { from: 'JFK → Chelsea / Meatpacking District', time: '35–50 min' },
                { from: 'JFK → Upper East Side', time: '40–55 min' },
                { from: 'JFK → Upper West Side', time: '45–60 min' },
                { from: 'JFK → SoHo / Tribeca', time: '35–50 min' },
                { from: 'JFK → Harlem / East Harlem', time: '45–60 min' },
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
              Why Eagle Eye for JFK to Manhattan
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises during peak hours.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Meet & Greet at Arrivals', body: 'Your chauffeur waits with a name sign past baggage claim — no searching for your ride at the curb.' },
                { title: 'Real-Time Flight Tracking', body: 'We monitor your JFK arrival and adjust your driver automatically for any delay — at no extra charge.' },
                { title: 'Flexible Cancellation', body: 'Plans change — contact us directly and we will work with you. No automated penalty systems.' },
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
                <li><strong className="text-brand-black">Real-time flight tracking</strong> — we monitor your JFK arrival and adjust pickup if your flight is delayed or early. No extra charge.</li>
                <li><strong className="text-brand-black">Meet &amp; greet at arrivals</strong> — your chauffeur waits with a name sign past baggage claim. No curbside hunting.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. It does not change due to traffic, time of day, or demand.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Complimentary wait time</strong> — 60 minutes of free wait time after your flight lands. No rush to get out fast.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              JFK to Manhattan — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              JFK Airport is located in Queens, approximately 16 miles southeast of Midtown Manhattan.
              Drive time is typically 35–50 minutes in normal traffic. Peak hours — weekday mornings
              (7–9am) and evenings (5–8pm) — can extend the ride to 60–75 minutes.
            </p>
            <p className="text-brand-grey mb-4">
              Your chauffeur takes the most efficient route depending on real-time traffic — typically
              the Van Wyck Expressway to the Queens-Midtown Tunnel or the Belt Parkway to the Brooklyn Bridge,
              depending on your Manhattan destination.
            </p>
            <p className="text-brand-grey">
              All JFK terminal pickups are handled at the arrivals level. Your driver will send you the exact
              meeting spot via WhatsApp before you land.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/manhattan-to-jfk-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to JFK</div>
                <div className="text-sm text-brand-grey mt-1">Departures — door-to-door service</div>
              </Link>
              <Link href="/services/airport/jfk" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All JFK routes &amp; terminals</div>
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
              JFK to Manhattan Black Car Service — FAQ
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
                Book Your JFK to Manhattan Black Car
              </h2>
              <p className="text-brand-silver mb-6">Instant confirmation. No surge pricing. Professional chauffeur waiting when you land.</p>
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
