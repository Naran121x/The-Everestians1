# AI Studio implementation handoff — NASA 3D models

Read the GitHub repository branch `feature/3d-model-assets`, especially:
- `public/models/manifest.json`
- `docs/MODEL_ASSETS.md`
- `docs/PROJECT_INTEGRATION.md`

Use the manifest as the source of truth for NASA model names, source URLs, credits, and caveats.

## Tasks
1. Inspect the existing app before editing. Preserve its current design and all existing exhibit data v3.
2. For the selected exhibit, load its model using the URL from the manifest. Test whether NASA CDN CORS works. If it does not, use the GitHub raw fallback URL or copy the GLB into `public/models/` and load it locally.
3. Use the project's existing GLTF loader if present. Ensure Draco decoding is configured when the model requires `KHR_draco_mesh_compression`.
4. Lazy-load one model at a time; do not preload every large GLB on the landing page. Show a loading state and a NASA-image fallback if loading fails.
5. Add correct attribution and a source link to each model.
6. InSight: prefer the official InSight Cruise Lander arm-deployed GLB if the original 21.32 MB resource's direct file URL cannot be resolved. Clearly label its configuration as pre-SEIS/HP3 deployment.
7. Ingenuity can be an exhibit candidate. Perseverance is active and must be labelled reference/comparison only, never as abandoned equipment.
8. Do not overwrite v3. Create a new versioned exhibit-data file for approved changes.

## Deliverables
- Working model viewer integration
- Updated versioned exhibit data (not v3)
- List of model URLs that loaded successfully and any CORS/Draco issues
- Keep the app lightweight for 8 GB RAM / integrated graphics

Do not claim a model works until it has actually loaded in the running app.