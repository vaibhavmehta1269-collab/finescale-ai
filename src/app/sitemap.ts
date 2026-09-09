import type { MetadataRoute } from "next";

const SITE_URL = "https://www.finescaleai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/about", "/case-studies", "/faq"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
