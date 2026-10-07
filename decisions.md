# Decisions

Architectural, design, and content decisions made during the Aroma Coffee rebuild.

## 001 — Static HTML + CSS, no framework

**Date:** 2026-09-17
**Decision:** Ship as plain HTML + CSS with no build system.
**Why:** The site is 4 pages for a single cafe. A framework adds complexity with no benefit. Pages can be hosted anywhere (Netlify, Cloudflare Pages, even shared hosting).

## 002 — Single location, not three

**Date:** 2026-09-18
**Decision:** Treat Aroma Coffee as a single-location business (128D Park Road, Miramar).
**Why:** The old site's `/shops` page listed 3 locations (Miramar, Cuba Mall, Island Bay) but the client confirmed only the Miramar location. The old site data was outdated or incorrect.
**Impact:** No need for a "Locations" page — the contact page covers the single address.

## 003 — No online ordering or reservations

**Date:** 2026-09-18
**Decision:** No e-commerce, no reservation form. Bookings via phone/email CTA.
**Why:** The client doesn't sell products online. The old reservation form's backend status is unknown. A phone number CTA is simpler and confirmed by the client.

## 004 — 4-page site structure

**Date:** 2026-09-18
**Status:** SUPERSEDED by proposed decision 017 for the final site. Retained as historical café-only structure.
**Decision:** Home, Menu, Contact, About — down from the old site's 14 routes.
**Why:** 6 of the old site's 14 pages were broken or empty (placeholder product pages, 404 routes, duplicate content). The new structure matches what a cafe customer actually needs: see the menu, find the location, learn about the business.

## 005 — Menu transcribed from physical photos

**Date:** 2026-09-18
**Decision:** Transcribe menu items and prices directly from the client's physical menu photos.
**Why:** The old site had no real menu content (only placeholder text). Physical menu photos were provided by the developer who visited the cafe. The W23.2024 dated version was used as the most recent.
**Risk:** Prices and items may have changed since the photos were taken. Needs client confirmation before launch.

## 006 — Layout and structure is first-pass

**Date:** 2026-09-18
**Decision:** Current page layouts are functional but need a proper design pass.
**Why:** The homepage was implemented from a Claude Design handoff with a clear spec. The menu and contact pages were built to match the same design system but without a dedicated design comp. They need review for visual hierarchy, spacing, and how the pages feel as a whole site rather than individual screens.
**Action:** Run a design review session before considering these pages final.

## 007 — Site structure and navigation redesign (PROPOSED)

**Date:** 2026-09-18
**Status:** SUPERSEDED by 010 — MENU in header adopted; 008's homepage tabs retained instead of removing them.

### Current structure (problems)

```
Header:   HOME          ABOUT   CONTACT
Tabs:     FOOD   COFFEE   TEA
```

- "Menu" is the #1 thing cafe visitors look for but has no direct link in the header nav
- Category tabs on the homepage look like they switch content in place but actually navigate away to `menu.html` — confusing interaction pattern
- Homepage functions as a half-menu rather than a landing page
- ABOUT and CONTACT as the only header links feels sparse, especially while About has no content

### Proposed structure

```
Header:   AROMA (logo/home)     MENU   ABOUT   CONTACT
```

**4 pages, no category tabs:**

| Page | Role |
|------|------|
| **Home** | Landing page — hero image, one-line brand intro, then 3 blocks: Menu preview, Visit (address + hours), Book (phone CTA). Every visitor gets their answer in one scroll. |
| **Menu** | Full menu with on-page anchor tabs at the top (`Breakfast & Lunch` / `Coffee & Drinks` / `Kids`). Single page, scrollable, like reading the physical menu. |
| **About** | Vietnamese heritage story (when client provides content). Earns its place because the heritage is the differentiator — egg coffee, pho, shaking coffee aren't standard Wellington cafe fare. |
| **Contact** | Address, hours, phone/email CTA, optional map embed. |

### Why this is better

