# Phase A shared Home concept content pack

**Status:** Ticket 01 implementation baseline awaiting review; use for Tickets 02–04 only after approval

**Scope:** Home-page concept review only; not production copy

**Concepts:** Refined minimal, Warm neighbourhood and Day-to-night Aroma

Use this pack unchanged across all three concepts. The concepts should compete through visual hierarchy, composition, typography, colour, image treatment and atmosphere, not through different sections, facts, prompts or content volume.

## Fixed comparison contract

- Build one Home page only under `site/concepts/`. Do not design the Menu, Visit, Café, Restaurant or About pages yet.
- Use the same four sections, in the order below, with the same named slots and comparable visual lengths.
- Use “Aroma Coffee” as the provisional display name. The review notice must say that the name is provisional.
- Keep Café slightly primary through ordering and emphasis. Keep Restaurant clearly visible without implying that its launch, hours, menu or booking route is confirmed.
- Use the Decision 033 header in every concept: **Aroma · Menu · Visit**.
- Include `noindex` metadata and one concise review notice. Use consistent dashed styling for unresolved copy, fact and image slots instead of repeated status labels.
- Do not modify or derive markup from `site/redesign/`, the accepted `site/index.html`, or the preserved draft pages.

## Review and placeholder convention

Each concept has one visible notice near the top:

> **Concept review. “Aroma Coffee” is provisional. Questions and placeholder images are not final customer content.**

All unresolved content appears as a visually consistent dashed slot. The slot contains the short client question or image request from this pack, without brackets, technical status language or repeated warnings. The single notice supplies the context for every dashed slot.

Do not show `[REPRESENTATIVE COPY]`, `[PLACEHOLDER]`, “details to be confirmed”, “future page”, or similar annotations on individual cards and actions. Do not use plausible dummy facts or lorem ipsum. Dashed styling must have sufficient contrast and cannot be the only indication that a field is unresolved; the slot wording itself must be a question or request.

## Canonical client-question deck

Use these exact prompts in all three concepts so wording and density cannot advantage one direction. A concept may change capitalisation or terminal punctuation for its typographic system, but must not replace a question with invented brand copy.

| Slot | Shared visible content |
|---|---|
| Hero kicker | **Your words** |
| Hero headline/body question | **How would you describe Aroma to someone walking past?** |
| Café kicker | **The Café, in your words** |
| Café question | **What should people know about the Café before they visit?** |
| Restaurant kicker | **The Restaurant, in your words** |
| Restaurant question | **How should the Restaurant feel different from the Café?** |
| Highlight 1 title | **The place** |
| Highlight 1 question | **What do you want people to notice about Aroma?** |
| Highlight 2 title | **A Café favourite** |
| Highlight 2 question | **Which Café item should we highlight here?** |
| Highlight 3 title | **The Restaurant** |
| Highlight 3 question | **What should guests expect from the Restaurant?** |

These are questions for Phillip, not proposed answers. They remain dashed content slots in the concepts.

## Shared header navigation

Decision 033 is authoritative. Every concept uses the same header structure:

| Header item | Phase A Home behaviour |
|---|---|
| Aroma | Link to the current concept's top. Display “Aroma Coffee” provisionally until the trading name is confirmed. |
| Menu | Link to the Home page's `#menu` section, which contains the Café and Restaurant paths. Do not build or link an unfinished Menu page. |
| Visit | Link to the Home page's `#visit` section. |

Do not add About, Café or Restaurant as header items. About is deferred.

Decision 033 also establishes the later Menu-page structure: specials first, then a Café/Restaurant switch with Café first. That future page is out of scope for Phase A and must not be designed or implemented in Tickets 01–04.

## Shared section order and content slots

### 1. Café-led hero

**Purpose:** Establish the proposed visual atmosphere, keep Café initially primary and expose the Restaurant path without relying on invented descriptions.

Required slots:

