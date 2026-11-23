import { test } from "@playwright/test";
import type { Browser, Page } from "@playwright/test";
import { HOME_ENTRIES, HOME_PREVIEWS } from "../lib/catalog/home";
import { BASE, WA_EXISTING_SITE, WA_OFFICIAL, createCheck, finish, headingText, newContext, newPage, scrollThrough, skipIntro } from "./support/helpers";

// Home comercial (fluxo de venda): abertura com demonstração → serviços
// (problema e exemplo) → projetos reais → como funciona → dúvidas → orçamento.
// Hero: título aprovado, botões à esquerda, demonstração em três abas (Sites,
// Sistemas, IA) com dados fictícios. O CTA principal do Hero leva ao bloco de
// orçamento, sem depender do número de WhatsApp ainda pendente.

const SECTION_ORDER = ["inicio", "entradas", "exemplos", "processo", "duvidas", "contato"];
const HERO_TITLE = "Sites, sistemas e automações para empresas de serviços";
const DEMO_SITUATIONS = [
  "Um cliente pede orçamento pelo site",
  "O pedido entra no painel da equipe",
  "A automação atende a conversa e registra o pedido",
];

async function openHome(browser: Browser, width: number, opts: { reducedMotion?: "reduce"; height?: number } = {}) {
  const opened = await newPage(browser, width, { height: opts.height ?? 900, reducedMotion: opts.reducedMotion });
  await opened.page.goto(BASE + "/", { waitUntil: "networkidle" });
  await skipIntro(opened.page);
  return opened;
}

const overflow = (page: Page) => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

for (const width of [1440, 1024, 768, 390, 360]) {
  test(`Home ${width}px: ordem, Hero, demonstração e rolagem horizontal`, async ({ browser }) => {
    const check = createCheck();
    const { context, page, errors } = await openHome(browser, width);
    await scrollThrough(page, 500, 60);

    check(`${width}px sem rolagem horizontal`, (await overflow(page)) <= 0, await overflow(page));
    const order = await page.evaluate(() => [...document.querySelectorAll("main section[id]")].map((s) => s.id));
    check(`${width}px ordem das seções`, JSON.stringify(order) === JSON.stringify(SECTION_ORDER), order);

    const heroTitle = await headingText(page);
    check(`${width}px H1 aprovado no Hero`, heroTitle.startsWith(HERO_TITLE), heroTitle);

    const layout = await page.evaluate(() => {
      const button = document.querySelector<HTMLAnchorElement>('#inicio a[href^="https://wa.me/"]')!.getBoundingClientRect();
      const figure = document.querySelector("#inicio figure")!.getBoundingClientRect();
      return {
        buttonTop: Math.round(button.top),
        figureTop: Math.round(figure.top),
        figureLeft: Math.round(figure.left),
        figureRight: Math.round(figure.right),
        buttonLeft: Math.round(button.left),
        vw: innerWidth,
      };
    });
    check(`${width}px demonstração inteira dentro da tela`, layout.figureLeft >= 0 && layout.figureRight <= layout.vw, layout);
    // Celular: botões antes da demonstração. Desktop: demonstração à direita.
    if (width < 1024) {
      check(`${width}px celular: botões antes da demonstração`, layout.buttonTop < layout.figureTop, layout);
    } else {
      check(`${width}px desktop: demonstração à direita do texto`, layout.figureLeft > layout.buttonLeft, layout);
    }

    const tabs = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLElement>('#inicio [role="tab"]')].map((tab) => {
        const r = tab.getBoundingClientRect();
        const list = tab.parentElement!.getBoundingClientRect();
        return r.left >= list.left - 1 && r.right <= list.right + 1;
      }),
    );
    check(`${width}px 3 abas da demonstração visíveis`, tabs.length === 3 && tabs.every(Boolean), tabs);

    const previewTabs = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLElement>('#exemplos [role="tab"]')].map((tab) => {
        const r = tab.getBoundingClientRect();
        const list = tab.parentElement!.getBoundingClientRect();
        return r.left >= list.left - 1 && r.right <= list.right + 1;
      }),
    );
    check(`${width}px ${HOME_PREVIEWS.length} abas de exemplos visíveis`, previewTabs.length === HOME_PREVIEWS.length && previewTabs.every(Boolean), previewTabs);

    check(`${width}px sem erros de console`, errors.length === 0, errors.slice(0, 2));
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({ path: test.info().outputPath(`home-${width}-hero.png`) });
    await page.screenshot({ path: test.info().outputPath(`home-${width}-full.png`), fullPage: true });

    await context.close();
    finish(check);
  });
}

