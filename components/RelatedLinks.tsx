import { allContent } from "@/data/site";
import { ContentCard } from "./ui/Card";

export function RelatedLinks({ hrefs }: { hrefs: string[] }) {
  const items = hrefs.map((href) => allContent.find((item) => item.href === href)).filter(Boolean).slice(0, 3);
  if (!items.length) return null;
  return (
    <section aria-labelledby="related-title">
      <h2 id="related-title" className="mb-4 text-2xl font-black">
        Related
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (item ? <ContentCard key={item.href} item={item} /> : null))}
      </div>
    </section>
  );
}
