# Handoff: Aroma Coffee — Homepage

## Overview
A single-page homepage for Aroma Coffee, a Vietnamese-owned cafe with three Wellington, NZ
locations. The page is a menu-category landing view: a dark brown masthead, a centred
FOOD / COFFEE / TEA tab row (COFFEE active), two product blurbs flanking one large product
photograph, a sage footer bar carrying the two contact details, and a leaf illustration in the
bottom-right corner.

Body copy is intentionally placeholder ("Lorum Epsum de tori"). **Do not invent real business
copy** — the client supplies it.

## About the Design Files
The files in this bundle are **design references created in HTML**. `reference/index.html` +
`reference/styles.css` are a faithful static implementation of the approved mockup, and
`reference/Aroma Coffee Homepage.dc.html` is the original design-tool source. They are prototypes
of the intended look and behaviour — not necessarily the files to ship as-is.

The brief for this page is **static HTML + CSS, no framework**, so the reference files can be taken
almost verbatim. If they are being folded into an existing codebase (React, Astro, a CMS theme,
etc.), recreate the same markup and values using that codebase's established patterns instead of
pasting the HTML in.

## Fidelity
**High fidelity.** Colours, type, spacing and layout below are final and should be matched exactly.
The only deliberately unresolved item is the product photograph (a grey placeholder in the mockup).

## Screens / Views

### Screen: Homepage (COFFEE category)
**Purpose:** browse the coffee category; find contact details.

**Page shell**
- `body`: `min-height: 100vh`, `display: flex`, `flex-direction: column`; background `#FAF1E7`;
  text `#2B2320`; base font `Figtree`, 400.
- Vertical order: header → tabs → main (flex: 1 1 auto) → footer. The footer therefore sits at the
  bottom of the viewport on short pages.

**1. Header — dark brown bar**
- Container: background `#402A1C`; `display: flex`, `flex-wrap: wrap`, `align-items: center`,
  `justify-content: space-between`; `gap: clamp(8px, 2vw, 24px)`;
  `padding: 22px clamp(14px, 3vw, 40px)`. No border, no shadow.
- Left nav: `flex: 1 1 70px; min-width: 0; gap: 28px` — one link, `HOME`.
- Centre wordmark `AROMA`: `Cormorant Garamond` 400, `font-size: clamp(22px, 4vw, 46px)`,
  `letter-spacing: 0.14em`, `line-height: 1`, colour `#FDF6EC`, `text-align: center`,
  `flex: 0 1 auto; min-width: 0`.
- Right nav: `flex: 1 1 70px; min-width: 0; justify-content: flex-end;
  gap: clamp(10px, 2vw, 28px)` — `ABOUT`, `CONTACT`.
- Links: `Cormorant Garamond` 400, `font-size: clamp(11px, 1.5vw, 19px)`,
  `letter-spacing: 0.12em`, colour `#FAF1E7`, `white-space: nowrap`, no underline.
- `min-width: 0` on both nav columns is load-bearing: without it the letter-spaced serif links
  refuse to shrink and CONTACT overflows the brown bar at ~390px.

**2. Category tabs**
- Container: `display: flex`, `justify-content: center`, `gap: clamp(28px, 5vw, 64px)`,
  `padding: 34px 20px 0`. Sits on the page ground `#FAF1E7` (no bar, no divider).
- Tab: `Cormorant Garamond` 400, `font-size: clamp(19px, 2vw, 25px)`, `letter-spacing: 0.08em`,
  colour `#2B2320`, `padding-bottom: 10px`, `border-bottom: 1.5px solid transparent`.
- Active tab (`COFFEE`, marked `aria-current="page"`): `border-bottom-color: #2B2320`.
  The underline is the full width of the word — it is the element's own bottom border.

**3. Content area**
- `main`: `position: relative` (anchors the leaf art), `flex: 1 1 auto`,
  `padding: clamp(40px, 7vw, 92px) clamp(18px, 4vw, 56px) clamp(60px, 9vw, 120px)`,
  `overflow: hidden`.
