import type { Metadata } from "next";
import { AudienceHubPage } from "@/components/AudienceHubPage";
import { getAudienceByPath } from "@/lib/audiences";
import { site } from "@/lib/site";

const config = getAudienceByPath("for-professional-services")!;

export const metadata: Metadata = {
  title: `Websites for professional services · ${config.h1Accent.replace(/\.$/, "")}`,
  description: `${site.name} websites for lawyers, accountants, financial advisors, insurance agents, mortgage brokers, and realtors. Practice-area pages, intake forms, conversion-focused.`,
  alternates: { canonical: `/${config.path}` },
};

export default function ForProfessionalServicesPage() {
  return <AudienceHubPage config={config} />;
}