- Provisional wordmark: **Aroma Coffee**.
- Confirmed location: **128D Park Road, Miramar**.
- Dashed copy slot using the hero kicker and question from the canonical deck.
- Primary action: **Explore the Café** → `#cafe`.
- Secondary action: **Explore the Restaurant** → `#restaurant`.
- Dashed image slot: **What should the main Aroma photo show?**

The intended future hero subject remains candid venue-and-people photography with final selection and usage permission from Phillip. The question slot is what appears in the concept; implementation notes about mood and provenance stay in the pack, not in repeated on-page labels.

### 2. Café and Restaurant paths (`#menu`)

**Purpose:** Show how Home will lead into the single future Menu destination while allowing reviewers to compare the two offering paths. Do not design the Menu page or its switch.

#### Café path (`#cafe`)

- Label: **Café**.
- Dashed copy slot using the canonical Café kicker and question.
- CTA intent: **See the Café menu**. In Phase A this is styled as a non-interactive future action, not linked to the old `site/menu.html` or a missing page.
- Dashed image slot: **Which Café photo should appear here?**

#### Restaurant path (`#restaurant`)

- Label: **Restaurant**.
- Dashed copy slot using the canonical Restaurant kicker and question.
- CTA intents: **See the Restaurant menu** and a dashed question slot **How should guests book?** Neither links to an unfinished route or implies current availability.
- Dashed image slot: **Which Restaurant photo should appear here?**

The Café path comes first and is slightly primary. Restaurant remains easy to find but should not receive equal billing or stronger prominence than Café. All three concepts use the same hierarchy so comparison remains fair.

### 3. Selected highlights

**Purpose:** Test a small reusable content rhythm and the restrained Vietnamese-highlight principle without treating provisional menu data as current.

Use exactly three comparable cards in every concept, using the canonical highlight titles and questions:

1. Place/people question.
2. Café-item question.
3. Restaurant-experience question.

The second card may demonstrate a small visible **Vietnamese highlight** treatment beside the dashed question **Which item should carry the Vietnamese highlight?** Red may support the label but cannot be its only signal. Do not name a dish, assert that an item qualifies, or use flags, scripts, patterns, costume or ornamental Vietnamese motifs.

If imagery is used, keep the same roles across concepts: one venue/people slot and up to two food/drink detail slots. Each uses dashed styling and a short question such as **Which photo belongs here?**

### 4. Concise Visit information (`#visit`)

**Purpose:** Let reviewers judge practical-information hierarchy without publishing unresolved operating details.

Required slots:

- Heading: **Visit Aroma Coffee**. The review notice already identifies the trading name as provisional.
- Confirmed address: **128D Park Road, Miramar**.
- Directions action: **Open in Google Maps** using the confirmed address. Do not embed a map.
- Dashed question: **What are the Café days and hours?**
- Dashed question: **What are the Restaurant days, hours and opening date?**
- Dashed question: **Which phone number and email should customers use?**
- Dashed question: **How should guests book the Restaurant?**
- Dashed question: **Is there access, parking or transport information to include?**

The Café and Restaurant hours must be separate even while both are placeholders. Do not reuse phone numbers, email, hours or booking language visible in old pages or benchmark concepts.

## Provenance rules

### Confirmed content permitted as fact

- One operating location: **128D Park Road, Miramar**.
- The visual brief: minimalist and Kiwi-oriented, green primary, red secondary and white base.
- Café and Restaurant are intended as distinct customer-facing offerings.
- The Home opening is static and Café-led, followed by clear paths to both offerings.
- The Decision 033 header is **Aroma · Menu · Visit**.
- Review concepts may use clearly signalled questions and temporary imagery.

“Kiwi-oriented” is an internal direction, not customer-facing copy. It does not authorise literal national motifs or unverified claims about Aroma, provenance, ingredients or community history.

### Must remain unresolved

