import { HEADERS } from "../config/inaproc.js";

export async function fetchAll(url) {
  let allData = [];
  let cursor;

  while (true) {
    const u = new URL(url);
    if (cursor) u.searchParams.set("cursor", cursor);

    const res = await fetch(u, { headers: HEADERS });
    const text = await res.text();

    if (!res.ok) {
      console.error("HTTP:", res.status);
      console.error("BODY:", text.slice(0, 300));
      throw new Error("INAPROC API ERROR");
    }

    // 🔥 CEK BUKAN JSON
    if (!text.trim().startsWith("{")) {
      throw new Error("RESPONSE BUKAN JSON: kemungkinan token / URL salah");
    }

    const json = JSON.parse(text);

    if (Array.isArray(json.data)) {
      allData.push(...json.data);
    }

    if (!json.meta?.has_more) break;
    cursor = json.meta.cursor;
  }

  return allData;
}
