import type { Lang } from "@/lib/content";

/**
 * Coffee price on the comparison: a latte at Burien Press (423 SW 152nd St, Burien, WA)
 * is listed at $5.75+ on the shop's public Toast menu, so the card says it starts at $5.75.
 * Source checked 2026-10-21:
 * https://order.toasttab.com/online/burienpress/item-lavender-blossom-latte_244c9bc4-f9f6-425b-b0f4-d405f04b6f92
 */

export type Pair = { t: string; d: string };
export type FaqItem = { q: string; a: string };

export type SalonCopy = {
  textKenny: string;
  eyebrow: string;
  heroQuestion: string;
  heroAnswer: string;
  bookCta: string;
  callKenny: string;
  problemEyebrow: string;
  problemTitle: string;
  problemBody: string;
  pastTitle: string;
  past: Pair[];
  ownerEyebrow: string;
  ownerTitle: string;
  ownerBody: string;
  howTitle: string;
  steps: string[];
  phoneKicker: string;
  phoneIncoming: string;
  phoneAnswered: string;
  phoneBooked: string;
  phoneSummaryLabel: string;
  phoneSummary: string;
  photoReception: string;
  photoColor: string;
  photoTogether: string;
  photoOwner: string;
  priceEyebrow: string;
  priceTitle: string;
  priceLine: string;
  refundBadge: string;
  pricePoints: string[];
  renewal: string;
  compareTitle: string;
  dayTitle: string;
  dayBody: string;
  apptTitle: string;
  apptBody: string;
  calcLabel: string;
  calcPlaceholder: string;
  bookingsCover: (count: number) => string;
  deskTitle: string;
  deskIntro: string;
  deskMoneyLabel: string;
  deskMoney: string;
  deskOtherLabel: string;
  deskOther: string;
  faqEyebrow: string;
  faqTitle: string;
  faq: FaqItem[];
  nextTitle: string;
  next: Pair[];
  whoTitle: string;
  whoBody: string;
  trustTitle: string;
  trust: string[];
  links: {
    trust: string;
    privacy: string;
    terms: string;
    sms: string;
    agreement: string;
    contact: string;
  };
  talkKenny: string;
};

const renewalEn =
  "If your monthly rate is going to change, we'll give you at least 30 days' notice.";

