import type { Metadata } from "next";
import { BoredButtonGame } from "@/components/game/BoredButtonGame";
import { ToolGamePage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { commonFaqs } from "@/data/faqs";
import { createMetadata, webAppSchema } from "@/lib/seo";

const title = "Bored Button";
const description = "Press the Bored Button for a random quick game, useful tool, party prompt, or tiny reset idea.";

export const metadata: Metadata = createMetadata({ title, description, path: "/play/bored-button" });

export default function Page() {
  return (
    <>
      <JsonLd data={webAppSchema({ name: title, description, path: "/play/bored-button", category: "GameApplication" })} />
      <ToolGamePage
        title={title}
        description={description}
        breadcrumbs={[{ name: "Play", href: "/play" }, { name: title, href: "/play/bored-button" }]}
        howItWorks={["The button picks from a local list of safe activities and links to BoredBee pages where possible.", "No account or backend is involved. Some recent picks may be saved on your device for convenience."]}
        tips={["Use it when you want a quick decision instead of another scroll.", "Share a picked activity with a friend if the Web Share button is available."]}
        faqs={commonFaqs.boredButton}
        related={["/play/reaction-test", "/daily/riddle", "/tools/word-counter"]}
      >
        <BoredButtonGame />
      </ToolGamePage>
    </>
  );
}
