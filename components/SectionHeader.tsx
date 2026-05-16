import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  children
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-6 max-w-3xl">
      {eyebrow ? <p className="mb-2 text-sm font-black uppercase tracking-wide text-foreground/55">{eyebrow}</p> : null}
      <h2 className="text-2xl font-black tracking-normal sm:text-3xl">{title}</h2>
      {children ? <div className="mt-3 text-foreground/70">{children}</div> : null}
    </div>
  );
}
