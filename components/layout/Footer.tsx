import Link from "next/link";
import { footerLinks, site } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-card/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-3 max-w-md leading-7 text-foreground/70">{site.tagline}</p>
          <p className="mt-4 text-sm text-foreground/55">No login. No account maze. Tiny useful things that load fast.</p>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <Link key={item.href} className="rounded-md px-2 py-2 font-bold hover:bg-muted" href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
