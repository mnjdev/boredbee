import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "bg-accent text-accentText shadow-soft hover:brightness-95",
  secondary: "border border-border bg-card hover:bg-muted",
  ghost: "hover:bg-muted"
};

export function Button({ className = "", variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center rounded-lg px-4 py-2 text-sm font-bold transition ${variants[variant]} disabled:cursor-not-allowed disabled:opacity-55 ${className}`}
      {...props}
    />
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg px-4 py-2 text-sm font-bold transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
