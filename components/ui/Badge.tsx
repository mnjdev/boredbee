import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-extrabold uppercase tracking-wide">{children}</span>;
}
