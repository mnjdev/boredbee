"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/format";
import { Card } from "../ui/Card";
import { Field, Input } from "../ui/Form";
import { StatCard } from "../ui/StatCard";

export function FuelCostCalculator() {
  const [distance, setDistance] = useState(25);
  const [mileage, setMileage] = useState(18);
  const [price, setPrice] = useState(105);
  const [trips, setTrips] = useState(20);
  const [symbol, setSymbol] = useState("₹");

  const result = useMemo(() => {
    const cost = (distance / mileage) * price;
    return { trip: cost, monthly: cost * trips, yearly: cost * trips * 12 };
  }, [distance, mileage, price, trips]);

  const valid = distance > 0 && mileage > 0 && price >= 0 && trips >= 0;

  return (
    <Card className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Field label="Distance (km)">
          <Input type="number" min="0" value={distance} onChange={(event) => setDistance(Number(event.target.value))} />
        </Field>
        <Field label="Mileage (km/l)">
          <Input type="number" min="0.1" step="0.1" value={mileage} onChange={(event) => setMileage(Number(event.target.value))} />
        </Field>
        <Field label="Fuel price">
          <Input type="number" min="0" step="0.1" value={price} onChange={(event) => setPrice(Number(event.target.value))} />
        </Field>
        <Field label="Trips/month">
          <Input type="number" min="0" value={trips} onChange={(event) => setTrips(Number(event.target.value))} />
        </Field>
        <Field label="Currency">
          <Input value={symbol} onChange={(event) => setSymbol(event.target.value.slice(0, 3))} />
        </Field>
      </div>
      {!valid ? <p className="rounded-lg bg-muted p-3 text-sm font-bold">Distance and mileage must be above zero.</p> : null}
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Cost per trip" value={valid ? formatCurrency(result.trip, symbol) : "-"} />
        <StatCard label="Monthly cost" value={valid ? formatCurrency(result.monthly, symbol) : "-"} />
        <StatCard label="Yearly cost" value={valid ? formatCurrency(result.yearly, symbol) : "-"} />
      </div>
    </Card>
  );
}
