import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

export function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <label className="grid gap-2 text-sm font-bold">
      <span>{label}</span>
      {children}
      {hint ? <span className="text-xs font-medium text-foreground/60">{hint}</span> : null}
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="min-h-11 rounded-lg border border-border bg-background px-3 py-2 text-base text-foreground shadow-sm transition placeholder:text-foreground/40 focus:border-accent"
      {...props}
    />
  );
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className="min-h-40 rounded-lg border border-border bg-background px-3 py-2 text-base text-foreground shadow-sm transition placeholder:text-foreground/40 focus:border-accent"
      {...props}
    />
  );
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className="min-h-11 rounded-lg border border-border bg-background px-3 py-2 text-base text-foreground shadow-sm transition focus:border-accent"
      {...props}
    />
  );
}
