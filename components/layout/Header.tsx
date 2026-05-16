"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/88 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-bold transition hover:bg-muted ${active ? "bg-muted" : ""}`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link className="hidden rounded-lg bg-accent px-3 py-2 text-sm font-black text-accentText sm:inline-flex" href="/play/bored-button">
            I am bored
          </Link>
          <ThemeToggle />
        </div>
      </div>
      <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-3 md:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 rounded-lg border border-border bg-card px-3 py-2 text-sm font-bold">
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
