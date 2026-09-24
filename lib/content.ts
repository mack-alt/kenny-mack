export const LANGS = ["en", "vi", "es"] as const;

export type Lang = (typeof LANGS)[number];

export const PHONE_DISPLAY = "206-743-6296";
export const PHONE_TEL = "+12067436296";
export const EMAIL = "mack@lovebog.com";
export const DIRECTORY_URL = "https://mack-alt.github.io/bog-beauty-directory/";
export const BOOK_URL =
  "https://api.leadconnectorhq.com/widget/bookings/bog-front-desk-demo";
export const STORAGE_KEY = "kenny-mack-lang";

/** Public file is served under the GitHub Pages base path. */
export const PHOTO_SRC = "/kenny-mack/kenny-family.jpg";

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
};

export const copy: Record<Lang, Copy> = {
  en: {
    language: "Language",
    callText: "Call / text",
    directory: "Directory",
    storyNote: null,
    photoAlt: "Kenny Mack with his kids, Prana and Sergen, near the Seattle waterfront",
  },
  vi: {
    language: "Ngôn ngữ",
    callText: "Gọi",
    directory: "Danh bạ",
    storyNote: "Phần dưới đây là lời Kenny viết, bằng tiếng Anh.",
    photoAlt: "Kenny Mack cùng các con, Prana và Sergen, gần bờ sông Seattle",
  },
  es: {
    language: "Idioma",
    callText: "Llamar",
    directory: "Directorio",
    storyNote: "El texto que sigue está en palabras de Kenny, en inglés.",
    photoAlt: "Kenny Mack con sus hijos, Prana y Sergen, cerca del paseo marítimo de Seattle",
  },
};

export const LANG_OPTIONS: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "vi", label: "Tiếng Việt" },
  { id: "es", label: "Español" },
];