1. **"Menu" in the header** — the single biggest usability win. The most common reason someone visits a cafe website.
2. **No tabs on the homepage** — removes the confusing navigate-away pattern. Homepage becomes a proper landing page.
3. **On-page anchors on menu** — gives the tab filtering feel without page navigation confusion.
4. **Simpler header** — logo + 3 links. Clean at all widths, no wrapping issues on mobile.

### What stays the same

All CSS, tokens, colours, typography, footer, leaf decoration. The visual language doesn't change — only how pages are organised and how nav works.

### Alternative direction

Ross has an artistic structure in mind that may take a different approach. This proposal should be evaluated alongside that before committing to either. The two should be compared on both usability and the visual feel Ross is going for.

---

## 008 — Homepage carousel instead of static layout

**Date:** 2026-09-18
**Status:** SUPERSEDED by decision 010's accessibility changes and proposed decision 016 for the final site. Retained only as historical early-draft evidence.
**Decision:** Replace the static three-column homepage content with a tab-controlled carousel (Food / Coffee / Tea), defaulting to the Coffee slide.
**Why:** Ross's artistic direction. The tabs become real in-page controls instead of confusing navigation links to menu.html. Each slide highlights two signature items from that category. The homepage becomes a single-screen landing page with a "VIEW MENU" CTA and a compact "Visit Us" block in the bottom-left.
**Impact:** Homepage now uses vanilla JS (~40 lines inline). The structure decision from 007 (MENU in header) is partially addressed — the CTA handles menu access for now, header nav change deferred.

---

## 009 — Temporary root page while the final site is developed

**Date:** 2026-09-30
**Decision:** Use `site/index.html` for a standalone temporary landing page and preserve the early homepage draft at `site/draft.html` with its existing Menu and Contact pages.
**Why:** The temporary page can be removed cleanly without deleting, duplicating or substantially restructuring the unfinished site. Draft-page Home links point to `draft.html`, while the temporary page exposes no navigation into provisional content.
**Impact:** The temporary page is an interim public entry point, not an approved final homepage. Any release replacement occurs deliberately within the published `site/` directory.

---

## 010 — Header with Menu and Visit, homepage tabs without autoplay

**Date:** 2026-10-01
**Status:** BUILT — agreed by Ross in Session 5, implemented on `feature/site-structure-proposal`, awaiting Ben/Codex review. Visual direction (brown/cream/sage) SUPERSEDED by 011 in Session 7; structure stands. Spec: `.scratch/site-structure/spec.md`; visual reference: `.scratch/site-structure/mock.html`.
**Decision:**
- Header becomes wordmark (home) + MENU + VISIT. HOME is dropped because the wordmark already links home. ABOUT is removed until client story content exists. `contact.html` keeps its file name and is labelled "Visit".
- Homepage keeps 008's Food / Coffee / Tea tabs but drops auto-rotation. Tabs follow the WAI-ARIA tabs pattern and the "See all" link targets the matching `menu.html` anchor.
- Homepage gains a hero (one `h1`, client copy slot, hours, Call / Find us) and an in-flow Visit section replacing the absolutely positioned block.
- Menu anchors match the homepage tabs one-to-one.
**Why:** 2026-10-01 design review: the carousel failed WCAG 2.2.2 (no pause control), MENU was unreachable from the header, ABOUT linked to a missing page, and the Visit block could overlap content on mobile.
**Supersedes:** 008's auto-rotation and 007's deferred header question (MENU now in header). 008's tab direction stands.

---

## 011 — Kiwi redesign: two homepage comps for Phillip to choose

**Date:** 2026-10-05
**Status:** BUILT — merged to `main` through PR #4. `site/redesign/option-a.html` and `option-b.html` remain design evidence awaiting Ross's curation and Phillip's response.
**Decision:** Follow Phillip's 2026-10-05 brief (green primary `#1F5C3A`, red secondary `#C8372D`, white background, minimalist like Park Kitchen, Vietnamese styling only on highlighted items, Day/cafe and Evening/restaurant split). Present two self-contained homepage comps: A "Park Kitchen close" (Figtree, uppercase nav, red outline + tag on Vietnamese cards) and B "Warmer Kiwi" (Fraunces headings, green header/footer bands, red-edged featured card). Photos and restaurant details are copy slots.
**Why:** Ross promised Phillip a couple of options; standalone comps let the options differ properly without touching live or draft pages.
**Supersedes:** 010's visual direction only. Spec: `.scratch/redesign/spec.md`; plan: `.scratch/redesign/plan.md`.

