"use client";

import { useEffect, useRef, useState } from "react";
import { recordRecentActivity, safeGet, safeSet } from "@/lib/storage";
import { Card } from "../ui/Card";
import { StatCard } from "../ui/StatCard";

type State = "idle" | "waiting" | "ready" | "tooSoon" | "done";

export function ReactionTestGame() {
  const [state, setState] = useState<State>("idle");
  const [reaction, setReaction] = useState<number | null>(null);
  const [best, setBest] = useState<number | null>(null);
  const timer = useRef<number | null>(null);
  const readyAt = useRef(0);

  useEffect(() => {
    setBest(safeGet<number | null>("bb_best_reaction_ms", null));
    recordRecentActivity({ title: "Reaction Test", href: "/play/reaction-test", type: "game" });
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  function start() {
    setReaction(null);
    setState("waiting");
    const delay = 1400 + Math.random() * 3200;
    timer.current = window.setTimeout(() => {
      readyAt.current = performance.now();
      setState("ready");
    }, delay);
  }

  function press() {
    if (state === "waiting") {
      if (timer.current) window.clearTimeout(timer.current);
      setState("tooSoon");
      return;
    }
    if (state === "ready") {
      const score = Math.round(performance.now() - readyAt.current);
      setReaction(score);
      setState("done");
      if (!best || score < best) {
        setBest(score);
        safeSet("bb_best_reaction_ms", score);
      }
    }
  }

  const label =
    state === "idle" ? "Start test" : state === "waiting" ? "Wait for amber..." : state === "ready" ? "Click now" : "Try again";

  return (
    <Card className="space-y-5">
      <button
        type="button"
        onClick={state === "idle" || state === "done" || state === "tooSoon" ? start : press}
        className={`min-h-56 w-full rounded-lg border border-border p-8 text-center text-3xl font-black transition ${
          state === "ready" ? "bg-accent text-accentText" : state === "waiting" ? "bg-muted" : "bg-background"
        }`}
      >
        {label}
      </button>
      <p className="text-sm font-bold text-foreground/70">Do not click early. Wait until the box turns amber and says Click now.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <StatCard label="Last reaction" value={reaction ? `${reaction} ms` : state === "tooSoon" ? "Too soon" : "-"} />
        <StatCard label="Best on this device" value={best ? `${best} ms` : "-"} />
      </div>
    </Card>
  );
}
