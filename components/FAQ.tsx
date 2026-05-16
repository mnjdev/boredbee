import type { FAQItem } from "@/data/faqs";
import { faqSchema } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export function FAQ({ items }: { items: FAQItem[] }) {
  if (!items.length) return null;
  return (
    <section className="space-y-4" aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-2xl font-black">
        FAQ
      </h2>
      <div className="grid gap-3">
        {items.map((item) => (
          <details key={item.question} className="rounded-lg border border-border bg-card p-4">
            <summary className="cursor-pointer text-base font-extrabold">{item.question}</summary>
            <p className="mt-3 leading-7 text-foreground/70">{item.answer}</p>
          </details>
        ))}
      </div>
      <JsonLd data={faqSchema(items)} />
    </section>
  );
}
