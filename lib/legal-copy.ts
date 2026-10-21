import type { Lang } from "@/lib/content";

export type LegalBlock =
  | { kind: "h"; text: string; id?: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "contact" };

export type LegalDoc = {
  title: string;
  effective: string;
  updated: string;
  blocks: LegalBlock[];
};

export type LegalId = "trust" | "terms" | "agreement" | "privacy" | "sms";

export type LegalChrome = {
  kicker: string;
  effectiveLabel: string;
  updatedLabel: string;
  back: string;
  email: string;
  phone: string;
  footerAria: string;
};

const chrome: Record<Lang, LegalChrome> = {
  en: {
    kicker: "Blades of Grass",
    effectiveLabel: "Effective date",
    updatedLabel: "Last updated",
    back: "Back to the card",
    email: "Email:",
    phone: "Phone (call or text):",
    footerAria: "Site",
  },
  vi: {
    kicker: "Blades of Grass",
    effectiveLabel: "Ngày hiệu lực",
    updatedLabel: "Cập nhật lần cuối",
    back: "Về danh thiếp",
    email: "Email:",
    phone: "Điện thoại (gọi hoặc nhắn):",
    footerAria: "Trang",
  },
  es: {
    kicker: "Blades of Grass",
    effectiveLabel: "Fecha de entrada en vigor",
    updatedLabel: "Última actualización",
    back: "Volver a la tarjeta",
    email: "Correo:",
    phone: "Teléfono (llamada o mensaje):",
    footerAria: "Sitio",
  },
};

const dates = {
  original: { en: "October 7, 2026", vi: "7 tháng 10, 2026", es: "7 de octubre de 2026" },
  published: { en: "October 21, 2026", vi: "21 tháng 10, 2026", es: "21 de octubre de 2026" },
} as const;

