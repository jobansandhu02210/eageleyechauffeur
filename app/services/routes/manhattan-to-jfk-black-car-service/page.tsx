import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Manhattan to JFK Black Car Service | Eagle Eye Chauffeur',
  description:
    'Manhattan to JFK black car service — flat rates, flight monitoring, door-to-door pickup. Professional chauffeurs, no surge pricing. Book Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/manhattan-to-jfk-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Manhattan to JFK?',
    a: 'All rates are flat and confirmed at booking — no surge pricing. Get an instant quote on our booking page by entering your Manhattan pickup address and JFK as the destination.',
  },
  {
    q: 'How early should I book my Manhattan to JFK black car?',
    a: 'We recommend booking at least 24 hours in advance. For early morning departures (before 6am), booking 48 hours ahead ensures your preferred vehicle is available.',
  },
  {
    q: 'Will my chauffeur come to my building door?',
    a: 'Yes. Your chauffeur picks you up directly at your Manhattan address — apartment building, hotel, or office. Step outside when your driver arrives and you are on your way.',
  },
  {
    q: 'What if I have a lot of luggage for JFK?',
    a: 'Our SUV option (Cadillac Escalade or similar) handles large luggage loads comfortably. Just mention your bag count when booking and we match you to the right vehicle.',
  },
  {
    q: 'Do you cover early morning flights from JFK?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. Pre-dawn pickups — even 3am or 4am — are fully available. Your driver will be confirmed the evening before your trip.',
  },
];


export default function ManhattanToJFKBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Manhattan to JFK Black Car Service', url: `${getSiteUrl()}/services/routes/manhattan-to-jfk-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Manhattan to JFK Black Car Service"
        description="Premium black car service from Manhattan to JFK Airport. Flat rates, door-to-door pickup, 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/manhattan-to-jfk-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan to JFK Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Start your trip the right way. Door-to-door black car service from any Manhattan address
              to JFK Airport — flat rate confirmed at booking, professional chauffeur at your door,
              and plenty of time to make your flight stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Manhattan to JFK
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
              Popular Routes from Manhattan to JFK
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Midtown Manhattan → JFK', time: '35–50 min' },
                { from: 'Financial District / Wall Street → JFK', time: '35–50 min' },
                { from: 'Times Square / Theater District → JFK', time: '40–50 min' },
                { from: 'Chelsea / Meatpacking District → JFK', time: '35–50 min' },
                { from: 'Upper East Side → JFK', time: '40–55 min' },
                { from: 'Upper West Side → JFK', time: '45–60 min' },
                { from: 'SoHo / Tribeca → JFK', time: '35–50 min' },
                { from: 'Harlem / East Harlem → JFK', time: '45–60 min' },
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
              Why Eagle Eye for Manhattan to JFK
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises during rush hour or early morning departures.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Door-to-Door Pickup', body: 'Your driver comes to your exact Manhattan address — building entrance, hotel lobby, or office door.' },
                { title: 'Driver Confirmed the Evening Before', body: 'You receive your chauffeur\'s name, number, and vehicle details the night before — full peace of mind.' },
                { title: 'Pre-Dawn Availability Guaranteed', body: 'Early morning JFK departures are fully covered. Your flat rate never changes regardless of the hour.' }
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
                <li><strong className="text-brand-black">Door-to-door pickup</strong> — your chauffeur arrives at your Manhattan address, not a nearby corner.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. Traffic, time of day, and demand do not change it.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — you receive your driver details the evening before, not minutes before pickup.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — your chauffeur helps with bags at pickup and drop-off.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              Manhattan to JFK — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              JFK Airport is 16 miles from Midtown Manhattan. In normal traffic, the drive takes 35–50 minutes.
              During peak hours — weekday mornings (7–9am) and evenings (5–8pm) — allow 60–75 minutes.
              We recommend scheduling pickup at least 3 hours before your departure time.
            </p>
            <p className="text-brand-grey mb-4">
              Your chauffeur takes the most efficient route in real-time — typically the Queens-Midtown Tunnel
              or the Brooklyn Bridge to the Belt Parkway, depending on current conditions.
            </p>
            <p className="text-brand-grey">
              Terminal drop-off is curbside at departures. Your driver pulls directly to your airline terminal.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/jfk-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK to Manhattan</div>
                <div className="text-sm text-brand-grey mt-1">Arrivals — meet &amp; greet service</div>
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
              Manhattan to JFK Black Car — FAQ
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
                Book Your Manhattan to JFK Black Car
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
