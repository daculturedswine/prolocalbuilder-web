import type { Metadata } from "next";
import { AudienceHubPage } from "@/components/AudienceHubPage";
import { getAudienceByPath } from "@/lib/audiences";
import { site } from "@/lib/site";

const config = getAudienceByPath("for-medical")!;

export const metadata: Metadata = {
  title: `Websites for medical practices · ${config.h1Accent.replace(/\.$/, "")}`,
  description: `${site.name} websites for dentists, orthodontists, chiropractors, vets, optometrists, dermatologists, and physical therapy. Online booking, insurance lists, intake forms.`,
  alternates: { canonical: `/${config.path}` },
};

export default function ForMedicalPage() {
  return <AudienceHubPage config={config} />;
}
