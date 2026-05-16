"use client";

import { useEffect, useMemo, useState } from "react";
import { riddles } from "@/data/riddles";
import { dateKey, deterministicIndex, yesterdayKey } from "@/lib/date";
import { safeGet, safeSet } from "@/lib/storage";
import { ShareButton } from "../ShareButton";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { StatCard } from "../ui/StatCard";

export function DailyRiddle() {
  const today = useMemo(() => dateKey(), []);
  const riddle = useMemo(() => riddles[deterministicIndex(new Date(), riddles.length)], []);
  const [revealed, setRevealed] = useState(false);
  const [streak, setStreak] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setStreak(safeGet("bb_daily_streak", 0));
    setCompleted(safeGet<string | null>("bb_last_daily_completed", null) === today);
  }, [today]);

  function complete() {
    const last = safeGet<string | null>("bb_last_daily_completed", null);
    if (last === today) return;
    const nextStreak = last === yesterdayKey() ? streak + 1 : 1;
    setStreak(nextStreak);
    setCompleted(true);
    safeSet("bb_daily_streak", nextStreak);
    safeSet("bb_last_daily_completed", today);
  }

  return (
    <Card className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <StatCard label="Today" value={today} />
        <StatCard label="Streak" value={`${streak} day${streak === 1 ? "" : "s"}`} />
      </div>
      <div className="rounded-lg border border-border bg-background p-5">
        <p className="text-xl font-black leading-8">{riddle.question}</p>
        <p className="mt-3 text-sm text-foreground/65">Hint: {riddle.hint}</p>
        {revealed ? <p className="mt-5 rounded-lg bg-muted p-4 text-lg font-bold">Answer: {riddle.answer}</p> : null}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="button" onClick={() => setRevealed(true)}>{revealed ? "Answer revealed" : "Reveal answer"}</Button>
        <Button type="button" variant="secondary" onClick={complete} disabled={completed}>{completed ? "Completed today" : "Mark complete"}</Button>
        <ShareButton title="BoredBee Daily Riddle" text={`I solved today's BoredBee riddle. Streak: ${streak}`} />
      </div>
    </Card>
  );
}
