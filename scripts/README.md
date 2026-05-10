# Prerender Setup — drramprabhu.com

## What This Does

Solves the SPA SEO problem: Google sees `<div id="root"></div>` for a JavaScript-rendered SPA. Even though Googlebot does a "second pass" with JS, this is slow and unreliable, especially for:
- Mobile-first indexing
- Site-wide content discovery
- Rich snippets (Schema.org, Helmet meta)

## How It Works

```
1. vite build           → dist/ (regular SPA bundle)
2. node prerender.mjs   → dist/<route>/index.html for each route
                          (using headless Chrome to scrape rendered HTML)
3. Static host serves   → prerendered HTML on first paint
4. React hydrates       → SPA takes over for client-side navigation
```

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Vite dev server (no SSR; hot reload) |
| `npm run build:spa` | Fast SPA build only (no prerender). Use during dev iteration. |
| `npm run build` | **Production**: SPA build + prerender all routes |
| `npm run prerender` | Prerender only (skip rebuild) |
| `npm run verify-prerender` | Check that all routes have full HTML content |
| `npm run preview` | Serve `dist/` locally on :4173 |

## Adding a New Route

1. Add the route to `src/App.tsx` `<Routes>`
2. Add the URL to the `ROUTES` array in `scripts/prerender.mjs`
3. Add the URL to `scripts/verify-prerender.mjs` `ROUTES` array
4. Add the URL to `public/sitemap.xml`
5. Run `npm run build && npm run verify-prerender`

## Hosting Platform Notes

### Netlify (uses `_redirects`)
- The `public/_redirects` file ships SPA fallback (`/* /index.html 200`)
- More-specific match wins, so prerendered `dist/services/facelift/index.html` is served first
- No additional config needed

### Vercel (uses `vercel.json`)
- Config rewrites paths to their `index.html` files
- `cleanUrls: true` ensures `/services/facelift` (no `.html` extension)

### Cloudflare Pages
- Reads `_redirects` automatically (same as Netlify)
- May need `_headers` file for caching

### Apache / Nginx (self-hosted)
- Need to enable mod_rewrite or proper `try_files` directive
- Example Apache `.htaccess`:
  ```
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  ```

## Troubleshooting

### Puppeteer fails with "Failed to launch browser"
On CI/Linux, install dependencies:
```
npx puppeteer browsers install chrome
```

### "Preview server boot timeout"
Ensure port 4173 is free; or change `PREVIEW_PORT` in `scripts/prerender.mjs`.

### Hydration mismatch warnings in console
Usually caused by:
- Date/time rendering that differs between prerender (server time) and client time
- `Math.random()` calls in render
- Browser-only APIs accessed during SSR (window, navigator)

Fix: wrap in `useEffect` or check `typeof window !== 'undefined'`.

### A page is missing from prerender output
Check:
1. Route exists in `src/App.tsx`
2. URL is in `ROUTES` array of `scripts/prerender.mjs`
3. The page's React component renders without errors (check console during prerender)
