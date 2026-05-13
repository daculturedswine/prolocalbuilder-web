import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { demos, getDemo } from "@/lib/demos";
import { DemoSubChrome } from "@/components/demos/_shared/DemoSubChrome";
import {
  PageEyebrow,
  PageHeading,
  PageLede,
  Card,
  CardGrid,
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
  const url = `/examples/${slug}/services`;
  const title = `Services · ${demo.businessName} (concept)`;
  const description = `What ${demo.businessName} does — every service we offer, on one page.`;
  return { title, description, alternates: { canonical: url }, robots: { index: true, follow: true } };
}

export default async function ServicesPage({ params }: Props) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) notFound();
  const theme = themeForSlug(slug);
  const hasDetailPages = demo.tier !== "starter";

  return (
    <DemoSubChrome demo={demo} currentPath="services">
      <PageEyebrow theme={theme}>What we do</PageEyebrow>
      <PageHeading theme={theme}>
        {demo.tier === "starter"
          ? "Everything we offer, in one place."
          : demo.tier === "professional"
          ? "Four services. One crew. Done right."
          : "A full range of dental care, thoughtfully delivered."}
      </PageHeading>
      <PageLede theme={theme}>
        {demo.tier === "starter"
          ? `Pick a service to learn more, or call ${demo.fakePhone} and we'll quote on the phone.`
          : hasDetailPages
          ? `Each service has its own page with the details — what's included, who it's for, and what it costs.`
          : "Each service has its own dedicated page with the details."}
      </PageLede>

      <CardGrid>
        {demo.services.map((s) => (
          <Card
            key={s.slug}
            meta={s.title}
            title={s.pitch ?? s.title}
            body={s.body}
            theme={theme}
            href={hasDetailPages ? `/examples/${slug}/services/${s.slug}` : undefined}
          />
        ))}
      </CardGrid>

      {!hasDetailPages && (
        <p
          className="mt-12 max-w-[640px] text-[14px] leading-[1.6]"
          style={{ color: theme.inkSoft }}
        >
          Starter tier sites keep services on a single page — easier to scan, less for the
          customer to click through. Upgrade to Professional or Premium and each service gets
          its own dedicated page with details, photos, and a service-specific booking form.
        </p>
      )}
    </DemoSubChrome>
  );
}
