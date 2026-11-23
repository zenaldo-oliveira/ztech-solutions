import { expect, test } from "@playwright/test";
import type { BrowserContext, Page } from "@playwright/test";
import { BASE, createCheck, finish, newPage } from "./support/helpers";

// Abertura MyCod sobre a home: só a vinheta, sem controles nem textos. Toca a
// cada carregamento completo da página, sem localStorage. Os testes gerais da
// home pulam a abertura pela interface (skipIntro); aqui ela é validada do
// jeito que o visitante a vê.

const INTRO = 'section[aria-label="Abertura da MyCod"]';
const VIEWPORTS = [
  { label: "390 × 844", width: 390, height: 844 },
  { label: "1280 × 720", width: 1280, height: 720 },
];

// Regra de autoplay: reproduzir com som exige interação prévia do visitante.
// O Playwright inicia a página "ativada", então a ativação é rastreada a partir
// de toques e teclas reais. play() com som é recusado com NotAllowedError
// enquanto o visitante não interagiu. Simulação determinística do bloqueio.
async function blockUnmutedAutoplay(context: BrowserContext) {
  await context.addInitScript(() => {
    let activated = false;
    for (const type of ["pointerdown", "keydown", "touchend"]) {
      window.addEventListener(type, () => (activated = true), { capture: true });
    }
    const originalPlay = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function () {
      if (!this.muted && !activated) {
        return Promise.reject(
          new DOMException("play() failed because the user didn't interact with the document first.", "NotAllowedError"),
        );
      }
      return originalPlay.call(this);
    };
  });
}

async function videoState(page: Page) {
  return page.evaluate(() => {
    const v = document.querySelector("video");
    return v ? { muted: v.muted, paused: v.paused, t: v.currentTime, src: v.currentSrc } : null;
  });
}

// A camada já vem no HTML; as teclas só funcionam depois da hidratação, que
// começa a reprodução. Espera o vídeo andar antes de interagir.
async function waitForIntroPlaying(page: Page) {
  await expect.poll(async () => (await videoState(page))?.t ?? 0, { timeout: 8000 }).toBeGreaterThan(0);
}

async function introHidden(page: Page, timeout = 9000) {
  await expect(page.locator(INTRO)).toHaveCount(0, { timeout });
}

