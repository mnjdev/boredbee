import type { Metadata } from "next";
import { HubPage } from "@/components/ContentPage";
import { ContentCard } from "@/components/ui/Card";
import { games } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Play",
  description: "Quick no-login mini-games on BoredBee, including reaction test, memory cards, typing speed, and the Bored Button.",
  path: "/play"
});

export default function PlayPage() {
  return (
    <HubPage title="Play" description="Fast mini-games for short breaks, bored afternoons, and tiny focus resets." breadcrumbs={[{ name: "Play", href: "/play" }]}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{games.map((item) => <ContentCard key={item.href} item={item} />)}</div>
    </HubPage>
  );
}
