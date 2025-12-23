const res = await fetch(u, { headers: HEADERS });

const text = await res.text();
console.log("STATUS:", res.status);
console.log("RESPONSE (100 char):", text.slice(0, 100));

let json;
try {
  json = JSON.parse(text);
} catch (e) {
  throw new Error("Response bukan JSON");
}
