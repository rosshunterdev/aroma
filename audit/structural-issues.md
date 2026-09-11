# Structural Issues — aromacoffee.nz

Scraped: 2026-09-12

## Confirmed Issues

### 1. Placeholder product pages
`/coffee`, `/tea`, `/fresh`, `/accessories` all render the same two marketing paragraphs (Aroma Coffee + Aroma Matcha descriptions) with no actual product listings, prices, or real content.

### 2. Broken navigation routes
- Nav contains "FOOD" link but `/food` returns 404
- Nav contains "STORY" link but `/story` returns 404 — the actual route is `/aboutus`
- `/aboutus` has no unique content — renders same copy as the homepage

### 3. Login page visually disconnected
- Different styling from the rest of the site
- Minimal navigation (just a `/` link back to home)
- No header, no branding continuity

### 4. Register page
- The form does render (contrary to the initial report of a silent redirect)
- Fields: name, email, password, confirm password
- Whether submission actually works was not tested
- No indication of what a registered account provides

### 5. Duplicate/inconsistent navigation
- Primary nav: FOOD, FRESH, COFFEE, TEA, ACCESSORIES, STORY
- Secondary nav: SHOPS, FRESH, COFFEE, TEA, ACCESSORIES, ABOUT US
- "FRESH" appears in both navs
- "STORY" vs "ABOUT US" point to different routes (one 404s)

### 6. Contact info inconsistencies
- Main phone: (+64)27 4809896 / 0274809896 (same number, formatted differently)
- Terms page lists a different phone: (020) 4567837
- Email varies: `aroma128d@gmail.com` (footer) vs `info@aromacoffee.nz` (policies)

### 7. Delivery policy references inappropriate regions
- Mentions "AEDT" (Australian timezone) for dispatch cutoff
- Mentions "USPS" and "military addresses" — irrelevant for a NZ cafe
- Likely copied from a generic template

### 8. Only Miramar address in footer
- Three locations exist (Miramar, Cuba Mall, Island Bay)
- Footer only shows Miramar address
- `/shops` page lists all three but with limited detail

### 9. Legal pages are boilerplate
- Privacy policy credits "Privacy Policy Generator"
- Last updated dates are 2021 — likely never customized
- Generic language not tailored to the business
