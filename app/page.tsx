import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SafeFleetImage } from '@/components/SafeFleetImage';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
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

const trustFeatures = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: 'Licensed & Insured',
    desc: 'Fully licensed black car operator with comprehensive commercial insurance for every ride.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '24/7 Availability',
    desc: 'Early morning flights, late-night arrivals — we operate around the clock, every day of the year.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: 'Real-Time Flight Tracking',
    desc: 'We monitor your flight live. Delays, early arrivals — your driver adapts. No extra charges for tracked delays.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Professional Drivers',
    desc: 'Background-checked, professionally trained chauffeurs who prioritize your comfort and discretion.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Meet & Greet Service',
    desc: 'Your driver meets you at arrivals with a name sign, ready to assist with luggage from the first moment.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Transparent Pricing',
    desc: 'No surge pricing, no hidden fees. Get an upfront estimate online and a formal invoice before you pay.',
  },
];

const faqs = [
  {
    q: 'Do you track flights?',
    a: 'Yes — we monitor your flight in real time. If it arrives early or is delayed, your driver adjusts at no extra charge. You will never be left waiting.',
  },
  {
    q: 'Which airports do you serve?',
    a: 'We serve JFK (John F. Kennedy), LGA (LaGuardia), EWR (Newark Liberty), and HPN (Westchester County Airport). Private terminals and Teterboro (TEB) available on request.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'We recommend at least 24 hours for standard rides. For corporate events, weddings, or group travel, 48–72 hours is preferred. Last-minute bookings are accepted based on availability — call us directly for urgent requests.',
  },
  {
    q: 'What if my flight is delayed?',
    a: 'No extra charge. Because we track every flight live, your driver will always be there when you land — not when you were originally scheduled to land.',
  },
  {
    q: 'Do you serve areas outside Manhattan?',
    a: 'Absolutely. We cover all five boroughs, Long Island, Westchester, New Jersey, and Connecticut. If you are unsure, just ask — we likely serve your area.',
  },
  {
    q: 'Is the quoted price all-inclusive?',
    a: 'Our estimates include base fare and tolls. Gratuity is optional and appreciated. No surprise surcharges — your invoice will clearly show the final price before you pay.',
  },
];

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
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </a>
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

      {/* Why Eagle Eye — trust section */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="trust-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white text-center mb-4">
            Why Eagle Eye Chauffeur?
          </h2>
          <p className="text-brand-silver text-center max-w-2xl mx-auto mb-12">
            We set the standard for luxury ground transportation in New York City.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFeatures.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 mt-1 text-brand-silver">{f.icon}</div>
                <div>
                  <h3 className="font-semibold text-brand-white mb-1">{f.title}</h3>
                  <p className="text-brand-silver text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
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
                <div className="flex gap-1 mb-3" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
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

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-brand-offwhite" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black text-center mb-12">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-brand-white border border-brand-light p-6">
                <dt className="font-semibold text-brand-black mb-2">{faq.q}</dt>
                <dd className="text-brand-grey text-sm leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </a>
          </div>
          <div className="mt-12 pt-12 border-t border-brand-dark flex flex-wrap justify-center gap-x-8 gap-y-2 text-brand-silver text-sm">
            <a href={`tel:${CONTACT_PHONE_E164}`}>{CONTACT_PHONE_DISPLAY}</a>
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`}>{CONTACT_EMAIL_BOOKINGS}</a>
          </div>
        </div>
      </section>
    </>
  );
}
