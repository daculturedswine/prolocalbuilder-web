import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  industries,
  getIndustry,
  citiesForIndustry,
  seo,
  breadcrumbSchema,
} from "@/lib/seo";
import { site, tiers, formatPrice } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ industry: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  const tier = tiers.find((t) => t.id === ind.tier);
  const url = `/websites-for/${slug}`;
  const title = `Websites for ${ind.plural} · From $${tier?.flatPrice ?? 750} flat`;
  const description = `Custom websites built for ${ind.plural}. Mobile-friendly, SEO-ready, ${tier?.features[7] ?? "done in a week"}. ${ind.features.slice(0, 2).join(". ")}.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { industry: slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const tier = tiers.find((t) => t.id === ind.tier);
  if (!tier) notFound();

  const url = `${seo.siteUrl}/websites-for/${slug}`;
  const citiesServingThisIndustry = citiesForIndustry(slug);

  // Service schema with specific industry @type per local-schema skill best practice
  const serviceSchemaForIndustry = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: `Website design for ${ind.plural}`,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${seo.siteUrl}/#business`,
      name: site.name,
      url: seo.siteUrl,
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: ind.plural,
    },
    description: `Custom websites built specifically for ${ind.plural}. ${ind.features.join(". ")}.`,
    offers: {
      "@type": "Offer",
      name: `${tier.name} website for ${ind.plural}`,
      price: tier.flatPrice,
      priceCurrency: "USD",
    },
    areaServed: ["Appleton, WI", "San Jose, CA", "Bay Area, CA"],
  };

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: seo.siteUrl },
    { name: "Websites by industry", url: `${seo.siteUrl}/websites-for` },
    { name: ind.plural, url },
  ]);

  return (
    <>
      <JsonLd data={[serviceSchemaForIndustry, breadcrumb]} />
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        <section className="bg-white pt-12 pb-12 sm:pt-16 md:pt-20">
          <div className="container-page">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-700">
              <Link href="/" className="transition-colors duration-200 hover:text-ink-900">Home</Link>
              <span aria-hidden="true" className="mx-2 text-ink-300">/</span>
              <Link href="/websites-for" className="transition-colors duration-200 hover:text-ink-900">By industry</Link>
              <span aria-hidden="true" className="mx-2 text-ink-300">/</span>
              <span aria-current="page" className="text-ink-900 font-semibold">{ind.plural}</span>
            </nav>

            <span className="badge-orange">For {ind.plural}</span>
            <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900 max-w-[840px]">
              Websites for {ind.plural}.{" "}
              <span className="text-orange-500">${formatPrice(tier.flatPrice)} flat.</span>
            </h1>
            <p className="mt-5 text-body-lg text-ink-700 max-w-[640px]">
              Built for the way your customers actually find you. {ind.features[0]}. {ind.features[1]}. Done in {tier.id === "starter" ? "5–7" : tier.id === "professional" ? "7–10" : "10–14"} days.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/#quote" className="btn btn-primary btn-lg">
                Get a free quote
              </Link>
              <a
                href={site.contact.phoneHref}
                aria-label={`Call ${site.contact.phone}`}
                className="btn btn-secondary btn-lg"
              >
                <span aria-hidden="true">📞</span> Call · {site.contact.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="section bg-ink-50">
          <div className="container-page">
            <span className="label">What's wrong with most {ind.plural}' websites</span>
            <h2 className="text-h2-sm md:text-h2 text-ink-900 max-w-[720px]">
              We've seen these on every {ind.name} site we've audited
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {ind.pains.map((p) => (
                <li key={p} className="flex gap-3 rounded-lg border border-ink-200 bg-white p-6">
                  <span className="text-error flex-shrink-0 text-xl font-bold" aria-hidden="true">✗</span>
                  <p className="text-body text-ink-700">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features we include */}
        <section className="section bg-white">
          <div className="container-page">
            <span className="label">What you get</span>
            <h2 className="text-h2-sm md:text-h2 text-ink-900 max-w-[720px]">
              {ind.plural.charAt(0).toUpperCase() + ind.plural.slice(1)}-specific features in every build
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {ind.features.map((f) => (
                <li key={f} className="flex gap-3 rounded-lg border border-ink-200 bg-white p-6 shadow-card">
                  <span className="text-success flex-shrink-0 text-xl font-bold" aria-hidden="true">✓</span>
                  <p className="text-body text-ink-700">{f}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cities, grouped by metro */}
        {citiesServingThisIndustry.length > 0 && (
          <section className="section bg-ink-50">
            <div className="container-page">
              <span className="label">Where we work</span>
              <h2 className="text-h2-sm md:text-h2 text-ink-900">
                Websites for {ind.plural} in your city
              </h2>
              <p className="mt-3 text-body-lg text-ink-700 max-w-[640px]">
                Same flat-fee pricing in every city. Click your city for a
                page built specifically for {ind.plural} in your market.
              </p>
              <div className="mt-10 grid gap-8 md:grid-cols-3">
                {(["appleton", "san-jose", "vegas"] as const).map((metro) => {
                  const metroLabel =
                    metro === "appleton"
                      ? "Wisconsin"
                      : metro === "san-jose"
                      ? "Bay Area"
                      : "Las Vegas";
                  const inMetro = citiesServingThisIndustry.filter(
                    (c) => c.metro === metro
                  );
                  if (inMetro.length === 0) return null;
                  return (
                    <div key={metro}>
                      <h3 className="text-label uppercase text-orange-500">
                        {metroLabel}
                      </h3>
                      <ul className="mt-3 flex flex-col gap-2">
                        {inMetro.map((c) => (
                          <li key={c.slug}>
                            <Link
                              href={`/websites-for/${slug}/${c.slug}`}
                              className="block rounded-md border border-ink-200 bg-white px-4 py-2 text-body-sm text-ink-900 transition-colors duration-200 hover:border-orange-500 hover:text-orange-500"
                            >
                              {c.name}, {c.state}{" "}
                              <span aria-hidden="true">→</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Tier reminder + honest demo framing */}
        <section className="section bg-white">
          <div className="container-page text-center">
            <span className="label">Recommended tier</span>
            <h2 className="text-h2-sm md:text-h2 text-ink-900">
              {tier.name} · ${formatPrice(tier.flatPrice)} flat
            </h2>
            <p className="mt-3 text-body-lg text-ink-700 max-w-[640px] mx-auto">
              For most {ind.plural}, the <strong>{tier.name}</strong> tier is the right fit. {tier.features.join(" · ")}.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/#quote" className="btn btn-primary btn-lg">
                Get a free quote
              </Link>
              <Link href="/#pricing" className="btn btn-secondary btn-lg">
                See all 3 tiers
              </Link>
            </div>
            <p className="mt-6 text-body-sm text-ink-700 max-w-[560px] mx-auto">
              We don&apos;t have a demo specifically for {ind.plural} —{" "}
              <Link href="/examples" className="font-semibold text-orange-500 underline-offset-2 hover:underline">
                see our 3 tier concepts
              </Link>{" "}
              instead. We customize the design for your niche when we build.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MobilePhoneBar />
    </>
  );
}
