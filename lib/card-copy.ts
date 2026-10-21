/**
 * Founder-card wording from Nexus content v2 (2026-09-23).
 * Render these strings as written. Do not rewrite them.
 */

/** Original homepage lines, kept as written. The hero now leads with the demo caption. */
export const HERO_LINES = ["YOU TAKE CARE OF THEM.", "WE'LL GET THIS ONE READY."] as const;

export const HERO_ATTENTION = "Your attention belongs with the customer you're serving.";

export const HERO_BODY =
  "Blades of Grass (B-O-G) helps answer the calls and questions coming in around you — so your next customer can be ready when you are.";

export const HERO_PATH = "Find you. Reach you. Book your service.";

export const CTA_SEE = "See How Blades of Grass Can Help";

export const HELP_HEADING = "HOW WE HELP";

export const HELP = [
  {
    name: "FIND ME™",
    paragraphs: [
      "Make it easy to find you.",
      "Your free Blades of Grass listing brings the important things together:",
      "Services. Location. Contact. Booking. What you want customers to know.",
      "Built with multilingual access in mind so more people can understand your business and book your service.",
      "They're looking. Help them find you.",
    ],
  },
  {
    name: "FRONT DESK",
    paragraphs: [
      "Enjoy the customer in front of you. We'll get the next one ready for you.",
      "Calls come in. People have questions.",
      "You shouldn't have to interrupt the person in front of you every time someone else reaches out.",
      "Front Desk is your shop's own front desk. It answers your calls in your shop's name while you work, and books the next customer.",
      "Think of a great restaurant: When the chef is ready to cook, the host has already welcomed the guest, made them comfortable, and prepared them to be served.",
      "That's what we do for your next customer.",
      "You take care of them. We'll get this one ready.",
    ],
  },
  {
    name: "BRING ME MORE™",
    paragraphs: [
      "When the path works, bring more people through it.",
      "Once customers can find you and get answered, we can help create more opportunities.",
      "Reactivation. Reviews. Follow-up. Promotions. Loyalty. Local marketing. Advertising.",
      "We start with the customers already trying to reach you.",
      "Then we help you bring in more.",
      "Find Me → Front Desk → Bring Me More",
    ],
  },
] as const;

export const LANGUAGE_HEADING = "LANGUAGE MATTERS";

export const LANGUAGE = [
  "Sometimes a customer wants exactly what you offer, but communicating gets in the way.",
  "We want technology to make that easier.",
  "B-O-G is being built with multilingual communication from the beginning — helping customers understand your business, ask questions, and book your service in the language that feels most comfortable to them.",
  "Less friction. More understanding. More business together.",
] as const;

export const LOOK_HEADING = "LET'S LOOK AT YOUR BUSINESS";

export const LOOK = [
  "We'll look at how customers currently:",
  "Find You → Reach You → Get Answered → Book",
  "Then we'll show you where B-O-G can help.",
  "You don't need to learn the technology.",
  "That's our part.",
] as const;

export const CTA_TALK = "Talk With Kenny";

export const MEET_HEADING = "MEET KENNY";

export const MEET = [
  "Hi, I'm Kenny, founder of Blades of Grass.",
  "I spend time with local business owners and see what actually happens while they're working.",
  "There's already a real person in front of you who deserves your attention — while another person may be calling or trying to book.",
  "I built B-O-G to help those two things work together.",
  "I believe good technology should support human relationships, not interrupt them.",
  "I'm also Dad to Prana and Sergen, and building something useful, human, and my own matters deeply to me.",
] as const;

export const CTA_HI = "Say Hi to Kenny";

export const WAY_HEADING = "THE B-O-G WAY";

export const WAY = [
  "FIND ME™ — Help them discover you.",
  "FRONT DESK — Answer your calls in your shop's name, and book the next customer while you work.",
  "BRING ME MORE™ — Create more opportunities when you're ready to grow.",
] as const;

export const CTA_LOOK = "Let's Look At Your Business";

export const TRUST_HEADING = "TRUST & TERMS";

