import type { Metadata } from "next";
import { HubPage } from "@/components/ContentPage";
import { ContentCard } from "@/components/ui/Card";
import { explainItems } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Explain",
  description: "Beginner-friendly explainers for BoredBee tools and games.",
  path: "/explain"
});

export default function ExplainPage() {
  return (
    <HubPage title="Explain" description="Plain-English guides for money tools, speed tests, typing scores, and using BoredBee well." breadcrumbs={[{ name: "Explain", href: "/explain" }]}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{explainItems.map((item) => <ContentCard key={item.href} item={item} />)}</div>
    </HubPage>
  );
}
