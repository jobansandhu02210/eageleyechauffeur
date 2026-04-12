import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'JFK Airport Car Service | Eagle Eye Chauffeur',
  description:
    'Premium JFK airport car service. Meet-and-greet, flight tracking, luxury black car to/from Manhattan, Brooklyn, Queens. Book now.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/jfk-airport` },
};

export default function JFKPage() {
  return (
    <>
      <ServiceJsonLd
        name="JFK Airport Car Service"
        description="Luxury black car service to and from John F. Kennedy International Airport (JFK)."
        areaServed="JFK Airport, New York, NY"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              JFK Airport Car Service
            </h1>
            <p className="text-lg text-brand-grey">
              Stress-free airport transfers to and from JFK. Flight tracking, 
              meet-and-greet service, and 24/7 availability.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                Why Choose Our JFK Service
              </h2>
              <ul className="space-y-3 text-brand-grey">
                <li className="flex items-start gap-3">
                  <span className="text-brand-black">✓</span>
                  Real-time flight tracking — we adjust for delays
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-black">✓</span>
                  Meet-and-greet inside terminal with name sign
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-black">✓</span>
                  60 minutes complimentary wait time
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-black">✓</span>
                  Service to all NYC boroughs and surrounding areas
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
      </div>
    </>
  );
}
