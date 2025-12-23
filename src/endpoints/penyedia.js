import { BASE_URL } from "../config/inaproc.js";
import { fetchAll } from "../services/fetch_all.js";

export async function getPenyedia(tahun, kodeKLPD) {
  const url =
    `${BASE_URL}/api/v1/rup/paket-penyedia-terumumkan` +
    `?tahun=${tahun}&kode_klpd=${kodeKLPD}&limit=100`;

  return await fetchAll(url);
}
