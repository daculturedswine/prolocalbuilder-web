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
  // Gallery is a Professional-tier feature. Only Rivera in our demo set.
  return demos.filter((d) => d.tier === "professional").map((d) => ({ slug: d.slug }));
}
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) return {};
  return {
    title: `Gallery · ${demo.businessName} (concept)`,
    description: `Photos of real ${demo.category.toLowerCase()} jobs ${demo.businessName} has completed in the ${demo.fakeAddress}.`,
    alternates: { canonical: `/examples/${slug}/gallery` },
    robots: { index: true, follow: true },
  };
}

const RIVERA_JOBS = [
  {
    title: "40-gallon water heater swap",
    neighborhood: "Sunnyvale",
    scope: "Old unit failed Sunday morning. Quote sent at 9am, install complete by 1pm same day. Code-compliant, hauled away.",
    price: "$1,495",
  },
  {
    title: "Sewer-line camera + spot repair",
    neighborhood: "San Jose",
    scope: "Three plumbers had misdiagnosed a slow drain. Camera found a partial collapse 22 feet down the lateral. Spot-repaired the same week.",
    price: "$2,395",
  },
  {
    title: "Whole-house re-pipe (PEX)",
    neighborhood: "Fremont",
    scope: "1956 ranch with galvanized lines, brown water in the cold side. Re-piped in three days. Drywall patched, ready for paint.",
    price: "$8,400",
  },
  {
    title: "Tankless gas water heater install",
    neighborhood: "Mountain View",
    scope: "Upgraded from a 50-gallon tank. New gas line sized, vent through roof, recirculation pump added. Permits pulled.",
    price: "$4,295",
  },
  {
    title: "Burst pipe — emergency",
    neighborhood: "Cupertino",
    scope: "Frozen burst behind a kitchen wall, 11pm Saturday. Truck on-site in 22 minutes, water back on by 1am.",
    price: "$685",
  },
  {
    title: "Slab leak detection + repair",
    neighborhood: "Los Altos",
    scope: "Water bill spike pointed to slab leak. Acoustic + thermal detection, reroute through attic, no slab demo needed.",
    price: "$3,200",
  },
];

export default async function GalleryPage({ params }: Props) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) notFound();
  const theme = themeForSlug(slug);

  return (
    <DemoSubChrome demo={demo} currentPath="gallery">
      <PageEyebrow theme={theme}>Recent jobs</PageEyebrow>
      <PageHeading theme={theme}>Real photos. Real prices. Real customers.</PageHeading>
      <PageLede theme={theme}>
        Every photo here is from a job we&apos;ve actually completed in the South Bay. No
        stock images, no rendered concepts. Prices are what we charged that customer.
      </PageLede>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {RIVERA_JOBS.map((job, i) => (
          <article
            key={i}
            className="overflow-hidden rounded-lg border bg-white"
            style={{ borderColor: theme.accent + "20" }}
          >
            <div
              aria-hidden="true"
              className="h-[200px] w-full"
              style={{
                background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accent}80 60%, ${theme.accent}40 100%)`,
              }}
            />
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3
                    className="demo-display text-[18px] font-semibold"
                    style={{ color: theme.ink }}
                  >
                    {job.title}
                  </h3>
                  <div
                    className="mt-1 text-[12px] uppercase font-semibold"
                    style={{ color: theme.inkSoft, letterSpacing: "0.14em" }}
                  >
                    {job.neighborhood}
                  </div>
                </div>
                <span
                  className="rounded-md px-2 py-1 text-[12px] font-mono font-bold"
                  style={{ background: theme.accent + "12", color: theme.accent }}
                >
                  {job.price}
                </span>
              </div>
              <p
                className="mt-3 text-[14px] leading-[1.55]"
                style={{ color: theme.inkSoft }}
              >
                {job.scope}
              </p>
            </div>
          </article>
        ))}
      </div>
    </DemoSubChrome>
  );
}
