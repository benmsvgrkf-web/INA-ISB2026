import { BASE_URL } from "../config/inaproc.js";
import { fetchAll } from "../services/fetch_all.js";

export async function getPenyedia(tahun) {
  const kodeKLPD = "D101";

  const url =
    `${BASE_URL}/v1/rup/paket-penyedia-terumumkan` +
    `?kode_klpd=${kodeKLPD}&tahun=${tahun}&limit=100`;

  return await fetchAll(url);
}