function smsBlocks(lang: Lang): LegalBlock[] {
  if (lang === "vi") {
    return [
      { kind: "h", id: "sms", text: "Tin nhắn (SMS)" },
      { kind: "p", text: "**Tên chương trình:** {{program}}, từ {{name}}." },
      {
        kind: "p",
        text: "**Mục đích:** tin nhắn về lịch hẹn và chăm sóc khách từ Blades of Grass. Nghĩa là trả lời câu hỏi của bạn, xếp lịch, xác nhận và đổi lịch hẹn cùng buổi demo, và nhắn tiếp về dịch vụ Blades of Grass mà bạn đã hỏi. Những tin này có thể được gửi bằng công nghệ tự động.",
      },
      { kind: "p", text: "**Số gửi:** tin của chúng tôi đi từ {{smsNumber}}. Đây là số duy nhất chúng tôi dùng cho chương trình này." },
      {
        kind: "p",
        text: "Những điều khoản này phủ các tin Blades of Grass gửi cho chính việc của mình. Nếu một tiệm dùng quầy lễ tân Blades of Grass, tin gửi tới khách của tiệm đó là gửi cho tiệm đó. Hãy hỏi tiệm về điều khoản tin nhắn của họ.",
      },
      { kind: "h", text: "Cách bạn đồng ý nhận tin" },
      { kind: "p", text: "Chúng tôi chỉ nhắn sau khi bạn nói đồng ý một cách rõ ràng. Bạn có thể đồng ý theo một trong hai cách:" },
      {
        kind: "ul",
        items: [
          "Chọn ô chưa được chọn, ô đồng ý nhận tin, trên mẫu chat hoặc mẫu đặt demo của danh thiếp này, và gửi số điện thoại của bạn.",
          "Bạn nhắn cho chúng tôi trước. Chúng tôi chỉ trả lời đúng việc bạn hỏi.",
        ],
      },
      {
        kind: "p",
        text: "Khi chọn ô đó, bạn đồng ý rằng {{name}} có thể gửi các tin đã mô tả ở trên, kể cả tin tự động, tới số bạn đã đưa. Gọi cho chúng tôi không đăng ký nhận tin. Đồng ý nhận tin không bao giờ là điều kiện để mua bất cứ thứ gì từ Blades of Grass.",
      },
      { kind: "h", text: "Tần suất, cước, và cách ngừng" },
      { kind: "p", text: "Số lượng tin thay đổi." },
      { kind: "p", text: "Có thể áp dụng cước tin nhắn và dữ liệu." },
      { kind: "p", text: "Trả lời STOP để ngừng, HELP để được giúp." },
      {
        kind: "p",
        text: "Bạn cũng có thể ngừng bằng cách trả lời QUIT, END, CANCEL, UNSUBSCRIBE, REVOKE, hoặc OPT OUT, hoặc nói với chúng tôi theo cách hợp lý khác, như email hoặc một cuộc gọi. Chúng tôi thực hiện mọi yêu cầu ngừng kịp thời, và luôn trong vòng 10 ngày làm việc. Sau khi bạn ngừng, bạn có thể nhận một tin cuối xác nhận, rồi chúng tôi dừng. Muốn nhận lại sau này, trả lời START.",
      },
      { kind: "p", text: "Nhà mạng không chịu trách nhiệm cho tin bị trễ hoặc không gửi được." },
      { kind: "h", text: "Hỗ trợ SMS" },
      { kind: "contact" },
      {
        kind: "p",
        text: "Cách chúng tôi xử lý số di động và dữ liệu đồng ý nhận tin nằm trong [[/privacy|Chính sách quyền riêng tư]]. Số di động và dữ liệu đồng ý SMS không được chia sẻ hoặc bán.",
      },
    ];
  }
  if (lang === "es") {
    return [
      { kind: "h", id: "sms", text: "Mensajes de texto (SMS)" },
      { kind: "p", text: "**Nombre del programa:** {{program}}, de {{name}}." },
      {
        kind: "p",
        text: "**Para qué son:** mensajes de citas y de atención de Blades of Grass. Eso significa respuestas a tus preguntas, agendar, confirmar y cambiar citas y demos, y un seguimiento sobre los servicios de Blades of Grass que pediste. Estos mensajes pueden enviarse con tecnología automática.",
      },
      {
        kind: "p",
        text: "**Número que envía:** nuestros mensajes salen de {{smsNumber}}. Es el único número que usamos para este programa.",
      },
      {
        kind: "p",
        text: "Estos términos cubren los mensajes que Blades of Grass envía para su propio negocio. Si un salón usa la recepción de Blades of Grass, los mensajes a los clientes de ese salón se envían para ese salón. Pregúntale al salón por sus propios términos de mensajes.",
      },
      { kind: "h", text: "Cómo aceptas recibir mensajes" },
      { kind: "p", text: "Te escribimos solo después de que dices que sí con claridad. Puedes decir que sí de una de estas dos formas:" },
      {
        kind: "ul",
        items: [
          "Marca la casilla vacía de aceptación de mensajes en el formulario de chat o en el de reserva de la demo de esta tarjeta, y envíanos tu número.",
          "Escríbenos primero. Respondemos solo sobre lo que preguntaste.",
        ],
      },
      {
        kind: "p",
        text: "Al marcar la casilla, aceptas que {{name}} puede enviarte los mensajes descritos arriba, incluidos mensajes automáticos, al número que diste. Llamarnos no te inscribe a los mensajes. Aceptar mensajes nunca es requisito para comprar algo de Blades of Grass.",
      },
      { kind: "h", text: "Frecuencia, tarifas y cómo salir" },
      { kind: "p", text: "La frecuencia de los mensajes varía." },
      { kind: "p", text: "Pueden aplicar tarifas de mensajes y datos." },
      { kind: "p", text: "Responde STOP para salir, HELP para ayuda." },
      {
        kind: "p",
        text: "También puedes salir respondiendo QUIT, END, CANCEL, UNSUBSCRIBE, REVOKE u OPT OUT, o diciéndonoslo de otra forma razonable, como un correo o una llamada. Atendemos cada solicitud de salida pronto, y siempre dentro de 10 días hábiles. Después de salir, puedes recibir un último mensaje de confirmación, y luego paramos. Para volver a recibir mensajes más adelante, responde START.",
      },
      { kind: "p", text: "Las compañías telefónicas no son responsables de mensajes retrasados o no entregados." },
      { kind: "h", text: "Ayuda de SMS" },
      { kind: "contact" },
      {
        kind: "p",
        text: "Cómo tratamos tu número móvil y los datos de aceptación está en nuestra [[/privacy|Política de privacidad]]. Los números móviles y los datos de aceptación de SMS no se comparten ni se venden.",
      },
    ];
  }
  return [
    { kind: "h", id: "sms", text: "Text messages (SMS)" },
    { kind: "p", text: "**Program name:** {{program}}, from {{name}}." },
    {
      kind: "p",
      text: "**Purpose:** appointment and customer-service texts from Blades of Grass. That means replies to your questions, scheduling, confirming, and changing appointments and demos, and follow-up about Blades of Grass services you asked about. These texts may be sent using automated technology.",
    },
    {
      kind: "p",
      text: "**Sending number:** our texts come from {{smsNumber}}. It is the only number we use for this program.",
    },
    {
      kind: "p",
      text: "These terms cover texts Blades of Grass sends for its own business. If a shop uses the Blades of Grass front desk, texts to that shop's customers are sent for that shop. Ask the shop about its own text terms.",
    },
    { kind: "h", text: "How you opt in" },
    { kind: "p", text: "We text you only after you clearly say yes. You can say yes in either of these ways:" },
    {
      kind: "ul",
      items: [
        "Check the unchecked box agreeing to texts on the chat form or the demo booking form on this card, and send us your phone number.",
        "Text us first. We reply only about what you asked.",
      ],
    },
    {
      kind: "p",
      text: "When you check the box, you agree that {{name}} may send you the texts described above, including automated texts, at the number you gave. Calling us does not sign you up for texts. Agreeing to texts is never required to buy anything from Blades of Grass.",
    },
    { kind: "h", text: "Frequency, rates, and opting out" },
    { kind: "p", text: "Message frequency varies." },
    { kind: "p", text: "Msg & data rates may apply." },
    { kind: "p", text: "Reply STOP to opt out, HELP for help." },
    {
      kind: "p",
      text: "You can also opt out by replying QUIT, END, CANCEL, UNSUBSCRIBE, REVOKE, or OPT OUT, or by telling us in any other reasonable way, such as by email or a phone call. We honor every opt-out request promptly, and always within 10 business days. After you opt out, you may get one last text confirming it, and then we stop texting you. To get our texts again later, reply START.",
    },
    { kind: "p", text: "Carriers are not liable for delayed or undelivered messages." },
    { kind: "h", text: "SMS support" },
    { kind: "contact" },
    {
      kind: "p",
      text: "How we handle your mobile number and opt-in data is in our [[/privacy|Privacy Policy]]. Mobile numbers and SMS opt-in data are not shared or sold.",
    },
  ];
}