- Grid: `max-width: 1120px`, `margin: 0 auto`,
  `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`,
  `gap: clamp(24px, 3vw, 40px)`, `align-items: stretch`.
  Three equal columns: COFFEE text · photograph · MATCHA text.
- Column 1 (AROMA COFFEE): `flex-direction: column`, `justify-content: flex-start`,
  `text-align: right` — text hugs the photo and sits at the top of the row.
- Column 3 (AROMA MATCHA): `justify-content: flex-end`, `text-align: left` — bottom-aligned,
  producing the mockup's alternating/diagonal rhythm.
- Titles: `Cormorant Garamond` 500, `font-size: clamp(16px, 1.5vw, 19px)`,
  `letter-spacing: 0.12em`, colour `#2B2320`, `margin: 0 0 22px`.
- Body copy: `Figtree` 400, `font-size: clamp(13px, 1.1vw, 15px)`, `line-height: 1.95`,
  colour `#4A3B32`, `margin: 0`, `text-wrap: pretty`. Five lines separated by `<br>`:
  ```
  Lorum Epsum de tori
  Lorum Lorum Lorum Epsum de tori
  Lorum Epsum de tori
  Lorum Lorum Epsum de tori
  Lorum Epsum de tori
  ```
- Photograph (centre column): wrapper `min-height: 300px; display: flex`; image
  `width: 100%; min-height: 300px; object-fit: cover; border-radius: 0`. Placeholder fill while no
  asset is supplied: `#D8D8D8`. Square corners are intentional — the only rounded shapes on the
  page are the footer pills.

**4. Leaf decoration**
- `position: absolute; right: -10px; bottom: -6px; width: clamp(180px, 26vw, 320px);`
  `opacity: 0.85; pointer-events: none;` inside `main` (which clips it).
- Inline SVG, all strokes and fills `#8FA173`, stroke-width `2.75`. Full markup under **Assets**.

**5. Footer — sage bar**
- Container: background `#8FA173`; `display: flex`, `flex-wrap: wrap`, `gap: 12px`;
  `padding: 12px clamp(14px, 2vw, 24px)`. Pills are left-aligned, flush to the padding edge.
- Pill (shared): `border: 1px solid #FAF1E7`, `border-radius: 999px`, `padding: 6px 14px`,
  `Figtree` 400, `font-size: 12px`, `line-height: 1.3`, `letter-spacing: 0.02em`,
  colour `#2B2320`.
- Pill 1 — `aroma128d@gmail.com`, `mailto:` link, filled: `background: #FAF1E7`.
- Pill 2 — `(+64)27 4809896`, `tel:+64274809896`, outline: `background: transparent`.

## Interactions & Behavior
All behaviour is CSS-only. No JavaScript is required for this page.

| Element | State | Change | Transition |
|---|---|---|---|
| Header link (HOME / ABOUT / CONTACT) | hover | colour `#FAF1E7` → `#E4C9A8` | `color 200ms ease` |
| Category tab (inactive) | hover | `opacity: 1` → `0.65` | `opacity 200ms ease` |
| Category tab | active | `border-bottom: 1.5px solid #2B2320` (transparent otherwise) | `border-color 200ms ease` |
| Footer pill (filled) | hover | background `#FAF1E7` → `#FDF9F1`, colour `#2B2320` → `#402A1C` | `background-color 200ms ease, color 200ms ease` |
| Footer pill (outline) | hover | background `transparent` → `#FAF1E7`, colour `#2B2320` → `#402A1C` | same |
| Any link | `:focus-visible` | `outline: 2px solid #8FA173; outline-offset: 3px` | none |
| Text selection | — | `::selection { background: #D9C7AE; color: #2B2320; }` | none |

**Tab switching:** the mockup shows COFFEE as the active category. Tabs are real links to
`#food` / `#coffee` / `#tea` — for a multi-page build, point them at `food.html`,
`index.html`, `tea.html` and move `aria-current="page"` + the underline to the current page.
No client-side tab JS in this design.

