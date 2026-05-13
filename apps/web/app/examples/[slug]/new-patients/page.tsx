import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { demos, getDemo } from "@/lib/demos";
import { DemoSubChrome } from "@/components/demos/_shared/DemoSubChrome";
import {
  PageEyebrow,
  PageHeading,
  PageLede,
  BulletList,
  themeForSlug,
} from "@/components/demos/_shared/SubPageBlocks";

export function generateStaticParams() {
  return demos
    .filter((d) => d.tier === "premium" && d.newPatients)
    .map((d) => ({ slug: d.slug }));
}
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) return {};
  return {
    title: `New patients · ${demo.businessName} (concept)`,
    description: `What to expect on your first visit, what to bring, and the insurance we accept.`,
    alternates: { canonical: `/examples/${slug}/new-patients` },
    robots: { index: true, follow: true },
  };
}

export default async function NewPatientsPage({ params }: Props) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo || !demo.newPatients) notFound();
  const theme = themeForSlug(slug);
  const np = demo.newPatients;

  return (
    <DemoSubChrome demo={demo} currentPath="new-patients">
      <PageEyebrow theme={theme}>New here?</PageEyebrow>
      <PageHeading theme={theme}>Your first visit, end to end.</PageHeading>
      <PageLede theme={theme}>{np.intro}</PageLede>

      <h2
        className="demo-display mt-14 text-[24px] font-semibold"
        style={{ color: theme.ink }}
      >
        What to bring
      </h2>
      <BulletList items={np.bring} theme={theme} />

      <h2
        className="demo-display mt-14 text-[24px] font-semibold"
        style={{ color: theme.ink }}
      >
        Forms
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {np.forms.map((f) => (
          <div
            key={f.name}
            className="rounded-lg border p-6"
            style={{ borderColor: theme.accent + "25" }}
          >
            <div
              className="text-[12px] uppercase font-semibold"
              style={{ color: theme.accent, letterSpacing: "0.16em" }}
            >
              Form
            </div>
            <h3
              className="demo-display mt-2 text-[18px] font-semibold"
              style={{ color: theme.ink }}
            >
              {f.name}
            </h3>
            <p
              className="mt-2 text-[14px] leading-[1.6]"
              style={{ color: theme.inkSoft }}
            >
              {f.description}
            </p>
          </div>
        ))}
      </div>

      <h2
        className="demo-display mt-14 text-[24px] font-semibold"
        style={{ color: theme.ink }}
      >
        Insurance we accept
      </h2>
      <ul className="mt-5 flex flex-wrap gap-2">
        {np.insurance.map((i) => (
          <li
            key={i}
            className="rounded-full border px-4 py-1.5 text-[13px]"
            style={{ borderColor: theme.accent + "30", color: theme.ink }}
          >
            {i}
          </li>
        ))}
      </ul>
      <p
        className="mt-4 text-[13px]"
        style={{ color: theme.inkSoft }}
      >
        Not seeing your insurance? Call us — odds are we can file as an out-of-network
        provider and still get most of your benefits applied.
      </p>

      <div
        className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-lg p-8"
        style={{ background: theme.accent + "10" }}
      >
        <div>
          <div
            className="text-[12px] uppercase font-semibold"
            style={{ color: theme.accent, letterSpacing: "0.18em" }}
          >
            Ready to book?
          </div>
          <div className="mt-1 text-[18px] font-semibold" style={{ color: theme.ink }}>
            New patient block: 75 minutes with Dr. Park
          </div>
        </div>
        <Link
          href={`/examples/${slug}/contact`}
          className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-[14px] font-semibold text-white"
          style={{ background: theme.accent }}
        >
          Schedule first visit
        </Link>
      </div>
    </DemoSubChrome>
  );
}
