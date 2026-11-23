
// Domínio oficial da MyCod. Definido em build por NEXT_PUBLIC_SITE_URL (ex.:
// no painel da Vercel, por ambiente). Sem a variável, usa o domínio final
// planejado. Canonical, Open Graph, sitemap e robots usam esta URL: ela deve
// ser a que responde direto, sem redirecionamento. Em prévia, aponte para a
// URL da prévia. Não use segredo nessa variável (ela vai para o navegador).
const DEFAULT_SITE_URL = "https://mycod.com.br";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, "");

export const SITE_NAME = "MyCod";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/zenaldo-pereira-oliveira/",
  github: "https://github.com/zenaldo-oliveira",
} as const;

// Rotas reais do site. `key` indexa t.nav (rótulos traduzidos). A Sidebar,
// a Top Bar (breadcrumb) e o Footer leem daqui — nunca duplicar a lista.

// Menu principal da Sidebar (vitrine comercial).
export const MAIN_NAV = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/plans", key: "plans" },
  { href: "/how-it-works", key: "howItWorks" },
  { href: "/projects", key: "projects" },
] as const;

// Base da Sidebar: institucional e a ação de orçamento (fluxo de proposta).
export const ABOUT_NAV = { href: "/about", key: "about" } as const;
export const QUOTE_NAV = { href: "/build", key: "build" } as const;

// Rodapé ("Mais"): demais páginas reais, fora do menu lateral.
export const SECONDARY_NAV = [ABOUT_NAV, { href: "/contact", key: "contact" }] as const;

// Breadcrumb: toda página com rótulo próprio.
export const ALL_NAV = [...MAIN_NAV, ...SECONDARY_NAV, QUOTE_NAV] as const;

export type NavItem = (typeof ALL_NAV)[number];

export function isNavItemActive(href: string, pathname: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