const en: SalonCopy = {
  textKenny: "Text Kenny",
  eyebrow: "Front Desk for salons",
  heroQuestion: "Missing bookings while you're with a client?",
  heroAnswer:
    "Front Desk answers your salon's phone in your shop's name when you can't pick up. It greets the caller, answers common questions about your services and hours, and helps book the next appointment, so you can keep your hands on the client in your chair.",
  bookCta: "Book a 15-minute demo",
  callKenny: "Call Kenny",
  problemEyebrow: "The problem",
  problemTitle: "The phone rings. Your hands are full.",
  problemBody:
    "You're mid-color, mid-fill, or mid-lash set. The phone rings with a client in your chair, you can't pick up, and that caller books with the next salon on their list.",
  pastTitle: "What you've probably tried",
  past: [
    { t: "Voicemail", d: "Many callers won't leave a message. They just call the next salon." },
    { t: "Calling back later", d: "By the time you're free, they may have already booked somewhere else." },
    {
      t: "Hiring a front desk",
      d: "A receptionist is a real monthly cost, and still leaves gaps at breaks, lunch, and the end of the day.",
    },
  ],
  ownerEyebrow: "Blades of Grass Marketing and Solutions",
  ownerTitle: "Be the owner you pictured on opening day.",
  ownerBody:
    "Chairs full. Calls answered in your salon's name. New clients booked while you finish the color. When you look up, there's a summary waiting, and nothing slipped through. That's the shop you set out to build.",
  howTitle: "How does it work?",
  steps: [
    "We set it up with your services, hours, prices, and how you like to book.",
    "When you're busy and a call goes unanswered, Front Desk picks up in your shop's name.",
    "The caller gets answers and a booking, and you see who called and what they needed.",
  ],
  phoneKicker: "Front Desk",
  phoneIncoming: "Incoming call",
  phoneAnswered: "Answered as [Your Salon]",
  phoneBooked: "Booked: Tue 2:00 PM, color",
  phoneSummaryLabel: "Summary",
  phoneSummary: "Maya · new color client · Tuesday at 2:00.",
  photoReception: "Smiling receptionist at a salon front desk",
  photoColor: "Stylist applying hair color while a client sits in the salon chair",
  photoTogether: "Hairstylist and client smiling together during an appointment",
  photoOwner: "Salon owner checking appointments on a tablet beside her chair",
  priceEyebrow: "Pricing",
  priceTitle: "What does it cost?",
  priceLine: "$297/month plus tax, month-to-month",
  refundBadge: "Not happy in your first month for any reason? Full refund.",
  pricePoints: [
    "Calls answered in your salon's name, help booking the next appointment, and a summary of who called and what they needed.",
  ],
  renewal: renewalEn,
  compareTitle: "About $10 a day. Less than your morning coffee run.",
  dayTitle: "A morning coffee run",
  dayBody:
    "A latte at Burien Press in Burien starts at $5.75. Two of those already cost more than a day of this.",
  apptTitle: "or a couple of appointments a month",
  apptBody: "If one missed call is a service you already sell, a few saved bookings can cover the month.",
  calcLabel: "Input your average service cost",
  calcPlaceholder: "Input your average service cost",
  bookingsCover: (count) =>
    count === 1 ? "booking a month covers the monthly price." : "bookings a month cover the monthly price.",
  deskTitle: "Less than a part-time front desk",
  deskIntro: "Hiring someone to answer the phone is a monthly cost, and the phone still has gaps.",
  deskMoneyLabel: "Money",
  deskMoney: "Wages, payroll tax, training time, turnover, sick days, and coverage when they're out.",
  deskOtherLabel: "Besides the money",
  deskOther: "Managing schedules, missed calls during breaks or busy times, and rehiring when someone leaves.",
  faqEyebrow: "Straight answers",
  faqTitle: "Questions salon owners ask",
  faq: [
    {
      q: "Is this AI?",
      a: "Yes, we use AI, and we're way more than AI. It's a virtual front desk set up for your salon. Call the demo and judge it yourself.",
    },
    {
      q: "Will callers know it's my shop?",
      a: "Calls are answered in your salon's name.",
    },
    {
      q: "What if it doesn't work for my salon?",
      a: "Tell us in your first month and you get a full refund.",
    },
    {
      q: "Do I need to learn new technology?",
      a: "We handle the setup. You tell us how your shop works.",
    },
  ],
  nextTitle: "What happens next",
  next: [
    { t: "15-minute demo", d: "Book a time and talk with Kenny directly about how your shop runs." },
    {
      t: "Setup handled for you",
      d: "We set up Front Desk with your services, hours, prices, and how you like to book.",
    },
    { t: "Month to month", d: "Cancel anytime." },
  ],
  whoTitle: "Who is behind this?",
  whoBody:
    "Kenny Mack, founder of Blades of Grass Marketing. Call, email, or book a demo and you talk to Kenny directly.",
  trustTitle: "Trust & terms",
  trust: [
    "We believe in clear expectations.",
    "Listings should be accurate and easy to correct.",
    "Automated communication should be used responsibly and with appropriate consent.",
    "Multilingual support should be represented accurately.",
    "Paid services, refund terms, cancellation terms, and responsibilities should be clear before service begins.",
  ],
  links: {
    trust: "Trust",
    privacy: "Privacy",
    terms: "Terms",
    sms: "SMS Terms",
    agreement: "Service Agreement",
    contact: "Contact",
  },
  talkKenny: "Talk With Kenny",
};

