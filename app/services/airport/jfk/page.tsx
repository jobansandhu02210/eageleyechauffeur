import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'JFK Airport Black Car Service NYC | Flat Rates from $85 | Eagle Eye',
  description:
    'JFK Airport black car service — flat rates from $85, real-time flight tracking, meet & greet at every terminal. Luxury sedan & SUV. No surge pricing. Book Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/airport/jfk` },
};

const jfkFaqs = [
  {
    q: 'How much is a black car service from JFK to Manhattan?',
    a: 'Black car service from JFK to Manhattan starts at $85 for a business sedan to Midtown. The exact price depends on your drop-off neighborhood and vehicle choice. All rates are flat — no surge pricing.',
  },
  {
    q: 'How is JFK black car service different from a yellow cab or Uber?',
    a: 'Yellow cabs and Uber use metered or surge pricing — your final cost is unknown until you arrive. Our black car service is flat-rate, confirmed at booking. You also get a professional chauffeur, meet & greet at arrivals, and flight tracking — not available with taxis or rideshare.',
  },
  {
    q: 'Do you monitor flight delays at JFK?',
    a: 'Yes. We track your flight in real-time so we adjust pickup timing automatically. No extra charge for delays.',
  },
  {
    q: 'Where does the chauffeur meet me at JFK?',
    a: 'Your chauffeur meets you at the arrivals level with a name sign, just past baggage claim. You also get a WhatsApp message with the exact meeting spot before landing.',
  },
  {
    q: 'Which JFK terminals do you serve?',
    a: 'We serve all JFK terminals — T1, T2, T4, T5, T7, and T8. Your driver will be at the correct terminal based on your flight information.',
  },
  {
    q: 'Do you offer child seats for JFK transfers?',
    a: "Yes. Let us know when booking and we'll have a car seat ready at no extra charge.",
  },
];

const comparisonRows = [
  { feature: 'Price', blackCar: 'Flat rate — locked at booking', yellowCab: 'Metered + bridge tolls — unpredictable', uber: 'Surge pricing — can double at peak times', airTrain: '$9.75 + subway or cab at each end' },
  { feature: 'Meet & Greet', blackCar: 'Arrivals hall, name sign', yellowCab: 'Taxi stand — queue required', uber: 'Rideshare lot — long walk', airTrain: 'No — self-service' },
  { feature: 'Luggage Help', blackCar: 'Yes — chauffeur assists', yellowCab: 'Varies by driver', uber: 'No', airTrain: 'You carry everything' },
  { feature: 'Flight Tracking', blackCar: 'Yes — real-time, no charge', yellowCab: 'No', uber: 'No', airTrain: 'No' },
  { feature: 'Vehicle Quality', blackCar: 'Luxury sedan or SUV', yellowCab: 'Standard taxi', uber: 'Unknown until assigned', airTrain: 'Train' },
  { feature: 'Door-to-Door', blackCar: 'Yes — building to terminal', yellowCab: 'Yes', uber: 'Yes (rideshare zone)', airTrain: 'No — two transfers needed' },
];

