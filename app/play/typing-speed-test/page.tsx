import type { Metadata } from "next";
import { ToolGamePage } from "@/components/ContentPage";
import { TypingSpeedTest } from "@/components/game/TypingSpeedTest";
import { JsonLd } from "@/components/JsonLd";
import { commonFaqs } from "@/data/faqs";
import { createMetadata, webAppSchema } from "@/lib/seo";

const title = "Typing Speed Test";
const description = "Measure typing WPM and accuracy with a short local paragraph and no login.";

export const metadata: Metadata = createMetadata({ title, description, path: "/play/typing-speed-test" });

export default function Page() {
  return (
    <>
      <JsonLd data={webAppSchema({ name: title, description, path: "/play/typing-speed-test", category: "GameApplication" })} />
      <ToolGamePage
        title={title}
        description={description}
        breadcrumbs={[{ name: "Play", href: "/play" }, { name: title, href: "/play/typing-speed-test" }]}
        howItWorks={["BoredBee starts timing when you begin typing and estimates WPM with the common five-characters-per-word method.", "Accuracy compares your typed characters with the target paragraph."]}
        tips={["Read a few words ahead and keep your hands relaxed.", "Accuracy matters. Slow down slightly if errors are piling up."]}
        faqs={commonFaqs.typing}
        related={["/explain/how-typing-speed-is-calculated", "/tools/word-counter", "/play/reaction-test"]}
      >
        <TypingSpeedTest />
      </ToolGamePage>
    </>
  );
}
