import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { demos, getDemo } from "@/lib/demos";
import { DemoSubChrome } from "@/components/demos/_shared/DemoSubChrome";
import {
  PageEyebrow,
  PageHeading,
  PageLede,
  themeForSlug,
} from "@/components/demos/_shared/SubPageBlocks";

export function generateStaticParams() {
  return demos.map((d) => ({ slug: d.slug }));
}
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) return {};
  const url = `/examples/${slug}/reviews`;
  return {
    title: `Reviews · ${demo.businessName} (concept)`,
    description: `Customer reviews for ${demo.businessName} — what people are actually saying after we did the work.`,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default async function ReviewsPage({ params }: Props) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) notFound();
  const theme = themeForSlug(slug);
  const reviews = demo.reviews ?? [
    { quote: demo.reviewQuote, author: demo.reviewAuthor, source: "Google" },
  ];

  return (
    <DemoSubChrome demo={demo} currentPath="reviews">
      <PageEyebrow theme={theme}>What customers say</PageEyebrow>
      <PageHeading theme={theme}>
        {demo.tier === "premium"
          ? "Reviews from real Henderson patients."
          : demo.tier === "professional"
          ? "What people say after we leave."
          : "Five years of word-of-mouth."}
      </PageHeading>
      <PageLede theme={theme}>
        Every review here is from a real customer (in a real version of this site). We
        don&apos;t cherry-pick, and we don&apos;t pay for reviews.
      </PageLede>

      <div className="mt-10 flex items-center gap-4">
        <div className="flex gap-0.5" aria-label="5 out of 5 stars">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} aria-hidden="true" className="text-[22px]" style={{ color: "#f59e0b" }}>
              ★
            </span>
          ))}
        </div>
        <div className="text-[14px]" style={{ color: theme.inkSoft }}>
          <strong style={{ color: theme.ink }}>
            {demo.tier === "premium" ? "4.9 average" : demo.tier === "professional" ? "4.9 average" : "5.0 average"}
          </strong>
          {" · "}
          {demo.tier === "premium" ? "267 reviews" : demo.tier === "professional" ? "412 reviews" : "87 reviews"} on Google
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {reviews.map((r, i) => (
          <article
            key={i}
            className="rounded-lg border bg-white p-7"
            style={{ borderColor: theme.accent + "20" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} aria-hidden="true" className="text-[14px]" style={{ color: "#f59e0b" }}>
                    ★
                  </span>
                ))}
              </div>
              {r.kicker && (
                <span
                  className="text-[10px] uppercase font-semibold"
                  style={{ color: theme.inkSoft, letterSpacing: "0.16em" }}
                >
                  {r.kicker}
                </span>
              )}
            </div>
            <p className="mt-4 text-[15px] leading-[1.65]" style={{ color: theme.ink }}>
              &ldquo;{r.quote}&rdquo;
            </p>
            <div
              className="mt-5 flex items-center justify-between border-t pt-4"
              style={{ borderColor: theme.accent + "20" }}
            >
              <div>
                <div className="text-[13px] font-semibold" style={{ color: theme.ink }}>
                  {r.author}
                </div>
                <div className="text-[11px] uppercase" style={{ color: theme.inkSoft, letterSpacing: "0.14em" }}>
                  via {r.source}
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase" style={{ color: theme.inkSoft }}>
                Verified
              </span>
            </div>
          </article>
        ))}
      </div>
    </DemoSubChrome>
  );
}
