import type { Metadata } from "next";
import Link from "next/link";
import { site, processSteps } from "@/lib/site";
import { seo, breadcrumbSchema } from "@/lib/seo";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";

const slug = "how-long-does-it-take-to-build-a-website";
const title = "How Long Does It Take to Build a Website? Realistic Timelines";
const description =
  "How long to build a website? DIY: weeks of frustration. Agencies: 2-6 months. ProLocalBuilder: 5-14 days, depending on complexity. Here's why.";
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

export default function HowLongDoesItTakeToBuildAWebsitePage() {
  return (
    <>
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        <JsonLd
          data={[
            breadcrumbSchema([
              { name: "Home", url: seo.siteUrl },
              { name: "Blog", url: `${seo.siteUrl}/blog` },
              { name: "How Long Does It Take to Build a Website", url },
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
                  How Long Does It Take to Build a Website
                </li>
              </ol>
            </nav>

            <span className="label">Timelines</span>
            <h1 className="text-display-sm sm:text-display-md font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              How Long Does It Take to Build a Website?
            </h1>
            <p className="mt-5 text-body-lg text-ink-700">
              The timeline depends on who&rsquo;s building it and what you
              need. Here are realistic numbers, not marketing numbers.
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
            {/* DIY */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  DIY builders: &ldquo;done in a day&rdquo; (realistically,
                  weeks)
                </h2>
                <p className="text-body-lg text-ink-700">
                  Wix and Squarespace advertise that you can launch a site in
                  an afternoon. Technically true. You can pick a template,
                  swap the placeholder text, and hit publish in a few hours.
                </p>
                <p className="text-body-lg text-ink-700">
                  In practice? Most people spend weeks. You tweak the font,
                  realize the mobile layout looks wrong, rewrite the
                  headline four times, struggle with the image cropper, and
                  eventually settle on something that&rsquo;s &ldquo;good
                  enough.&rdquo;
                </p>
                <p className="text-body-lg text-ink-700">
                  The problem isn&rsquo;t the tool. The problem is that
                  designing a website is a skill. A plumber wouldn&rsquo;t
                  ask a web designer to fix a pipe. The reverse is equally
                  true. You&rsquo;re not slow &mdash; you&rsquo;re just
                  doing something outside your expertise, and the tool
                  can&rsquo;t close that gap.
                </p>
                <div className="rounded-lg border border-ink-200 bg-ink-50 p-6">
                  <p className="text-body text-ink-700">
                    <strong className="text-ink-900">Realistic timeline:</strong>{" "}
                    1&ndash;4 weeks of evenings and weekends, assuming no
                    prior design experience.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Freelancer */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  Freelancer: 2&ndash;6 weeks
                </h2>
                <p className="text-body-lg text-ink-700">
                  A decent freelancer can build a 5&ndash;10 page local
                  business site in 2&ndash;3 weeks of focused work. The
                  catch: &ldquo;focused work&rdquo; rarely happens.
                </p>
                <p className="text-body-lg text-ink-700">
                  Most freelancers juggle 3&ndash;5 clients at once. Your
                  project sits in their queue. They&rsquo;re waiting on you
                  for content. You&rsquo;re waiting on them for the first
                  draft. Neither of you is blocked on anything truly
                  difficult &mdash; the project just stretches because
                  nobody&rsquo;s dedicated to it full-time.
                </p>
                <p className="text-body-lg text-ink-700">
                  Then there are revisions. You see the first draft, you
                  want changes. The freelancer takes a few days to get back
                  to it. Another round. Another few days. A project that
                  should take 2 weeks becomes 6.
                </p>
                <div className="rounded-lg border border-ink-200 bg-ink-50 p-6">
                  <p className="text-body text-ink-700">
                    <strong className="text-ink-900">Realistic timeline:</strong>{" "}
                    2&ndash;6 weeks, mostly determined by their backlog and
                    your responsiveness on content.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Agency */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  Agency: 2&ndash;6 months (yes, really)
                </h2>
                <p className="text-body-lg text-ink-700">
                  An agency building a website for a local plumber will
                  follow the same process they use for a Fortune 500
                  rebrand. Discovery phase. Stakeholder interviews.
                  Wireframes. Design mockups. Client review meeting. Another
                  round of mockups. Development. QA. Launch meeting.
                </p>
                <p className="text-body-lg text-ink-700">
                  Each phase takes 1&ndash;3 weeks. Between phases,
                  there&rsquo;s scheduling lag. The designer is on another
                  project. The project manager is on vacation. The client
                  (you) forgot to review the mockup for two weeks because
                  you were running your actual business.
                </p>
                <p className="text-body-lg text-ink-700">
                  None of this is malicious. Agencies have overhead. They
                  follow processes designed for complex projects. For a
                  5-page plumber site, 90% of that process is unnecessary
                  &mdash; but they can&rsquo;t skip it without restructuring
                  their entire operation.
                </p>
                <div className="rounded-lg border border-ink-200 bg-ink-50 p-6">
                  <p className="text-body text-ink-700">
                    <strong className="text-ink-900">Realistic timeline:</strong>{" "}
                    2&ndash;6 months for a local business site. Most of that
                    time is process, not building.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* ProLocalBuilder */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  ProLocalBuilder: 5&ndash;14 days
                </h2>
                <p className="text-body-lg text-ink-700">
                  We build local business websites in 5&ndash;14 days,
                  depending on the tier. Starter sites (5 pages) typically
                  launch in 5&ndash;7 days. Professional (10 pages) in
                  7&ndash;10 days. Premium (15+ pages) in 10&ndash;14 days.
                </p>
                <p className="text-body-lg text-ink-700">
                  Why are we faster? Four reasons:
                </p>
                <ul className="space-y-2 text-body-lg text-ink-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>Fixed scope.</strong> We know exactly what a
                      plumber&rsquo;s site needs. There&rsquo;s no
                      three-week discovery phase to figure that out.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>No committee.</strong> One builder, one client.
                      No project managers, no stakeholder meetings, no
                      design review boards.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>We&rsquo;ve done this before.</strong>{" "}
                      We&rsquo;ve built this specific type of site &mdash;
                      local service business, optimized for phone calls,
                      5&ndash;15 pages &mdash; many times. We know what
                      works and we skip what doesn&rsquo;t.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>Modern tools.</strong> We use AI-assisted
                      development to write code faster, then hand-tune
                      everything. The tools are fast. The taste is human.
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* What affects timeline */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  What affects the timeline?
                </h2>
                <p className="text-body-lg text-ink-700">
                  Regardless of who builds your site, these are the biggest
                  timeline factors:
                </p>
                <ul className="space-y-3 text-body-lg text-ink-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>Number of pages.</strong> A 5-page site takes
                      less time than a 15-page site. Obvious, but worth
                      stating. Every additional page means more copy, more
                      layout decisions, more testing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>Custom features.</strong> Online booking,
                      before/after galleries, intake forms, service area
                      maps &mdash; these add time but also add value. Our
                      Professional and Premium tiers include them because
                      they make the phone ring.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>Your responsiveness.</strong> This is the
                      biggest one. We need your business info, photos, and
                      feedback on drafts. If you reply same-day, the project
                      stays on track. If replies take a week, the project
                      takes a week longer. Every time.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                    <span>
                      <strong>Content readiness.</strong> Do you have photos
                      of your work? A list of services? Your team&rsquo;s
                      bios? If yes, we move fast. If we&rsquo;re waiting for
                      you to take photos of your last three jobs, that adds
                      time.
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Our process */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  Our 4-step process
                </h2>
                <p className="text-body-lg text-ink-700">
                  We keep it simple. Four steps, no mystery:
                </p>
                <div className="space-y-4">
                  {processSteps.map((step) => (
                    <div
                      key={step.num}
                      className="flex items-start gap-4 rounded-lg border border-ink-200 bg-white p-5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-body-sm font-bold text-white">
                        {step.num}
                      </span>
                      <div>
                        <h3 className="text-h4 text-ink-900">{step.title}</h3>
                        <p className="mt-1 text-body text-ink-700">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Summary comparison */}
            <Reveal>
              <div className="rounded-lg border border-ink-200 bg-ink-50 p-6 sm:p-8 space-y-3">
                <h3 className="text-h4 text-ink-900">
                  Timeline comparison
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-body text-ink-700">
                    <thead>
                      <tr className="border-b border-ink-200">
                        <th className="py-3 pr-4 text-left font-semibold text-ink-900">
                          Who builds it
                        </th>
                        <th className="py-3 pr-4 text-left font-semibold text-ink-900">
                          Advertised
                        </th>
                        <th className="py-3 text-left font-semibold text-ink-900">
                          Realistic
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink-200">
                      <tr>
                        <td className="py-3 pr-4">You (DIY builder)</td>
                        <td className="py-3 pr-4">1 day</td>
                        <td className="py-3">1&ndash;4 weeks</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Freelancer</td>
                        <td className="py-3 pr-4">2 weeks</td>
                        <td className="py-3">2&ndash;6 weeks</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Agency</td>
                        <td className="py-3 pr-4">6&ndash;8 weeks</td>
                        <td className="py-3">2&ndash;6 months</td>
                      </tr>
                      <tr className="bg-orange-50">
                        <td className="py-3 pr-4 font-semibold text-ink-900">
                          ProLocalBuilder
                        </td>
                        <td className="py-3 pr-4 font-semibold text-ink-900">
                          5&ndash;14 days
                        </td>
                        <td className="py-3 font-semibold text-ink-900">
                          5&ndash;14 days
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-body-sm text-ink-700">
                  Our advertised and realistic timelines are the same. Fixed
                  scope means fewer surprises.
                </p>
              </div>
            </Reveal>

            {/* Closing */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="text-h2-sm md:text-h2 text-ink-900">
                  Ready to get started?
                </h2>
                <p className="text-body-lg text-ink-700">
                  If you&rsquo;re a local service business that needs a
                  website that actually works &mdash; fast load times, shows
                  up on Google, makes the phone ring &mdash; we can have you
                  live in under two weeks.
                </p>
                <p className="text-body-lg text-ink-700">
                  Send us a{" "}
                  <Link
                    href="/#quote"
                    className="font-semibold text-orange-500 underline-offset-2 hover:underline"
                  >
                    free quote request
                  </Link>{" "}
                  and we&rsquo;ll get back to you the same day with a
                  timeline and price. No commitment, no sales calls, no BS.
                </p>
              </div>
            </Reveal>
          </article>
        </section>

        {/* CTA */}
        <CTA />
      </main>
      <Footer />
      <MobilePhoneBar />
    </>
  );
}
