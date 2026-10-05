# Redesign Options Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Two self-contained homepage comps (`redesign/option-a.html`, `redesign/option-b.html`) in Phillip's green/red/white "Kiwi" brief, viewable via a Netlify draft-PR preview.

**Architecture:** Each comp is one static HTML file with inline CSS and Google Fonts; no shared stylesheet, no JS. Both share identical markup (Option B is a copy of A with a different `<style>` block and 5 small markup edits). A browser check script (`.scratch/redesign/check.js`), run through the Playwright MCP `browser_evaluate` tool, is the test suite.

**Tech Stack:** HTML, CSS, Google Fonts (Figtree, Fraunces), Playwright MCP (Chromium), local static server, `gh` CLI.

**Spec:** `.scratch/redesign/spec.md`

## Global Constraints

- Colours: `--green: #1F5C3A`, `--red: #C8372D`, `--white: #FFFFFF`, `--ink: #1E1E1E`. Red only for the Vietnamese tag and small accents.
- The Vietnamese tag always contains the text "Vietnamese special".
- Breakpoints 640px and 420px. No `transition-all` / `transition: all`. No em dashes in visible copy.
- Visible text must already exist in `draft.html`, come from Phillip, or be a `.copy-slot` with a question. New UI labels allowed: listed in `check.js` `ALLOW`.
- Do not modify `index.html`, `draft.html`, `menu.html`, `contact.html`, `styles.css`.
- Ask Ross before starting a local server (one may already be running) and before every push.
- Stage explicit paths only; conventional commits ending with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Review Focus

1. Phillip opens the preview on his phone (390px, and small phones at 320px): no sideways scroll, buttons tappable. Pinned by running `check.js` at 320px in Tasks 2 and 3.
2. Keyboard user tabs through Option B's green header and footer: focus ring must be visible on green (white outline). Pinned by the Tab-through screenshot step in Task 3.
3. Someone finds the preview URL and mistakes it for the real site: switcher bar says "for review" and pages carry `noindex`. Pinned by `noindexPresent` in `check.js`.
4. Phillip taps "See the day menu" and lands on the old brown `menu.html`: expected for a comp, but Ross must warn him. Pinned by the message text in Task 4 Step 4.
5. Fraunces fails to load: headings fall back to Georgia and stay readable. Pinned by the font-stack line in Task 3's CSS (`'Fraunces', Georgia, serif`), checked by reading the stack in `check.js` output (`headingFont`).

---

### Task 1: Check script (the test)

**Files:**
- Create: `.scratch/redesign/check.js`

**Interfaces:**
- Produces: an async arrow function, pasted as the `function` argument of Playwright MCP `browser_evaluate`. Returns `{ pass: boolean, ...details }`. Expects page classes: `.switcher a`, `.tag--viet`, `#day`, `#evening`, `meta[name="robots"]`.

- [ ] **Step 1: Write the check script**

