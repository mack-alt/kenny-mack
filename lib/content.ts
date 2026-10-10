export const LANGS = ["en", "vi", "es"] as const;

export type Lang = (typeof LANGS)[number];

export const PHONE_DISPLAY = "206-743-6296";
export const PHONE_TEL = "+12067436296";
export const EMAIL = "mack@lovebog.com";
export const DIRECTORY_URL = "https://mack-alt.github.io/bog-beauty-directory/";
export const BOOK_URL =
  "https://api.leadconnectorhq.com/widget/bookings/bog-front-desk-demo";
export const STORAGE_KEY = "kenny-mack-lang";
export const CARD_URL = "https://mack-alt.github.io/kenny-mack/";

/** Public files are served under the GitHub Pages base path. */
export const PHOTO_SRC = "/kenny-mack/kenny-family.jpg";
export const VCARD_HREF = "/kenny-mack/kenny-mack.vcf";
export const QR_SRC = "/kenny-mack/contact-qr.svg";
/** Explainer cuts. English is the default. Captions are burned into both. */
export const DEMO_VIDEO_SRC = "/kenny-mack/bog-explainer-en-v4.mp4";
export const DEMO_VIDEO_VI_SRC = "/kenny-mack/bog-explainer-vi.mp4";
export const DEMO_POSTER_SRC = "/kenny-mack/bog-explainer-poster-v4.jpg";
/** Caption taken from the demo’s own words. */
export const DEMO_CAPTION = "From missed call to booked.";

/** English facts. The story in `lib/card-copy.ts` stays as written. */
export const ROLE_LINE = "Founder, Blades of Grass";
export const FOUNDING_LABEL = "Founding shop · first ten";
export const FOUNDING_PRICE = "$297 a month plus tax, guaranteed for your first year.";
export const FOUNDING_DETAIL =
  "The full front desk for your shop: your calls get answered as well as your texts, so customers aren't left waiting while your hands are busy. Calls and texts are included, it's month to month, and billing starts when your line goes live. Free with it: a directory listing and a one-page shop website.";
export const FOUNDING_ANNUAL_LABEL = "Annual option";
export const FOUNDING_ANNUAL =
  "After your first month, you can choose $2,500 plus tax for the next full year, which saves $1,064 compared with paying monthly.";
export const FOUNDING_GUARANTEE_LABEL = "First-month satisfaction guarantee";
export const FOUNDING_GUARANTEE =
  "If you're not happy in your first month, you get your money back or a credit toward another service. We'll ask for a quick chance to hear your feedback, but it's not required.";
/** Renewal wording, verbatim from the final terms. */
export const FOUNDING_RENEWAL =
  "We'll give you at least 30 days' notice of your renewal rate before your founding monthly rate or prepaid annual term ends.";

/**
 * Interface chrome only. The card’s story and offers stay in English
 * (`lib/card-copy.ts`) on every language.
 */
export type Copy = {
  language: string;
  callText: string;
  directory: string;
  storyNote: string | null;
  photoAlt: string;
  skip: string;
  saveContact: string;
  qrAlt: string;
  dockLabel: string;
};

export const copy: Record<Lang, Copy> = {
  en: {
    language: "Language",
    callText: "Call / text",
    directory: "Directory",
    storyNote: null,
    photoAlt: "Kenny Mack with his kids, Prana and Sergen, near the Seattle waterfront",
    skip: "Skip to content",
    saveContact: "Save contact",
    qrAlt: "QR code that opens this card for Kenny Mack",
    dockLabel: "Contact",
  },
  vi: {
    language: "Ngôn ngữ",
    callText: "Gọi",
    directory: "Danh bạ",
    storyNote: "Phần dưới đây là lời Kenny viết, bằng tiếng Anh.",
    photoAlt: "Kenny Mack cùng các con, Prana và Sergen, gần bờ sông Seattle",
    skip: "Bỏ qua, đến nội dung",
    saveContact: "Lưu liên hệ",
    qrAlt: "Mã QR mở danh thiếp này của Kenny Mack",
    dockLabel: "Liên hệ",
  },
  es: {
    language: "Idioma",
    callText: "Llamar",
    directory: "Directorio",
    storyNote: "El texto que sigue está en palabras de Kenny, en inglés.",
    photoAlt: "Kenny Mack con sus hijos, Prana y Sergen, cerca del paseo marítimo de Seattle",
    skip: "Saltar al contenido",
    saveContact: "Guardar contacto",
    qrAlt: "Código QR que abre esta tarjeta de Kenny Mack",
    dockLabel: "Contacto",
  },
};

export const LANG_OPTIONS: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "vi", label: "Tiếng Việt" },
  { id: "es", label: "Español" },
];
