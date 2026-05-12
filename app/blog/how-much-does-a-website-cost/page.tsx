import type { Metadata } from "next";
import Link from "next/link";
import { site, tiers, formatPrice } from "@/lib/site";
import { seo, breadcrumbSchema } from "@/lib/seo";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";

const slug = "how-much-does-a-website-cost";
const title = "How Much Does a Website Cost in 2026? Real Numbers, No BS";
const description =
  "How much does a website cost? DIY builders: $150-$500/yr. Agencies: $3,000-$15,000. ProLocalBuilder: $750 flat, one-time. Here's the honest breakdown.";
const datePublished = "2026-05-11";
const url = `${seo.siteUrl}/blog/${slug}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/blog/${slug}` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    title,
    description,
    url,
    siteName: site.name,
    publishedTime: datePublished,
  },
};

export default function HowMuchDoesAWebsiteCostPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        <JsonLd
          data={[
            breadcrumbSchema([
              { name: "Home", url: seo.siteUrl },
              { name: "Blog", url: `${seo.siteUrl}/blog` },
              { name: "How Much Does a Website Cost", url },
            ]),
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description,
              datePublished,
              dateModified: datePublished,
              author: {
                "@type": "Person",
                name: "Kyle",
                url: seo.siteUrl,
              },
              publisher: {
                "@type": "Organization",
                name: site.name,
                url: seo.siteUrl,
                logo: {
                  "@type": "ImageObject",
                  url: `${seo.siteUrl}/icon.png`,
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": url,
              },
            },
          ]}
        />

        {/* Hero */}
        <section className="bg-white pt-12 pb-8 sm:pt-16 md:pt-20">
          <div className="mx-auto max-w-[720px] px-6 sm:px-8">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap gap-1 text-body-sm text-ink-700">
                <li>
                  <Link
                    href="/"
                    className="underline-offset-2 hover:underline hover:text-orange-500"
                  >
                    Home
                  </Link>
                  <span className="mx-1.5">/</span>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="underline-offset-2 hover:underline hover:text-orange-500"
                  >
                    Blog
                  </Link>
                  <span className="mx-1.5">/</span>
                </li>
                <li className="text-ink-900 font-medium">
                  How Much Does a Website Cost
                </li>
              </ol>
            </nav>

            <span className="label">Website costs</span>
            <h1 className="text-display-sm sm:text-display-md font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              How Much Does a Website Cost in 2026?
            </h1>
            <p className="mt-5 text-body-lg text-ink-700">
              The honest answer: it depends, but not as much as agencies want
              you to think. Here are real numbers from every option available
              to you.
            </p>
            <time
              dateTime={datePublished}
              className="mt-4 block text-body-sm text-ink-700"
            >
              {new Date(datePublished + "T12:00:00").toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </time>
          </div>
        </section>

        {/* Article body */}
        <section className="bg-white py-8 sm:py-12">
          <article className="mx-auto max-w-[720px] px-6 sm:px-8 space-y-12">
            {/* Option 1: DIY builders */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  Option 1: DIY website builders ($150&ndash;$500/yr)
                </h2>
                <p className="text-body-lg text-ink-700">
                  Wix, Squarespace, GoDaddy Website Builder. You pick a
                  template, drag some blocks around, and publish. Plans run
                  $12&ndash;$45 per month, so you&rsquo;re looking at
                  $150&ndash;$500 per year.
                </p>
                <p className="text-body-lg text-ink-700">
                  Sounds cheap. But do the math over five years:
                </p>
                <div className="rounded-lg border border-ink-200 bg-ink-50 p-6">
                  <p className="text-body-lg text-ink-900 font-semibold">
                    5 years &times; $300/yr = $1,500 paid &mdash; and you still
                    don&rsquo;t own the site.
                  </p>
                  <p className="mt-2 text-body text-ink-700">
                    Cancel your plan and the site disappears. You can&rsquo;t
                    export a Wix site to another host. You&rsquo;re renting,
                    not buying.
                  </p>
                </div>
                <p className="text-body-lg text-ink-700">
                  DIY builders also have real SEO limitations. Page speed is
                  mediocre (Wix and Squarespace sites routinely fail Google
                  Core Web Vitals), URL structures are rigid, and you have
                  limited control over schema markup and structured data.
                </p>
                <p className="text-body-lg text-ink-700">
                  <strong>Best for:</strong> Personal blogs, hobby projects,
                  or businesses that genuinely want to build their own site and
                  enjoy the process. Not ideal if your website&rsquo;s job is
                  to make the phone ring.
                </p>
              </div>
            </Reveal>

            {/* Option 2: Freelancer */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  Option 2: Freelance web designer ($1,000&ndash;$5,000)
                </h2>
                <p className="text-body-lg text-ink-700">
                  A solo designer or developer builds your site from scratch
                  (or on WordPress). One-time fee, you own the result. Prices
                  vary wildly based on location, experience, and complexity.
                </p>
                <p className="text-body-lg text-ink-700">
                  The upside: you get a custom site built by a human who
                  (hopefully) understands design. The downside: quality is a
                  coin flip. Some freelancers are brilliant. Some will hand you
                  a WordPress theme they spent 3 hours on and call it custom.
                </p>
                <p className="text-body-lg text-ink-700">
                  The bigger risk is what happens after launch. Many
                  freelancers move on to their next gig. Six months later when
                  you need your phone number changed, they&rsquo;re not
                  answering emails. You&rsquo;re stuck with a site you
                  can&rsquo;t edit yourself.
                </p>
                <p className="text-body-lg text-ink-700">
                  <strong>Best for:</strong> Businesses that have a personal
                  referral to a specific freelancer they trust, and who have
                  some technical comfort to manage the site after handoff.
                </p>
              </div>
            </Reveal>

            {/* Option 3: Agency */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  Option 3: Web design agency ($3,000&ndash;$15,000+)
                </h2>
                <p className="text-body-lg text-ink-700">
                  A full-service agency does discovery, wireframes, design
                  mockups, development, testing, and launch. You get a project
                  manager, a designer, a developer, and sometimes a
                  copywriter. The process takes 2&ndash;6 months.
                </p>
                <p className="text-body-lg text-ink-700">
                  For a 5-page site for a plumber? That&rsquo;s overkill. The
                  agency overhead &mdash; project management, multiple
                  stakeholder reviews, revision committees &mdash; adds cost
                  that doesn&rsquo;t translate to more phone calls for your
                  business.
                </p>
                <p className="text-body-lg text-ink-700">
                  Agencies are the right choice when you have genuinely complex
                  needs: custom integrations, 50+ page sites, e-commerce with
                  inventory management, or multi-language support. For a local
                  service business that needs a clean 5&ndash;15 page site that
                  ranks on Google and makes the phone ring? You&rsquo;re
                  paying for process you don&rsquo;t need.
                </p>
                <p className="text-body-lg text-ink-700">
                  <strong>Best for:</strong> Businesses with complex
                  requirements, large budgets, and the patience for a
                  3&ndash;6 month process.
                </p>
              </div>
            </Reveal>

            {/* Option 4: ProLocalBuilder */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  Option 4: ProLocalBuilder ($750&ndash;$2,500 flat)
                </h2>
                <p className="text-body-lg text-ink-700">
                  We exist in the sweet spot between &ldquo;do it
                  yourself&rdquo; and &ldquo;hire an agency.&rdquo; You get a
                  custom-built, fast, mobile-responsive site designed
                  specifically for local businesses. One-time payment. You own
                  it.
                </p>
                <p className="text-body-lg text-ink-700">
                  Three tiers, all flat fee:
                </p>
                <ul className="space-y-2 text-body-lg text-ink-700">
                  {tiers.map((t) => (
                    <li key={t.id} className="flex items-start gap-2">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                      <span>
                        <strong>{t.name} (${formatPrice(t.flatPrice)})</strong>
                        {" "}&mdash; {t.features[0].toLowerCase()},{" "}
                        {t.features.slice(1, 3).join(", ").toLowerCase()}.{" "}
                        {t.features[t.features.length - 1]}.
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-body-lg text-ink-700">
                  No monthly fees. No contracts. After year one, hosting is
                  $25/mo if you want us to handle it, or you can self-host for
                  free. We show you how.
                </p>
                <p className="text-body-lg text-ink-700">
                  Why is it cheaper than agencies? We don&rsquo;t have the
                  overhead. No office, no project managers, no
                  three-week discovery phase. We&rsquo;ve built this specific
                  type of site &mdash; local service business,
                  5&ndash;15 pages, optimized for phone calls &mdash; hundreds
                  of times. We know what works. We skip what doesn&rsquo;t.
                </p>
              </div>
            </Reveal>

            {/* Hidden costs */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  The hidden costs nobody mentions
                </h2>
                <p className="text-body-lg text-ink-700">
                  Regardless of who builds your site, budget for these:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-body text-ink-700">
                    <thead>
                      <tr className="border-b border-ink-200">
                        <th className="py-3 pr-4 text-left font-semibold text-ink-900">
                          Item
                        </th>
                        <th className="py-3 pr-4 text-left font-semibold text-ink-900">
                          Cost
                        </th>
                        <th className="py-3 text-left font-semibold text-ink-900">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink-200">
                      <tr>
                        <td className="py-3 pr-4">Domain name</td>
                        <td className="py-3 pr-4">$12&ndash;$20/yr</td>
                        <td className="py-3">
                          .com is standard. Avoid premium domains unless
                          you&rsquo;re sure.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Hosting</td>
                        <td className="py-3 pr-4">$0&ndash;$25/mo</td>
                        <td className="py-3">
                          Free with Cloudflare Pages or GitHub Pages. $25/mo
                          with us (includes small edits).
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">SSL certificate</td>
                        <td className="py-3 pr-4">Free</td>
                        <td className="py-3">
                          Any modern host includes SSL. If someone charges you
                          for this, run.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Stock photos</td>
                        <td className="py-3 pr-4">$0&ndash;$200</td>
                        <td className="py-3">
                          We prefer real photos of your business. Unsplash and
                          Pexels cover the rest for free.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Content writing</td>
                        <td className="py-3 pr-4">$0&ndash;$500</td>
                        <td className="py-3">
                          Most clients provide their own info. We write the
                          final copy from that.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Google Business Profile</td>
                        <td className="py-3 pr-4">Free</td>
                        <td className="py-3">
                          We help you set it up if you don&rsquo;t have one.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-body-lg text-ink-700">
                  Total hidden costs for most local businesses:
                  $12&ndash;$50/yr for a domain, and $0&ndash;$25/mo for
                  hosting if you don&rsquo;t want to self-host. That&rsquo;s
                  it.
                </p>
              </div>
            </Reveal>

            {/* Decision framework */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  What should I actually pay?
                </h2>
                <p className="text-body-lg text-ink-700">
                  Here&rsquo;s a simple decision framework:
                </p>
                <ul className="space-y-3 text-body-lg text-ink-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>
                        You&rsquo;re a local service business with under $2M
                        in revenue.
                      </strong>{" "}
                      You don&rsquo;t need a $10,000 website. You need a
                      clean, fast site that shows up on Google and makes
                      people call you. $750&ndash;$2,500 covers that.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>You want to build it yourself.</strong> Go with
                      Squarespace. It has the best templates of the DIY
                      builders. Just know you&rsquo;re renting, and
                      you&rsquo;ll pay more over 3&ndash;5 years than a
                      one-time build.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>
                        You have complex needs (e-commerce, 50+ pages,
                        custom app features).
                      </strong>{" "}
                      Hire an agency. Pay the $5,000&ndash;$15,000. The
                      complexity justifies it.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>
                        You&rsquo;re a plumber / dentist / lawyer /
                        contractor who just needs the phone to ring.
                      </strong>{" "}
                      That&rsquo;s exactly who we built{" "}
                      <Link
                        href="/"
                        className="font-semibold text-orange-500 underline-offset-2 hover:underline"
                      >
                        ProLocalBuilder
                      </Link>{" "}
                      for. Fixed price. Done in a week. You own it.
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Summary comparison */}
            <Reveal>
              <div className="rounded-lg border border-ink-200 bg-ink-50 p-6 sm:p-8 space-y-3">
                <h3 className="text-h4 text-ink-900">
                  Quick comparison
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-body text-ink-700">
                    <thead>
                      <tr className="border-b border-ink-200">
                        <th className="py-3 pr-4 text-left font-semibold text-ink-900">
                          Option
                        </th>
                        <th className="py-3 pr-4 text-left font-semibold text-ink-900">
                          Cost
                        </th>
                        <th className="py-3 pr-4 text-left font-semibold text-ink-900">
                          Timeline
                        </th>
                        <th className="py-3 text-left font-semibold text-ink-900">
                          You own it?
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink-200">
                      <tr>
                        <td className="py-3 pr-4">DIY builder</td>
                        <td className="py-3 pr-4">$150&ndash;$500/yr</td>
                        <td className="py-3 pr-4">Days (sort of)</td>
                        <td className="py-3">No</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Freelancer</td>
                        <td className="py-3 pr-4">$1K&ndash;$5K</td>
                        <td className="py-3 pr-4">2&ndash;6 weeks</td>
                        <td className="py-3">Usually</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Agency</td>
                        <td className="py-3 pr-4">$3K&ndash;$15K+</td>
                        <td className="py-3 pr-4">2&ndash;6 months</td>
                        <td className="py-3">Yes</td>
                      </tr>
                      <tr className="bg-orange-50">
                        <td className="py-3 pr-4 font-semibold text-ink-900">
                          ProLocalBuilder
                        </td>
                        <td className="py-3 pr-4 font-semibold text-ink-900">
                          $750&ndash;$2,500
                        </td>
                        <td className="py-3 pr-4 font-semibold text-ink-900">
                          5&ndash;14 days
                        </td>
                        <td className="py-3 font-semibold text-ink-900">
                          Yes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </article>
        </section>

        {/* Embedded pricing */}
        <Pricing />

        {/* CTA */}
        <CTA />
      </main>
      <Footer />
      <MobilePhoneBar />
    </>
  );
}
