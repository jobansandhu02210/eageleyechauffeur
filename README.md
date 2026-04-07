# Eagle Eye Chauffeur – NYC Premier Chauffeur Service

A modern, SEO-optimized website for a premium chauffeur service in New York City. Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Black-and-white corporate design with clear CTAs and a multi-step booking flow.

## Features

- **Homepage**: Hero, services overview, testimonials, contact CTAs
- **Services**: Index + 5 sub-pages (Point-to-Point, Hourly, Airport, Corporate, Special Events)
- **Fleet**: Luxury vehicles with descriptions, capacity, and amenities
- **Book**: Multi-step form (service, locations, date/time, vehicle, quote, payment placeholder)
- **About**: Story, mission, values
- **Contact**: Form, phone/email/hours, Google Maps embed
- **SEO**: Meta titles/descriptions, JSON-LD (LocalBusiness + Service), sitemap, robots.txt
- **Analytics**: Placeholder for Google Analytics (set `NEXT_PUBLIC_GA_ID` to enable)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command      | Description                |
|-------------|----------------------------|
| `npm run dev`   | Start dev server           |
| `npm run build` | Production build           |
| `npm run start` | Run production server     |
| `npm run lint`  | Run ESLint                 |

## Google APIs (Maps, Places, Analytics)

Step-by-step setup is in **[GOOGLE-APIS.md](./GOOGLE-APIS.md)** (Cloud Console, billing, API keys, `.env.local`).

## Customization

- **Contact details**: Update phone, email, and address in `components/Footer.tsx`, `app/contact/page.tsx`, and `components/JsonLd.tsx`.
- **Google Maps**: Replace the iframe `src` in `app/contact/page.tsx` with your embed URL.
- **Payment**: Integrate Stripe (or another provider) in `app/book/page.tsx` step 5.
- **Address autocomplete**: Add Google Places Autocomplete (or similar) to the booking pick-up/drop-off inputs; see comments in `app/book/page.tsx`.
- **Search Console**: Set `metadata.verification.google` in `app/layout.tsx` to your verification code.
- **Logos**: Place `logo.png` (header, black on white) and `logo-splash.png` (opening splash, white on black) in the `public/` folder.
- **Fleet images**: Place these in `public/` for the fleet and homepage: `fleet-business-sedan.png` (Volvo), `fleet-business-suv.png` (Suburban), `fleet-first-suv.png` (Escalade), `fleet-first-sedan.png` (Mercedes S-Class).

## Deployment

See [VERCEL-DEPLOY.md](./VERCEL-DEPLOY.md) for deploying to Vercel via GitHub.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Next/Image for optimized imagery (Unsplash placeholders; replace with your assets)
