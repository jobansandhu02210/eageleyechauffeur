import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'JFK Airport Area Car Service | Black Car to/from JFK | Eagle Eye',
  description:
    'Black car service to and from John F. Kennedy International Airport. Meet-and-greet, real-time flight tracking, luxury sedan & SUV. Serving all NYC boroughs. Book Eagle Eye Chauffeur.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/jfk-airport` },
};

const faqs = [
  {
    q: 'What is the difference between a chauffeur and a taxi at JFK?',
    a: 'A chauffeur service like Eagle Eye provides a pre-booked, fixed-price ride in a luxury vehicle with a professional driver. Unlike taxis, there is no metering, no surge pricing, and your driver meets you at arrivals with a name sign.',
  },
  {
    q: 'How early should my driver arrive at JFK?',
    a: 'We track your flight live and time arrival precisely. Your chauffeur will be curbside or in the arrivals hall before you exit baggage claim — typically 15 minutes before your estimated arrival.',
  },
  {
    q: 'Which NYC neighborhoods do you serve from JFK?',
    a: 'We serve all five boroughs: Manhattan, Brooklyn, Queens, Bronx, and Staten Island. We also cover Long Island, Westchester, New Jersey, and Connecticut.',
  },
  {
    q: 'Can I book a round trip from JFK?',
    a: 'Yes. Book your JFK pickup and your return ride at the same time for peace of mind. Just provide both trip details when booking.',
  },
];

export default function JFKAreaPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <ServiceJsonLd
        name="JFK Airport Black Car Service"
        description="Luxury black car service to and from John F. Kennedy International Airport (JFK). Pre-booked, fixed-price rides with professional chauffeurs."
        areaServed="JFK Airport, Queens, New York, NY"
        url={`${getSiteUrl()}/services/areas/jfk-airport`}
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              JFK Airport Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Stress-free black car transfers to and from John F. Kennedy International Airport.
              Flight tracking, meet-and-greet at arrivals, and 24/7 availability — no surge pricing ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Book JFK Transfer
              </Link>
              <Link
                href="/services/airport/jfk"
                className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
              >
                View JFK Pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                Why Choose Our JFK Black Car Service
              </h2>
              <ul className="space-y-3 text-brand-grey">
                <li className="flex items-start gap-3">
                  <span className="text-brand-black font-bold">✓</span>
                  Real-time flight tracking — we adjust for delays at no extra charge
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-black font-bold">✓</span>
                  Meet-and-greet inside terminal with name sign
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-black font-bold">✓</span>
                  60 minutes complimentary wait time after landing
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-black font-bold">✓</span>
                  Fixed pricing — no metering, no surge
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-black font-bold">✓</span>
                  Service to all NYC boroughs and surrounding areas
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-black font-bold">✓</span>
                  Luxury sedan and SUV options
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/book"
                  className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
                >
                  Book JFK Transfer
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related routes */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular JFK Routes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/services/routes/jfk-to-manhattan" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK → Manhattan</div>
                <div className="text-sm text-brand-grey mt-1">From $85 · 35-50 min</div>
              </Link>
              <Link href="/services/routes/jfk-to-brooklyn" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK → Brooklyn</div>
                <div className="text-sm text-brand-grey mt-1">From $75 · 25-40 min</div>
              </Link>
              <Link href="/services/areas/queens" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK → Queens</div>
                <div className="text-sm text-brand-grey mt-1">From $65 · 15-25 min</div>
              </Link>
              <Link href="/services/areas/westchester" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK → Westchester</div>
                <div className="text-sm text-brand-grey mt-1">From $110 · 50-70 min</div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              JFK Black Car Service FAQ
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
      </div>
    </>
  );
}
