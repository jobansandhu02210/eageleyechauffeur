# Turn on Google APIs for Eagle Eye Chauffeur

Follow these steps in **Google Cloud Console**, then add keys to your project.

## 1. Create a Google Cloud project

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Sign in with your Google account.
3. Click the project menu (top left) → **New Project**.
4. Name it (e.g. `Eagle Eye Chauffeur`) → **Create**.

## 2. Enable billing

Google Maps Platform requires a billing account (Google gives a monthly free credit; see [pricing](https://mapsplatform.google.com/pricing/)).

1. **Billing** → **Link a billing account** (or create one).

## 3. Enable the APIs you need

1. Open **APIs & Services** → **Library** (or [API Library](https://console.cloud.google.com/apis/library)).
2. Search and **Enable** each of these:

| API | Used for |
|-----|----------|
| **Maps JavaScript API** | Maps + Places Autocomplete on your booking page |
| **Places API** | Address suggestions (pick-up / drop-off) |
| **Geocoding API** | *(Optional)* Turn addresses into coordinates |

For the **Contact** page embed map, you can keep using a normal Google Maps embed URL, or enable **Maps Embed API** if Google asks for it.

## 4. Create an API key

1. **APIs & Services** → **Credentials**.
2. **+ Create credentials** → **API key**.
3. Copy the key (you will paste it into `.env.local`).

## 5. Restrict the key (important)

**Application restrictions**

- For local development: choose **None** temporarily, or **HTTP referrers** and add:
  - `http://localhost:3000/*`
  - `http://127.0.0.1:3000/*`
- For production: add your live site, e.g. `https://yourdomain.com/*` and `https://www.yourdomain.com/*`

**API restrictions**

- Choose **Restrict key** → select only:
  - Maps JavaScript API  
  - Places API  
  - (and Maps Embed API if you use it)

Save. Changes can take a few minutes.

## 6. Add the key to this project

1. In the project root, create a file named **`.env.local`** (same folder as `package.json`).
2. Add (replace with your real key):

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSy...your_key_here
```

3. Restart the dev server (`Ctrl+C`, then `npm run dev`).

The booking page will load **address autocomplete** when this variable is set.

## 7. Google Analytics (optional)

1. In [Google Analytics](https://analytics.google.com/), create a **GA4** property for your site.
2. Copy the **Measurement ID** (starts with `G-`).
3. In `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. Restart the dev server.

## 8. Google Search Console (optional)

1. [Google Search Console](https://search.google.com/search-console) → add your property.
2. Use the HTML tag verification method and put the code in `app/layout.tsx` under `metadata.verification.google`.

---

## Troubleshooting

- **“This page can’t load Google Maps correctly”**  
  Check billing is enabled, APIs are enabled, and the key’s **API restrictions** include Maps JavaScript + Places.

- **Autocomplete does nothing**  
  Confirm `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is in `.env.local` (not only `.env`), restart `npm run dev`, and check the browser console for errors.

- **Referrer not allowed**  
  Add your exact URL pattern under **HTTP referrers** for the API key (including `localhost` for dev).

For official docs: [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript) and [Places Autocomplete](https://developers.google.com/maps/documentation/javascript/place-autocomplete).
