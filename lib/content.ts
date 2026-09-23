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
 * Kenny’s own note. Kept in the English he would say it.
 * Do not translate these paragraphs for vi/es — the UI explains that.
 */
export const BIO = [
  "I’m Kenneth “Kenny” Mack. I work with Blades of Grass in the Seattle area. I help local beauty and service businesses be found, contacted, and booked — through conversations and personal support. Our team builds tools for that work.",
  "The first step is a free listing the owner approves. An SMS front desk is in development.",
] as const;

export type Copy = {
  language: string;
  area: string;
  tagline: string;
  call: string;
  text: string;
  email: string;
  book: string;
  directory: string;
  howHeading: string;
  howItems: readonly string[];
  storyHeading: string;
  storyNote: string | null;
  contactHeading: string;
  callOrText: string;
  emailWord: string;
  family: string;
};

export const copy: Record<Lang, Copy> = {
  en: {
    language: "Language",
    area: "Seattle area",
    tagline:
      "Helping local beauty and service businesses be found, contacted, and booked.",
    call: "Call",
    text: "Text",
    email: "Email",
    book: "Book a conversation",
    directory: "Beauty directory",
    howHeading: "How we help",
    howItems: [
      "Conversations and personal support",
      "A free listing first, approved by the owner",
      "The team builds tools — an SMS front desk is in development",
    ],
    storyHeading: "A note from Kenny",
    storyNote: null,
    contactHeading: "Contact",
    callOrText: "Call or text",
    emailWord: "email",
    family: "Dad to Prana (8) and Sergen (7).",
  },
  vi: {
    language: "Ngôn ngữ",
    area: "Khu vực Seattle",
    tagline:
      "Giúp các tiệm làm đẹp và dịch vụ địa phương được tìm thấy, liên hệ, và đặt lịch.",
    call: "Gọi",
    text: "Nhắn tin",
    email: "Email",
    book: "Đặt một cuộc trò chuyện",
    directory: "Danh bạ làm đẹp",
    howHeading: "Cách chúng tôi giúp",
    howItems: [
      "Trò chuyện và hỗ trợ trực tiếp",
      "Bắt đầu bằng danh sách miễn phí, được chủ tiệm chấp thuận",
      "Đội ngũ xây công cụ — quầy lễ tân SMS đang được phát triển",
    ],
    storyHeading: "Lời của Kenny",
    storyNote: "Phần dưới đây là lời Kenny viết, bằng tiếng Anh.",
    contactHeading: "Liên hệ",
    callOrText: "Gọi hoặc nhắn tin",
    emailWord: "email",
    family: "Bố của Prana (8 tuổi) và Sergen (7 tuổi).",
  },
  es: {
    language: "Idioma",
    area: "Área de Seattle",
    tagline:
      "Ayuda a que los negocios locales de belleza y servicios sean encontrados, contactados y reservados.",
    call: "Llamar",
    text: "Mensaje",
    email: "Correo",
    book: "Reservar una conversación",
    directory: "Directorio de belleza",
    howHeading: "Cómo ayudamos",
    howItems: [
      "Conversaciones y apoyo personal",
      "Primero, un listado gratuito aprobado por el dueño",
      "El equipo construye herramientas; una recepción por SMS está en desarrollo",
    ],
    storyHeading: "En palabras de Kenny",
    storyNote: "El texto que sigue está en palabras de Kenny, en inglés.",
    contactHeading: "Contacto",
    callOrText: "Llamar o enviar mensaje",
    emailWord: "correo",
    family: "Papá de Prana (8) y Sergen (7).",
  },
};

export const LANG_OPTIONS: { id: Lang; label: string }[] = [
  { id: "en", label: "English" },
  { id: "vi", label: "Tiếng Việt" },
  { id: "es", label: "Español" },
];
