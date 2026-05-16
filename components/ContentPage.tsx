import type { ReactNode } from "react";
import { DisplayAd } from "./ads/DisplayAd";
import { InArticleAd } from "./ads/InArticleAd";
import { Breadcrumbs } from "./Breadcrumbs";
import { FAQ } from "./FAQ";
import { RelatedLinks } from "./RelatedLinks";
import { Container } from "./ui/Container";
import type { FAQItem } from "@/data/faqs";

export function HubPage({
  title,
  description,
  breadcrumbs,
  children
}: {
  title: string;
  description: string;
  breadcrumbs: { name: string; href: string }[];
  children: ReactNode;
}) {
  return (
    <Container className="py-10">
      <Breadcrumbs items={breadcrumbs} />
      <header className="max-w-3xl">
        <h1 className="text-4xl font-black tracking-normal sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg leading-8 text-foreground/72">{description}</p>
      </header>
      <DisplayAd />
      <div className="mt-8">{children}</div>
    </Container>
  );
}

export function ToolGamePage({
  title,
  description,
  breadcrumbs,
  children,
  howItWorks,
  tips,
  faqs,
  related
}: {
  title: string;
  description: string;
  breadcrumbs: { name: string; href: string }[];
  children: ReactNode;
  howItWorks: string[];
  tips: string[];
  faqs: FAQItem[];
  related: string[];
}) {
  return (
    <Container className="py-10">
      <Breadcrumbs items={breadcrumbs} />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="space-y-10">
          <header>
            <h1 className="text-4xl font-black tracking-normal sm:text-5xl">{title}</h1>
            <p className="mt-4 text-lg leading-8 text-foreground/72">{description}</p>
          </header>
          <InArticleAd />
          {children}
          <section className="prose-lite">
            <h2>How it works</h2>
            {howItWorks.map((item) => <p key={item}>{item}</p>)}
          </section>
          <section className="prose-lite">
            <h2>Tips</h2>
            <ul>{tips.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <DisplayAd />
          <FAQ items={faqs} />
          <RelatedLinks hrefs={related} />
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <DisplayAd className="min-h-72" />
          </div>
        </aside>
      </div>
    </Container>
  );
}
