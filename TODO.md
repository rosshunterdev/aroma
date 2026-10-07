# TODO

## Needs Client Input

- [ ] **Phone number:** Which is the current booking number? `(020) 456 7837` (on physical menu) or `(+64)27 480 9896` (on old website)? Are both active?
- [ ] **About page content:** The Vietnamese heritage story, how the cafe started, team info — none of this exists on the old site. Needs to come from the client.
- [ ] **Photos:** Hero photo plus one photo each for the Food, Coffee and Tea highlights. Shown as copy slots on `draft.html` until supplied.
- [ ] **Homepage copy slots:** Hero sentence in the client's words; Egg Coffee description; whether Tea stays a highlighted category.
- [ ] **Menu accuracy:** Menu was transcribed from physical photos (W23.2024 dated). Confirm current items and prices before launch.
- [ ] **Trading name:** Is it "Aroma Coffee", "Aroma Café" or "Aroma Coffee Works"? Using "Aroma Coffee" until confirmed.
- [ ] **Email address:** Is `aroma128d@gmail.com` still the preferred contact email?
- [ ] **Opening hours:** Resolve the provenance conflict (`session-log.md` says client-provided; `content-status.md` previously said Google Maps) and confirm hours for each day before launch.
- [ ] **Social media:** Facebook and Instagram links existed on the old site but actual profile URLs weren't captured. Get the links.

## Design & Layout

- [ ] **Review decision 010:** Ben/Codex review of `feature/site-structure-proposal` (header, homepage, menu anchors, accessibility fixes).
- [ ] **Screen reader pass:** NVDA check of the draft pages once client content is in.
- [ ] **Menu + contact page design review:** These draft pages were built to match the draft homepage design system but without a dedicated design comp. They need a proper layout and visual hierarchy pass — spacing, typography scale, how items flow on different screen sizes. Consider taking them through Claude Design for a comp before refining.
- [ ] **Mobile testing:** Responsive breakpoints exist but haven't been tested on real devices.
- [ ] **Final-site favicon:** The temporary page uses the existing leaf SVG; choose and validate the final-site favicon later.

## Build

- [ ] **`about.html`:** Create once client provides content
- [ ] **Legal/privacy assessment:** Decide based on the actual launch functionality (analytics, forms, embeds and tracking); obtain appropriate client/legal advice if documents are required.
- [ ] **Domain / hosting:** Decide where the new site will be hosted. Static HTML can go anywhere.
- [ ] **Meta tags:** Description, Open Graph and favicon added to draft pages (ticket 07). Still to do: `og:image` (needs photos), the page address tag (needs domain), structured data (needs confirmed phone and hours).
- [ ] **Self-host fonts:** Decide with Ben (privacy and performance); not started.
- [ ] **Accessibility audit:** Run through with a screen reader / axe. Basic a11y is in place (aria labels, focus styles, semantic HTML) but needs a proper check.
- [ ] **Performance:** Fonts are loaded from Google Fonts. Consider self-hosting for speed.

## Done

- [x] Draft homepage (`draft.html`) built from Claude Design handoff
- [x] Menu page (`menu.html`) transcribed from physical menu photos
- [x] Contact page (`contact.html`) with address, hours, CTA
- [x] Design tokens and CSS custom properties established
- [x] Responsive layout with clamp() and breakpoints
- [x] Draft navigation no longer links to missing `about.html` (decision 010)
- [x] Homepage carousel replaced with accessible tabs; focus and contrast fixes (decision 010)
