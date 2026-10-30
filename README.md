# Aroma Coffee website

Static website rebuild for Aroma Coffee / Aroma Café at 128D Park Road, Miramar, Wellington. This is client work maintained jointly by Ross/Claude Code and Ben/Codex.

## Current state

- `index.html` is a standalone temporary landing page; it is not the approved final homepage.
- Phase A concept comparison is complete: Phillip selected meeting presenter Design 2 / Ross Option A as the overall direction, with Design 3 / Warm Neighbourhood as secondary inspiration where clarity is preserved.
- Phase B is in progress. Ticket 07's selected Home refinement is merged at `site/selected-home/`. Ticket 08's shared Menu refinement is awaiting review at `site/selected-menu/`; both are noindex review artifacts and neither replaces the temporary homepage.
- The current final-site structure is `Aroma · Menu · Visit`; Menu contains distinct Café and Restaurant content in one experience, and About is deferred.
- The early website draft remains at `draft.html`, with `menu.html`, `contact.html`, `styles.css` and a small inline vanilla-JavaScript tabs script.
- The temporary page uses `temporary.css`; there is no framework or build step.
- `about.html` is blocked on client-supplied story content and is not linked from the draft navigation.
- Missing client copy and photography are shown on the draft homepage as dashed copy slots.
- Phone, email, opening hours and the 2024 menu transcription require confirmation before launch. Treat values currently rendered in the pages as provisional.

## Run locally

The website lives in `site/` (the only folder Netlify publishes; see `netlify.toml`). Serve it with any static HTTP server, for example:

```powershell
npx serve site
```

Open the localhost URL printed by the server. There is no project install or build step.

Run the focused Menu review checks with:

```powershell
node --test tests/menu-page.test.mjs
```

## Project map

- `HANDOVER.md` — current implementation state, blockers and next work
- `docs/client-selection-reconciliation.md` — exact presenter mapping, selection evidence and concept-PR disposition
- `site/selected-home/` — review-only selected Home refinement for Ticket 07
- `site/selected-menu/` — review-only shared Menu refinement for Ticket 08
- `decisions.md` — accepted and proposed product/technical decisions; status labels matter
- `content-status.md` — content provenance and confirmation state
- `TODO.md` — outstanding work and client questions
- `CLAUDE.md` / `AGENTS.md` — harness-specific navigation
- `Aroma Coffee Homepage/design_handoff_aroma_homepage/` and `NEW-DESIGN.png` — design evidence, not a replacement for current source
- `assets/` — client/developer-supplied menu photographs
- `audit/` — historical research from the inconsistent old website; not current client truth
- `docs/agents/` — shared agent workflow configuration

## Source-of-truth rule

Direct client confirmation outranks repository records, supplied source material, current implementation, the old website and public listings, in that order. When records conflict, preserve the uncertainty in `content-status.md` or `TODO.md` and ask the client rather than choosing a plausible value.

The only confirmed operating location recorded by the project is 128D Park Road, Miramar. Do not reintroduce Cuba/Te Aro, Island Bay, warehouse, e-commerce or online-reservation claims from old-site research.
