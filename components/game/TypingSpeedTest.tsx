"use client";

import { useEffect, useMemo, useState } from "react";
import { typingParagraphs } from "@/data/typing";
import { clamp } from "@/lib/format";
import { recordRecentActivity, safeGet, safeSet } from "@/lib/storage";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Textarea } from "../ui/Form";
import { StatCard } from "../ui/StatCard";

export function TypingSpeedTest() {
  const [target, setTarget] = useState(typingParagraphs[0]);
  const [input, setInput] = useState("");
  const [started, setStarted] = useState<number | null>(null);
  const [doneAt, setDoneAt] = useState<number | null>(null);
  const [best, setBest] = useState(0);

  useEffect(() => {
    setTarget(typingParagraphs[Math.floor(Math.random() * typingParagraphs.length)]);
    setBest(safeGet("bb_best_typing_wpm", 0));
    recordRecentActivity({ title: "Typing Speed Test", href: "/play/typing-speed-test", type: "game" });
  }, []);

  const result = useMemo(() => {
    const end = doneAt || Date.now();
    const seconds = started ? Math.max((end - started) / 1000, 1) : 0;
    const typedChars = input.length;
    const correct = input.split("").filter((char, index) => char === target[index]).length;
    const accuracy = typedChars ? Math.round((correct / typedChars) * 100) : 100;
    const wpm = seconds ? Math.round((typedChars / 5) / (seconds / 60)) : 0;
    return { seconds: Math.round(seconds), accuracy: clamp(accuracy, 0, 100), wpm };
  }, [doneAt, input, started, target]);

  function onChange(value: string) {
    if (!started) setStarted(Date.now());
    setInput(value);
    if (value.length >= target.length && !doneAt) {
      const end = Date.now();
      setDoneAt(end);
      const seconds = Math.max((end - (started || end)) / 1000, 1);
      const wpm = Math.round((value.length / 5) / (seconds / 60));
      if (wpm > best) {
        setBest(wpm);
        safeSet("bb_best_typing_wpm", wpm);
      }
    }
  }

  function reset() {
    setTarget(typingParagraphs[Math.floor(Math.random() * typingParagraphs.length)]);
    setInput("");
    setStarted(null);
    setDoneAt(null);
  }

  return (
    <Card className="space-y-5">
      <p className="rounded-lg border border-border bg-background p-4 text-lg leading-8">{target}</p>
      <label className="grid gap-2 text-sm font-bold">
        <span>Your typing</span>
        <Textarea value={input} onChange={(event) => onChange(event.target.value)} placeholder="Start typing the paragraph here..." />
      </label>
      <div className="grid gap-3 sm:grid-cols-4">
        <StatCard label="WPM" value={String(result.wpm)} />
        <StatCard label="Accuracy" value={`${result.accuracy}%`} />
        <StatCard label="Time" value={`${result.seconds}s`} />
        <StatCard label="Best WPM" value={String(best || "-")} />
      </div>
      <Button type="button" onClick={reset} variant="secondary">New paragraph</Button>
    </Card>
  );
}
