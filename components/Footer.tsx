import Link from 'next/link';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

const services = [
  { href: '/services/point-to-point', label: 'Point-to-Point' },
  { href: '/services/hourly', label: 'Hourly Service' },
  { href: '/services/airport', label: 'Airport Transfers' },
  { href: '/services/corporate', label: 'Corporate Travel' },
  { href: '/services/special-events', label: 'Special Events' },
];

const company = [
  { href: '/fleet', label: 'Our Fleet' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/book', label: 'Book Now' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-semibold text-brand-white tracking-tight">
              Eagle Eye Chauffeur
            </Link>
            <p className="mt-4 text-brand-silver text-sm max-w-xs">
              NYC&apos;s premier luxury chauffeur service. Professional, discreet, and reliable.
            </p>
          </div>

          <div>
            <h3 className="text-brand-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-brand-silver hover:text-brand-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-brand-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-brand-silver hover:text-brand-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-brand-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-brand-silver text-sm">
              <li>
                <a href={`tel:${CONTACT_PHONE_E164}`} className="hover:text-brand-white transition-colors">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="hover:text-brand-white transition-colors">
                  {CONTACT_EMAIL_BOOKINGS}
                </a>
              </li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-dark flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-brand-silver text-sm">
            © {new Date().getFullYear()} Eagle Eye Chauffeur. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/contact" className="text-brand-silver hover:text-brand-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-brand-silver hover:text-brand-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