```js
// Paste into Playwright MCP browser_evaluate as `function`.
// Run on redesign/option-a.html and option-b.html at 1440, 390 and 320 px wide.
async () => {
  const ALLOW = [
    'design option a, for review', 'design option b, for review',
    'option a', 'option b', 'menus', 'cafe', 'restaurant',
    'day menu', 'evening menu', 'see the day menu', 'see the full menu',
    'vietnamese special', 'your words / menu and hours',
    'will the restaurant have its own menu? what days and hours will it open?'
  ];
  const r = {};
  const levels = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(h => +h.tagName[1]);
  r.h1Count = levels.filter(l => l === 1).length;
  r.skippedHeading = levels.some((l, i) => i > 0 && l > levels[i - 1] + 1);
  r.horizontalScroll = document.documentElement.scrollWidth > window.innerWidth;
  r.brokenImages = [...document.images].filter(i => !i.complete || i.naturalWidth === 0).length;
  r.switcherLinks = [...document.querySelectorAll('.switcher a')].map(a => a.getAttribute('href'));
  const tags = [...document.querySelectorAll('.tag--viet')];
  r.vietTagCount = tags.length;
  r.vietTagsHaveText = tags.every(t => t.textContent.trim().toLowerCase() === 'vietnamese special');
  r.hasDayEvening = !!document.getElementById('day') && !!document.getElementById('evening');
  r.noindexPresent = !!document.querySelector('meta[name="robots"][content*="noindex"]');
  r.emDash = document.body.textContent.includes('—');
  r.transitionAll = [...document.querySelectorAll('style')].some(s => /transition\s*:\s*all|transition-all/.test(s.textContent));
  const h1 = document.querySelector('h1');
  r.headingFont = h1 ? getComputedStyle(h1).fontFamily : null;

  // Copy audit: every visible text node must exist in draft.html or ALLOW.
  const src = (await (await fetch('../draft.html')).text()).replace(/&amp;/g, '&').toLowerCase();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  r.unknownText = [];
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const t = n.textContent.replace(/\s+/g, ' ').trim().toLowerCase();
    if (t && !src.includes(t) && !ALLOW.includes(t)) r.unknownText.push(t);
  }

  r.pass = r.h1Count === 1 && !r.skippedHeading && !r.horizontalScroll &&
    r.brokenImages === 0 && r.switcherLinks.length === 2 &&
    r.vietTagCount > 0 && r.vietTagsHaveText && r.hasDayEvening &&
    r.noindexPresent && !r.emDash && !r.transitionAll && r.unknownText.length === 0;
  return r;
}
```

- [ ] **Step 2: Start a static server (ask Ross first)**

Ask: "Is a local server already running? If not, OK to start one on port 8123?" Then, from the repo root, in the background:

Run: `python -m http.server 8123`
Expected: `Serving HTTP on :: port 8123`

- [ ] **Step 3: Run the check against the not-yet-existing page to see it fail**

Playwright MCP: `browser_navigate` to `http://localhost:8123/redesign/option-a.html`, then `browser_evaluate` with the script.
Expected: `pass: false`, `h1Count: 0` (server returns a 404 page).

- [ ] **Step 4: Commit**

```bash
git add .scratch/redesign/check.js
git commit -m "test: add browser check script for redesign comps"
```

---

### Task 2: Option A, "Park Kitchen close"

**Files:**
- Create: `redesign/option-a.html`

**Interfaces:**
- Consumes: `check.js` from Task 1 (class names `.switcher`, `.tag--viet`, ids `day`, `evening`).
- Produces: `redesign/option-a.html`, whose markup Task 3 copies verbatim. Classes Task 3 styles: `.switcher`, `.site-header`, `.brand`, `.hero`, `.hero__text`, `.hero__title`, `.actions`, `.btn`, `.btn--primary`, `.copy-slot`, `.copy-slot__label`, `.copy-slot--photo`, `.copy-slot--wide`, `.section-title`, `.menus__grid`, `.menu-panel`, `.eyebrow`, `.menu-panel__title`, `.menu-panel__hours`, `.highlights__grid`, `.item`, `.item--featured`, `.item__title`, `.item__price`, `.item__body`, `.tag`, `.tag--viet`, `.more`, `.visit__grid`, `.visit__heading`, `.visit__body`, `.hours`, `.hours__row`, `.site-footer`.

