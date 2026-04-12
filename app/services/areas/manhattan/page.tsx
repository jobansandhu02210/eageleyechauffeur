import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Manhattan Chauffeur Service | Eagle Eye Chauffeur',
  description:
    'Premium chauffeur service in Manhattan NYC. Luxury black car for business, airport transfers, hourly hire. Book Eagle Eye Chauffeur.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/manhattan` },
};

export default function ManhattanPage() {
  return (
    <>
      <ServiceJsonLd
        name="Manhattan Chauffeur Service"
        description="Luxury black car and chauffeur service in Manhattan, New York City."
        areaServed="Manhattan, New York, NY"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan Chauffeur Service
            </h1>
            <p className="text-lg text-brand-grey">
              Professional black car service throughout Manhattan. From Midtown business meetings 
              to Upper East Side residences, we provide discreet, punctual chauffeur service.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                Service Areas in Manhattan
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-brand-grey">
                <li>Midtown & Times Square</li>
                <li>Financial District</li>
                <li>Upper East Side</li>
                <li>Upper West Side</li>
                <li>Chelsea & Meatpacking</li>
                <li>SoHo & Tribeca</li>
                <li>Gramercy & Flatiron</li>
                <li>Central Park West</li>
              </ul>

              <div className="mt-8 space-y-4">
                <Link
                  href="/book"
                  className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
