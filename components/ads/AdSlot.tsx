"use client";

import { useEffect } from "react";

type AdSlotProps = {
  slot?: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical" | "autorelaxed";
  responsive?: boolean;
  className?: string;
  label?: string;
};

const enabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";
const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
const isDev = process.env.NODE_ENV === "development";

export function AdSlot({ slot, format = "auto", responsive = true, className = "", label = "Advertisement" }: AdSlotProps) {
  useEffect(() => {
    if (!enabled) return;
    try {
      (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle?.push({});
    } catch {
      // Ad blockers or delayed script loading should not break the app.
    }
  }, []);

  if (!enabled || !slot) {
    return isDev ? (
      <div className={`my-8 rounded-lg border border-dashed border-border p-4 text-center text-xs font-bold uppercase tracking-wide text-foreground/45 ad-placeholder ${className}`}>
        {label} placeholder{enabled && !slot ? " - missing slot ID" : ""}
      </div>
    ) : null;
  }

  return (
    <div className={`my-8 text-center ${className}`} aria-label={label}>
      <div className="mb-2 text-[11px] font-bold uppercase tracking-wide text-foreground/45">{label}</div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
