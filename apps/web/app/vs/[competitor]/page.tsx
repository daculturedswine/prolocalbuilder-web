import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { competitors, getCompetitor, seo, breadcrumbSchema } from "@/lib/seo";
import { site, tiers, formatPrice } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return competitors.map((c) => ({ competitor: c.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ competitor: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { competitor: slug } = await params;
  const c = getCompetitor(slug);
  if (!c) return {};
  const url = `/vs/${slug}`;
  const title = `${site.name} vs ${c.name} · Honest comparison`;
  const description = `${site.name} vs ${c.name}: pricing, control, ownership, SEO. We charge $895 once. ${c.name} charges ${c.annualCost}.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function VsPage({ params }: Props) {
  const { competitor: slug } = await params;
  const c = getCompetitor(slug);
  if (!c) notFound();

  const url = `${seo.siteUrl}/vs/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: "en-US",
    headline: `${site.name} vs ${c.name}`,
    description: `Honest comparison: ${site.name} flat-fee custom websites vs ${c.name}.`,
    datePublished: "2026-05-07",
    dateModified: new Date().toISOString().slice(0, 10),
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${seo.siteUrl}/logo.png` },
    },
    mainEntityOfPage: url,
  };

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: seo.siteUrl },
    { name: "Comparisons", url: `${seo.siteUrl}/vs` },
    { name: c.name, url },
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumb]} />
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        <section className="bg-white pt-12 pb-12 sm:pt-16 md:pt-20">
          <div className="container-narrow">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-700">
              <Link href="/" className="transition-colors duration-200 hover:text-ink-900">Home</Link>
              <span aria-hidden="true" className="mx-2 text-ink-300">/</span>
              <Link href="/vs" className="transition-colors duration-200 hover:text-ink-900">Comparisons</Link>
              <span aria-hidden="true" className="mx-2 text-ink-300">/</span>
              <span aria-current="page" className="text-ink-900 font-semibold">{c.name}</span>
            </nav>

            <span className="badge-orange">Honest comparison</span>
            <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              {site.name} vs {c.name}
            </h1>
            <p className="mt-5 text-body-lg text-ink-700">
              Both options work for some businesses. This page is the honest
              breakdown of where {c.name} wins and where it doesn't.
            </p>
          </div>
        </section>

        <section className="section bg-ink-50">
          <div className="container-narrow">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-ink-200 bg-white p-7">
                <span className="text-label uppercase text-ink-700">{c.name}</span>
                <div className="mt-2 font-mono text-h3 text-navy-800">{c.annualCost}</div>
                <div className="text-body-sm text-ink-700">monthly forever</div>
              </div>
              <div className="rounded-lg border-2 border-orange-500 bg-white p-7">
                <span className="text-label uppercase text-orange-500">{site.name}</span>
                <div className="mt-2 font-mono text-h3 text-navy-800">{c.ourAnnualCost}</div>
                <div className="text-body-sm text-ink-700">you own it</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-narrow grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-h2-sm md:text-h2 text-ink-900">Where {c.name} is good</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {c.pros.map((p) => (
                  <li key={p} className="flex gap-3 rounded-lg border border-ink-200 bg-white p-5">
                    <span className="text-success font-bold flex-shrink-0" aria-hidden="true">✓</span>
                    <p className="text-body-sm text-ink-700">{p}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-h2-sm md:text-h2 text-ink-900">Where {c.name} hurts</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {c.cons.map((p) => (
                  <li key={p} className="flex gap-3 rounded-lg border border-ink-200 bg-white p-5">
                    <span className="text-error font-bold flex-shrink-0" aria-hidden="true">✗</span>
                    <p className="text-body-sm text-ink-700">{p}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section bg-navy-800 text-white">
          <div className="container-narrow text-center">
            <span className="label">Bottom line</span>
            <h2 className="text-h2-sm md:text-h2 text-white">
              When you should pick {c.name}
            </h2>
            <p className="mt-3 text-body-lg text-white/85 max-w-[640px] mx-auto">
              If you want to edit your site yourself every week and don't mind
              paying monthly forever, {c.name} is fine.
              <br /><br />
              If you'd rather own the site, get it built once for $
              {formatPrice(tiers[0].flatPrice)} to ${formatPrice(tiers[2].flatPrice)},
              and never see another invoice, you want us.
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
