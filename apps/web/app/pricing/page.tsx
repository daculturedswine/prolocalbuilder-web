import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { seo, breadcrumbSchema } from "@/lib/seo";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { PricingCompare } from "@/components/PricingCompare";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";

const pageTitle =
  "Website Design Packages from $750 — Affordable Small Business Pricing";
const pageDescription =
  "Affordable website design packages for small businesses. Starter $750, Professional $1,500, Premium $2,500. One-time flat fee, no monthly payments, done in a week. Compare tiers and get a free quote.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    url: `${seo.siteUrl}/pricing`,
    title: pageTitle,
    description: pageDescription,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

export default function PricingPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: seo.siteUrl },
    { name: "Pricing", url: `${seo.siteUrl}/pricing` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <Nav />
      <main id="main" className="overflow-x-clip pb-16 sm:pb-0">
        {/* ── Hero ── */}
        <section className="bg-white pt-12 pb-8 sm:pt-16 md:pt-20">
          <div className="container-page">
            <span className="badge-orange">Pricing</span>
            <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              Website Design Packages&nbsp;&mdash;
              <br />
              <span className="text-orange-500">
                Flat Fee, No Monthly Payments
              </span>
            </h1>
            <p className="mt-5 max-w-[680px] text-body-lg text-ink-700">
              Three tiers from{" "}
              <strong className="text-ink-900">$750 to $2,500</strong>.
              Every package is a{" "}
              <strong className="text-ink-900">one-time payment</strong>
              &nbsp;&mdash; done in a week, no monthly fees, no contracts.
              You pay once and the site is yours forever.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="#pricing" className="btn btn-primary btn-lg">
                See packages
              </Link>
              <Link href="#quote" className="btn btn-secondary btn-lg">
                Get a free quote
              </Link>
            </div>
          </div>
        </section>

        {/* ── Pricing cards ── */}
        <Pricing />

        {/* ── Why flat fee? ── */}
        <section className="section bg-white">
          <div className="container-page">
            <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-16">
              <span className="label">Why flat fee?</span>
              <h2 className="text-h2-sm md:text-h2 text-ink-900">
                One payment. No subscription. Yours forever.
              </h2>
              <p className="mt-3 text-body-lg text-ink-700">
                Most website companies charge $150&ndash;$300/month forever.
                After two years you&rsquo;ve paid $3,600&ndash;$7,200 and
                you still don&rsquo;t own the site. We do it differently.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Reveal delay={0}>
                <div className="card h-full">
                  <div className="text-label uppercase text-orange-500">
                    One-time payment
                  </div>
                  <h3 className="mt-2 text-h3 text-ink-900">
                    Pay once, own it
                  </h3>
                  <p className="mt-3 text-body-sm text-ink-700">
                    Your website design is a one-time purchase&nbsp;&mdash;
                    $750, $1,500, or $2,500 depending on the tier. No
                    recurring charges. No surprise invoices six months from
                    now. The code, the design, and the domain are yours.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="card h-full">
                  <div className="text-label uppercase text-orange-500">
                    No monthly fees
                  </div>
                  <h3 className="mt-2 text-h3 text-ink-900">
                    Zero lock-in
                  </h3>
                  <p className="mt-3 text-body-sm text-ink-700">
                    After the first year of included hosting, you can
                    self-host for free on Cloudflare Pages or stay with us
                    for $25/mo (optional). Either way, you keep the site.
                    No monthly fee to simply exist on the internet.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div className="card h-full">
                  <div className="text-label uppercase text-orange-500">
                    Done in a week
                  </div>
                  <h3 className="mt-2 text-h3 text-ink-900">
                    Fast turnaround
                  </h3>
                  <p className="mt-3 text-body-sm text-ink-700">
                    Starter sites ship in 5&ndash;7 days. Professional in
                    7&ndash;10. Premium in 10&ndash;14. You get a preview
                    link, two rounds of revisions, and a live launch on your
                    domain&nbsp;&mdash; all inside that timeline.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="mt-12 rounded-lg border border-ink-200 bg-ink-50 p-8 md:p-10">
                <h3 className="text-h3 text-ink-900">
                  The math on monthly vs. flat fee
                </h3>
                <p className="mt-3 text-body text-ink-700">
                  A typical website company charges{" "}
                  <strong className="text-ink-900">$200/month</strong>. Over
                  three years that&rsquo;s{" "}
                  <strong className="text-ink-900">$7,200</strong>&nbsp;&mdash;
                  and if you stop paying, the site goes dark. Our Professional
                  tier is{" "}
                  <strong className="text-ink-900">$1,500 once</strong>. You
                  save $5,700 and you own the result. That&rsquo;s the entire
                  argument for flat-fee website design.
                </p>
                <div className="mt-6">
                  <Link href="#quote" className="btn btn-primary">
                    Get a flat-fee quote
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Compare tiers ── */}
        <PricingCompare />

        {/* ── FAQ ── */}
        <FAQ />

        {/* ── CTA / Quote form ── */}
        <CTA />
      </main>
      <Footer />
      <MobilePhoneBar />
    </>
  );
}
