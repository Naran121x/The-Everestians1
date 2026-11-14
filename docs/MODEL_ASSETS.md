# NASA 3D model assets

The project uses official NASA model resources. The exact source page and attribution are recorded for each model.

## Locally staged GLBs

### Apollo Lunar Module
- Local path: `public/models/apollo-lunar-module.glb`
- NASA page: https://science.nasa.gov/3d-resources/apollo-lunar-module/
- NASA source repository: https://github.com/nasa/NASA-3D-Resources
- Attribution: NASA / Michael D. Carbajal
- Source Git blob SHA: `74b7b99a60f9903a0592fd763ed14482204e24d9`
- GLB v2; 716,840 bytes; 135 nodes; 134 meshes; 12 materials; 3 textures; 6 images
- Required extension: `KHR_draco_mesh_compression`
- Status: container and JSON parsed; runtime rendering pending.

Historical note: Apollo 11's ascent stage departed the lunar surface. Its descent stage remained. Inspect the model hierarchy before representing the abandoned object.

### Opportunity Mars Exploration Rover (MER-B)
- Local path: `public/models/opportunity-mer-b.glb`
- NASA source repository: https://github.com/nasa/NASA-3D-Resources
- Source Git blob SHA: `4e154ed38a6d4bf128ecb52f7231baed716c4f55`
- GLB v2; 36,668 bytes; 1 node; 1 mesh; 9 materials
- Required extension: `KHR_draco_mesh_compression`
- Status: container and JSON parsed; runtime rendering pending.

Historical note: Distinguish Opportunity's landing location from its final resting location.

## Additional NASA model sources

### InSight Lander — exact user-supplied NASA resource
- NASA page: https://science.nasa.gov/resource/insight-lander-3d-model/
- Credit: NASA/JPL-Caltech
- NASA lists a 21.32 MB glTF download.
- NASA embed URL: https://mars.nasa.gov/gltf_embed/24880
- Status: official resource and embedded viewer identified; direct GLB/glTF download URL has not yet been resolved. Do not use the embed page as if it were a raw GLB URL.

### InSight Cruise Lander — arm deployed
- NASA page: https://science.nasa.gov/3d-resources/insight-cruise-lander/
- Credit: NASA/Brian E. Kumanchik
- Official GLB URL: https://assets.science.nasa.gov/content/dam/science/cds/3d/resources/model/insight-cruise-lander/InSight%20Cruise%20Lander%20%28arm%20deployed%29.glb
- GitHub raw fallback: https://raw.githubusercontent.com/nasa/NASA-3D-Resources/master/3D%20Models/InSight%20Cruise%20Lander/InSight%20Cruise%20Lander%20%28arm%20deployed%29.glb
- Published size: 3.77 MB.
- NASA describes it as the landed configuration with solar panels and arm deployed, before deployment of the seismometer and heat probe. It is a useful InSight model candidate, but not a fully equipped final surface configuration.

### Ingenuity Mars Helicopter
- NASA page: https://science.nasa.gov/3d-resources/ingenuity-mars-helicopter/
- Credit: NASA/Brian E. Kumanchik
- Official GLB URL: https://assets.science.nasa.gov/content/dam/science/cds/3d/resources/model/ingenuity-mars-helicopter/Ingenuity%20Mars%20Helicopter.glb
- GitHub raw fallback: https://raw.githubusercontent.com/nasa/NASA-3D-Resources/master/3D%20Models/Ingenuity%20Mars%20Helicopter/Ingenuity%20Mars%20Helicopter.glb
- Published size: 1.93 MB.

### Mars 2020 Perseverance Rover
- NASA page: https://science.nasa.gov/3d-resources/mars-2020-perseverance-rover/
- Credit: NASA/Jet Propulsion Laboratory
- Official GLB URL: https://assets.science.nasa.gov/content/dam/science/cds/3d/resources/model/mars-2020-perseverance-rover/Mars%202020%20Perseverance%20Rover.glb
- GitHub raw fallback: https://raw.githubusercontent.com/nasa/NASA-3D-Resources/master/3D%20Models/Mars%202020%20Perseverance%20Rover/Mars%202020%20Perseverance%20Rover.glb
- Published size: 4.76 MB.
- Important: Perseverance is an active mission asset, not abandoned equipment. Use it only as a comparison/reference model, not as a core abandoned-object exhibit.

## Integration checklist

1. Test the NASA CDN and GitHub raw URLs for browser CORS access.
2. If possible, download and self-host selected GLBs in `public/models/`.
3. Inspect each file's GLB header, declared length, JSON chunk, mesh/material counts, textures, and required extensions.
4. Configure Draco decoding if `KHR_draco_mesh_compression` is required.
5. Load each model in the actual exhibit viewer and inspect scale, orientation, materials, and performance.
6. Lazy-load only the selected exhibit model and provide an image fallback.
7. Preserve the existing exhibit data v3. Put approved model-path changes in a new versioned file.

**Validation status:** NASA source pages and model links have been checked. The three additional models have not been downloaded into this repository or runtime-tested. Do not describe them as integrated or browser-verified yet.
