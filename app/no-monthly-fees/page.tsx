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
  title: "Website Design With No Monthly Fees · Own Your Site for $750",
  description:
    "Tired of paying $30-$50/month for your website? We build local business websites for a one-time flat fee. $750 to $2,500. No subscriptions ever.",
  alternates: { canonical: "/no-monthly-fees" },
  openGraph: {
    title: "Website Design With No Monthly Fees · Own Your Site for $750",
    description:
      "Tired of paying $30-$50/month for your website? We build local business websites for a one-time flat fee. $750 to $2,500. No subscriptions ever.",
    url: "/no-monthly-fees",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design With No Monthly Fees · Own Your Site for $750",
    description:
      "Tired of paying $30-$50/month for your website? We build local business websites for a one-time flat fee. $750 to $2,500. No subscriptions ever.",
  },
};

const subscriptionMath = [
  { platform: "Wix", monthly: "$17–$47/mo", fiveYear: "$1,020–$2,820" },
  { platform: "Squarespace", monthly: "$16–$54/mo", fiveYear: "$960–$3,240" },
  { platform: "GoDaddy", monthly: "$10–$30/mo", fiveYear: "$600–$1,800" },
  { platform: "WordPress + hosting", monthly: "$25–$125/mo", fiveYear: "$1,500–$7,500" },
];

const pageFaqs = [
  {
    q: "Do I really own the site after paying?",
    a: "Yes. The code, the design, and the domain are yours. You can take it to another developer, host it yourself, or change anything you want. There is no lock-in.",
  },
  {
    q: "What about hosting after the first year?",
    a: "Year 1 hosting is included free with every tier. After that, you can stay with us for $25/mo (includes small edits like swapping a phone number or updating a photo). Or you can self-host on Cloudflare Pages or GitHub Pages for free. We'll show you how.",
  },
  {
    q: "What if I need changes later?",
    a: "Small edits (text, photos, phone numbers) are included if you're on our $25/mo hosting. Larger changes like adding new pages are quoted as one-time projects, typically $100–$300 per page.",
  },
  {
    q: "What happens if I stop paying the optional hosting?",
    a: "Nothing bad. Your site files are yours. We'll hand them over and you can host them anywhere. The site doesn't disappear like it does with Wix or Squarespace.",
  },
];

