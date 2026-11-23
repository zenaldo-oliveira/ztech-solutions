import { commercialPt } from "@/lib/i18n/dictionaries/commercial/pt";
import type { Dictionary } from "@/lib/i18n/types";

export const pt: Dictionary = {
  nav: {
    home: "Início",
    about: "Sobre a MyCod",
    services: "Sites e sistemas",
    plans: "Planos e valores",
    build: "Montar projeto",
    howItWorks: "Como funciona",
    projects: "Projetos reais",
    contact: "Contato",
  },
  brand: {
    tagline: "Tecnologia que impulsiona negócios",
    description:
      "Sites profissionais, sistemas web, automações inteligentes e agentes de IA para empresas.",
  },
  sidebar: {
    navLabel: "Navegação principal",
    footerNavLabel: "Institucional",
    quoteCta: "Pedir orçamento",
    collapse: "Recolher barra lateral",
    expand: "Expandir barra lateral",
  },
  topbar: {
    skipToContent: "Pular para o conteúdo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    breadcrumbLabel: "Localização",
  },
  preferences: {
    trigger: "Preferências",
    language: "Idioma",
    theme: "Tema",
    themeLight: "Claro",
    themeDark: "Escuro",
    display: "Exibição",
  },
  footer: {
    navTitle: "Navegação",
    moreTitle: "Mais",
    contactTitle: "Contato",
    socialTitle: "Redes",
    whatsapp: "WhatsApp",
    rights: "Todos os direitos reservados.",
  },
  cta: {
    talk: "Falar com a MyCod",
    whatsappAriaLabel: "Falar com a MyCod pelo WhatsApp (abre em nova aba)",
    whatsappHint: "pelo WhatsApp (abre em nova aba)",
  },
  globalControls: {
    languageSelector: "Selecionar idioma",
    languageMenuLabel: "Idiomas disponíveis",
  },
  home: {
    hero: {
      eyebrow: "Tecnologia para pequenas e médias empresas",

      title: "Sites, sistemas e automações para empresas de serviços",

      description:
        "Criamos sites para apresentar seus serviços, sistemas para organizar sua rotina e automações com IA para agilizar o atendimento.",

      ctaPrimary: "Solicitar proposta",
      ctaSecondary: "Ver projetos reais",
      ctaQuote: "Solicitar orçamento",
      ctaWhatsApp: "Pedir orçamento pelo WhatsApp",
      ctaConfigurator: "Montar projeto no configurador",
      assurance: "Antes de contratar, você recebe uma proposta com escopo, prazo e valores definidos.",
      showcase: {
        caption: "Demonstração com dados fictícios",
        tablistLabel: "Exemplos de demonstração",
        tabs: { sites: "Sites", systems: "Sistemas", ai: "IA" },
        sites: {
          situation: "Um cliente pede orçamento pelo site",
          formTitle: "Novo pedido de orçamento",
          client: "Mariana Costa",
          service: "Limpeza de ar-condicionado",
          place: "Cuiabá · Centro",
          channel: "Recebido pelo site",
          labels: { name: "Nome", service: "Serviço", place: "Local" },
          action: "Responder no WhatsApp",
        },
        systems: {
          situation: "O pedido entra no painel da equipe",
          columns: { new: "Novos", progress: "Em atendimento", done: "Concluídos" },
          title: "Pedidos",
          orders: [
            { id: "#1038", client: "Oficina Exemplo", service: "Revisão do sistema" },
            { id: "#1041", client: "Carlos Lima", service: "Manutenção preventiva" },
          ],
          incoming: { id: "#1042", client: "Mariana Costa", service: "Limpeza de ar-condicionado" },
          tag: "Entrou agora",
        },
        ai: {
          situation: "A automação atende a conversa e registra o pedido",
          client: "Mariana Costa",
          question: "Vocês fazem limpeza de ar-condicionado? Quanto custa?",
          answer: "Fazemos sim! Quantos aparelhos são? Vou registrar seu pedido e a equipe confirma o valor.",
          tag: "Pedido registrado no painel",
          botName: "Automação MyCod",
        },
      },
      services: [
        { name: "Sites", benefit: "Páginas para apresentar seus serviços e receber pedidos." },
        { name: "Sistemas sob medida", benefit: "Organize pedidos, agenda e cadastros em um lugar só." },
        { name: "Automações com IA", benefit: "Respostas e pedidos organizados sem trabalho manual." },
      ],
      chat: {
        header: "MyCod",
        outgoing: "Olá! Vim pelo site da MyCod e gostaria de pedir um orçamento para o meu negócio. Pode me ajudar?",
        outgoingMeta: "mensagem preenchida",
        reply: "Olá! Obrigado por entrar em contato. Me conte qual serviço você precisa.",
      },

      mockup: {
        caption: "Interface conceitual · ZLift Manager",
        modules: [
          "Clientes",
          "Elevadores",
          "Técnicos",
          "Ordens de serviço",
          "Checklist",
          "Relatórios",
        ],
        ordersTitle: "Ordens de serviço",
        newOrder: "Nova ordem",
        checklistTitle: "Checklist de execução",
        checklistItems: ["Fotos", "Observações", "Assinatura", "Relatório"],
        reportTitle: "Relatório",
      },
    },

    // Mantenha as outras propriedades de home aqui.
    capabilities: {
      items: [
        "Sistemas Web",
        "SaaS",
        "Aplicativos",
        "Inteligência Artificial",
        "Automação",
        "Integrações",
      ],
    },
    solutions: {
      flow: ["Entrada", "IA", "Automação", "Resultado"],
    },
    product: {
      tagline: "Plataforma para gestão de operações de manutenção.",
      flow: [
        "Clientes",
        "Elevadores",
        "Técnicos",
        "Ordens de serviço",
        "Execução",
        "Checklist",
        "Fotos",
        "Observações",
        "Assinatura",
        "Relatório",
      ],
    },
    cases: {
      eyebrow: "Projetos reais",
      title: "Projetos que construímos",
      description:
        "Exemplos reais do que já desenvolvemos — o problema, a solução e a tecnologia por trás de cada um.",
      explore: "Explorar",
      similar: "Quero algo parecido",
    },
    howWeWork: {
      eyebrow: "Como trabalhamos",
      title: "Do problema ao software",
    },
    finalCta: {
      title: "Tem um processo que pode ser melhor?",
      subtitle: "Vamos transformar sua ideia em software.",
      description:
        "Conte como sua empresa trabalha hoje. Vamos entender o problema e avaliar como a tecnologia pode transformar esse processo.",
      cta: "Falar com a MyCod",
      secondary: "Prefere formulário? Enviar mensagem",
    },
  },
  about: {
    eyebrow: "Sobre a MyCod",
    title: "Tecnologia para transformar problemas reais em soluções digitais.",
    description:
      "A MyCod desenvolve sistemas web, SaaS, aplicativos, automações e soluções com inteligência artificial para empresas que querem digitalizar processos e ganhar mais controle sobre suas operações.",
    cta: "Falar com a MyCod",
    secondaryCta: "Explorar cases",
    capabilitiesTitle: "O que desenvolvemos",
    culture: {
      eyebrow: "Cultura",
      title: "Como a MyCod pensa e trabalha.",
      description: "Propósito, missão e visão que orientam cada projeto, e os valores com exemplos de como os aplicamos no dia a dia.",
      purposeLabel: "Propósito",
      purpose: "Ajudar empresas de serviços a serem encontradas, atenderem melhor e ganharem tempo com tecnologia.",
      missionLabel: "Missão",
      mission: "Criar sites, sistemas e automações que resolvam problemas concretos, como facilitar pedidos de orçamento, organizar agendamentos e reduzir tarefas repetitivas.",
      visionLabel: "Visão",
      vision: "Construir a reputação da MyCod em Cuiabá e Várzea Grande pela qualidade das entregas, pela clareza nas propostas e pela confiança dos clientes.",
      valuesTitle: "Valores e como praticamos",
      howLabel: "Como praticamos",
      values: [
        {
          name: "Entender antes de construir",
          how: "Descobrimos como a empresa trabalha e onde perde tempo ou oportunidades.",
        },
        {
          name: "Clareza nos combinados",
          how: "Registramos escopo, prazo, investimento e o que está incluído após a entrega. Conversamos antes de alterar o combinado.",
        },
        {
          name: "Simplicidade para quem usa",
          how: "Priorizamos jornadas diretas, como pedir orçamento pelo WhatsApp no celular.",
        },
        {
          name: "Qualidade na entrega",
          how: "Testamos o caminho completo do cliente e demonstramos o resultado na entrega.",
        },
        {
          name: "Cuidado com o negócio do cliente",
          how: "Protegemos acessos, pedimos autorização para divulgar projetos e orientamos o cliente sobre o uso da solução.",
        },
      ],
      openingLabel: "Como começamos cada projeto",
      opening: "“O que precisa ficar mais fácil no seu negócio depois que esse projeto estiver no ar?”",
      toneLabel: "Tom de voz",
      tone: "Direto, profissional e próximo. Descrevemos o que o cliente poderá fazer com a solução e combinamos o que será entregue.",
    },
    proof: {
      eyebrow: "Prova",
      title: "O que já construímos",
      othersLabel: "Outros projetos",
      cta: "Explorar cases",
    },
    founder: {
      eyebrow: "Fundador",
      title: "Quem está por trás da MyCod",
      role: "Fundador da MyCod",
      body: [
        "A MyCod é fundada por Zenaldo Pereira de Oliveira, desenvolvedor full stack formado em Análise e Desenvolvimento de Sistemas, que constrói aplicações modernas com React, Next.js, TypeScript, Prisma e PostgreSQL.",
        "Além do desenvolvimento, possui formação técnica em Eletrotécnica e conhecimentos em Investigação Digital (OSINT) — uma combinação que fortalece a resolução de problemas e o pensamento analítico por trás de cada solução entregue.",
      ],
      formationTitle: "Formação",
      formationItems: [
        "Análise e Desenvolvimento de Sistemas",
        "Formação técnica em Eletrotécnica",
        "React e Next.js",
      ],
    },
    tech: {
      eyebrow: "Capacidade técnica",
      title: "As tecnologias com que construímos.",
      description:
        "As tecnologias que usamos nas entregas, com os projetos reais em que cada uma já foi aplicada.",
      groups: {
        web: "Web",
        mobile: "Mobile",
        backend: "Backend",
        data: "Dados",
        ai: "Inteligência artificial",
        automation: "Automação",
      },
      appliedIn: "Aplicado em",
    },
    finalCta: {
      title: "Tem um processo que pode ser melhor?",
      subtitle: "Conte para a MyCod o que sua empresa precisa.",
    },
  },
  projects: {
    badge: "Cases e Projetos",
    filterLabel: "Filtrar por categoria",
    filterAll: "Todos",
    allTitle: "Todos os projetos",
    description:
      "Cada case abaixo mostra o problema real e a solução entregue — desenvolvidos com React, Next.js, React Native, Inteligência Artificial e soluções escaláveis para empresas.",
    problemLabel: "Problema",
    solutionLabel: "Solução",
    demoLabel: "Demo",
    demonstrationBadge: "Demonstração",
    githubLabel: "GitHub",
    media: {
      screenshotAlt: "Página inicial publicada do {title}",
      phoneAlts: [
        "Tela inicial do aplicativo {title}",
        "Dieta gerada pelo aplicativo {title}",
      ],
    },
    carousel: {
      region: "Projetos",
      previous: "Projeto anterior",
      next: "Próximo projeto",
      goTo: "Ir para o projeto",
      of: "de",
    },
    items: [
      {
        category: "Plataforma / SaaS",
        problem:
          "Empresas de manutenção de elevadores costumam operar com processos manuais e informações dispersas entre clientes, equipamentos, técnicos e ordens de serviço.",
        solution:
          "Plataforma própria que centraliza todo o fluxo operacional: clientes, elevadores, técnicos, ordens de serviço, execução, checklist, fotos, observações, assinatura e relatório.",
        status: "Produto próprio",
      },
      {
        category: "Aplicativo Mobile",
        problem:
          "Montar uma dieta personalizada normalmente depende de acompanhamento manual, sem cruzar automaticamente todos os dados do usuário.",
        solution:
          "Aplicativo mobile Full Stack com Inteligência Artificial (Gemini AI) que gera dietas personalizadas a partir de peso, altura, idade, objetivo e nível de atividade física.",
        status: "Projeto Principal",
      },
      {
        category: "Site Institucional",
        problem:
          "Pet shops locais sem presença digital profissional perdem clientes para concorrentes com site e canal de contato direto.",
        solution:
          "Website profissional com design moderno, responsivo e integração direta com WhatsApp para captação de clientes.",
        status: "Online",
      },
      {
        category: "Site Institucional",
        problem:
          "Barbearias que dependem só de indicação ou redes sociais têm dificuldade para converter interesse em agendamento.",
        solution:
          "Site profissional com design responsivo, integração com WhatsApp e foco em geração de agendamentos.",
        status: "Online",
      },
      {
        category: "Ferramenta Web",
        problem:
          "Conteúdo em texto nem sempre é acessível para todos os usuários ou contextos de uso.",
        solution:
          "Aplicação web que converte texto em áudio usando síntese de voz via Web Speech API, sem depender de serviços pagos de terceiros.",
        status: "Online",
      },
      {
        category: "Aplicativo Mobile",
        problem:
          "Gestão automotiva (veículos, clientes, serviços) sem um sistema dedicado costuma ficar espalhada entre planilhas e anotações.",
        solution:
          "Aplicativo mobile integrado a um backend próprio para centralizar a gestão automotiva.",
        status: "Em Desenvolvimento",
      },

      {
        category: "Site",
        problem: "Apresentação digital de uma cafeteria.",
        solution: "Confira a captura do projeto Cafeteria.",
        status: "Projeto",
      },
      {
        category: "Site",
        problem: "Apresentação digital de um negócio de turismo.",
        solution: "Confira a captura do projeto Turismo.",
        status: "Projeto",
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar sobre seu projeto.",
    channelsTitle: "Fale direto com a MyCod",
    whatsappCta: "Falar com a MyCod",
    responseLabel: "Tempo de resposta",
    responseValue: "Até 24h",
    otherChannels: "Outros canais",
    formTitle: "Enviar mensagem",
  },
  contactForm: {
    namePlaceholder: "Seu nome",
    whatsappPlaceholder: "Seu WhatsApp (com DDD)",
    emailPlaceholder: "Seu e-mail",
    messagePlaceholder: "Descreva seu projeto...",
    submitIdle: "Enviar para WhatsApp",
    submitSending: "Enviando...",
    successMessage:
      "Contato registrado! Se o WhatsApp não abrir automaticamente, toque no botão abaixo.",
    openWhatsapp: "Abrir conversa no WhatsApp",
    errorMessage:
      "Não foi possível registrar seu contato agora. Tente novamente em instantes.",
    errorWhatsappHint:
      "Seus dados continuam no formulário. Se preferir, envie a mesma mensagem direto pelo WhatsApp:",
    sendViaWhatsapp: "Enviar pelo WhatsApp",
  },
  commercial: commercialPt,
};
