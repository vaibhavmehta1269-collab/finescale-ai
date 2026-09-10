import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { servicesData } from "@/data/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = ["", "/services", "/about", "/case-studies", "/faq"];

  const corePages: MetadataRoute.Sitemap = coreRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${SITE_URL}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: service.tier === "flagship" ? 0.9 : 0.8,
  }));

  return [...corePages, ...servicePages];
}
