import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  const site = getSiteUrl();
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/',
          '/api/',
          '/invoice',
          '/invoice/',
          '/tip',
          '/tip/',
          '/go',
          '/go/',
        ],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
  };
}
