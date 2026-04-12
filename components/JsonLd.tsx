import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_E164 } from '@/lib/contact';
import { getSiteUrl } from '@/lib/site';

/**
 * JSON-LD structured data for local business and service offerings.
 * Renders in head for SEO / rich results.
 */
export function LocalBusinessJsonLd() {
  const site = getSiteUrl();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Eagle Eye Chauffeur',
    description:
      'Eagle Eye Chauffeur provides luxury black car and chauffeur service in New York City: JFK, LGA, EWR, and HPN airport transfers, Manhattan and boroughs, hourly hire, corporate travel, and point-to-point rides. Professional, discreet, and reliable.',
    url: site,
    telephone: CONTACT_PHONE_E164,
    email: CONTACT_EMAIL_BOOKINGS,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: '$$$',
    image: `${site}/og-image.jpg`,
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  areaServed = 'New York, NY',
}: {
  name: string;
  description: string;
  areaServed?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Eagle Eye Chauffeur',
    },
    areaServed: {
      '@type': 'City',
      name: areaServed,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
