import type { Metadata } from "next";
import { ToolGamePage } from "@/components/ContentPage";
import { TruthOrDareGenerator } from "@/components/game/TruthOrDareGenerator";
import { JsonLd } from "@/components/JsonLd";
import { commonFaqs } from "@/data/faqs";
import { createMetadata, webAppSchema } from "@/lib/seo";

const title = "Truth or Dare";
const description = "Generate clean truth or dare prompts for family-friendly parties and quick group games.";

export const metadata: Metadata = createMetadata({ title, description, path: "/party/truth-or-dare" });

export default function Page() {
  return (
    <>
      <JsonLd data={webAppSchema({ name: title, description, path: "/party/truth-or-dare", category: "GameApplication" })} />
      <ToolGamePage
        title={title}
        description={description}
        breadcrumbs={[{ name: "Party", href: "/party" }, { name: title, href: "/party/truth-or-dare" }]}
        howItWorks={["Choose Truth, Dare, or Mixed, then press next prompt to pull from a local clean prompt set.", "Prompts are designed to be simple, playful, and safe for mixed groups."]}
        tips={["Let people skip one prompt per round to keep the mood easy.", "Use Mixed when nobody wants to manage turns."]}
        faqs={commonFaqs.truthOrDare}
        related={["/party/would-you-rather", "/play/bored-button", "/daily/riddle"]}
      >
        <TruthOrDareGenerator />
      </ToolGamePage>
    </>
  );
}
