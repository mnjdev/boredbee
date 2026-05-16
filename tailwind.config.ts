import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        accent: "hsl(var(--accent))",
        accentText: "hsl(var(--accent-text))",
        ring: "hsl(var(--ring))"
      },
      boxShadow: {
        soft: "0 14px 45px -30px hsl(var(--foreground) / 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
