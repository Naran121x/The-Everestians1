# AI Studio implementation handoff — NASA 3D models

Read the GitHub branch `feature/3d-assets-expansion`, especially:
- `public/models/manifest.json`
- `docs/MODEL_ASSETS.md`
- `docs/PROJECT_INTEGRATION.md`

Use the manifest as the source of truth for NASA model names, sources, credits, and caveats.

## Download available NASA GLBs
Run:
```bash
node scripts/download-nasa-models.mjs
```
This script attempts to download the InSight Cruise Lander (arm deployed), Ingenuity, Perseverance (comparison-only), and Viking Lander into `public/models/`. It tries NASA's official CDN first and GitHub raw second, and validates the GLB v2 header and declared byte length. Do not claim the downloads succeeded until the script output confirms each file was saved.

## Model selection rules
- Apollo Lunar Module: inspect the hierarchy; Apollo 11's ascent stage departed, while its descent stage remained.
- Opportunity: keep landing site and final resting location distinct.
- Spirit: NASA has a combined Spirit/Opportunity twin-rover glTF resource (11.36 MB); direct URL/dependencies are not resolved. Do not pretend it is already downloaded. The Opportunity-specific GLB can be used as a clearly labelled twin-design reference if needed.
- InSight: prefer the official InSight Cruise Lander arm-deployed GLB when the original 21.32 MB glTF direct URL is unresolved. Label it as a pre-SEIS/HP3 deployment configuration.
- Ingenuity: eligible retired-mission exhibit candidate.
- Viking: official 1.76 MB GLB source located; script downloads it. Viking 1 and 2 had identical lander designs but different landing sites.
- Perseverance: active mission; comparison/reference only, never an abandoned-equipment exhibit.
- Lunar Roving Vehicle, ALSEP/LRRR, and Surveyor: no verified official NASA GLB found in this research pass. Use a labelled procedural/scale reconstruction only if the team decides it materially improves the story.

## Integration requirements
1. Inspect the actual app before editing; preserve its current design and all exhibit data v3.
2. Use the existing GLTF loader. Configure Draco decoding if required by a model.
3. Lazy-load one selected model at a time; do not preload all GLBs on the landing page.
4. Add loading/error states and a NASA-image fallback.
5. Show source attribution and link the official NASA resource page.
6. Make approved data changes in a new versioned file (v3.1 or later); never overwrite v3.
7. Test scale, orientation, materials, textures, and performance on an integrated-GPU laptop.
8. Do not claim a model works until it loads in the running app.

## Deliverables
- Per-file download results and byte sizes
- Working model viewer integration
- New versioned exhibit-data file
- Actual browser test results, including Draco/CORS errors
- Lightweight performance: load only the selected model and dispose of it when changing exhibits
