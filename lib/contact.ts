/** E.164 for tel: links */
export const CONTACT_PHONE_E164 = '+19299196499';

/** Human-readable US format */
export const CONTACT_PHONE_DISPLAY = '(929) 919-6499';

/** Booking notifications and primary inquiries */
export const CONTACT_EMAIL_BOOKINGS = 'eagleeyechauffeur@gmail.com';

/** WhatsApp number (E.164 without +) for wa.me links */
export const CONTACT_WHATSAPP_NUMBER = '19299196499';

/** Pre-filled WhatsApp booking message with a form template */
export const WHATSAPP_BOOKING_URL =
  `https://wa.me/19299196499?text=${encodeURIComponent(
    'Hi Eagle Eye Chauffeur! I\'d like to book a ride.\n\n' +
    '📅 Date:\n' +
    '⏰ Pick-up Time:\n' +
    '📍 Pick-up Address:\n' +
    '📍 Drop-off Address:\n' +
    '✈️ Flight Number (if airport):\n' +
    '👤 Full Name:\n' +
    '📱 Phone:\n' +
    '🚗 Vehicle (Business/First Class):\n' +
    '📝 Special Requests:'
  )}`;

/** Short WhatsApp URL for general inquiries */
export const WHATSAPP_URL = 'https://wa.me/19299196499';
