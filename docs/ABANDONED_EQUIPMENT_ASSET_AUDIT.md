# Abandoned Equipment Asset Audit

This file separates **actual abandoned surface equipment** from whole-vehicle reference models and from visualizations that are not downloadable 3D meshes.

## Core rule

Only label a model as an abandoned artifact when the represented object was actually left on the Moon or Mars. A model of an active mission vehicle is reference-only. A terrain model, photograph, stereo anaglyph, or 3D reconstruction image is not a downloadable 3D mesh.

## Moon — confirmed abandoned objects

| Object | What remained | 3D asset status | Evidence / source |
|---|---|---|---|
| Apollo Lunar Module descent stage | The descent stage remained at the landing site after the ascent stage departed. | **Partial source model available:** NASA's Apollo Lunar Module GLB depicts the complete two-stage LM. It may contain the descent stage as a separable mesh, but the node hierarchy must be inspected before claiming a clean isolated model. | https://science.nasa.gov/3d-resources/apollo-lunar-module/ |
| ALSEP / EASEP instruments | Scientific instruments, central station, antenna, power unit and experiment hardware were deployed and left on the lunar surface. | **No verified free official standalone GLB/OBJ found.** NASA published 3D measurements/reconstructions of ALSEP equipment at Apollo 14, but the page provides image downloads, not a mesh download. | https://science.nasa.gov/photojournal/precise-3-d-measurements-of-objects-at-apollo-14-landing-site/ |
| Laser Ranging Retroreflector | Retroreflector arrays were left at Apollo landing sites and are still used for lunar laser ranging. | **No verified free official standalone 3D mesh found.** Treat a future procedural model as an explicitly labelled reconstruction. | https://science.nasa.gov/photojournal/precise-3-d-measurements-of-objects-at-apollo-14-landing-site/ |
| Lunar Roving Vehicle (LRV) | Apollo 15, 16 and 17 rovers were left on the Moon. | **No verified free official NASA GLB/OBJ download found in this audit.** Do not silently substitute a commercial model or an unrelated rover. | https://www.nasa.gov/ |
| Apollo surface tools / PLSS backpacks / S-band antenna | Various equipment items were left at Apollo landing sites. | No verified free official standalone mesh found in this audit. Use NASA landing-site imagery and the NASA Moon artifact catalogue until a downloadable model is verified. | https://svs.gsfc.nasa.gov/4767 |

NASA's Apollo 12 landing-site visualization identifies the LM descent stage, PLSS backpacks, S-band antenna, ALSEP components and Surveyor 3 at the site. It is excellent evidence for exhibit storytelling, but the visualization itself is not a downloadable equipment mesh:
https://svs.gsfc.nasa.gov/4767

NASA's 3D measurements page reports that ALSEP equipment and other objects were reconstructed from LROC stereo imagery. Its listed downloads are JPEG/TIFF images, not a 3D model file:
https://science.nasa.gov/photojournal/precise-3-d-measurements-of-objects-at-apollo-14-landing-site/

## Mars — abandoned objects and landing hardware

| Object | What remained | 3D asset status | Evidence / source |
|---|---|---|---|
| Viking 1 / Viking 2 landers | Both landers remain at their respective landing sites. | **Official NASA GLB available** in the model source list; model represents the lander design used by both missions. | https://science.nasa.gov/3d-resources/viking-lander/ |
| InSight lander | Stationary lander remained at Elysium Planitia after the mission ended. | **Official NASA 3D model sources available.** The cruise-lander GLB variant shows the landed configuration with arm deployed, but before seismometer and heat-probe deployment. | https://science.nasa.gov/3d-resources/insight-cruise-lander/ |
| Opportunity rover | Rover remains at its final resting location in Perseverance Valley. | **Official NASA Opportunity GLB available** in the model source list. Ensure the exhibit distinguishes landing site from final resting location. | https://science.nasa.gov/3d-resources/mars-exploration-rover-opportunity-mer-b/ |
| Spirit rover | Rover remains at its final location in Troy. | NASA provides a combined Spirit/Opportunity twin-rover glTF resource; direct download/dependencies were not verified in this audit. | https://science.nasa.gov/resource/mars-exploration-rovers-3d-model/ |
| Ingenuity helicopter | Retired helicopter remains on the Martian surface. | **Official NASA GLB available** in the model source list. This is an individual piece of equipment, not a whole lander system. | https://science.nasa.gov/3d-resources/ingenuity-mars-helicopter/ |
| Mars landing debris (Perseverance) | Descent stage, backshell/parachute and heat shield were discarded at separate locations. | NASA provides an annotated surface image identifying the components, but this audit did not find official standalone downloadable meshes for those components. Do not label the Perseverance rover itself as abandoned; it is active. | https://science.nasa.gov/resource/perseverance-and-mars-2020-spacecraft-components-on-the-surface/ |
| Curiosity landing debris | Backshell and parachute, descent hardware and heat shield were left at the landing site. | NASA provides stereo 3D imagery of the parachute and backshell, not a downloadable GLB/OBJ mesh in the cited resource. | https://science.nasa.gov/resource/parachute-and-back-shell-in-3d/ |

## What this means for the digital museum

1. Put actual abandoned artifacts first: descent stages, stationary landers, retired rovers/helicopters, ALSEP instruments, retroreflectors and landing debris.
2. Whole-machine models are valid when the machine itself is the abandoned artifact (for example, Viking, InSight, Opportunity and Ingenuity).
3. For Apollo's descent stage, reuse the NASA LM model only after confirming the descent-stage geometry can be isolated; otherwise label it clearly as a complete LM reference model.
4. For ALSEP, LRV, retroreflector and Mars landing debris, use source-linked NASA images and a clearly labelled **illustrative reconstruction** only if a suitable free source mesh cannot be verified.
5. Never pass a commercial or unverified model off as NASA-made or as an exact scan.
6. All 3D models still require actual browser-viewer testing, including Draco decoding where needed.

## License and source policy

NASA's 3D Resources hub states that its assets are free to download and use, subject to NASA Images and Media Usage Guidelines:
https://science.nasa.gov/3d-resources/

Third-party commercial ALSEP models were found during research, but they are not included in this repository because they are paid assets and their license is not suitable for this project's free/open workflow.
