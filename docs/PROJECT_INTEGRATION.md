# Project integration notes

## Purpose
Build a lightweight digital museum for the NASA Space Apps Challenge: **Abandoned but not Forgotten — Storytelling about NASA's Discarded Equipment on the Moon and Mars.**

## Current repository state
The repository currently contains the original README only. This branch adds a model asset staging area and integration notes. The existing local application source and exhibit data v3 were not present in the repository at inspection time, so no application files or exhibit data have been overwritten.

## Proposed folders
- `public/models/` — NASA GLB assets
- `docs/` — model provenance and integration checks
- `src/` — add or sync the current application source before viewer integration

## Guardrails
- Preserve existing v3 data.
- Use a new versioned data file for any model URL/status changes.
- Keep source attribution with every model.
- Keep a graceful image fallback if WebGL or Draco decoding fails.
- Lazy-load 3D assets; avoid loading all models on the landing page.
- Do not claim an asset is browser-verified until it has passed the actual app viewer test.
