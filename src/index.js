import { getPenyedia } from "./endpoints/penyedia.js";
import { getSwakelola } from "./endpoints/swakelola.js";
import { writeSheet } from "./sheets/writeSheet.js";

async function main() {
  const tahun = 2025;
  const kodeKLPD = "30";

  console.log("Sync Penyedia");
  const penyedia = await getPenyedia(tahun, kodeKLPD);
  await writeSheet("Penyedia", penyedia);

  console.log("Sync Swakelola");
  const swakelola = await getSwakelola(tahun, kodeKLPD);
  await writeSheet("Swakelola", swakelola);

  // 👉 lanjutkan:
  // Tender
  // Non Tender
  // E-Purchasing
  // Toko Daring
}

main().catch(console.error);
