# Final-site product discovery

**Status:** Approved by Ben and broadly approved by Ross; specification drafted for review
**Started:** 2026-10-03
**Last reconciled:** 2026-10-07
**Objective:** Define what the finished Aroma Coffee Works website should enable and communicate before architecture, specification or implementation begins.

The temporary `index.html` page is complete and out of scope for redesign in this phase. The preserved full-site draft, `NEW-DESIGN.png`, design handoff, CSS and earlier decisions are evidence, not approved final requirements.

Content provenance remains canonical in [`content-status.md`](../content-status.md); established client questions remain canonical in [`TODO.md`](../TODO.md). This record captures only discovery outcomes and newly identified questions.
Resolved product vocabulary is defined in [`GLOSSARY.md`](../GLOSSARY.md).

## Established constraints

- Aroma has one confirmed location: 128D Park Road, Miramar.
- The earlier Café direction excluded online ordering and an online reservation form. Whether that remains appropriate for the Restaurant must be confirmed rather than inherited.
- Business facts not directly confirmed by Aroma must remain visibly unresolved rather than being inferred.
- No implementation begins during product discovery.

## Product/design decisions

- The early draft's brown/cream/sage visual language is historical, not the final-site direction.
- The final direction must interpret Phillip's minimalist, Kiwi-oriented green/red/white brief.
- “Kiwi” means an unpretentious, approachable local-neighbourhood atmosphere rather than literal New Zealand symbols or themed styling.
- Vietnamese identity is a selective highlight for client-approved special items, not the site's dominant visual language.
- Café and Restaurant belong to one recognisable Aroma brand. The Café should feel relatively casual and coffee-oriented; the Restaurant may feel more evening, refined, professional and considered without becoming a separate-looking business. A specifically romantic mood is not required.
- The Restaurant mood should emerge through a restrained combination of evening photography/lighting, refined typography and spacing, deeper shared colours and slightly more formal service presentation.
- The homepage should be Café-led with the Café only slightly primary. Restaurant visibility must be deliberate and prominent enough that visitors recognise it as a real Aroma offering.
- Café journey priority: view the Café menu, then understand its atmosphere.
- Restaurant journey priority: view the Restaurant menu, understand its dining experience, then make a booking. The booking method remains a client question.
- The final homepage will not use the Food/Coffee/Tea carousel. It will open with a strong, mostly static Café-led hero and provide clear paths into both offerings.
- The hero should be led by a strong photograph of the venue and people so visitors understand the Café atmosphere immediately.
- Hero photography should feel candid, local, community-oriented, warm and intimate rather than polished advertising.
- The minimalist homepage is limited to four core sections: Café-led hero; Café/Restaurant paths; a small set of selected highlights; and Visit information. Detailed menus, story and Restaurant content belong deeper in the site.
- Final top-level destinations are Home, Café, Restaurant, About and Visit. Café and Restaurant each have a dedicated, simply navigable page containing their atmosphere, menu and relevant actions.
- The main header uses the Aroma wordmark as Home plus Café, Restaurant, About and Visit. There is no generic Menu link; each offering exposes its own menu prominently.
- About should lead with Aroma's people, place and local community. Vietnamese background and culinary influence belong authentically within that story, subject to Phillip's content and approval.
- Approved Vietnamese highlights use a small red accent or label rather than ornamental themed decoration or a separate visual system.
- Each offering page contains a readable, mobile-friendly web menu with clear categories and prices. Category jump links are used only for long menus; no filtering, carousel or PDF-only experience. A PDF may be secondary.
- Visit is the practical information hub: separate Café/Restaurant hours, address and directions, contact details, useful client-supplied access information and the confirmed Restaurant booking method. Restaurant also repeats its booking action.
- Mobile uses a compact, simple header; keeps all top-level destinations easy to reach; surfaces offering-specific actions early; and avoids a persistent bottom action bar unless testing supports it.
- WCAG 2.2 AA is a launch requirement, including keyboard access, focus visibility, contrast, semantic structure, alternative text, reduced motion, non-colour cues and mobile zoom/reflow.
- Local SEO prioritises accurate Miramar information, distinct offering metadata, consistent confirmed facts, direct menu/directions access and factually safe structured data. No keyword stuffing or premature Restaurant availability claims.
- Launch scope is limited to the five core pages, web menus, confirmed visit/booking information, approved content and photography, and launch-quality accessibility, responsiveness, performance, local SEO and metadata.
- Design-review options may use explicit content/photo slots or representative temporary imagery. Launch remains blocked on Phillip-approved facts, copy, menus and photography.
- Phillip should receive three meaningfully different directions using the same product structure: Refined minimal, Warm neighbourhood and Day-to-night Aroma.
- Existing Option A/B are reference evidence only; all three client options should be redesigned from the resolved structure and presented at comparable maturity.
- Client review should select one overall direction first; later refinement may borrow limited elements from the alternatives without collapsing the concepts into a mixed design.
- Intended outcome: Aroma feels like a warm local Miramar Café with an inviting atmosphere and a credible, slightly more refined Restaurant experience; finding the appropriate menu, planning a visit and booking dinner are effortless.
- Audience priority is Miramar locals/regulars first, nearby discoverers second, prospective Restaurant diners third, and visitors drawn by particular items or Vietnamese highlights fourth.
- Writing should be warm, concise, straightforward and locally grounded without forced Kiwi phrasing. Restaurant may be slightly more polished, but the voice remains welcoming, unexaggerated and recognisably Aroma.
- Visit uses the confirmed address and an “Open in Google Maps” link, not an interactive map dependency. A colour-matched static Miramar illustration with an Aroma pin is a candidate visual enhancement subject to accuracy, accessibility and licensing research.
- Phillip must review multiple meaningfully distinct design directions before the final visual direction is approved.

