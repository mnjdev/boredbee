import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy",
  description: "BoredBee privacy policy covering no-login usage, localStorage, analytics-ready design, and ads.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <Container className="py-10">
      <Breadcrumbs items={[{ name: "Privacy", href: "/privacy" }]} />
      <article className="prose-lite max-w-3xl">
        <h1 className="text-4xl font-black tracking-normal sm:text-5xl">Privacy</h1>
        <p>BoredBee does not require login and does not create user accounts. Interactive tools run in your browser.</p>
        <h2>Local storage</h2>
        <p>BoredBee may save dark mode preference, daily streak, last completed daily challenge date, best reaction time, best typing speed, recent activity, and local votes on your device. Clearing browser data removes this information.</p>
        <h2>Text and calculator inputs</h2>
        <p>Word counter text and calculator inputs are processed locally in the browser. They are not submitted to a backend account system.</p>
        <h2>Advertising</h2>
        <p>The codebase includes an optional Google AdSense structure. Ads are disabled until configured with a publisher ID and enabled through environment variables.</p>
      </article>
    </Container>
  );
}
