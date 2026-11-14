# AI Studio implementation handoff — NASA 3D models

Read the GitHub branch `feature/3d-model-assets`, especially:
- `public/models/manifest.json`
- `docs/MODEL_ASSETS.md`
- `docs/AI_STUDIO_MODEL_IMPORT.md`

Before editing, inspect the current application and preserve its design and existing exhibit data v3.

## Download the official NASA GLBs
The repository includes a no-dependency Node script. Run:
```bash
node scripts/download-nasa-models.mjs
```
It downloads the InSight Cruise Lander arm-deployed model, Ingenuity, and Perseverance into `public/models/`, tries NASA's official CDN first and GitHub raw second, and validates the GLB v2 header and byte length. If downloads fail, report the exact error and use the source URLs in the manifest; do not create fake or placeholder GLBs.

## Integrate safely
1. Use the project's existing GLTF loader. Configure Draco decoding when a file requires `KHR_draco_mesh_compression`.
2. Lazy-load one selected exhibit model at a time; never preload every model on the landing page.
3. Add loading and error states, plus a NASA image fallback.
4. Preserve credits and source links from the manifest.
5. InSight Cruise Lander model is the landed configuration with solar panels and arm deployed, before SEIS and HP3 deployment; label that caveat.
6. Ingenuity is a retired mission asset and can be an exhibit candidate.
7. Perseverance is active; use it only as a comparison/reference, never as abandoned equipment.
8. The exact older InSight resource page lists a 21.32 MB glTF but its direct file URL is not yet resolved. Do not pretend the embed URL is a raw GLB.
9. Never overwrite v3. Make approved exhibit changes in a new versioned data file.

## Deliverables
- Download results and byte sizes
- Working 3D viewer integration
- New versioned exhibit-data file
- Runtime test results, including Draco/CORS errors
- Keep performance suitable for an 8 GB RAM laptop with integrated graphics

Do not claim success until the models load in the running app.