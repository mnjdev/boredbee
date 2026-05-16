import type { Metadata } from "next";
import { ToolGamePage } from "@/components/ContentPage";
import { MemoryCardGame } from "@/components/game/MemoryCardGame";
import { JsonLd } from "@/components/JsonLd";
import { commonFaqs } from "@/data/faqs";
import { createMetadata, webAppSchema } from "@/lib/seo";

const title = "Memory Card Game";
const description = "Play a simple 4x4 memory matching game with move count, timer, and local best result.";

export const metadata: Metadata = createMetadata({ title, description, path: "/play/memory-card-game" });

export default function Page() {
  return (
    <>
      <JsonLd data={webAppSchema({ name: title, description, path: "/play/memory-card-game", category: "GameApplication" })} />
      <ToolGamePage
        title={title}
        description={description}
        breadcrumbs={[{ name: "Play", href: "/play" }, { name: title, href: "/play/memory-card-game" }]}
        howItWorks={["Flip two cards at a time. Matching symbols stay open; non-matches flip back after a short pause.", "The game tracks moves and time on your device only."]}
        tips={["Use the first few moves to map positions instead of guessing quickly.", "Keyboard players can tab to cards and press Enter or Space."]}
        faqs={commonFaqs.memory}
        related={["/daily/riddle", "/play/reaction-test", "/play/bored-button"]}
      >
        <MemoryCardGame />
      </ToolGamePage>
    </>
  );
}
