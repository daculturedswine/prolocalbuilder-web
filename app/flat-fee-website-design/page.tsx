import type { Metadata } from "next";
import Link from "next/link";
import { seo, breadcrumbSchema } from "@/lib/seo";
import { site, tiers, formatPrice } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";
import { Pricing } from "@/components/Pricing";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Flat-Fee Website Design · $750 One-Time · No Monthly Costs",
  description:
    "Flat-fee website design for local businesses. $750 to $2,500 one-time. No subscriptions. No monthly payments. Done in a week. You own the code.",
  alternates: { canonical: "/flat-fee-website-design" },
  openGraph: {
    title: "Flat-Fee Website Design · $750 One-Time · No Monthly Costs",
    description:
      "Flat-fee website design for local businesses. $750 to $2,500 one-time. No subscriptions. No monthly payments. Done in a week. You own the code.",
    url: "/flat-fee-website-design",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flat-Fee Website Design · $750 One-Time · No Monthly Costs",
    description:
      "Flat-fee website design for local businesses. $750 to $2,500 one-time. No subscriptions. No monthly payments. Done in a week. You own the code.",
  },
};

const steps = [
  {
    num: "01",
    title: "Pick your tier",
    body: "Starter ($750), Professional ($1,500), or Premium ($2,500). Each tier has a fixed scope and a fixed price. No hourly rates.",
  },
  {
    num: "02",
    title: "We build it",
    body: "Your site is designed, coded, and live in 5–14 days depending on the tier. You get a preview link and up to 2 rounds of revisions.",
  },
  {
    num: "03",
    title: "You own it",
    body: "The code, the domain, the design — all yours. No lock-in. No monthly invoices. Optional $25/mo hosting after year 1 if you want us to keep it running.",
  },
];

export default function FlatFeeWebsiteDesignPage() {
  const url = `${seo.siteUrl}/flat-fee-website-design`;

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: seo.siteUrl },
    { name: "Flat-Fee Website Design", url },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        {/* ── Hero ── */}
        <section className="bg-white pt-12 pb-12 sm:pt-16 md:pt-20">
          <div className="container-page">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-700">
              <Link href="/" className="transition-colors duration-200 hover:text-ink-900">Home</Link>
              <span aria-hidden="true" className="mx-2 text-ink-300">/</span>
              <span aria-current="page" className="text-ink-900 font-semibold">Flat-Fee Website Design</span>
            </nav>

            <span className="badge-orange">Flat fee</span>
            <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              Flat-Fee Website Design{" "}
              <span className="text-orange-500">&mdash; Pay Once, Own It Forever</span>
            </h1>
            <p className="mt-5 text-body-lg text-ink-700 max-w-[640px]">
              No subscriptions. No monthly payments. No contracts. We build your
              local business website for a one-time flat fee of ${formatPrice(tiers[0].flatPrice)} to $
              {formatPrice(tiers[2].flatPrice)}, hand you the keys, and you own everything.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/#quote" className="btn btn-primary btn-lg">
                Get a free quote
              </Link>
              <Link href="/#pricing" className="btn btn-secondary btn-lg">
                See all tiers
              </Link>
            </div>
          </div>
        </section>

        {/* ── How flat fee works ── */}
        <section className="section bg-ink-50">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-[720px] text-center">
                <span className="label">How it works</span>
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  Three steps. No surprises.
                </h2>
                <p className="mt-3 text-body-lg text-ink-700">
                  Flat-fee means what it says. The price you see is the price you pay.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.num} delay={i * 100}>
                  <div className="rounded-lg border border-ink-200 bg-white p-7 shadow-card">
                    <span className="font-mono text-3xl font-bold text-orange-500">{s.num}</span>
                    <h3 className="mt-3 text-lg font-bold text-ink-900">{s.title}</h3>
                    <p className="mt-2 text-body-sm text-ink-700">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── What you get vs what you pay ── */}
        <section className="section bg-white">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-[720px] text-center">
                <span className="label">The math</span>
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  What you get vs what you pay
                </h2>
                <p className="mt-3 text-body-lg text-ink-700">
                  Subscription website builders charge $20–$50/month. Over 5 years
                  that adds up. Our flat fee doesn&apos;t.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-[900px] mx-auto">
                <div className="rounded-lg border border-ink-200 bg-ink-50 p-7">
                  <span className="text-label uppercase text-ink-700">Subscription model</span>
                  <div className="mt-3 font-mono text-3xl font-bold text-ink-900">$1,200–$3,000</div>
                  <p className="mt-1 text-body-sm text-ink-700">over 5 years ($20–$50/mo)</p>
                  <ul className="mt-5 flex flex-col gap-2 text-body-sm text-ink-700">
                    <li className="flex items-start gap-2">
                      <span className="text-error font-bold flex-shrink-0" aria-hidden="true">&times;</span>
                      You never own the site
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-error font-bold flex-shrink-0" aria-hidden="true">&times;</span>
                      Stop paying, site disappears
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-error font-bold flex-shrink-0" aria-hidden="true">&times;</span>
                      Locked into their platform
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border-2 border-orange-500 bg-white p-7">
                  <span className="text-label uppercase text-orange-500">{site.name} flat fee</span>
                  <div className="mt-3 font-mono text-3xl font-bold text-navy-800">${formatPrice(tiers[0].flatPrice)} once</div>
                  <p className="mt-1 text-body-sm text-ink-700">one payment, done</p>
                  <ul className="mt-5 flex flex-col gap-2 text-body-sm text-ink-700">
                    <li className="flex items-start gap-2">
                      <span className="text-success font-bold flex-shrink-0" aria-hidden="true">&check;</span>
                      You own the code and design
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success font-bold flex-shrink-0" aria-hidden="true">&check;</span>
                      1 year hosting included free
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success font-bold flex-shrink-0" aria-hidden="true">&check;</span>
                      Take it to any host or developer
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Pricing tiers ── */}
        <Pricing />

        {/* ── CTA ── */}
        <section className="section bg-navy-800 text-white">
          <div className="container-narrow text-center">
            <span className="label">Ready?</span>
            <h2 className="text-h2-sm md:text-h2 text-white">
              Get your flat-fee website started today
            </h2>
            <p className="mt-3 text-body-lg text-white/85 max-w-[640px] mx-auto">
              Send us the basics about your business. We&apos;ll reply the same day
              with a fixed quote. No hourly rates. No hidden fees. Just a flat
              price and a finished website.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/#quote" className="btn btn-primary btn-lg">
                Get a free quote
              </Link>
              <a
                href={site.contact.phoneHref}
                className="btn btn-secondary btn-lg"
                aria-label={`Call ${site.contact.phone}`}
              >
                Call {site.contact.phone}
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
