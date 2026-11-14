/**
 * Download selected official NASA GLB assets into public/models.
 * Requires Node.js 18+ (native fetch). No npm dependencies.
 *
 * Run: node scripts/download-nasa-models.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const assets = [
  {
    name: "InSight Cruise Lander (arm deployed)",
    output: "public/models/insight-cruise-lander-arm-deployed.glb",
    urls: [
      "https://assets.science.nasa.gov/content/dam/science/cds/3d/resources/model/insight-cruise-lander/InSight%20Cruise%20Lander%20%28arm%20deployed%29.glb",
      "https://raw.githubusercontent.com/nasa/NASA-3D-Resources/master/3D%20Models/InSight%20Cruise%20Lander/InSight%20Cruise%20Lander%20%28arm%20deployed%29.glb"
    ]
  },
  {
    name: "Ingenuity Mars Helicopter",
    output: "public/models/ingenuity-mars-helicopter.glb",
    urls: [
      "https://assets.science.nasa.gov/content/dam/science/cds/3d/resources/model/ingenuity-mars-helicopter/Ingenuity%20Mars%20Helicopter.glb",
      "https://raw.githubusercontent.com/nasa/NASA-3D-Resources/master/3D%20Models/Ingenuity%20Mars%20Helicopter/Ingenuity%20Mars%20Helicopter.glb"
    ]
  },
  {
    name: "Mars 2020 Perseverance Rover",
    output: "public/models/perseverance-mars-2020.glb",
    urls: [
      "https://assets.science.nasa.gov/content/dam/science/cds/3d/resources/model/mars-2020-perseverance-rover/Mars%202020%20Perseverance%20Rover.glb",
      "https://raw.githubusercontent.com/nasa/NASA-3D-Resources/master/3D%20Models/Mars%202020%20Perseverance%20Rover/Mars%202020%20Perseverance%20Rover.glb"
    ]
  }
];

function validateGlb(buffer, label) {
  if (buffer.byteLength < 20) throw new Error(label + ": file is too small to be a GLB");
  const view = new DataView(buffer);
  const magic = String.fromCharCode(
    view.getUint8(0), view.getUint8(1), view.getUint8(2), view.getUint8(3)
  );
  const version = view.getUint32(4, true);
  const declaredLength = view.getUint32(8, true);
  if (magic !== "glTF") throw new Error(label + ": invalid GLB magic (received " + magic + ")");
  if (version !== 2) throw new Error(label + ": expected GLB v2, received v" + version);
  if (declaredLength !== buffer.byteLength) {
    throw new Error(label + ": declared length " + declaredLength +
      " differs from downloaded bytes " + buffer.byteLength);
  }
  return { version, bytes: buffer.byteLength };
}

await mkdir("public/models", { recursive: true });

for (const asset of assets) {
  let downloaded = null;
  let lastError = null;
  for (const url of asset.urls) {
    try {
      const response = await fetch(url, { redirect: "follow" });
      if (!response.ok) throw new Error("HTTP " + response.status);
      const buffer = await response.arrayBuffer();
      const validation = validateGlb(buffer, asset.name);
      downloaded = { buffer, validation, source: url };
      break;
    } catch (error) {
      lastError = error;
    }
  }
  if (!downloaded) {
    console.error("FAILED:", asset.name, lastError?.message ?? "unknown error");
    continue;
  }
  const output = resolve(asset.output);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, new Uint8Array(downloaded.buffer));
  console.log("SAVED:", asset.output, downloaded.validation.bytes, "bytes");
  console.log("SOURCE:", downloaded.source);
}
