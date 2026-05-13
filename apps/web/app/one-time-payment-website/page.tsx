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
  title: "One-Time Payment Website Design · From $750 · Done in a Week",
  description:
    "One-time payment website design for local businesses. From $750. Built in 5-14 days. No monthly fees. No contracts. You own everything.",
  alternates: { canonical: "/one-time-payment-website" },
  openGraph: {
    title: "One-Time Payment Website Design · From $750 · Done in a Week",
    description:
      "One-time payment website design for local businesses. From $750. Built in 5-14 days. No monthly fees. No contracts. You own everything.",
    url: "/one-time-payment-website",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "One-Time Payment Website Design · From $750 · Done in a Week",
    description:
      "One-time payment website design for local businesses. From $750. Built in 5-14 days. No monthly fees. No contracts. You own everything.",
  },
};

const starter = tiers[0];
const professional = tiers[1];
const premium = tiers[2];

export default function OneTimePaymentWebsitePage() {
  const url = `${seo.siteUrl}/one-time-payment-website`;

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: seo.siteUrl },
    { name: "One-Time Payment Website", url },
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
              <span aria-current="page" className="text-ink-900 font-semibold">One-Time Payment Website</span>
            </nav>

            <span className="badge-orange">One-time payment</span>
            <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              One-Time Payment Website Design{" "}
              <span className="text-orange-500">&mdash; ${formatPrice(starter.flatPrice)} to ${formatPrice(premium.flatPrice)}</span>
            </h1>
            <p className="mt-5 text-body-lg text-ink-700 max-w-[640px]">
              Pay once. Own your website. No monthly fees, no contracts, no
              surprises. Built for local businesses by people who understand
              local businesses. Done in as little as 5 days.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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

        {/* ── What $750 gets you ── */}
        <section className="section bg-ink-50">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-[720px] text-center">
                <span className="label">Starter</span>
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  What ${formatPrice(starter.flatPrice)} gets you
                </h2>
                <p className="mt-3 text-body-lg text-ink-700">
                  Best for {starter.bestFor}. One payment, done in {starter.features[starter.features.length - 1].toLowerCase()}.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 mx-auto max-w-[640px] rounded-lg border border-ink-200 bg-white p-7 shadow-card">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-3xl font-bold text-navy-800">${formatPrice(starter.flatPrice)}</span>
                  <span className="text-body-sm text-ink-700">{starter.blurb}</span>
                </div>
                <ul className="mt-6 grid gap-3">
                  {starter.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-body-sm text-ink-700">
                      <span className="text-success font-bold flex-shrink-0 mt-0.5" aria-hidden="true">&check;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── What $1,500 gets you ── */}
        <section className="section bg-white">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-[720px] text-center">
                <span className="label">Professional &mdash; most popular</span>
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  What ${formatPrice(professional.flatPrice)} gets you
                </h2>
                <p className="mt-3 text-body-lg text-ink-700">
                  Best for {professional.bestFor}. One payment, done in {professional.features[professional.features.length - 1].toLowerCase()}.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 mx-auto max-w-[640px] rounded-lg border-2 border-orange-500 bg-white p-7 shadow-card">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-3xl font-bold text-navy-800">${formatPrice(professional.flatPrice)}</span>
                  <span className="text-body-sm text-ink-700">{professional.blurb}</span>
                </div>
                <ul className="mt-6 grid gap-3">
                  {professional.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-body-sm text-ink-700">
                      <span className="text-success font-bold flex-shrink-0 mt-0.5" aria-hidden="true">&check;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── What $2,500 gets you ── */}
        <section className="section bg-ink-50">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-[720px] text-center">
                <span className="label">Premium</span>
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  What ${formatPrice(premium.flatPrice)} gets you
                </h2>
                <p className="mt-3 text-body-lg text-ink-700">
                  Best for {premium.bestFor}. One payment, done in {premium.features[premium.features.length - 1].toLowerCase()}.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 mx-auto max-w-[640px] rounded-lg border border-ink-200 bg-white p-7 shadow-card">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-3xl font-bold text-navy-800">${formatPrice(premium.flatPrice)}</span>
                  <span className="text-body-sm text-ink-700">{premium.blurb}</span>
                </div>
                <ul className="mt-6 grid gap-3">
                  {premium.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-body-sm text-ink-700">
                      <span className="text-success font-bold flex-shrink-0 mt-0.5" aria-hidden="true">&check;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Done in a week ── */}
        <section className="section bg-white">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-[720px] text-center">
                <span className="label">Speed</span>
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  Done in a week. Not a month.
                </h2>
                <p className="mt-3 text-body-lg text-ink-700">
                  Most web design agencies quote 6&ndash;12 weeks and charge $5,000+.
                  We build faster because we focus on what local businesses
                  actually need: a fast site, a phone number people can tap, and
                  pages that rank on Google.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-[900px] mx-auto">
                <div className="rounded-lg border border-ink-200 bg-ink-50 p-6 text-center">
                  <div className="font-mono text-2xl font-bold text-navy-800">5&ndash;7 days</div>
                  <p className="mt-2 text-body-sm font-semibold text-ink-900">Starter</p>
                  <p className="mt-1 text-body-sm text-ink-700">5-page site</p>
                </div>
                <div className="rounded-lg border-2 border-orange-500 bg-white p-6 text-center">
                  <div className="font-mono text-2xl font-bold text-navy-800">7&ndash;10 days</div>
                  <p className="mt-2 text-body-sm font-semibold text-ink-900">Professional</p>
                  <p className="mt-1 text-body-sm text-ink-700">10-page site + SEO</p>
                </div>
                <div className="rounded-lg border border-ink-200 bg-ink-50 p-6 text-center">
                  <div className="font-mono text-2xl font-bold text-navy-800">10&ndash;14 days</div>
                  <p className="mt-2 text-body-sm font-semibold text-ink-900">Premium</p>
                  <p className="mt-1 text-body-sm text-ink-700">15+ pages + advanced SEO</p>
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
            <span className="label">Let&apos;s go</span>
            <h2 className="text-h2-sm md:text-h2 text-white">
              One payment. One website. Yours forever.
            </h2>
            <p className="mt-3 text-body-lg text-white/85 max-w-[640px] mx-auto">
              Tell us about your business and we&apos;ll reply the same day with a
              fixed quote. 50% to start, 50% at launch. No monthly bills after
              that. No fine print.
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
