import type { Metadata } from "next";
import { AudienceHubPage } from "@/components/AudienceHubPage";
import { getAudienceByPath } from "@/lib/audiences";
import { site } from "@/lib/site";

const config = getAudienceByPath("for-restaurants")!;

export const metadata: Metadata = {
  title: `Websites for restaurants & food · ${config.h1Accent.replace(/\.$/, "")}`,
  description: `${site.name} websites for restaurants, bakeries, coffee shops, food trucks, florists, wedding venues, and funeral homes. Mobile menus, reservations, hours synced.`,
  alternates: { canonical: `/${config.path}` },
};

export default function ForRestaurantsPage() {
  return <AudienceHubPage config={config} />;
}