---

## 012 — Publish only `site/`; repo private

**Date:** 2026-10-05
**Status:** VERIFIED — merged to `main` through PR #4. Its preview served website pages and returned 404 for repository documentation.
**Decision:** Website files live in `site/`; `netlify.toml` sets `publish = "site"`. GitHub repo made private (Ben keeps write access).
**Why:** Netlify was publishing the repo root, so `HANDOVER.md` (including pricing notes), `decisions.md`, `phillip.md`, `audit/` and `CLAUDE.md` were reachable by URL, and the public repo exposed them on GitHub too.
**Impact:** Serve locally with `npx serve site`. All future website work stays inside `site/`; internal records stay outside it.

---

## 013 — Option C: Swimsuit-inspired homepage comp

**Date:** 2026-10-07
**Status:** VERIFIED — merged to `main` through PR #4 at `site/redesign/option-c.html`. Ross's deeper review remains pending.
**Decision:** Add a third homepage comp inspired by swimsuitcoffee.com (shown to Phillip, who liked it). Kiwi palette from 011 with Swimsuit's layout: centred wordmark with split nav, info-left/photo-right hero, dotted rules, red highlight links in place of yellow, green footer holding Find us/Hours/Book a table with a giant AROMA wordmark. Schibsted Grotesk. Same copy and slots as Option A. Options A and B left untouched.
**Why:** Ross wants designs he is happy with before showing Phillip in person; Phillip responded well to Swimsuit. Ross and Ben currently prefer Option A.

## 014 — Revised final-site brand and offering direction

**Date:** 2026-10-05
**Status:** APPROVED CLIENT DIRECTION — exact visual execution and information architecture remain unresolved.
**Provenance:** Phillip, relayed by Ross after their client meeting.

**Decision:** The final website should use a minimalist, Kiwi-oriented visual direction with green as the primary colour, red as the secondary colour and white as the background. Vietnamese identity should appear selectively around approved special or highlighted items rather than dominate the overall visual language. The product must account for Café and Restaurant as distinct customer-facing offerings within Aroma's intended future operation.

**Meaning of “Kiwi”:** Treat it as an atmosphere of unpretentious, approachable local-neighbourhood hospitality. Do not introduce literal New Zealand motifs or themed national imagery merely to signal the brief.

**Design process:** Park Kitchen is an explicit client reference for discussion, not a site to copy. Multiple genuinely distinct directions are to be shown to Phillip before final visual approval.

**Supersedes:** The visual assumptions embodied in the brown/cream/sage early draft and its handoff. It does not approve a particular layout, typography treatment, component, carousel, navigation model, page structure, item highlight or piece of copy.

**Evidence under review:** Options A and C on `origin/feature/redesign-options` are Ross/Claude explorations created in response to this brief. They are quality benchmarks rather than approved templates; neither option has client approval.

---

## 015 — One Aroma brand with two related moods

**Date:** 2026-10-07
**Status:** PROPOSED — supported by discovery; requires explicit Ross confirmation.
**Provenance:** Ben during final-site product discovery.

**Decision:** Café and Restaurant should remain recognisably part of one Aroma brand rather than becoming separate brands or radically different experiences. The Café expression may feel more casual and coffee-oriented. The Restaurant may shift toward an evening, refined, professional and considered mood, while retaining enough shared visual language that the relationship is immediate. A specifically romantic mood is not required.

**Restaurant tonal shift:** Use a restrained combination of darker evening photography/lighting, more refined typography and spacing, deeper variations of the shared green/red palette, and somewhat more formal service language. No single device should create a hard visual break from the Café.

**Guardrail:** Differences should communicate context and atmosphere, not make visitors wonder whether they have entered a different business.

**Homepage hierarchy:** Lead slightly with the Café while giving the Restaurant clear, intentional visibility. The two offerings should not receive mechanically equal emphasis, but the Restaurant must not feel hidden or incidental.

