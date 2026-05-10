import type { Metadata } from "next";
import Link from "next/link";
import { industries, seo, breadcrumbSchema } from "@/lib/seo";
import { tiers, formatPrice } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Websites by industry · HVAC, dentists, lawyers, contractors, more",
  description:
    "We build websites tailored to your industry. Pick yours below for industry-specific features, pricing, and quote.",
  alternates: { canonical: "/websites-for" },
};

export default function IndustryHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: seo.siteUrl },
    { name: "Websites by industry", url: `${seo.siteUrl}/websites-for` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        <section className="bg-white pt-12 pb-8 sm:pt-16 md:pt-20">
          <div className="container-page">
            <span className="badge-orange">By industry</span>
            <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              Websites built for <br />
              <span className="text-orange-500">your industry.</span>
            </h1>
            <p className="mt-5 text-body-lg text-ink-700 max-w-[640px]">
              Every industry has its own quirks. We build websites that match
              the way your customers actually find and book you.
            </p>
          </div>
        </section>

        <section className="section bg-ink-50">
          <div className="container-page">
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((i) => {
                const tier = tiers.find((t) => t.id === i.tier);
                return (
                  <li key={i.slug}>
                    <Link
                      href={`/websites-for/${i.slug}`}
                      aria-label={`What we build for ${i.plural} — pricing and features, from $${formatPrice(tier?.flatPrice ?? 750)}`}
                      className="card block h-full"
                    >
                      <span className="text-label uppercase text-orange-500">
                        From ${formatPrice(tier?.flatPrice ?? 750)}
                      </span>
                      <h2 className="mt-2 text-h3 text-ink-900">
                        Websites for {i.plural}
                      </h2>
                      <p className="mt-3 text-body-sm text-ink-700">
                        {i.features.slice(0, 2).join(". ")}.
                      </p>
                      <span aria-hidden="true" className="mt-5 inline-block text-body-sm font-semibold text-orange-500">
                        What we build for {i.plural} →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <MobilePhoneBar />
    </>
  );
}
