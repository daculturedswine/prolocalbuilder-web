import type { Metadata } from "next";
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
  return demos.map((d) => ({ slug: d.slug }));
}
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) return {};
  const url = `/examples/${slug}/about`;
  const title = `About ${demo.businessName} (concept)`;
  const description = `Meet the team behind ${demo.businessName}, a concept ${demo.category.toLowerCase()} business in ${demo.city}, ${demo.state}.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default async function AboutPage({ params }: Props) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) notFound();
  const theme = themeForSlug(slug);

  return (
    <DemoSubChrome demo={demo} currentPath="about">
      <PageEyebrow theme={theme}>About {demo.founder.firstName.toLowerCase()}</PageEyebrow>
      <PageHeading theme={theme}>
        {demo.tier === "premium"
          ? `Boutique ${demo.category.toLowerCase()} in ${demo.city}.`
          : demo.tier === "professional"
          ? `${demo.businessName.replace(/ Co\.$/, "")} — family-owned since 2008.`
          : `Family-owned ${demo.category.toLowerCase()} since 2018.`}
      </PageHeading>
      <PageLede theme={theme}>
        {demo.tier === "starter"
          ? `One crew. Same faces. Doing this right since 2018, all across the ${demo.city} area.`
          : demo.tier === "professional"
          ? `${demo.founder.firstName} runs the shop. Master plumbers on every truck. No subcontractors, no franchises, no upsells.`
          : `${demo.founder.firstName.charAt(0)}. ${demo.founder.lastName} sees a limited number of patients each day so every visit gets the attention it deserves.`}
      </PageLede>
      <Prose paragraphs={demo.about} theme={theme} />

      <div
        className="mt-14 grid gap-6 rounded-lg border p-8 md:grid-cols-3"
        style={{ borderColor: theme.accent + "25", background: theme.accent + "08" }}
      >
        <div>
          <div className="text-[12px] uppercase font-semibold" style={{ color: theme.accent, letterSpacing: "0.18em" }}>
            Founder
          </div>
          <div className="mt-1 text-[18px] font-semibold" style={{ color: theme.ink }}>
            {demo.founder.firstName} {demo.founder.lastName}
          </div>
          <div className="text-[14px]" style={{ color: theme.inkSoft }}>
            {demo.founder.title}
          </div>
        </div>
        <div>
          <div className="text-[12px] uppercase font-semibold" style={{ color: theme.accent, letterSpacing: "0.18em" }}>
            Service area
          </div>
          <div className="mt-1 text-[15px]" style={{ color: theme.ink }}>
            {demo.fakeAddress}
          </div>
        </div>
        <div>
          <div className="text-[12px] uppercase font-semibold" style={{ color: theme.accent, letterSpacing: "0.18em" }}>
            Reach us
          </div>
          <a
            href={`tel:${demo.fakePhone}`}
            className="mt-1 block text-[15px] font-semibold"
            style={{ color: theme.ink }}
          >
            {demo.fakePhone}
          </a>
          <a
            href={`mailto:${demo.fakeEmail}`}
            className="block text-[14px]"
            style={{ color: theme.inkSoft }}
          >
            {demo.fakeEmail}
          </a>
        </div>
      </div>
    </DemoSubChrome>
  );
}
