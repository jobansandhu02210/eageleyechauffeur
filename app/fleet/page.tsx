import type { Metadata } from 'next';
import Link from 'next/link';
import { SafeFleetImage } from '@/components/SafeFleetImage';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute:
      'Luxury Fleet NYC | Business & First Class Sedans & SUVs | Eagle Eye',
  },
  description:
    'Choose from our premium fleet of Business & First Class sedans and SUVs in NYC. Mercedes, Cadillac & more. Spotless vehicles, professional chauffeurs.',
  keywords: siteKeywords,
  alternates: { canonical: `${getSiteUrl()}/fleet` },
  openGraph: {
    url: `${getSiteUrl()}/fleet`,
    title:
      'Luxury Fleet NYC | Business & First Class Sedans & SUVs | Eagle Eye',
    description:
      'Choose from our premium fleet of Business & First Class sedans and SUVs in NYC. Mercedes, Cadillac & more. Spotless vehicles, professional chauffeurs.',
  },
};

const vehicles = [
  {
    name: 'Business Class Sedan',
    subtitle: 'Volvo',
    category: 'Sedan',
    capacity: '3 passengers',
    luggage: '3 bags',
    local: '/fleet-business-sedan.png',
    fallback: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    features: ['Leather interior', 'Climate control', 'USB charging', 'Premium sound'],
    description: 'Our Volvo sedan delivers understated luxury and reliability. Ideal for business travel and point-to-point transfers—discreet, comfortable, and professional.',
  },
  {
    name: 'Business Class SUV',
    subtitle: 'Chevrolet Suburban',
    category: 'SUV',
    capacity: '5–7 passengers',
    luggage: '5+ bags',
    local: '/fleet-business-suv.png',
    fallback: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    features: ['Spacious cabin', 'Premium sound', 'Rear climate', 'All-wheel drive'],
    description: 'The Chevrolet Suburban offers extra space and presence for executives and small groups. Perfect for airport runs and corporate travel.',
  },
  {
    name: 'First Class SUV',
    subtitle: 'Cadillac Escalade',
    category: 'SUV',
    capacity: '5–7 passengers',
    luggage: '6+ bags',
    local: '/fleet-first-suv.png',
    fallback: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
    features: ['Full-size luxury', 'Premium interior', 'Chrome accents', 'Tinted privacy glass'],
    description: 'The Cadillac Escalade defines first-class SUV travel. Sophisticated, spacious, and built for executives who expect the best.',
  },
  {
    name: 'First Class Sedan',
    subtitle: 'Mercedes-Benz S-Class',
    category: 'Sedan',
    capacity: '3 passengers',
    luggage: '3 bags',
    local: '/fleet-first-sedan.png',
    fallback: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
    features: ['Executive rear seating', 'Premium interior', 'Ambient lighting', 'Refreshments'],
    description: 'The Mercedes-Benz S-Class sets the standard for luxury sedans. Maximum comfort and refinement for high-profile and corporate travel.',
  },
];

export default function FleetPage() {
  return (
    <div className="bg-brand-offwhite">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
            Our Fleet
          </h1>
          <p className="text-lg text-brand-grey max-w-2xl">
            A diverse range of luxury vehicles for every need—from executive sedans to spacious Sprinters. Each is maintained to the highest standard and paired with a professional chauffeur.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {vehicles.map((v, i) => (
              <article
                key={i}
                className="bg-brand-white border border-brand-light overflow-hidden flex flex-col"
              >
                <div className="aspect-[16/10] relative">
                  <SafeFleetImage
                    localSrc={v.local}
                    fallbackSrc={v.fallback}
                    alt={v.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-black/80 text-brand-white text-xs font-medium px-3 py-1">
                    {v.category}
                  </div>
                </div>
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <h2 className="font-serif text-2xl font-semibold text-brand-black">
                    {v.name}
                  </h2>
                  <p className="mt-1 text-brand-grey font-medium">{v.subtitle}</p>
                  <p className="mt-2 text-brand-grey">{v.description}</p>
                  <dl className="mt-4 flex gap-6 text-sm">
                    <div>
                      <dt className="text-brand-silver">Capacity</dt>
                      <dd className="font-medium text-brand-black">{v.capacity}</dd>
                    </div>
                    <div>
                      <dt className="text-brand-silver">Luggage</dt>
                      <dd className="font-medium text-brand-black">{v.luggage}</dd>
                    </div>
                  </dl>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {v.features.map((f, j) => (
                      <li
                        key={j}
                        className="bg-brand-offwhite text-brand-dark text-xs px-3 py-1.5"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-brand-grey mb-4">Ready to choose your ride?</p>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
