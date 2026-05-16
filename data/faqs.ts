export type FAQItem = {
  question: string;
  answer: string;
};

export const commonFaqs: Record<string, FAQItem[]> = {
  boredButton: [
    {
      question: "Does the Bored Button use my personal data?",
      answer: "No. It picks from a local list in your browser. Recent activity may be saved on your device only so BoredBee can show what you used lately."
    },
    {
      question: "Can I share an activity?",
      answer: "Yes. Use the share button. On supported phones it opens the native share sheet; otherwise BoredBee copies the page link."
    }
  ],
  reaction: [
    {
      question: "What is a good reaction time?",
      answer: "Many casual browser scores land around 200 to 350 ms. Your device, display, mouse, sleep, and focus can all affect the result."
    },
    {
      question: "Why did an early click fail?",
      answer: "The test only counts clicks after the screen tells you to click. Early clicks are blocked so the score stays fair."
    }
  ],
  memory: [
    {
      question: "Is the memory game saved online?",
      answer: "No. Moves, time, and best result stay on your device with localStorage."
    },
    {
      question: "Can I play with a keyboard?",
      answer: "Yes. Use Tab to focus cards and Enter or Space to flip them."
    }
  ],
  typing: [
    {
      question: "How is WPM calculated?",
      answer: "BoredBee uses the common five-characters-per-word convention and divides by elapsed minutes."
    },
    {
      question: "Is my typed text sent anywhere?",
      answer: "No. The typing test runs in your browser and does not send your input to a server."
    }
  ],
  dailyRiddle: [
    {
      question: "How does the riddle change daily?",
      answer: "BoredBee calculates a date-based index from a local riddle list. No backend is needed."
    },
    {
      question: "Where is my streak stored?",
      answer: "Your streak is saved in localStorage on the current browser and device."
    }
  ],
  truthOrDare: [
    {
      question: "Are the prompts family-friendly?",
      answer: "Yes. The starter prompt set is clean, lightweight, and designed to be safe for mixed groups."
    },
    {
      question: "Can I choose only truths or only dares?",
      answer: "Yes. Use the filter control to switch between Truth, Dare, and Mixed."
    }
  ],
  wouldYouRather: [
    {
      question: "Are votes public?",
      answer: "No. Votes are local to your current device only and are not sent anywhere."
    },
    {
      question: "Can I reset votes?",
      answer: "Use the reset button on the page to clear the current device's vote counts."
    }
  ],
  emi: [
    {
      question: "Is the EMI calculator exact?",
      answer: "It uses the standard EMI formula, but lenders may add fees, insurance, taxes, or different rounding rules."
    },
    {
      question: "Can I use it for Indian loans?",
      answer: "Yes. The calculator defaults to rupees and works well for common Indian loan examples."
    }
  ],
  sip: [
    {
      question: "Is this investment advice?",
      answer: "No. The SIP calculator is an educational estimate. Actual mutual fund returns can rise or fall."
    },
    {
      question: "Does it include taxes or exit loads?",
      answer: "No. It shows a simplified future-value estimate before taxes, loads, and fees."
    }
  ],
  fuel: [
    {
      question: "Can I change the currency?",
      answer: "Yes. The default is rupees, but you can type another currency symbol."
    },
    {
      question: "Does mileage mean km per litre?",
      answer: "By default, yes. Enter distance in kilometres and mileage in kilometres per litre."
    }
  ],
  word: [
    {
      question: "Is my text uploaded?",
      answer: "No. The word counter works entirely in your browser."
    },
    {
      question: "How is reading time estimated?",
      answer: "BoredBee estimates reading time at about 200 words per minute."
    }
  ],
  date: [
    {
      question: "What does include end date mean?",
      answer: "It adds one day to the result, useful for counting a range where both the start and end dates count."
    },
    {
      question: "Are months exact?",
      answer: "The month and year values are approximations because calendar months have different lengths."
    }
  ]
};
