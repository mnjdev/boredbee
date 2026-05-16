"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

export function ShareButton({ title, text, url }: { title: string; text: string; url?: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const shareUrl = url || window.location.href;
    if (navigator.share) {
      await navigator.share({ title, text, url: shareUrl });
      return;
    }
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <Button type="button" variant="secondary" onClick={share} aria-live="polite">
      {copied ? "Link copied" : "Share"}
    </Button>
  );
}
