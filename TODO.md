# TODO

## Needs Client Input

- [ ] **Restaurant offering:** Café and Restaurant are confirmed to have different menu content. Confirm the Restaurant's customer-facing name, exact menu, operating days/hours, start date and whether it should appear before it opens.
- [ ] **Restaurant booking journey:** Confirm whether the earlier phone/email-only direction still applies to Restaurant bookings.
- [ ] **“Kiwi” direction:** Clarify which qualities Phillip valued in Park Kitchen and what “Kiwi” should make Aroma visitors feel; confirm any existing brand greens/reds that should anchor the palette.
- [ ] **Selective Vietnamese highlights:** Confirm which specific items should receive this treatment and approve the way they are described.
- [ ] **Phone number:** Which is the current booking number? `(020) 456 7837` (on physical menu) or `(+64)27 480 9896` (on old website)? Are both active?
- [ ] **About page content:** The Vietnamese heritage story, how the cafe started, team info — none of this exists on the old site. Needs to come from the client.
- [ ] **Early-draft photo/copy slots:** The historical `site/draft.html` still contains slots for its hero, Food/Coffee/Tea highlights, hero sentence and Egg Coffee description. Preserve these as draft evidence; do not treat them as the final-site brief.
- [ ] **Photography — Ross:** Plan and take the new photography Phillip requested, based on the selected direction's shot needs; obtain Phillip's approval and record usage permission. Final approved images do not yet exist.
- [ ] **Menu photographs — Phillip:** Phillip expects a new menu “next month” and plans to print it and photograph it (relayed 2026-10-31). Await the photographs and confirm they show the current menu; do not treat the relative timing as guaranteed.
- [ ] **Menu accuracy:** Café and Restaurant content are confirmed to differ, but neither exact menu is approved. Confirm current items, descriptions, prices and availability before launch; the W23.2024 transcription remains provisional.
- [ ] **Trading name:** Is it "Aroma Coffee", "Aroma Café" or "Aroma Coffee Works"? Using "Aroma Coffee" until confirmed.
- [ ] **Email address:** Is `aroma128d@gmail.com` still the preferred contact email?
- [ ] **Opening hours:** Resolve the provenance conflict (`session-log.md` says client-provided; `content-status.md` previously said Google Maps) and confirm hours for each day before launch.
- [ ] **Social media:** Facebook and Instagram links existed on the old site but actual profile URLs weren't captured. Get the links.

## Design & Layout

- [ ] **Review decision 010:** Ben/Codex review of `feature/site-structure-proposal` (header, homepage, menu anchors, accessibility fixes).
- [ ] **Screen reader pass:** NVDA check of the draft pages once client content is in.
- [ ] **Menu + contact page design review:** These draft pages were built to match the draft homepage design system but without a dedicated design comp. They need a proper layout and visual hierarchy pass — spacing, typography scale, how items flow on different screen sizes. Consider taking them through Claude Design for a comp before refining.
- [x] **Final visual direction:** Phillip selected presenter Design 2 / Ross Option A as the overall direction. Design 3 / Warm Neighbourhood is secondary inspiration; clarity wins where they conflict (Decision 034).
- [x] **Information architecture:** Decision 033 approves `Aroma · Menu · Visit`, one Menu page with specials first and a Café/Restaurant switch (Café first), with About deferred.
- [x] **Phase A concept curation and selection:** Ross presented Refined Minimal, Option A and Warm Neighbourhood. Phillip selected Option A / Design 2; mapping is recorded in `docs/client-selection-reconciliation.md`.
- [x] **Selected-direction Home refinement:** Ticket 07 is merged at `site/selected-home/`, preserving Option A's clarity with bounded Warm Neighbourhood influence.
- [ ] **Shared Menu refinements:** Ross accepted Ticket 08's direction. Complete the three recorded refinements: neutral/current-section switch styling, an opaque sticky-switch background and provisional 2024 Café items with `$?` prices. Ticket 09 proceeded in parallel and now awaits review.
- [ ] **Mobile testing:** Responsive breakpoints exist but haven't been tested on real devices.
- [ ] **Final-site favicon:** The temporary page uses the existing leaf SVG; choose and validate the final-site favicon later.

## Build

- [ ] **Final About experience:** Deferred under Decision 033. Revisit its navigation/place and design only after client story content and scope are approved.
- [ ] **Legal/privacy assessment:** Decide based on the actual launch functionality (analytics, forms, embeds and tracking); obtain appropriate client/legal advice if documents are required.
- [ ] **Self-host fonts:** Decide with Ben (privacy and performance); not started.
- [ ] **Domain access verification — Phillip/Ross:** Phillip reports “I got domain already” (relayed 2026-10-31). Confirm Ross has the required access and verify ownership, registrar, DNS and recovery details before cutover; do not infer DNS readiness from Phillip's report.
- [ ] **Domain / hosting recommendation:** Research and recommend the lowest-maintenance production model, including account/domain ownership, deployment workflow, cost, handover and recovery. Recovery blocks final verification/cutover, not Phase B design refinement. Do not assume the Netlify design preview is the final arrangement.
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
- [x] Final information architecture currently uses Home, Menu and Visit; Menu contains specials plus distinct Café/Restaurant content behind a switch, with Café first (Decisions 033 and 035).
- [x] About is deferred until later under Decision 033.
- [ ] Draft primary navigation is not final-launch-ready: all three draft pages link to missing `about.html`; resolve deliberately before final-site launch.