function trust(lang: Lang): LegalDoc {
  const date = dates.published[lang];
  if (lang === "vi") {
    return {
      title: "Tin cậy",
      effective: date,
      updated: date,
      blocks: [
        { kind: "p", text: "Chúng tôi muốn mọi kỳ vọng đều rõ." },
        { kind: "p", text: "Thông tin niêm yết cần đúng và dễ sửa." },
        { kind: "p", text: "Liên lạc tự động cần được dùng có trách nhiệm và với sự đồng ý phù hợp." },
        { kind: "p", text: "Hỗ trợ nhiều ngôn ngữ cần được nói đúng như nó đang có." },
        { kind: "p", text: "Dịch vụ trả phí, cách hoàn tiền, cách hủy, và trách nhiệm mỗi bên cần rõ trước khi bắt đầu." },
        {
          kind: "p",
          text: "Điều khoản đã viết nằm ở trang [[/terms|Điều khoản]], và điều khoản Front Desk nằm trong [[/service-agreement|Thỏa thuận dịch vụ]].",
        },
        { kind: "h", text: "Liên hệ" },
        { kind: "contact" },
      ],
    };
  }
  if (lang === "es") {
    return {
      title: "Confianza",
      effective: date,
      updated: date,
      blocks: [
        { kind: "p", text: "Creemos en expectativas claras." },
        { kind: "p", text: "Los listados deben ser correctos y fáciles de corregir." },
        { kind: "p", text: "La comunicación automatizada debe usarse con responsabilidad y con el consentimiento que corresponde." },
        { kind: "p", text: "El apoyo en varios idiomas debe presentarse tal como es." },
        {
          kind: "p",
          text: "Los servicios de pago, el reembolso, la cancelación y las responsabilidades deben estar claros antes de empezar.",
        },
        {
          kind: "p",
          text: "Los términos escritos están en la página de [[/terms|Términos]], y los de Front Desk están en el [[/service-agreement|Acuerdo de servicio]].",
        },
        { kind: "h", text: "Contacto" },
        { kind: "contact" },
      ],
    };
  }
  return {
    title: "Trust",
    effective: date,
    updated: date,
    blocks: [
      { kind: "p", text: "We believe in clear expectations." },
      { kind: "p", text: "Listings should be accurate and easy to correct." },
      { kind: "p", text: "Automated communication should be used responsibly and with appropriate consent." },
      { kind: "p", text: "Multilingual support should be represented accurately." },
      {
        kind: "p",
        text: "Paid services, refund terms, cancellation terms, and responsibilities should be clear before service begins.",
      },
      {
        kind: "p",
        text: "The written terms are on the [[/terms|Terms]] page, and the Front Desk terms are in the [[/service-agreement|Service Agreement]].",
      },
      { kind: "h", text: "Contact" },
      { kind: "contact" },
    ],
  };
}

