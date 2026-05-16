"use client";

import { useMemo, useState } from "react";
import { dateKey, daysBetween } from "@/lib/date";
import { Card } from "../ui/Card";
import { Field, Input } from "../ui/Form";
import { StatCard } from "../ui/StatCard";

export function DateDifferenceCalculator() {
  const today = dateKey();
  const [start, setStart] = useState(today);
  const [end, setEnd] = useState(today);
  const [includeEnd, setIncludeEnd] = useState(false);

  const days = useMemo(() => daysBetween(start, end, includeEnd), [end, includeEnd, start]);
  const absDays = Math.abs(days ?? 0);

  return (
    <Card className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Start date">
          <Input type="date" value={start} onChange={(event) => setStart(event.target.value)} />
        </Field>
        <Field label="End date">
          <Input type="date" value={end} onChange={(event) => setEnd(event.target.value)} />
        </Field>
      </div>
      <label className="flex items-center gap-3 text-sm font-bold">
        <input className="h-5 w-5 accent-[hsl(var(--accent))]" type="checkbox" checked={includeEnd} onChange={(event) => setIncludeEnd(event.target.checked)} />
        Include end date
      </label>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Days" value={days === null ? "-" : String(days)} />
        <StatCard label="Weeks + days" value={`${Math.floor(absDays / 7)}w ${absDays % 7}d`} />
        <StatCard label="Months approx." value={(absDays / 30.437).toFixed(1)} />
        <StatCard label="Years approx." value={(absDays / 365.25).toFixed(2)} />
      </div>
    </Card>
  );
}
