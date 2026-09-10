export const SITE_URL = "https://www.finescaleai.com";
export const SITE_NAME = "FineScale AI";
export const BOOKING_URL = "https://calendly.com/vaibhav-finescaleai";

const ACRONYMS = ["AI", "OS", "ROI", "CRM", "ERP", "API", "RAG", "LLM"];

function titleCaseWord(word: string): string {
  if (!word) return word;
  if (word === "/") return word;
  if (word.includes("-")) {
    return word.split("-").map(titleCaseWord).join("-");
  }
  const upper = word.toUpperCase();
  if (ACRONYMS.includes(upper)) return upper;
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/**
 * Service names are stored in ALL CAPS in servicesData.ts. Converts to title
 * case while preserving known acronyms (AI, OS, ROI, CRM, ERP, API, RAG, LLM).
 * e.g. "AI VOICE AGENTS" -> "AI Voice Agents", "MULTI-AGENT SYSTEMS" -> "Multi-Agent Systems"
 */
export function toTitleCase(value: string): string {
  return value
    .split(" ")
    .map(titleCaseWord)
    .join(" ");
}

export interface BreadcrumbTrailItem {
  name: string;
  path: string;
}

/**
 * Builds schema.org BreadcrumbList JSON-LD from a trail of {name, path}
 * entries, always prepending a "Home" entry pointing at "/".
 */
export function buildBreadcrumbJsonLd(trail: BreadcrumbTrailItem[]) {
  const items: BreadcrumbTrailItem[] = [{ name: "Home", path: "/" }, ...trail];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
