import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Sitemap | Eagle Eye Chauffeur NYC',
  description: 'Full sitemap for Eagle Eye Chauffeur — NYC black car service, airport transfers, service areas, routes, and blog.',
  alternates: { canonical: `${getSiteUrl()}/sitemap` },
  robots: { index: true, follow: true },
};

const airports = [
  { label: 'JFK Airport Car Service', href: '/services/airport/jfk' },
  { label: 'LaGuardia (LGA) Car Service', href: '/services/airport/lga' },
  { label: 'Newark (EWR) Car Service', href: '/services/airport/ewr' },
  { label: 'Westchester (HPN) Car Service', href: '/services/airport/hpn' },
];

const services = [
  { label: 'Point-to-Point Car Service', href: '/services/point-to-point' },
  { label: 'Hourly Chauffeur Hire', href: '/services/hourly' },
  { label: 'Airport Transfers', href: '/services/airport' },
  { label: 'Corporate Car Service', href: '/services/corporate' },
  { label: 'Special Events', href: '/services/special-events' },
  { label: 'Black Car Service NYC', href: '/black-car-service-nyc' },
  { label: 'NYC Car Service Pricing', href: '/pricing' },
];

const areas = [
  { label: 'Manhattan', href: '/services/areas/manhattan' },
  { label: 'Brooklyn', href: '/services/areas/brooklyn' },
  { label: 'Queens', href: '/services/areas/queens' },
  { label: 'Bronx', href: '/services/areas/bronx' },
  { label: 'Staten Island', href: '/services/areas/staten-island' },
  { label: 'Long Island', href: '/services/areas/long-island' },
  { label: 'Nassau County', href: '/services/areas/nassau-county' },
  { label: 'Suffolk County', href: '/services/areas/suffolk-county' },
  { label: 'Westchester', href: '/services/areas/westchester' },
  { label: 'Hamptons', href: '/services/areas/hamptons' },
  { label: 'New Jersey', href: '/services/areas/new-jersey' },
  { label: 'Connecticut', href: '/services/areas/connecticut' },
  { label: 'Upstate NY', href: '/services/areas/upstate-ny' },
  { label: 'Midtown Manhattan', href: '/services/areas/midtown-manhattan' },
  { label: 'Upper East Side', href: '/services/areas/upper-east-side' },
  { label: 'Upper West Side', href: '/services/areas/upper-west-side' },
  { label: 'Financial District', href: '/services/areas/financial-district' },
  { label: 'SoHo', href: '/services/areas/soho' },
  { label: 'Tribeca', href: '/services/areas/tribeca' },
  { label: 'Chelsea', href: '/services/areas/chelsea' },
  { label: "Hell's Kitchen", href: '/services/areas/hells-kitchen' },
  { label: 'Greenwich Village', href: '/services/areas/greenwich-village' },
  { label: 'Flatiron', href: '/services/areas/flatiron' },
  { label: 'Lower Manhattan', href: '/services/areas/lower-manhattan' },
  { label: 'Battery Park City', href: '/services/areas/battery-park-city' },
  { label: 'Gramercy Park', href: '/services/areas/gramercy-park' },
  { label: 'Harlem', href: '/services/areas/harlem' },
  { label: 'Garden City', href: '/services/areas/garden-city' },
  { label: 'Great Neck', href: '/services/areas/great-neck' },
  { label: 'New Hyde Park', href: '/services/areas/new-hyde-park' },
  { label: 'Manhasset', href: '/services/areas/manhasset' },
  { label: 'White Plains', href: '/services/areas/white-plains' },
  { label: 'Yonkers', href: '/services/areas/yonkers' },
  { label: 'Scarsdale', href: '/services/areas/scarsdale' },
  { label: 'New Rochelle', href: '/services/areas/new-rochelle' },
  { label: 'Greenwich CT', href: '/services/areas/greenwich-ct' },
  { label: 'Stamford CT', href: '/services/areas/stamford-ct' },
  { label: 'Norwalk CT', href: '/services/areas/norwalk-ct' },
  { label: 'Hoboken NJ', href: '/services/areas/hoboken' },
  { label: 'Jersey City NJ', href: '/services/areas/jersey-city' },
  { label: 'Newark NJ', href: '/services/areas/newark-nj' },
  { label: 'Princeton NJ', href: '/services/areas/princeton-nj' },
  { label: 'Short Hills NJ', href: '/services/areas/short-hills-nj' },
];

const routes = [
  { label: 'JFK → Manhattan', href: '/services/routes/jfk-to-manhattan-black-car-service' },
  { label: 'Manhattan → JFK', href: '/services/routes/manhattan-to-jfk-black-car-service' },
  { label: 'LGA → Manhattan', href: '/services/routes/lga-to-manhattan-black-car-service' },
  { label: 'Manhattan → LGA', href: '/services/routes/manhattan-to-lga-black-car-service' },
  { label: 'EWR → Manhattan', href: '/services/routes/ewr-to-manhattan-black-car-service' },
  { label: 'Manhattan → EWR', href: '/services/routes/manhattan-to-ewr-black-car-service' },
  { label: 'Brooklyn → JFK', href: '/services/routes/brooklyn-to-jfk-black-car-service' },
  { label: 'Queens → JFK', href: '/services/routes/queens-to-jfk-black-car-service' },
  { label: 'Bronx → JFK', href: '/services/routes/bronx-to-jfk-black-car-service' },
  { label: 'Staten Island → JFK', href: '/services/routes/staten-island-to-jfk-black-car-service' },
  { label: 'Midtown → JFK', href: '/services/routes/midtown-to-jfk-black-car-service' },
  { label: 'Upper East Side → JFK', href: '/services/routes/upper-east-side-to-jfk-black-car-service' },
  { label: 'JFK → Long Island', href: '/services/routes/jfk-to-long-island-car-service' },
  { label: 'JFK → Westchester', href: '/services/routes/jfk-to-westchester-car-service' },
  { label: 'NYC → Westchester', href: '/services/routes/nyc-to-westchester-car-service' },
  { label: 'Manhattan → Hamptons', href: '/services/routes/manhattan-to-hamptons-car-service' },
  { label: 'Manhattan → Connecticut', href: '/services/routes/manhattan-to-connecticut-car-service' },
  { label: 'All Routes', href: '/services/routes' },
];

function Section({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-serif text-xl font-semibold text-brand-black mb-4 pb-2 border-b border-brand-light">
        {title}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-brand-grey hover:text-brand-black hover:underline transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  return (
    <div className="bg-brand-offwhite min-h-screen">
      <section className="py-16 lg:py-20 bg-brand-black text-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-semibold mb-3">Site Map</h1>
          <p className="text-brand-silver">Eagle Eye Chauffeur — all pages, services, routes, and areas.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <Section title="Main Pages" links={[
            { label: 'Home', href: '/' },
            { label: 'Book Now', href: '/book' },
            { label: 'Pricing & Rates', href: '/pricing' },
            { label: 'Our Fleet', href: '/fleet' },
            { label: 'About Us', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'Blog', href: '/blog' },
            { label: 'Referral Program', href: '/referrals' },
            { label: 'World Cup 2026 Transportation', href: '/world-cup-2026' },
          ]} />

          <Section title="Services" links={services} />
          <Section title="Airport Car Service" links={airports} />
          <Section title="Popular Routes" links={routes} />
          <Section title="Service Areas" links={areas} />

          <div>
            <h2 className="font-serif text-xl font-semibold text-brand-black mb-4 pb-2 border-b border-brand-light">
              Blog & Guides
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-brand-grey hover:text-brand-black hover:underline transition-colors"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