export default function JFKPage() {
  return (
    <>
      <FaqJsonLd faqs={jfkFaqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Airport Transfers', url: `${getSiteUrl()}/services/airport` },
        { name: 'JFK Airport', url: `${getSiteUrl()}/services/airport/jfk` },
      ]} />
      <ServiceJsonLd
        name="JFK Airport Black Car Service"
        description="Premium JFK airport black car service. Flat rates from $85, real-time flight tracking, meet & greet at arrivals. All terminals. 24/7 availability."
        areaServed="New York City, NY"
        url={`${getSiteUrl()}/services/airport/jfk`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              JFK Airport Black Car Service NYC
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              New York&apos;s busiest airport — handled by professional chauffeurs with flat-rate pricing,
              real-time flight tracking, and meet &amp; greet at every terminal. From $85, door-to-door,
              no surge pricing, 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Your JFK Transfer
              </Link>
              <Link href="/services/routes/jfk-to-manhattan-black-car-service" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                JFK → Manhattan Pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              JFK Black Car Rates &amp; Pricing
            </h2>
            <div className="space-y-3">
              {[
                { from: 'JFK ↔ Midtown Manhattan', price: '$85+', miles: '16 mi', time: '35–50 min', href: '/services/routes/jfk-to-manhattan-black-car-service' },
                { from: 'JFK ↔ Financial District / Wall Street', price: '$85+', miles: '16 mi', time: '35–50 min', href: '/services/routes/jfk-to-manhattan-black-car-service' },
                { from: 'JFK ↔ Upper East Side', price: '$90+', miles: '18 mi', time: '40–55 min', href: '/services/routes/upper-east-side-to-jfk-black-car-service' },
                { from: 'JFK ↔ Brooklyn', price: '$75+', miles: '12 mi', time: '20–35 min', href: '/services/routes/brooklyn-to-jfk-black-car-service' },
                { from: 'JFK ↔ Queens', price: '$65+', miles: '8 mi', time: '15–25 min', href: '/services/airport/jfk' },
                { from: 'JFK ↔ Bronx', price: '$85+', miles: '20 mi', time: '40–55 min', href: '/services/areas/bronx' },
                { from: 'JFK ↔ Staten Island', price: '$95+', miles: '30 mi', time: '45–60 min', href: '/services/areas/staten-island' },
                { from: 'JFK ↔ Long Island', price: '$70+', miles: '15 mi', time: '20–35 min', href: '/services/areas/long-island' },
                { from: 'JFK ↔ Westchester', price: '$110+', miles: '35 mi', time: '50–65 min', href: '/services/areas/westchester' },
                { from: 'JFK ↔ New Jersey', price: '$120+', miles: '25 mi', time: '45–60 min', href: '/services/areas/new-jersey' },
              ].map((r) => (
                <Link key={r.from} href={r.href} className="flex justify-between items-center bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.price} · {r.time}</span>
                </Link>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All rates are flat. Gratuity and tolls included. No surge pricing.</p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              JFK Black Car vs. Yellow Cab, Uber &amp; AirTrain
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-black text-brand-white">
                    <th className="text-left p-3 font-medium">Feature</th>
                    <th className="text-left p-3 font-medium">Eagle Eye Black Car</th>
                    <th className="text-left p-3 font-medium">Yellow Cab</th>
                    <th className="text-left p-3 font-medium">Uber</th>
                    <th className="text-left p-3 font-medium">AirTrain</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-brand-white' : 'bg-brand-offwhite'}>
                      <td className="p-3 font-medium text-brand-black">{row.feature}</td>
                      <td className="p-3 text-brand-grey">{row.blackCar}</td>
                      <td className="p-3 text-brand-grey">{row.yellowCab}</td>
                      <td className="p-3 text-brand-grey">{row.uber}</td>
                      <td className="p-3 text-brand-grey">{row.airTrain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              JFK Terminal-by-Terminal Pickup Guide
            </h2>
            <div className="space-y-4">
              {[
                { terminal: 'Terminal 1', airlines: 'Air France, Lufthansa, Korean Air, Japan Airlines', pickup: 'Arrivals level, Ground Floor — your driver waits past baggage claim with a name sign.' },
                { terminal: 'Terminal 2', airlines: 'Delta (some international flights)', pickup: 'Arrivals level — driver meets you just past customs with a name sign.' },
                { terminal: 'Terminal 4', airlines: 'Delta (main hub), Emirates, Etihad, Virgin Atlantic', pickup: 'Ground level arrivals — driver holds name sign past baggage claim. Largest terminal at JFK.' },
                { terminal: 'Terminal 5', airlines: 'JetBlue (main hub)', pickup: 'Arrivals level, Ground Floor — driver at the exit from baggage claim with name sign.' },
                { terminal: 'Terminal 7', airlines: 'British Airways, Iberia (check current status)', pickup: 'Ground level arrivals — driver meets you past baggage claim.' },
                { terminal: 'Terminal 8', airlines: 'American Airlines (main hub)', pickup: 'Arrivals level — driver waits with name sign past baggage claim and customs.' },
              ].map((t) => (
                <div key={t.terminal} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-1">{t.terminal} — {t.airlines}</h3>
                  <p className="text-sm text-brand-grey">{t.pickup}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                Why Book JFK Transfers with Eagle Eye
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">Real-time flight tracking</strong> — we monitor your JFK flight and adjust pickup automatically for delays. No charge.</li>
                <li><strong className="text-brand-black">Meet &amp; greet at arrivals</strong> — your chauffeur is waiting with a name sign, not in a rideshare lot.</li>
                <li><strong className="text-brand-black">No surge pricing</strong> — your rate is locked at booking. Peak hours and bad weather do not change it.</li>
                <li><strong className="text-brand-black">Luxury fleet</strong> — business sedans and SUVs, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">60 minutes free wait time</strong> — you have one hour after landing before any wait charges apply.</li>
                <li><strong className="text-brand-black">24/7 availability</strong> — early morning and red-eye flights fully covered.</li>
              </ul>
              <div className="mt-8">
                <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                  Book JFK Transfer
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular JFK Black Car Routes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/services/routes/jfk-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK to Manhattan Black Car</div>
                <div className="text-sm text-brand-grey mt-1">From $85 — 35–50 min</div>
              </Link>
              <Link href="/services/routes/manhattan-to-jfk-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to JFK Black Car</div>
                <div className="text-sm text-brand-grey mt-1">From $85 — 35–50 min</div>
              </Link>
              <Link href="/services/routes/brooklyn-to-jfk-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Brooklyn to JFK Black Car</div>
                <div className="text-sm text-brand-grey mt-1">From $75 — 20–35 min</div>
              </Link>
              <Link href="/services/routes/midtown-to-jfk-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Midtown to JFK Black Car</div>
                <div className="text-sm text-brand-grey mt-1">$85 flat — 35–50 min</div>
              </Link>
              <Link href="/services/routes/upper-east-side-to-jfk-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Upper East Side to JFK</div>
                <div className="text-sm text-brand-grey mt-1">From $90 — 40–55 min</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              JFK Airport Car Service FAQ
            </h2>
            <div className="space-y-4">
              {jfkFaqs.map((faq) => (
                <div key={faq.q} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-1">{faq.q}</h3>
                  <p className="text-sm text-brand-grey">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
