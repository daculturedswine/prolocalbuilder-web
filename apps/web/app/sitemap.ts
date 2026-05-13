import type { MetadataRoute } from "next";
import { seo, buildSitemap } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  return buildSitemap().map((entry) => ({
    url: `${seo.siteUrl}${entry.path}`,
    lastModified: today,
    changeFrequency: entry.changefreq,
    priority: entry.priority,
  }));
}
