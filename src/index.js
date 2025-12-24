import { getPenyedia } from "./endpoints/penyedia.js";
import { writeSheet } from "./sheets/writeSheet.js";

async function main() {
  const tahun = 2026;
  const kodeKLPD = "D101";

  console.log("Sync Penyedia...");
  const data = await getPenyedia(tahun, kodeKLPD);

  console.log("TOTAL DATA:", data.length);

  await writeSheet("Penyedia", data);
}

main().catch(console.error);
