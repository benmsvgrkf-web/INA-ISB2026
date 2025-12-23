import { getPenyedia } from "./endpoints/penyedia.js";
import { writeSheet } from "./sheets/writeSheet.js";

async function main() {
  const tahun = 2025;
  const kodeKLPD = "D101"; // <-- KODE KLPD KAMU

  console.log("Sync Penyedia...");
  const penyedia = await getPenyedia(tahun, kodeKLPD);
  console.log("Jumlah data:", penyedia.length);

  await writeSheet("Penyedia", penyedia);
}

main().catch(console.error);
