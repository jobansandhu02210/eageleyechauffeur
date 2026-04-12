import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SafeFleetImage } from '@/components/SafeFleetImage';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { getSiteUrl } from '@/lib/site';
import { defaultSiteDescription, siteKeywords } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'NYC Luxury Chauffeur, Black Car & Airport Transfers',
  description: defaultSiteDescription,
  keywords: siteKeywords,
  alternates: { canonical: getSiteUrl() },
  openGraph: {
    url: getSiteUrl(),
    title: 'Eagle Eye Chauffeur | NYC Luxury Chauffeur & Black Car Service',
    description: defaultSiteDescription,
  },
};

const services = [
  {
    title: 'Point-to-Point Transfers',
    description: 'Direct, luxurious transportation within NYC and surrounding areas. Door-to-door convenience.',
    href: '/services/point-to-point',
    image: '/service-point-to-point.png',
  },
  {
    title: 'Hourly Chauffeur Service',
    description: 'Flexible hourly hire for meetings, events, or leisurely tours. Your schedule, your way.',
    href: '/services/hourly',
    image: '/service-hourly.png',
  },
  {
    title: 'Airport Transfers',
    description: 'JFK, LGA, EWR, HPN. Meet-and-greet, flight tracking, and punctual pickups every time.',
    href: '/services/airport',
    image: '/service-airport.png',
  },
];

// Fleet: tries your images in public/ first (see public/FLEET-IMAGES.txt), then fallback
// Local paths must match filenames in public/ exactly (case-sensitive on Vercel)
const fleet = [
  { title: 'Business Class Sedan', local: '/fleet-business-sedan.png', fallback: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80' },
  { title: 'Business Class SUV', local: '/fleet-business-suv.png', fallback: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80' },
  { title: 'First Class SUV', local: '/fleet-first-suv.png', fallback: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80' },
  { title: 'First Class Sedan', local: '/fleet-first-sedan.png', fallback: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80' },
];

// Hero image in public/hero.jpg (simple name — works reliably on Vercel)
const HERO_IMAGE = '/hero.jpg';

const testimonials = [
  {
    quote: 'Impeccable service every time. The team is professional, discreet, and the vehicles are always spotless.',
    author: 'James R.',
    role: 'Corporate Executive',
  },
  {
    quote: 'Used them for our wedding. On time, elegant, and stress-free. Could not recommend more.',
    author: 'Sarah & Michael',
    role: 'Wedding Clients',
  },
  {
    quote: 'Best airport transfer I\'ve had in NYC. Flight was delayed—they tracked it and were there when I landed.',
    author: 'David L.',
    role: 'Frequent Traveler',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-brand-black text-brand-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Executive black luxury sedan for chauffeur service"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-brand-black" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            NYC&apos;s Premier Chauffeur Service: Luxury, Reliability, Discretion
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brand-silver max-w-2xl mx-auto">
            Experience white-glove transportation across New York City and beyond. Professional drivers, premium vehicles, and seamless service.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 lg:py-24 bg-brand-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black text-center mb-4">
            Our Services
          </h2>
          <p className="text-brand-grey text-center max-w-2xl mx-auto mb-12">
            From point-to-point transfers to airport pickups and corporate travel, we deliver excellence at every turn.
          </p>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block bg-brand-offwhite border border-brand-light overflow-hidden hover:border-brand-dark transition-colors"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-brand-black group-hover:underline">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-brand-grey text-sm">{s.description}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-brand-black">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="font-medium text-brand-black hover:underline">
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-16 lg:py-24 bg-brand-offwhite" aria-labelledby="fleet-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="fleet-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black text-center mb-4">
            Our Fleet
          </h2>
          <p className="text-brand-grey text-center max-w-2xl mx-auto mb-12">
            Choose from Business Class or First Class—sedans and SUVs built for comfort and professionalism.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {fleet.map((v) => (
              <Link
                key={v.title}
                href="/fleet"
                className="group block bg-brand-white border border-brand-light overflow-hidden hover:border-brand-dark transition-colors"
              >
                <div className="aspect-[4/3] relative">
                  <SafeFleetImage
                    localSrc={v.local}
                    fallbackSrc={v.fallback}
                    alt={v.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-serif text-lg font-semibold text-brand-black group-hover:underline">
                    {v.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/fleet" className="font-medium text-brand-black hover:underline">
              View full fleet
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-brand-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="testimonials-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="bg-brand-offwhite p-8 border border-brand-light">
                <p className="text-brand-dark italic">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4">
                  <cite className="not-italic font-semibold text-brand-black">{t.author}</cite>
                  <span className="text-brand-grey text-sm block">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Ready to Book?
          </h2>
          <p className="text-brand-silver mb-8">
            Get a transparent quote in seconds. Available 24/7 for New York City and area airports.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
          >
            Book Now
          </Link>
          <div className="mt-12 pt-12 border-t border-brand-dark flex flex-wrap justify-center gap-x-8 gap-y-2 text-brand-silver text-sm">
            <a href={`tel:${CONTACT_PHONE_E164}`}>{CONTACT_PHONE_DISPLAY}</a>
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`}>{CONTACT_EMAIL_BOOKINGS}</a>
          </div>
        </div>
      </section>
    </>
  );
}
