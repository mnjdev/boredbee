export type ContentType = "game" | "tool" | "party" | "daily" | "explain" | "page";

export type ContentItem = {
  title: string;
  slug: string;
  href: string;
  description: string;
  type: ContentType;
  category: string;
  added: string;
  popular?: boolean;
  tags?: string[];
};

export const site = {
  name: "BoredBee",
  tagline: "Tiny games, smart tools, quick fixes for bored brains.",
  description:
    "BoredBee is a lightweight no-login website for quick games, daily challenges, party prompts, useful calculators, and beginner-friendly explainers.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  email: "hello@boredbee.example"
};

export const navItems = [
  { title: "Play", href: "/play" },
  { title: "Daily", href: "/daily" },
  { title: "Party", href: "/party" },
  { title: "Tools", href: "/tools" },
  { title: "Explain", href: "/explain" }
];

export const games: ContentItem[] = [
  {
    title: "Bored Button",
    slug: "bored-button",
    href: "/play/bored-button",
    description: "Tap once and get a tiny activity, game, tool, or reset idea.",
    type: "game",
    category: "Random",
    added: "2026-05-13",
    popular: true,
    tags: ["quick", "random", "bored"]
  },
  {
    title: "Reaction Test",
    slug: "reaction-test",
    href: "/play/reaction-test",
    description: "Wait for the signal, click fast, and beat your best reaction time.",
    type: "game",
    category: "Speed",
    added: "2026-05-13",
    popular: true,
    tags: ["speed", "focus"]
  },
  {
    title: "Memory Card Game",
    slug: "memory-card-game",
    href: "/play/memory-card-game",
    description: "A clean 4x4 matching game with moves, timer, and local best score.",
    type: "game",
    category: "Brain",
    added: "2026-05-13",
    tags: ["memory", "cards"]
  },
  {
    title: "Typing Speed Test",
    slug: "typing-speed-test",
    href: "/play/typing-speed-test",
    description: "Type a short paragraph and see your WPM, accuracy, and best speed.",
    type: "game",
    category: "Skill",
    added: "2026-05-13",
    popular: true,
    tags: ["typing", "wpm"]
  }
];

export const dailyItems: ContentItem[] = [
  {
    title: "Daily Riddle",
    slug: "riddle",
    href: "/daily/riddle",
    description: "A fresh date-based riddle every day, with a local streak tracker.",
    type: "daily",
    category: "Brain",
    added: "2026-05-13",
    popular: true,
    tags: ["daily", "riddle", "streak"]
  }
];

export const partyItems: ContentItem[] = [
  {
    title: "Truth or Dare",
    slug: "truth-or-dare",
    href: "/party/truth-or-dare",
    description: "Family-friendly truth and dare prompts for low-effort party energy.",
    type: "party",
    category: "Prompts",
    added: "2026-05-13",
    popular: true,
    tags: ["party", "prompts"]
  },
  {
    title: "Would You Rather",
    slug: "would-you-rather",
    href: "/party/would-you-rather",
    description: "Clean, funny choices with local-only voting on your device.",
    type: "party",
    category: "Prompts",
    added: "2026-05-13",
    tags: ["party", "choice"]
  }
];

export const tools: ContentItem[] = [
  {
    title: "EMI Calculator",
    slug: "emi-calculator",
    href: "/tools/emi-calculator",
    description: "Estimate monthly loan EMI, total interest, and total payment.",
    type: "tool",
    category: "Money",
    added: "2026-05-13",
    popular: true,
    tags: ["india", "loan", "emi"]
  },
  {
    title: "SIP Calculator",
    slug: "sip-calculator",
    href: "/tools/sip-calculator",
    description: "Estimate SIP invested amount, returns, and future value.",
    type: "tool",
    category: "Money",
    added: "2026-05-13",
    popular: true,
    tags: ["india", "sip", "investment"]
  },
  {
    title: "Fuel Cost Calculator",
    slug: "fuel-cost-calculator",
    href: "/tools/fuel-cost-calculator",
    description: "Estimate trip, monthly, and yearly fuel cost with India-friendly defaults.",
    type: "tool",
    category: "Travel",
    added: "2026-05-13",
    tags: ["fuel", "travel", "india"]
  },
  {
    title: "Word Counter",
    slug: "word-counter",
    href: "/tools/word-counter",
    description: "Count words, characters, paragraphs, sentences, and reading time locally.",
    type: "tool",
    category: "Writing",
    added: "2026-05-13",
    popular: true,
    tags: ["writing", "privacy"]
  },
  {
    title: "Date Difference Calculator",
    slug: "date-difference-calculator",
    href: "/tools/date-difference-calculator",
    description: "Find days, weeks, approximate months, and approximate years between dates.",
    type: "tool",
    category: "Time",
    added: "2026-05-13",
    tags: ["date", "calendar"]
  }
];

export const explainItems: ContentItem[] = [
  {
    title: "What Is EMI?",
    slug: "what-is-emi",
    href: "/explain/what-is-emi",
    description: "A plain-English guide to EMI, interest, tenure, and loan repayment.",
    type: "explain",
    category: "Money",
    added: "2026-05-13",
    tags: ["emi", "loans"]
  },
  {
    title: "What Is SIP?",
    slug: "what-is-sip",
    href: "/explain/what-is-sip",
    description: "A beginner-friendly explanation of SIP investing and compounding.",
    type: "explain",
    category: "Money",
    added: "2026-05-13",
    tags: ["sip", "investment"]
  },
  {
    title: "How Reaction Time Works",
    slug: "how-reaction-time-works",
    href: "/explain/how-reaction-time-works",
    description: "Understand reaction time, focus, and why scores vary between attempts.",
    type: "explain",
    category: "Science",
    added: "2026-05-13",
    tags: ["reaction", "focus"]
  },
  {
    title: "How Typing Speed Is Calculated",
    slug: "how-typing-speed-is-calculated",
    href: "/explain/how-typing-speed-is-calculated",
    description: "Learn WPM, accuracy, corrected speed, and how typing tests measure skill.",
    type: "explain",
    category: "Typing",
    added: "2026-05-13",
    tags: ["typing", "wpm"]
  },
  {
    title: "How to Use BoredBee",
    slug: "how-to-use-boredbee",
    href: "/explain/how-to-use-boredbee",
    description: "A quick tour of games, tools, daily streaks, and no-login privacy.",
    type: "explain",
    category: "Guide",
    added: "2026-05-13",
    popular: true,
    tags: ["guide", "privacy"]
  }
];

export const utilityPages = [
  { title: "About", href: "/about", description: "What BoredBee is and why it exists." },
  { title: "Contact", href: "/contact", description: "How to contact BoredBee." },
  { title: "Privacy", href: "/privacy", description: "How BoredBee handles privacy and local storage." },
  { title: "Terms", href: "/terms", description: "Plain terms for using BoredBee." },
  { title: "Advertise", href: "/advertise", description: "Ad placement philosophy and sponsor inquiries." }
];

export const allContent = [...games, ...dailyItems, ...partyItems, ...tools, ...explainItems];

export const popularNow = allContent.filter((item) => item.popular).slice(0, 8);
export const recentlyAdded = [...allContent].sort((a, b) => b.added.localeCompare(a.added)).slice(0, 8);

export const footerLinks = [
  ...navItems,
  { title: "About", href: "/about" },
  { title: "Privacy", href: "/privacy" },
  { title: "Terms", href: "/terms" },
  { title: "Advertise", href: "/advertise" },
  { title: "Contact", href: "/contact" }
];
