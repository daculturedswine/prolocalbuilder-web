import type { Metadata } from "next";
import Link from "next/link";
import { seo, breadcrumbSchema } from "@/lib/seo";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Straight talk about website costs, timelines, and what local businesses actually need. No jargon, no upsells.",
  alternates: { canonical: "/blog" },
  robots: { index: true, follow: true },
};

const posts = [
  {
    slug: "how-much-does-a-website-cost",
    title: "How Much Does a Website Cost in 2026?",
    date: "2026-05-11",
    description:
      "DIY builders, freelancers, agencies — we break down what each option actually costs and where the hidden fees hide.",
  },
  {
    slug: "how-long-does-it-take-to-build-a-website",
    title: "How Long Does It Take to Build a Website?",
    date: "2026-05-11",
    description:
      "Realistic timelines for DIY, freelancers, agencies, and us. Plus what affects the timeline the most.",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        <JsonLd
          data={breadcrumbSchema([
            { name: "Home", url: seo.siteUrl },
            { name: "Blog", url: `${seo.siteUrl}/blog` },
          ])}
        />

        <section className="bg-white pt-12 pb-12 sm:pt-16 md:pt-20">
          <div className="container-narrow">
            <span className="label">Blog</span>
            <h1 className="text-display-sm sm:text-display-md font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              Blog
            </h1>
            <p className="mt-5 text-body-lg text-ink-700">
              Honest answers to the questions local business owners actually
              ask about websites.
            </p>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-narrow">
            <div className="grid gap-6 sm:grid-cols-2">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 80}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block rounded-lg border border-ink-200 bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover sm:p-8"
                  >
                    <time
                      dateTime={post.date}
                      className="text-body-sm text-ink-700"
                    >
                      {new Date(post.date + "T12:00:00").toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </time>
                    <h2 className="mt-2 text-h4 text-ink-900 group-hover:text-orange-500 transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-body text-ink-700">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-block text-body-sm font-semibold text-orange-500">
                      Read more &rarr;
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobilePhoneBar />
    </>
  );
}
