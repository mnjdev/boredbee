import Link from "next/link";
import type { ReactNode } from "react";
import type { ContentItem } from "@/data/site";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-lg border border-border bg-card p-5 shadow-soft ${className}`}>{children}</div>;
}

export function ContentCard({ item }: { item: ContentItem }) {
  return (
    <Link
      href={item.href}
      className="group block rounded-lg border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-accent"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-foreground/70">
          {item.category}
        </span>
        <span className="text-xs text-foreground/50">{item.type}</span>
      </div>
      <h3 className="text-lg font-extrabold">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-foreground/70">{item.description}</p>
      <span className="mt-4 inline-block text-sm font-bold text-foreground group-hover:underline">Open</span>
    </Link>
  );
}
