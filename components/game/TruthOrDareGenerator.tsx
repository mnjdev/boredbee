"use client";

import { useMemo, useState } from "react";
import { truthOrDarePrompts } from "@/data/party";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Select } from "../ui/Form";

type Filter = "mixed" | "truth" | "dare";

export function TruthOrDareGenerator() {
  const [filter, setFilter] = useState<Filter>("mixed");
  const [index, setIndex] = useState(0);
  const prompts = useMemo(() => truthOrDarePrompts.filter((item) => filter === "mixed" || item.type === filter), [filter]);
  const prompt = prompts[index % prompts.length];

  function next() {
    setIndex((value) => value + 1 + Math.floor(Math.random() * Math.max(prompts.length - 1, 1)));
  }

  return (
    <Card className="space-y-5">
      <label className="grid max-w-xs gap-2 text-sm font-bold">
        <span>Prompt type</span>
        <Select value={filter} onChange={(event) => { setFilter(event.target.value as Filter); setIndex(0); }}>
          <option value="mixed">Mixed</option>
          <option value="truth">Truth</option>
          <option value="dare">Dare</option>
        </Select>
      </label>
      <div className="rounded-lg border border-border bg-background p-6">
        <div className="text-xs font-black uppercase tracking-wide text-foreground/55">{prompt.type}</div>
        <p className="mt-3 text-2xl font-black leading-9">{prompt.prompt}</p>
      </div>
      <Button type="button" onClick={next}>Next prompt</Button>
    </Card>
  );
}