for (const vp of VIEWPORTS) {
  test.describe(`Abertura MyCod em ${vp.label}`, () => {
    test("primeira visita mostra só a vinheta, sem controles nem texto, e o MP4 servido é o da marca", async ({ browser }) => {
      const { context, page, errors } = await newPage(browser, vp.width, { height: vp.height });
      const check = createCheck();
      await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
      await expect(page.locator(INTRO)).toBeVisible();
      await waitForIntroPlaying(page);

      const state = await videoState(page);
      check("vídeo da MyCod carregado", state?.src.endsWith("/brand/MyCod-vinheta.mp4"), state?.src);
      check("vídeo está tocando", state && !state.paused);

      const buttons = await page.locator(`${INTRO} button, ${INTRO} a`).count();
      check("nenhum botão ou link dentro da abertura", buttons === 0, buttons);
      const text = await page.locator(INTRO).innerText();
      check("nenhum texto visível dentro da abertura", text.trim() === "", text);

      const cover = await page.locator(INTRO).boundingBox();
      check("camada cobre a viewport", cover && cover.width >= vp.width - 1 && cover.height >= vp.height - 1, cover);

      check("sem erros de console", errors.length === 0, errors);
      finish(check);
      await context.close();
    });

    test("som bloqueado: a vinheta começa mudo e segue para a home sem pedir interação", async ({ browser }) => {
      const { context, page } = await newPage(browser, vp.width, { height: vp.height });
      await blockUnmutedAutoplay(context);
      await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
      await expect(page.locator(INTRO)).toBeVisible();
      await expect.poll(async () => (await videoState(page))?.muted, {
        message: "com autoplay bloqueado, o vídeo começa mudo",
      }).toBe(true);
      await introHidden(page);
      await expect(page.locator('a[href^="https://wa.me/5565974009820"]').first()).toBeAttached();
      await context.close();
    });

    test("cada recarregamento e cada aba mostram a abertura de novo, sem bloqueio por navegador", async ({ browser }) => {
      const { context, page } = await newPage(browser, vp.width, { height: vp.height });
      await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
      await expect(page.locator(INTRO)).toBeVisible();
      await waitForIntroPlaying(page);
      await page.keyboard.press("Escape");
      await introHidden(page, 2000);

      // Recarregar na mesma aba: a vinheta volta.
      await page.reload({ waitUntil: "domcontentloaded" });
      await expect(page.locator(INTRO)).toBeVisible();
      await waitForIntroPlaying(page);
      await page.keyboard.press("Escape");
      await introHidden(page, 2000);

      // Outra aba do mesmo navegador: também toca.
      const other = await context.newPage();
      await other.goto(BASE + "/", { waitUntil: "domcontentloaded" });
      await expect(other.locator(INTRO)).toBeVisible();
      await other.close();
      await context.close();
    });

    test("um navegador novo (contexto limpo) mostra a abertura de novo", async ({ browser }) => {
      const first = await newPage(browser, vp.width, { height: vp.height });
      await first.page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
      await expect(first.page.locator(INTRO)).toBeVisible();
      await first.context.close();

      const second = await newPage(browser, vp.width, { height: vp.height });
      await second.page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
      await expect(second.page.locator(INTRO)).toBeVisible();
      await second.context.close();
    });

    test("Esc revela a home e para o vídeo", async ({ browser }) => {
      const { context, page } = await newPage(browser, vp.width, { height: vp.height });
      await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
      await expect(page.locator(INTRO)).toBeVisible();
      await waitForIntroPlaying(page);
      await page.keyboard.press("Escape");
      await introHidden(page, 2000);
      await context.close();
    });

    test("Tab não tira o foco da abertura para a home escondida", async ({ browser }) => {
      const { context, page } = await newPage(browser, vp.width, { height: vp.height });
      await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
      await expect(page.locator(INTRO)).toBeVisible();
      await waitForIntroPlaying(page);
      for (let i = 0; i < 3; i++) {
        await page.keyboard.press("Tab");
        const leaked = await page.evaluate(() => {
          const a = document.activeElement as HTMLElement | null;
          return !!a && a.tagName !== "BODY" && !document.querySelector('section[aria-label="Abertura da MyCod"]')?.contains(a);
        });
        expect(leaked, "o foco não pode cair em elemento da home escondida").toBe(false);
      }
      await context.close();
    });

    test("fim do vídeo revela a home sozinha", async ({ browser }) => {
      const { context, page } = await newPage(browser, vp.width, { height: vp.height });
      await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
      await expect(page.locator(INTRO)).toBeVisible();
      await introHidden(page);
      await context.close();
    });

    test("depois da transição, o orçamento pelo WhatsApp continua acessível", async ({ browser }) => {
  const { context, page } = await newPage(browser, vp.width, { height: vp.height });
  await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(INTRO)).toBeVisible();
  await waitForIntroPlaying(page);
  await page.keyboard.press("Escape");
  await introHidden(page, 2000);
  // Não clicamos: o link abre o WhatsApp em nova aba. Conferimos destino e visibilidade.
  // CTA do hero (#inicio): é o link visível no celular e no desktop.
  const cta = page.locator('#inicio a[href^="https://wa.me/5565974009820"]');
  await expect(cta).toBeVisible({ timeout: 5000 });
  await cta.scrollIntoViewIfNeeded({ timeout: 5000 });
  await expect(cta).toHaveAttribute("target", "_blank");
  await context.close();
});

test("falha no vídeo libera a home imediatamente", async ({ browser }) => {
      const { context, page } = await newPage(browser, vp.width, { height: vp.height });
      await context.route("**/brand/MyCod-vinheta.mp4", (route) => route.abort());
      await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
      await introHidden(page, 4000);
      await context.close();
    });

    test("início lento libera a home sem esperar o vídeo", async ({ browser }) => {
      const { context, page } = await newPage(browser, vp.width, { height: vp.height });
      await context.route("**/brand/MyCod-vinheta.mp4", async (route) => {
        await new Promise((resolve) => setTimeout(resolve, 6000));
        await route.abort();
      });
      await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
      await introHidden(page, 5000);
      await context.close();
    });
  });
}

test("movimento reduzido: a home aparece direto, sem abertura", async ({ browser }) => {
  const { context, page } = await newPage(browser, 390, { height: 844, reducedMotion: "reduce" });
  await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(INTRO)).toHaveCount(0);
  await context.close();
});
