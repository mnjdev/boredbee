import type { Metadata } from "next";
import { ToolGamePage } from "@/components/ContentPage";
import { SipCalculator } from "@/components/game/SipCalculator";
import { JsonLd } from "@/components/JsonLd";
import { commonFaqs } from "@/data/faqs";
import { createMetadata, webAppSchema } from "@/lib/seo";

const title = "SIP Calculator";
const description = "Estimate SIP invested amount, returns, and total future value.";

export const metadata: Metadata = createMetadata({ title, description, path: "/tools/sip-calculator" });

export default function Page() {
  return (
    <>
      <JsonLd data={webAppSchema({ name: title, description, path: "/tools/sip-calculator", category: "FinanceApplication" })} />
      <ToolGamePage
        title={title}
        description={description}
        breadcrumbs={[{ name: "Tools", href: "/tools" }, { name: title, href: "/tools/sip-calculator" }]}
        howItWorks={["The calculator compounds each monthly investment using the expected annual return converted to a monthly rate.", "It shows invested amount, estimated returns, and total value before taxes or fees."]}
        tips={["Treat expected return as an assumption, not a promise.", "Try longer durations to see how compounding changes the estimate."]}
        faqs={commonFaqs.sip}
        related={["/explain/what-is-sip", "/tools/emi-calculator", "/explain/what-is-emi"]}
      >
        <SipCalculator />
      </ToolGamePage>
    </>
  );
}
