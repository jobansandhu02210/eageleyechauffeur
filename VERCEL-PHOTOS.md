# Photos not updating on the live site?

## 1. Check Vercel “Root Directory” (most common)

1. Vercel → your project → **Settings** → **General**
2. **Root Directory** must be **empty** (or `.`).

If it points to a subfolder (e.g. `app`, `src`, `website`), Vercel looks for `public` **inside that folder**. Your `public` folder is at the **repo root**, so images never get deployed → **404** and you keep seeing placeholders.

Fix: clear Root Directory → **Save** → **Deployments** → **⋯** → **Redeploy** (enable **Clear cache** if you see it).

## 2. Confirm the right GitHub repo

**Settings** → **Git** → Repository should be:

`jobansandhu02210/eageleyechauffeur`  
Branch: **main**

## 3. Use simple image file names

The app expects these files in **`public/`**:

- `hero.jpg`
- `logo-splash.png` (optional)
- `logo.png` (optional, header)
- `fleet-business-sedan.png`
- `fleet-business-suv.png`
- `fleet-first-suv.png`
- `fleet-first-sedan.png`

If you still have old names like `hero.jpg.jpg` or `fleet-*.png.PNG`, run in PowerShell:

```powershell
cd "C:\Users\robin\OneDrive\Desktop\eagle eye chauffeur\public"
.\RENAME-IMAGES.ps1
```

Then:

```powershell
cd "C:\Users\robin\OneDrive\Desktop\eagle eye chauffeur"
git add public app components
git commit -m "Fix public image filenames for production"
git push
```

## 4. Test after deploy

Open in the browser (replace with your domain):

- `https://www.eagleeyechauffeur.com/hero.jpg`  
  If this is **404**, the file is not in the deployment → fix steps 1–3.

## 5. Browser cache

Hard refresh: **Ctrl+Shift+R**, or try an incognito window.