- The public trading name.
- Brand description, headlines and body copy.
- Restaurant name, status, launch timing, menu, service period, days/hours and booking method.
- Café menu content, current prices and hours.
- Phone, email, social profiles, access/parking details and all photography.
- Any specific Vietnamese-highlight item or description.

Use the single review notice plus the dashed question/image-slot convention. Do not add repeated annotations to each unresolved item.

## CTA intent

| CTA | User intent | Phase A behaviour |
|---|---|---|
| Explore the Café | Reach the Café part of the Home concept | Scroll to `#cafe` |
| Explore the Restaurant | Reach the Restaurant part of the Home concept | Scroll to `#restaurant` |
| See the Café menu | Preview the future menu journey | Non-interactive future action; do not link the old menu |
| See the Restaurant menu | Preview the future menu journey | Non-interactive future action; do not imply availability |
| Restaurant booking | Expose the unresolved booking journey | Dashed client-question slot, not an active action |
| Open in Google Maps | Get directions to the confirmed address | External action based on 128D Park Road, Miramar; no embed |

Keep these labels and behaviours equivalent across all concepts.

## Mobile priorities

1. Show the provisional wordmark and the complete **Aroma · Menu · Visit** header without obscuring content.
2. Keep Café slightly primary and Restaurant easy to find near the opening of the page.
3. Preserve the four-section order. Do not remove content, hide Restaurant or substitute a carousel on small screens.
4. Keep touch targets comfortably sized, body copy readable without zoom and content reflowing without horizontal scroll at 320 CSS pixels.
5. Keep the single review notice and dashed question slots legible without adding repeated mobile-only annotations.

## Accessibility and content constraints

- Use one `h1`, logical heading levels, semantic landmarks and ordinary links/buttons with accurate names.
- Do not style non-interactive future actions as working controls without an accompanying non-interactive treatment that is clear to all users.
- Provide visible keyboard focus and maintain meaningful source order when layouts rearrange.
- Meet WCAG 2.2 AA contrast targets; red/green differences and Vietnamese-highlight meaning require text or another non-colour cue.
- Write useful alternative text for meaningful temporary images based only on visible subject matter. Use empty alternative text for decoration.
- Avoid autoplay, carousels, essential animation and motion-dependent comprehension. Respect reduced-motion preferences where motion is decorative.
- Do not invent customer-facing descriptions, claims, heritage details or Restaurant availability. Use the canonical questions instead.
- Customer-facing concept wording must not contain em dashes.
- Concept metadata must include `robots` value `noindex, nofollow` and describe the page as review material, not a live business offer.

## Ticket 02–04 builder checklist

- [ ] Home-only artifact under `site/concepts/`; no changes to `site/redesign/`, `site/index.html` or the preserved draft.
- [ ] One review notice, `noindex, nofollow` and consistent dashed styling for every unresolved slot.
- [ ] Decision 033 header: **Aroma · Menu · Visit**. No About header item and no Menu-page implementation.
- [ ] Same four-section order, exact client questions, three-highlight count and Visit fields.
- [ ] Café is slightly primary; Restaurant is clearly findable without equal or stronger billing.
- [ ] No invented brand copy, customer-facing em dashes, dummy facts or repeated status annotations.
- [ ] Vietnamese highlight uses meaningful text and restrained treatment, with no specific item presented as approved.
- [ ] Representative desktop and mobile layouts preserve content parity, keyboard access and no horizontal overflow.
- [ ] Visual direction—not content advantage or extra functionality—is the material difference from the other concepts.

## Known dependencies that do not block concept design

Client answers are still required for the trading name; brand description; Restaurant naming, launch status, menu, hours and booking; Café menu and hours; phone/email/socials; story; approved Vietnamese-highlight items; photography and usage permission; and any access/parking information. The shared questions above let Tickets 02–04 present those gaps honestly without inventing answers.

Decision 033 resolves the Phase A header. It does not authorise design or implementation of the future Menu page, which remains outside Ticket 01 and Tickets 02–04.
