import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Advertise",
  description: "Advertising information for BoredBee, including safe ad placement principles and contact details.",
  path: "/advertise"
});

export default function AdvertisePage() {
  return (
    <Container className="py-10">
      <Breadcrumbs items={[{ name: "Advertise", href: "/advertise" }]} />
      <article className="prose-lite max-w-3xl">
        <h1 className="text-4xl font-black tracking-normal sm:text-5xl">Advertise</h1>
        <p>BoredBee is designed to be ad-ready with calm, clearly labelled placements that do not sit on top of game buttons or mislead users.</p>
        <h2>Ad philosophy</h2>
        <p>Ads should be non-intrusive, separated from interactive controls, and clearly labelled. No pop-unders, forced redirects, deceptive download buttons, or auto-click behaviour belong here.</p>
        <h2>Contact</h2>
        <p>For sponsorship or ad inquiries, contact {site.email}.</p>
      </article>
    </Container>
  );
}