- [ ] **Step 1: Write `redesign/option-a.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>Option A | Aroma Coffee design comp</title>
  <link rel="icon" href="../aroma-leaf-cluster.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --green: #1F5C3A;
      --green-dark: #16452B;
      --red: #C8372D;
      --white: #FFFFFF;
      --ink: #1E1E1E;
      --ink-soft: #4A4A4A;
      --line: #DCE3DE;
      --slot-line: #7D8F83;
      --font-sans: 'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; background: var(--white); color: var(--ink); font-family: var(--font-sans); font-size: 17px; line-height: 1.6; }
    a { color: var(--green); }
    a:focus-visible { outline: 2px solid var(--green); outline-offset: 3px; }

    .switcher { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 6px 18px; padding: 8px 16px; background: var(--ink); color: var(--white); font-size: 13px; }
    .switcher a { color: var(--white); }
    .switcher a[aria-current="page"] { font-weight: 600; text-decoration: none; }
    .switcher a:focus-visible { outline-color: var(--white); }

    .site-header { display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 40px 16px 24px; }
    .brand { color: var(--green); font-size: 28px; font-weight: 600; letter-spacing: 0.3em; text-decoration: none; }
    .site-header nav { display: flex; gap: 32px; }
    .site-header nav a { padding: 10px 0; color: var(--ink-soft); font-size: 14px; font-weight: 500; letter-spacing: 0.16em; text-decoration: none; }
    .site-header nav a:hover { color: var(--green); }

    main > section { max-width: 1120px; margin: 0 auto; padding: clamp(48px, 8vw, 96px) 16px; }
    main > section + section { border-top: 1px solid var(--line); }
    .section-title { margin: 0 0 40px; color: var(--green); font-size: 14px; font-weight: 600; letter-spacing: 0.2em; text-align: center; text-transform: uppercase; }

    .hero { text-align: center; }
    .hero__title { margin: 0 0 24px; font-size: clamp(40px, 7vw, 72px); font-weight: 500; line-height: 1.05; letter-spacing: -0.01em; }
    .hero__text .copy-slot { max-width: 520px; margin: 0 auto; }
    .actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin: 32px 0 48px; }

    .btn { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 12px 28px; border: 2px solid var(--green); background: var(--white); color: var(--green); font-size: 14px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; text-decoration: none; transition: background-color 150ms ease, color 150ms ease; }
    .btn:hover, .btn--primary { background: var(--green); color: var(--white); }
    .btn--primary:hover { border-color: var(--green-dark); background: var(--green-dark); }

    .copy-slot { margin: 0; padding: 14px 18px; border: 1.5px dashed var(--slot-line); color: var(--ink-soft); font-size: 15px; text-align: left; }
    .copy-slot__label { display: block; color: var(--green); font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
    .copy-slot--photo { display: grid; place-content: center; aspect-ratio: 1; text-align: center; }
    .copy-slot--wide { aspect-ratio: 16 / 7; }

    .menus__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    .menu-panel { display: flex; flex-direction: column; align-items: center; gap: 16px; padding: 48px 32px; border: 1px solid var(--line); text-align: center; }
    .eyebrow { margin: 0; color: var(--ink-soft); font-size: 13px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; }
    .menu-panel__title { margin: 0; font-size: clamp(28px, 4vw, 36px); font-weight: 500; }
    .menu-panel__hours { margin: 0; color: var(--ink-soft); }

    .highlights__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .tag { display: inline-block; margin: 16px 0 0; padding: 4px 10px; background: var(--red); color: var(--white); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
    .item__title { margin: 12px 0 8px; font-size: 18px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
    .item__price { margin: 0 0 8px; color: var(--green); font-weight: 600; }
    .item__body { margin: 0; color: var(--ink-soft); font-size: 15px; }
    .more { margin: 48px 0 0; text-align: center; }

    .visit__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; text-align: center; }
    .visit__heading { margin: 0 0 12px; color: var(--green); font-size: 14px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; }
    .visit__body { margin: 0; font-style: normal; }
    .hours { margin: 0; }
    .hours__row { display: flex; justify-content: center; gap: 12px; }
    .hours dd { margin: 0; }

    .site-footer { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 32px; padding: 40px 16px; border-top: 1px solid var(--line); }
    .site-footer a { font-weight: 500; overflow-wrap: anywhere; }

    @media (max-width: 640px) {
      .menus__grid, .highlights__grid, .visit__grid { grid-template-columns: 1fr; }
      .copy-slot--wide { aspect-ratio: 4 / 3; }
    }
    @media (max-width: 420px) {
      .site-header nav { gap: 24px; }
      .actions .btn { width: 100%; }
    }
  </style>
</head>
<body>

  <div class="switcher">
    <span>Design option A, for review</span>
    <a href="option-a.html" aria-current="page">Option A</a>
    <a href="option-b.html">Option B</a>
  </div>

  <header class="site-header">
    <a class="brand" href="option-a.html">AROMA</a>
    <nav aria-label="Main">
      <a href="#day">MENU</a>
      <a href="#visit">VISIT</a>
    </nav>
  </header>

  <main>
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero__text">
        <h1 class="hero__title" id="hero-title">Aroma Coffee</h1>
        <p class="copy-slot"><span class="copy-slot__label">Your words / 1 sentence</span>How would you describe Aroma to someone walking past?</p>
        <div class="actions">
          <a class="btn btn--primary" href="tel:+64204567837">Call (020) 456 7837</a>
          <a class="btn" href="#visit">Find us</a>
        </div>
      </div>
      <p class="copy-slot copy-slot--photo copy-slot--wide"><span class="copy-slot__label">Photo / 1 landscape image</span>Which photo best shows the cafe?</p>
    </section>

    <section class="menus" aria-labelledby="menus-title">
      <h2 class="section-title" id="menus-title">Menus</h2>
      <div class="menus__grid">
        <article class="menu-panel" id="day" aria-labelledby="day-title">
          <p class="eyebrow">Cafe</p>
          <h3 class="menu-panel__title" id="day-title">Day menu</h3>
          <p class="menu-panel__hours">Mon–Fri 7am–3pm<br>Sat–Sun 9am–3pm</p>
          <a class="btn btn--primary" href="../menu.html">See the day menu</a>
        </article>
        <article class="menu-panel" id="evening" aria-labelledby="evening-title">
          <p class="eyebrow">Restaurant</p>
          <h3 class="menu-panel__title" id="evening-title">Evening menu</h3>
          <p class="copy-slot"><span class="copy-slot__label">Your words / menu and hours</span>Will the restaurant have its own menu? What days and hours will it open?</p>
        </article>
      </div>
    </section>

    <section class="highlights" aria-labelledby="highlights-title">
      <h2 class="section-title" id="highlights-title">From the menu</h2>
      <div class="highlights__grid">
        <article class="item">
          <p class="copy-slot copy-slot--photo"><span class="copy-slot__label">Photo / square</span>Can you send a photo of the chicken pho?</p>
          <p class="tag tag--viet">Vietnamese special</p>
          <h3 class="item__title">CHICKEN PHO</h3>
          <p class="item__body">Rice broth with star anise, cinnamon, ginger, coriander, onion, cloves, fennel, pepper, chilli, simmered until the flavours combine.</p>
        </article>
        <article class="item item--featured">
          <p class="copy-slot copy-slot--photo"><span class="copy-slot__label">Photo / square</span>Can you send a photo of your coffee?</p>
          <p class="tag tag--viet">Vietnamese special</p>
          <h3 class="item__title">EGG COFFEE</h3>
          <p class="item__price">$8</p>
          <p class="copy-slot"><span class="copy-slot__label">Your words / 1 sentence</span>How would you describe your egg coffee?</p>
        </article>
        <article class="item">
          <p class="copy-slot copy-slot--photo"><span class="copy-slot__label">Photo / square</span>Can you send a photo of your matcha or tea?</p>
          <h3 class="item__title">AROMA MATCHA</h3>
          <p class="item__body">The fresh young tea leaves harvested from the high mountain of Thai Nguyen (Vietnam) have been meticulously processed to keep the chlorophyll and the specific flavor of the premium tea leaves will give customers a feeling of freshness and provide a great energy for creativity and dynamic.</p>
        </article>
      </div>
      <p class="more"><a class="btn" href="../menu.html">See the full menu</a></p>
    </section>

    <section class="visit" id="visit" aria-labelledby="visit-title">
      <h2 class="section-title" id="visit-title">Visit us</h2>
      <div class="visit__grid">
        <div>
          <h3 class="visit__heading">Find us</h3>
          <address class="visit__body">
            128D Park Road<br>
            Miramar, Wellington 6022<br>
            <a href="https://www.google.com/maps/search/?api=1&amp;query=128D+Park+Road+Miramar+Wellington+6022">Open in Google Maps</a>
          </address>
        </div>
        <div>
          <h3 class="visit__heading">Hours</h3>
          <dl class="hours">
            <div class="hours__row"><dt>Mon–Fri</dt><dd>7am–3pm</dd></div>
            <div class="hours__row"><dt>Sat–Sun</dt><dd>9am–3pm</dd></div>
          </dl>
        </div>
        <div>
          <h3 class="visit__heading">Book a table</h3>
          <p class="visit__body">Give us a call or send an email to reserve your spot.<br>
            <a href="tel:+64204567837">(020) 456 7837</a><br>
            <a href="mailto:aroma128d@gmail.com">aroma128d@gmail.com</a></p>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <a href="mailto:aroma128d@gmail.com">aroma128d@gmail.com</a>
    <a href="tel:+64204567837">(020) 456 7837</a>
  </footer>

</body>
</html>
```