test("Home: demonstração com três abas, troca por clique e por teclado", async ({ browser }) => {
  const check = createCheck();
  const { context, page } = await openHome(browser, 1440);

  const tabIds = await page.evaluate(() => [...document.querySelectorAll<HTMLElement>('#inicio [role="tab"]')].map((t) => t.textContent?.trim()));
  check("abas: Sites, Sistemas e IA", JSON.stringify(tabIds) === JSON.stringify(["Sites", "Sistemas", "IA"]), tabIds);

  for (const [index, situation] of DEMO_SITUATIONS.entries()) {
    await page.locator('#inicio [role="tab"]').nth(index).click();
    await page.waitForTimeout(450);
    const panel = await page.evaluate(() => document.querySelector('#inicio [role="tabpanel"]')?.textContent ?? "");
    check(`aba ${index + 1}: cenário "${situation}"`, panel.includes(situation), panel.slice(0, 120));
  }

  // Teclado: a primeira aba fica ativa e com foco; a seta direita avança e move o foco.
  await page.locator('#inicio [role="tab"]').first().click();
  await page.waitForTimeout(300);
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(300);
  const selected = await page.evaluate(() => [...document.querySelectorAll('#inicio [role="tab"]')].map((t) => t.getAttribute("aria-selected")));
  check("teclado: seta direita seleciona a segunda aba", JSON.stringify(selected) === JSON.stringify(["false", "true", "false"]), selected);
  const focused = await page.evaluate(() => document.activeElement?.textContent?.trim());
  check("teclado: foco acompanha a aba", focused === "Sistemas", focused);

  // Demonstração não cria controles interativos: só as abas são focáveis.
  const focusables = await page.evaluate(() => document.querySelectorAll('#inicio figure a, #inicio figure button:not([role="tab"])').length);
  check("demonstração sem botões ou links focáveis (além das abas)", focusables === 0, focusables);

  await context.close();
  finish(check);
});

test("Home: serviços com problema e exemplo, projetos, processo, dúvidas e orçamento", async ({ browser }) => {
  const check = createCheck();
  const { context, page, errors } = await openHome(browser, 1440);
  await scrollThrough(page, 500, 60);

  const cards = await page.evaluate(() =>
    [...document.querySelectorAll("#entradas ul.grid > li")].map((li) => ({
      text: li.textContent ?? "",
      hasProblem: li.textContent?.includes("Problema que resolve") ?? false,
      hasExample: li.textContent?.includes("Exemplo") ?? false,
      hasCta: !!li.querySelector("a[href]"),
    })),
  );
  check(`serviços: ${HOME_ENTRIES.length} cards com problema e exemplo`, cards.length === HOME_ENTRIES.length && cards.every((c) => c.hasProblem && c.hasExample && c.hasCta), cards);

  const previewCount = await page.evaluate(() => document.querySelectorAll('#exemplos [role="tab"]').length);
  check("projetos: abas de exemplos", previewCount === HOME_PREVIEWS.length, previewCount);

  const faq = await page.evaluate(() => ({
    items: document.querySelectorAll("#duvidas details").length,
    moreLink: document.querySelector('#duvidas a[href="/how-it-works#duvidas"]') !== null,
  }));
  check("dúvidas: 5 perguntas exibidas, com link para todas", faq.items === 5 && faq.moreLink, faq);

  const paths = await page.evaluate(() =>
    [...document.querySelectorAll<HTMLAnchorElement>("#contato a")].map((a) => ({ href: a.href, rel: a.rel })),
  );
  const hasBuild = paths.some((p) => p.href.endsWith("/build"));
  const hasWhatsApp = paths.some((p) => [WA_OFFICIAL, WA_EXISTING_SITE].includes(p.href));
  check("orçamento: caminho para /build e WhatsApp com noopener", hasBuild && hasWhatsApp && paths.filter((p) => p.href.startsWith("https://wa.me")).every((p) => p.rel.includes("noopener")), paths);
  // Ação principal do bloco: WhatsApp oficial vem antes do configurador.
  const primaryIndex = paths.findIndex((p) => p.href === WA_OFFICIAL);
  const buildIndex = paths.findIndex((p) => p.href.endsWith("/build"));
  check("orçamento: WhatsApp oficial é a ação principal, configurador vem depois", primaryIndex >= 0 && buildIndex > primaryIndex, { primaryIndex, buildIndex });

  check("sem erros de console", errors.length === 0, errors.slice(0, 2));
  await context.close();
  finish(check);
});

