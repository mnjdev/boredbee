"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/format";
import { Card } from "../ui/Card";
import { Field, Input, Select } from "../ui/Form";
import { StatCard } from "../ui/StatCard";

export function EmiCalculator() {
  const [amount, setAmount] = useState(800000);
  const [rate, setRate] = useState(9.5);
  const [tenure, setTenure] = useState(5);
  const [unit, setUnit] = useState<"years" | "months">("years");

  const result = useMemo(() => {
    const months = unit === "years" ? tenure * 12 : tenure;
    const monthlyRate = rate / 12 / 100;
    const emi = monthlyRate === 0 ? amount / months : (amount * monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1);
    const total = emi * months;
    return { emi, total, interest: total - amount, months };
  }, [amount, rate, tenure, unit]);

  const valid = amount > 0 && rate >= 0 && tenure > 0;

  return (
    <Card className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Loan amount">
          <Input type="number" min="1" value={amount} onChange={(event) => setAmount(Number(event.target.value))} />
        </Field>
        <Field label="Annual interest rate (%)">
          <Input type="number" min="0" step="0.1" value={rate} onChange={(event) => setRate(Number(event.target.value))} />
        </Field>
        <Field label="Tenure">
          <Input type="number" min="1" value={tenure} onChange={(event) => setTenure(Number(event.target.value))} />
        </Field>
        <Field label="Tenure unit">
          <Select value={unit} onChange={(event) => setUnit(event.target.value as "years" | "months")}>
            <option value="years">Years</option>
            <option value="months">Months</option>
          </Select>
        </Field>
      </div>
      {!valid ? <p className="rounded-lg bg-muted p-3 text-sm font-bold">Enter a positive loan amount and tenure.</p> : null}
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Monthly EMI" value={valid ? formatCurrency(result.emi) : "-"} />
        <StatCard label="Total interest" value={valid ? formatCurrency(result.interest) : "-"} />
        <StatCard label="Total payment" value={valid ? formatCurrency(result.total) : "-"} hint={`${result.months || 0} months`} />
      </div>
    </Card>
  );
}