Note: which items get the Vietnamese tag (pho, egg coffee) is illustrative; the real list is a question in `phillip.md`.

- [ ] **Step 2: Run the check at 1440px**

Playwright MCP: `browser_resize` 1440×900, `browser_navigate` `http://localhost:8123/redesign/option-a.html`, `browser_evaluate` with `check.js`.
Expected: `pass: true`, `unknownText: []`, `switcherLinks: ["option-a.html","option-b.html"]`.
If `unknownText` lists a string, fix the markup to match `draft.html` exactly (or, for a new UI label, stop and ask Ross before adding to `ALLOW`).

- [ ] **Step 3: Run the check at 390px and 320px**

`browser_resize` 390×844, re-run evaluate; then 320×640, re-run.
Expected: `pass: true` and `horizontalScroll: false` at both widths.

- [ ] **Step 4: Console, network and screenshots**

`browser_console_messages` → expected: no errors. `browser_network_requests` → expected: no 4xx/5xx (the Option B link isn't fetched yet, so no 404).
`browser_take_screenshot` full page at 1440 and 390 to `.playwright-mcp/option-a-1440.png`, `.playwright-mcp/option-a-390.png`. Read both images and check: green/red/white only, tag reads clearly, Day/Evening panels side by side at 1440 and stacked at 390.

- [ ] **Step 5: Commit**

```bash
git add redesign/option-a.html
git commit -m "feat: add redesign option A homepage comp"
```

---

### Task 3: Option B, "Warmer Kiwi"

**Files:**
- Create: `redesign/option-b.html` (copy of `redesign/option-a.html`, then edits below)

**Interfaces:**
- Consumes: markup and class names from `redesign/option-a.html` (Task 2), `check.js` (Task 1).
- Produces: `redesign/option-b.html`.

- [ ] **Step 1: Copy the file**

Run: `cp redesign/option-a.html redesign/option-b.html`

- [ ] **Step 2: Apply the 5 markup edits in `redesign/option-b.html`**

1. `<title>Option A | Aroma Coffee design comp</title>` → `<title>Option B | Aroma Coffee design comp</title>`
2. Font link → `<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap" rel="stylesheet">`
3. Switcher block →
   ```html
   <div class="switcher">
     <span>Design option B, for review</span>
     <a href="option-a.html">Option A</a>
     <a href="option-b.html" aria-current="page">Option B</a>
   </div>
   ```
4. `<a class="brand" href="option-a.html">AROMA</a>` → `<a class="brand" href="option-b.html">AROMA</a>`
5. The three `<h3 class="item__title">` texts → `Chicken Pho`, `Egg Coffee`, `Aroma Matcha` (the copy audit compares case-insensitively, so they still pass).

- [ ] **Step 3: Replace the whole `<style>…</style>` block with:**

```html
  <style>
    :root {
      --green: #1F5C3A;
      --green-dark: #16452B;
      --red: #C8372D;
      --white: #FFFFFF;
      --ink: #1E1E1E;
      --ink-soft: #4A4A4A;
      --line: #DCE3DE;
      --slot-line: #7D8F83;
      --font-serif: 'Fraunces', Georgia, serif;
      --font-sans: 'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; background: var(--white); color: var(--ink); font-family: var(--font-sans); font-size: 17px; line-height: 1.6; }
    a { color: var(--green); }
    a:focus-visible { outline: 2px solid var(--green); outline-offset: 3px; }
    h1, h2, h3 { font-family: var(--font-serif); }

    .switcher { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 6px 18px; padding: 8px 16px; background: var(--ink); color: var(--white); font-size: 13px; }
    .switcher a { color: var(--white); }
    .switcher a[aria-current="page"] { font-weight: 600; text-decoration: none; }
    .switcher a:focus-visible { outline-color: var(--white); }

    .site-header { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px 24px; padding: 20px clamp(16px, 4vw, 48px); background: var(--green); }
    .brand { color: var(--white); font-family: var(--font-serif); font-size: 28px; font-weight: 600; letter-spacing: 0.12em; text-decoration: none; }
    .site-header nav { display: flex; gap: 28px; }
    .site-header nav a { padding: 10px 0; color: var(--white); font-size: 14px; font-weight: 500; letter-spacing: 0.12em; text-decoration: none; }
    .site-header nav a:hover { text-decoration: underline; text-underline-offset: 6px; }
    .site-header a:focus-visible { outline-color: var(--white); }

    main > section { max-width: 1120px; margin: 0 auto; padding: clamp(48px, 8vw, 96px) 16px; }
    .section-title { margin: 0 0 32px; font-size: clamp(30px, 4vw, 40px); font-weight: 600; line-height: 1.15; }

    .hero { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: clamp(32px, 5vw, 64px); }
    .hero__title { margin: 0 0 24px; color: var(--green); font-size: clamp(44px, 7vw, 76px); font-weight: 600; line-height: 1.02; }
    .actions { display: flex; flex-wrap: wrap; gap: 12px; margin: 32px 0 0; }

    .btn { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 12px 26px; border: 2px solid var(--green); border-radius: 999px; background: var(--white); color: var(--green); font-size: 15px; font-weight: 600; text-decoration: none; transition: background-color 150ms ease, color 150ms ease; }
    .btn:hover, .btn--primary { background: var(--green); color: var(--white); }
    .btn--primary:hover { border-color: var(--green-dark); background: var(--green-dark); }

    .copy-slot { margin: 0; padding: 14px 18px; border: 1.5px dashed var(--slot-line); border-radius: 8px; color: var(--ink-soft); font-size: 15px; }
    .copy-slot__label { display: block; color: var(--green); font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
    .copy-slot--photo { display: grid; place-content: center; aspect-ratio: 1; text-align: center; }
    .copy-slot--wide { aspect-ratio: 4 / 3; }

    .menus__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    .menu-panel { display: flex; flex-direction: column; align-items: flex-start; gap: 14px; padding: 36px 32px; border: 2px solid var(--green); border-radius: 12px; }
    .eyebrow { margin: 0; color: var(--green); font-size: 13px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; }
    .menu-panel__title { margin: 0; font-size: clamp(28px, 4vw, 36px); font-weight: 600; }
    .menu-panel__hours { margin: 0; color: var(--ink-soft); }

    .highlights__grid { display: grid; grid-template-columns: repeat(3, 1fr); align-items: start; gap: 28px; }
    .item { padding: 0 0 8px; }
    .item--featured { padding: 20px; border: 1px solid var(--line); border-top: 6px solid var(--red); border-radius: 12px; }
    .tag { display: inline-block; margin: 16px 0 0; padding: 4px 12px; border-radius: 999px; background: var(--red); color: var(--white); font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
    .item__title { margin: 10px 0 8px; font-size: 24px; font-weight: 600; }
    .item__price { margin: 0 0 8px; color: var(--green); font-weight: 600; }
    .item__body { margin: 0; color: var(--ink-soft); font-size: 15px; }
    .more { margin: 40px 0 0; }

    .visit__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
    .visit__heading { margin: 0 0 10px; color: var(--green); font-size: 22px; font-weight: 600; }
    .visit__body { margin: 0; font-style: normal; }
    .hours { margin: 0; }
    .hours__row { display: flex; gap: 12px; }
    .hours dd { margin: 0; }

    .site-footer { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 32px; padding: 40px 16px; background: var(--green); }
    .site-footer a { color: var(--white); font-weight: 500; overflow-wrap: anywhere; }
    .site-footer a:focus-visible { outline-color: var(--white); }

    @media (max-width: 640px) {
      .hero, .menus__grid, .highlights__grid, .visit__grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 420px) {
      .site-header { justify-content: center; }
      .actions .btn { width: 100%; }
    }
  </style>
```


- [ ] **Step 4: Run the check at 1440, 390 and 320 px**

Same as Task 2 Steps 2 and 3, on `http://localhost:8123/redesign/option-b.html`.
Expected: `pass: true` at all three widths; `switcherLinks: ["option-a.html","option-b.html"]`; `headingFont` starts with `Fraunces`.

- [ ] **Step 5: Keyboard focus check on green**

At 1440px: `browser_press_key` Tab until focus lands on the header MENU link, `browser_take_screenshot`; repeat for the footer email link.
Expected: a clearly visible white outline on green in both screenshots.

- [ ] **Step 6: Switcher round trip, console, network, screenshots**

`browser_click` "Option A" in the switcher → lands on option-a.html; click "Option B" → back. `browser_console_messages`: no errors. `browser_network_requests`: no 4xx/5xx.
Full-page screenshots at 1440 and 390 to `.playwright-mcp/option-b-1440.png`, `.playwright-mcp/option-b-390.png`. Read them: green bands top and bottom, red-edged egg coffee card, hero stacks text above photo at 390.

- [ ] **Step 7: Commit**

```bash
git add redesign/option-b.html
git commit -m "feat: add redesign option B homepage comp"
```

---

### Task 4: Preview link for Phillip

**Files:**
- Modify: `content-status.md` (add the 2026-10-05 meeting facts as client statements)

**Interfaces:**
- Consumes: both comps committed (Tasks 2–3).
- Produces: a draft PR and two working preview URLs.

- [ ] **Step 1: Record the meeting in `content-status.md`**

Read `content-status.md` first and match its format. Add Phillip's statements from 2026-10-05 (style brief, Park Kitchen reference, Vietnamese styling on highlights only, evening restaurant intention) with source "Phillip, meeting 2026-10-05"; mark restaurant details as unconfirmed with a pointer to `phillip.md`.

```bash
git add content-status.md
git commit -m "docs: record 2026-10-05 client meeting in content status"
```

- [ ] **Step 2: Ask Ross before pushing**

Ask: "OK to push `feature/redesign-options` and open a draft PR (do not merge) for a Netlify preview?" Wait for yes.

- [ ] **Step 3: Push and open draft PR**

```bash
git push -u origin feature/redesign-options
gh pr create --draft --base main --title "Redesign options A and B (do not merge)" --body "Two homepage comps for Phillip to choose between, per .scratch/redesign/spec.md.

- Option A: /redesign/option-a.html
- Option B: /redesign/option-b.html

Do not merge: this branch sits on top of PR #3, so its diff includes PR #3's changes. Comps only; no live pages changed.

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```

- [ ] **Step 4: Verify the preview and give Ross the links**

Once Netlify posts the deploy preview (`gh pr checks` shows it complete), `browser_navigate` to `https://deploy-preview-<N>--aromacoffeemiramar.netlify.app/redesign/option-a.html` and `/option-b.html` at 390px; run `check.js` on each.
Expected: both load (200), `pass: true`. Screenshot each with the Netlify toolbar visible and note whether it covers the switcher.

Message to Ross includes both URLs and this warning to pass on: "The Day menu button opens the current menu page, which still has the old brown styling. Only the homepage has been redesigned so far."
