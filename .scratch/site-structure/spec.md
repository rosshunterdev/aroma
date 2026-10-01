# Site structure and homepage accessibility

Status: implemented on `feature/site-structure-proposal`; awaiting Ben/Codex review

## Objective

Restructure the preserved draft site (`draft.html`, `menu.html`, `contact.html`) so the most-wanted pages are one click from the header, the homepage says what Aroma is and how to get there, and the draft meets WCAG 2.2 AA on the issues found in the 2026-10-01 design review.

`index.html` (temporary public page) is out of scope and unchanged.

## Background

Design review of `draft.html` (2026-10-01) scored 16/32 on applicable Nielsen heuristics. P1 findings:

1. Auto-rotating carousel with no pause control fails WCAG 2.2.2; tabs half-implement the ARIA tabs pattern; hidden slides are read by screen readers.
2. Sage focus outline on cream is 2.5:1, failing WCAG 1.4.11 (3:1).
3. No `h1` on the homepage; `menu.html` has two `h1`s and item `h2`s nested under category `h3`s.
4. "Visit Us" block is absolutely positioned and can overlap content on narrow screens.

Further findings: MENU missing from header, ABOUT links to a missing page, HOME and wordmark duplicate each other, Egg Coffee sits on the Tea slide, sage text on cream (2.5:1) fails 1.4.3, broken `assets/product.jpg` image on every slide.

Visual reference: `mock.html` in this folder (open directly in a browser). Numbered pins map to the decisions below.

## Structure

```
HEADER   AROMA (wordmark = home)                MENU   VISIT

HOME
 1. Hero        h1 + client copy slot + hours + Call / Find us
                photo slot
 2. From the menu   FOOD | COFFEE | TEA tabs, click/arrow keys only
                    "See all <tab>" -> menu.html#<tab>
 3. Visit us    address + map link | hours | bookings (in normal flow)
 4. Footer      email, phone (unchanged)

MENU     anchors FOOD / COFFEE / TEA match the home tabs exactly
VISIT    contact.html, labelled "Visit" in nav (file name unchanged)
ABOUT    removed from nav until client story exists
```

## Acceptance criteria

- Header on all three draft pages: wordmark (home) left, MENU and VISIT right, `aria-current="page"` on the current page, no ABOUT link, no HOME link.
- Homepage has exactly one `h1`; heading order has no skipped levels on all three pages.
- Homepage tabs follow the WAI-ARIA tabs pattern (`aria-controls`, `role="tabpanel"`, roving `tabindex`, Left/Right arrow keys); nothing moves without user action.
- "See all" link updates to the selected tab and targets the matching anchor on `menu.html`; without JavaScript it still links to `menu.html`.
- Visit section is in normal document flow; nothing overlaps at 390px or 1440px.
- Focus outlines are at least 3:1 against their background on cream, brown and sage surfaces.
- Text using sage on cream is replaced by `--sage-text` (#5E6E45, 4.96:1).
- No broken image requests; missing photography is shown as a client copy slot.
- No new claims about the client. New visible copy is either artifact-true (labels, buttons) or a slot asking the client a question.
- Screenshots at 1440px and 390px for all three pages reviewed before PR.

## Client questions this surfaces

- Hero sentence in the client's own words.
- Hero photo and one photo per highlighted dish/drink.
- Description of Egg Coffee.
- Whether Tea should remain a highlighted category.
- Existing open questions: phone, email, hours, socials, menu accuracy (see `TODO.md`).

## Open questions for review

- Keep `contact.html` file name with "Visit" label (proposed), or rename to `visit.html`?
- Is the removal of auto-rotation acceptable as a change to decision 008? (Proposed as decision 010.)
