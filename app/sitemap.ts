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

  const areaPages: MetadataRoute.Sitemap = [
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
  ];

  return [...pages, ...servicePages, ...areaPages];
}
