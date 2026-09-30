# Aroma Coffee website

Static website rebuild for Aroma Coffee / Aroma Café at 128D Park Road, Miramar, Wellington. This is client work maintained jointly by Ross/Claude Code and Ben/Codex.

## Current state

- `index.html` is a standalone temporary landing page; it is not the approved final homepage.
- The early website draft remains at `draft.html`, with `menu.html`, `contact.html`, `styles.css` and its small inline vanilla-JavaScript carousel preserved for continued development.
- The temporary page uses `temporary.css`; there is no framework or build step.
- `about.html` is blocked on client-supplied story content, but the current navigation already links to it and therefore 404s.
- The draft homepage references a missing `assets/product.jpg`; production photography has not been supplied.
- Phone, email, opening hours and the 2024 menu transcription require confirmation before launch. Treat values currently rendered in the pages as provisional.

## Run locally

Serve the repository root with any static HTTP server, for example:

```powershell
npx serve .
```

Open the localhost URL printed by the server. There is no project install, build or test command yet.

## Project map

- `HANDOVER.md` — current implementation state, blockers and next work
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