test("Home: CTA principal do Hero abre o WhatsApp de orçamento; configurador é secundário", async ({ browser }) => {
  const check = createCheck();
  const { context, page } = await openHome(browser, 1440);

  const heroLinks = await page.evaluate(() =>
    [...document.querySelectorAll<HTMLAnchorElement>("#inicio a")].map((a) => ({
      text: a.textContent?.trim(),
      href: a.getAttribute("href"),
      target: a.getAttribute("target"),
    })),
  );
  const primary = heroLinks[0];
  const secondary = heroLinks[1];
  check("Hero: CTA principal é 'Pedir orçamento pelo WhatsApp'", primary?.text === "Pedir orçamento pelo WhatsApp", primary);
  check(
    "Hero: CTA principal aponta ao WhatsApp oficial, em nova aba",
    !!primary?.href?.startsWith("https://wa.me/5565974009820") && primary?.target === "_blank",
    primary,
  );
  check("Hero: configurador (/build) é a opção secundária", secondary?.href === "/build", secondary);

  // Não clicamos: o link abriria o WhatsApp em nova aba. Conferimos o destino.
  await context.close();
  finish(check);
});

test("Home: prefers-reduced-motion mantém o conteúdo visível sem rolar", async ({ browser }) => {
  const check = createCheck();
  const { context, page, errors } = await openHome(browser, 1440, { reducedMotion: "reduce" });
  const hidden = await page.evaluate(
    () =>
      [...document.querySelectorAll("main section[id] *")].filter(
        (el) => el.children.length === 0 && (el.textContent ?? "").trim() && parseFloat(getComputedStyle(el).opacity) < 0.05,
      ).length,
  );
  check("reduced motion: conteúdo visível sem rolar", hidden === 0, hidden);
  check("reduced motion: sem erros de console", errors.length === 0, errors.slice(0, 2));
  await context.close();
  finish(check);
});

test("Home: sem JavaScript, o Hero e a demonstração continuam no HTML", async ({ browser }) => {
  const check = createCheck();
  const context = await newContext(browser, { viewport: { width: 1440, height: 900 }, javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(BASE + "/", { waitUntil: "load" });
  await skipIntro(page);
  const h1 = await headingText(page);
  check("sem JS: H1 aprovado no HTML", h1.startsWith(HERO_TITLE), h1);
  const figure = await page.evaluate(() => document.querySelectorAll("#inicio figure [role='tab']").length);
  check("sem JS: demonstração com as abas no HTML", figure === 3, figure);
  await context.close();
  finish(check);
});

test("Home: idiomas EN e ES", async ({ browser }) => {
  const check = createCheck();
  const { context, page, errors } = await openHome(browser, 1440);
  const langs: [string, string, string][] = [
    ["en", "We build websites, web systems and automations", "I already have a website"],
    ["es", "Creamos sitios, sistemas web y automatizaciones", "Ya tengo un sitio"],
  ];
  for (const [code, h1, existing] of langs) {
    await page.evaluate((c) => localStorage.setItem("language", c), code);
    await page.reload({ waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    const text = {
      h1: await headingText(page),
      paths: await page.evaluate(() => [...document.querySelectorAll("#contato h3")].map((h) => h.textContent).join(" | ")),
      tabs: await page.evaluate(() => [...document.querySelectorAll("#inicio [role='tab']")].length),
    };
    check(`idioma ${code.toUpperCase()}: Home traduzida`, text.h1.startsWith(h1) && text.paths.includes(existing) && text.tabs === 3, text);
  }
  await page.evaluate(() => localStorage.setItem("language", "pt"));
  check("idiomas: sem erros de console", errors.length === 0, errors.slice(0, 2));
  await context.close();
  finish(check);
});
