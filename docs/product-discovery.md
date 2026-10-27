# Final-site product discovery

**Status:** Phase A complete; selected-direction planning baseline reconciled for Phase B
**Started:** 2026-10-03
**Last reconciled:** 2026-10-27
**Objective:** Define what the finished Aroma Coffee website should enable and communicate before architecture or implementation begins. “Aroma Coffee” is provisional until Phillip confirms the trading name.

The temporary `index.html` page is complete and out of scope for redesign in this phase. The preserved full-site draft, `NEW-DESIGN.png`, design handoff, CSS and earlier decisions are evidence, not approved final requirements.

Content provenance remains canonical in [`content-status.md`](../content-status.md); established client questions remain canonical in [`TODO.md`](../TODO.md). This record captures only discovery outcomes and newly identified questions.
Resolved product vocabulary is defined in [`GLOSSARY.md`](../GLOSSARY.md).

## Established constraints

- Aroma has one confirmed location: 128D Park Road, Miramar.
- The earlier Café direction excluded online ordering and an online reservation form. Whether that remains appropriate for the Restaurant must be confirmed rather than inherited.
- Business facts not directly confirmed by Aroma must remain visibly unresolved rather than being inferred.
- No implementation begins during product discovery.

## Approved direction and process

- Phillip's confirmed brief is minimalist and Kiwi-oriented: green primary, red secondary, white background, and Vietnamese identity used selectively rather than as the dominant visual language.
- “Kiwi” is treated as an unpretentious, approachable local-neighbourhood atmosphere rather than literal national motifs.
- The final direction removes the Food/Coffee/Tea carousel.
- Menus are real, accessible web content rather than PDF-only artifacts.
- Review concepts may use explicit content/photo slots or representative imagery; production may never publish them as fact.
- Codex completed three original responsive Home-only concepts: Refined Minimal, Warm Neighbourhood and Day-to-night Aroma.
- Ross's Options A and C are quality benchmarks, not templates to copy.
- Ross curated Refined Minimal, Ross Option A and Warm Neighbourhood for Phillip's in-person review; Phillip selected Option A / presenter Design 2.
- Visit uses the confirmed address and an “Open in Google Maps” link rather than an interactive-map dependency.
- Phillip selected meeting presenter Design 2 / Ross Option A as the overall direction because its information presentation is basic and clear.
- Meeting presenter Design 3 / Warm Neighbourhood is secondary inspiration for distinctive qualities only where they do not reduce clarity.
- Use `Aroma · Menu · Visit`; the single Menu destination shows specials first, then a Café/Restaurant switch with Café first. About is deferred.
- Café and Restaurant have different menu content, but the exact menus remain unconfirmed.

## Remaining proposed product/design direction

The following remains the approved planning baseline but is not recorded as Ross-approved product detail until he explicitly confirms it:

- One recognisable Aroma brand with a casual Café mood and a more evening, refined, professional and considered Restaurant mood.
- A slightly Café-led homepage with Restaurant deliberately visible.
- A strong, mostly static Home hero led by candid venue-and-people photography.
- A concise Home information structure: hero, Café/Restaurant paths, selected highlights and Visit information.
- One clear Menu experience containing distinct Café and Restaurant content, without implying that the content is shared.
- A later people-, place- and community-led About experience with Vietnamese heritage integrated authentically, once its content and navigation place are approved.
- Small red labels/accents for Phillip-approved Vietnamese highlights.
- One practical Visit page with distinct offering hours, directions, contact and the confirmed Restaurant booking method.
- Compact mobile navigation, early contextual actions and no default sticky bottom bar.
- WCAG 2.2 AA, accurate local SEO, restrained performance-conscious implementation and the focused launch scope described in the specification.
- Local-first audiences, warm concise copy and the intended effortless menu/visit/booking outcome.

## Ross questions

- Which proposed content, mobile, accessibility and launch-scope details does Ross want revised before selected-direction refinement?
- Which, if any, specific qualities from Design 3 should be explored during refinement without weakening Design 2's clarity?

## Client questions

See [`TODO.md`](../TODO.md) for the existing questions about trading name, contact details, opening hours, menu accuracy, story, photography and social profiles.

