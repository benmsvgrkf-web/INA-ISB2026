export const BASE_URL = process.env.INAPROC_API_BASE_URL;

export const HEADERS = {
  Authorization: `Bearer ${process.env.INAPROC_API_TOKEN}`,
  Accept: "application/json"
};
