import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';
import { blogPosts } from '@/lib/blog-data';
import { getAllHamptonsRouteSlugs } from '@/lib/hamptons-routes-data';

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
    { url: `${base}/black-car-service-nyc`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/fleet`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/book`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/sitemap`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/services/wedding`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/corporate-roadshow`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/world-cup-2026`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/world-cup-2026/final`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/world-cup-2026/manhattan-to-metlife`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/world-cup-2026/newark-to-metlife`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/world-cup-2026/jfk-to-metlife`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/world-cup-2026/lga-to-metlife`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/world-cup-2026/long-island-to-metlife`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/world-cup-2026/nyc-hotel-to-metlife`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/referrals`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
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
    { url: `${base}/services/areas/manhattan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/brooklyn`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/queens`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/bronx`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/staten-island`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/jfk-airport`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/areas/lga-airport`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/areas/ewr-airport`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/areas/hpn-airport`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/westchester`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/long-island`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/new-jersey`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/hamptons`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/nassau-county`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/suffolk-county`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/connecticut`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/upstate-ny`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    // Manhattan neighborhood pages
    { url: `${base}/services/areas/midtown-manhattan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/financial-district`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/soho`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/tribeca`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/upper-east-side`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/upper-west-side`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/chelsea`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/hells-kitchen`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/greenwich-village`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/flatiron`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/battery-park-city`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/lower-manhattan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/gramercy-park`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/harlem`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // New Jersey city pages
    { url: `${base}/services/areas/hoboken`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/jersey-city`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/newark-nj`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/princeton-nj`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/morristown-nj`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/short-hills-nj`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/summit-nj`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Westchester city pages
    { url: `${base}/services/areas/white-plains`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/yonkers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/scarsdale`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/new-rochelle`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Connecticut city pages
    { url: `${base}/services/areas/greenwich-ct`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/stamford-ct`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/norwalk-ct`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Nassau County city pages
    { url: `${base}/services/areas/garden-city`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/great-neck`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/new-hyde-park`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/mineola`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/manhasset`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/long-beach`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/valley-stream`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/rockville-centre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/port-washington`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/roslyn`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/hicksville`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/westbury`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/hempstead`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/levittown`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/massapequa`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/freeport`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/elmont`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/floral-park`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    // Suffolk County city pages
    { url: `${base}/services/areas/huntington`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/babylon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/bay-shore`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/smithtown`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/hampton-bays`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/westhampton-beach`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/patchogue`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/ronkonkoma`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/hauppauge`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/commack`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  const routePages: MetadataRoute.Sitemap = [
    { url: `${base}/services/routes`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/routes/manhattan-to-brooklyn`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/routes/jfk-to-brooklyn`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/jfk-to-manhattan-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/manhattan-to-jfk-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/lga-to-manhattan-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/manhattan-to-lga-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/ewr-to-manhattan-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/manhattan-to-ewr-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/brooklyn-to-jfk-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/midtown-to-jfk-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/upper-east-side-to-jfk-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    // New high-value routes
    { url: `${base}/services/routes/lga-to-brooklyn-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/ewr-to-brooklyn-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/jfk-to-queens-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/manhattan-to-hamptons-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/nyc-to-westchester-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/jfk-to-westchester-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/brooklyn-to-manhattan-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    // New borough & long-distance routes
    { url: `${base}/services/routes/queens-to-jfk-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/queens-to-lga-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/bronx-to-jfk-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/staten-island-to-jfk-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/staten-island-to-manhattan-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/jfk-to-long-island-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/manhattan-to-connecticut-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/lga-to-queens-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/ewr-to-long-island-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/jfk-to-midtown-manhattan-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/jfk-to-upper-east-side-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    // New borough & airport routes
    { url: `${base}/services/routes/bronx-to-manhattan-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/queens-to-manhattan-black-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/lga-to-long-island-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/lga-to-westchester-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/ewr-to-queens-car-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/nyc-to-boston`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/nyc-to-philadelphia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/nyc-to-washington-dc`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];

  const highValueBlogSlugs = new Set([
    'jfk-to-manhattan-best-car-service-airport-transfer',
    'complete-guide-nyc-airport-transfers-jfk-lga-ewr-hpn',
    'chauffeur-vs-rideshare-nyc-which-is-better',
    'nyc-corporate-car-service-executive-travel',
    'jfk-airport-pickup-meet-and-greet-service',
    'lga-car-service-best-airport-transfer-nyc',
    'newark-airport-car-service-ewr-to-manhattan',
    'nyc-chauffeur-service-cost-pricing-guide',
    'black-car-service-vs-taxi-nyc-which-is-better',
    'nyc-corporate-black-car-service-executive-guide',
  ]);

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: highValueBlogSlugs.has(post.slug) ? 0.85 : 0.7,
  }));

  const hamptonsRoutePages: MetadataRoute.Sitemap = getAllHamptonsRouteSlugs().map((slug) => ({
    url: `${base}/services/routes/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [
    ...pages,
    ...servicePages,
    ...airportPages,
    ...areaPages,
    ...routePages,
    ...hamptonsRoutePages,
    ...blogPages,
  ];
}
