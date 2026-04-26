import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

const base = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [
    'point-to-point',
    'hourly',
    'airport',
    'corporate',
    'special-events',
  ];

  const pages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/fleet`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/book`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const airportPages: MetadataRoute.Sitemap = [
    { url: `${base}/services/airport/jfk`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/airport/lga`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/airport/ewr`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/airport/hpn`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];

  const areaPages: MetadataRoute.Sitemap = [
    { url: `${base}/services/areas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    // Boroughs
    { url: `${base}/services/areas/manhattan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/brooklyn`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/queens`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/bronx`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/staten-island`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Airports
    { url: `${base}/services/areas/jfk-airport`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/areas/lga-airport`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/areas/ewr-airport`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/areas/hpn-airport`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    // Regions
    { url: `${base}/services/areas/westchester`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/long-island`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/new-jersey`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // New areas
    { url: `${base}/services/areas/hamptons`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/nassau-county`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/suffolk-county`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/connecticut`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/upstate-ny`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  const routePages: MetadataRoute.Sitemap = [
    { url: `${base}/services/routes/manhattan-to-brooklyn`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/routes/jfk-to-manhattan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/jfk-to-brooklyn`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
  ];

  return [...pages, ...servicePages, ...airportPages, ...areaPages, ...routePages];
}
