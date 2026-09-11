# Platform Analysis — aromacoffee.nz

Scraped: 2026-09-12

## Stack Identification

**Backend:** Laravel (PHP)
- `/build/manifest.json` exists and contains `resources/js/app.js` and `resources/css/app.css` — standard Laravel directory convention
- Vite is the build tool (hashed asset filenames in `build/assets/`)
- No Mix manifest (`/mix-manifest.json` returns 404), confirming Vite over the older Laravel Mix

**Frontend:**
- **Tailwind CSS** — utility-first classes, `--tw-` CSS custom properties, Preflight reset
- **Alpine.js** — `x-` directive system in the JS bundle, reactive data binding
- **Axios 0.27.2** — HTTP client for AJAX requests
- **Lodash 4.17.21** — utility library

**No evidence of:** Vue, React, jQuery, Livewire, Bootstrap

## Compiled Assets

| Asset | Path |
|-------|------|
| JS bundle | `/build/assets/app.ab93cf8a.js` |
| CSS bundle | `/build/assets/app.9fa9f508.css` |
| Manifest | `/build/manifest.json` |

## Known Image Paths

| Path | Description |
|------|-------------|
| `/images/common/f.png` | Facebook icon |
| `/images/common/i.png` | Instagram icon |
| `/images/` | Directory returns 403 (exists but no listing) |
| `/storage/` | Returns 404 |

Note: WebFetch converts HTML to markdown before analysis, stripping img src attributes.
A manual browser inspection (DevTools > Network tab) is needed to catalogue all image assets.

## Page Routes

| Route | Status | Notes |
|-------|--------|-------|
| `/` | 200 | Homepage |
| `/shops` | 200 | Locations + full breakfast menu with prices |
| `/coffee` | 200 | Placeholder content only |
| `/tea` | 200 | Placeholder content only |
| `/fresh` | 200 | Placeholder content only |
| `/accessories` | 200 | Placeholder content only |
| `/story` | 404 | Nav links to `/aboutus` instead |
| `/aboutus` | 200 | Same content as homepage — no unique about/story copy |
| `/reservation` | 200 | Working reservation form |
| `/login` | 200 | Working login form, visually disconnected |
| `/register` | 200 | Form renders (name, email, password, confirm) |
| `/food` | 404 | Nav says "FOOD" but route doesn't exist |
| `/privacy` | 200 | Privacy policy (last updated March 2021) |
| `/terms` | 200 | Terms and conditions (last updated March 2021) |
| `/delivery` | 200 | Shipping/delivery policy (last updated Sep 2022) |