function agreement(lang: Lang): LegalDoc {
  const date = dates.published[lang];
  if (lang === "vi") {
    return {
      title: "Thỏa thuận dịch vụ",
      effective: date,
      updated: date,
      blocks: [
        {
          kind: "p",
          text: "Thỏa thuận này phủ Front Desk cho salon, của Blades of Grass Marketing. Bắt đầu dịch vụ nghĩa là bạn đồng ý với các điều dưới đây.",
        },
        { kind: "h", text: "Dịch vụ" },
        {
          kind: "p",
          text: "Front Desk trả lời điện thoại của tiệm bạn bằng tên tiệm khi bạn không bắt máy được. Bên đó chào người gọi, trả lời những câu thường gặp về dịch vụ và giờ mở cửa, và giúp đặt lịch kế tiếp. Bạn nhận một bản tóm tắt ai đã gọi và họ cần gì.",
        },
        { kind: "h", text: "Phần dựng" },
        {
          kind: "p",
          text: "Chúng tôi dựng theo dịch vụ, giờ mở cửa, giá, và cách bạn muốn nhận lịch. Bạn kể tiệm mình vận hành ra sao, và báo khi những chi tiết đó đổi.",
        },
        { kind: "h", text: "Giá" },
        { kind: "p", text: "$297/tháng cộng thuế, thanh toán từng tháng." },
        { kind: "h", text: "Tháng đầu" },
        { kind: "p", text: "Tháng đầu không hài lòng vì bất kỳ lý do nào? Hoàn đủ tiền. Báo chúng tôi trong tháng đầu đó." },
        { kind: "h", text: "Hủy" },
        { kind: "p", text: "Dịch vụ tính theo từng tháng. Bạn có thể hủy khi nào cũng được." },
        { kind: "h", text: "Nếu giá đổi" },
        { kind: "p", text: "Nếu giá theo tháng sắp đổi, chúng tôi báo trước ít nhất 30 ngày." },
        { kind: "h", text: "Phần của bạn" },
        {
          kind: "p",
          text: "Bạn đưa dịch vụ, giờ mở cửa, giá, và cách nhận lịch cho đúng. Bạn chịu trách nhiệm về dịch vụ mình bán và về việc giữ các lịch đã đặt cho tiệm bạn.",
        },
        { kind: "h", text: "Phần của chúng tôi" },
        {
          kind: "p",
          text: "Chúng tôi trả lời cuộc gọi bằng tên tiệm bạn theo chi tiết bạn đã đưa, giúp đặt lịch kế tiếp, và đưa bạn bản tóm tắt ai đã gọi cùng họ cần gì. Chúng tôi dựng Front Desk cho tiệm bạn và tiếp tục chỉnh cùng bạn.",
        },
        { kind: "h", text: "Câu hỏi" },
        { kind: "p", text: "Câu hỏi về thỏa thuận này gửi tới liên hệ bên dưới." },
        { kind: "contact" },
      ],
    };
  }
  if (lang === "es") {
    return {
      title: "Acuerdo de servicio",
      effective: date,
      updated: date,
      blocks: [
        {
          kind: "p",
          text: "Este acuerdo cubre Front Desk para salones, de Blades of Grass Marketing. Empezar el servicio significa que aceptas lo que sigue.",
        },
        { kind: "h", text: "El servicio" },
        {
          kind: "p",
          text: "Front Desk contesta el teléfono de tu salón con el nombre de tu salón cuando tú no puedes atender. Saluda a quien llama, responde las preguntas habituales sobre tus servicios y horarios, y ayuda a reservar la siguiente cita. Recibes un resumen de quién llamó y qué necesitaba.",
        },
        { kind: "h", text: "Preparación" },
        {
          kind: "p",
          text: "Lo preparamos con tus servicios, horarios, precios y la forma en que te gusta reservar. Nos cuentas cómo funciona tu salón y nos avisas cuando esos datos cambian.",
        },
        { kind: "h", text: "Precio" },
        { kind: "p", text: "$297 al mes más impuestos, de mes a mes." },
        { kind: "h", text: "Primer mes" },
        {
          kind: "p",
          text: "¿No te convence el primer mes, por el motivo que sea? Reembolso completo. Avísanos durante ese primer mes.",
        },
        { kind: "h", text: "Cancelación" },
        { kind: "p", text: "El servicio es de mes a mes. Puedes cancelar cuando quieras." },
        { kind: "h", text: "Si cambia la tarifa" },
        { kind: "p", text: "Si tu tarifa mensual va a cambiar, te avisamos con al menos 30 días de anticipación." },
        { kind: "h", text: "Tu parte" },
        {
          kind: "p",
          text: "Nos das servicios, horarios, precios y preferencias de reserva que sean correctos. Tú respondes por los servicios que vendes y por cumplir las citas reservadas para tu salón.",
        },
        { kind: "h", text: "Nuestra parte" },
        {
          kind: "p",
          text: "Contestamos las llamadas con el nombre de tu salón usando los datos que nos diste, ayudamos a reservar la siguiente cita y te damos un resumen de quién llamó y qué necesitaba. Preparamos Front Desk para tu salón y lo seguimos afinando contigo.",
        },
        { kind: "h", text: "Preguntas" },
        { kind: "p", text: "Las preguntas sobre este acuerdo van al contacto de abajo." },
        { kind: "contact" },
      ],
    };
  }
  return {
    title: "Service Agreement",
    effective: date,
    updated: date,
    blocks: [
      {
        kind: "p",
        text: "This agreement covers Front Desk for salons from Blades of Grass Marketing. Starting the service means you agree to it.",
      },
      { kind: "h", text: "The service" },
      {
        kind: "p",
        text: "Front Desk answers your salon's phone in your salon's name when you can't pick up. It greets the caller, answers common questions about your services and hours, and helps book the next appointment. You get a summary of who called and what they needed.",
      },
      { kind: "h", text: "Setup" },
      {
        kind: "p",
        text: "We set it up with your services, hours, prices, and how you like to book. You tell us how your shop works, and you tell us when those details change.",
      },
      { kind: "h", text: "Price" },
      { kind: "p", text: "$297/month plus tax, month-to-month." },
      { kind: "h", text: "First month" },
      { kind: "p", text: "Not happy in your first month for any reason? Full refund. Tell us during that first month." },
      { kind: "h", text: "Canceling" },
      { kind: "p", text: "The service is month to month. You can cancel anytime." },
      { kind: "h", text: "If the rate changes" },
      { kind: "p", text: "If your monthly rate is going to change, we'll give you at least 30 days' notice." },
      { kind: "h", text: "Your part" },
      {
        kind: "p",
        text: "You give us accurate services, hours, prices, and booking preferences. You are responsible for the services you sell and for honoring the appointments booked for your salon.",
      },
      { kind: "h", text: "Our part" },
      {
        kind: "p",
        text: "We answer calls in your salon's name using the details you gave us, help book the next appointment, and give you a summary of who called and what they needed. We set Front Desk up for your salon and keep tuning it with you.",
      },
      { kind: "h", text: "Questions" },
      { kind: "p", text: "Questions about this agreement go to the contact below." },
      { kind: "contact" },
    ],
  };
}

