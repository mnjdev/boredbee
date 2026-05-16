"use client";

export function safeGet<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function safeSet<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage can be unavailable in private or locked-down contexts.
  }
}

export type RecentActivity = {
  title: string;
  href: string;
  type: string;
  at: string;
};

export function recordRecentActivity(activity: Omit<RecentActivity, "at">) {
  const existing = safeGet<RecentActivity[]>("bb_recent_activity", []);
  const next = [
    { ...activity, at: new Date().toISOString() },
    ...existing.filter((item) => item.href !== activity.href)
  ].slice(0, 6);
  safeSet("bb_recent_activity", next);
}
