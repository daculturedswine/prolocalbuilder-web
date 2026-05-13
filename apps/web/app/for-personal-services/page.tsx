import type { Metadata } from "next";
import { AudienceHubPage } from "@/components/AudienceHubPage";
import { getAudienceByPath } from "@/lib/audiences";
import { site } from "@/lib/site";

const config = getAudienceByPath("for-personal-services")!;

export const metadata: Metadata = {
  title: `Websites for personal-service businesses · ${config.h1Accent.replace(/\.$/, "")}`,
  description: `${site.name} websites for salons, gyms, yoga studios, photographers, tattoo studios, pet groomers, daycares, and med spas. Online booking, portfolios, transparent pricing.`,
  alternates: { canonical: `/${config.path}` },
};

export default function ForPersonalServicesPage() {
  return <AudienceHubPage config={config} />;
}
