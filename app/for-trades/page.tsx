import type { Metadata } from "next";
import { AudienceHubPage } from "@/components/AudienceHubPage";
import { getAudienceByPath } from "@/lib/audiences";
import { site } from "@/lib/site";

const config = getAudienceByPath("for-trades")!;

export const metadata: Metadata = {
  title: `Websites for trades · ${config.h1Accent.replace(/\.$/, "")}`,
  description: `${site.name} websites for plumbers, HVAC, electricians, roofers, painters, landscapers, cleaners, and other trades. Phone-first, fast, ranks locally.`,
  alternates: { canonical: `/${config.path}` },
};

export default function ForTradesPage() {
  return <AudienceHubPage config={config} />;
}
