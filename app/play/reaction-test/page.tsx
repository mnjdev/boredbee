import type { Metadata } from "next";
import { ToolGamePage } from "@/components/ContentPage";
import { ReactionTestGame } from "@/components/game/ReactionTestGame";
import { JsonLd } from "@/components/JsonLd";
import { commonFaqs } from "@/data/faqs";
import { createMetadata, webAppSchema } from "@/lib/seo";

const title = "Reaction Test";
const description = "A simple browser reaction speed test that saves your best score locally.";

export const metadata: Metadata = createMetadata({ title, description, path: "/play/reaction-test" });

export default function Page() {
  return (
    <>
      <JsonLd data={webAppSchema({ name: title, description, path: "/play/reaction-test", category: "GameApplication" })} />
      <ToolGamePage
        title={title}
        description={description}
        breadcrumbs={[{ name: "Play", href: "/play" }, { name: title, href: "/play/reaction-test" }]}
        howItWorks={["Press start, wait through a random delay, then click as soon as the amber signal appears.", "The score is the browser-measured time between the signal and your click or tap."]}
        tips={["Keep your pointer or finger ready, but do not click before the signal.", "Compare scores on the same device for the fairest trend."]}
        faqs={commonFaqs.reaction}
        related={["/explain/how-reaction-time-works", "/play/typing-speed-test", "/play/memory-card-game"]}
      >
        <ReactionTestGame />
      </ToolGamePage>
    </>
  );
}
