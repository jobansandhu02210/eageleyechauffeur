import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'LaGuardia Airport Car Service | Eagle Eye Chauffeur NYC',
  description:
    'Premium LGA LaGuardia airport car service. Luxury black car pickups & drop-offs, meet-and-greet, real-time flight tracking. Serving Manhattan, Queens & all NYC boroughs. Book now.',
  keywords: ['LaGuardia car service', 'LGA airport transfer', 'LGA black car NYC', 'LaGuardia pickup Manhattan', 'LGA limo service'],
  alternates: { canonical: `${getSiteUrl()}/services/areas/lga-airport` },
};

export default function LGAPage() {
  return (
    <>
      <ServiceJsonLd
        name="LaGuardia Airport Car Service"
        description="Luxury black car and chauffeur service to and from LaGuardia Airport (LGA), New York."
        areaServed="LaGuardia Airport, Queens, New York, NY"
      />
      <div className="bg-brand-offwhite">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Airport Transfers</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
              LaGuardia Airport Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl">
              Reliable, on-time luxury transfers to and from LGA. Flight tracking, meet-and-greet, and professional chauffeurs — every single ride.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Book LGA Transfer
              </Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
              Why Choose Eagle Eye for LGA?
            </h2>
            <ul className="space-y-4">
              {[
                'Real-time flight tracking — we know before you land if you\'re early or late',
                'Meet-and-greet inside the terminal with a name sign',
                '60 minutes complimentary wait time after landing',
                'No surge pricing — your rate is locked when you book',
                'Available 24/7 including early morning and late night flights',
                'All terminals covered: Terminal A, B, C, D',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-grey">
                  <span className="text-brand-black font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Popular routes */}
        <section className="py-16 lg:py-20 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-8">
              Popular LGA Routes We Serve
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'LGA to Midtown Manhattan',
                'LGA to Financial District',
                'LGA to Upper East / West Side',
                'LGA to Brooklyn',
                'LGA to Queens',
                'LGA to Newark, NJ',
                'LGA to Long Island',
                'LGA to Westchester County',
                'Manhattan to LGA',
                'Brooklyn to LGA',
              ].map((route, i) => (
                <div key={i} className="flex items-center gap-3 p-3 border border-brand-light bg-brand-offwhite text-sm text-brand-dark">
                  <span className="text-brand-silver">→</span>
                  {route}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-offwhite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">Ready to Book Your LGA Transfer?</h2>
            <p className="text-brand-grey mb-8">Get an instant quote online or message us on WhatsApp. We confirm within minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Get an Instant Quote
              </Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