**Reduced motion:** `@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }`

## Responsive behaviour
Sizing is fluid (`clamp()`), with two explicit breakpoints.

Resolved values at three widths:

| Property | 390px | 768px | 1440px |
|---|---|---|---|
| Header padding | `16px 14px` (breakpoint) | `22px 23px` | `22px 40px` |
| Header link size | 11px | 11.5px | 19px |
| `AROMA` size | 22px (own row) | 30.7px | 46px |
| Tab size | 19px | 19px | 25px |
| Tab gap | 28px | 38.4px | 64px |
| Main padding (top / sides / bottom) | 40 / 18 / 60 | 53.8 / 30.7 / 69.1 | 92 / 56 / 120 |
| Grid columns | 1 | 2 | 3 |
| Grid gap | 24px | 24px | 40px |
| Body copy size | 13px | 13px | 15px |
| Leaf width | 180px | 199.7px | 320px |
| Footer padding | `12px 14px` | `12px 15.4px` | `12px 24px` |

- `max-width: 640px` — header padding tightens to `16px 14px`; tabs top padding 34px → 24px.
- `max-width: 420px` — header wraps to two rows: `AROMA` takes `order: -1; flex-basis: 100%`
  (its own centred row), HOME and ABOUT/CONTACT sit below; `justify-content: center`,
  `row-gap: 14px`.
- Content grid reflows on its own via `auto-fit / minmax(240px, 1fr)`: 3 columns above roughly
  792px of inner width, 2 columns from ~528px, 1 column below. In the single-column state the
  COFFEE text stays right-aligned and MATCHA left-aligned, as designed.

## State Management
None. Static page, no client state, no data fetching. In a multi-page build the only "state" is
which category page is current, expressed in markup (`aria-current="page"` + the active tab
underline).

## Design Tokens

```css
/* Colour */
--brown:       #402A1C;  /* header bar */
--brown-ink:   #FDF6EC;  /* AROMA wordmark */
--cream:       #FAF1E7;  /* page ground, header links, pill border/fill */
--cream-hi:    #FDF9F1;  /* filled-pill hover */
--cream-hover: #E4C9A8;  /* header link hover */
--ink:         #2B2320;  /* headings, tabs, pill text */
--ink-body:    #4A3B32;  /* body copy */
--sage:        #8FA173;  /* footer bar, leaf art, focus ring */
--placeholder: #D8D8D8;  /* image placeholder fill */
--selection:   #D9C7AE;

/* Type */
--font-serif: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;  /* 400, 500, 600 */
--font-sans:  'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; /* 400, 500 */

/* Type scale (min → max) */
wordmark:    clamp(22px, 4vw, 46px)   / 1   / 0.14em / serif 400
header link: clamp(11px, 1.5vw, 19px) / 1   / 0.12em / serif 400
tab:         clamp(19px, 2vw, 25px)   / 1   / 0.08em / serif 400
title:       clamp(16px, 1.5vw, 19px) / 1.2 / 0.12em / serif 500
body:        clamp(13px, 1.1vw, 15px) / 1.95 / normal / sans 400
pill:        12px                     / 1.3 / 0.02em / sans 400

/* Spacing used */
6px 10px 12px 14px 20px 22px 24px 28px 34px 40px 56px 64px 92px 120px

/* Radius */
0        /* everything except pills — square corners are intentional */
999px    /* footer contact pills */

/* Borders */
1px solid #FAF1E7      /* footer pills */
1.5px solid #2B2320    /* active tab underline */
2px solid #8FA173      /* focus ring, offset 3px */

/* Shadows */
none anywhere on this page.

/* Layout */
content max-width: 1120px, centred
grid: repeat(auto-fit, minmax(240px, 1fr))
transition: 200ms ease
```

## Assets

**Fonts** (Google Fonts, no local files):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Figtree:wght@400;500&display=swap" rel="stylesheet">
```

**Images:** one — the product photograph in the centre column. Not yet supplied; the mockup shows a
`#D8D8D8` placeholder. Expected at `assets/product.jpg`, rendered
`width: 100%; min-height: 300px; object-fit: cover`, square corners.

