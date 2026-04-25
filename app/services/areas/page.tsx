import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'NYC Car Service Areas | Eagle Eye Chauffeur',
  description:
    'Chauffeur and black car service areas in NYC: Manhattan, Brooklyn, Queens, Bronx, Staten Island, and airport transfers (JFK, LGA, EWR).',
  keywords: siteKeywords,
  alternates: { canonical: `${getSiteUrl()}/services/areas` },
};

const areas = [
  { href: '/services/areas/manhattan', title: 'Manhattan Chauffeur Service', blurb: 'Midtown, Downtown, UES/UWS, and more.' },
  { href: '/services/areas/brooklyn', title: 'Brooklyn Chauffeur Service', blurb: 'Williamsburg, DUMBO, Park Slope, and beyond.' },
  { href: '/services/areas/queens', title: 'Queens Chauffeur Service', blurb: 'LIC, Astoria, Flushing, and more.' },
  { href: '/services/areas/bronx', title: 'Bronx Chauffeur Service', blurb: 'Riverdale, Fordham, Pelham Bay, and beyond.' },
  { href: '/services/areas/staten-island', title: 'Staten Island Chauffeur Service', blurb: 'St. George, Great Kills, Tottenville, and more.' },
  { href: '/services/areas/jfk-airport', title: 'JFK Airport Car Service', blurb: 'Meet-and-greet, flight tracking, 24/7.' },
  { href: '/services/areas/lga-airport', title: 'LGA Airport Car Service', blurb: 'Reliable LaGuardia pickups and drop-offs.' },
  { href: '/services/areas/ewr-airport', title: 'EWR Airport Car Service', blurb: 'Cross-river transfers to NYC and NJ.' },
];

export default function AreasIndexPage() {
  return (
    <div className="bg-brand-offwhite">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
            NYC Car Service Areas
          </h1>
          <p className="text-lg text-brand-grey max-w-3xl">
            Eagle Eye Chauffeur provides premium black car service across New York City and the surrounding region.
            Browse local pages for borough coverage and dedicated airport transfer details.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="block bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
              >
                <h2 className="font-serif text-xl font-semibold text-brand-black mb-2">{a.title}</h2>
                <p className="text-sm text-brand-grey">{a.blurb}</p>
                <span className="mt-4 inline-block text-sm font-medium text-brand-black">View page →</span>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Request a Ride
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

