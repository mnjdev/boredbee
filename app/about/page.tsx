import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "Learn what BoredBee is: a no-login network of tiny games, smart tools, quick fixes, and explainers.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <Container className="py-10">
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
      <article className="prose-lite max-w-3xl">
        <h1 className="text-4xl font-black tracking-normal sm:text-5xl">About BoredBee</h1>
        <p>BoredBee is a lightweight website for moments when your brain wants something quick but useful: a tiny game, a daily riddle, a clean party prompt, a practical calculator, or a simple explanation.</p>
        <h2>No login, by design</h2>
        <p>The site does not use accounts, profiles, or a database. Preferences, streaks, recent activity, and best scores stay in localStorage on your device.</p>
        <h2>Built for fast visits</h2>
        <p>BoredBee is static-first, responsive, and intentionally simple. It is designed to work well on mobile connections and to be easy to expand with more tools and games.</p>
      </article>
    </Container>
  );
}
