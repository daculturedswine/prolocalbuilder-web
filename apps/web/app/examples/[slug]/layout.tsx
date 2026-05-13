import Link from "next/link";
import { notFound } from "next/navigation";
import { getDemo } from "@/lib/demos";
import { formatPrice, tiers } from "@/lib/site";

/**
 * Wraps every page under /examples/[slug] (home and all sub-pages) with the
 * "concept design" disclaimer banner at the top and the back-to-PLB CTA at
 * the bottom. Keeps brand honesty visible no matter which page the user
 * lands on.
 */
type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export default async function ExampleSlugLayout({ children, params }: Props) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) notFound();

  const tierName = tiers.find((t) => t.id === demo.tier)?.name ?? demo.tier;

  return (
    <>
      <div
        role="region"
        aria-label="Concept design notice"
        className="bg-orange-100 border-b border-orange-500/40 text-ink-900"
      >
        <div className="container-page flex flex-wrap items-center justify-between gap-3 py-3 text-body-sm">
          <span>
            <strong className="text-orange-700">
              <span aria-hidden="true">ⓘ </span>
              {tierName} concept (${formatPrice(demo.flatPrice)}).
            </strong>{" "}
            <span className="hidden sm:inline">
              {demo.businessName} is a fictional business. This shows what a{" "}
              <strong>{tierName}</strong> ProLocalBuilder build looks like — we
              don&apos;t have a demo for every niche, but we customize the design
              for yours when we build it.
            </span>
            <span className="sm:hidden">
              {tierName} concept · Customized per niche on real builds
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

      <main id="main">{children}</main>

      <section className="bg-orange-100/50 border-t border-orange-500/40">
        <div className="container-narrow py-16 text-center">
          <span className="badge-orange">Built by ProLocalBuilder</span>
          <h2 className="text-h2-sm md:text-h2 text-ink-900">
            Want a {tierName} site for your business?
          </h2>
          <p className="mt-3 text-body-lg text-ink-700">
            {demo.businessName} is a concept showing what a{" "}
            <span className="font-mono font-semibold">
              ${formatPrice(demo.flatPrice)} flat
            </span>{" "}
            {tierName} build looks like. Yours won&apos;t look exactly like this —
            we customize the design and copy for your specific niche. Built in
            7 to 14 days.
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
