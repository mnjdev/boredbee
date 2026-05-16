"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { boredActivities } from "@/data/bored";
import { recordRecentActivity } from "@/lib/storage";
import { ShareButton } from "../ShareButton";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function BoredButtonGame() {
  const [index, setIndex] = useState(0);
  const activity = boredActivities[index];

  const categories = useMemo(() => Array.from(new Set(boredActivities.map((item) => item.category))), []);

  function nextActivity() {
    let next = Math.floor(Math.random() * boredActivities.length);
    if (next === index) next = (next + 1) % boredActivities.length;
    setIndex(next);
    const picked = boredActivities[next];
    if (picked.href) recordRecentActivity({ title: picked.title, href: picked.href, type: picked.category });
  }

  return (
    <Card className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <span key={category} className="rounded-full bg-muted px-3 py-1 text-xs font-bold">
            {category}
          </span>
        ))}
      </div>
      <button
        type="button"
        onClick={nextActivity}
        className="min-h-32 w-full rounded-lg bg-accent px-6 py-8 text-3xl font-black text-accentText shadow-soft transition hover:brightness-95"
      >
        I am bored
      </button>
      <div className="rounded-lg border border-border bg-background p-5">
        <div className="text-xs font-black uppercase tracking-wide text-foreground/55">{activity.category}</div>
        <h2 className="mt-2 text-2xl font-black">{activity.title}</h2>
        <p className="mt-2 leading-7 text-foreground/70">{activity.description}</p>
        {activity.href ? (
          <Link className="mt-4 inline-flex font-black underline" href={activity.href}>
            Try it now
          </Link>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="button" onClick={nextActivity}>Try another</Button>
        <ShareButton title="BoredBee idea" text={activity.title} />
      </div>
    </Card>
  );
}
