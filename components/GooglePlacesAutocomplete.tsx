'use client';

import { useEffect, useRef, useState } from 'react';

const SCRIPT_ID = 'google-maps-js';

const GOOGLE_MAPS_AUTH_FAILURE = 'google-maps-auth-failure';

function installGmAuthFailureListener(): void {
  const w = window as Window & {
    __eecGmAuthFailureHook?: boolean;
    gm_authFailure?: () => void;
  };
  if (w.__eecGmAuthFailureHook) return;
  w.__eecGmAuthFailureHook = true;
  const previous = w.gm_authFailure;
  w.gm_authFailure = function gmAuthFailure() {
    previous?.();
    window.dispatchEvent(new CustomEvent(GOOGLE_MAPS_AUTH_FAILURE));
  };
}

function loadMapsScript(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  const w = window as Window & { google?: { maps?: { places?: unknown } } };
  if (w.google?.maps?.places) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Google Maps script failed')), { once: true });
      return;
    }
    installGmAuthFailureListener();
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places&v=weekly`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Google Maps script failed'));
    document.head.appendChild(script);
  });
}

type Props = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function GooglePlacesAutocomplete({ id, label, value, onChange, placeholder }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!apiKey) return;
    const onAuthFailure = () => {
      setLoadError(
        'Google rejected this request (check billing, enabled APIs, and HTTP referrer restrictions for your API key — see GOOGLE-APIS.md).'
      );
      console.error(
        '[Google Maps] Auth failure. Typical fixes: (1) Billing linked to the same project as the key. (2) Enable Maps JavaScript API + Places API. (3) Under key restrictions → HTTP referrers, add your exact origin e.g. https://www.yourdomain.com/* and http://localhost:3002/* if you use port 3002.'
      );
    };
    window.addEventListener(GOOGLE_MAPS_AUTH_FAILURE, onAuthFailure);
    return () => window.removeEventListener(GOOGLE_MAPS_AUTH_FAILURE, onAuthFailure);
  }, [apiKey]);

  // Google's Autocomplete mutates the input; a fully controlled React value can fight it and break typing.
  useEffect(() => {
    const el = inputRef.current;
    if (!apiKey || !el) return;
    if (el.value !== value) el.value = value;
  }, [apiKey, value]);

  useEffect(() => {
    if (!apiKey || !inputRef.current) return;

    let listener: unknown;
    setLoadError(null);

    loadMapsScript(apiKey)
      .then(() => {
        const w = window as Window & {
          google?: {
            maps: {
              event: { removeListener: (l: unknown) => void };
              places: {
                Autocomplete: new (el: HTMLInputElement, opts?: object) => {
                  addListener: (ev: string, fn: () => void) => unknown;
                  getPlace: () => { formatted_address?: string; name?: string };
                };
              };
            };
          };
        };
        const g = w.google;
        if (!g?.maps?.places || !inputRef.current) return;

        const Autocomplete = g.maps.places.Autocomplete;
        const ac = new Autocomplete(inputRef.current, {
          componentRestrictions: { country: ['us'] },
          fields: ['formatted_address', 'name'],
        });

        listener = ac.addListener('place_changed', () => {
          const place = ac.getPlace();
          const addr = place.formatted_address || place.name || '';
          if (addr) onChangeRef.current(addr);
        });
      })
      .catch((err) => {
        const msg = err instanceof Error ? err.message : 'Google Places failed to load';
        console.error('[GooglePlacesAutocomplete]', err);
        setLoadError(msg);
      });

    return () => {
      const w = window as Window & { google?: { maps?: { event?: { removeListener: (l: unknown) => void } } } };
      if (listener && w.google?.maps?.event) {
        w.google.maps.event.removeListener(listener);
      }
    };
  }, [apiKey, id]);

  if (!apiKey) {
    return (
      <>
        <label htmlFor={id} className="block text-sm font-medium text-brand-black mb-2">
          {label}
        </label>
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black"
        />
      </>
    );
  }

  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium text-brand-black mb-2">
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        type="text"
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black"
      />
      {loadError && <p className="mt-1 text-xs text-red-600">{loadError}</p>}
    </>
  );
}
