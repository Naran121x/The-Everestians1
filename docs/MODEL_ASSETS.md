# NASA 3D model assets

These model files are copied from NASA's public `NASA-3D-Resources` GitHub repository for local hosting by this educational project.

## Apollo Lunar Module

- Local file: `public/models/apollo-lunar-module.glb`
- Source file: https://github.com/nasa/NASA-3D-Resources/blob/master/3D%20Models/Apollo%20Lunar%20Module/Apollo%20Lunar%20Module.glb
- NASA resource page: https://science.nasa.gov/3d-resources/apollo-lunar-module/
- Attribution: NASA / Michael D. Carbajal
- Source Git blob SHA: `74b7b99a60f9903a0592fd763ed14482204e24d9`
- GLB bytes: 716840
- GLB v2; 135 nodes; 134 meshes; 12 materials; 3 textures; 6 images
- Required decoder extension: `KHR_draco_mesh_compression`
- Status: container and JSON parsed; browser rendering pending.

Historical note: Apollo 11's ascent stage departed the lunar surface. Its descent stage remained. Inspect the model hierarchy and isolate the descent stage before using it to represent the abandoned object.

## Opportunity Mars Exploration Rover (MER-B)

- Local file: `public/models/opportunity-mer-b.glb`
- Source file: https://github.com/nasa/NASA-3D-Resources/blob/master/3D%20Models/Mars%20Exploration%20Rover%20-%20Opportunity%20(MER-B)/Mars%20Exploration%20Rover%20-%20Opportunity%20(MER-B).glb
- Source Git blob SHA: `4e154ed38a6d4bf128ecb52f7231baed716c4f55`
- GLB bytes: 36668
- GLB v2; 1 node; 1 mesh; 9 materials
- Required decoder extension: `KHR_draco_mesh_compression`
- Status: container and JSON parsed; browser rendering pending.

Historical note: Keep Opportunity's landing site distinct from its final resting location.

## Required integration checks

1. Confirm both assets load in the actual app's GLTF loader.
2. Configure and test the Draco decoder. Both files declare `KHR_draco_mesh_compression` as required.
3. Inspect visual appearance, orientation, scale, materials, and texture loading.
4. Check performance on an integrated-GPU laptop and mobile browser.
5. Do not mark either asset fully verified until those runtime tests pass.

The existing exhibit data v3 must remain unchanged. Any approved integration should be written to a new versioned data file.
