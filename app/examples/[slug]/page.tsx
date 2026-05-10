import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { demos, getDemo } from "@/lib/demos";
import { formatPrice } from "@/lib/site";
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
  const title = `${demo.businessName} (concept) · ProLocalBuilder example`;
  const description = `Concept site demonstrating what a Tier ${demo.tier} ($${formatPrice(demo.flatPrice)}) ProLocalBuilder website looks like for a ${demo.category} business.`;
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

  // Pick the demo template based on slug. Each is a distinct visual design.
  const DemoComponent = pickDemo(demo.slug);

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* PLB disclaimer banner. Sits at the top of the page (no longer sticky)
          so it doesn't clash with each demo's own header / palette as the user
          scrolls. The end-of-page CTA below the demo restates the PLB context. */}
      <div
        role="region"
        aria-label="Concept design notice"
        className="bg-orange-100 border-b border-orange-500/40 text-ink-900"
      >
        <div className="container-page flex flex-wrap items-center justify-between gap-3 py-3 text-body-sm">
          <span>
            <strong className="text-orange-700">
              <span aria-hidden="true">ⓘ </span>Tier {demo.tier} concept (${formatPrice(demo.flatPrice)}).
            </strong>{" "}
            <span className="hidden sm:inline">
              {demo.businessName} is a fictional business. This shows what a{" "}
              <strong>Tier {demo.tier}</strong> ProLocalBuilder build looks like — we
              don&apos;t have a demo for every niche, but we customize the design
              for yours when we build it.
            </span>
            <span className="sm:hidden">
              Tier {demo.tier} concept · Customized per niche on real builds
            </span>
          </span>
          <div className="flex items-center gap-3 text-body-sm">
            <Link
              href="/examples"
              className="text-orange-700 underline transition-colors duration-200 hover:no-underline"
            >
              All examples
            </Link>
            <Link
              href="/#pricing"
              className="hidden sm:inline-flex rounded-md bg-orange-500 px-3 py-1.5 font-semibold text-white transition-colors duration-200 hover:bg-orange-600"
            >
              Get yours · ${formatPrice(demo.flatPrice)}
            </Link>
          </div>
        </div>
      </div>

      <main id="main">
        <DemoComponent demo={demo} />
      </main>

      {/* End-of-page CTA back to ProLocalBuilder. Lives outside the demo
          so it doesn't clash with each demo's internal design language. */}
      <section className="bg-orange-100/50 border-t border-orange-500/40">
        <div className="container-narrow py-16 text-center">
          <span className="badge-orange">Built by ProLocalBuilder</span>
          <h2 className="text-h2-sm md:text-h2 text-ink-900">
            Want a Tier {demo.tier} site for your business?
          </h2>
          <p className="mt-3 text-body-lg text-ink-700">
            {demo.businessName} is a concept showing what a{" "}
            <span className="font-mono font-semibold">
              ${formatPrice(demo.flatPrice)} flat
            </span>{" "}
            Tier {demo.tier} build looks like. Yours won&apos;t look exactly
            like this — we customize the design and copy for your specific
            niche. Built in 7 to 14 days.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/#pricing" className="btn btn-primary btn-lg">
              See pricing
            </Link>
          </div>
          <p className="mt-5 text-body-sm text-ink-700">
            or{" "}
            <Link
              href="/#quote"
              className="font-semibold text-orange-500 underline-offset-2 hover:underline"
            >
              get a free quote
            </Link>
            {" · "}
            <Link
              href="/examples"
              className="font-semibold text-orange-500 underline-offset-2 hover:underline"
            >
              view other examples
            </Link>
          </p>
        </div>
      </section>
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
