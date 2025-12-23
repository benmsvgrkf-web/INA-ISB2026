import { getPenyedia } from "./endpoints/penyedia.js";
import { writeSheet } from "./sheets/writeSheet.js";

async function main() {
  const tahun = 2026;
  const bulan = 1; // <-- WAJIB ANGKA 1–12

  console.log("Sync Penyedia...");
  const penyedia = await getPenyedia(tahun, bulan);

  console.log("Jumlah data:", penyedia.length);
  await writeSheet("Penyedia", penyedia);
}

main().catch(console.error);
