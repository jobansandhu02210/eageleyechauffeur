import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog | Eagle Eye Chauffeur — NYC Travel & Transportation Tips',
  },
  description:
    'Expert guides, tips, and insights about NYC chauffeur services, airport transfers, luxury travel, and transportation across New York City and the tri-state area.',
  keywords: [...siteKeywords, 'NYC chauffeur blog', 'airport transfer tips', 'NYC travel guide', 'car service NYC blog'],
  alternates: { canonical: `${getSiteUrl()}/blog` },
  openGraph: {
    url: `${getSiteUrl()}/blog`,
    title: 'Blog | Eagle Eye Chauffeur — NYC Travel & Transportation Tips',
    description:
      'Expert guides, tips, and insights about NYC chauffeur services, airport transfers, luxury travel, and transportation across New York City and the tri-state area.',
  },
};

export default function BlogIndexPage() {
  return (
    <div className="bg-brand-offwhite">
      {/* Hero */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white">
            Eagle Eye Blog
          </h1>
          <p className="mt-4 text-brand-silver max-w-2xl mx-auto">
            Expert travel tips, NYC transportation guides, insider insights, and everything you need to know about navigating New York City in style.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-brand-white border border-brand-light hover:border-brand-black transition-colors flex flex-col overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden bg-brand-light">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-brand-silver mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-lg font-semibold text-brand-black mb-2 group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-brand-grey text-sm leading-relaxed flex-1">
                    {post.description}
                  </p>
                  <span className="mt-4 text-sm font-medium text-brand-black group-hover:underline inline-flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-white border-y border-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
            Ready to Ride with Eagle Eye?
          </h2>
          <p className="text-brand-grey mb-8">
            Experience the difference professional chauffeur service makes. Get a quote in seconds.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
