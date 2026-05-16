import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms",
  description: "Terms for using BoredBee tools, games, prompts, and explainers.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <Container className="py-10">
      <Breadcrumbs items={[{ name: "Terms", href: "/terms" }]} />
      <article className="prose-lite max-w-3xl">
        <h1 className="text-4xl font-black tracking-normal sm:text-5xl">Terms</h1>
        <p>BoredBee is provided for casual entertainment and general informational use. Use the tools as helpful estimates, not as professional advice.</p>
        <h2>No financial advice</h2>
        <p>EMI, SIP, and cost calculators are simplified educational tools. Verify important decisions with qualified professionals or official sources.</p>
        <h2>Acceptable use</h2>
        <p>Do not misuse the site, attempt to disrupt it, or present generated results as certified professional outputs.</p>
      </article>
    </Container>
  );
}
