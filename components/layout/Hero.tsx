import type { ReactNode } from "react";
import { ButtonLink } from "../ui/Button";
import { Container } from "../ui/Container";

export function Hero({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  children
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  children?: ReactNode;
}) {
  return (
    <section className="honey-grid border-b border-border">
      <Container className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          {eyebrow ? <p className="mb-3 text-sm font-black uppercase tracking-wide text-foreground/55">{eyebrow}</p> : null}
          <h1 className="max-w-4xl text-4xl font-black tracking-normal sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/75">{subtitle}</p>
          {(primary || secondary) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {primary ? <ButtonLink href={primary.href}>{primary.label}</ButtonLink> : null}
              {secondary ? <ButtonLink href={secondary.href} variant="secondary">{secondary.label}</ButtonLink> : null}
            </div>
          )}
        </div>
        {children ? <div>{children}</div> : null}
      </Container>
    </section>
  );
}
