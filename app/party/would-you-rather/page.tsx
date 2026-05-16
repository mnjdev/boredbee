import type { Metadata } from "next";
import { ToolGamePage } from "@/components/ContentPage";
import { WouldYouRatherGenerator } from "@/components/game/WouldYouRatherGenerator";
import { JsonLd } from "@/components/JsonLd";
import { commonFaqs } from "@/data/faqs";
import { createMetadata, webAppSchema } from "@/lib/seo";

const title = "Would You Rather";
const description = "Generate clean would-you-rather prompts with local-only voting on your device.";

export const metadata: Metadata = createMetadata({ title, description, path: "/party/would-you-rather" });

export default function Page() {
  return (
    <>
      <JsonLd data={webAppSchema({ name: title, description, path: "/party/would-you-rather", category: "GameApplication" })} />
      <ToolGamePage
        title={title}
        description={description}
        breadcrumbs={[{ name: "Party", href: "/party" }, { name: title, href: "/party/would-you-rather" }]}
        howItWorks={["Each round shows two clean options. Tap an option to add a vote stored only on this device.", "The next button advances through the prompt list without needing accounts or a backend."]}
        tips={["Ask people to explain their choice before voting.", "Reset local votes when a new group starts playing."]}
        faqs={commonFaqs.wouldYouRather}
        related={["/party/truth-or-dare", "/play/bored-button", "/play/reaction-test"]}
      >
        <WouldYouRatherGenerator />
      </ToolGamePage>
    </>
  );
}
