'use client';

import { useState } from 'react';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const phone = String(fd.get('phone') || '').trim();
    const message = String(fd.get('message') || '').trim();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setErrorMessage(typeof data.error === 'string' ? data.error : 'Could not send message.');
        setStatus('error');
        return;
      }
      setStatus('sent');
      form.reset();
    } catch {
      setErrorMessage('Network error. Please try again or call us.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-brand-offwhite">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-brand-grey max-w-2xl">
            Have a question or need a custom quote? Reach out by phone, email, or the form below. We typically respond within a few hours.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                Get in Touch
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li>
                  <span className="text-brand-silver block text-sm font-medium">Phone</span>
                  <a href={`tel:${CONTACT_PHONE_E164}`} className="text-brand-black hover:underline">
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <span className="text-brand-silver block text-sm font-medium">Email</span>
                  <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="text-brand-black hover:underline">
                    {CONTACT_EMAIL_BOOKINGS}
                  </a>
                </li>
                <li>
                  <span className="text-brand-silver block text-sm font-medium">Address</span>
                  New York, NY
                </li>
                <li>
                  <span className="text-brand-silver block text-sm font-medium">Hours</span>
                  <span className="text-brand-black">24/7 for bookings and urgent requests</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-black mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-black mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
                    placeholder={CONTACT_PHONE_DISPLAY}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent resize-y"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent' : 'Send Message'}
                </button>
                {status === 'sent' && (
                  <p className="text-brand-grey text-sm">We’ll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-sm" role="alert">
                    {errorMessage ?? 'Something went wrong. Please try again or call us.'}
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              Find Us
            </h2>
            <div className="aspect-[21/9] min-h-[280px] bg-brand-light flex items-center justify-center text-brand-grey">
              {/* Replace with your Google Maps embed URL */}
              <iframe
                title="Office location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830883528!2d-74.11976373946234!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[280px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
