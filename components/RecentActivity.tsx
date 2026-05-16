"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { RecentActivity as RecentActivityType } from "@/lib/storage";
import { safeGet } from "@/lib/storage";

export function RecentActivity() {
  const [items, setItems] = useState<RecentActivityType[]>([]);

  useEffect(() => {
    setItems(safeGet<RecentActivityType[]>("bb_recent_activity", []));
  }, []);

  if (!items.length) return null;

  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <h3 className="text-lg font-black">Your recent picks</h3>
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <Link key={item.href} className="rounded-md px-2 py-2 text-sm font-bold hover:bg-muted" href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
