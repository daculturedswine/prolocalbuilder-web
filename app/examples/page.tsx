import type { Metadata } from "next";
import Link from "next/link";
import { demos } from "@/lib/demos";
import { tiers, formatPrice } from "@/lib/site";
import { seo, breadcrumbSchema } from "@/lib/seo";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Examples · See what we build",
  description:
    "Three sample sites showing what each ProLocalBuilder tier looks like. One landscaper, one plumber, one dental practice. Real working concepts.",
  alternates: { canonical: "/examples" },
};

export default function ExamplesHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: seo.siteUrl },
    { name: "Examples", url: `${seo.siteUrl}/examples` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        <section className="bg-white pt-12 pb-8 sm:pt-16 md:pt-20">
          <div className="container-page">
            <span className="badge-orange">Examples</span>
            <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              Three concepts.
              <br />
              <span className="text-orange-500">One per tier.</span>
            </h1>
            <p className="mt-5 text-body-lg text-ink-700 max-w-[680px]">
              Three concept sites — one per pricing tier. They&apos;re not niche
              examples (we don&apos;t have a demo for every industry), they&apos;re
              <strong> tier examples</strong>: pick the tier that matches what
              you need, and we customize the design for your specific business
              when we build it.
            </p>
          </div>
        </section>

        <section className="section bg-ink-50">
          <div className="container-page">
            <ul className="grid gap-6 md:grid-cols-3">
              {demos.map((demo) => {
                const tierMeta = tiers.find(
                  (t) =>
                    (demo.tier === 1 && t.id === "premium") ||
                    (demo.tier === 2 && t.id === "professional") ||
                    (demo.tier === 3 && t.id === "starter")
                );
                return (
                  <li key={demo.slug}>
                    <Link
                      href={`/examples/${demo.slug}`}
                      aria-label={`View ${demo.businessName} concept site, Tier ${demo.tier}`}
                      className="card block h-full"
                    >
                      <div className="text-label uppercase text-orange-500">
                        Tier {demo.tier} · ${formatPrice(demo.flatPrice)}
                      </div>
                      <h2 className="mt-2 text-h3 text-ink-900">
                        {demo.businessName}
                      </h2>
                      <p className="mt-2 text-body-sm text-ink-700">
                        {demo.city}, {demo.state} · {demo.category}
                      </p>
                      <p className="mt-4 text-body-sm text-ink-700">
                        {demo.hero.subhead}
                      </p>
                      <span
                        aria-hidden="true"
                        className="mt-5 inline-block text-body-sm font-semibold text-orange-500"
                      >
                        View concept site →
                      </span>
                      {tierMeta && (
                        <p className="mt-4 border-t border-ink-100 pt-3 text-body-sm text-ink-700">
                          Best for: {tierMeta.bestFor}
                        </p>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-narrow text-center">
            <h2 className="text-h2 text-ink-900">
              No demo for your niche? That&apos;s fine.
            </h2>
            <p className="mt-3 text-body-lg text-ink-700">
              These three concepts show what each tier delivers. Your site
              won&apos;t look exactly like one of them — we customize the design,
              copy, and structure for your business and industry. Real client
              sites replace these demos as we launch them.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/#pricing" className="btn btn-primary btn-lg">
                See pricing →
              </Link>
              <Link href="/#quote" className="btn btn-secondary btn-lg">
                Get a free quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobilePhoneBar />
    </>
  );
}
