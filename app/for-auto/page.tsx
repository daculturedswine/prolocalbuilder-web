import type { Metadata } from "next";
import { AudienceHubPage } from "@/components/AudienceHubPage";
import { getAudienceByPath } from "@/lib/audiences";
import { site } from "@/lib/site";

const config = getAudienceByPath("for-auto")!;

export const metadata: Metadata = {
  title: `Websites for auto businesses · ${config.h1Accent.replace(/\.$/, "")}`,
  description: `${site.name} websites for auto repair, body shops, tire shops, detailers, and towing. Online appointment booking, certifications visible, mobile-fast.`,
  alternates: { canonical: `/${config.path}` },
};

export default function ForAutoPage() {
  return <AudienceHubPage config={config} />;
}
