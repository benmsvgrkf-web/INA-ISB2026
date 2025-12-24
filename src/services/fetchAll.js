import { HEADERS } from "../config/inaproc.js";

export async function fetchAll(url) {
  let allData = [];
  let cursor = null;

  while (true) {
    const u = new URL(url);
    if (cursor) u.searchParams.set("cursor", cursor);

    const res = await fetch(u, {
      headers: {
        ...HEADERS,
        Accept: "application/json"
      }
    });

    const text = await res.text();

    if (!res.ok) {
      console.error("STATUS:", res.status);
      console.error("RESPONSE:", text.slice(0, 300));
      throw new Error("INAPROC HTTP ERROR");
    }

    let json;
    try {
      json = JSON.parse(text);
    } catch {
      console.error("Bukan JSON:", text.slice(0, 300));
      throw new Error("INVALID JSON RESPONSE");
    }

    // 🔴 PENTING
    if (json.success !== true) {
      console.error("API ERROR:", json);
      throw new Error("INAPROC API SUCCESS = FALSE");
    }

    if (Array.isArray(json.data)) {
      allData.push(...json.data);
    }

    if (!json.meta?.has_more) break;
    cursor = json.meta.cursor;
  }

  return allData;
}
