import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

export const reader = createReader(process.cwd(), keystaticConfig);

export function getLangField(entry: any, field: string, lang: string) {
  if (!entry) return "";
  if (lang === "es" || !lang) return entry[field] || "";
  return entry[`${field}_${lang}`] || entry[field] || "";
}