## Ross questions

- What does Ross think makes Option A “decent”, and what does he want preserved or challenged in the next options?
- What artistic guidance does Ross want applied to each of the three agreed concepts before they are presented to Phillip?
- After the options are prepared, do Ross and Ben agree they are equally mature and genuinely distinct enough for a fair client choice?

## Client questions

See [`TODO.md`](../TODO.md) for the existing questions about trading name, contact details, opening hours, menu accuracy, story, photography and social profiles.

- Do Café and Restaurant share the Aroma name, one menu, one booking method and one physical experience, or do they differ?
- What are the Restaurant menu, days, hours, start date and intended booking method? Should it appear publicly before launch?
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
- **Option B:** A warmer interpretation: green header/footer bands, serif display typography, rounded controls/cards and a split hero. It feels more branded and editorial than Option A, but is not client-approved.
- Both options propose Café/Day and Restaurant/Evening panels plus highlighted Vietnamese items. Those detailed labels, layouts and item choices are exploration, not confirmed requirements.
- `origin/feature/redesign-options` is not merged into `main`. It also contains content provenance and implementation notes that should not be mistaken for approval of the comps.

## Contradictions and cautions

- Earlier records treat Aroma primarily as a café; the new direction introduces a future Restaurant offering without operational facts.
- Earlier decisions assumed phone/email booking. The Restaurant booking journey has not been confirmed and must not inherit that assumption automatically.
- Option A/B display provisional phone, email, café hours, booking copy and particular Vietnamese items. Their presence in a comp does not upgrade their provenance.
- Earlier navigation/carousel decisions were made for the old product framing. They remain historical evidence and must be reassessed against the two-offering customer journeys.

## Interview log

Questions and answers will be recorded here as decisions or explicitly classified open matters, not as a verbatim transcript.

