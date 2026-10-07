# Phase A shared Home concept content pack

**Status:** Ticket 01 implementation baseline awaiting review; use for Tickets 02–04 only after approval

**Scope:** Home-page concept review only; not production copy or final information-architecture approval

**Concepts:** Refined minimal, Warm neighbourhood and Day-to-night Aroma

Use this pack unchanged across all three concepts. The concepts should compete through visual hierarchy, composition, typography, colour, image treatment and atmosphere—not through different sections, facts, promises or content volume.

## Fixed comparison contract

- Build one Home page only under `site/concepts/`; do not design the Café, Restaurant, About or Visit pages yet.
- Use the same four sections, in the order below, with the same named slots and broadly comparable text length.
- Use “Aroma Coffee” as the provisional display name. Do not present it as confirmed.
- Keep Café slightly primary through ordering and emphasis. Give Restaurant a clear, first-screen path and comparable legitimacy; do not imply that its launch, hours, menu or booking route is confirmed.
- Include a persistent visible label such as **Concept review — representative content, not final customer information** and add `noindex` metadata.
- Navigation labels and destinations are a shared **proposal for evaluation**, not an approved final sitemap.
- Do not modify or derive markup from `site/redesign/`, the accepted `site/index.html`, or the preserved draft pages.

## Canonical representative copy deck

Use this exact copy in all three concepts so writing quality or content density cannot advantage one direction. A concept may change capitalisation or punctuation for its typographic system, but not meaning, wording or content length. The persistent review label must make clear that this is representative copy awaiting approval.

| Slot | Shared representative copy |
|---|---|
| Hero headline | **A neighbourhood place, from coffee onward.** |
| Hero body | **A shared direction for a relaxed Café and a more considered Restaurant, together at one Miramar address.** |
| Café headline | **Easygoing by nature.** |
| Café body | **The intended Café experience is warm, casual and coffee-led—a simple place to pause, meet and settle in.** |
| Restaurant headline | **A different pace at Aroma.** |
| Restaurant body | **The intended Restaurant experience brings a more considered mood to the same Aroma welcome. Details and availability are still to be confirmed.** |
| Highlight 1 title | **Made for the neighbourhood** |
| Highlight 1 body | **A representative glimpse of the people, place and everyday Café atmosphere.** |
| Highlight 2 title | **A selected highlight** |
| Highlight 2 body | **Representative menu content only; the item, description, price and availability require approval.** |
| Highlight 3 title | **The Restaurant direction** |
| Highlight 3 body | **A representative view of the intended experience; launch, menu, hours and booking remain unconfirmed.** |

The Vietnamese-highlight label may be demonstrated on Highlight 2, but the card title/body above stay generic so no particular dish is presented as approved.

## Shared navigation

Use these destinations consistently so each concept tests the same proposed information architecture without creating broken links to pages outside Phase A:

| Label | Proposed production destination | Phase A concept behaviour and state |
|---|---|---|
| Aroma Coffee wordmark | Home | Link to the current concept's top; trading name and Home behaviour remain provisional |
| Café | Dedicated Café page | Link to `#cafe`, which represents that future destination in the Home concept |
| Restaurant | Dedicated Restaurant page | Link to `#restaurant`, which represents that future destination in the Home concept |
| About | Dedicated About page | Visible **About — future page, not included in this Home concept** label with no `href`; do not imitate a working link or add an About section |
| Visit | Dedicated Visit page | Link to `#visit`, which represents concise Home information rather than the future full page |

Do not add a generic Menu navigation item. Its omission is a proposal awaiting Ross's explicit approval, so the review label or nearby annotation must make that status clear. On this Home-only artifact, existing in-page anchors stand in for future routes; out-of-scope destinations must be visibly labelled as such rather than linked to missing pages or fragments. Do not create incomplete offering or About pages.

## Shared section order and content slots

### 1. Café-led hero

**Purpose:** Establish one local Aroma brand and its Miramar atmosphere, make Café the initial emphasis, and expose Restaurant without requiring scroll on representative mobile and desktop views.

Required slots:

