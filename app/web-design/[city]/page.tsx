import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  cities,
  getCity,
  getIndustry,
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
  return cities.map((c) => ({ city: c.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const url = `/web-design/${slug}`;
  const title = `Website design in ${city.name}, ${city.state} · $895 flat`;
  const description = `Affordable website design for local businesses in ${city.name}, ${city.state}. ${tiers[0].flatPrice}–${formatPrice(tiers[2].flatPrice)} flat. Done in a week. No monthly fees.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const url = `${seo.siteUrl}/web-design/${slug}`;
  const localTopIndustries = city.industries
    .map((s) => getIndustry(s))
    .filter((i): i is NonNullable<ReturnType<typeof getIndustry>> => Boolean(i));
  // Full universal coverage so visitors see every niche we'll build
  const allCityIndustries = citiesIndustriesFor(city)
    .map((s) => getIndustry(s))
    .filter((i): i is NonNullable<ReturnType<typeof getIndustry>> => Boolean(i));
  const otherIndustries = allCityIndustries.filter(
    (i) => !city.industries.includes(i.slug)
  );
  const neighbors = city.nearby
    .map((s) => getCity(s))
    .filter((c): c is NonNullable<ReturnType<typeof getCity>> => Boolean(c));
  const localBuilder = teamMemberByMetro(city.metro);

  // Page-specific schema: Service with areaServed (SAB pattern from local-schema skill)
  const serviceSchemaForCity = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: `Website design in ${city.name}`,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${seo.siteUrl}/#business`,
      name: site.name,
      url: seo.siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: `${city.name}, ${city.state}`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.geo.lat,
        longitude: city.geo.lng,
      },
    },
    description: `Custom website design for local service businesses in ${city.name}. Flat-fee pricing from $${tiers[0].flatPrice} to $${formatPrice(tiers[2].flatPrice)}.`,
    offers: tiers.map((t) => ({
      "@type": "Offer",
      name: `${t.name} website`,
      price: t.flatPrice,
      priceCurrency: "USD",
      areaServed: { "@type": "City", name: `${city.name}, ${city.state}` },
    })),
  };

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: seo.siteUrl },
    { name: "Web design", url: `${seo.siteUrl}/web-design` },
    { name: `${city.name}, ${city.state}`, url },
  ]);

  return (
    <>
      <JsonLd data={[serviceSchemaForCity, breadcrumb]} />
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        {/* Hero */}
        <section className="bg-white pt-12 pb-12 sm:pt-16 md:pt-20">
          <div className="container-page">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-700">
              <Link href="/" className="transition-colors duration-200 hover:text-ink-900">
                Home
              </Link>
              <span aria-hidden="true" className="mx-2 text-ink-300">/</span>
              <Link href="/web-design" className="transition-colors duration-200 hover:text-ink-900">
                Web design
              </Link>
              <span aria-hidden="true" className="mx-2 text-ink-300">/</span>
              <span aria-current="page" className="text-ink-900 font-semibold">
                {city.name}, {city.state}
              </span>
            </nav>

            <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
              <div>
                <span className="badge-orange">
                  {city.name}, {city.state}
                </span>
                <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
                  Website design in {city.name}, {city.state}.{" "}
                  <span className="text-orange-500">$895 flat.</span>
                </h1>
                <p className="mt-5 text-body-lg text-ink-700 max-w-[600px]">
                  We build websites for local businesses in {city.name} and
                  the surrounding area. Flat-fee pricing from $
                  {tiers[0].flatPrice} to ${formatPrice(tiers[2].flatPrice)}.
                  Done in 7 to 14 days.
                  {city.population
                    ? ` Built for businesses serving ${city.population.toLocaleString()}+ residents in ${city.name}.`
                    : ""}
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

              {/* Local builder card. Auto-features the team member who lives here. */}
              <aside aria-label="Your local builder" className="md:max-w-[280px]">
                <div className="mb-4 text-label uppercase text-orange-500">
                  Your local builder
                </div>
                <TeamCard member={localBuilder} variant="card" />
                <p className="mt-4 text-body-sm text-ink-700">
                  {localBuilder.firstName} runs all builds for our{" "}
                  {localBuilder.location.split(",")[0]} clients. Calls and
                  emails come back the same day.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* Industries we serve in this city. Local-context section per local-landing-pages skill */}
        {localTopIndustries.length > 0 && (
          <section className="section bg-ink-50">
            <div className="container-page">
              <span className="label">Who we build for in {city.name}</span>
              <h2 className="text-h2-sm md:text-h2 text-ink-900 max-w-[720px]">
                The most common {city.name} businesses we work with
              </h2>
              <p className="mt-3 text-body-lg text-ink-700 max-w-[640px]">
                Pick your industry below to see what features we include for
                businesses like yours in {city.name}.
              </p>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {localTopIndustries.map((ind) => (
                  <li key={ind.slug}>
                    <Link
                      href={`/websites-for/${ind.slug}/${city.slug}`}
                      aria-label={`What we build for ${ind.plural} in ${city.name} — pricing and features`}
                      className="card block h-full"
                    >
                      <h3 className="text-h4 text-ink-900">
                        Websites for {ind.plural} in {city.name}
                      </h3>
                      <p className="mt-2 text-body-sm text-ink-700">
                        {ind.features[0]}. {ind.features[1]}. From $
                        {tiers.find((t) => t.id === ind.tier)?.flatPrice}.
                      </p>
                      <span aria-hidden="true" className="mt-4 inline-block text-body-sm font-semibold text-orange-500">
                        What we build for {ind.plural} in {city.name} →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Full niche coverage — every other industry we cover in this city */}
        {otherIndustries.length > 0 && (
          <section className="section bg-white">
            <div className="container-page">
              <span className="label">Every niche we cover in {city.name}</span>
              <h2 className="text-h2-sm md:text-h2 text-ink-900 max-w-[720px]">
                Whatever your business, we have a page for it
              </h2>
              <p className="mt-3 text-body-lg text-ink-700 max-w-[640px]">
                Pick your specific niche for industry-specific features and
                pricing.
              </p>
              <ul className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                {otherIndustries.map((ind) => (
                  <li key={ind.slug}>
                    <Link
                      href={`/websites-for/${ind.slug}/${city.slug}`}
                      className="block rounded-md border border-ink-200 bg-white px-4 py-3 text-body-sm text-ink-900 transition-colors duration-200 hover:border-orange-500 hover:text-orange-500"
                    >
                      Websites for {ind.plural} in {city.name}{" "}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Pricing reminder */}
        <section className="section bg-white">
          <div className="container-page">
            <span className="label">Pricing for {city.name}</span>
            <h2 className="text-h2-sm md:text-h2 text-ink-900">
              Three flat-fee tiers. Same price in every city we serve.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {tiers.map((t) => (
                <div
                  key={t.id}
                  className={[
                    "rounded-lg border bg-white p-7",
                    t.featured
                      ? "border-2 border-orange-500"
                      : "border-ink-200",
                  ].join(" ")}
                >
                  <div className="text-label uppercase text-navy-800">
                    {t.name}
                  </div>
                  <div className="mt-2 font-mono text-price-lg font-bold text-navy-800">
                    ${formatPrice(t.flatPrice)}
                  </div>
                  <div className="text-body-sm text-ink-700">
                    flat · one-time
                  </div>
                  <p className="mt-3 text-body-sm text-ink-700">
                    <span className="font-semibold">Best for:</span> {t.bestFor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby cities. Internal linking per local-landing-pages skill (hub-and-spoke) */}
        {neighbors.length > 0 && (
          <section className="section bg-ink-50">
            <div className="container-page">
              <span className="label">Also serving</span>
              <h2 className="text-h2-sm md:text-h2 text-ink-900">
                Nearby cities we work in
              </h2>
              <p className="mt-3 text-body-lg text-ink-700 max-w-[640px]">
                We build websites for local businesses across the {city.name}{" "}
                area. If you're nearby, we serve you too.
              </p>
              <ul className="mt-8 flex flex-wrap gap-3">
                {neighbors.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/web-design/${n.slug}`}
                      className="inline-flex rounded-md border border-ink-200 bg-white px-4 py-2 text-body-sm text-ink-900 transition-colors duration-200 hover:border-orange-500 hover:text-orange-500"
                    >
                      Web design in {n.name}, {n.state}{" "}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA */}
        <section id="quote" className="section bg-white">
          <div className="container-narrow">
            <div className="rounded-lg border border-ink-200 bg-white p-10 text-center shadow-card-hover">
              <span className="label">Ready to start?</span>
              <h2 className="text-h2-sm md:text-h2 text-ink-900">
                Get a free quote for your {city.name} business
              </h2>
              <p className="mt-3 text-body-lg text-ink-700">
                Same-day reply, weekdays. Pick whichever's easier.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="/#quote"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Send a quote request
                </Link>
                <a
                  href={site.contact.phoneHref}
                  aria-label={`Call ${site.contact.phone}`}
                  className="btn btn-secondary btn-lg btn-block"
                >
                  <span aria-hidden="true">📞</span> Call · {site.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobilePhoneBar />
    </>
  );
}
