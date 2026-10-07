# Session Log

Chronological record of work done on the Aroma Coffee rebuild.

---

## Session 1 — 2026-09-12

- Scraped and audited the old site (aromacoffee.nz)
- Created `/audit` directory with page content, structural issues, contact info, platform analysis
- Identified major issues: placeholder product pages, broken nav, boilerplate legal pages, inconsistent contact info

## Session 2 — 2026-09-17

- Designed homepage mockup (saved as `NEW-DESIGN.png`)
- Wrote a prompt for Claude Design to build the mockup as a working page
- Received design handoff with full HTML, CSS, component breakdown, and design tokens
- Handoff files saved to `Aroma Coffee Homepage/design_handoff_aroma_homepage/`
- Implemented `index.html` and `styles.css` at project root from the handoff
- Replaced placeholder lorem ipsum with real copy from the old site (coffee + matcha blurbs)

## Session 3 — 2026-09-18

- Reviewed all audit files and proposed a simplified 4-page structure (Home, Menu, Contact, About)
- Client confirmed: single location (Miramar only), no online ordering, no online reservations
- Client provided physical menu photos and opening hours
- Built `menu.html` — full breakfast/lunch and drinks menu transcribed from photos
- Built `contact.html` — address, hours, phone/email booking CTA
- Updated `index.html` nav links to point to real pages, tabs link to menu sections
- Created project documentation (this file, `decisions.md`, `TODO.md`)
- Updated `CLAUDE.md` to reflect current project state

- Proposed alternative site structure (decision 007 in `decisions.md`) — MENU in header nav, drop category tabs, homepage becomes a landing page
- Ross noted he has an artistic structure in mind to compare against the proposal

### Outstanding from this session
- Phone number discrepancy not yet confirmed with client
- Menu and contact page layouts need design review
- About page not started (no content)
- Structure decision pending — compare proposed nav redesign vs Ross's artistic direction

## Session 4 — 2026-09-18

- Planned and built homepage carousel: 3 slides (Food/Coffee/Tea) with tab controls, auto-rotate, swipe-ready structure
- Added "VIEW MENU" CTA button below carousel linking to `menu.html`
- Added "Visit Us" block (address + hours) positioned bottom-left of content area
- Added "← Back" link to menu page tabs for easy return to homepage
- Fixed homepage footer phone number inconsistency (was using old site number)
- Carousel defaults to Coffee slide, which restores the original Aroma Coffee + Aroma Matcha layout

### Outstanding from this session
- Visit Us positioning needs visual confirmation — was being iterated on
- Tea slide content is categorically wrong (Egg Coffee on Tea slide) — needs client input
- Header nav structure still deferred (MENU link not yet added to header)
- Mobile carousel layout deferred
- TODO.md not updated — structure-related items may be stale

## Session 5 — 2026-10-01 — Site structure and homepage accessibility

