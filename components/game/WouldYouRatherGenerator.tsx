"use client";

import { useEffect, useState } from "react";
import { wouldYouRatherPrompts } from "@/data/party";
import { safeGet, safeSet } from "@/lib/storage";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

type Votes = Record<string, { a: number; b: number }>;

export function WouldYouRatherGenerator() {
  const [index, setIndex] = useState(0);
  const [votes, setVotes] = useState<Votes>({});
  const prompt = wouldYouRatherPrompts[index % wouldYouRatherPrompts.length];
  const key = `${prompt.a}|${prompt.b}`;
  const current = votes[key] || { a: 0, b: 0 };

  useEffect(() => setVotes(safeGet<Votes>("bb_wyr_votes", {})), []);

  function vote(choice: "a" | "b") {
    const next = { ...votes, [key]: { ...current, [choice]: current[choice] + 1 } };
    setVotes(next);
    safeSet("bb_wyr_votes", next);
  }

  function resetVotes() {
    setVotes({});
    safeSet("bb_wyr_votes", {});
  }

  return (
    <Card className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <button type="button" onClick={() => vote("a")} className="min-h-36 rounded-lg border border-border bg-background p-5 text-left transition hover:bg-muted">
          <span className="block text-xl font-black">{prompt.a}</span>
          <span className="mt-3 block text-sm font-bold text-foreground/60">{current.a} local vote{current.a === 1 ? "" : "s"}</span>
        </button>
        <button type="button" onClick={() => vote("b")} className="min-h-36 rounded-lg border border-border bg-background p-5 text-left transition hover:bg-muted">
          <span className="block text-xl font-black">{prompt.b}</span>
          <span className="mt-3 block text-sm font-bold text-foreground/60">{current.b} local vote{current.b === 1 ? "" : "s"}</span>
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="button" onClick={() => setIndex((value) => value + 1)}>Next</Button>
        <Button type="button" variant="secondary" onClick={resetVotes}>Reset local votes</Button>
      </div>
    </Card>
  );
}