- Café and Restaurant are confirmed to have different menu content. What are the exact current menus, and do they share the Aroma name, booking method and physical experience?
- What are the Restaurant days, hours, start date and intended booking method? Should it appear publicly before launch?
- What does “Kiwi” mean to Phillip in feeling and behaviour, and which aspects of Park Kitchen prompted the reaction?
- Are there existing brand greens/reds that must be used?
- Which specific items should receive Vietnamese highlighting, and what language may describe them?

## Technical/operational questions

- Research and recommend the lowest-maintenance production hosting, domain and deployment ownership model. Phillip/Aroma ownership versus Ross-managed hosting remains undecided; the Netlify preview is not a commitment.
- Research ongoing maintenance trade-offs before choosing developer-managed, client-editable or hybrid ownership. Base the recommendation on expected menu, price, hours and Restaurant-update frequency rather than assuming a CMS is needed.
- Appropriate local-search, accessibility, privacy and performance verification for the agreed launch experience.
- How to represent an intended Restaurant offering before its launch without publishing unavailable services or misleading local-search data.
- Whether and how a stylised static Miramar map can be produced accurately, accessibly and with lawful source/reference data.

## Deferred decisions

- Exact Restaurant content and calls to action can remain deferred until Phillip confirms its launch facts, but the information architecture must leave an intentional place for the offering.
- Later adjustments to the About page's emphasis can follow Phillip's review without blocking the initial product structure.
- Social feeds, newsletters, events, vouchers, online ordering, elaborate animation, loyalty features and other integrations are deferred unless Phillip identifies one as launch-critical.
- The optional illustrated Miramar map is deferred until Phillip selects a visual direction; the functional address and Maps link are not deferred.

## Evidence assessment

- **Park Kitchen:** The live homepage uses an immersive venue photograph as the hero and places a compact, uppercase navigation over it. The page is structurally simple and lets hospitality photography provide most of the atmosphere. Its current information architecture includes menu, reservations, vouchers and events; those features are not automatically relevant to Aroma.
- **Option A:** A close, restrained interpretation of the reference: centred wordmark/navigation, sans-serif typography, generous white space, square green actions and highly separated sections. Ross's “decent” assessment is provisional.
- **Option C:** A Swimsuit-inspired benchmark using strong sans-serif type, asymmetric information/image composition, dotted rules, red marked actions and a large footer wordmark. It is not client-approved.
- Options A and C are Ross's quality benchmarks. Their detailed labels, layouts, markup and visual systems are exploration, not requirements or templates.
- PR #4 merged the redesign evidence into `main`; Options A/B/C now live under `site/redesign/`. Their presence on the shared baseline does not imply product or client approval of the comps.
- **Meeting presenter mapping:** Design 1 = Refined Minimal, Design 2 = Ross Option A and Design 3 = Warm Neighbourhood. Phillip selected Design 2 and praised Design 3's distinctive quality. See `docs/client-selection-reconciliation.md`.

## Contradictions and cautions

- Earlier records treat Aroma primarily as a café; the new direction introduces a future Restaurant offering without operational facts.
- Earlier decisions assumed phone/email booking. The Restaurant booking journey has not been confirmed and must not inherit that assumption automatically.
- Options A/C display provisional phone, email, café hours, booking copy and particular Vietnamese items. Their presence in a comp does not upgrade their provenance.
- Earlier navigation/carousel decisions were made for the old product framing. They remain historical evidence and must be reassessed against the two-offering customer journeys.

## Interview log

Questions and answers will be recorded here as decisions or explicitly classified open matters, not as a verbatim transcript.

