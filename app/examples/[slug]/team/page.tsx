import type { Metadata } from "next";
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
    .filter((d) => d.tier === "premium" && (d.team?.length ?? 0) > 0)
    .map((d) => ({ slug: d.slug }));
}
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) return {};
  return {
    title: `Our team · ${demo.businessName} (concept)`,
    description: `Meet the dentists, hygienists, and front-desk staff at ${demo.businessName}.`,
    alternates: { canonical: `/examples/${slug}/team` },
    robots: { index: true, follow: true },
  };
}

export default async function TeamPage({ params }: Props) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo || !demo.team) notFound();
  const theme = themeForSlug(slug);

  return (
    <DemoSubChrome demo={demo} currentPath="team">
      <PageEyebrow theme={theme}>Our team</PageEyebrow>
      <PageHeading theme={theme}>The people you&apos;ll actually see.</PageHeading>
      <PageLede theme={theme}>
        Two dentists, two hygienists, two front-desk humans. Six people total. You&apos;ll
        know all of them by name within a couple of visits.
      </PageLede>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {demo.team.map((m) => (
          <article
            key={m.name}
            className="rounded-lg border bg-white p-7"
            style={{ borderColor: theme.accent + "25" }}
          >
            <div className="flex items-start gap-5">
              <div
                aria-hidden="true"
                className="h-16 w-16 flex-shrink-0 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accent}80 100%)`,
                }}
              />
              <div>
                <h2
                  className="demo-display text-[20px] font-semibold"
                  style={{ color: theme.ink }}
                >
                  {m.name}
                </h2>
                <div
                  className="text-[12px] uppercase font-semibold"
                  style={{ color: theme.accent, letterSpacing: "0.16em" }}
                >
                  {m.role}
                </div>
              </div>
            </div>
            <p
              className="mt-4 text-[14px] leading-[1.65]"
              style={{ color: theme.inkSoft }}
            >
              {m.bio}
            </p>
          </article>
        ))}
      </div>
    </DemoSubChrome>
  );
}
