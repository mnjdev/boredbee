import type { Metadata } from "next";
import { ToolGamePage } from "@/components/ContentPage";
import { DailyRiddle } from "@/components/game/DailyRiddle";
import { JsonLd } from "@/components/JsonLd";
import { commonFaqs } from "@/data/faqs";
import { createMetadata, webAppSchema } from "@/lib/seo";

const title = "Daily Riddle";
const description = "Solve today's deterministic date-based riddle and keep a local streak.";

export const metadata: Metadata = createMetadata({ title, description, path: "/daily/riddle" });

export default function Page() {
  return (
    <>
      <JsonLd data={webAppSchema({ name: title, description, path: "/daily/riddle", category: "GameApplication" })} />
      <ToolGamePage
        title={title}
        description={description}
        breadcrumbs={[{ name: "Daily", href: "/daily" }, { name: title, href: "/daily/riddle" }]}
        howItWorks={["The page uses today's date to choose a riddle from a local dataset of more than 30 riddles.", "Completion and streaks are stored in localStorage on your current browser."]}
        tips={["Read the hint only after you have one serious guess.", "Mark complete after revealing the answer to keep the streak honest."]}
        faqs={commonFaqs.dailyRiddle}
        related={["/play/memory-card-game", "/play/bored-button", "/party/would-you-rather"]}
      >
        <DailyRiddle />
      </ToolGamePage>
    </>
  );
}
