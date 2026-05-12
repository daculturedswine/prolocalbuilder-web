import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { demos, getDemo } from "@/lib/demos";
import { formatPrice, tiers } from "@/lib/site";
import { seo, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { LandscapingDemo } from "@/components/demos/LandscapingDemo";
import { PlumbingDemo } from "@/components/demos/PlumbingDemo";
import { DentalDemo } from "@/components/demos/DentalDemo";

export function generateStaticParams() {
  return demos.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) return {};
  const url = `/examples/${slug}`;
  const tierName = tiers.find((t) => t.id === demo.tier)?.name ?? demo.tier;
  const title = `${demo.businessName} (concept) · ProLocalBuilder example`;
  const description = `Concept site demonstrating what a ${tierName} ($${formatPrice(demo.flatPrice)}) ProLocalBuilder website looks like for a ${demo.category} business.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title, description, url, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ExamplePage({ params }: Props) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) notFound();

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: seo.siteUrl },
    { name: "Examples", url: `${seo.siteUrl}/examples` },
    { name: demo.businessName, url: `${seo.siteUrl}/examples/${demo.slug}` },
  ]);

  const DemoComponent = pickDemo(demo.slug);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <DemoComponent demo={demo} />
    </>
  );
}

function pickDemo(slug: string) {
  switch (slug) {
    case "forest-edge-landscaping":
      return LandscapingDemo;
    case "rivera-plumbing":
      return PlumbingDemo;
    case "henderson-smile-dental":
      return DentalDemo;
    default:
      return LandscapingDemo;
  }
}
