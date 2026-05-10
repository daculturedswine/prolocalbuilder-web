import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  industries,
  cities,
  getIndustry,
  getCity,
  citiesForIndustry,
  citiesIndustriesFor,
  seo,
  breadcrumbSchema,
} from "@/lib/seo";
import { site, tiers, formatPrice, teamMemberByMetro } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";
import { JsonLd } from "@/components/JsonLd";
import { TeamCard } from "@/components/TeamCard";

export function generateStaticParams() {
  const params: { industry: string; city: string }[] = [];
  for (const ind of industries) {
    for (const city of citiesForIndustry(ind.slug)) {
      params.push({ industry: ind.slug, city: city.slug });
    }
  }
  return params;
}

export const dynamicParams = false;

type Props = { params: Promise<{ industry: string; city: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: indSlug, city: citySlug } = await params;
  const ind = getIndustry(indSlug);
  const city = getCity(citySlug);
  if (!ind || !city) return {};
  const tier = tiers.find((t) => t.id === ind.tier);
  const url = `/websites-for/${indSlug}/${citySlug}`;
  const title = `Websites for ${ind.plural} in ${city.name}, ${city.state} · From $${tier?.flatPrice ?? 750} flat`;
  const description = `Custom websites for ${ind.plural} in ${city.name}, ${city.state}. Flat fee from $${tier?.flatPrice ?? 750}. Done in ${tier?.id === "starter" ? "5–7" : tier?.id === "professional" ? "7–10" : "10–14"} days. ${ind.features.slice(0, 2).join(". ")}.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CityIndustryPage({ params }: Props) {
  const { industry: indSlug, city: citySlug } = await params;
  const ind = getIndustry(indSlug);
  const city = getCity(citySlug);
  if (!ind || !city) notFound();

  const tier = tiers.find((t) => t.id === ind.tier);
  if (!tier) notFound();

  const url = `${seo.siteUrl}/websites-for/${indSlug}/${citySlug}`;
  const localBuilder = teamMemberByMetro(city.metro);

  // Other cities in the same metro that also serve this industry
  const sameMetroCities = cities
    .filter((c) => c.metro === city.metro && c.slug !== city.slug)
    .filter(
      (c) =>
        c.industries.includes(indSlug) ||
        citiesIndustriesFor(c).includes(indSlug)
    )
    .slice(0, 8);

  // Other industries we cover in the same city (to keep them on-site)
  const otherIndustriesHere = citiesIndustriesFor(city)
    .filter((s) => s !== indSlug)
    .map((s) => getIndustry(s))
    .filter((i): i is NonNullable<ReturnType<typeof getIndustry>> => Boolean(i))
    .slice(0, 6);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: `Website design for ${ind.plural} in ${city.name}, ${city.state}`,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${seo.siteUrl}/#business`,
      name: site.name,
      url: seo.siteUrl,
    },
    audience: { "@type": "BusinessAudience", audienceType: ind.plural },
    areaServed: {
      "@type": "City",
      name: `${city.name}, ${city.state}`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.geo.lat,
        longitude: city.geo.lng,
      },
    },
    description: `Custom websites for ${ind.plural} in ${city.name}, ${city.state}. ${ind.features.join(". ")}.`,
    offers: {
      "@type": "Offer",
      name: `${tier.name} website for ${ind.plural}`,
      price: tier.flatPrice,
      priceCurrency: "USD",
      areaServed: { "@type": "City", name: `${city.name}, ${city.state}` },
    },
  };

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: seo.siteUrl },
    { name: "By industry", url: `${seo.siteUrl}/websites-for` },
    { name: ind.plural, url: `${seo.siteUrl}/websites-for/${indSlug}` },
    { name: `${city.name}, ${city.state}`, url },
  ]);

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumb]} />
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        {/* Hero */}
        <section className="bg-white pt-12 pb-12 sm:pt-16 md:pt-20">
          <div className="container-page">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-700">
              <Link href="/" className="transition-colors duration-200 hover:text-ink-900">Home</Link>
              <span aria-hidden="true" className="mx-2 text-ink-300">/</span>
              <Link href="/websites-for" className="transition-colors duration-200 hover:text-ink-900">By industry</Link>
              <span aria-hidden="true" className="mx-2 text-ink-300">/</span>
              <Link href={`/websites-for/${indSlug}`} className="transition-colors duration-200 hover:text-ink-900">{ind.plural}</Link>
              <span aria-hidden="true" className="mx-2 text-ink-300">/</span>
              <span aria-current="page" className="text-ink-900 font-semibold">{city.name}, {city.state}</span>
            </nav>

            <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
              <div>
                <span className="badge-orange">
                  {ind.plural} · {city.name}, {city.state}
                </span>
                <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
                  Websites for {ind.plural} in {city.name}.{" "}
                  <span className="text-orange-500">${formatPrice(tier.flatPrice)} flat.</span>
                </h1>
                <p className="mt-5 text-body-lg text-ink-700 max-w-[600px]">
                  Custom websites for {ind.plural} serving {city.name}
                  {city.population
                    ? ` and the surrounding ${city.population.toLocaleString()}+ residents`
                    : " and the surrounding area"}
                  . Flat fee. Done in{" "}
                  {tier.id === "starter"
                    ? "5–7"
                    : tier.id === "professional"
                    ? "7–10"
                    : "10–14"}{" "}
                  days. {ind.features[0]}. {ind.features[1]}.
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

              <aside aria-label="Your local builder" className="md:max-w-[280px]">
                <div className="mb-4 text-label uppercase text-orange-500">
                  Your local builder
                </div>
                <TeamCard member={localBuilder} variant="card" />
                <p className="mt-4 text-body-sm text-ink-700">
                  {localBuilder.firstName} runs {ind.name} builds for our{" "}
                  {localBuilder.location.split(",")[0]} clients. Local. Same-day
                  reply.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="section bg-ink-50">
          <div className="container-page">
            <span className="label">Why most {ind.name} sites in {city.name} fail</span>
            <h2 className="text-h2-sm md:text-h2 text-ink-900 max-w-[720px]">
              We've seen these on every {ind.name} site we've audited
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {ind.pains.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 rounded-lg border border-ink-200 bg-white p-6"
                >
                  <span className="text-error flex-shrink-0 text-xl font-bold" aria-hidden="true">
                    ✗
                  </span>
                  <p className="text-body text-ink-700">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="section bg-white">
          <div className="container-page">
            <span className="label">What you get for {city.name}</span>
            <h2 className="text-h2-sm md:text-h2 text-ink-900 max-w-[720px]">
              {ind.plural[0].toUpperCase() + ind.plural.slice(1)}-specific features in every {city.name} build
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {ind.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 rounded-lg border border-ink-200 bg-white p-6 shadow-card"
                >
                  <span className="text-success flex-shrink-0 text-xl font-bold" aria-hidden="true">
                    ✓
                  </span>
                  <p className="text-body text-ink-700">{f}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tier reminder */}
        <section className="section bg-ink-50">
          <div className="container-page text-center">
            <span className="label">Recommended tier</span>
            <h2 className="text-h2-sm md:text-h2 text-ink-900">
              {tier.name} · ${formatPrice(tier.flatPrice)} flat
            </h2>
            <p className="mt-3 text-body-lg text-ink-700 max-w-[640px] mx-auto">
              For most {ind.plural} in {city.name}, the{" "}
              <strong>{tier.name}</strong> tier is the right fit. {tier.features.join(" · ")}.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/#quote" className="btn btn-primary btn-lg">
                Get a free quote
              </Link>
              <Link href="/#pricing" className="btn btn-secondary btn-lg">
                See all 3 tiers
              </Link>
            </div>
          </div>
        </section>

        {/* Same metro, same industry — adjacent city links */}
        {sameMetroCities.length > 0 && (
          <section className="section bg-white">
            <div className="container-page">
              <span className="label">Also serving</span>
              <h2 className="text-h2-sm md:text-h2 text-ink-900">
                {ind.plural[0].toUpperCase() + ind.plural.slice(1)} in nearby cities
              </h2>
              <p className="mt-3 text-body-lg text-ink-700 max-w-[640px]">
                Same flat-fee pricing. Same builder. Different city.
              </p>
              <ul className="mt-8 flex flex-wrap gap-3">
                {sameMetroCities.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/websites-for/${indSlug}/${c.slug}`}
                      className="inline-flex rounded-md border border-ink-200 bg-white px-4 py-2 text-body-sm text-ink-900 transition-colors duration-200 hover:border-orange-500 hover:text-orange-500"
                    >
                      {ind.name} websites in {c.name}, {c.state}{" "}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Other industries in this city */}
        {otherIndustriesHere.length > 0 && (
          <section className="section bg-ink-50">
            <div className="container-page">
              <span className="label">Other businesses in {city.name}</span>
              <h2 className="text-h2-sm md:text-h2 text-ink-900">
                Different industry? We cover those too.
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {otherIndustriesHere.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/websites-for/${other.slug}/${citySlug}`}
                      className="block rounded-md border border-ink-200 bg-white px-4 py-3 text-body-sm text-ink-900 transition-colors duration-200 hover:border-orange-500 hover:text-orange-500"
                    >
                      Websites for {other.plural} in {city.name}{" "}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <MobilePhoneBar />
    </>
  );
}
