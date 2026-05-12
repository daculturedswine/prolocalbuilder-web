import { site } from "@/lib/site";
import { seo, buildSitemap } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400; // 24 hours

const PAGE_TITLES: Record<string, string> = {
  "/": `${site.name} · ${site.tagline}`,
  "/examples": "Examples — See What We Build",
  "/examples/forest-edge-landscaping": "Demo: Forest Edge Landscaping",
  "/examples/rivera-plumbing": "Demo: Rivera Plumbing",
  "/examples/henderson-smile-dental": "Demo: Henderson Smile Dental",
  "/web-design": "Local Web Design Services",
  "/websites-for": "Websites by Industry",
  "/vs": "How We Compare",
  "/for-trades": "Websites for Trades & Contractors",
  "/for-auto": "Websites for Auto Businesses",
  "/for-medical": "Websites for Medical & Health",
  "/for-professional-services": "Websites for Professional Services",
  "/for-personal-services": "Websites for Personal Services",
  "/for-restaurants": "Websites for Restaurants & Food",
  "/privacy": "Privacy Policy",
  "/terms": "Terms of Service",
};

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function slugToTitle(path: string): string {
  if (PAGE_TITLES[path]) return PAGE_TITLES[path];

  const parts = path.split("/").filter(Boolean);
  const last = parts[parts.length - 1]
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  if (path.startsWith("/web-design/")) return `Web Design — ${last}`;
  if (path.startsWith("/websites-for/") && parts.length === 2)
    return `Websites for ${last}`;
  if (path.startsWith("/websites-for/") && parts.length === 3) {
    const industry = parts[1]
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return `${industry} Websites — ${last}`;
  }
  if (path.startsWith("/vs/")) return `${site.name} vs ${last}`;

  return last;
}

export async function GET() {
  const siteUrl = seo.siteUrl;
  const now = new Date().toUTCString();
  const entries = buildSitemap();

  const items = entries
    .map((entry) => {
      const url = `${siteUrl}${entry.path}`;
      const title = escapeXml(slugToTitle(entry.path));
      const desc = escapeXml(
        `${site.name} — ${site.description}`
      );
      return `    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${desc}</description>
      <pubDate>${now}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(site.description)}</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
