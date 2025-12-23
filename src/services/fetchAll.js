import { HEADERS } from "../config/inaproc.js";

export default async function fetchAll(url) {
  let allData = [];
  let cursor = null;
  let hasMore = true;

  while (hasMore) {
    const u = new URL(url);
    if (cursor) u.searchParams.set("cursor", cursor);

    const res = await fetch(u, { headers: HEADERS });
    const json = await res.json();

    if (Array.isArray(json.data)) {
      allData.push(...json.data);
    }

    cursor = json.meta?.cursor;
    hasMore = json.meta?.has_more;
  }

  return allData;
}
