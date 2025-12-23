const res = await fetch(u, { headers: HEADERS });

const text = await res.text();
console.log("STATUS:", res.status);
console.log("RESPONSE AWAL:", text.substring(0, 200));

const json = JSON.parse(text);
