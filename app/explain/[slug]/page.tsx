import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DisplayAd } from "@/components/ads/DisplayAd";
import { InArticleAd } from "@/components/ads/InArticleAd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Container } from "@/components/ui/Container";
import { articles } from "@/data/articles";
import { articleSchema, createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return createMetadata({ title: article.title, description: article.description, path: `/explain/${article.slug}` });
}

export default async function ExplainArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <Container className="py-10">
      <JsonLd data={articleSchema({ title: article.title, description: article.description, path: `/explain/${article.slug}`, updated: article.updated })} />
      <Breadcrumbs items={[{ name: "Explain", href: "/explain" }, { name: article.title, href: `/explain/${article.slug}` }]} />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="space-y-9">
          <header>
            <h1 className="text-4xl font-black tracking-normal sm:text-5xl">{article.title}</h1>
            <p className="mt-4 text-lg leading-8 text-foreground/72">{article.description}</p>
          </header>
          <InArticleAd />
          <div className="prose-lite">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>
          <DisplayAd />
          <FAQ items={article.faqs} />
          <RelatedLinks hrefs={article.related} />
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
