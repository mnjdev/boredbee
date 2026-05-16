import type { Metadata } from "next";
import { DisplayAd } from "@/components/ads/DisplayAd";
import { Hero } from "@/components/layout/Hero";
import { RecentActivity } from "@/components/RecentActivity";
import { SectionHeader } from "@/components/SectionHeader";
import { ButtonLink } from "@/components/ui/Button";
import { ContentCard } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { dailyItems, games, partyItems, popularNow, recentlyAdded, site, tools } from "@/data/site";
import { createMetadata, websiteSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = createMetadata({
  title: site.name,
  description: site.description,
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <Hero
        eyebrow="No-login boredom antidote"
        title="BoredBee"
        subtitle={site.tagline}
        primary={{ href: "/play/bored-button", label: "I am bored" }}
        secondary={{ href: "/tools", label: "Use a tool" }}
      >
        <div className="rounded-lg border border-border bg-card p-5 shadow-soft">
          <p className="text-sm font-black uppercase tracking-wide text-foreground/55">Daily Challenge</p>
          <h2 className="mt-2 text-2xl font-black">{dailyItems[0].title}</h2>
          <p className="mt-2 leading-7 text-foreground/70">{dailyItems[0].description}</p>
          <ButtonLink className="mt-5" href={dailyItems[0].href} variant="secondary">
            Start today&apos;s riddle
          </ButtonLink>
        </div>
      </Hero>
      <Container className="space-y-14 py-10">
        <DisplayAd />
        <section>
          <SectionHeader eyebrow="Play" title="Tiny games for quick sparks" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{games.map((item) => <ContentCard key={item.href} item={item} />)}</div>
        </section>
        <section>
          <SectionHeader eyebrow="Party" title="Clean prompts for group chaos, politely" />
          <div className="grid gap-4 sm:grid-cols-2">{partyItems.map((item) => <ContentCard key={item.href} item={item} />)}</div>
        </section>
        <section>
          <SectionHeader eyebrow="Tools" title="Useful answers without a spreadsheet detour" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{tools.slice(0, 3).map((item) => <ContentCard key={item.href} item={item} />)}</div>
        </section>
        <DisplayAd />
        <section className="grid gap-6 lg:grid-cols-[1fr_280px]">
          <div>
            <SectionHeader eyebrow="Popular Now" title="Fast picks people actually use" />
            <div className="grid gap-4 sm:grid-cols-2">{popularNow.slice(0, 4).map((item) => <ContentCard key={item.href} item={item} />)}</div>
          </div>
          <RecentActivity />
        </section>
        <section>
          <SectionHeader eyebrow="Recently Added" title="Freshly wired into the hive" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{recentlyAdded.slice(0, 4).map((item) => <ContentCard key={item.href} item={item} />)}</div>
        </section>
        <section className="rounded-lg border border-border bg-card p-6 text-center shadow-soft">
          <h2 className="text-3xl font-black">Still bored?</h2>
          <p className="mx-auto mt-3 max-w-xl text-foreground/70">Let the button choose something small, useful, or mildly ridiculous.</p>
          <ButtonLink className="mt-5" href="/play/bored-button">Random boredom CTA</ButtonLink>
        </section>
      </Container>
    </>
  );
}
