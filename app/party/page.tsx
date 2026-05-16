import type { Metadata } from "next";
import { HubPage } from "@/components/ContentPage";
import { ContentCard } from "@/components/ui/Card";
import { partyItems } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Party",
  description: "Clean party prompts for truth or dare and would-you-rather games.",
  path: "/party"
});

export default function PartyPage() {
  return (
    <HubPage title="Party" description="Family-friendly prompts for when the room needs a small spark and nobody wants complicated rules." breadcrumbs={[{ name: "Party", href: "/party" }]}>
      <div className="grid gap-4 sm:grid-cols-2">{partyItems.map((item) => <ContentCard key={item.href} item={item} />)}</div>
    </HubPage>
  );
}
