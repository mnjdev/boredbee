import type { Metadata } from "next";
import { ToolGamePage } from "@/components/ContentPage";
import { FuelCostCalculator } from "@/components/game/FuelCostCalculator";
import { JsonLd } from "@/components/JsonLd";
import { commonFaqs } from "@/data/faqs";
import { createMetadata, webAppSchema } from "@/lib/seo";

const title = "Fuel Cost Calculator";
const description = "Estimate cost per trip, monthly fuel cost, and yearly fuel cost with India-friendly defaults.";

export const metadata: Metadata = createMetadata({ title, description, path: "/tools/fuel-cost-calculator" });

export default function Page() {
  return (
    <>
      <JsonLd data={webAppSchema({ name: title, description, path: "/tools/fuel-cost-calculator", category: "UtilityApplication" })} />
      <ToolGamePage
        title={title}
        description={description}
        breadcrumbs={[{ name: "Tools", href: "/tools" }, { name: title, href: "/tools/fuel-cost-calculator" }]}
        howItWorks={["Fuel used is distance divided by mileage. Trip cost is fuel used multiplied by fuel price.", "Monthly and yearly estimates multiply trip cost by the trips-per-month value."]}
        tips={["Use realistic mileage from your own vehicle, not only the brochure number.", "For round trips, enter the full total distance."]}
        faqs={commonFaqs.fuel}
        related={["/tools/emi-calculator", "/tools/date-difference-calculator", "/play/bored-button"]}
      >
        <FuelCostCalculator />
      </ToolGamePage>
    </>
  );
}