const vi: SalonCopy = {
  textKenny: "Nhắn Kenny",
  eyebrow: "Front Desk cho salon",
  heroQuestion: "Lỡ lịch đặt trong lúc bạn đang ở với khách?",
  heroAnswer:
    "Front Desk trả lời điện thoại của tiệm bạn bằng tên tiệm khi bạn không bắt máy được. Bên đó chào người gọi, trả lời những câu thường gặp về dịch vụ và giờ mở cửa, rồi giúp đặt lịch kế tiếp, để tay bạn vẫn ở trên khách đang ngồi ghế.",
  bookCta: "Đặt demo 15 phút",
  callKenny: "Gọi Kenny",
  problemEyebrow: "Vấn đề",
  problemTitle: "Điện thoại reo. Tay bạn đang bận.",
  problemBody:
    "Bạn đang nhuộm, đang đắp, hoặc đang làm mi. Điện thoại reo khi khách còn trên ghế, bạn không bắt máy được, và người gọi đó đặt tiệm kế tiếp trong danh sách.",
  pastTitle: "Những cách bạn có lẽ đã thử",
  past: [
    { t: "Hộp thư thoại", d: "Nhiều người gọi không để lại lời nhắn. Họ gọi tiệm kế tiếp." },
    { t: "Gọi lại sau", d: "Đến lúc bạn rảnh, họ có thể đã đặt chỗ khác." },
    {
      t: "Thuê người trực quầy",
      d: "Một lễ tân là chi phí mỗi tháng thật sự, và vẫn có khoảng trống lúc nghỉ, lúc ăn trưa, và cuối ngày.",
    },
  ],
  ownerEyebrow: "Blades of Grass Marketing and Solutions",
  ownerTitle: "Làm chủ tiệm như ngày bạn mới khai trương.",
  ownerBody:
    "Ghế kín. Cuộc gọi được trả lời bằng tên tiệm bạn. Khách mới được đặt lịch trong lúc bạn làm nốt màu nhuộm. Ngẩng lên là có bản tóm tắt, không sót việc. Đó là tiệm bạn muốn dựng.",
  howTitle: "Cách hoạt động",
  steps: [
    "Chúng tôi dựng theo dịch vụ, giờ mở cửa, giá, và cách bạn muốn nhận lịch.",
    "Khi bạn đang bận và một cuộc gọi không được bắt máy, Front Desk nhấc máy bằng tên tiệm bạn.",
    "Người gọi được trả lời và có lịch hẹn, còn bạn thấy ai đã gọi và họ cần gì.",
  ],
  phoneKicker: "Front Desk",
  phoneIncoming: "Cuộc gọi đến",
  phoneAnswered: "Trả lời với tên [Tiệm của bạn]",
  phoneBooked: "Đã đặt: Thứ Ba, 2:00 chiều, nhuộm",
  phoneSummaryLabel: "Tóm tắt",
  phoneSummary: "Maya · khách nhuộm mới · Thứ Ba lúc 2:00.",
  photoReception: "Lễ tân salon đang cười tại quầy",
  photoColor: "Thợ đang nhuộm tóc cho khách ngồi trên ghế salon",
  photoTogether: "Thợ làm tóc và khách cùng cười trong buổi hẹn",
  photoOwner: "Chủ salon xem lịch hẹn trên máy tính bảng cạnh ghế",
  priceEyebrow: "Giá",
  priceTitle: "Chi phí là bao nhiêu?",
  priceLine: "$297/tháng cộng thuế, thanh toán từng tháng",
  refundBadge: "Tháng đầu không hài lòng vì bất kỳ lý do nào? Hoàn đủ tiền.",
  pricePoints: [
    "Cuộc gọi được trả lời bằng tên tiệm bạn, được giúp đặt lịch kế tiếp, và một bản tóm tắt ai đã gọi cùng họ cần gì.",
  ],
  renewal: "Nếu giá theo tháng sắp đổi, chúng tôi báo trước ít nhất 30 ngày.",
  compareTitle: "Khoảng $10 một ngày. Ít hơn một vòng cà phê buổi sáng.",
  dayTitle: "Một vòng cà phê buổi sáng",
  dayBody:
    "Một ly latte tại Burien Press ở Burien có giá từ $5.75. Hai ly như vậy đã nhiều hơn số tiền của một ngày.",
  apptTitle: "hoặc vài lịch hẹn mỗi tháng",
  apptBody: "Nếu một cuộc gọi lỡ là một dịch vụ bạn vẫn đang bán, vài lịch giữ được là đủ cho cả tháng.",
  calcLabel: "Nhập giá dịch vụ trung bình của bạn",
  calcPlaceholder: "Nhập giá dịch vụ trung bình của bạn",
  bookingsCover: () => "lịch hẹn mỗi tháng là đủ cho giá tháng.",
  deskTitle: "Ít hơn một lễ tân bán thời gian",
  deskIntro: "Thuê người nghe điện thoại là chi phí mỗi tháng, và điện thoại vẫn có lúc trống.",
  deskMoneyLabel: "Tiền",
  deskMoney: "Lương, thuế lương, thời gian đào tạo, người nghỉ việc, ngày ốm, và người thay khi họ vắng.",
  deskOtherLabel: "Ngoài tiền ra",
  deskOther: "Xếp lịch làm việc, cuộc gọi lỡ lúc nghỉ hoặc lúc đông khách, và tuyển lại khi có người nghỉ.",
  faqEyebrow: "Trả lời thẳng",
  faqTitle: "Câu chủ tiệm hay hỏi",
  faq: [
    {
      q: "Đây có phải AI không?",
      a: "Có, chúng tôi có dùng AI, và chúng tôi hơn AI rất nhiều. Đây là một quầy lễ tân ảo được dựng cho đúng tiệm của bạn. Hãy gọi bản demo và tự nghe.",
    },
    {
      q: "Người gọi có biết đó là tiệm của tôi không?",
      a: "Cuộc gọi được trả lời bằng tên tiệm của bạn.",
    },
    {
      q: "Nếu không hợp với tiệm tôi thì sao?",
      a: "Báo chúng tôi trong tháng đầu và bạn được hoàn đủ tiền.",
    },
    {
      q: "Tôi có phải học công nghệ mới không?",
      a: "Chúng tôi lo phần dựng. Bạn kể tiệm mình vận hành ra sao.",
    },
  ],
  nextTitle: "Việc tiếp theo",
  next: [
    { t: "Demo 15 phút", d: "Chọn giờ và nói chuyện thẳng với Kenny về cách tiệm bạn chạy." },
    {
      t: "Chúng tôi lo phần dựng",
      d: "Chúng tôi dựng Front Desk theo dịch vụ, giờ mở cửa, giá, và cách bạn muốn nhận lịch.",
    },
    { t: "Theo từng tháng", d: "Hủy khi nào cũng được." },
  ],
  whoTitle: "Ai đứng sau việc này?",
  whoBody:
    "Kenny Mack, người sáng lập Blades of Grass Marketing. Gọi, gửi email, hoặc đặt demo là bạn nói chuyện thẳng với Kenny.",
  trustTitle: "Tin cậy và điều khoản",
  trust: [
    "Chúng tôi muốn mọi kỳ vọng đều rõ.",
    "Thông tin niêm yết cần đúng và dễ sửa.",
    "Liên lạc tự động cần được dùng có trách nhiệm và với sự đồng ý phù hợp.",
    "Hỗ trợ nhiều ngôn ngữ cần được nói đúng như nó đang có.",
    "Dịch vụ trả phí, cách hoàn tiền, cách hủy, và trách nhiệm mỗi bên cần rõ trước khi bắt đầu.",
  ],
  links: {
    trust: "Tin cậy",
    privacy: "Quyền riêng tư",
    terms: "Điều khoản",
    sms: "Điều khoản SMS",
    agreement: "Thỏa thuận dịch vụ",
    contact: "Liên hệ",
  },
  talkKenny: "Nói chuyện với Kenny",
};

