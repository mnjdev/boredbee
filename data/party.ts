export type TruthOrDarePrompt = {
  type: "truth" | "dare";
  prompt: string;
};

export const truthOrDarePrompts: TruthOrDarePrompt[] = [
  { type: "truth", prompt: "What is the funniest thing you believed as a kid?" },
  { type: "truth", prompt: "Which harmless habit do you pretend is normal?" },
  { type: "truth", prompt: "What food could you eat three days in a row?" },
  { type: "truth", prompt: "What song instantly improves your mood?" },
  { type: "truth", prompt: "What is your most dramatic small inconvenience?" },
  { type: "truth", prompt: "Which app do you open without thinking?" },
  { type: "truth", prompt: "What is one skill you wish downloaded into your brain?" },
  { type: "truth", prompt: "What is your most reliable comfort show or movie?" },
  { type: "dare", prompt: "Describe the nearest object like it is a luxury product." },
  { type: "dare", prompt: "Do your best five-second weather reporter voice." },
  { type: "dare", prompt: "Invent a new handshake with the person next to you." },
  { type: "dare", prompt: "Speak only in questions for the next two turns." },
  { type: "dare", prompt: "Give a tiny motivational speech to a spoon, pen, or bottle." },
  { type: "dare", prompt: "Make up a fake movie trailer title and tagline." },
  { type: "dare", prompt: "Hum a familiar tune and let others guess it." },
  { type: "dare", prompt: "Talk like a polite customer-care executive for one minute." }
];

export type WouldYouRatherPrompt = {
  a: string;
  b: string;
};

export const wouldYouRatherPrompts: WouldYouRatherPrompt[] = [
  { a: "Always find a seat on public transport", b: "Always get perfect Wi-Fi" },
  { a: "Have tea or coffee appear on command", b: "Never lose your charger again" },
  { a: "Win every board game", b: "Remember every joke perfectly" },
  { a: "Skip queues forever", b: "Get green signals forever" },
  { a: "Speak every language", b: "Play every musical instrument" },
  { a: "Have a perfect memory for names", b: "Have a perfect sense of direction" },
  { a: "Receive one useful tip daily", b: "Find one missing item daily" },
  { a: "Have an extra hour each morning", b: "Have an extra hour each night" },
  { a: "Eat your favourite street food free for a year", b: "Get free movie tickets for a year" },
  { a: "Be great at quick maths", b: "Be great at quick replies" }
];
