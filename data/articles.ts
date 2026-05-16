import type { FAQItem } from "./faqs";

export type Article = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  related: string[];
  faqs: FAQItem[];
  sections: { heading: string; body: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "what-is-emi",
    title: "What Is EMI?",
    description: "Understand EMI in simple terms, including principal, interest, tenure, and how monthly loan payments are calculated.",
    updated: "2026-05-13",
    related: ["/tools/emi-calculator", "/explain/what-is-sip", "/tools/sip-calculator"],
    faqs: [
      { question: "What does EMI stand for?", answer: "EMI stands for Equated Monthly Instalment. It is the fixed amount you usually pay every month to repay a loan." },
      { question: "Does a lower EMI always mean a cheaper loan?", answer: "No. A longer tenure can reduce monthly EMI but increase the total interest paid over the full loan." }
    ],
    sections: [
      {
        heading: "EMI in plain English",
        body: [
          "EMI is the monthly payment you make toward a loan. It combines a part of the borrowed amount, called principal, and a part of the lender's charge, called interest.",
          "For example, if you take a bike loan, phone loan, home loan, or personal loan in India, the lender usually quotes an EMI so you can judge whether the payment fits your monthly budget."
        ]
      },
      {
        heading: "What affects EMI?",
        body: [
          "Three inputs matter most: loan amount, annual interest rate, and tenure. Higher loan amount or higher interest usually increases EMI. A longer tenure usually lowers EMI but can increase total interest.",
          "This is why comparing only the monthly EMI can be misleading. You should also check the total repayment."
        ]
      },
      {
        heading: "How to use it wisely",
        body: [
          "Use the EMI calculator to try different tenures before you commit. If the EMI feels comfortable but the total interest looks too high, test a shorter tenure or a bigger down payment.",
          "The calculator is educational. Real loan offers may include processing fees, insurance, taxes, prepayment rules, or lender-specific rounding."
        ]
      }
    ]
  },
  {
    slug: "what-is-sip",
    title: "What Is SIP?",
    description: "A beginner-friendly guide to SIP investing, compounding, rupee-cost averaging, and return estimates.",
    updated: "2026-05-13",
    related: ["/tools/sip-calculator", "/explain/what-is-emi", "/tools/emi-calculator"],
    faqs: [
      { question: "Is SIP the same as a mutual fund?", answer: "No. SIP is a method of investing regularly. A mutual fund is one possible investment product you can invest in through SIP." },
      { question: "Are SIP returns guaranteed?", answer: "No. Market-linked investments can go up or down. A calculator only estimates possible outcomes." }
    ],
    sections: [
      {
        heading: "SIP in simple terms",
        body: [
          "A Systematic Investment Plan, or SIP, is a way to invest a fixed amount regularly. Many people use monthly SIPs for mutual funds because the habit is simple and automatic.",
          "Instead of trying to guess the perfect day to invest, SIP spreads investments across many months."
        ]
      },
      {
        heading: "Why people use SIPs",
        body: [
          "SIPs can help build discipline and make investing feel less intimidating. They also use rupee-cost averaging: when prices are high, the same amount buys fewer units; when prices are low, it buys more.",
          "Over long periods, compounding can become powerful, but it needs time and patience."
        ]
      },
      {
        heading: "What the calculator shows",
        body: [
          "The SIP calculator estimates invested amount, returns, and future value based on a steady monthly investment and assumed annual return.",
          "It does not include taxes, fund expense ratios, exit loads, inflation, or changes in investment amount."
        ]
      }
    ]
  },
  {
    slug: "how-reaction-time-works",
    title: "How Reaction Time Works",
    description: "Learn what reaction time measures, why scores change, and how to interpret browser reaction tests.",
    updated: "2026-05-13",
    related: ["/play/reaction-test", "/daily/riddle", "/play/memory-card-game"],
    faqs: [
      { question: "Why is my reaction time different each try?", answer: "Attention, fatigue, device latency, display refresh rate, and random timing can all change your score." },
      { question: "Can I train reaction time?", answer: "Practice can help you focus and respond consistently, but hardware and alertness still matter." }
    ],
    sections: [
      {
        heading: "What reaction time measures",
        body: [
          "Reaction time is the delay between noticing a signal and making a response. In a browser test, that means the time between the screen changing and your click or tap.",
          "Your score includes human processing time plus device and browser delay, so it is best for casual comparison, not medical measurement."
        ]
      },
      {
        heading: "Why waiting matters",
        body: [
          "A good reaction test uses a random wait before showing the signal. That prevents you from memorising the timing and clicking early.",
          "If you click before the signal, the attempt is invalid because it measures guessing, not reacting."
        ]
      },
      {
        heading: "How to get a cleaner score",
        body: [
          "Use the same device, close distracting tabs, place your finger or mouse comfortably, and try a few rounds instead of trusting one attempt.",
          "Compare your own trend over time rather than treating one score as your true speed."
        ]
      }
    ]
  },
  {
    slug: "how-typing-speed-is-calculated",
    title: "How Typing Speed Is Calculated",
    description: "Understand WPM, accuracy, five-character words, and why corrected typing speed matters.",
    updated: "2026-05-13",
    related: ["/play/typing-speed-test", "/tools/word-counter", "/explain/how-reaction-time-works"],
    faqs: [
      { question: "What is WPM?", answer: "WPM means words per minute. Most typing tests treat five characters as one standard word." },
      { question: "Is accuracy more important than speed?", answer: "For real writing and work, yes. A high WPM with many errors usually costs time later." }
    ],
    sections: [
      {
        heading: "The standard WPM idea",
        body: [
          "Typing tests often count one word as five characters, including spaces. This keeps scoring fair across short and long words.",
          "BoredBee estimates WPM from typed characters, elapsed time, and the five-character convention."
        ]
      },
      {
        heading: "Accuracy changes the story",
        body: [
          "Raw speed can look impressive even when the text is messy. Accuracy compares your typed text with the target paragraph so mistakes are visible.",
          "For practical typing, a steady accurate pace beats frantic corrections."
        ]
      },
      {
        heading: "How to improve",
        body: [
          "Relax your shoulders, keep your wrists comfortable, and read a few words ahead. Slow down slightly if mistakes keep stacking up.",
          "Short daily practice is usually better than one long session when you are tired."
        ]
      }
    ]
  },
  {
    slug: "how-to-use-boredbee",
    title: "How to Use BoredBee",
    description: "A quick guide to BoredBee's no-login games, tools, daily challenge, local storage, and privacy-friendly design.",
    updated: "2026-05-13",
    related: ["/play/bored-button", "/daily/riddle", "/tools"],
    faqs: [
      { question: "Do I need an account?", answer: "No. BoredBee does not include authentication, profiles, or a backend account system." },
      { question: "What does BoredBee save?", answer: "Only small local preferences and scores, such as dark mode, streaks, best reaction time, best typing speed, and recent activity." }
    ],
    sections: [
      {
        heading: "Pick the mood, not a menu maze",
        body: [
          "Use Play for quick games, Party for clean group prompts, Tools for useful calculators, Daily for a small streak, and Explain for beginner-friendly guides.",
          "If you do not want to choose, press the Bored Button and let the site suggest something tiny."
        ]
      },
      {
        heading: "No login by design",
        body: [
          "BoredBee is built around instant use. Scores and preferences stay in localStorage on your device instead of requiring an account.",
          "That keeps the site quick, lightweight, and easy to use on shared or low-bandwidth devices."
        ]
      },
      {
        heading: "How to get more from it",
        body: [
          "Use a game when your brain needs a spark, use a tool when you need a quick answer, and use an explainer when you want the idea behind the calculator.",
          "Most pages include related links so you can move from a tool to its explanation or from a prompt to another quick activity."
        ]
      }
    ]
  }
];
