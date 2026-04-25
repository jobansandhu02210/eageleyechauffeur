import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'NYC Chauffeur Services — Airport, Hourly, Corporate',
  description:
    'Premium NYC chauffeur services: JFK LGA EWR HPN airport transfers, hourly black car, point-to-point, corporate travel, weddings & events. Eagle Eye Chauffeur.',
  keywords: siteKeywords,
  alternates: { canonical: `${getSiteUrl()}/services` },
  openGraph: {
    url: `${getSiteUrl()}/services`,
    title: 'Chauffeur Services NYC | Eagle Eye Chauffeur',
    description:
      'Airport, hourly, corporate, and special-event chauffeur service across Manhattan, Brooklyn, Queens, and the greater NYC area.',
  },
};

const services = [
  {
    title: 'Point-to-Point Transfers',
    slug: 'point-to-point',
    description: 'Direct, luxurious transportation within NYC and surrounding areas.',
    image: '/service-point-to-point.png',
  },
  {
    title: 'Hourly Chauffeur Service',
    slug: 'hourly',
    description: 'Flexible hourly hire for business meetings, events, or leisurely tours.',
    image: '/service-hourly.png',
  },
  {
    title: 'Airport Transfers',
    slug: 'airport',
    description: 'JFK, LGA, EWR, HPN. Meet-and-greet and real-time flight tracking.',
    image: '/service-airport.png',
  },
  {
    title: 'Corporate Travel',
    slug: 'corporate',
    description: 'Tailored services for executives, roadshows, and corporate events.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80',
  },
  {
    title: 'Special Events',
    slug: 'special-events',
    description: 'Weddings, proms, concerts, and other special occasions.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-brand-offwhite">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
            Our Services
          </h1>
          <p className="text-lg text-brand-grey max-w-2xl">
            From quick point-to-point rides to full-day corporate travel and special events, we deliver premium chauffeur service across New York City and beyond.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block bg-brand-white border border-brand-light overflow-hidden hover:border-brand-dark transition-colors"
              >
                <div className="aspect-[16/10] relative">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl font-semibold text-brand-black group-hover:underline">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-brand-grey text-sm">{s.description}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-brand-black">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 bg-brand-white border border-brand-light p-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              NYC Areas We Serve
            </h2>
            <p className="text-brand-grey max-w-3xl">
              Browse borough coverage and dedicated airport transfer pages for Manhattan, Brooklyn, Queens, the Bronx,
              Staten Island, and JFK/LGA/EWR.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/services/areas"
                className="inline-flex items-center justify-center px-7 py-3 border border-brand-black text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
              >
                View service areas
              </Link>
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-7 py-3 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Request a ride
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
