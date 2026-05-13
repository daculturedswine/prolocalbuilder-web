import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { demos, getDemo } from "@/lib/demos";
import { DemoSubChrome } from "@/components/demos/_shared/DemoSubChrome";
import {
  PageEyebrow,
  PageHeading,
  PageLede,
  themeForSlug,
} from "@/components/demos/_shared/SubPageBlocks";

export function generateStaticParams() {
  return demos
    .filter((d) => d.tier === "premium" && (d.locations?.length ?? 0) > 0)
    .map((d) => ({ slug: d.slug }));
}
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) return {};
  return {
    title: `Locations · ${demo.businessName} (concept)`,
    description: `Three ${demo.businessName} offices across the Las Vegas valley. Find the one closest to you.`,
    alternates: { canonical: `/examples/${slug}/locations` },
    robots: { index: true, follow: true },
  };
}

export default async function LocationsPage({ params }: Props) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo || !demo.locations) notFound();
  const theme = themeForSlug(slug);

  return (
    <DemoSubChrome demo={demo} currentPath="locations">
      <PageEyebrow theme={theme}>Three offices</PageEyebrow>
      <PageHeading theme={theme}>Find the {demo.businessName.split(" ")[0]} closest to you.</PageHeading>
      <PageLede theme={theme}>
        We&apos;ve grown to three offices across the Las Vegas valley so you don&apos;t have
        to cross town for a cleaning. Each location runs the same standards and the same
        front-desk staff who will know your name.
      </PageLede>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {demo.locations.map((loc) => (
          <Link
            key={loc.slug}
            href={`/examples/${slug}/locations/${loc.slug}`}
            className="block rounded-lg border bg-white p-7 transition-shadow hover:shadow-md"
            style={{ borderColor: theme.accent + "25" }}
          >
            <div
              aria-hidden="true"
              className="mb-5 h-[120px] w-full rounded-md"
              style={{
                background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accent}90 100%)`,
              }}
            />
            <div
              className="text-[11px] uppercase font-semibold"
              style={{ color: theme.accent, letterSpacing: "0.2em" }}
            >
              {loc.fullName}
            </div>
            <h2
              className="demo-display mt-2 text-[24px] font-semibold"
              style={{ color: theme.ink }}
            >
              {loc.name}
            </h2>
            <p className="mt-3 text-[14px] leading-[1.6]" style={{ color: theme.inkSoft }}>
              {loc.pitch}
            </p>
            <div className="mt-5 border-t pt-4 text-[13px]" style={{ borderColor: theme.accent + "20", color: theme.inkSoft }}>
              <div className="font-semibold" style={{ color: theme.ink }}>
                {loc.hours}
              </div>
              <div className="mt-1">{loc.address}</div>
            </div>
            <span
              className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold"
              style={{ color: theme.accent }}
            >
              View this office <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>

      <p
        className="mt-14 max-w-[680px] text-[14px] leading-[1.7]"
        style={{ color: theme.inkSoft }}
      >
        <strong style={{ color: theme.ink }}>Why three offices?</strong> Henderson is huge.
        Patients in Summerlin shouldn&apos;t have to drive 35 minutes for a 30-minute
        cleaning. We opened satellites where our patients already live — same care,
        shorter commute. Premium-tier ProLocalBuilder sites get a dedicated, search-optimized
        page for every location like this, so you show up in &ldquo;[your job] near me&rdquo;
        from every neighborhood you serve.
      </p>
    </DemoSubChrome>
  );
}
