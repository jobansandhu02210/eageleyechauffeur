import type { Metadata } from 'next';
import Link from 'next/link';
import { SafeFleetImage } from '@/components/SafeFleetImage';
import { getSiteUrl } from '@/lib/site';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export const metadata: Metadata = {
  title: {
    absolute:
      'NYC Luxury Fleet | Business & First Class Sedans & SUVs | Eagle Eye Chauffeur',
  },
  description:
    "Eagle Eye Chauffeur's luxury fleet — Business Class Volvo Sedan, Chevrolet Suburban, First Class Cadillac Escalade & Mercedes-Benz S-Class. Professional chauffeurs. Book NYC's finest black car service.",
  alternates: { canonical: `${getSiteUrl()}/fleet` },
  openGraph: {
    url: `${getSiteUrl()}/fleet`,
    title:
      'NYC Luxury Fleet | Business & First Class Sedans & SUVs | Eagle Eye Chauffeur',
    description:
      "Eagle Eye Chauffeur's luxury fleet — Business Class Volvo Sedan, Chevrolet Suburban, First Class Cadillac Escalade & Mercedes-Benz S-Class. Professional chauffeurs. Book NYC's finest black car service.",
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
    description:
      'Our Volvo sedan delivers understated luxury and reliability. Ideal for business travel and point-to-point transfers—discreet, comfortable, and professional.',
    bestFor: 'Corporate airport transfers, solo executive travel',
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
    description:
      'The Chevrolet Suburban offers extra space and presence for executives and small groups. Perfect for airport runs and corporate travel.',
    bestFor: 'Group airport runs, family transfers, corporate groups',
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
    description:
      'The Cadillac Escalade defines first-class SUV travel. Sophisticated, spacious, and built for executives who expect the best.',
    bestFor: 'High-profile arrivals, VIP group travel, executive presence',
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
    description:
      'The Mercedes-Benz S-Class sets the standard for luxury sedans. Maximum comfort and refinement for high-profile and corporate travel.',
    bestFor: 'C-suite travel, roadshows, VIP client transport',
  },
];

const selectionGuide = [
  {
    title: 'Solo Executive or Couple',
    recommendation: 'Business Class Sedan',
    vehicle: 'Volvo Sedan',
    icon: '👤',
    forList: [
      'Corporate rides & airport transfers',
      '1–2 passengers',
      'Up to 3 bags',
      'Discreet, professional service',
    ],
  },
  {
    title: 'Small Group or Family',
    recommendation: 'Business Class SUV',
    vehicle: 'Chevrolet Suburban',
    icon: '👨‍👩‍👧‍👦',
    forList: [
      '3–6 passengers',
      'Large luggage loads',
      'Group airport runs',
      'Spacious & comfortable',
    ],
  },
  {
    title: 'VIP Group Travel',
    recommendation: 'First Class SUV',
    vehicle: 'Cadillac Escalade',
    icon: '⭐',
    forList: [
      'Executive presence required',
      '3–6 passengers',
      'High-profile arrivals',
      'Premium SUV experience',
    ],
  },
  {
    title: 'Maximum Luxury, Solo or Couple',
    recommendation: 'First Class Sedan',
    vehicle: 'Mercedes-Benz S-Class',
    icon: '💎',
    forList: [
      'C-suite & executive travel',
      'Roadshows & investor meetings',
      'VIP client transport',
      'Finest sedan available',
    ],
  },
];

const standardAmenities = [
  'TLC-licensed & commercially insured',
  'Professionally cleaned before every trip',
  'Climate-controlled interior',
  'USB charging ports',
  'Wi-Fi available on request',
  'Bottled water provided',
  'Complimentary luggage assistance',
];