function terms(lang: Lang): LegalDoc {
  const date = dates.original[lang];
  const shared = smsBlocks(lang);
  if (lang === "vi") {
    return {
      title: "Điều khoản",
      effective: date,
      updated: date,
      blocks: [
        {
          kind: "p",
          text: "Những điều khoản này phủ danh thiếp này và các tin nhắn từ {{name}}. Dùng danh thiếp này hoặc đồng ý nhận tin nghĩa là bạn đồng ý với các điều khoản này.",
        },
        { kind: "h", text: "Dịch vụ trả phí" },
        {
          kind: "p",
          text: "Giá, cách hoàn tiền, cách hủy, và trách nhiệm của các dịch vụ Blades of Grass có thu phí được ghi trong một thỏa thuận viết riêng trước khi dịch vụ bắt đầu. Front Desk cho salon nằm trong [[/service-agreement|Thỏa thuận dịch vụ]].",
        },
        ...shared,
        {
          kind: "p",
          text: "Điều khoản tin nhắn cũng có trang riêng: [[/sms-terms|Điều khoản SMS]].",
        },
        { kind: "h", text: "Quyền riêng tư" },
        {
          kind: "p",
          text: "Đọc [[/privacy|Chính sách quyền riêng tư]] để thấy chúng tôi thu thập gì và dùng ra sao.",
        },
        { kind: "h", text: "Thay đổi" },
        {
          kind: "p",
          text: "Nếu chúng tôi đổi các điều khoản này, chúng tôi sẽ cập nhật trang này và các ngày ở trên. Câu hỏi về điều khoản gửi tới liên hệ trong phần hỗ trợ SMS ở trên.",
        },
      ],
    };
  }
  if (lang === "es") {
    return {
      title: "Términos",
      effective: date,
      updated: date,
      blocks: [
        {
          kind: "p",
          text: "Estos términos cubren esta tarjeta y los mensajes de {{name}}. Al usar esta tarjeta o aceptar nuestros mensajes, aceptas estos términos.",
        },
        { kind: "h", text: "Servicios de pago" },
        {
          kind: "p",
          text: "Los precios, el reembolso, la cancelación y las responsabilidades de los servicios de pago de Blades of Grass quedan en un acuerdo escrito aparte antes de que empiece el servicio. Front Desk para salones está en el [[/service-agreement|Acuerdo de servicio]].",
        },
        ...shared,
        { kind: "p", text: "Los términos de los mensajes también están en su propia página: [[/sms-terms|Términos de SMS]]." },
        { kind: "h", text: "Privacidad" },
        { kind: "p", text: "Lee nuestra [[/privacy|Política de privacidad]] para ver qué recopilamos y cómo lo usamos." },
        { kind: "h", text: "Cambios" },
        {
          kind: "p",
          text: "Si cambiamos estos términos, actualizaremos esta página y las fechas de arriba. Las preguntas sobre estos términos van al contacto que aparece en la ayuda de SMS, más arriba.",
        },
      ],
    };
  }
  return {
    title: "Terms",
    effective: date,
    updated: date,
    blocks: [
      {
        kind: "p",
        text: "These terms cover this card and the text messages from {{name}}. By using this card or agreeing to our texts, you agree to these terms.",
      },
      { kind: "h", text: "Paid services" },
      {
        kind: "p",
        text: "Prices, refund terms, cancellation terms, and responsibilities for paid Blades of Grass services are set out in a separate written agreement before service begins. Front Desk for salons is in the [[/service-agreement|Service Agreement]].",
      },
      ...shared,
      { kind: "p", text: "The text message terms are also on their own page: [[/sms-terms|SMS Terms]]." },
      { kind: "h", text: "Privacy" },
      { kind: "p", text: "Read our [[/privacy|Privacy Policy]] to see what we collect and how we use it." },
      { kind: "h", text: "Changes" },
      {
        kind: "p",
        text: "If we change these terms, we will update this page and the dates at the top. Questions about these terms go to the contact listed under SMS support above.",
      },
    ],
  };
}

function sms(lang: Lang): LegalDoc {
  const date = dates.original[lang];
  if (lang === "vi") {
    return {
      title: "Điều khoản SMS",
      effective: date,
      updated: date,
      blocks: [
        { kind: "p", text: "Đây là điều khoản tin nhắn, lấy nguyên văn từ [[/terms|Điều khoản]] đầy đủ." },
        ...smsBlocks(lang),
      ],
    };
  }
  if (lang === "es") {
    return {
      title: "Términos de SMS",
      effective: date,
      updated: date,
      blocks: [
        { kind: "p", text: "Estos son los términos de los mensajes, palabra por palabra, de nuestros [[/terms|Términos]] completos." },
        ...smsBlocks(lang),
      ],
    };
  }
  return {
    title: "SMS Terms",
    effective: date,
    updated: date,
    blocks: [
      { kind: "p", text: "These are the text message terms from our full [[/terms|Terms]], word for word." },
      ...smsBlocks(lang),
    ],
  };
}