**Primary journeys:** Café visitors should be able to view its menu and understand its atmosphere first. Restaurant visitors should be able to view its menu, understand the dining experience and then make a booking. Hours, directions and general contact remain important utilities rather than the defining journeys.

**Still unresolved:** Which specific visual variables create the tonal shift and how the hierarchy is composed on the page.

---

## 016 — Static Café-led homepage opening

**Date:** 2026-10-07
**Status:** APPROVED — Ben selected this direction and Ross explicitly supported removing the carousel.
**Provenance:** Ben during final-site product discovery.

**Decision:** Remove the Food/Coffee/Tea carousel from the final homepage. Use a strong, mostly static Café-led hero followed by clear paths into the Café and Restaurant experiences.

**Hero emphasis:** A strong photograph of the venue and people should carry the Café atmosphere. It should feel candid, local, community-oriented, warm and intimate rather than glossy or heavily staged. Food or coffee close-ups and typography may support it but should not dominate the opening.

**Core homepage composition:** Keep the page deliberately concise: (1) Café-led photographic hero, (2) clear Café and Restaurant paths, (3) a small set of selected highlights including approved Vietnamese highlights, and (4) Visit information covering location, hours and the appropriate contact/booking routes. Fuller menus, story content and Restaurant detail belong on dedicated pages.

**Why:** The offering architecture and primary journeys are better communicated directly than through rotating product categories. Café remains slightly primary while Restaurant stays deliberately visible.

**Supersedes:** Decision 008 as a final-site direction. The existing carousel remains useful only as historical design evidence.

**Does not decide:** The exact photograph, composition, copy or supporting visual treatment.

---

## 017 — Offering-led final-site information architecture

**Date:** 2026-10-07
**Status:** PROPOSED — especially the removal of a generic Menu navigation item; requires explicit Ross confirmation.
**Provenance:** Ben during final-site product discovery.

**Decision:** Use five top-level destinations: Home, Café, Restaurant, About and Visit. Café and Restaurant each receive a dedicated page for their atmosphere, menu and relevant primary actions.

**Navigation principle:** Both offering pages must remain simple to navigate. Menu access and the offering's main action should be obvious without complex nested navigation or unnecessary interaction.

**Header model:** Aroma wordmark/home, Café, Restaurant, About and Visit. Do not add a generic Menu link; each offering page presents its own menu prominently, avoiding ambiguity between the two offerings.

**Would supersede:** Decision 004's café-only Home/Menu/Contact/About structure and the earlier assumption that both offerings belong on one shared Menu page if approved.

**Still unresolved:** Mobile presentation and whether labels require adjustment after client-approved naming is confirmed.

---

## 018 — About strategy

**Date:** 2026-10-07
**Status:** PROPOSED — subject to Ross review and client content.
**Provenance:** Ben during final-site product discovery.

**Decision:** The About page should lead with the people, place and local community behind Aroma. Phillip's Vietnamese background and culinary influence should be presented as an authentic part of that story without returning the whole site to a Vietnamese-dominant visual identity.

**Client boundary:** Phillip must provide or approve the factual story, emphasis and wording. The balance may be revised after he reviews the site or as Aroma evolves.

---

## 019 — Restrained Vietnamese highlight treatment

**Date:** 2026-10-07
**Status:** PROPOSED — subject to Ross review and client item approval.
**Provenance:** Ben during final-site product discovery.

**Decision:** Mark approved Vietnamese highlights with a small red accent or label. Do not create a separate ornamental theme or visually dominant treatment around them.

**Client boundary:** Phillip must confirm which specific items qualify and approve any factual item descriptions.

---

## 020 — Offering-specific web menus

**Date:** 2026-10-07
**Status:** APPROVED — Ben approved it and Ross explicitly supported menus as real web content.
**Provenance:** Ben during final-site product discovery.

**Decision:** Café and Restaurant each present a real, mobile-friendly web menu on their dedicated offering page. Use clear category headings and prices, with short on-page jump links only when menu length warrants them. Do not use filtering, carousels or a PDF-only menu.