- Provisional wordmark: **Aroma Coffee**.
- Eyebrow/location: **128D Park Road, Miramar** (confirmed fact).
- Headline and body: use the canonical representative hero copy above, covered by the visible representative-copy label. It describes the intended relationship only and must not be presented as a claim about current Restaurant availability.
- Primary action: **Explore the Café** → `#cafe`.
- Secondary action: **Discover the Restaurant** → `#restaurant`, paired with the qualifier **Restaurant details to be confirmed**.
- Dominant image slot: `[REPRESENTATIVE IMAGE — candid venue-and-people photography; final asset and usage permission required]`.

Image intent: real-feeling neighbourhood hospitality, people in the venue, warm and intimate rather than glossy product advertising. Every implementation must preserve the same subject-matter brief even if crop, scale or art direction differs.

### 2. Café and Restaurant paths

**Purpose:** Explain the two related offerings without turning either into a fully designed subpage.

#### Café path (`#cafe`)

- Label: **Café**.
- Headline and body: use the canonical Café copy above.
- CTA intent: **View the Café menu**. For Ticket 01/Phase A it remains a labelled future-route placeholder, not a link to the old `site/menu.html`.
- Image slot: `[REPRESENTATIVE IMAGE — daytime venue/people or coffee service; final asset required]`.

#### Restaurant path (`#restaurant`)

- Label: **Restaurant** plus **Details to be confirmed**.
- Headline and body: use the canonical Restaurant copy above. Avoid calling it open, “evening” as an operating fact, romantic, fine dining or bookable.
- CTA intents: **Explore the Restaurant** and **Booking method to be confirmed**. Both are labelled future-route/action placeholders.
- Image slot: `[REPRESENTATIVE IMAGE — the same venue with a more intimate, lower-light mood; final asset required]`.

The Café path comes first and may be modestly larger or more prominent. Restaurant must not be reduced to a teaser, badge or footnote.

### 3. Selected highlights

**Purpose:** Test a small reusable content rhythm and the restrained Vietnamese-highlight principle without treating provisional menu data as current.

Use exactly three comparable cards/items in every concept:

1. Café atmosphere/service highlight.
2. Representative menu highlight with no price or availability claim.
3. Restaurant experience highlight labelled **Restaurant details to be confirmed**.

Use the three canonical highlight titles and descriptions above. Titles and descriptions must carry `[REPRESENTATIVE COPY]` in an accessible, visible way (a shared section annotation is sufficient if it unambiguously covers all three).

One card may demonstrate the Vietnamese-highlight treatment, but it must use the visible text label **Vietnamese highlight — item selection and wording to be approved**. Red may support the label but cannot be its only signal. Do not use flags, scripts, patterns, costume, or ornamental “Vietnamese” motifs. Do not identify a specific item as approved.

Supporting image slots, if used, keep the same roles across concepts: one people/venue image and up to two food/drink detail images. All must be marked representative and require final client-approved assets.

### 4. Concise Visit information (`#visit`)

**Purpose:** Let reviewers judge practical-information hierarchy without publishing unresolved operating details.

Required slots:

- Heading: **Visit Aroma Coffee** (trading name provisional).
- Confirmed address: **128D Park Road, Miramar**.
- Directions action: **Open in Google Maps**. A concept may use the confirmed address as the query/destination; do not embed a map.
- Café hours: `[PLACEHOLDER — Café days and hours require client confirmation]`.
- Restaurant hours: `[PLACEHOLDER — Restaurant days, hours and launch status require client confirmation]`.
- Contact: `[PLACEHOLDER — current phone and email require client confirmation]`.
- Booking: `[PLACEHOLDER — Restaurant booking method and approved wording require client confirmation]`.
- Access/transport: `[PLACEHOLDER — include only if the client supplies useful access, parking or transport information]`.

The Café and Restaurant hours must be separate even while both are placeholders. Do not reuse phone numbers, email, hours or booking language visible in old pages or benchmark concepts.

## Provenance and placeholder rules

### Confirmed content permitted as fact

- One operating location: **128D Park Road, Miramar**.
- The visual brief: minimalist and Kiwi-oriented, green primary, red secondary and white base.
- Café and Restaurant are intended as distinct customer-facing offerings.
- The Home opening is static and Café-led, followed by clear paths to both offerings.
- Review concepts may use clearly marked representative copy and imagery.

“Kiwi-oriented” means approachable, unpretentious and locally grounded. It does not authorise literal national motifs or unverified claims about provenance, ingredients or community history.

### Must remain labelled

