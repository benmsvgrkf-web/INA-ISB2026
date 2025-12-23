import { HEADERS } from "../config/inaproc.js";

export async function fetchAll(url) {
  let allData = [];
  let cursor = null;
  let hasMore = true;

  while (hasMore) {
    const u = new URL(url);
    if (cursor) u.searchParams.set("cursor", cursor);

    const res = await fetch(u, { headers: HEADERS });
    const text = await res.text();

    if (!res.ok) {
      console.error("HTTP STATUS:", res.status);
      console.error("RESPONSE:", text.slice(0, 300));
      throw new Error("HTTP error dari INAPROC");
    }

    const json = JSON.parse(text);

    // 🔥 WAJIB cek success (INI YANG KAMU LEWAT)
    if (json.success !== true) {
      console.error("API SUCCESS = FALSE");
      console.error(JSON.stringify(json, null, 2));
      return [];
    }

    // 🔥 AMBIL DATA SESUAI STANDAR TUTORIAL
    const records = Array.isArray(json.data) ? json.data : [];

    console.log("Fetched records:", records.length);
    allData.push(...records);

    // 🔥 PAGINATION SESUAI TUTORIAL
    cursor = json.meta?.cursor;
    hasMore = json.meta?.has_more === true;
  }

  return allData;
}
