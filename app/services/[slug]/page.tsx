import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ServiceJsonLd } from '@/components/JsonLd';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';

type ServiceEntry = {
  title: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  content: { heading: string; body: string }[];
};

const services: Record<string, ServiceEntry> = {
  'point-to-point': {
    title: 'Point-to-Point Transfers',
    description: 'Direct, luxurious transportation within NYC and surrounding areas.',
    metaDescription:
      'Premium point-to-point chauffeur service in NYC. Door-to-door black car transfers in Manhattan, Brooklyn, Queens, and the tri-state. Quote & book Eagle Eye Chauffeur.',
    keywords: [
      'point to point chauffeur NYC',
      'door to door black car Manhattan',
      'NYC private car transfer',
      'fixed rate chauffeur New York',
      'borough to borough car service',
    ],
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&q=80',
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
    description: 'Flexible hourly hire for business meetings, events, or leisurely tours.',
    metaDescription:
      'Hourly chauffeur and black car in NYC: meetings, roadshows, shopping, and city tours. Driver stays with you — book Eagle Eye Chauffeur.',
    keywords: [
      'hourly chauffeur NYC',
      'chauffeur by the hour Manhattan',
      'NYC black car hourly',
      'executive day driver New York',
      'roadshow chauffeur NYC',
    ],
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80',
    content: [
      {
        heading: 'Flexibility When You Need It',
        body: 'Need a driver for a few hours of meetings, a half-day of errands, or a full-day tour? Our hourly service lets you book minimum blocks (typically 2–4 hours) with the option to extend. The car and chauffeur stay with you—no rebooking between stops.',
      },
      {
        heading: 'Business and Pleasure',
        body: 'Ideal for executive travel, client visits, site tours, and city sightseeing. Your chauffeur will wait at each stop and be ready when you are.',
      },
      {
        heading: 'Simple Billing',
        body: 'Clear hourly rates with a minimum. Overtime is prorated so you only pay for what you use. Fuel and gratuity can be included—ask when you book.',
      },
    ],
  },
  airport: {
    title: 'Airport Transfers',
    description: 'JFK, LGA, EWR, HPN. Meet-and-greet and real-time flight tracking.',
    metaDescription:
      'NYC airport car service: JFK, LGA, EWR, HPN. Meet-and-greet, flight tracking, sedans & SUVs. Book Eagle Eye Chauffeur airport transfers.',
    keywords: [
      'JFK car service Manhattan',
      'LaGuardia black car',
      'EWR airport transfer NYC',
      'HPN Westchester car service',
      'NYC airport meet and greet',
      'private airport pickup New York',
    ],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80',
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
    description: 'Tailored services for executives, roadshows, and corporate events.',
    metaDescription:
      'NYC corporate car service: executives, roadshows, investor visits, and events. Invoicing, discretion, and consistent chauffeurs — Eagle Eye Chauffeur.',
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
    description: 'Weddings, proms, concerts, and other special occasions.',
    metaDescription:
      'NYC wedding and event chauffeur: proms, galas, concerts, and celebrations. Luxury sedans, SUVs & Sprinters — Eagle Eye Chauffeur.',
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
  const ogTitle = `${s.title} | Eagle Eye Chauffeur`;
  return {
    title: s.title,
    description: s.metaDescription,
    keywords: [...siteKeywords, ...s.keywords],
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: ogTitle,
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
      title: ogTitle,
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
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Get a Quote
            </Link>
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