**Secondary format:** A downloadable PDF may be offered as a convenience after the web menu, but it must not replace accessible page content.

**Client boundary:** Items, descriptions, prices and menu availability require client confirmation.

---

## 021 — Visit and booking journey

**Date:** 2026-10-07
**Status:** PROPOSED — subject to Ross review and client facts.
**Provenance:** Ben during final-site product discovery.

**Decision:** Visit is the shared practical-information page. It should show separately confirmed Café and Restaurant hours, the confirmed address with map/directions, confirmed phone and email, client-supplied transport or parking information when useful, and the confirmed Restaurant booking method.

**Cross-page journey:** Repeat a prominent booking action on the Restaurant page so visitors do not have to leave the offering journey to act.

**Client boundary:** Restaurant hours, booking method, phone, email and any transport/parking claims remain unconfirmed. Do not publish placeholders as facts.

---

## 022 — Mobile experience

**Date:** 2026-10-07
**Status:** PROPOSED — subject to Ross review.
**Provenance:** Ben during final-site product discovery.

**Decision:** Use a compact mobile header with simple access to Café, Restaurant, About and Visit. Place the relevant primary action near the top of each offering page: menu access for Café, and menu plus booking for Restaurant. Menus must remain readable and touch targets comfortably sized.

**Restraint:** Do not add a persistent bottom action bar by default. Consider one only if later usability evidence demonstrates a clear benefit.

---

## 023 — Accessibility target

**Date:** 2026-10-07
**Status:** PROPOSED — approved by Ben as a launch requirement; requires explicit Ross confirmation.
**Provenance:** Ben during final-site product discovery.

**Decision:** Treat WCAG 2.2 Level AA as a launch requirement. The finished experience must support keyboard operation, visible focus, sufficient contrast, semantic structure, appropriate alternative text, reduced motion, mobile zoom/reflow and non-colour cues for meaningful states or labels.

**Verification:** Accessibility must be checked mechanically where practical and manually across keyboard, reflow and representative assistive-technology journeys before launch.

---

## 024 — Local-search approach

**Date:** 2026-10-07
**Status:** PROPOSED — subject to Ross review and confirmed facts.
**Provenance:** Ben during final-site product discovery.

**Decision:** Optimise the finished site for Aroma's confirmed Miramar location with accurate offering-specific titles and descriptions, consistent location/contact/hours information, and direct access to menus and directions. Use structured local-business data only where its facts and offering status are confirmed.

**Guardrail:** Avoid keyword-stuffed copy and do not represent the Restaurant as currently available before Phillip confirms its operating status. The appropriate Restaurant schema and any pre-launch treatment require technical review once the client facts are known.

---

## 025 — Final-site launch scope

**Date:** 2026-10-07
**Status:** PROPOSED — approved by Ben; requires explicit Ross confirmation.
**Provenance:** Ben during final-site product discovery.

**In scope:** Home, Café, Restaurant, About and Visit; offering-specific web menus; confirmed contact, directions, hours and booking journey; approved photography and copy; responsive behaviour; WCAG 2.2 AA; performance; local SEO; essential metadata and favicon.

**Deferred unless Phillip makes them essential:** Social feeds, newsletter signup, events, vouchers, online ordering, elaborate animation, loyalty features and other third-party integrations.

**Why:** The first finished release should completely serve the agreed customer journeys without adding operational burden or unvalidated features.

---

## 026 — Placeholder policy for design review

**Date:** 2026-10-07
**Status:** APPROVED — Ben approved it and Ross explicitly praised the provenance/placeholder rules.
**Provenance:** Ben during final-site product discovery.

**Decision:** Client-facing design explorations may use clearly marked content/photo slots or representative temporary imagery so visual directions can be evaluated before final assets exist.

**Guardrails:** Provisional material must be unmistakably labelled for review, must not assert unconfirmed business facts, and must not ship. Production launch remains blocked on Phillip-approved copy, menus, operational details and photography.

---

## 027 — Three Codex Home concepts and Ross curation

**Date:** 2026-10-07
**Status:** APPROVED — Ross explicitly authorized Codex to create its own three Home concepts and will curate the client set.
**Provenance:** Ben during final-site product discovery.

