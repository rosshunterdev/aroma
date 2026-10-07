# Redesign options: Kiwi style comps

Status: spec written 2026-10-05; awaiting Ross review

## Objective

Build two homepage design options for Phillip (owner) to choose between, following his 2026-10-05 brief. He picks one; the chosen direction is then rolled out to the real pages in a separate piece of work.

Out of scope: changing `index.html`, `draft.html`, `menu.html`, `contact.html` or `styles.css`; redesigning the menu page; merging anything to `main`.

## Background

Meeting with Phillip, 2026-10-05 (Ross's notes):

- Wants a "Kiwi" style: green primary, red secondary, white background.
- Likes the minimalist look of Park Kitchen, Miramar (https://www.parkkitchen.co.nz/, screenshot `docs/park-kitchen-reference.png`).
- Vietnamese styling only on certain highlighted items, not the whole brand.
- Wants to open later in the day as a restaurant as well as a cafe, treated as 2 separate categories. Details (separate menu, hours, start date) unconfirmed; questions in `phillip.md`.
- Ross told him we'd come back with a couple of design options.

What Park Kitchen does: white page, centred uppercase letter-spaced nav, plain sans-serif, square dark buttons, Day / Evening / Beverage menu split, food photo grid carrying most of the colour. Aroma has no product photos yet, so comps use labelled photo slots (decided 2026-10-05).

This replaces the brown/cream/sage visual direction of decision 010. Its structure (header, hero, Visit section, accessibility fixes) carries over.

## Shared structure (both options)

```
SWITCHER  "Design option A | B" bar, labelled as a comp
HEADER    AROMA wordmark                          MENU   VISIT
1. Hero        h1 "Aroma Coffee" + 1-sentence copy slot
               Call + Find us buttons, landscape photo slot
2. Day / Evening   two panels side by side (stacked on mobile)
               Day (Cafe): link to menu.html + current hours (unconfirmed)
               Evening (Restaurant): copy slot asking for menu and hours
3. Highlights  3-up grid: pho, coffee/egg coffee, matcha/tea
               Vietnamese items carry a "Vietnamese special" tag
4. Visit       address + map link, hours, phone, email (from draft.html)
5. Footer      email + phone
```

No social icons (no links supplied). No vouchers, reservations or events sections.

## Visual design

Shared tokens (contrast against white):

| Token | Value | Use | Contrast |
|---|---|---|---|
| `--green` | `#1F5C3A` | primary accents, buttons | 7.9:1 |
| `--red` | `#C8372D` | Vietnamese tag and small accents only | 5.2:1 |
| `--white` | `#FFFFFF` | background | n/a |
| `--ink` | `#1E1E1E` | body text | 16:1+ |

The Vietnamese tag always includes the words "Vietnamese special"; colour never carries meaning alone.

**Option A, "Park Kitchen close":** Figtree only; uppercase letter-spaced nav and labels; centred header; generous white space; square green buttons; Day / Evening as two large panels; red only on the tag.

**Option B, "Warmer Kiwi":** Fraunces headings, Figtree body; green header band with white wordmark; white body; Day / Evening as cards with thin green border; featured Vietnamese card (egg coffee) with red top edge and tag; green footer band.

Both: breakpoints 640px and 420px; no `transition-all`; no em dashes in copy.

## Files and delivery

- `redesign/option-a.html`, `redesign/option-b.html`: self-contained (inline CSS, Google Fonts), favicon `../aroma-leaf-cluster.svg`. In `redesign/` rather than `.scratch/` so Netlify serves them.
- Branch `feature/redesign-options` off `feature/site-structure-proposal`.
- After Ross approves a push: draft PR marked "do not merge" to get a Netlify preview link for Phillip. Its diff includes PR #3 changes until PR #3 merges.

## Content rules

- Visible text must already exist in `draft.html`, come from Phillip, or be a `.copy-slot` with a question (`client-copy` skill).
- Hours, phone and email stay marked unconfirmed per `content-status.md`.
- Nothing about the restaurant beyond "Phillip wants an evening restaurant offering" appears as fact; menu, hours and start date are slots.

## Acceptance criteria

1. Both pages render at 1440px and 390px with no horizontal scroll.
2. Each page has exactly one `h1` and no skipped heading levels.
3. No failed network requests; no console errors.
4. Visible keyboard focus on every link and button, at least 3:1 against its background.
5. Text contrast meets WCAG AA (4.5:1 body, 3:1 large).
6. Switcher links work in both directions.
7. Every visible sentence passes the content rules above.
8. After push: both preview URLs return 200.

Verified with Playwright (Chromium) and reviewed screenshots; key screenshots shared with Ross.

## Open questions

- All restaurant and style questions in `phillip.md`.
- Once Phillip picks: does the chosen direction apply to `menu.html` and `contact.html` straight away, or after PR #3 merges?