function privacy(lang: Lang): LegalDoc {
  const date = dates.original[lang];
  if (lang === "vi") {
    return {
      title: "Chính sách quyền riêng tư",
      effective: date,
      updated: date,
      blocks: [
        {
          kind: "p",
          text: "Chính sách này giải thích cách {{name}}, gọi là “Blades of Grass” hoặc “chúng tôi” ở đây, thu thập, dùng và chia sẻ thông tin qua danh thiếp này, tin nhắn, cuộc gọi, email, và dịch vụ quầy lễ tân Blades of Grass.",
        },
        { kind: "h", text: "Chúng tôi thu thập gì" },
        {
          kind: "ul",
          items: [
            "**Những gì bạn đưa cho chúng tôi:** tên, số điện thoại, email, và những gì bạn viết hoặc nói với chúng tôi trong tin nhắn, mẫu chat, mẫu đặt demo, cuộc gọi, email, hoặc khi gặp trực tiếp.",
            "**Lựa chọn về tin nhắn:** hồ sơ lúc bạn đồng ý nhận tin và lúc bạn ngừng, để chúng tôi tôn trọng lựa chọn đó.",
            "**Thông tin kỹ thuật:** danh thiếp này được lưu trên GitHub Pages, và GitHub ghi địa chỉ IP của người xem vì lý do bảo mật. Công cụ chat và đặt lịch trên danh thiếp do LeadConnector cung cấp, và họ có thể thu thập chi tiết kỹ thuật như trình duyệt và thiết bị để chạy các công cụ đó. Danh thiếp lưu lựa chọn ngôn ngữ của bạn ngay trên trình duyệt của bạn. Chúng tôi không dùng công cụ quảng cáo hoặc phân tích trên danh thiếp này.",
          ],
        },
        { kind: "h", text: "Chúng tôi dùng thông tin ra sao" },
        {
          kind: "p",
          text: "Chúng tôi dùng thông tin của bạn để trả lời bạn, xếp và xác nhận lịch hẹn cùng buổi demo, gửi các tin bạn đã đồng ý, cung cấp dịch vụ quầy lễ tân, theo dõi lựa chọn về tin nhắn của bạn, và đáp ứng nghĩa vụ pháp lý.",
        },
        { kind: "h", text: "Khi chúng tôi chạy quầy lễ tân cho một tiệm" },
        {
          kind: "p",
          text: "Một số tiệm dùng Blades of Grass để trả lời cuộc gọi và tin nhắn của họ. Khi bạn liên hệ một tiệm như vậy, chúng tôi xử lý thông tin của bạn cho tiệm đó, chỉ để trả lời bạn và đặt việc bạn đã hỏi. Chính sách riêng tư của chính tiệm đó cũng áp dụng.",
        },
        { kind: "h", text: "Chúng tôi không bán thông tin" },
        { kind: "p", text: "Chúng tôi không bán thông tin cá nhân của bạn. Chúng tôi chỉ chia sẻ:" },
        {
          kind: "ul",
          items: [
            "với các công ty chạy công cụ điện thoại, tin nhắn, chat, đặt lịch và email của chúng tôi, chỉ để họ cung cấp các dịch vụ đó cho chúng tôi;",
            "với tiệm bạn đã liên hệ, nếu bạn tới tiệm đó qua quầy lễ tân của chúng tôi; và",
            "khi pháp luật yêu cầu, hoặc để bảo vệ quyền hoặc sự an toàn của một người.",
          ],
        },
        { kind: "h", text: "Số di động và tin nhắn" },
        {
          kind: "p",
          text: "Không thông tin di động nào sẽ được chia sẻ với bên thứ ba hoặc bên liên kết cho mục đích tiếp thị hoặc quảng bá. Dữ liệu đồng ý nhận tin và sự đồng ý của người gửi tin nhắn sẽ không được chia sẻ với bất kỳ bên thứ ba nào.",
        },
        { kind: "p", text: "**Số di động và dữ liệu đồng ý SMS không được chia sẻ hoặc bán.**" },
        {
          kind: "p",
          text: "Các công ty chuyển tin của chúng tôi chỉ xử lý số của bạn để gửi và nhận tin. Bạn có thể dừng tin bất cứ lúc nào bằng cách trả lời STOP. Trả lời HELP để được giúp. Điều khoản tin nhắn đầy đủ nằm trong [[/terms|Điều khoản]] và trên trang [[/sms-terms|Điều khoản SMS]].",
        },
        { kind: "h", text: "Thông tin sức khỏe" },
        {
          kind: "p",
          text: "Chúng tôi không hỏi thông tin sức khỏe. Đôi khi, khi người ta đặt hoặc hỏi về một dịch vụ salon hoặc spa, họ kể một điều về sức khỏe, như tình trạng da hoặc móng, dị ứng, thai kỳ, hoặc một liệu trình gần đây. Nếu bạn chia sẻ điều như vậy với chúng tôi, hoặc với quầy lễ tân của một tiệm do chúng tôi chạy, chúng tôi chỉ dùng nó để trả lời bạn và xử lý lịch bạn đã hỏi. Chúng tôi không bán thông tin đó hoặc dùng nó cho tiếp thị, và chỉ chia sẻ với tiệm bạn đã liên hệ cùng các công ty chạy công cụ nhắn tin và đặt lịch của chúng tôi. Bạn có thể yêu cầu chúng tôi xóa bất cứ lúc nào. Chỉ chia sẻ những gì tiệm cần biết.",
        },
        { kind: "h", text: "Trẻ em" },
        {
          kind: "p",
          text: "Danh thiếp này và các dịch vụ của chúng tôi dành cho chủ việc kinh doanh và người lớn khác. Chúng không hướng tới trẻ em dưới 13 tuổi, và chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em dưới 13 tuổi. Nếu chúng tôi biết điều đó đã xảy ra, chúng tôi sẽ xóa thông tin. Nếu bạn tin một trẻ em dưới 13 tuổi đã đưa thông tin cho chúng tôi, hãy liên hệ.",
        },
        { kind: "h", text: "Giữ và xóa thông tin" },
        {
          kind: "p",
          text: "Chúng tôi giữ thông tin của bạn trong lúc còn cần cho các lý do ở trên, hoặc lâu hơn nếu pháp luật yêu cầu. Báo chúng tôi là bạn muốn xóa thông tin, và chúng tôi sẽ xóa rồi trả lời trong vòng 45 ngày. Chúng tôi có thể giữ một hồ sơ rằng bạn đã ngừng nhận tin, để không nhắn lại cho bạn.",
        },
        { kind: "h", text: "Thay đổi chính sách này" },
        { kind: "p", text: "Nếu chúng tôi đổi chính sách này, chúng tôi sẽ cập nhật trang này và các ngày ở trên." },
        { kind: "h", text: "Liên hệ" },
        { kind: "p", text: "Để hỏi, xem thông tin của bạn, hoặc yêu cầu xóa, hãy liên hệ:" },
        { kind: "contact" },
      ],
    };
  }
  if (lang === "es") {
    return {
      title: "Política de privacidad",
      effective: date,
      updated: date,
      blocks: [
        {
          kind: "p",
          text: "Esta política explica cómo {{name}}, llamado “Blades of Grass” o “nosotros” aquí, recopila, usa y comparte información a través de esta tarjeta, nuestros mensajes, llamadas y correos, y el servicio de recepción de Blades of Grass.",
        },
        { kind: "h", text: "Qué recopilamos" },
        {
          kind: "ul",
          items: [
            "**Lo que tú nos das:** tu nombre, teléfono y correo, y lo que nos escribes o dices en mensajes, el formulario de chat, el formulario de la demo, llamadas, correos o en persona.",
            "**Decisiones sobre mensajes:** un registro de cuándo aceptaste nuestros mensajes y cuándo saliste, para poder respetar tu decisión.",
            "**Información técnica:** esta tarjeta está alojada en GitHub Pages, y GitHub registra las direcciones IP de quienes visitan, por seguridad. Las herramientas de chat y de reservas de esta tarjeta las da LeadConnector, que puede recopilar datos técnicos como tu navegador y tu dispositivo para hacerlas funcionar. Esta tarjeta guarda tu idioma en tu propio navegador. No usamos herramientas de publicidad ni de analítica en esta tarjeta.",
          ],
        },
        { kind: "h", text: "Cómo lo usamos" },
        {
          kind: "p",
          text: "Usamos tu información para responderte, agendar y confirmar citas y demos, enviar los mensajes que aceptaste, prestar el servicio de recepción, llevar el registro de tus decisiones sobre mensajes y cumplir nuestras obligaciones legales.",
        },
        { kind: "h", text: "Cuando llevamos la recepción de un salón" },
        {
          kind: "p",
          text: "Algunos salones usan Blades of Grass para contestar sus llamadas y mensajes. Cuando contactas a uno de esos salones, tratamos tu información para ese salón, solo para responderte y reservar lo que pediste. También aplica la política de privacidad de ese salón.",
        },
        { kind: "h", text: "No la vendemos" },
        { kind: "p", text: "No vendemos tu información personal. Solo la compartimos:" },
        {
          kind: "ul",
          items: [
            "con las empresas que operan nuestras herramientas de teléfono, mensajes, chat, reservas y correo, solo para que nos presten esos servicios;",
            "con el salón al que contactaste, si llegaste a ese salón por nuestra recepción; y",
            "cuando la ley lo exige, o para proteger los derechos o la seguridad de alguien.",
          ],
        },
        { kind: "h", text: "Números móviles y mensajes" },
        {
          kind: "p",
          text: "Ninguna información móvil se compartirá con terceros o afiliados para marketing o promociones. Los datos de aceptación del originador de mensajes y el consentimiento no se compartirán con terceros.",
        },
        { kind: "p", text: "**Los números móviles y los datos de aceptación de SMS no se comparten ni se venden.**" },
        {
          kind: "p",
          text: "Las empresas que entregan nuestros mensajes tratan tu número solo para enviarlos y recibirlos. Puedes parar los mensajes en cualquier momento respondiendo STOP. Responde HELP para ayuda. Los términos completos están en nuestros [[/terms|Términos]] y en la página de [[/sms-terms|Términos de SMS]].",
        },
        { kind: "h", text: "Información de salud" },
        {
          kind: "p",
          text: "No pedimos información de salud. A veces, al reservar o preguntar por un servicio de salón o spa, alguien menciona algo de su salud, como una condición de la piel o de las uñas, una alergia, un embarazo o un tratamiento reciente. Si compartes algo así con nosotros, o con la recepción de un salón que nosotros llevamos, lo usamos solo para responderte y gestionar la reserva que pediste. No lo vendemos ni lo usamos para marketing, y solo lo compartimos con el salón que contactaste y con las empresas que operan nuestras herramientas de mensajes y reservas. Puedes pedirnos que lo borremos en cualquier momento. Comparte solo lo que el salón necesita saber.",
        },
        { kind: "h", text: "Menores" },
        {
          kind: "p",
          text: "Esta tarjeta y nuestros servicios son para dueños de negocios y otros adultos. No están dirigidos a menores de 13 años, y no recopilamos a sabiendas información personal de menores de 13 años. Si nos enteramos de que lo hicimos, la borraremos. Si crees que un menor de 13 años nos dio información, contáctanos.",
        },
        { kind: "h", text: "Conservar y borrar tu información" },
        {
          kind: "p",
          text: "Guardamos tu información mientras la necesitamos para lo de arriba, o más tiempo si la ley lo exige. Dinos que quieres borrarla, y la borraremos y te responderemos en un plazo de 45 días. Podemos guardar un registro de que saliste de los mensajes, para no volverte a escribir.",
        },
        { kind: "h", text: "Cambios a esta política" },
        { kind: "p", text: "Si cambiamos esta política, actualizaremos esta página y las fechas de arriba." },
        { kind: "h", text: "Contáctanos" },
        { kind: "p", text: "Para hacer una pregunta, ver tu información o pedir que la borremos, contáctanos:" },
        { kind: "contact" },
      ],
    };
  }
  return {
    title: "Privacy Policy",
    effective: date,
    updated: date,
    blocks: [
      {
        kind: "p",
        text: "This policy explains how {{name}}, called “Blades of Grass” or “we” here, collects, uses, and shares information through this card, our texts, calls, and emails, and the Blades of Grass front desk service.",
      },
      { kind: "h", text: "What we collect" },
      {
        kind: "ul",
        items: [
          "**What you give us:** your name, phone number, and email, and what you write or say to us in texts, the chat form, the demo booking form, calls, emails, or in person.",
          "**Text choices:** records of when you agreed to our texts and when you opted out, so we can honor your choice.",
          "**Technical information:** this card is hosted on GitHub Pages, and GitHub logs visitors' IP addresses for security. The chat and booking tools on this card are provided by LeadConnector, which may collect technical details such as your browser and device to run them. This card saves your language choice in your own browser. We do not use advertising or analytics tools on this card.",
        ],
      },
      { kind: "h", text: "How we use it" },
      {
        kind: "p",
        text: "We use your information to reply to you, schedule and confirm appointments and demos, send the texts you agreed to, provide the front desk service, keep track of your text choices, and meet our legal obligations.",
      },
      { kind: "h", text: "When we run the front desk for a shop" },
      {
        kind: "p",
        text: "Some shops use Blades of Grass to answer their calls and texts. When you contact one of those shops, we handle your information for that shop, only to answer you and book what you asked for. The shop's own privacy policy also applies.",
      },
      { kind: "h", text: "We do not sell it" },
      { kind: "p", text: "We do not sell your personal information. We share it only:" },
      {
        kind: "ul",
        items: [
          "with the companies that run our phone, text, chat, booking, and email tools, only so they can provide those services to us;",
          "with the shop you contacted, if you reached that shop through our front desk; and",
          "when the law requires it, or to protect someone's rights or safety.",
        ],
      },
      { kind: "h", text: "Mobile numbers and text messages" },
      {
        kind: "p",
        text: "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.",
      },
      { kind: "p", text: "**Mobile numbers and SMS opt-in data are not shared or sold.**" },
      {
        kind: "p",
        text: "The companies that deliver our texts handle your number only to send and receive our messages. You can stop texts at any time by replying STOP. Reply HELP for help. The full text message terms are in our [[/terms|Terms]] and on the [[/sms-terms|SMS Terms]] page.",
      },
      { kind: "h", text: "Health information" },
      {
        kind: "p",
        text: "We do not ask for health information. Sometimes, when people book or ask about a salon or spa service, they mention something about their health, such as a skin or nail condition, an allergy, a pregnancy, or a recent treatment. If you share something like that with us, or with a shop's front desk that we run, we use it only to answer you and handle the booking you asked for. We do not sell it or use it for marketing, and we share it only with the shop you contacted and the companies that run our messaging and booking tools. You can ask us to delete it at any time. Please share only what the shop needs to know.",
      },
      { kind: "h", text: "Children" },
      {
        kind: "p",
        text: "This card and our services are for business owners and other adults. They are not directed to children under 13, and we do not knowingly collect personal information from children under 13. If we learn that we have, we will delete it. If you believe a child under 13 has given us information, please contact us.",
      },
      { kind: "h", text: "Keeping and deleting your information" },
      {
        kind: "p",
        text: "We keep your information while we need it for the reasons above, or longer if the law requires it. Tell us you want your information deleted, and we will delete it and reply within 45 days. We may keep a record that you opted out of texts, so that we do not text you again.",
      },
      { kind: "h", text: "Changes to this policy" },
      { kind: "p", text: "If we change this policy, we will update this page and the dates at the top." },
      { kind: "h", text: "Contact us" },
      { kind: "p", text: "To ask a question, see your information, or have it deleted, contact us:" },
      { kind: "contact" },
    ],
  };
}

const builders: Record<LegalId, (lang: Lang) => LegalDoc> = {
  trust,
  terms,
  agreement,
  privacy,
  sms,
};

export function legalChrome(lang: Lang): LegalChrome {
  return chrome[lang];
}

export function legalDoc(id: LegalId, lang: Lang): LegalDoc {
  return builders[id](lang);
}
