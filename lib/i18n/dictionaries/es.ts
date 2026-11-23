import { commercialEs } from "@/lib/i18n/dictionaries/commercial/es";
import type { Dictionary } from "@/lib/i18n/types";

export const es: Dictionary = {
  nav: {
    home: "Inicio",
    about: "Sobre MyCod",
    services: "Sitios y sistemas",
    plans: "Planes y valores",
    build: "Armar mi proyecto",
    howItWorks: "Cómo funciona",
    projects: "Proyectos reales",
    contact: "Contacto",
  },
  brand: {
    tagline: "Tecnología que impulsa negocios",
    description:
      "Sitios web profesionales, sistemas web, automatizaciones inteligentes y agentes de IA para empresas.",
  },
  sidebar: {
    navLabel: "Navegación principal",
    footerNavLabel: "Institucional",
    quoteCta: "Pedir presupuesto",
    collapse: "Contraer barra lateral",
    expand: "Expandir barra lateral",
  },
  topbar: {
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    breadcrumbLabel: "Ubicación",
  },
  preferences: {
    trigger: "Preferencias",
    language: "Idioma",
    theme: "Tema",
    themeLight: "Claro",
    themeDark: "Oscuro",
    display: "Visualización",
  },
  footer: {
    navTitle: "Navegación",
    moreTitle: "Más",
    contactTitle: "Contacto",
    socialTitle: "Redes",
    whatsapp: "WhatsApp",
    rights: "Todos los derechos reservados.",
  },
  cta: {
    talk: "Hablar con MyCod",
    whatsappAriaLabel:
      "Hablar con MyCod por WhatsApp (se abre en una nueva pestaña)",
    whatsappHint: "por WhatsApp (se abre en una nueva pestaña)",
  },
  globalControls: {
    languageSelector: "Seleccionar idioma",
    languageMenuLabel: "Idiomas disponibles",
  },
  home: {
    hero: {
      eyebrow: "Para pequeñas y medianas empresas",
      title: "Creamos sitios, sistemas web y automatizaciones para tu empresa.",
      description:
        "De la landing page al sistema a medida. Eliges por dónde empezar, armas el pedido en pocos minutos y recibes una propuesta con implementación y mensualidad.",
      ctaPrimary: "Quiero crear mi proyecto",
      ctaSecondary: "Conocer las soluciones",
      ctaQuote: "Solicitar presupuesto",
      ctaWhatsApp: "Pedir presupuesto por WhatsApp",
      ctaConfigurator: "Armar mi proyecto en el configurador",
      assurance: "Antes de contratar, recibes una propuesta con alcance, plazo y valores definidos.",
      showcase: {
        caption: "Demostración con datos ficticios",
        tablistLabel: "Ejemplos de demostración",
        tabs: { sites: "Sitios", systems: "Sistemas", ai: "IA" },
        sites: {
          situation: "Un cliente pide presupuesto desde el sitio",
          formTitle: "Nueva solicitud de presupuesto",
          client: "Mariana Costa",
          service: "Limpieza de aire acondicionado",
          place: "Cuiabá · Centro",
          channel: "Recibido desde el sitio",
          labels: { name: "Nombre", service: "Servicio", place: "Ubicación" },
          action: "Responder por WhatsApp",
        },
        systems: {
          situation: "El pedido entra en el panel del equipo",
          columns: { new: "Nuevos", progress: "En atención", done: "Completados" },
          title: "Pedidos",
          orders: [
            { id: "#1038", client: "Taller Ejemplo", service: "Revisión del sistema" },
            { id: "#1041", client: "Carlos Lima", service: "Mantenimiento preventivo" },
          ],
          incoming: { id: "#1042", client: "Mariana Costa", service: "Limpieza de aire acondicionado" },
          tag: "Acaba de entrar",
        },
        ai: {
          situation: "La automatización atiende la conversación y registra el pedido",
          client: "Mariana Costa",
          question: "¿Hacen limpieza de aire acondicionado? ¿Cuánto cuesta?",
          answer: "¡Sí! ¿Cuántos equipos son? Registro tu pedido y el equipo confirma el valor.",
          tag: "Pedido registrado en el panel",
          botName: "Automatización MyCod",
        },
      },
      services: [
        { name: "Sitios", benefit: "Páginas para presentar tus servicios y recibir pedidos." },
        { name: "Sistemas a medida", benefit: "Organiza pedidos, agenda y registros en un solo lugar." },
        { name: "Automatizaciones con IA", benefit: "Respuestas y pedidos organizados sin trabajo manual." },
      ],
      chat: {
        header: "MyCod",
        outgoing: "¡Hola! Llegué desde el sitio de MyCod y quisiera pedir un presupuesto para mi negocio. ¿Me puedes ayudar?",
        outgoingMeta: "mensaje preestablecido",
        reply: "¡Hola! Gracias por escribirnos. Cuéntame qué servicio necesitas.",
      },
      mockup: {
        caption: "Interfaz conceptual · ZLift Manager",
        modules: [
          "Clientes",
          "Ascensores",
          "Técnicos",
          "Órdenes de servicio",
          "Checklist",
          "Informes",
        ],
        ordersTitle: "Órdenes de servicio",
        newOrder: "Nueva orden",
        checklistTitle: "Checklist de ejecución",
        checklistItems: ["Fotos", "Observaciones", "Firma", "Informe"],
        reportTitle: "Informe",
      },
    },
    capabilities: {
      items: [
        "Sistemas Web",
        "SaaS",
        "Aplicaciones",
        "Inteligencia Artificial",
        "Automatización",
        "Integraciones",
      ],
    },
    solutions: {
      flow: ["Entrada", "IA", "Automatización", "Resultado"],
    },
    product: {
      tagline: "Plataforma para la gestión de operaciones de mantenimiento.",
      flow: [
        "Clientes",
        "Ascensores",
        "Técnicos",
        "Órdenes de servicio",
        "Ejecución",
        "Checklist",
        "Fotos",
        "Observaciones",
        "Firma",
        "Informe",
      ],
    },
    cases: {
      eyebrow: "Proyectos reales",
      title: "Proyectos que construimos",
      description:
        "Ejemplos reales de lo que ya desarrollamos — el problema, la solución y la tecnología detrás de cada uno.",
      explore: "Explorar",
      similar: "Quiero algo parecido",
    },
    howWeWork: {
      eyebrow: "Cómo trabajamos",
      title: "Del problema al software",
    },
    finalCta: {
      title: "¿Tienes un proceso que puede ser mejor?",
      subtitle: "Transformemos tu idea en software.",
      description:
        "Cuéntanos cómo trabaja tu empresa hoy. Vamos a entender el problema y evaluar cómo la tecnología puede transformar ese proceso.",
      cta: "Hablar con MyCod",
      secondary: "¿Prefieres un formulario? Enviar mensaje",
    },
  },
  about: {
    eyebrow: "Sobre MyCod",
    title:
      "Tecnología para transformar problemas reales en soluciones digitales.",
    description:
      "MyCod desarrolla sistemas web, SaaS, aplicaciones, automatizaciones y soluciones con inteligencia artificial para empresas que quieren digitalizar procesos y ganar más control sobre sus operaciones.",
    cta: "Hablar con MyCod",
    secondaryCta: "Explorar casos",
    capabilitiesTitle: "Lo que desarrollamos",
    culture: {
      eyebrow: "Cultura",
      title: "Cómo piensa y trabaja MyCod.",
      description: "El propósito, la misión y la visión que guían cada proyecto, y los valores con ejemplos de cómo los aplicamos día a día.",
      purposeLabel: "Propósito",
      purpose: "Ayudar a empresas de servicios a ser encontradas, atender mejor y ganar tiempo con tecnología.",
      missionLabel: "Misión",
      mission: "Crear sitios, sistemas y automatizaciones que resuelvan problemas concretos, como facilitar las solicitudes de presupuesto, organizar citas y reducir tareas repetitivas.",
      visionLabel: "Visión",
      vision: "Construir la reputación de MyCod en Cuiabá y Várzea Grande por la calidad de las entregas, la claridad en las propuestas y la confianza de los clientes.",
      valuesTitle: "Valores y cómo los practicamos",
      howLabel: "Cómo lo practicamos",
      values: [
        {
          name: "Entender antes de construir",
          how: "Descubrimos cómo funciona la empresa y dónde pierde tiempo u oportunidades.",
        },
        {
          name: "Claridad en lo acordado",
          how: "Registramos alcance, plazo, inversión y lo que incluye después de la entrega. Conversamos antes de cambiar lo acordado.",
        },
        {
          name: "Simplicidad para quien usa",
          how: "Priorizamos recorridos directos, como pedir presupuesto por WhatsApp desde el celular.",
        },
        {
          name: "Calidad en la entrega",
          how: "Probamos el recorrido completo del cliente y mostramos el resultado en la entrega.",
        },
        {
          name: "Cuidado con el negocio del cliente",
          how: "Protegemos los accesos, pedimos autorización para mostrar proyectos y orientamos al cliente sobre el uso de la solución.",
        },
      ],
      openingLabel: "Cómo empezamos cada proyecto",
      opening: "“¿Qué necesita ser más fácil en tu negocio cuando este proyecto esté en línea?”",
      toneLabel: "Tono de voz",
      tone: "Directo, profesional y cercano. Describimos lo que el cliente podrá hacer con la solución y acordamos lo que se entregará.",
    },
    proof: {
      eyebrow: "Prueba",
      title: "Lo que ya construimos",
      othersLabel: "Otros proyectos",
      cta: "Explorar casos",
    },
    founder: {
      eyebrow: "Fundador",
      title: "Quién está detrás de MyCod",
      role: "Fundador de MyCod",
      body: [
        "MyCod es fundada por Zenaldo Pereira de Oliveira, desarrollador full stack con formación en Análisis y Desarrollo de Sistemas, que construye aplicaciones modernas con React, Next.js, TypeScript, Prisma y PostgreSQL.",
        "Además del desarrollo, cuenta con formación técnica en Electrotecnia y conocimientos en Investigación Digital (OSINT) — una combinación que fortalece la resolución de problemas y el pensamiento analítico detrás de cada solución entregada.",
      ],
      formationTitle: "Formación",
      formationItems: [
        "Análisis y Desarrollo de Sistemas",
        "Formación técnica en Electrotecnia",
        "React y Next.js",
      ],
    },
    tech: {
      eyebrow: "Capacidad técnica",
      title: "Las tecnologías con las que construimos.",
      description:
        "Las tecnologías que usamos en las entregas, con los proyectos reales donde cada una ya se aplicó.",
      groups: {
        web: "Web",
        mobile: "Mobile",
        backend: "Backend",
        data: "Datos",
        ai: "Inteligencia artificial",
        automation: "Automatización",
      },
      appliedIn: "Aplicado en",
    },
    finalCta: {
      title: "¿Tienes un proceso que puede ser mejor?",
      subtitle: "Cuéntale a MyCod lo que tu empresa necesita.",
    },
  },
  projects: {
    badge: "Casos y Proyectos",
    filterLabel: "Filtrar por categoría",
    filterAll: "Todos",
    allTitle: "Todos los proyectos",
    description:
      "Cada caso abajo muestra el problema real y la solución entregada — desarrollados con React, Next.js, React Native, Inteligencia Artificial y soluciones escalables para empresas.",
    problemLabel: "Problema",
    solutionLabel: "Solución",
    demoLabel: "Demo",
    demonstrationBadge: "Demostración",
    githubLabel: "GitHub",
    media: {
      screenshotAlt: "Página de inicio publicada de {title}",
      phoneAlts: [
        "Pantalla inicial de la aplicación {title}",
        "Dieta generada por la aplicación {title}",
      ],
    },
    carousel: {
      region: "Proyectos",
      previous: "Proyecto anterior",
      next: "Siguiente proyecto",
      goTo: "Ir al proyecto",
      of: "de",
    },
    items: [
      {
        category: "Plataforma / SaaS",
        problem:
          "Las empresas de mantenimiento de ascensores suelen operar con procesos manuales e información dispersa entre clientes, equipos, técnicos y órdenes de servicio.",
        solution:
          "Plataforma propia que centraliza todo el flujo operativo: clientes, ascensores, técnicos, órdenes de servicio, ejecución, checklist, fotos, observaciones, firma e informe.",
        status: "Producto propio",
      },
      {
        category: "Aplicación Móvil",
        problem:
          "Armar una dieta personalizada normalmente depende de un seguimiento manual, sin cruzar automáticamente todos los datos del usuario.",
        solution:
          "Aplicación móvil Full Stack con Inteligencia Artificial (Gemini AI) que genera dietas personalizadas a partir de peso, altura, edad, objetivo y nivel de actividad física.",
        status: "Proyecto Principal",
      },
      {
        category: "Sitio Institucional",
        problem:
          "Las tiendas de mascotas locales sin presencia digital profesional pierden clientes frente a competidores con sitio web y canal de contacto directo.",
        solution:
          "Sitio web profesional con diseño moderno, responsivo e integración directa con WhatsApp para captar clientes.",
        status: "En línea",
      },
      {
        category: "Sitio Institucional",
        problem:
          "Las barberías que dependen solo de referencias o redes sociales tienen dificultad para convertir interés en citas agendadas.",
        solution:
          "Sitio profesional con diseño responsivo, integración con WhatsApp y enfoque en la generación de citas.",
        status: "En línea",
      },
      {
        category: "Herramienta Web",
        problem:
          "El contenido en texto no siempre es accesible para todos los usuarios o contextos de uso.",
        solution:
          "Aplicación web que convierte texto en audio usando síntesis de voz mediante la Web Speech API, sin depender de servicios pagos de terceros.",
        status: "En línea",
      },
      {
        category: "Aplicación Móvil",
        problem:
          "La gestión automotriz (vehículos, clientes, servicios) sin un sistema dedicado suele quedar dispersa entre hojas de cálculo y notas.",
        solution:
          "Aplicación móvil integrada con un backend propio para centralizar la gestión automotriz.",
        status: "En Desarrollo",
      },
      {
        category: "Sitio web",
        problem: "Presentación digital de una cafetería.",
        solution: "Consulta la captura del proyecto Cafeteria.",
        status: "Proyecto",
      },
      {
        category: "Sitio web",
        problem: "Presentación digital de un negocio turístico.",
        solution: "Consulta la captura del proyecto Turismo.",
        status: "Proyecto",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos sobre tu proyecto.",
    channelsTitle: "Habla directamente con MyCod",
    whatsappCta: "Hablar con MyCod",
    responseLabel: "Tiempo de respuesta",
    responseValue: "En 24h",
    otherChannels: "Otros canales",
    formTitle: "Enviar mensaje",
  },
  contactForm: {
    namePlaceholder: "Tu nombre",
    whatsappPlaceholder: "Tu WhatsApp (con código de área)",
    emailPlaceholder: "Tu correo electrónico",
    messagePlaceholder: "Describe tu proyecto...",
    submitIdle: "Enviar por WhatsApp",
    submitSending: "Enviando...",
    successMessage:
      "¡Contacto registrado! Si WhatsApp no se abre automáticamente, toca el botón de abajo.",
    openWhatsapp: "Abrir conversación en WhatsApp",
    errorMessage:
      "No fue posible registrar tu contacto ahora. Inténtalo de nuevo en unos instantes.",
    errorWhatsappHint:
      "Tus datos siguen en el formulario. Si prefieres, envía el mismo mensaje directamente por WhatsApp:",
    sendViaWhatsapp: "Enviar por WhatsApp",
  },
  commercial: commercialEs,
};
