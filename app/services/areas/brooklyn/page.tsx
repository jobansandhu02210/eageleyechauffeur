import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Brooklyn Chauffeur Service | Eagle Eye Chauffeur',
  description:
    'Luxury black car and chauffeur service in Brooklyn NYC. Airport transfers, hourly hire, corporate travel. Professional drivers.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/brooklyn` },
};

export default function BrooklynPage() {
  return (
    <>
      <ServiceJsonLd
        name="Brooklyn Chauffeur Service"
        description="Premium black car and chauffeur service in Brooklyn, New York City."
        areaServed="Brooklyn, New York, NY"
      />
      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Brooklyn Chauffeur Service
            </h1>
            <p className="text-lg text-brand-grey">
              Executive car service in Brooklyn. From DUMBO to Park Slope, 
              Williamsburg to Downtown Brooklyn — arrive in style.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                Service Areas in Brooklyn
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-brand-grey">
                <li>DUMBO & Brooklyn Heights</li>
                <li>Williamsburg</li>
                <li>Park Slope</li>
                <li>Downtown Brooklyn</li>
                <li>Bay Ridge</li>
                <li>Sheepshead Bay</li>
                <li>Coney Island</li>
                <li>Bensonhurst</li>
              </ul>

              <div className="mt-8">
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
