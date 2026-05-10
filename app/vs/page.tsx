import type { Metadata } from "next";
import Link from "next/link";
import { competitors, seo, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "ProLocalBuilder vs other website builders · Honest comparisons",
  description:
    "Wix, Squarespace, GoDaddy, WordPress. The honest pros and cons of each, vs flat-fee custom websites from ProLocalBuilder.",
  alternates: { canonical: "/vs" },
};

export default function VsHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: seo.siteUrl },
    { name: "Comparisons", url: `${seo.siteUrl}/vs` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        <section className="bg-white pt-12 pb-8 sm:pt-16 md:pt-20">
          <div className="container-page">
            <span className="badge-orange">Comparisons</span>
            <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              {site.name} vs <br />
              <span className="text-orange-500">the other guys.</span>
            </h1>
            <p className="mt-5 text-body-lg text-ink-700 max-w-[640px]">
              We're not going to pretend Wix and Squarespace are bad. They're
              fine for some businesses. Here's where they win and where we win.
            </p>
          </div>
        </section>

        <section className="section bg-ink-50">
          <div className="container-page">
            <ul className="grid gap-6 md:grid-cols-2">
              {competitors.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/vs/${c.slug}`}
                    aria-label={`Read full ${site.name} vs ${c.name} comparison`}
                    className="card block h-full"
                  >
                    <h2 className="text-h3 text-ink-900">
                      {site.name} vs {c.name}
                    </h2>
                    <div className="mt-3 flex items-center gap-3 text-body-sm">
                      <span className="font-mono text-ink-700 line-through">
                        {c.annualCost}
                      </span>
                      <span aria-hidden="true" className="text-ink-400">→</span>
                      <span className="font-mono font-semibold text-orange-500">
                        {c.ourAnnualCost}
                      </span>
                    </div>
                    <p className="mt-3 text-body-sm text-ink-700">
                      {c.cons[0]}.
                    </p>
                    <span aria-hidden="true" className="mt-5 inline-block text-body-sm font-semibold text-orange-500">
                      Read full comparison →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <MobilePhoneBar />
    </>
  );
}
