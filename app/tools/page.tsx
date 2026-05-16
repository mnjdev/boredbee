import type { Metadata } from "next";
import { HubPage } from "@/components/ContentPage";
import { ContentCard } from "@/components/ui/Card";
import { tools } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Tools",
  description: "Useful no-login calculators and text tools, including EMI, SIP, fuel cost, word count, and date difference.",
  path: "/tools"
});

export default function ToolsPage() {
  return (
    <HubPage title="Tools" description="Small calculators and utilities that answer the question without asking for an account." breadcrumbs={[{ name: "Tools", href: "/tools" }]}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{tools.map((item) => <ContentCard key={item.href} item={item} />)}</div>
    </HubPage>
  );
}
