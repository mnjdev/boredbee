import type { Metadata } from "next";
import { HubPage } from "@/components/ContentPage";
import { ContentCard } from "@/components/ui/Card";
import { dailyItems } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Daily Challenge",
  description: "Daily no-login BoredBee challenges with local streak tracking.",
  path: "/daily"
});

export default function DailyPage() {
  return (
    <HubPage title="Daily Challenge" description="A small brain nudge that changes by date and keeps your streak on this device." breadcrumbs={[{ name: "Daily", href: "/daily" }]}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{dailyItems.map((item) => <ContentCard key={item.href} item={item} />)}</div>
    </HubPage>
  );
}
