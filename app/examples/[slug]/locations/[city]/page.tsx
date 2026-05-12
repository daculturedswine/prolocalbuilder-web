import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { demos, getDemo } from "@/lib/demos";
import { DemoSubChrome } from "@/components/demos/_shared/DemoSubChrome";
import {
  PageEyebrow,
  PageHeading,
  PageLede,
  Prose,
  themeForSlug,
} from "@/components/demos/_shared/SubPageBlocks";

export function generateStaticParams() {
  const params: { slug: string; city: string }[] = [];
  for (const d of demos) {
    if (d.tier !== "premium" || !d.locations) continue;
    for (const loc of d.locations) {
      params.push({ slug: d.slug, city: loc.slug });
    }
  }
  return params;
}
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string; city: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city } = await params;
  const demo = getDemo(slug);
  const loc = demo?.locations?.find((l) => l.slug === city);
  if (!demo || !loc) return {};
  return {
    title: `${demo.category.split(" ")[0]} in ${loc.fullName} · ${demo.businessName} (concept)`,
    description: `${demo.businessName}&apos;s ${loc.name} office. Hours, address, neighborhoods served, and a direct line.`,
    alternates: { canonical: `/examples/${slug}/locations/${city}` },
    robots: { index: true, follow: true },
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug, city } = await params;
  const demo = getDemo(slug);
  const loc = demo?.locations?.find((l) => l.slug === city);
  if (!demo || !loc) notFound();
  const theme = themeForSlug(slug);

  return (
    <DemoSubChrome demo={demo} currentPath={`locations/${city}`}>
      <div className="mb-2 text-[13px]" style={{ color: theme.inkSoft }}>
        <Link href={`/examples/${slug}/locations`} className="hover:underline">
          ← All locations
        </Link>
      </div>
      <PageEyebrow theme={theme}>{loc.fullName}</PageEyebrow>
      <PageHeading theme={theme}>
        {demo.category.split(" ")[0]} in {loc.name}.
      </PageHeading>
      <PageLede theme={theme}>{loc.pitch}</PageLede>

      <Prose paragraphs={loc.paragraphs} theme={theme} />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div
          className="rounded-lg border p-6"
          style={{ borderColor: theme.accent + "25" }}
        >
          <div className="text-[11px] uppercase font-semibold" style={{ color: theme.accent, letterSpacing: "0.18em" }}>
            Address
          </div>
          <div className="mt-2 text-[15px] leading-[1.55]" style={{ color: theme.ink }}>
            {loc.address}
          </div>
        </div>
        <div
          className="rounded-lg border p-6"
          style={{ borderColor: theme.accent + "25" }}
        >
          <div className="text-[11px] uppercase font-semibold" style={{ color: theme.accent, letterSpacing: "0.18em" }}>
            Hours
          </div>
          <div className="mt-2 text-[15px] leading-[1.55]" style={{ color: theme.ink }}>
            {loc.hours}
          </div>
        </div>
        <div
          className="rounded-lg border p-6"
          style={{ borderColor: theme.accent + "25" }}
        >
          <div className="text-[11px] uppercase font-semibold" style={{ color: theme.accent, letterSpacing: "0.18em" }}>
            Direct line
          </div>
          <a
            href={`tel:${demo.fakePhone}`}
            className="mt-2 block text-[18px] font-semibold"
            style={{ color: theme.ink }}
          >
            {demo.fakePhone}
          </a>
        </div>
      </div>

      <div className="mt-14">
        <h2
          className="demo-display text-[24px] font-semibold"
          style={{ color: theme.ink }}
        >
          Neighborhoods served from this office
        </h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {loc.neighborhoods.map((n) => (
            <li
              key={n}
              className="rounded-full border px-4 py-1.5 text-[13px]"
              style={{ borderColor: theme.accent + "30", color: theme.ink }}
            >
              {n}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-lg p-8"
        style={{ background: theme.accent + "10" }}
      >
        <div>
          <div className="text-[12px] uppercase font-semibold" style={{ color: theme.accent, letterSpacing: "0.18em" }}>
            Book at {loc.name}
          </div>
          <div className="mt-1 text-[18px] font-semibold" style={{ color: theme.ink }}>
            Same-day confirmation by text
          </div>
        </div>
        <Link
          href={`/examples/${slug}/contact`}
          className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-[14px] font-semibold text-white"
          style={{ background: theme.accent }}
        >
          Book an appointment
        </Link>
      </div>
    </DemoSubChrome>
  );
}
