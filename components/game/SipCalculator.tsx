"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/format";
import { Card } from "../ui/Card";
import { Field, Input } from "../ui/Form";
import { StatCard } from "../ui/StatCard";

export function SipCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(() => {
    const months = years * 12;
    const monthlyRate = rate / 12 / 100;
    const invested = monthly * months;
    const total = monthlyRate === 0 ? invested : monthly * (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate);
    return { invested, returns: total - invested, total };
  }, [monthly, rate, years]);

  const valid = monthly > 0 && rate >= 0 && years > 0;

  return (
    <Card className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Monthly investment">
          <Input type="number" min="1" value={monthly} onChange={(event) => setMonthly(Number(event.target.value))} />
        </Field>
        <Field label="Expected annual return (%)">
          <Input type="number" min="0" step="0.1" value={rate} onChange={(event) => setRate(Number(event.target.value))} />
        </Field>
        <Field label="Duration (years)">
          <Input type="number" min="1" value={years} onChange={(event) => setYears(Number(event.target.value))} />
        </Field>
      </div>
      {!valid ? <p className="rounded-lg bg-muted p-3 text-sm font-bold">Enter positive values to estimate SIP growth.</p> : null}
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Invested amount" value={valid ? formatCurrency(result.invested) : "-"} />
        <StatCard label="Estimated returns" value={valid ? formatCurrency(result.returns) : "-"} />
        <StatCard label="Total value" value={valid ? formatCurrency(result.total) : "-"} />
      </div>
      <p className="text-sm font-bold text-foreground/65">Estimate only. This is not financial advice, and market returns are not guaranteed.</p>
    </Card>
  );
}