const faqs = [
  {
    question: 'What is the difference between Business Class and First Class?',
    answer:
      'Business Class delivers professional luxury comfort at a high standard — ideal for corporate travel and airport transfers. First Class adds premium vehicle brands (Mercedes-Benz S-Class, Cadillac Escalade) and an elevated interior quality for VIP and executive clients who require the very best.',
  },
  {
    question: 'How many passengers fit in each vehicle?',
    answer:
      'Sedans comfortably hold up to 3 passengers with 3 bags. SUVs accommodate 5 to 7 passengers with 5 or more bags. If you have an unusually large group or oversized luggage, contact us before booking and we will advise the right vehicle.',
  },
  {
    question: 'Can I request a specific vehicle?',
    answer:
      'Yes. You select your vehicle class when booking. Subject to availability — we recommend booking at least 24 hours in advance to guarantee your preferred class, especially for airport pickups and special events.',
  },
  {
    question: 'Are your vehicles available 24/7?',
    answer:
      'Yes. All vehicle classes are available around the clock, 365 days a year — including early morning airport runs, late-night pickups, and holiday travel. Our dispatch team monitors every trip in real time.',
  },
  {
    question: 'Do your vehicles have car seats for children?',
    answer:
      'Yes. Simply request a child seat when booking and it will be provided at no extra charge. We want every passenger — regardless of age — to travel safely and comfortably.',
  },
];

