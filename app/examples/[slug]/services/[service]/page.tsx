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
  BulletList,
  themeForSlug,
} from "@/components/demos/_shared/SubPageBlocks";

export function generateStaticParams() {
  // Only Pro and Premium demos have per-service detail pages.
  const params: { slug: string; service: string }[] = [];
  for (const d of demos) {
    if (d.tier === "starter") continue;
    for (const s of d.services) {
      params.push({ slug: d.slug, service: s.slug });
    }
  }
  return params;
}
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string; service: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, service } = await params;
  const demo = getDemo(slug);
  const svc = demo?.services.find((s) => s.slug === service);
  if (!demo || !svc) return {};
  return {
    title: `${svc.title} · ${demo.businessName} (concept)`,
    description: svc.pitch ?? svc.body,
    alternates: { canonical: `/examples/${slug}/services/${service}` },
    robots: { index: true, follow: true },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug, service } = await params;
  const demo = getDemo(slug);
  const svc = demo?.services.find((s) => s.slug === service);
  if (!demo || !svc) notFound();
  const theme = themeForSlug(slug);

  return (
    <DemoSubChrome demo={demo} currentPath={`services/${service}`}>
      <div className="mb-2 text-[13px]" style={{ color: theme.inkSoft }}>
        <Link href={`/examples/${slug}/services`} className="hover:underline">
          ← All services
        </Link>
      </div>
      <PageEyebrow theme={theme}>Service</PageEyebrow>
      <PageHeading theme={theme}>{svc.title}</PageHeading>
      {svc.pitch && <PageLede theme={theme}>{svc.pitch}</PageLede>}

      {svc.paragraphs && <Prose paragraphs={svc.paragraphs} theme={theme} />}

      {svc.bullets && (
        <>
          <h2
            className="demo-display mt-14 text-[24px] font-semibold"
            style={{ color: theme.ink }}
          >
            What&apos;s included
          </h2>
          <BulletList items={svc.bullets} theme={theme} />
        </>
      )}

      <div
        className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-lg border p-8"
        style={{ borderColor: theme.accent + "30", background: theme.accent + "08" }}
      >
        <div>
          <div className="text-[12px] uppercase font-semibold" style={{ color: theme.accent, letterSpacing: "0.18em" }}>
            Ready to book?
          </div>
          <div className="mt-1 text-[18px] font-semibold" style={{ color: theme.ink }}>
            Call {demo.fakePhone}
          </div>
          <div className="text-[14px]" style={{ color: theme.inkSoft }}>
            or fill out the contact form — we respond within the hour.
          </div>
        </div>
        <div className="flex gap-3">
          <a
            href={`tel:${demo.fakePhone}`}
            className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-[14px] font-semibold text-white"
            style={{ background: theme.accent }}
          >
            Call now
          </a>
          <Link
            href={`/examples/${slug}/contact`}
            className="inline-flex items-center gap-2 rounded-md border-2 bg-white px-5 py-3 text-[14px] font-semibold"
            style={{ borderColor: theme.accent, color: theme.accent }}
          >
            Message us
          </Link>
        </div>
      </div>
    </DemoSubChrome>
  );
}
