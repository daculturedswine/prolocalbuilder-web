import type { MetadataRoute } from "next";
import { seo } from "@/lib/seo";

/**
 * Tell crawlers what to index. Marketing surface + static assets are
 * fully open. Internal/admin paths are blocked. Well-behaved AI crawlers
 * (GPTBot, ClaudeBot, PerplexityBot) are explicitly allowed. Local SMBs
 * increasingly find vendors via AI search and we want to be discoverable.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/*?utm_*",
          "/*?ref=",
        ],
      },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${seo.siteUrl}/sitemap.xml`,
    host: seo.siteUrl,
  };
}
