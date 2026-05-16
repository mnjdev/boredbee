import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: "Contact BoredBee for feedback, corrections, ads, and collaboration inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <Container className="py-10">
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <article className="prose-lite max-w-3xl">
        <h1 className="text-4xl font-black tracking-normal sm:text-5xl">Contact</h1>
        <p>For feedback, corrections, advertising questions, or new tool suggestions, email {site.email}.</p>
        <p>Please include the page URL, what you expected, and what happened. That makes fixes much faster.</p>
      </article>
    </Container>
  );
}