- **2026-10-07 — Brand relationship:** Proposed as one Aroma brand with two related moods. Restaurant receives a restrained tonal shift rather than a fully distinct identity. Recorded in decision 015.
- **2026-10-07 — Homepage offering hierarchy:** Resolved as Café-led, with Restaurant clearly visible rather than equally weighted or hidden.
- **2026-10-07 — Primary journeys:** Café prioritises menu and atmosphere. Restaurant prioritises menu, experience and booking.
- **2026-10-07 — Carousel:** Removed from the final-site direction in favour of a static Café-led opening and explicit Café/Restaurant paths. Recorded in decision 016.
- **2026-10-07 — Hero medium:** Venue-and-people photography should carry the opening atmosphere; product photography and typography are supporting elements.
- **2026-10-07 — Photography mood:** Candid neighbourhood warmth and community, with an intimate rather than glossy/editorial feel.
- **2026-10-07 — Meaning of “Kiwi”:** Resolved as a local, approachable and unpretentious vibe, not New Zealand-specific motifs.
- **2026-10-07 — Restaurant mood:** Use several subtle tonal changes together rather than a separate identity or one dramatic stylistic device.
- **2026-10-07 — Homepage composition:** Proposed the four-section minimalist structure; no additional homepage section is currently required.
- **2026-10-07 — Information architecture:** Proposed dedicated Café and Restaurant pages with obvious menus and actions. Recorded in decision 017.
- **2026-10-07 — Header:** Proposed offering-led navigation without a separate Menu item; explicit Ross approval remains required.
- **2026-10-07 — About strategy:** Proposed community and people first, with Vietnamese heritage integrated authentically. Recorded in decision 018.
- **2026-10-07 — Vietnamese highlights:** Proposed a small red accent or label only; Phillip decides which items qualify. Recorded in decision 019.
- **2026-10-07 — Menu experience:** Approved offering-specific HTML menus, simple category navigation when needed and optional secondary PDFs. Recorded in decision 020.
- **2026-10-07 — Visit/booking:** Proposed one shared utility page, separate offering hours and a repeated Restaurant booking action. Recorded in decision 021.
- **2026-10-07 — Mobile:** Proposed compact navigation, early contextual actions, readable menus and no default sticky action bar. Recorded in decision 022.
- **2026-10-07 — Accessibility:** Proposed WCAG 2.2 AA as a launch requirement with mechanical and manual verification. Recorded in decision 023.
- **2026-10-07 — Local SEO:** Proposed accuracy-led Miramar optimisation with offering-specific metadata and confirmed-fact structured data. Recorded in decision 024.
- **2026-10-07 — Launch scope:** Proposed the focused five-page experience and deferral of unvalidated promotional/integration features. Recorded in decision 025.
- **2026-10-07 — Hosting ownership:** Classified as technical/operational research; recommend a low-maintenance model covering ownership, cost, handover and recovery.
- **2026-10-07 — Maintenance model:** Classified as technical/operational research; compare developer-managed, client-editable and hybrid approaches after update needs are better understood.
- **2026-10-07 — Design placeholders:** Approved only when clearly marked for review; they cannot become production content without client approval. Recorded in decision 026.
- **2026-10-07 — Codex concepts:** Approved three original Home-only directions, differentiated by atmosphere rather than colour alone. Recorded in decision 027.
- **2026-10-07 — Existing comps:** Use Ross's Options A and C as benchmarks, not templates.
- **2026-10-07 — Option selection:** Ross curates 2–3 concepts from the combined pool before Phillip responds to or selects a direction.
- **2026-10-07 — Audiences:** Proposed the local-first audience order, with discovery, Restaurant and item-specific audiences following. Recorded in decision 028.
- **2026-10-07 — Voice:** Proposed warm, concise, local and welcoming copy. Recorded in decision 029.
- **2026-10-07 — Directions:** Approved a Maps link/no embed; the branded static illustration remains proposed. Recorded in decision 030.
- **2026-10-07 — Illustrated-map timing:** Reserve space if useful, but design it only after a visual direction is selected.
- **2026-10-07 — Product outcome:** Proposed the intended final impression and effortless menu/visit/booking journeys. Recorded in decision 031.
- **2026-10-20 / relayed 2026-10-27 — Concept selection:** Phillip selected presenter Design 2 / Ross Option A for clarity and liked presenter Design 3 / Warm Neighbourhood for its distinctive treatment. Recorded in decision 034.
- **2026-10-20 / relayed 2026-10-27 — Menu relationship:** Café and Restaurant have different menu content while retaining Decision 033's one-Menu-page model. Recorded in decision 035.
- **2026-10-27 — Operational dependencies:** Ross owns new photography; Phillip is reviewing existing menu photographs; the agency is recovering unavailable domain access for Ross.

## Readiness assessment

Ross has approved the planning approach, content-provenance rules, three-phase programme and Codex's Home-concept exercise. Phillip has now completed the Phase A selection gate. Individual product choices remain proposed where `decisions.md` says so. The specification must preserve unresolved client facts as explicit dependencies and must not invent Restaurant operations, booking, exact menus or launch timing.
