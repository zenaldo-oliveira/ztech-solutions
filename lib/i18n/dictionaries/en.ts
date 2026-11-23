import { commercialEn } from "@/lib/i18n/dictionaries/commercial/en";
import type { Dictionary } from "@/lib/i18n/types";

export const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About MyCod",
    services: "Websites and systems",
    plans: "Plans and pricing",
    build: "Build my project",
    howItWorks: "How it works",
    projects: "Real projects",
    contact: "Contact",
  },
  brand: {
    tagline: "Technology that drives business",
    description:
      "Professional websites, web systems, smart automations and AI agents for businesses.",
  },
  sidebar: {
    navLabel: "Main navigation",
    footerNavLabel: "Company",
    quoteCta: "Request a quote",
    collapse: "Collapse sidebar",
    expand: "Expand sidebar",
  },
  topbar: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    breadcrumbLabel: "Breadcrumb",
  },
  preferences: {
    trigger: "Preferences",
    language: "Language",
    theme: "Theme",
    themeLight: "Light",
    themeDark: "Dark",
    display: "Display",
  },
  footer: {
    navTitle: "Navigation",
    moreTitle: "More",
    contactTitle: "Contact",
    socialTitle: "Social",
    whatsapp: "WhatsApp",
    rights: "All rights reserved.",
  },
  cta: {
    talk: "Talk to MyCod",
    whatsappAriaLabel: "Talk to MyCod on WhatsApp (opens in a new tab)",
    whatsappHint: "on WhatsApp (opens in a new tab)",
  },
  globalControls: {
    languageSelector: "Select language",
    languageMenuLabel: "Available languages",
  },
  home: {
    hero: {
      eyebrow: "For small and mid-sized businesses",
      title:
        "We build websites, web systems and automations for your business.",
      description:
        "From a landing page to a custom system. You choose where to start, build your request in a few minutes and receive a proposal with setup and monthly fee.",
      ctaPrimary: "I want to create my project",
      ctaSecondary: "Explore the solutions",
      ctaQuote: "Request a quote",
      ctaWhatsApp: "Request a quote on WhatsApp",
      ctaConfigurator: "Build your project in the configurator",
      assurance: "Before you hire, you receive a proposal with scope, timeline and fixed prices.",
      showcase: {
        caption: "Demonstration with fictional data",
        tablistLabel: "Demonstration examples",
        tabs: { sites: "Websites", systems: "Systems", ai: "AI" },
        sites: {
          situation: "A client asks for a quote on the website",
          formTitle: "New quote request",
          client: "Mariana Costa",
          service: "Air conditioner cleaning",
          place: "Cuiabá · Downtown",
          channel: "Received from the website",
          labels: { name: "Name", service: "Service", place: "Location" },
          action: "Reply on WhatsApp",
        },
        systems: {
          situation: "The order enters the team's dashboard",
          columns: { new: "New", progress: "In progress", done: "Done" },
          title: "Orders",
          orders: [
            { id: "#1038", client: "Example Garage", service: "System review" },
            { id: "#1041", client: "Carlos Lima", service: "Preventive maintenance" },
          ],
          incoming: { id: "#1042", client: "Mariana Costa", service: "Air conditioner cleaning" },
          tag: "Just arrived",
        },
        ai: {
          situation: "The automation handles the chat and records the request",
          client: "Mariana Costa",
          question: "Do you clean air conditioners? How much does it cost?",
          answer: "We do! How many units? I'll record your request and the team will confirm the price.",
          tag: "Request recorded in the dashboard",
          botName: "MyCod automation",
        },
      },
      services: [
        { name: "Websites", benefit: "Pages that present your services and receive requests." },
        { name: "Custom systems", benefit: "Organize orders, schedules and records in one place." },
        { name: "AI automations", benefit: "Replies and requests organized without manual work." },
      ],
      chat: {
        header: "MyCod",
        outgoing: "Hi! I came from the MyCod website and would like to request a quote for my business. Can you help me?",
        outgoingMeta: "prefilled message",
        reply: "Hi! Thanks for getting in touch. Tell me which service you need.",
      },
      mockup: {
        caption: "Concept interface · ZLift Manager",
        modules: [
          "Clients",
          "Elevators",
          "Technicians",
          "Service orders",
          "Checklist",
          "Reports",
        ],
        ordersTitle: "Service orders",
        newOrder: "New order",
        checklistTitle: "Execution checklist",
        checklistItems: ["Photos", "Notes", "Signature", "Report"],
        reportTitle: "Report",
      },
    },
    capabilities: {
      items: [
        "Web Systems",
        "SaaS",
        "Apps",
        "Artificial Intelligence",
        "Automation",
        "Integrations",
      ],
    },
    solutions: {
      flow: ["Input", "AI", "Automation", "Result"],
    },
    product: {
      tagline: "A platform for managing maintenance operations.",
      flow: [
        "Clients",
        "Elevators",
        "Technicians",
        "Service orders",
        "Execution",
        "Checklist",
        "Photos",
        "Notes",
        "Signature",
        "Report",
      ],
    },
    cases: {
      eyebrow: "Real projects",
      title: "Projects we've built",
      description:
        "Real examples of what we've already built — the problem, the solution and the technology behind each one.",
      explore: "Explore",
      similar: "I want something similar",
    },
    howWeWork: {
      eyebrow: "How we work",
      title: "From problem to software",
    },
    finalCta: {
      title: "Got a process that could be better?",
      subtitle: "Let's turn your idea into software.",
      description:
        "Tell us how your company works today. We'll understand the problem and assess how technology can transform that process.",
      cta: "Talk to MyCod",
      secondary: "Prefer a form? Send a message",
    },
  },
  about: {
    eyebrow: "About MyCod",
    title: "Technology that turns real problems into digital solutions.",
    description:
      "MyCod builds web systems, SaaS, apps, automations and artificial intelligence solutions for businesses that want to digitize processes and gain more control over their operations.",
    cta: "Talk to MyCod",
    secondaryCta: "Explore cases",
    capabilitiesTitle: "What we build",
    culture: {
      eyebrow: "Culture",
      title: "How MyCod thinks and works.",
      description: "The purpose, mission and vision behind every project, and the values with examples of how we apply them day to day.",
      purposeLabel: "Purpose",
      purpose: "Help service businesses get found, serve customers better and save time with technology.",
      missionLabel: "Mission",
      mission: "Build websites, systems and automations that solve concrete problems, such as making quote requests easier, organizing bookings and reducing repetitive tasks.",
      visionLabel: "Vision",
      vision: "Build MyCod's reputation in Cuiabá and Várzea Grande through the quality of our deliveries, clear proposals and customer trust.",
      valuesTitle: "Values and how we practice them",
      howLabel: "How we practice it",
      values: [
        {
          name: "Understand before building",
          how: "We learn how the business works and where it loses time or opportunities.",
        },
        {
          name: "Clear agreements",
          how: "We record scope, timeline, investment and what is included after delivery. We talk before changing an agreement.",
        },
        {
          name: "Simplicity for the user",
          how: "We prioritize direct journeys, such as requesting a quote on WhatsApp from a phone.",
        },
        {
          name: "Quality in delivery",
          how: "We test the customer's full path and show the result at handover.",
        },
        {
          name: "Care for the client's business",
          how: "We protect access, ask permission before showcasing projects and guide the client on using the solution.",
        },
      ],
      openingLabel: "How we start every project",
      opening: "“What needs to get easier in your business once this project is live?”",
      toneLabel: "Tone of voice",
      tone: "Direct, professional and friendly. We describe what the customer will be able to do with the solution and agree on what will be delivered.",
    },
    proof: {
      eyebrow: "Proof",
      title: "What we've already built",
      othersLabel: "Other projects",
      cta: "Explore cases",
    },
    founder: {
      eyebrow: "Founder",
      title: "Who's behind MyCod",
      role: "Founder of MyCod",
      body: [
        "MyCod was founded by Zenaldo Pereira de Oliveira, a full stack developer with a degree in Systems Analysis and Development, building modern applications with React, Next.js, TypeScript, Prisma and PostgreSQL.",
        "Beyond development, he has a technical background in Electrotechnics and knowledge of Digital Investigation (OSINT) — a combination that strengthens the problem-solving and analytical thinking behind every solution delivered.",
      ],
      formationTitle: "Education",
      formationItems: [
        "Systems Analysis and Development",
        "Technical background in Electrotechnics",
        "React and Next.js",
      ],
    },
    tech: {
      eyebrow: "Technical capability",
      title: "The technology we build with.",
      description:
        "The technologies we use to deliver, with the real projects where each one has been applied.",
      groups: {
        web: "Web",
        mobile: "Mobile",
        backend: "Backend",
        data: "Data",
        ai: "Artificial intelligence",
        automation: "Automation",
      },
      appliedIn: "Applied in",
    },
    finalCta: {
      title: "Got a process that could be better?",
      subtitle: "Tell MyCod what your business needs.",
    },
  },
  projects: {
    badge: "Cases and Projects",
    filterLabel: "Filter by category",
    filterAll: "All",
    allTitle: "All projects",
    description:
      "Each case below shows the real problem and the solution delivered — built with React, Next.js, React Native, Artificial Intelligence and scalable solutions for businesses.",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    demoLabel: "Demo",
    demonstrationBadge: "Demonstration",
    githubLabel: "GitHub",
    media: {
      screenshotAlt: "Published home page of {title}",
      phoneAlts: [
        "Start screen of the {title} app",
        "Diet plan generated by the {title} app",
      ],
    },
    carousel: {
      region: "Projects",
      previous: "Previous project",
      next: "Next project",
      goTo: "Go to project",
      of: "of",
    },
    items: [
      {
        category: "Platform / SaaS",
        problem:
          "Elevator maintenance companies often run on manual processes and information scattered across clients, equipment, technicians and service orders.",
        solution:
          "A proprietary platform that centralizes the entire operational flow: clients, elevators, technicians, service orders, execution, checklist, photos, notes, signature and report.",
        status: "Own product",
      },
      {
        category: "Mobile App",
        problem:
          "Building a personalized diet usually depends on manual tracking, without automatically cross-referencing all of the user's data.",
        solution:
          "A Full Stack mobile app with Artificial Intelligence (Gemini AI) that generates personalized diets from weight, height, age, goal and activity level.",
        status: "Flagship Project",
      },
      {
        category: "Business Website",
        problem:
          "Local pet shops without a professional digital presence lose customers to competitors with a website and a direct contact channel.",
        solution:
          "A professional website with modern, responsive design and direct WhatsApp integration for lead capture.",
        status: "Online",
      },
      {
        category: "Business Website",
        problem:
          "Barbershops that rely only on referrals or social media struggle to convert interest into bookings.",
        solution:
          "A professional website with responsive design, WhatsApp integration and a focus on generating bookings.",
        status: "Online",
      },
      {
        category: "Web Tool",
        problem:
          "Text content isn't always accessible to every user or every context of use.",
        solution:
          "A web app that converts text to audio using speech synthesis via the Web Speech API, with no paid third-party services.",
        status: "Online",
      },
      {
        category: "Mobile App",
        problem:
          "Vehicle fleet management (vehicles, clients, services) without a dedicated system tends to end up scattered across spreadsheets and notes.",
        solution:
          "A mobile app integrated with a proprietary backend to centralize fleet management.",
        status: "In Development",
      },
      {
        category: "Website",
        problem: "Digital presentation of a coffee shop.",
        solution: "View the Cafeteria project screenshot.",
        status: "Project",
      },
      {
        category: "Website",
        problem: "Digital presentation of a tourism business.",
        solution: "View the Turismo project screenshot.",
        status: "Project",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your project.",
    channelsTitle: "Talk directly to MyCod",
    whatsappCta: "Talk to MyCod",
    responseLabel: "Response time",
    responseValue: "Within 24h",
    otherChannels: "Other channels",
    formTitle: "Send a message",
  },
  contactForm: {
    namePlaceholder: "Your name",
    whatsappPlaceholder: "Your WhatsApp (with area code)",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Describe your project...",
    submitIdle: "Send via WhatsApp",
    submitSending: "Sending...",
    successMessage:
      "Contact registered! If WhatsApp doesn't open automatically, tap the button below.",
    openWhatsapp: "Open WhatsApp chat",
    errorMessage:
      "We couldn't register your contact right now. Please try again shortly.",
    errorWhatsappHint:
      "Your details are still in the form. If you prefer, send the same message directly on WhatsApp:",
    sendViaWhatsapp: "Send via WhatsApp",
  },
  commercial: commercialEn,
};
