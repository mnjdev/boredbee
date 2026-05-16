import type { Metadata } from "next";
import { ToolGamePage } from "@/components/ContentPage";
import { EmiCalculator } from "@/components/game/EmiCalculator";
import { JsonLd } from "@/components/JsonLd";
import { commonFaqs } from "@/data/faqs";
import { createMetadata, webAppSchema } from "@/lib/seo";

const title = "EMI Calculator";
const description = "Calculate monthly EMI, total interest, and total payment for a loan.";

export const metadata: Metadata = createMetadata({ title, description, path: "/tools/emi-calculator" });

export default function Page() {
  return (
    <>
      <JsonLd data={webAppSchema({ name: title, description, path: "/tools/emi-calculator", category: "FinanceApplication" })} />
      <ToolGamePage
        title={title}
        description={description}
        breadcrumbs={[{ name: "Tools", href: "/tools" }, { name: title, href: "/tools/emi-calculator" }]}
        howItWorks={["EMI = P x R x (1 + R)^N / ((1 + R)^N - 1), where P is principal, R is monthly interest rate, and N is months.", "The calculator also multiplies EMI by tenure to estimate total payment and subtracts principal to estimate interest."]}
        tips={["Compare shorter and longer tenures before deciding.", "Check lender fees separately because they are not included in this simple estimate."]}
        faqs={commonFaqs.emi}
        related={["/explain/what-is-emi", "/tools/sip-calculator", "/tools/fuel-cost-calculator"]}
      >
        <EmiCalculator />
      </ToolGamePage>
    </>
  );
}