**Icons:** none.

**Inline SVG — leaf cluster** (bottom-right of `main`, full markup):
```html
<svg viewBox="0 0 320 200" width="100%" fill="none" aria-hidden="true">
  <g stroke="#8FA173" stroke-width="2.75" stroke-linecap="round">
    <path d="M300 196C286 170 262 148 232 138"></path>
    <path d="M252 150C246 132 250 116 262 104"></path>
    <path d="M214 176C204 166 196 152 194 138"></path>
  </g>
  <g fill="#8FA173">
    <ellipse cx="276" cy="120" rx="26" ry="14" transform="rotate(-38 276 120)"></ellipse>
    <ellipse cx="240" cy="96" rx="24" ry="13" transform="rotate(-14 240 96)" opacity="0.72"></ellipse>
    <ellipse cx="300" cy="158" rx="22" ry="12" transform="rotate(30 300 158)" opacity="0.9"></ellipse>
    <ellipse cx="206" cy="128" rx="20" ry="11" transform="rotate(-52 206 128)" opacity="0.55"></ellipse>
    <ellipse cx="186" cy="64" rx="17" ry="9" transform="rotate(24 186 64)" opacity="0.4"></ellipse>
    <ellipse cx="148" cy="96" rx="14" ry="8" transform="rotate(-20 148 96)" opacity="0.3"></ellipse>
    <ellipse cx="248" cy="186" rx="14" ry="8" transform="rotate(-8 248 186)" opacity="0.6"></ellipse>
  </g>
</svg>
```
This is a hand-drawn stand-in for the client's botanical illustration. If real leaf artwork is
supplied, drop it into `.leaves` at the same position, width and `opacity: 0.85`.

## Component breakdown

### Component: SiteHeader
```html
<header class="site-header">
  <nav class="site-header__nav site-header__nav--left">
    <a class="site-header__link" href="#home">HOME</a>
  </nav>
  <div class="site-header__brand">AROMA</div>
  <nav class="site-header__nav site-header__nav--right">
    <a class="site-header__link" href="#about">ABOUT</a>
    <a class="site-header__link" href="#contact">CONTACT</a>
  </nav>
</header>
```
```css
.site-header {
  background: #402A1C;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: clamp(8px, 2vw, 24px);
  padding: 22px clamp(14px, 3vw, 40px);
}
.site-header__nav { display: flex; flex: 1 1 70px; min-width: 0; gap: 28px; }
.site-header__nav--right { justify-content: flex-end; gap: clamp(10px, 2vw, 28px); }
.site-header__link {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 400;
  font-size: clamp(11px, 1.5vw, 19px);
  letter-spacing: 0.12em;
  line-height: 1;
  color: #FAF1E7;
  text-decoration: none;
  white-space: nowrap;
  transition: color 200ms ease;
}
.site-header__link:hover { color: #E4C9A8; }
.site-header__brand {
  flex: 0 1 auto;
  min-width: 0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 400;
  font-size: clamp(22px, 4vw, 46px);
  letter-spacing: 0.14em;
  line-height: 1;
  color: #FDF6EC;
  text-align: center;
}
@media (max-width: 640px) { .site-header { padding: 16px 14px; } }
@media (max-width: 420px) {
  .site-header { justify-content: center; row-gap: 14px; }
  .site-header__brand { order: -1; flex-basis: 100%; }
}
```

