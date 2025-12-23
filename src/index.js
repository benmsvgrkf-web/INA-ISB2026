import { getPenyedia } from "./endpoints/penyedia.js";
import { writeSheet } from "./sheets/writeSheet.js";

async function main() {
  console.log("Mulai ambil data Penyedia...");

  const tahun = 2026;
  const kodeKLPD = "D101"; // ganti sesuai instansi

  const data = await getPenyedia(tahun, kodeKLPD);

  console.log("Jumlah data:", data.length);

  await writeSheet("Penyedia", data);
}

main().catch(err => {
  console.error("ERROR:", err);
});
