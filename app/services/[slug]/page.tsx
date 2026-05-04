import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ServiceJsonLd } from '@/components/JsonLd';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';

type ServiceEntry = {
  title: string;
  seoTitle: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  content: { heading: string; body: string }[];
};

const services: Record<string, ServiceEntry> = {
  'point-to-point': {
    title: 'Point-to-Point Transfers',
    seoTitle: 'Point-to-Point Car Service NYC | Direct Luxury Transfers',
    description: 'Direct, luxurious transportation within NYC and surrounding areas.',
    metaDescription:
      'Direct luxury point-to-point transfers in NYC. Door-to-door service across all 5 boroughs. Professional chauffeurs, transparent pricing. Book now!',
    keywords: [
      'point to point chauffeur NYC',
      'door to door black car Manhattan',
      'NYC private car transfer',
      'fixed rate chauffeur New York',
      'borough to borough car service',
    ],
    image: '/service-point-to-point.png',
    content: [
      {
        heading: 'Door-to-Door Convenience',
        body: 'Whether you need a ride from your hotel to a meeting in Midtown or from Brooklyn to Manhattan, our point-to-point service delivers you directly with no stops and no hassle. Every trip is tailored to your schedule.',
      },
      {
        heading: 'NYC and Beyond',
        body: 'We serve all five boroughs plus Westchester, Long Island, New Jersey, and Connecticut. Same premium experience whether you\'re crossing the bridge or heading to the Hamptons.',
      },
      {
        heading: 'Transparent Pricing',
        body: 'Get an instant quote when you book. No hidden fees—just a fixed price for your route so you can travel with confidence.',
      },
    ],
  },
  hourly: {
    title: 'Hourly Chauffeur Service',
    seoTitle: 'Hourly Chauffeur Service NYC | Luxury Car Hire by the Hour',
    description: 'Flexible hourly hire for business meetings, events, or leisurely tours.',
    metaDescription:
      'Hire a luxury chauffeur by the hour in NYC. Perfect for meetings, events & city tours. Flexible scheduling, premium vehicles. Book hourly service today!',
    keywords: [
      'hourly chauffeur NYC',
      'chauffeur by the hour Manhattan',
      'NYC black car hourly',
      'executive day driver New York',
      'roadshow chauffeur NYC',
    ],
    image: '/service-hourly.png',
    content: [
      {
        heading: 'Flexibility When You Need It',
        body: 'Need a driver for a few hours of meetings, a half-day of errands, or a full-day tour? Our hourly service uses a two-hour minimum with the option to extend. The car and chauffeur stay with you—no rebooking between stops.',
      },
      {
        heading: 'Business and Pleasure',
        body: 'Ideal for executive travel, client visits, site tours, and city sightseeing. Your chauffeur will wait at each stop and be ready when you are.',
      },
      {
        heading: 'Confirm when you book',
        body: 'We don’t publish hourly pricing online. When you reach out or submit a booking request, our team confirms vehicle, duration, and arrangements with you directly—clear and upfront, before you travel.',
      },
    ],
  },
  airport: {
    title: 'Airport Transfers',
    seoTitle: 'NYC Airport Transfer | JFK, LGA, EWR Luxury Car Service',
    description: 'JFK, LGA, EWR, HPN. Meet-and-greet and real-time flight tracking.',
    metaDescription:
      'Premium NYC airport transfers to JFK, LGA, EWR & HPN. Real-time flight tracking, meet & greet service. No surge pricing. Book your luxury ride now!',
    keywords: [
      'JFK car service Manhattan',
      'LaGuardia black car',
      'EWR airport transfer NYC',
      'HPN Westchester car service',
      'NYC airport meet and greet',
      'private airport pickup New York',
    ],
    image: '/service-airport.png',
    content: [
      {
        heading: 'Every Major NYC Airport',
        body: 'We provide reliable pickups and drop-offs at John F. Kennedy (JFK), LaGuardia (LGA), Newark Liberty (EWR), and Westchester County (HPN). Choose sedan, SUV, or van based on passengers and luggage.',
      },
      {
        heading: 'Meet-and-Greet Service',
        body: 'Your chauffeur will meet you in the terminal with a personalized sign, assist with luggage, and escort you to the vehicle. No waiting in line for taxis or rideshares.',
      },
      {
        heading: 'Real-Time Flight Tracking',
        body: 'We monitor your flight for delays and early arrivals. If your plane is late, we adjust—no extra charge for reasonable wait time. You\'ll receive driver and vehicle details before your trip.',
      },
    ],
  },
  corporate: {
    title: 'Corporate Travel',
    seoTitle: 'Corporate Car Service NYC | Executive Chauffeur for Business',
    description: 'Tailored services for executives, roadshows, and corporate events.',
    metaDescription:
      'Reliable corporate chauffeur service in NYC for executives & business travel. Account billing, dedicated drivers, 24/7 availability. Get a corporate quote!',
    keywords: [
      'corporate car service NYC',
      'executive transportation Manhattan',
      'business black car New York',
      'NYC roadshow transportation',
      'corporate account chauffeur',
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80',
    content: [
      {
        heading: 'Built for Business',
        body: 'From single executive transfers to multi-vehicle roadshows and event shuttles, we support corporate travel with discretion, punctuality, and a consistent premium experience. Many of our clients use us for board meetings, investor visits, and executive commutes.',
      },
      {
        heading: 'Roadshows and Events',
        body: 'We coordinate multi-stop itineraries, multi-day bookings, and group moves. Dedicated account management and invoicing available for recurring corporate clients.',
      },
      {
        heading: 'Professional Chauffeurs',
        body: 'Our drivers are trained in protocol, confidentiality, and reliability. Vehicles are kept to the highest standard—clean, comfortable, and professional.',
      },
    ],
  },
  'special-events': {
    title: 'Special Events',
    seoTitle: 'Wedding & Event Chauffeur Service NYC | Luxury Transportation',
    description: 'Weddings, proms, concerts, and other special occasions.',
    metaDescription:
      "Make your special event memorable with Eagle Eye's luxury chauffeur service. Weddings, proms, galas in NYC. Elegant vehicles, professional drivers.",
    keywords: [
      'wedding car service NYC',
      'prom chauffeur New York',
      'gala black car Manhattan',
      'concert transportation NYC',
      'special event chauffeur',
    ],
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80',
    content: [
      {
        heading: 'Your Special Day',
        body: 'Weddings, proms, anniversaries, and milestone celebrations deserve stress-free, elegant transportation. We provide coordinated arrivals and departures so you and your guests can focus on the moment.',
      },
      {
        heading: 'Concerts, Galas, and More',
        body: 'Going to a show, a gala, or a black-tie event? Arrive in style and leave without waiting for a ride. Hourly or point-to-point—we adapt to your timeline.',
      },
      {
        heading: 'Group Options',
        body: 'Larger parties can use our Sprinters and SUVs so everyone travels together. We can arrange multiple vehicles for wedding parties and events—contact us for a custom quote.',
      },
    ],
  },
};

const slugs = Object.keys(services);

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = services[params.slug];
  if (!s) return { title: 'Service' };
  const base = getSiteUrl();
  const path = `${base}/services/${params.slug}`;
  return {
    title: { absolute: s.seoTitle },
    description: s.metaDescription,
    keywords: [...siteKeywords, ...s.keywords],
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: s.seoTitle,
      description: s.metaDescription,
      images: [
        {
          url: s.image,
          width: 1200,
          height: 630,
          alt: `${s.title} — Eagle Eye Chauffeur NYC`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: s.seoTitle,
      description: s.metaDescription,
      images: [s.image],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = services[params.slug];
  if (!s) notFound();

  return (
    <>
      <ServiceJsonLd name={s.title} description={s.metaDescription} />
      <div className="bg-brand-offwhite">
        <section className="relative h-[40vh] min-h-[280px] bg-brand-black">
          <Image
            src={s.image}
            alt=""
            fill
            className="object-cover opacity-60"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-brand-black/50" />
          <div className="absolute inset-0 flex items-end pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white">
                {s.title}
              </h1>
              <p className="mt-2 text-brand-silver max-w-2xl">{s.description}</p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {s.content.map((block, i) => (
              <div key={i}>
                <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
                  {block.heading}
                </h2>
                <p className="text-brand-grey leading-relaxed">{block.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
              >
                Get a Quote
              </Link>
              {params.slug === 'hourly' && (
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-brand-black text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
                >
                  Contact us
                </Link>
              )}
            </div>
            <p className="mt-4 text-sm text-brand-grey">
              <Link href="/services" className="hover:text-brand-black underline">
                ← Back to all services
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
