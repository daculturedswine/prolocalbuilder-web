import Link from "next/link";
import { industries } from "@/lib/seo";
import { tiers, formatPrice } from "@/lib/site";
import type { AudienceConfig } from "@/lib/audiences";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { MobilePhoneBar } from "./MobilePhoneBar";

export function AudienceHubPage({ config }: { config: AudienceConfig }) {
  const audienceIndustries = industries.filter(
    (i) => i.audience === config.slug
  );

  return (
    <>
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        {/* Hero */}
        <section className="bg-white pt-12 pb-12 sm:pt-16 md:pt-20">
          <div className="container-page">
            <span className="badge-orange">{config.badge}</span>
            <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900 max-w-[860px]">
              {config.h1Lead}{" "}
              <span className="text-orange-500">{config.h1Accent}</span>
            </h1>
            <p className="mt-5 text-body-lg text-ink-700 max-w-[680px]">
              {config.intro}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/#quote" className="btn btn-primary btn-lg">
                Get a free quote
              </Link>
              <Link href="/#pricing" className="btn btn-secondary btn-lg">
                See pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Why convert */}
        <section className="section bg-ink-50">
          <div className="container-page">
            <span className="label">What we include</span>
            <h2 className="text-h2-sm md:text-h2 text-ink-900 max-w-[720px]">
              {config.whyHeading}
            </h2>
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {config.whyPoints.map((p) => (
                <li
                  key={p.title}
                  className="rounded-lg border border-ink-200 bg-white p-6 shadow-card"
                >
                  <h3 className="text-h4 text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-body-sm text-ink-700">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Industries we serve in this audience */}
        <section className="section bg-white">
          <div className="container-page">
            <span className="label">Niches we cover</span>
            <h2 className="text-h2-sm md:text-h2 text-ink-900 max-w-[720px]">
              {audienceIndustries.length} niches we build for in this category
            </h2>
            <p className="mt-3 text-body-lg text-ink-700 max-w-[640px]">
              Pick your specific niche for industry-specific features, pain
              points, and pricing.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {audienceIndustries.map((ind) => {
                const tier = tiers.find((t) => t.id === ind.tier);
                return (
                  <li key={ind.slug}>
                    <Link
                      href={`/websites-for/${ind.slug}`}
                      aria-label={`What we build for ${ind.plural} — pricing and features`}
                      className="card block h-full"
                    >
                      <span className="text-label uppercase text-orange-500">
                        From ${formatPrice(tier?.flatPrice ?? 750)}
                      </span>
                      <h3 className="mt-2 text-h4 text-ink-900">
                        Websites for {ind.plural}
                      </h3>
                      <p className="mt-3 text-body-sm text-ink-700">
                        {ind.features.slice(0, 2).join(". ")}.
                      </p>
                      <span
                        aria-hidden="true"
                        className="mt-4 inline-block text-body-sm font-semibold text-orange-500"
                      >
                        What we build for {ind.plural} →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-ink-50">
          <div className="container-narrow text-center">
            <h2 className="text-h2-sm md:text-h2 text-ink-900">
              Don't see your exact niche?
            </h2>
            <p className="mt-3 text-body-lg text-ink-700">
              We build for any local service business. Send us what you do
              and we'll quote it.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/#quote" className="btn btn-primary btn-lg">
                Get a free quote
              </Link>
              <Link href="/#pricing" className="btn btn-secondary btn-lg">
                See pricing
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
