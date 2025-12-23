import { getPenyedia } from "./endpoints/penyedia.js";

async function main() {
  console.log("Mulai ambil data Penyedia...");

  // GANTI nilai ini sesuai instansi kamu
  const tahun = 2026;
  const kodeKLPD = "D101"; // contoh: 62, 30, dsb

  const data = await getPenyedia(tahun, kodeKLPD);

  console.log("Jumlah data:", data.length);
  console.log("Contoh 1 data:", data[0]);
}

main().catch(err => {
  console.error("ERROR:", err);
});
