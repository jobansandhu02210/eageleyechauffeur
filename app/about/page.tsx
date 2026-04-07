import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Our NYC Chauffeur Team',
  description:
    'Meet Eagle Eye Chauffeur: NYC luxury black car and chauffeur professionals committed to discretion, punctuality, and five-borough & tri-state service.',
  keywords: siteKeywords,
  alternates: { canonical: `${getSiteUrl()}/about` },
  openGraph: {
    url: `${getSiteUrl()}/about`,
    title: 'About Eagle Eye Chauffeur | NYC Luxury Chauffeur Service',
    description:
      'Professional NYC chauffeurs, local expertise, and a client-first approach. Learn why businesses and travelers choose Eagle Eye.',
  },
};

const values = [
  {
    title: 'Professionalism',
    body: 'Every chauffeur is trained in protocol, appearance, and discretion. We represent you from the moment we arrive.',
  },
  {
    title: 'Experience',
    body: 'Our team knows New York inside and out—traffic, shortcuts, and the best ways to get you there on time.',
  },
  {
    title: 'Customer First',
    body: 'Your schedule and preferences drive every trip. We adapt to you, not the other way around.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-brand-offwhite">
      <section className="relative h-[45vh] min-h-[320px] bg-brand-black">
        <Image
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80"
          alt="Professional chauffeur service"
          fill
          className="object-cover opacity-60"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-brand-black/50" />
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white">
              About Eagle Eye Chauffeur
            </h1>
            <p className="mt-2 text-brand-silver max-w-2xl">
              Our story, mission, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Our Story
          </h2>
          <p className="text-brand-grey leading-relaxed mb-6">
            Eagle Eye Chauffeur was founded on a simple idea: travel in and around New York City should be seamless, professional, and dignified. We started with a small fleet and a focus on corporate and airport clients, and we’ve grown by putting reliability and discretion first.
          </p>
          <p className="text-brand-grey leading-relaxed mb-6">
            Today we serve executives, families, and event planners across the five boroughs and beyond. Whether it’s a single point-to-point trip or a multi-day corporate program, we bring the same level of care and attention to every booking.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-brand-black mt-12 mb-6">
            Our Mission
          </h2>
          <p className="text-brand-grey leading-relaxed">
            To be NYC’s most trusted chauffeur service by delivering consistent luxury, punctuality, and discretion. We invest in our people and our vehicles so that every ride meets the high standards our clients expect.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white border-y border-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center">
                <h3 className="font-serif text-xl font-semibold text-brand-black">{v.title}</h3>
                <p className="mt-2 text-brand-grey text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
            Ready to Ride with Us?
          </h2>
          <p className="text-brand-grey mb-8">
            Get a quote or reach out with any questions. We’re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-black text-brand-black font-medium hover:bg-brand-black hover:text-brand-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
