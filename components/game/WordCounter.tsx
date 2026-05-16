"use client";

import { useMemo, useState } from "react";
import { Card } from "../ui/Card";
import { Textarea } from "../ui/Form";
import { StatCard } from "../ui/StatCard";

export function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
    const sentences = trimmed ? trimmed.split(/[.!?]+/).filter((item) => item.trim()).length : 0;
    const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter((item) => item.trim()).length : 0;
    return {
      words,
      chars: text.length,
      charsNoSpaces: text.replace(/\s/g, "").length,
      sentences,
      paragraphs,
      reading: Math.max(1, Math.ceil(words / 200))
    };
  }, [text]);

  return (
    <Card className="space-y-5">
      <label className="grid gap-2 text-sm font-bold">
        <span>Text to count</span>
        <Textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="Paste or type text here. It stays in your browser." />
      </label>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Words" value={String(stats.words)} />
        <StatCard label="Characters" value={String(stats.chars)} />
        <StatCard label="No spaces" value={String(stats.charsNoSpaces)} />
        <StatCard label="Sentences" value={String(stats.sentences)} />
        <StatCard label="Paragraphs" value={String(stats.paragraphs)} />
        <StatCard label="Reading time" value={`${stats.reading} min`} />
      </div>
    </Card>
  );
}
