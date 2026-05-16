"use client";

import { useEffect, useMemo, useState } from "react";
import { recordRecentActivity, safeGet, safeSet } from "@/lib/storage";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { StatCard } from "../ui/StatCard";

const symbols = ["A", "B", "C", "D", "E", "F", "G", "H"];

type CardItem = {
  id: number;
  symbol: string;
  matched: boolean;
};

function makeDeck() {
  return [...symbols, ...symbols]
    .map((symbol, id) => ({ id, symbol, matched: false }))
    .sort(() => Math.random() - 0.5);
}

export function MemoryCardGame() {
  const [deck, setDeck] = useState<CardItem[]>([]);
  const [open, setOpen] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [started, setStarted] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [best, setBest] = useState<string | null>(null);

  const complete = useMemo(() => deck.length > 0 && deck.every((card) => card.matched), [deck]);

  useEffect(() => {
    setDeck(makeDeck());
    setBest(safeGet<string | null>("bb_best_memory", null));
    recordRecentActivity({ title: "Memory Card Game", href: "/play/memory-card-game", type: "game" });
  }, []);

  useEffect(() => {
    if (!started || complete) return;
    const interval = window.setInterval(() => setElapsed(Math.floor((Date.now() - started) / 1000)), 500);
    return () => window.clearInterval(interval);
  }, [started, complete]);

  useEffect(() => {
    if (complete && deck.length) {
      const result = `${moves} moves / ${elapsed}s`;
      setBest(result);
      safeSet("bb_best_memory", result);
    }
  }, [complete, deck.length, elapsed, moves]);

  function reset() {
    setDeck(makeDeck());
    setOpen([]);
    setMoves(0);
    setElapsed(0);
    setStarted(null);
  }

  function flip(index: number) {
    if (!started) setStarted(Date.now());
    if (open.includes(index) || deck[index].matched || open.length === 2) return;
    const nextOpen = [...open, index];
    setOpen(nextOpen);
    if (nextOpen.length === 2) {
      setMoves((value) => value + 1);
      const [a, b] = nextOpen;
      if (deck[a].symbol === deck[b].symbol) {
        window.setTimeout(() => {
          setDeck((cards) => cards.map((card, cardIndex) => (cardIndex === a || cardIndex === b ? { ...card, matched: true } : card)));
          setOpen([]);
        }, 450);
      } else {
        window.setTimeout(() => setOpen([]), 700);
      }
    }
  }

  return (
    <Card className="space-y-5">
      <div className="grid grid-cols-4 gap-2 sm:gap-3" aria-label="Memory card board">
        {deck.map((card, index) => {
          const visible = card.matched || open.includes(index);
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => flip(index)}
              disabled={card.matched}
              className={`aspect-square rounded-lg border border-border text-2xl font-black transition ${
                visible ? "bg-accent text-accentText" : "bg-background hover:bg-muted"
              } ${card.matched ? "opacity-70" : ""}`}
              aria-label={visible ? `Card ${card.symbol}` : "Hidden card"}
            >
              {visible ? card.symbol : "?"}
            </button>
          );
        })}
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Moves" value={String(moves)} />
        <StatCard label="Time" value={`${elapsed}s`} />
        <StatCard label="Best" value={best || "-"} />
      </div>
      {complete ? <p className="font-bold text-foreground">Matched all cards. That counts as a small victory.</p> : null}
      <Button type="button" onClick={reset} variant="secondary">New game</Button>
    </Card>
  );
}
