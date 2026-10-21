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
export const DEMO_VIDEO_VI_SRC = "/kenny-mack/bog-explainer-vi-v4-b.mp4";
export const DEMO_POSTER_SRC = "/kenny-mack/bog-explainer-poster-v4.jpg";
/** Caption taken from the demo’s own words. */
export const DEMO_CAPTION = "From missed call to booked.";

/** English facts. The story in `lib/card-copy.ts` stays as written. */
export const ROLE_LINE = "Founder, Blades of Grass Marketing";
export const FOUNDING_LABEL = "Front Desk";
export const FOUNDING_PRICE = "$297/month plus tax, month-to-month";
export const FOUNDING_DETAIL =
  "The full front desk for your shop: your calls get answered, so customers aren't left waiting while your hands are busy. Calls are included, it's month to month, and billing starts when your line goes live. Free with it: a directory listing and a one-page shop website.";
export const FOUNDING_ANNUAL_LABEL = "Annual option";
export const FOUNDING_ANNUAL =
  "After your first month, you can choose $2,500 plus tax for the next full year, which saves $1,064 compared with paying monthly.";
export const FOUNDING_REFUND_LABEL = "First-month refund";
export const FOUNDING_REFUND = "Not happy in your first month for any reason? Full refund.";
/** At least 30 days before a monthly rate change. */
export const FOUNDING_RENEWAL =
  "If your monthly rate is going to change, we'll give you at least 30 days' notice.";

/**
 * Interface chrome. The founder card story lives in `lib/salon-copy.ts`
 * and follows the same language.
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
  demoCaption: string;
  soundOn: string;
  soundOff: string;
  play: string;
  pause: string;
  videoLanguage: string;
};

export const copy: Record<Lang, Copy> = {
  en: {
    language: "Language",
    callText: "Call",
    directory: "Directory",
    storyNote: null,
    photoAlt: "Kenny Mack with his kids, Prana and Sergen, near the Seattle waterfront",
    skip: "Skip to content",
    saveContact: "Save contact",
    qrAlt: "QR code that opens this card for Kenny Mack",
    dockLabel: "Contact",
    demoCaption: DEMO_CAPTION,
    soundOn: "Tap for sound",
    soundOff: "Mute",
    play: "Play",
    pause: "Pause",
    videoLanguage: "Video language",
  },
  vi: {
    language: "Ngôn ngữ",
    callText: "Gọi",
    directory: "Danh bạ",
    storyNote: null,
    photoAlt: "Kenny Mack cùng các con, Prana và Sergen, gần bờ sông Seattle",
    skip: "Bỏ qua, đến nội dung",
    saveContact: "Lưu liên hệ",
    qrAlt: "Mã QR mở danh thiếp này của Kenny Mack",
    dockLabel: "Liên hệ",
    demoCaption: "Từ cuộc gọi lỡ đến lịch đã đặt.",
    soundOn: "Bật tiếng",
    soundOff: "Tắt tiếng",
    play: "Phát",
    pause: "Tạm dừng",
    videoLanguage: "Ngôn ngữ video",
  },
  es: {
    language: "Idioma",
    callText: "Llamar",
    directory: "Directorio",
    storyNote: null,
    photoAlt: "Kenny Mack con sus hijos, Prana y Sergen, cerca del paseo marítimo de Seattle",
    skip: "Saltar al contenido",
    saveContact: "Guardar contacto",
    qrAlt: "Código QR que abre esta tarjeta de Kenny Mack",
    dockLabel: "Contacto",
    demoCaption: "De una llamada perdida a una hora reservada.",
    soundOn: "Activar sonido",
    soundOff: "Silenciar",
    play: "Reproducir",
    pause: "Pausa",
    videoLanguage: "Idioma del video",
  },
};

export const LANG_OPTIONS: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "vi", label: "Tiếng Việt" },
  { id: "es", label: "Español" },
];