- **2026-10-07 — Brand relationship:** Resolved as one Aroma brand with two related moods. Restaurant receives a restrained tonal shift rather than a fully distinct identity. Recorded in decision 011.
- **2026-10-07 — Homepage offering hierarchy:** Resolved as Café-led, with Restaurant clearly visible rather than equally weighted or hidden.
- **2026-10-07 — Primary journeys:** Café prioritises menu and atmosphere. Restaurant prioritises menu, experience and booking.
- **2026-10-07 — Carousel:** Removed from the final-site direction in favour of a static Café-led opening and explicit Café/Restaurant paths. Recorded in decision 012.
- **2026-10-07 — Hero medium:** Venue-and-people photography should carry the opening atmosphere; product photography and typography are supporting elements.
- **2026-10-07 — Photography mood:** Candid neighbourhood warmth and community, with an intimate rather than glossy/editorial feel.
- **2026-10-07 — Meaning of “Kiwi”:** Resolved as a local, approachable and unpretentious vibe, not New Zealand-specific motifs.
- **2026-10-07 — Restaurant mood:** Use several subtle tonal changes together rather than a separate identity or one dramatic stylistic device.
- **2026-10-07 — Homepage composition:** Accepted the four-section minimalist structure; no additional homepage section is currently required.
- **2026-10-07 — Information architecture:** Dedicated Café and Restaurant pages replace the earlier shared Menu structure. Both must keep menus and primary actions easy to find. Recorded in decision 013.
- **2026-10-07 — Header:** Accepted offering-led navigation without a separate Menu item.
- **2026-10-07 — About strategy:** Community and people first, with Vietnamese heritage integrated authentically. Phillip controls the factual story and may revise the emphasis after review. Recorded in decision 014.
- **2026-10-07 — Vietnamese highlights:** Use a small red accent or label only; Phillip decides which items qualify. Recorded in decision 015.
- **2026-10-07 — Menu experience:** Offering-specific HTML menus, simple category navigation when needed and optional secondary PDFs. Recorded in decision 016.
- **2026-10-07 — Visit/booking:** One shared utility page, separate offering hours and a repeated Restaurant booking action. Recorded in decision 017.
- **2026-10-07 — Mobile:** Compact navigation, early contextual actions, readable menus and no default sticky action bar. Recorded in decision 018.
- **2026-10-07 — Accessibility:** WCAG 2.2 AA accepted as a launch requirement with mechanical and manual verification. Recorded in decision 019.
- **2026-10-07 — Local SEO:** Accuracy-led Miramar optimisation with offering-specific metadata and confirmed-fact structured data. Recorded in decision 020.
- **2026-10-07 — Launch scope:** Accepted the focused five-page experience and deferred unvalidated promotional/integration features. Recorded in decision 021.
- **2026-10-07 — Hosting ownership:** Classified as technical/operational research; recommend a low-maintenance model covering ownership, cost, handover and recovery.
- **2026-10-07 — Maintenance model:** Classified as technical/operational research; compare developer-managed, client-editable and hybrid approaches after update needs are better understood.
- **2026-10-07 — Design placeholders:** Allowed only when clearly marked for review; they cannot become production content without client approval. Recorded in decision 022.
- **2026-10-07 — Client options:** Explore all three proposed directions, differentiated by atmosphere rather than colour alone. Recorded in decision 023.
- **2026-10-07 — Existing comps:** Use Option A/B as learning material, not direct templates; redesign all three options for a fair comparison.
- **2026-10-07 — Option selection:** Phillip chooses an overall direction before selective cross-option refinement.
- **2026-10-07 — Audiences:** Accepted the local-first audience order, with discovery, Restaurant and item-specific audiences following. Recorded in decision 024.
- **2026-10-07 — Voice:** Warm, concise, local and welcoming; slightly more polished for Restaurant without luxury clichés. Recorded in decision 025.
- **2026-10-07 — Directions:** Use a Maps link; investigate a branded static Miramar illustration as optional support. Recorded in decision 026.
- **2026-10-07 — Illustrated-map timing:** Reserve space if useful, but design it only after a visual direction is selected.
- **2026-10-07 — Product outcome:** Confirmed the intended final impression and effortless menu/visit/booking journeys. Recorded in decision 027.

## Readiness assessment

Ross has reviewed the resolved direction and is broadly happy with it. The product direction is approved to proceed to `$to-spec`. The specification must preserve unresolved client facts as explicit content dependencies and must not invent Restaurant operations, booking, menus or launch timing. Hosting, maintenance and optional-map research may continue as specification tasks or pre-implementation decisions; they do not require reopening the core experience unless the research reveals a material constraint.
