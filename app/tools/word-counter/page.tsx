import type { Metadata } from "next";
import { ToolGamePage } from "@/components/ContentPage";
import { WordCounter } from "@/components/game/WordCounter";
import { JsonLd } from "@/components/JsonLd";
import { commonFaqs } from "@/data/faqs";
import { createMetadata, webAppSchema } from "@/lib/seo";

const title = "Word Counter";
const description = "Count words, characters, sentences, paragraphs, and estimated reading time locally.";

export const metadata: Metadata = createMetadata({ title, description, path: "/tools/word-counter" });

export default function Page() {
  return (
    <>
      <JsonLd data={webAppSchema({ name: title, description, path: "/tools/word-counter", category: "UtilityApplication" })} />
      <ToolGamePage
        title={title}
        description={description}
        breadcrumbs={[{ name: "Tools", href: "/tools" }, { name: title, href: "/tools/word-counter" }]}
        howItWorks={["The tool counts words from whitespace-separated text, characters from raw text, and paragraphs from blank-line breaks.", "Reading time uses a simple 200 words-per-minute estimate. Your text stays in the browser."]}
        tips={["Use it for captions, drafts, essays, meta descriptions, and quick reading estimates.", "Blank lines help the paragraph counter understand separate blocks."]}
        faqs={commonFaqs.word}
        related={["/play/typing-speed-test", "/explain/how-typing-speed-is-calculated", "/tools/date-difference-calculator"]}
      >
        <WordCounter />
      </ToolGamePage>
    </>
  );
}
