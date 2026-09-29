# TODO

## Needs Client Input

- [ ] **Phone number:** Which is the current booking number? `(020) 456 7837` (on physical menu) or `(+64)27 480 9896` (on old website)? Are both active?
- [ ] **About page content:** The Vietnamese heritage story, how the cafe started, team info — none of this exists on the old site. Needs to come from the client.
- [ ] **Product photo:** Homepage centre column is a grey placeholder. Need a hero product image from the client.
- [ ] **Menu accuracy:** Menu was transcribed from physical photos (W23.2024 dated). Confirm current items and prices before launch.
- [ ] **Email address:** Is `aroma128d@gmail.com` still the preferred contact email?
- [ ] **Social media:** Facebook and Instagram links existed on the old site but actual profile URLs weren't captured. Get the links.

## Design & Layout

- [ ] **Site structure decision:** A proposed restructure is documented in `decisions.md` (decision 007) — puts MENU in header, drops category tabs, reworks homepage as a landing page. Ross has an alternative artistic direction to try. Compare both before committing.
- [ ] **Menu + contact page design review:** These pages were built to match the homepage design system but without a dedicated design comp. They need a proper layout and visual hierarchy pass — spacing, typography scale, how items flow on different screen sizes. Consider taking them through Claude Design for a comp before refining.
- [ ] **Mobile testing:** Responsive breakpoints exist but haven't been tested on real devices.
- [ ] **Favicon:** None set. Consider the leaf motif or a simple "A" from the brand serif.

## Build

- [ ] **`about.html`:** Create once client provides content
- [ ] **Legal pages:** The old privacy policy and terms were generator boilerplate with wrong phone numbers and USD amounts. Need proper NZ-specific versions if required.
- [ ] **Domain / hosting:** Decide where the new site will be hosted. Static HTML can go anywhere.
- [ ] **Meta tags:** No `<meta description>`, Open Graph tags, or structured data yet.
- [ ] **Accessibility audit:** Run through with a screen reader / axe. Basic a11y is in place (aria labels, focus styles, semantic HTML) but needs a proper check.
- [ ] **Performance:** Fonts are loaded from Google Fonts. Consider self-hosting for speed.

## Done

- [x] Homepage (`index.html`) built from Claude Design handoff
- [x] Menu page (`menu.html`) transcribed from physical menu photos
- [x] Contact page (`contact.html`) with address, hours, CTA
- [x] Design tokens and CSS custom properties established
- [x] Responsive layout with clamp() and breakpoints
- [x] Nav links connected between pages
