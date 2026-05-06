'use client';

import { useState } from 'react';

export default function WorldCupLeadCapture() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim()) {
      setError('Name and email are required.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: 'World Cup 2026 Early Interest — notify me when match-day booking opens.',
          source: 'world-cup-2026-lead',
        }),
      });

      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please email us directly at eagleeyechauffeur@gmail.com.');
    }
  }

  if (submitted) {
    return (
      <section className="py-16 lg:py-24 bg-brand-black">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl font-semibold text-brand-white mb-4">You&apos;re on the List!</h2>
          <p className="text-brand-silver text-lg">
            We&apos;ll email you as soon as World Cup match-day booking opens. In the meantime, browse our <a href="/blog" className="text-brand-white underline">blog</a> for NYC travel tips.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-brand-white mb-4">
            Get Early Access — World Cup Booking Opens Soon
          </h2>
          <p className="text-brand-silver mb-8 max-w-2xl mx-auto">
            Be the first to know when World Cup 2026 match-day transportation is available. Join the waitlist and get priority booking before we open to the public.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 bg-brand-charcoal border border-brand-dark text-brand-white placeholder-brand-silver focus:outline-none focus:border-brand-white text-sm"
              required
            />
            <input
              type="email"
              placeholder="Email address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 bg-brand-charcoal border border-brand-dark text-brand-white placeholder-brand-silver focus:outline-none focus:border-brand-white text-sm"
              required
            />
          </div>
          <input
            type="tel"
            placeholder="Phone number (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 bg-brand-charcoal border border-brand-dark text-brand-white placeholder-brand-silver focus:outline-none focus:border-brand-white text-sm mb-6"
          />
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-light transition-colors text-sm"
          >
            Join the World Cup Waitlist
          </button>
          <p className="text-brand-silver text-xs mt-4 text-center">
            No spam. We&apos;ll only email you about World Cup 2026 availability.
          </p>
        </form>
      </div>
    </section>
  );
}