const es: SalonCopy = {
  textKenny: "Escribir a Kenny",
  eyebrow: "Front Desk para salones",
  heroQuestion: "¿Se te escapan reservas mientras atiendes a alguien?",
  heroAnswer:
    "Front Desk contesta el teléfono de tu salón con el nombre de tu salón cuando tú no puedes atender. Saluda a quien llama, responde las preguntas habituales sobre tus servicios y horarios, y ayuda a reservar la siguiente cita, para que sigas con quien ya está en la silla.",
  bookCta: "Reservar una demo de 15 minutos",
  callKenny: "Llamar a Kenny",
  problemEyebrow: "El problema",
  problemTitle: "Suena el teléfono. Tienes las manos ocupadas.",
  problemBody:
    "Estás a mitad de un color, un relleno o unas pestañas. Suena el teléfono con alguien en la silla, no puedes contestar, y esa persona reserva en el siguiente salón de su lista.",
  pastTitle: "Lo que probablemente ya probaste",
  past: [
    { t: "Buzón de voz", d: "Mucha gente no deja mensaje. Llama al siguiente salón." },
    { t: "Devolver la llamada después", d: "Para cuando te liberas, puede que ya hayan reservado en otro lado." },
    {
      t: "Contratar recepción",
      d: "Una recepcionista es un costo mensual de verdad, y aun así quedan huecos en los descansos, la comida y el cierre.",
    },
  ],
  ownerEyebrow: "Blades of Grass Marketing and Solutions",
  ownerTitle: "Sé quien imaginaste el día de la apertura.",
  ownerBody:
    "Sillas llenas. Llamadas contestadas con el nombre de tu salón. Clientes nuevos reservados mientras terminas el color. Cuando levantas la vista, hay un resumen esperándote y no se escapó nada. Ese es el salón que te propusiste construir.",
  howTitle: "¿Cómo funciona?",
  steps: [
    "Lo preparamos con tus servicios, horarios, precios y la forma en que te gusta reservar.",
    "Cuando estás en plena cita y una llamada queda sin contestar, Front Desk atiende con el nombre de tu salón.",
    "Quien llama recibe respuestas y una reserva, y tú ves quién llamó y qué necesitaba.",
  ],
  phoneKicker: "Front Desk",
  phoneIncoming: "Llamada entrante",
  phoneAnswered: "Contestada como [Tu salón]",
  phoneBooked: "Reservado: mar, 2:00 p. m., color",
  phoneSummaryLabel: "Resumen",
  phoneSummary: "Maya · clienta nueva de color · martes a las 2:00.",
  photoReception: "Recepcionista sonriendo en el mostrador de un salón",
  photoColor: "Estilista aplicando color mientras una clienta está en la silla",
  photoTogether: "Estilista y clienta sonriendo juntas durante una cita",
  photoOwner: "Dueña de salón revisando citas en una tableta junto a su silla",
  priceEyebrow: "Precio",
  priceTitle: "¿Cuánto cuesta?",
  priceLine: "$297 al mes más impuestos, de mes a mes",
  refundBadge: "¿No te convence el primer mes, por el motivo que sea? Reembolso completo.",
  pricePoints: [
    "Llamadas contestadas con el nombre de tu salón, ayuda para reservar la siguiente cita y un resumen de quién llamó y qué necesitaba.",
  ],
  renewal: "Si tu tarifa mensual va a cambiar, te avisamos con al menos 30 días de anticipación.",
  compareTitle: "Unos $10 al día. Menos que tu vuelta de café por la mañana.",
  dayTitle: "Una vuelta de café por la mañana",
  dayBody:
    "Un latte en Burien Press, en Burien, empieza en $5.75. Dos de esos ya cuestan más que un día de esto.",
  apptTitle: "o un par de citas al mes",
  apptBody: "Si una llamada perdida es un servicio que ya vendes, unas pocas reservas salvadas cubren el mes.",
  calcLabel: "Escribe el precio promedio de tu servicio",
  calcPlaceholder: "Escribe el precio promedio de tu servicio",
  bookingsCover: (count) =>
    count === 1 ? "cita al mes cubre el precio mensual." : "citas al mes cubren el precio mensual.",
  deskTitle: "Menos que una recepción de medio tiempo",
  deskIntro: "Contratar a alguien para contestar el teléfono es un costo mensual, y el teléfono igual tiene huecos.",
  deskMoneyLabel: "Dinero",
  deskMoney: "Sueldos, impuesto de nómina, tiempo de capacitación, rotación, días de enfermedad y cobertura cuando faltan.",
  deskOtherLabel: "Además del dinero",
  deskOther: "Organizar horarios, llamadas que se pierden en descansos o en horas llenas, y volver a contratar cuando alguien se va.",
  faqEyebrow: "Respuestas directas",
  faqTitle: "Preguntas de quien tiene un salón",
  faq: [
    {
      q: "¿Esto es IA?",
      a: "Sí, usamos IA, y somos mucho más que IA. Es una recepción virtual preparada para tu salón. Llama a la demo y júzgalo tú.",
    },
    {
      q: "¿Quien llama sabrá que es mi salón?",
      a: "Las llamadas se contestan con el nombre de tu salón.",
    },
    {
      q: "¿Y si no funciona para mi salón?",
      a: "Avísanos en tu primer mes y recibes un reembolso completo.",
    },
    {
      q: "¿Tengo que aprender tecnología nueva?",
      a: "Nosotros preparamos todo. Tú nos cuentas cómo funciona tu salón.",
    },
  ],
  nextTitle: "Qué sigue",
  next: [
    { t: "Demo de 15 minutos", d: "Reserva un horario y habla directo con Kenny sobre cómo funciona tu salón." },
    {
      t: "La preparación va por nuestra cuenta",
      d: "Preparamos Front Desk con tus servicios, horarios, precios y la forma en que te gusta reservar.",
    },
    { t: "De mes a mes", d: "Cancela cuando quieras." },
  ],
  whoTitle: "¿Quién está detrás de esto?",
  whoBody:
    "Kenny Mack, fundador de Blades of Grass Marketing. Llama, escribe o reserva una demo y hablas directo con Kenny.",
  trustTitle: "Confianza y términos",
  trust: [
    "Creemos en expectativas claras.",
    "Los listados deben ser correctos y fáciles de corregir.",
    "La comunicación automatizada debe usarse con responsabilidad y con el consentimiento que corresponde.",
    "El apoyo en varios idiomas debe presentarse tal como es.",
    "Los servicios de pago, el reembolso, la cancelación y las responsabilidades deben estar claros antes de empezar.",
  ],
  links: {
    trust: "Confianza",
    privacy: "Privacidad",
    terms: "Términos",
    sms: "Términos de SMS",
    agreement: "Acuerdo de servicio",
    contact: "Contacto",
  },
  talkKenny: "Hablar con Kenny",
};

export const salonCopy: Record<Lang, SalonCopy> = { en, vi, es };

/** Pre-tax monthly price used by the calculator. The dollar amount is shown once, in the price line. */
export const MONTHLY_PRICE = 297;
