export type BoredActivity = {
  title: string;
  category: "quick game" | "brain" | "party" | "useful tool" | "relaxing" | "random";
  description: string;
  href?: string;
};

export const boredActivities: BoredActivity[] = [
  { title: "Try the reaction test", category: "quick game", description: "One minute, one finger, one tiny adrenaline spike.", href: "/play/reaction-test" },
  { title: "Solve today's riddle", category: "brain", description: "A small puzzle is cheaper than another tab spiral.", href: "/daily/riddle" },
  { title: "Count your draft", category: "useful tool", description: "Paste text locally and learn how long it really is.", href: "/tools/word-counter" },
  { title: "Start a would-you-rather round", category: "party", description: "Low stakes, high debate potential.", href: "/party/would-you-rather" },
  { title: "Do a 90-second reset", category: "relaxing", description: "Look away from the screen, unclench your jaw, drink water." },
  { title: "Play memory cards", category: "brain", description: "A quiet 4x4 match game for your short-term memory.", href: "/play/memory-card-game" },
  { title: "Estimate a fuel trip", category: "useful tool", description: "Check the rough cost before you say yes to the plan.", href: "/tools/fuel-cost-calculator" },
  { title: "Send a clean dare", category: "party", description: "Make someone describe their phone wallpaper dramatically.", href: "/party/truth-or-dare" },
  { title: "Type for speed", category: "quick game", description: "Get WPM and accuracy without creating an account.", href: "/play/typing-speed-test" },
  { title: "Make a two-line plan", category: "random", description: "Write the next tiny task and the reward after it." }
];
