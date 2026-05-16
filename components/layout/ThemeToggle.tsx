"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", theme);
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const stored = window.localStorage.getItem("bb_theme") as Theme | null;
    const next = stored || "system";
    setTheme(next);
    applyTheme(next);
  }, []);

  function cycleTheme() {
    const next: Theme = theme === "system" ? "dark" : theme === "dark" ? "light" : "system";
    setTheme(next);
    if (next === "system") window.localStorage.removeItem("bb_theme");
    else window.localStorage.setItem("bb_theme", next);
    applyTheme(next);
  }

  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-lg font-bold transition hover:bg-muted"
      onClick={cycleTheme}
      aria-label={`Theme: ${theme}. Change theme`}
      title={`Theme: ${theme}`}
    >
      {theme === "dark" ? "D" : theme === "light" ? "L" : "S"}
    </button>
  );
}
