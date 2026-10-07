# TODO

## Needs Client Input

- [ ] **Restaurant offering:** Confirm its customer-facing name, menu relationship to the Café, operating days/hours, start date and whether it should appear before it opens.
- [ ] **Restaurant booking journey:** Confirm whether the earlier phone/email-only direction still applies to Restaurant bookings.
- [ ] **“Kiwi” direction:** Clarify which qualities Phillip valued in Park Kitchen and what “Kiwi” should make Aroma visitors feel; confirm any existing brand greens/reds that should anchor the palette.
- [ ] **Selective Vietnamese highlights:** Confirm which specific items should receive this treatment and approve the way they are described.
- [ ] **Phone number:** Which is the current booking number? `(020) 456 7837` (on physical menu) or `(+64)27 480 9896` (on old website)? Are both active?
- [ ] **About page content:** The Vietnamese heritage story, how the cafe started, team info — none of this exists on the old site. Needs to come from the client.
- [ ] **Early-draft photo/copy slots:** The historical `site/draft.html` still contains slots for its hero, Food/Coffee/Tea highlights, hero sentence and Egg Coffee description. Preserve these as draft evidence; do not treat them as the final-site brief.
- [ ] **Photography:** Obtain Phillip-approved venue-and-people hero photography plus the supporting Café, Restaurant and menu imagery required by the chosen direction. The early draft's missing `assets/product.jpg` is historical, not the final brief.
- [ ] **Menu accuracy:** Menu was transcribed from physical photos (W23.2024 dated). Confirm current items and prices before launch.
- [ ] **Trading name:** Is it "Aroma Coffee", "Aroma Café" or "Aroma Coffee Works"? Using "Aroma Coffee" until confirmed.
- [ ] **Email address:** Is `aroma128d@gmail.com` still the preferred contact email?
- [ ] **Opening hours:** Resolve the provenance conflict (`session-log.md` says client-provided; `content-status.md` previously said Google Maps) and confirm hours for each day before launch.
- [ ] **Social media:** Facebook and Instagram links existed on the old site but actual profile URLs weren't captured. Get the links.

## Design & Layout

- [ ] **Review decision 010:** Ben/Codex review of `feature/site-structure-proposal` (header, homepage, menu anchors, accessibility fixes).
- [ ] **Screen reader pass:** NVDA check of the draft pages once client content is in.
- [ ] **Menu + contact page design review:** These draft pages were built to match the draft homepage design system but without a dedicated design comp. They need a proper layout and visual hierarchy pass — spacing, typography scale, how items flow on different screen sizes. Consider taking them through Claude Design for a comp before refining.
- [ ] **Final visual direction:** Decision 014 records the client brief that supersedes the early draft's brown/cream/sage assumptions. Ross's Options A and C are benchmarks, not approval or templates.
- [ ] **Proposed product details:** Ross must explicitly approve the proposed Café/Restaurant hierarchy, information architecture and omission of a generic Menu item before they are treated as final requirements.
- [ ] **Three Home design directions:** Under `site/concepts/`, produce equally mature, responsive, noindex Refined minimal, Warm neighbourhood and Day-to-night Aroma Home concepts using one shared structure/content pack and labelled placeholders.
- [ ] **Concept curation and selection:** Ross reviews the combined Codex/Ross pool and selects the strongest two or three total concepts for Phillip; Phillip's response/selection gates whole-site refinement.
- [ ] **Mobile testing:** Responsive breakpoints exist but haven't been tested on real devices.
- [ ] **Final-site favicon:** The temporary page uses the existing leaf SVG; choose and validate the final-site favicon later.

## Build

- [ ] **Final About experience:** Design after concept selection and build under `site/` once client story content is approved.
- [ ] **Legal/privacy assessment:** Decide based on the actual launch functionality (analytics, forms, embeds and tracking); obtain appropriate client/legal advice if documents are required.
- [ ] **Self-host fonts:** Decide with Ben (privacy and performance); not started.
- [ ] **Domain / hosting:** Research and recommend the lowest-maintenance production model, including account/domain ownership, deployment workflow, cost, handover and recovery. Do not assume the Netlify design preview is the final arrangement.
- [ ] **Maintenance model:** Research developer-managed, client-editable and hybrid options against the expected frequency of menu, price, hours and Restaurant updates before selecting technology.
- [ ] **Final-site metadata:** The draft has basic description/Open Graph/favicon work, but final `og:image`, canonical/domain values and structured data depend on approved assets and confirmed phone/hours.
- [ ] **Accessibility audit:** Run through with a screen reader / axe. Basic a11y is in place (aria labels, focus styles, semantic HTML) but needs a proper check.
- [ ] **Performance:** Fonts are loaded from Google Fonts. Consider self-hosting for speed.

## Done

- [x] Draft homepage (`site/draft.html`) built from Claude Design handoff
- [x] Menu page (`site/menu.html`) transcribed from physical menu photos
- [x] Contact page (`site/contact.html`) with address, hours, CTA
- [x] Design tokens and CSS custom properties established
- [x] Responsive layout with clamp() and breakpoints
- [x] Draft navigation no longer links to missing `about.html` (decision 010)
- [x] Homepage carousel replaced with accessible tabs; focus and contrast fixes (decision 010)
- [ ] Proposed final information architecture is Home, Café, Restaurant, About and Visit; Ross approval is still required.
- [ ] Proposed final header is wordmark/home plus Café, Restaurant, About and Visit without a generic Menu link; Ross approval is still required.
- [ ] Draft primary navigation is not final-launch-ready: all three draft pages link to missing `about.html`; resolve deliberately before final-site launch.
