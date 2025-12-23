import { google } from "googleapis";

export async function writeSheet(sheetName, rows) {
  if (!rows || rows.length === 0) {
    console.log(`Sheet ${sheetName}: tidak ada data`);
    return;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SHEET_KEY_JSON),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.SPREADSHEET_ID;

  const headers = Object.keys(rows[0]);
  const values = [
    headers,
    ...rows.map(row => headers.map(h => row[h] ?? ""))
  ];

  // 🔥 CLEAR HARUS EKSPLISIT
  await sheets.spreadsheets.values.clear({
    spreadsheetId,
    range: `${sheetName}!A1:ZZ`
  });

  // 🔥 UPDATE HARUS DIMULAI DARI A1
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${sheetName}!A1`,
    valueInputOption: "RAW",
    requestBody: { values }
  });

  console.log(`Sheet ${sheetName}: ${rows.length} baris ditulis`);
}