export default function FleetPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Fleet', url: `${getSiteUrl()}/fleet` },
        ]}
      />

      {/* ── HERO ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-4">
            Our Fleet
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-white leading-tight max-w-3xl">
            Luxury Fleet — Business &amp; First Class Vehicles
          </h1>
          <p className="mt-6 text-lg text-brand-silver max-w-2xl leading-relaxed">
            Every Eagle Eye vehicle is professionally maintained, TLC-compliant, and paired
            with a trained chauffeur. Choose the right class for your trip.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-silver transition-colors"
            >
              Book Now
            </Link>
            <a
              href="#fleet"
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-white/30 text-brand-white font-medium hover:border-brand-white/70 transition-colors"
            >
              View Vehicles
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-white/10">
            {[
              { stat: '4 Vehicle Classes', sub: 'Sedan & SUV options' },
              { stat: 'Spotless & Inspected', sub: 'Before every trip' },
              { stat: 'TLC Compliant', sub: 'Fully licensed & insured' },
              { stat: 'Professional Chauffeurs', sub: 'Trained & vetted drivers' },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-brand-black px-6 py-8 text-center"
              >
                <p className="font-serif text-xl font-semibold text-brand-white">
                  {item.stat}
                </p>
                <p className="mt-1 text-sm text-brand-silver">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTION GUIDE ── */}
      <section className="bg-brand-offwhite py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-3">
              Vehicle Guide
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-black">
              How to Choose Your Vehicle Class
            </h2>
            <p className="mt-4 text-brand-grey text-lg">
              Not sure which vehicle fits your trip? Use this quick guide to match your
              passenger count, luggage, and occasion to the right class.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {selectionGuide.map((card) => (
              <div
                key={card.title}
                className="bg-brand-white border border-brand-light p-8 flex flex-col"
              >
                <span className="text-3xl mb-4" aria-hidden="true">
                  {card.icon}
                </span>
                <h3 className="font-serif text-xl font-semibold text-brand-black">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-brand-silver uppercase tracking-wide">
                  Recommended:{' '}
                  <span className="text-brand-black normal-case tracking-normal font-semibold">
                    {card.recommendation}
                  </span>
                </p>
                <p className="mt-0.5 text-sm text-brand-grey">{card.vehicle}</p>
                <ul className="mt-5 space-y-2">
                  {card.forList.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-brand-grey">
                      <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className="mt-6 text-sm font-medium text-brand-black underline underline-offset-4 hover:text-brand-charcoal transition-colors self-start"
                >
                  Book this class →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET GALLERY ── */}
      <section id="fleet" className="bg-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-3">
              The Fleet
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-black">
              Choose Your Ride
            </h2>
            <p className="mt-4 text-brand-grey text-lg">
              Four distinct vehicle classes — all maintained to an uncompromising standard
              and driven by Eagle Eye&apos;s professional chauffeurs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {vehicles.map((v, i) => (
              <article
                key={i}
                className="bg-brand-white border border-brand-light overflow-hidden flex flex-col hover:border-brand-dark transition-colors"
              >
                <div className="aspect-[16/10] relative">
                  <SafeFleetImage
                    localSrc={v.local}
                    fallbackSrc={v.fallback}
                    alt={`${v.name} — ${v.subtitle} | Eagle Eye Chauffeur NYC`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-black/80 text-brand-white text-xs font-medium px-3 py-1 uppercase tracking-wide">
                    {v.category}
                  </div>
                </div>

                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <h2 className="font-serif text-2xl font-semibold text-brand-black">
                    {v.name}
                  </h2>
                  <p className="mt-1 text-brand-grey font-medium">{v.subtitle}</p>
                  <p className="mt-3 text-brand-grey leading-relaxed">{v.description}</p>

                  {/* Capacity & luggage */}
                  <dl className="mt-5 flex gap-8 text-sm border-t border-brand-light pt-5">
                    <div>
                      <dt className="text-brand-silver mb-0.5">Capacity</dt>
                      <dd className="font-semibold text-brand-black">{v.capacity}</dd>
                    </div>
                    <div>
                      <dt className="text-brand-silver mb-0.5">Luggage</dt>
                      <dd className="font-semibold text-brand-black">{v.luggage}</dd>
                    </div>
                  </dl>

                  {/* Feature tags */}
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {v.features.map((f, j) => (
                      <li
                        key={j}
                        className="bg-brand-offwhite text-brand-black text-xs px-3 py-1.5 font-medium"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Best for */}
                  <p className="mt-5 text-sm text-brand-grey">
                    <span className="font-semibold text-brand-black">Best for: </span>
                    {v.bestFor}
                  </p>

                  <Link
                    href="/book"
                    className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-brand-black text-brand-white text-sm font-medium hover:bg-brand-charcoal transition-colors self-start"
                  >
                    Choose This Vehicle
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STANDARD AMENITIES ── */}
      <section className="bg-brand-offwhite py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-3">
              Every Vehicle
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-black">
              Standard Across Our Entire Fleet
            </h2>
            <p className="mt-4 text-brand-grey text-lg">
              Regardless of which class you choose, these amenities and standards come
              with every Eagle Eye booking — no exceptions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {standardAmenities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-brand-white border border-brand-light px-6 py-5"
              >
                <span className="text-brand-black font-bold text-lg shrink-0 mt-0.5" aria-hidden="true">
                  ✓
                </span>
                <p className="text-brand-black font-medium">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-brand-grey max-w-xl">
            All Eagle Eye vehicles are TLC-licensed and commercially insured in accordance
            with New York City regulations. Our chauffeurs hold valid TLC licenses and
            undergo ongoing training.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-black">
              Fleet Questions Answered
            </h2>
            <p className="mt-4 text-brand-grey text-lg">
              Common questions about our vehicles, classes, and booking process.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-brand-light bg-brand-white p-7"
              >
                <h3 className="font-serif text-lg font-semibold text-brand-black">
                  {faq.question}
                </h3>
                <p className="mt-3 text-brand-grey leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-brand-grey text-sm max-w-xl">
            Have a question not covered here?{' '}
            <Link
              href="/contact"
              className="text-brand-black font-medium underline underline-offset-4 hover:text-brand-charcoal transition-colors"
            >
              Contact our team
            </Link>{' '}
            or reach us directly on WhatsApp — we respond promptly.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-4">
            Ready to Ride
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-brand-white">
            Ready to Choose Your Vehicle?
          </h2>
          <p className="mt-5 text-lg text-brand-silver max-w-xl mx-auto">
            Book online in minutes or reach us on WhatsApp. Our team is available
            around the clock.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-silver transition-colors w-full sm:w-auto"
            >
              Book Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-white/30 text-brand-white font-medium hover:border-brand-white/70 transition-colors w-full sm:w-auto"
            >
              WhatsApp Us
            </a>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-white/30 text-brand-white font-medium hover:border-brand-white/70 transition-colors w-full sm:w-auto"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
