# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website rebuild for **Aroma Coffee** — a Vietnamese-owned cafe in Wellington, NZ with three locations: Miramar, Cuba Mall (Te Aro), and Island Bay. This is a client project.

The old site (aromacoffee.nz) runs **Laravel + Vite + Tailwind CSS + Alpine.js** (confirmed via `/build/manifest.json` and asset analysis). The `/audit` directory contains scraped content and analysis from the old site. Several pages on the old site have placeholder content rather than real product information — see `/audit/structural-issues.md`.

## Project Status

**Pre-framework stage.** No build system, framework, or package.json exists yet. The stack will be chosen in a future session — do not scaffold a framework without explicit instruction.

### Directory Structure

- `/audit` — scraped content, assets, and notes from the old aromacoffee.nz site
- `/design-system` — brand tokens, typography, and color decisions
- `aroma-leaf-cluster.svg` — decorative leaf cluster SVG (brand asset)

## Client Content Rules

This is client work. Never write text that asserts a fact about Aroma Coffee (their services, process, pricing, availability, credentials, or location) unless the client said it. Use the `client-copy` skill for any customer-facing text. Leave a short question for unconfirmed facts rather than inventing content.

## Key Constraints

- Three physical locations: Miramar, Cuba Mall/Te Aro, Island Bay
- Vietnamese heritage is part of the brand identity
- The old site's product pages (/coffee, /tea, /fresh, /accessories) had only placeholder text — real product content needs to come from the client
- The reservation system on the old site should be evaluated before rebuilding