Note: Codex/Ben work on 2026-09-30 (PR #1 onboarding, PR #2 temporary page) was recorded in HANDOVER.md at the time, not here.

- **Did:** Design critique and audit of `draft.html` (16/32 on applicable heuristics; four P1 accessibility issues). Built annotated mock of a new structure; Ross agreed it. Implemented it on `feature/site-structure-proposal`: header (wordmark + MENU + VISIT), hero with copy slots, tabs without autoplay, in-flow Visit section, menu anchors and heading order, focus and contrast fixes. Added Playwright MCP (`.mcp.json`).
- **Decided:** 010 (BUILT, awaiting Ben/Codex review). 008 auto-rotation and 007 marked SUPERSEDED by 010.
- **Broke or found:** Contact page booking buttons were cream on cream (pre-existing); fixed. Sage text on cream was 2.5:1; replaced by `--sage-text`.
- **Verified:** Playwright/Chromium at 1440px and 390px on all three draft pages: one h1, no skipped heading levels, no failed requests, no horizontal scroll; tab keyboard behaviour and no autoplay confirmed; screenshots reviewed. Not verified: real devices, screen reader.
- **Shipped:** Branch pushed and PR #3 opened against `main` for Ben/Codex review (not merged).
- **Continued (review assumed accepted, per Ross):** ticket 07 head metadata and favicon, contact hours and titles without em dashes, removed unused `.pill--lg`. Verified with Playwright (metadata present, favicon 200, page checks unchanged). Found: `NEW-DESIGN.png` comp staggers the highlight columns deliberately; current build does not. Raised with Ross.

## Session 6 — 2026-10-02 — Pre-visit safety check and pricing

- **Did:** Oriented (`/start`). Advised on pricing for the client offer: small one-off build fee plus low monthly care plan (suggested about $600 + $20/month; not decided). Checked the pages Ross will show the client. Added `.playwright-mcp/` to `.gitignore` (`fb6b035`).
- **Decided:** none recorded (pricing is a suggestion pending Ross and Ben).
- **Broke or found:** Production `/draft.html` is the old `main` draft (broken images, ABOUT 404, autoplay); show the PR #3 preview instead. "Powered by Netlify" badge is on production, not only previews. Netlify preview toolbar overlaps the homepage tabs on mobile. Raised: agree pricing and who offers the work with Ben before quoting.
- **Verified:** Playwright at 390px: live temporary page and preview `draft.html` screenshots reviewed; preview `menu.html` and `contact.html` return 200; console errors only from blocked Netlify toolbar scripts. Not verified: real devices.
- **Shipped:** Session docs committed (`65206b5`) and branch pushed (`927f727..65206b5`); PR #3 still open, not merged.

## Session 7 — 2026-10-05 — Kiwi redesign comps and publishing fix

- **Did:** Ross met Phillip (owner): new "Kiwi" brief and evening restaurant plan. Created `phillip.md` (client question list). Brainstormed, spec'd and planned (`.scratch/redesign/`), then built two homepage comps (`redesign/option-a.html`, `option-b.html`) plus `check.js` browser test; added red outline to Vietnamese cards on A at Ross's request. Recorded meeting in `content-status.md`. Moved website into `site/` with `netlify.toml`; untracked Park Kitchen screenshot; made repo private. Drafted a message for Ben.
- **Decided:** 011 (BUILT, awaiting Phillip), 012 (VERIFIED on preview). 010 visual direction SUPERSEDED by 011.
- **Broke or found:** Netlify published the repo root, so all docs (including pricing notes in `HANDOVER.md`) were public by URL on previews and production; GitHub repo was public. Fixed on PR #4 branch; production and PR #3 preview still serve docs until merge. Pricing remains in git history (repo now private).
- **Verified:** Playwright (Chromium) `check.js` pass at 1440/390/320 px for both comps; Option B focus rings visible on green; switcher round trip; PR #4 preview: pages 200, all docs 404, Fraunces loads. Final whole-branch review (fresh Opus reviewer): 0 critical, 0 important, 5 minor. Not verified: real devices, screen readers, non-Chromium.
- **Shipped:** `feature/redesign-options` pushed through `62b86ae`; draft PR #4 opened (do not merge, stacked on PR #3).

## Session 8 — 2026-10-07 — Option C (Swimsuit-inspired) and PR #5 review

- **Did:** Oriented (`/start`); committed Session 7 docs (`2193fed`). Ross revised plan: Phillip sees designs in person next week only once Ross is happy; a friend reviews later. Built `site/redesign/option-c.html` from swimsuitcoffee.com (which Phillip liked): Kiwi palette, Schibsted Grotesk, centred wordmark with split nav, split info/photo hero, dotted rules, red highlight links, green footer with giant width-fitted AROMA (`7e869af`). Updated `check.js` (Option C labels, 3 switcher links on C). Pushed; PR #4 preview rebuilt. Reviewed Ben's PR #5 (Codex final-site spec + 26 tickets); review comment posted by Ross.
- **Decided:** 013 (VERIFIED). Option A/B files deliberately untouched, so their switchers do not link to C.
- **Broke or found:** `check.js` red-outline check uses `endsWith('option-a.html')`, but `npx serve` strips `.html`, so locally that check is skipped (may have been skipped in Session 7 too). PR #5: ignores A/B/C baseline, Phase A too big for next week, based on `main` (pre-`site/`), decision numbers 010–027 clash with ours, claims approvals not yet given, all tickets `ready-for-agent` incl. human gates, uses unconfirmed "Aroma Coffee Works".
- **Verified:** Playwright (Chromium) on `npx serve site -l 5179`: `check.js` pass at 1440; h1/headings/no h-scroll/copy audit pass at 390; no h-scroll and header fits at 320; footer focus ring white 2px; wordmark fits at 1440 and 390; screenshots reviewed (`.playwright-mcp/c-*.png`). PR #4 preview: A/B/C 200, docs 404, font loads. PR #5 review comment: `gh` exited cleanly, not visually confirmed. Not verified: real phones, non-Chromium, screen readers.
- **Shipped:** `feature/redesign-options` pushed through `7e869af` (PR #4, draft). Later: Ross edited the PR #5 review (Codex free to make own concepts; Ross curates 2–3 for Phillip), closed PR #3 unmerged (old draft being left behind), and messaged Ben asking to merge #4 so docs stop being public.
- **Later (same session):** Ben pushed `5a6cdc0` to PR #5 addressing the review. With Ben's OK, Ross renamed PR #4, marked it ready and merged it (`bdda5c1`). Production verified: temporary homepage, A/B/C 200, all docs 404. Local `main` pulled. Merged branches deleted locally (Ross) and on GitHub via web (Ross; not confirmed). `main` ruleset created but not enforced (private repo needs Team plan). Decision 012 status updated.
- **Later still:** Ben rebased PR #5 (`84576c1`); checked docs-only and decisions 014+, Ross merged it (`8ab5cc7`). Its deploy preview had failed: "unrecognized Git contributor" (Netlify free plan, private repo). Ross made the repo public (decision 032; 012's private part superseded). Production re-verified: pages 200, all docs incl. Ben's new ones 404. HANDOVER merged with Ben's version and rewritten.
- **PR #6 (ticket 01 content pack):** reviewed; Ross posted request-changes (invented descriptions of Aroma in the copy deck; no-Menu nav built in while 017 PROPOSED; em dashes; heavy inline labels). Ross decided menu navigation (decision 033). Ben revised #6 (question slots, 033 header, one review notice); re-checked and Ross merged it (`5d8a703`). Docs branch rebased; kept Ben's 033 entry.
