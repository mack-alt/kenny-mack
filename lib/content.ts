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
export const DEMO_VIDEO_SRC = "/kenny-mack/bog-stylist-demo.mp4";
export const DEMO_POSTER_SRC = "/kenny-mack/bog-stylist-demo-poster.jpg";
export const DEMO_CAPTIONS_SRC = "/kenny-mack/bog-stylist-demo.vtt";
/** Caption taken from the demo’s own words. */
export const DEMO_CAPTION = "From missed call to booked.";

/** English facts. The story in `lib/card-copy.ts` stays as written. */
export const ROLE_LINE = "Founder, Blades of Grass";
export const FOUNDING_LABEL = "Founding shop";
export const FOUNDING_PRICE = "$297 a month for the first 90 days.";
export const FOUNDING_DETAIL =
  "The front desk for a shop. Free with it: a directory listing and a one-page shop website.";

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