export default function NoMonthlyFeesPage() {
  const url = `${seo.siteUrl}/no-monthly-fees`;

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: seo.siteUrl },
    { name: "No Monthly Fees", url },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumb, faqSchema]} />
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        {/* ── Hero ── */}
        <section className="bg-white pt-12 pb-12 sm:pt-16 md:pt-20">
          <div className="container-page">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-700">
              <Link href="/" className="transition-colors duration-200 hover:text-ink-900">Home</Link>
              <span aria-hidden="true" className="mx-2 text-ink-300">/</span>
              <span aria-current="page" className="text-ink-900 font-semibold">No Monthly Fees</span>
            </nav>

            <span className="badge-orange">No subscriptions</span>
            <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              Websites With No Monthly Fees{" "}
              <span className="text-orange-500">&mdash; One Payment, Done</span>
            </h1>
            <p className="mt-5 text-body-lg text-ink-700 max-w-[640px]">
              You&apos;re tired of paying $30&ndash;$50 every month for a website you
              don&apos;t even own. We build it once for ${formatPrice(tiers[0].flatPrice)} to $
              {formatPrice(tiers[2].flatPrice)}, hand you the keys, and the monthly
              invoices stop.
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

        {/* ── The subscription trap ── */}
        <section className="section bg-ink-50">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-[720px] text-center">
                <span className="label">The subscription trap</span>
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  5 years of &ldquo;just $30/month&rdquo; adds up fast
                </h2>
                <p className="mt-3 text-body-lg text-ink-700">
                  Monthly website fees feel small. They&apos;re not. Here&apos;s what
                  you actually pay over 5 years on the most popular platforms.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 overflow-x-auto">
                <table className="mx-auto w-full max-w-[720px] text-left text-body-sm">
                  <thead>
                    <tr className="border-b border-ink-200">
                      <th className="py-3 pr-4 font-semibold text-ink-900">Platform</th>
                      <th className="py-3 pr-4 font-semibold text-ink-900">Monthly cost</th>
                      <th className="py-3 font-semibold text-ink-900">5-year total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptionMath.map((row) => (
                      <tr key={row.platform} className="border-b border-ink-200">
                        <td className="py-3 pr-4 text-ink-700">{row.platform}</td>
                        <td className="py-3 pr-4 font-mono text-ink-700">{row.monthly}</td>
                        <td className="py-3 font-mono font-semibold text-error">{row.fiveYear}</td>
                      </tr>
                    ))}
                    <tr className="bg-orange-50">
                      <td className="py-3 pr-4 font-semibold text-orange-500">{site.name}</td>
                      <td className="py-3 pr-4 font-mono text-orange-500">$0/mo</td>
                      <td className="py-3 font-mono font-bold text-orange-500">${formatPrice(tiers[0].flatPrice)} once</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Our model ── */}
        <section className="section bg-white">
          <div className="container-page">
            <Reveal>
              <div className="mx-auto max-w-[720px] text-center">
                <span className="label">Our model</span>
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  One payment. You own everything.
                </h2>
                <p className="mt-3 text-body-lg text-ink-700">
                  We charge a flat fee, build your site, and hand it over. First
                  year of hosting is free. After that, $25/mo if you want us to
                  keep hosting it &mdash; or host it yourself for $0.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-[960px] mx-auto">
                <div className="rounded-lg border border-ink-200 bg-white p-6 shadow-card text-center">
                  <div className="font-mono text-3xl font-bold text-navy-800">${formatPrice(tiers[0].flatPrice)}</div>
                  <p className="mt-2 text-body-sm font-semibold text-ink-900">Starter</p>
                  <p className="mt-1 text-body-sm text-ink-700">5-page site, done in 5&ndash;7 days</p>
                </div>
                <div className="rounded-lg border-2 border-orange-500 bg-white p-6 shadow-card text-center">
                  <div className="font-mono text-3xl font-bold text-navy-800">${formatPrice(tiers[1].flatPrice)}</div>
                  <p className="mt-2 text-body-sm font-semibold text-ink-900">Professional</p>
                  <p className="mt-1 text-body-sm text-ink-700">10-page site, done in 7&ndash;10 days</p>
                </div>
                <div className="rounded-lg border border-ink-200 bg-white p-6 shadow-card text-center">
                  <div className="font-mono text-3xl font-bold text-navy-800">${formatPrice(tiers[2].flatPrice)}</div>
                  <p className="mt-2 text-body-sm font-semibold text-ink-900">Premium</p>
                  <p className="mt-1 text-body-sm text-ink-700">15+ page site, done in 10&ndash;14 days</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Pricing tiers ── */}
        <Pricing />

        {/* ── FAQ ── */}
        <section id="faq" className="section bg-ink-50">
          <div className="container-narrow">
            <Reveal>
              <div className="mx-auto max-w-[720px] text-center">
                <span className="label">FAQ</span>
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  Common questions about no monthly fees
                </h2>
              </div>
            </Reveal>

            <Reveal>
              <dl className="mt-10 flex flex-col gap-4 max-w-[720px] mx-auto">
                {pageFaqs.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-lg border border-ink-200 bg-white"
                  >
                    <summary className="cursor-pointer select-none px-6 py-5 text-body font-semibold text-ink-900 marker:[content:''] [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center justify-between gap-4">
                        {f.q}
                        <span
                          aria-hidden="true"
                          className="flex-shrink-0 text-ink-400 transition-transform duration-200 group-open:rotate-45"
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <div className="px-6 pb-5">
                      <p className="text-body-sm text-ink-700">{f.a}</p>
                    </div>
                  </details>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section bg-navy-800 text-white">
          <div className="container-narrow text-center">
            <span className="label">Done with subscriptions?</span>
            <h2 className="text-h2-sm md:text-h2 text-white">
              Get a website you actually own
            </h2>
            <p className="mt-3 text-body-lg text-white/85 max-w-[640px] mx-auto">
              One flat fee. No monthly invoices. No contracts. Tell us about your
              business and we&apos;ll send a quote the same day.
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
