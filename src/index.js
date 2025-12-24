import { writeSheet } from "./sheets/writeSheet.js";

async function main() {
  const dummy = [
    { kolom1: "TES", kolom2: 123 },
    { kolom1: "MASUK", kolom2: 456 }
  ];

  await writeSheet("Penyedia", dummy);
}

main().catch(console.error);
