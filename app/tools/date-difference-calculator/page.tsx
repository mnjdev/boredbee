import type { Metadata } from "next";
import { ToolGamePage } from "@/components/ContentPage";
import { DateDifferenceCalculator } from "@/components/game/DateDifferenceCalculator";
import { JsonLd } from "@/components/JsonLd";
import { commonFaqs } from "@/data/faqs";
import { createMetadata, webAppSchema } from "@/lib/seo";

const title = "Date Difference Calculator";
const description = "Calculate days, weeks plus days, approximate months, and approximate years between dates.";

export const metadata: Metadata = createMetadata({ title, description, path: "/tools/date-difference-calculator" });

export default function Page() {
  return (
    <>
      <JsonLd data={webAppSchema({ name: title, description, path: "/tools/date-difference-calculator", category: "UtilityApplication" })} />
      <ToolGamePage
        title={title}
        description={description}
        breadcrumbs={[{ name: "Tools", href: "/tools" }, { name: title, href: "/tools/date-difference-calculator" }]}
        howItWorks={["Choose a start and end date. BoredBee calculates the day difference at local midnight.", "The include-end-date toggle adds one day for inclusive ranges. Months and years are approximate."]}
        tips={["Use include end date for counting vacation days or event spans where both dates count.", "For legal, payroll, or contract deadlines, verify with the relevant official rule."]}
        faqs={commonFaqs.date}
        related={["/tools/fuel-cost-calculator", "/tools/word-counter", "/daily/riddle"]}
      >
        <DateDifferenceCalculator />
      </ToolGamePage>
    </>
  );
}
