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
      console.error("STATUS:", res.status);
      console.error("RESPONSE:", text.slice(0, 200));
      throw new Error("INAPROC response error");
    }

    const json = JSON.parse(text);

    if (Array.isArray(json.data)) {
      allData.push(...json.data);
    }

    cursor = json.meta?.cursor;
    hasMore = json.meta?.has_more;
  }

  return allData;
}