**Decision:** Codex creates three genuinely distinct Home-page concepts using one shared information structure/content pack:

1. **Refined minimal:** Photography-led, crisp sans-serif typography and generous whitespace; closest in spirit to the qualities observed in Park Kitchen.
2. **Warm neighbourhood:** More intimate, community-led and tactile while remaining minimalist.
3. **Day-to-night Aroma:** The shared Café-to-Restaurant tonal transition is the defining visual idea.

**Guardrail:** Options must differ meaningfully in atmosphere and brand expression, not merely colour. Phase A is Home-only; Café, Restaurant, About and Visit concepts follow after direction selection.

**Relationship to existing comps:** Ross's Options A and C are quality/reference benchmarks only. Codex must produce original directions that are competitive with or stronger than those references without copying their markup, layout or exact visual system.

**Review method:** Ross reviews the combined pool of three Codex concepts and his existing explorations, then selects the strongest 2–3 total concepts for Phillip's in-person review. Phillip responds to or selects from that curated set. The chosen direction is refined afterward, borrowing only limited elements where they preserve coherence.

---

## 028 — Target audience priority

**Date:** 2026-10-07
**Status:** PROPOSED — subject to Ross review.
**Provenance:** Ben during final-site product discovery.

**Priority order:**

1. Miramar locals and regulars deciding where to eat or get coffee.
2. New nearby customers discovering Aroma through search, maps or recommendation.
3. People considering the Restaurant for an evening meal.
4. Visitors drawn by particular menu items or approved Vietnamese highlights.

**Implication:** Local utility and atmosphere take precedence over destination-marketing language, while Restaurant and item-specific journeys remain intentionally supported.

---

## 029 — Writing voice

**Date:** 2026-10-07
**Status:** PROPOSED — subject to Ross review and client approval.
**Provenance:** Ben during final-site product discovery.

**Decision:** Use a warm, concise and straightforward voice. Keep it locally grounded without performing a stereotyped “Kiwi” tone, welcoming rather than promotional, and free from generic luxury language, exaggerated claims or long brand manifestos. Restaurant copy may be slightly more polished while remaining recognisably Aroma.

**Client boundary:** Phillip must supply or approve factual business claims, story content and final customer-facing copy.

---

## 030 — Directions and optional illustrated map

**Date:** 2026-10-07
**Status:** APPROVED for the Maps-link/no-embed direction; the illustrated-map enhancement remains PROPOSED.
**Provenance:** Ben during final-site product discovery.

**Decision:** Visit should show the confirmed address with a clear “Open in Google Maps” link rather than relying on an embedded interactive map.

**Design opportunity:** Explore an optional static PNG/JPEG illustration of Miramar using the chosen site's colour scheme and an Aroma location pin. It is orientation/atmosphere support only and must not replace the address or external directions link.

**Timing:** Reserve the possibility in the Visit layout, but defer designing the illustration until Phillip has selected a visual direction.

**Research required:** Confirm geographic accuracy, useful alternative text, responsive legibility and lawful map/reference-data use before including the illustration.

---

## 031 — Final-site product outcome

**Date:** 2026-10-07
**Status:** PROPOSED — approved by Ben; requires explicit Ross confirmation.
**Provenance:** Ben during final-site product discovery.

**Outcome:** The finished site should leave visitors with a clear impression that Aroma is a warm, local Miramar café with an inviting atmosphere and a credible, slightly more refined Restaurant experience. It should be effortless to reach the appropriate menu, plan a visit or follow the confirmed dinner-booking journey.

**Review:** Ross reviewed the completed discovery direction and was broadly happy with it, approving progression into specification.

---

## Open — Phone number discrepancy

**Status:** UNRESOLVED — needs client confirmation
**Numbers found:**
- `(020) 456 7837` — printed on the physical menu, listed as booking number
- `(+64)27 480 9896` — used in the old site footer and reservation page
- The old site's terms page also listed `(020) 4567837`

**Currently using:** `(020) 456 7837` in footer and contact page (matches the physical menu).
**Action needed:** Ask the client which number is current and whether both are active.
