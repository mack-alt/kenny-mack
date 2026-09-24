export const LANGS = ["en", "vi", "es"] as const;

export type Lang = (typeof LANGS)[number];

export const PHONE_DISPLAY = "206-743-6296";
export const PHONE_TEL = "+12067436296";
export const EMAIL = "mack@lovebog.com";
export const DIRECTORY_URL = "https://mack-alt.github.io/bog-beauty-directory/";
export const BOOK_URL =
  "https://api.leadconnectorhq.com/widget/bookings/bog-front-desk-demo";
export const STORAGE_KEY = "kenny-mack-lang";

/**
 * Kenny’s own words. Kept in the English he would say them.
 * Do not translate these for vi/es — the UI says so.
 */
export const HERO = {
  lead: "I help local businesses turn more conversations into customers.",
  body: "When you're busy doing the work, somebody still needs to answer the text, follow up with the missed call, help the customer understand what you offer, and make it easy to book.",
  close: "That’s what we’re building at B-O-G.",
} as const;

export const ABOUT_BOG = [
  "Small businesses deserve powerful tools without becoming tech companies.",
  "Blades of Grass helps local businesses get discovered, communicate with customers, follow up consistently, and make booking easier.",
  "We combine AI and automation with something I care about even more: real human relationships.",
  "I meet business owners personally. We learn where customers are slipping through the cracks, then we build around the way that business actually works.",
] as const;

export const OUTCOMES = [
  {
    id: "found",
    title: "Get found",
    body: "Free local business listings that make it easier for people — including customers who speak different languages — to understand and contact you.",
  },
  {
    id: "responsive",
    title: "Stay responsive",
    body: "Tools that help handle missed calls, texts, questions and follow-up while you're busy serving customers.",
  },
  {
    id: "grow",
    title: "Grow",
    body: "Once the foundation works, we can help with reviews, reactivation, advertising and other ways to turn attention into revenue.",
  },
] as const;

/** Kenny likes this line. Keep it. */
export const STORY_BEAT = "I don’t think that should be a big deal anymore.";

export const STORY = [
  "Hi, I’m Kenny.",
  "I’m a dad, salesman, entrepreneur, and founder of Blades of Grass.",
  "I love meeting people, learning how their businesses work, and finding the little places where something better could make life easier.",
  "A big part of that for me is language.",
  "Walking into local businesses, I’ve seen how quickly language can become unnecessary friction. A great business can be standing ten feet from a customer who would love what they do — and the only thing getting in the way is understanding each other.",
  STORY_BEAT,
  "That’s why multilingual support is being built naturally into B-O-G. I want customers to be able to discover a business, understand what it offers, ask questions, and take the next step in the language that feels most comfortable to them.",
  "And I want that to make things easier for the business owner too — not give them another complicated system to manage.",
  "Blades of Grass started with a simple idea:",
  "What if neighborhood businesses could have access to powerful technology, communication, and follow-up — while keeping the personality and human connection that made people love them in the first place?",
  "That’s the company I’m building.",
  "And the two most important people in my world are Prana and Sergen. Being their dad has a lot to do with why I’m building something of my own — and why I care about creating something useful, welcoming, and human.",
] as const;

export type Copy = {
  language: string;
  role: string;
  textKenny: string;
  book: string;
  whatHeading: string;
  listings: string;
  aboutHeading: string;
  storyNote: string | null;
  contactHeading: string;
  call: string;
  directory: string;
  photoAlt: string;
};

export const copy: Record<Lang, Copy> = {
  en: {
    language: "Language",
    role: "Founder · Blades of Grass",
    textKenny: "Text Kenny",
    book: "Book a Conversation",
    whatHeading: "What is Blades of Grass?",
    listings: "See the listings",
    aboutHeading: "About Kenny",
    storyNote: null,
    contactHeading: "Contact",
    call: "Call",
    directory: "Directory",
    photoAlt: "Kenny Mack with his kids, Prana and Sergen, near the Seattle waterfront",
  },
  vi: {
    language: "Ngôn ngữ",
    role: "Nhà sáng lập · Blades of Grass",
    textKenny: "Nhắn Kenny",
    book: "Đặt một cuộc trò chuyện",
    whatHeading: "Blades of Grass là gì?",
    listings: "Xem danh sách",
    aboutHeading: "Về Kenny",
    storyNote: "Phần dưới đây là lời Kenny viết, bằng tiếng Anh.",
    contactHeading: "Liên hệ",
    call: "Gọi",
    directory: "Danh bạ",
    photoAlt: "Kenny Mack cùng các con, Prana và Sergen, gần bờ sông Seattle",
  },
  es: {
    language: "Idioma",
    role: "Fundador · Blades of Grass",
    textKenny: "Escribe a Kenny",
    book: "Reservar una conversación",
    whatHeading: "¿Qué es Blades of Grass?",
    listings: "Ver los listados",
    aboutHeading: "Sobre Kenny",
    storyNote: "El texto que sigue está en palabras de Kenny, en inglés.",
    contactHeading: "Contacto",
    call: "Llamar",
    directory: "Directorio",
    photoAlt: "Kenny Mack con sus hijos, Prana y Sergen, cerca del paseo marítimo de Seattle",
  },
};

export const LANG_OPTIONS: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "vi", label: "Tiếng Việt" },
  { id: "es", label: "Español" },
];