export const TRUST = [
  "We believe in clear expectations.",
  "Listings should be accurate and easy to correct.",
  "Automated communication should be used responsibly and with appropriate consent.",
  "Multilingual support should be represented accurately.",
  "Paid services, refund terms, cancellation terms, and responsibilities should be clear before service begins.",
] as const;

export const TRUST_FOOTER = ["Privacy", "Terms", "SMS Terms", "Service Agreement", "Contact"] as const;

/* ---- Front Desk sales copy (AEO format). Calls only. ---- */
export const FD_QUESTION = "What does Front Desk do for a salon?";
export const FD_ANSWER =
  "Front Desk answers your salon's phone in your shop's name when you can't pick up. It greets the caller, answers common questions about your services and hours, and helps book the next appointment, so you can keep your hands on the client in your chair.";
export const FD_PRICE_LINE = "First 10 salons: $297 a month, locked for 12 months. Month to month.";
export const FD_CTA = "Book a 15-minute demo";
export const FD_HOW_Q = "How does it work?";
export const FD_STEPS = [
  "We set it up with your services, hours, prices, and how you like to book.",
  "When you're busy and a call goes unanswered, Front Desk picks up in your shop's name.",
  "The caller gets answers and a booking, and you see who called and what they needed.",
] as const;
export const FD_PRICE_Q = "What does it cost?";
export const FD_PRICE_POINTS = [
  "Founding price for the first 10 salons only.",
  "Your $297 rate is locked for your first 12 months.",
  "Month to month. No long contract.",
  "Calls only. Texting is not part of this offer.",
  "First month: if it isn't right for you, ask for a refund or a $297 credit. No conditions.",
] as const;
export const FD_FAQ = [
  {
    q: "Is this AI?",
    a: "Yes, and we're way more than AI. Kenny sets up your Front Desk by hand, learns how your shop works, and keeps tuning it with you.",
  },
  {
    q: "Will callers know it's my shop?",
    a: "Yes. Front Desk answers in your shop's name, using your services, hours, and booking details.",
  },
  {
    q: "Does it send texts?",
    a: "No. This offer covers phone calls only.",
  },
  {
    q: "What if it doesn't work for my salon?",
    a: "Tell us in your first month and you get your money back or a $297 credit. No conditions.",
  },
  {
    q: "Do I need to learn new technology?",
    a: "No. We handle the setup. You tell us how your shop works.",
  },
] as const;
export const FD_WHO =
  "Kenny Mack, founder of Blades of Grass Marketing. Call, email, or book a demo and you talk to Kenny directly.";

/* ---- CLOSER sequence (Clarify, Label, Overview, Sell, Explain, Reinforce). Calls only. ---- */
export const CL_EYEBROW = "Front Desk for salons";
export const CL_QUESTION = "Missing bookings while you're with a client?";
export const CL_LABEL_H = "The phone rings. Your hands are full.";
export const CL_LABEL =
  "You're mid-color, mid-fill, or mid-lash set. The phone rings with a client in your chair, you can't pick up, and that caller books with the next salon on their list.";
export const CL_PAST_H = "What you've probably tried";
export const CL_PAST = [
  { t: "Voicemail", d: "Many callers won't leave a message. They just call the next salon." },
  { t: "Calling back later", d: "By the time you're free, they may have already booked somewhere else." },
  { t: "Hiring a front desk", d: "A receptionist is a real monthly cost, and still can't cover every break, every lunch, and every late call." },
] as const;
export const CL_VACATION_H = "Picture a calmer salon";
export const CL_VACATION =
  "You stay with the client in your chair. Every call gets answered in your salon's name, the caller gets help booking, and you get a summary of who called and what they needed.";
export const CL_CONCERNS_H = "Questions salon owners ask";
export const CL_NEXT_H = "What happens next";
export const CL_NEXT = [
  { t: "15-minute demo", d: "Book a time and talk with Kenny directly about how your shop runs." },
  { t: "Setup handled for you", d: "We set up Front Desk with your services, hours, prices, and how you like to book." },
  { t: "Month to month", d: "Your $297 rate stays locked for 12 months. Cancel anytime." },
] as const;
