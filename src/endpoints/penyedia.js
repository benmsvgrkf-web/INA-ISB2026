import { BASE_URL } from "../config/inaproc.js";
import { fetchAll } from "../services/fetch_all.js";

export async function getPenyedia(tahun, bulan, lpseId) {
  const url =
    `${BASE_URL}/v1/rup/rencana/penyedia` +
    `?lpse_id=${lpseId}&tahun=${tahun}&bulan=${bulan}&limit=100`;

  return await fetchAll(url);
}
