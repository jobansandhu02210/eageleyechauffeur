'use client';

import Link from 'next/link';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

/**
 * Sticky bottom bar shown on mobile/tablet only.
 * Gives users instant access to call or book without scrolling.
 */
export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-brand-white border-t border-brand-light shadow-lg">
      <div className="flex">
        <a
          href={`tel:${CONTACT_PHONE_E164}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium text-brand-black hover:bg-brand-offwhite transition-colors"
          aria-label={`Call ${CONTACT_PHONE_DISPLAY}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
        <div className="w-px bg-brand-light" />
        <Link
          href="/book"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-black text-brand-white text-sm font-medium hover:bg-brand-charcoal transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book Now
        </Link>
      </div>
    </div>
  );
}
