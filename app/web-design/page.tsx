import type { Metadata } from "next";
import Link from "next/link";
import { cities, seo, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Web design near you · Cities we serve",
  description:
    "We build affordable websites for local businesses across Wisconsin, the San Francisco Bay Area, and Las Vegas. Find your city below.",
  alternates: { canonical: "/web-design" },
};

export default function WebDesignHubPage() {
  const wi = cities.filter((c) => c.metro === "appleton");
  const ca = cities.filter((c) => c.metro === "san-jose");
  const nv = cities.filter((c) => c.metro === "vegas");

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: seo.siteUrl },
    { name: "Web design", url: `${seo.siteUrl}/web-design` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        <section className="bg-white pt-12 pb-8 sm:pt-16 md:pt-20">
          <div className="container-page">
            <span className="badge-orange">Service area</span>
            <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              Web design in Wisconsin,
              <br />
              <span className="text-orange-500">the Bay Area, and Las Vegas.</span>
            </h1>
            <p className="mt-5 text-body-lg text-ink-700 max-w-[640px]">
              Pick your city below for pricing, included features, and a free
              quote. Same flat fee in every city we serve.
            </p>
          </div>
        </section>

        <section className="section bg-ink-50">
          <div className="container-page grid gap-12 md:grid-cols-3">
            <div>
              <span className="label">Wisconsin</span>
              <h2 className="text-h2-sm md:text-h2 text-ink-900">Fox Valley + Northeast WI</h2>
              <p className="mt-2 text-body-sm text-ink-700">
                Based in Appleton, serving the {wi.length}-city Fox Valley
                region.
              </p>
              <ul className="mt-6 grid gap-2">
                {wi.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/web-design/${c.slug}`}
                      className="flex items-center justify-between rounded-md border border-ink-200 bg-white px-4 py-3 text-body-sm text-ink-900 transition-colors duration-200 hover:border-orange-500 hover:text-orange-500"
                    >
                      <span>
                        {c.name}, {c.state}
                      </span>
                      <span aria-hidden="true" className="text-ink-400">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="label">California</span>
              <h2 className="text-h2-sm md:text-h2 text-ink-900">San Jose + Bay Area</h2>
              <p className="mt-2 text-body-sm text-ink-700">
                Serving the {ca.length}-city San Francisco Bay Area, remote
                build with same-week kickoff.
              </p>
              <ul className="mt-6 grid gap-2">
                {ca.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/web-design/${c.slug}`}
                      className="flex items-center justify-between rounded-md border border-ink-200 bg-white px-4 py-3 text-body-sm text-ink-900 transition-colors duration-200 hover:border-orange-500 hover:text-orange-500"
                    >
                      <span>
                        {c.name}, {c.state}
                      </span>
                      <span aria-hidden="true" className="text-ink-400">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="label">Nevada</span>
              <h2 className="text-h2-sm md:text-h2 text-ink-900">Las Vegas + Southern NV</h2>
              <p className="mt-2 text-body-sm text-ink-700">
                Serving the {nv.length}-city Las Vegas valley with local builds
                and same-week kickoff.
              </p>
              <ul className="mt-6 grid gap-2">
                {nv.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/web-design/${c.slug}`}
                      className="flex items-center justify-between rounded-md border border-ink-200 bg-white px-4 py-3 text-body-sm text-ink-900 transition-colors duration-200 hover:border-orange-500 hover:text-orange-500"
                    >
                      <span>
                        {c.name}, {c.state}
                      </span>
                      <span aria-hidden="true" className="text-ink-400">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-narrow text-center">
            <h2 className="text-h2-sm md:text-h2 text-ink-900">Don't see your city?</h2>
            <p className="mt-3 text-body-lg text-ink-700">
              We work remotely with businesses outside these areas too. Reach
              out. If we can help, we will.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/#quote"
                className="btn btn-primary btn-lg"
              >
                Get a free quote
              </a>
              <a
                href={site.contact.phoneHref}
                className="btn btn-secondary btn-lg"
                aria-label={`Call ${site.contact.phone}`}
              >
                <span aria-hidden="true">📞</span> Call · {site.contact.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobilePhoneBar />
    </>
  );
}