- “Aroma Coffee” as the provisional trading name.
- All headlines, descriptions and calls to action beyond neutral navigation/action labels.
- Restaurant name, status, launch timing, menu, service period, days/hours and booking method.
- Café menu content, current prices and hours.
- Phone, email, social profiles, access/parking details and all photography.
- Any specific Vietnamese-highlight item or description.
- The five-destination navigation and omission of a generic Menu item.

Use explicit labels such as `[PLACEHOLDER — reason]`, `[REPRESENTATIVE COPY — approval required]` and `[REPRESENTATIVE IMAGE — final asset required]`. Do not use plausible-looking dummy facts, hidden developer comments, lorem ipsum, or typography alone to indicate uncertainty.

## CTA intent

| CTA | User intent | Phase A behaviour |
|---|---|---|
| Explore the Café | Understand the established offering | Scroll to `#cafe` |
| Discover the Restaurant | Notice and understand the intended second offering | Scroll to `#restaurant`; show confirmation qualifier |
| View the Café menu | Reach the future Café menu quickly | Visible labelled route placeholder; do not link the old menu |
| Explore the Restaurant | Reach future atmosphere/menu information | Visible labelled route placeholder |
| Restaurant booking | Act on a confirmed booking route | Placeholder only until the method is confirmed |
| Open in Google Maps | Get directions to the confirmed address | External action based on 128D Park Road, Miramar; no embed |

CTA labels may receive minor grammatical adjustment to suit a concept, but their intent, prominence and content state must stay equivalent.

## Mobile priorities

1. Show the provisional wordmark, compact access to the proposed destinations, the hero message and both Café/Restaurant paths without obscuring content.
2. Keep Café menu intent near the top and Restaurant discovery clearly visible in or immediately after the opening view.
3. Preserve the four-section order; do not remove content, hide Restaurant, or substitute a carousel on small screens.
4. Keep touch targets comfortably sized, body copy readable without zoom and content reflowing without horizontal scroll at 320 CSS pixels.
5. Keep review and placeholder labels legible; they are not optional desktop-only annotations.

## Accessibility and content constraints

- Use one `h1`, logical heading levels, semantic landmarks and ordinary links/buttons with accurate names.
- Provide visible keyboard focus and maintain meaningful source order when layouts rearrange.
- Meet WCAG 2.2 AA contrast targets; red/green differences and Vietnamese-highlight meaning require text or another non-colour cue.
- Write useful alternative text for meaningful representative images based on visible subject matter; use empty alternative text for decoration. Do not describe an unverified person, relationship or business fact.
- Avoid autoplay, carousels, essential animation and motion-dependent comprehension; respect reduced-motion preferences where motion is decorative.
- Keep copy warm, concise and straightforward. Avoid exaggerated claims, luxury language, forced Kiwi phrasing, invented heritage/story details and assertions that the Restaurant is operating.
- Concept metadata must include `robots` value `noindex, nofollow` and describe the page as review material, not a live business offer.

## Ticket 02–04 builder checklist

- [ ] Home-only artifact under `site/concepts/`; no changes to `site/redesign/`, `site/index.html` or the preserved draft.
- [ ] Review label, `noindex, nofollow`, provisional-name cue and proposed-navigation cue are visible/available.
- [ ] Same navigation labels/behaviour, four-section order, content slots, three-highlight count and Visit fields; no broken or misleading future-page link.
- [ ] Café is slightly primary; Restaurant has a clear path and no unconfirmed operating claim.
- [ ] All unresolved facts/copy/images use explicit visible labels.
- [ ] Vietnamese highlight uses meaningful text and restrained treatment, with no specific item presented as approved.
- [ ] Representative desktop and mobile layouts preserve content parity, keyboard access and no horizontal overflow.
- [ ] Visual direction—not content advantage or extra functionality—is the material difference from the other concepts.

## Known dependencies that do not block concept design

Client confirmation is still required for the trading name; Restaurant naming, launch status, menu, hours and booking; Café menu and hours; phone/email/socials; final copy and story; approved Vietnamese-highlight items; photography and usage permission; and any access/parking information. These remain production/refinement dependencies, but the labelled slots above let Tickets 02–04 proceed without inventing them.

Ross must still explicitly approve the proposed five-destination information architecture, Café/Restaurant mood relationship, Visit/booking details, mobile approach and omission of a generic Menu item before those become final product requirements.