### Component: CategoryTabs
```html
<nav class="tabs" aria-label="Menu categories">
  <a class="tabs__tab" href="#food">FOOD</a>
  <a class="tabs__tab" href="#coffee" aria-current="page">COFFEE</a>
  <a class="tabs__tab" href="#tea">TEA</a>
</nav>
```
```css
.tabs {
  display: flex;
  justify-content: center;
  gap: clamp(28px, 5vw, 64px);
  padding: 34px 20px 0;
}
.tabs__tab {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 400;
  font-size: clamp(19px, 2vw, 25px);
  letter-spacing: 0.08em;
  line-height: 1;
  color: #2B2320;
  text-decoration: none;
  padding-bottom: 10px;
  border-bottom: 1.5px solid transparent;
  transition: border-color 200ms ease, opacity 200ms ease;
}
.tabs__tab:hover { opacity: 0.65; }
.tabs__tab[aria-current="page"] { border-bottom-color: #2B2320; }
@media (max-width: 640px) { .tabs { padding-top: 24px; } }
```

### Component: ProductBlock
Two instances: `--left` (top-aligned, right-aligned text) and `--right` (bottom-aligned,
left-aligned text).
```html
<section class="product product--left">
  <h2 class="product__title">AROMA COFFEE</h2>
  <p class="product__body">
    Lorum Epsum de tori<br>
    Lorum Lorum Lorum Epsum de tori<br>
    Lorum Epsum de tori<br>
    Lorum Lorum Epsum de tori<br>
    Lorum Epsum de tori
  </p>
</section>
```
```css
.product { display: flex; flex-direction: column; }
.product--left  { justify-content: flex-start; text-align: right; }
.product--right { justify-content: flex-end;   text-align: left;  }
.product__title {
  margin: 0 0 22px;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 500;
  font-size: clamp(16px, 1.5vw, 19px);
  letter-spacing: 0.12em;
  line-height: 1.2;
  color: #2B2320;
}
.product__body {
  margin: 0;
  font-family: 'Figtree', sans-serif;
  font-weight: 400;
  font-size: clamp(13px, 1.1vw, 15px);
  line-height: 1.95;
  color: #4A3B32;
  text-wrap: pretty;
}
```

### Component: ProductMedia
```html
<div class="product-media">
  <img class="product-media__img" src="assets/product.jpg" alt="Aroma Coffee product photograph">
</div>
```
```css
.product-media { min-height: 300px; display: flex; }
.product-media__img {
  width: 100%;
  min-height: 300px;
  background: #D8D8D8;
  border-radius: 0;
  object-fit: cover;
  display: block;
}
```

### Component: SiteFooter
```html
<footer class="site-footer" id="contact">
  <a class="pill pill--filled" href="mailto:aroma128d@gmail.com">aroma128d@gmail.com</a>
  <a class="pill pill--outline" href="tel:+64274809896">(+64)27 4809896</a>
</footer>
```
```css
.site-footer {
  background: #8FA173;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px clamp(14px, 2vw, 24px);
}
.pill {
  border: 1px solid #FAF1E7;
  border-radius: 999px;
  padding: 6px 14px;
  font-family: 'Figtree', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0.02em;
  color: #2B2320;
  text-decoration: none;
  transition: background-color 200ms ease, color 200ms ease;
}
.pill--filled { background: #FAF1E7; }
.pill--filled:hover { background: #FDF9F1; color: #402A1C; }
.pill--outline { background: transparent; }
.pill--outline:hover { background: #FAF1E7; color: #402A1C; }
```

## Files
- `reference/index.html` — complete static HTML for the homepage (build target).
- `reference/styles.css` — complete stylesheet, commented by section, with the resolved palette.
- `reference/Aroma Coffee Homepage.dc.html` — the original design source (inline-styled; same
  values). Useful for diffing if the design changes.
- `reference/mockup.png` — the client's approved mockup, for visual comparison.

## Notes for the build
- Palette note: the client's written brief described a dark brown footer; the approved mockup shows
  a **sage green** footer (`#8FA173`), which is what is built here. Confirm before changing.
- `assets/product.jpg` must be supplied by the client; keep the `#D8D8D8` fill as the empty state.
- Copy for both product blocks is placeholder and must be replaced by the client, not authored.
- Only two other pages are implied by the tabs (FOOD, TEA) and two by the header (ABOUT, CONTACT).
  They are not designed yet; the components above are page-agnostic and ready to reuse.
