"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Bot, LayoutGrid, Globe, Send } from "lucide-react";
import { Tabs } from "@/components/ui/Tabs";
import type { TabItem } from "@/components/ui/Tabs";
import { useTranslations } from "@/lib/i18n/LanguageContext";

type ShowcaseTab = "sites" | "systems" | "ai";

// Quadro comum às três cenas: legenda de "demonstração", situação e conteúdo.
// Os elementos são só ilustrativos (não recebem foco nem disparam ações);
// a animação de entrada é discreta e respeita prefers-reduced-motion pela
// MotionConfig global.
function Scene({ situation, children }: { situation: string; children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-4"
    >
      <p className="text-sm text-text-secondary">{situation}</p>
      {children}
    </motion.div>
  );
}

// Cena 1 (Sites): cliente pede orçamento pelo formulário do site.
function SitesScene() {
  const s = useTranslations().home.hero.showcase.sites;
  return (
    <Scene situation={s.situation}>
      <div className="rounded-xl border border-border-strong bg-background/60 p-4">
        <p className="flex items-center gap-2 text-xs text-accent">
          <Globe size={14} aria-hidden="true" />
          {s.channel}
        </p>
        <p className="mt-2 font-semibold text-text-primary">{s.formTitle}</p>
        <dl className="mt-3 grid gap-2 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-text-muted">{s.labels.name}</dt>
            <dd className="text-right text-text-primary">{s.client}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-text-muted">{s.labels.service}</dt>
            <dd className="text-right text-text-primary">{s.service}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-text-muted">{s.labels.place}</dt>
            <dd className="text-right text-text-primary">{s.place}</dd>
          </div>
        </dl>
        {/* Neutro de propósito: a demonstração não pode parecer um botão de ação. */}
        <span className="mt-4 flex h-10 items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface text-sm font-medium text-text-secondary">
          <Send size={15} aria-hidden="true" />
          {s.action}
        </span>
      </div>
    </Scene>
  );
}

// Cena 2 (Sistemas): um pedido novo entra na coluna "Novos" do painel.
function SystemsScene() {
  const s = useTranslations().home.hero.showcase.systems;
  const columns = [
    { key: "new", label: s.columns.new, cards: [s.orders[0]] },
    { key: "progress", label: s.columns.progress, cards: [s.orders[1]] },
    { key: "done", label: s.columns.done, cards: [] },
  ] as const;

  return (
    <Scene situation={s.situation}>
      <div className="rounded-xl border border-border-strong bg-background/60 p-3 sm:p-4">
        <p className="mb-3 flex items-center gap-2 text-xs text-text-muted">
          <LayoutGrid size={14} aria-hidden="true" />
          {s.title}
        </p>
        <div className="grid grid-cols-3 gap-2">
          {columns.map((column) => (
            <div key={column.key} className="min-w-0 rounded-lg bg-surface p-2">
              <p className="truncate text-[11px] font-medium text-text-secondary">{column.label}</p>
              <div className="mt-2 space-y-2">
                {column.key === "new" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
                    className="rounded-md border border-accent/50 bg-accent/10 p-2"
                  >
                    <p className="text-[11px] font-semibold text-text-primary">{s.incoming.id}</p>
                    <p className="truncate text-[11px] text-text-secondary">{s.incoming.client}</p>
                    <span className="mt-1 inline-block rounded bg-accent px-1.5 py-0.5 text-[10px] font-medium text-background">
                      {s.tag}
                    </span>
                  </motion.div>
                )}
                {column.cards.map((order) => (
                  <div key={order.id} className="rounded-md border border-border bg-background/60 p-2">
                    <p className="text-[11px] font-semibold text-text-primary">{order.id}</p>
                    <p className="truncate text-[11px] text-text-secondary">{order.client}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Scene>
  );
}

// Cena 3 (IA): cliente pergunta o preço; a automação responde e registra.
function AiScene() {
  const s = useTranslations().home.hero.showcase.ai;
  return (
    <Scene situation={s.situation}>
      <div className="space-y-3 rounded-xl border border-border-strong bg-background/60 p-4">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-surface-strong p-3 text-sm text-text-primary"
        >
          <p className="text-[11px] text-text-muted">{s.client}</p>
          {s.question}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.3 }}
          className="max-w-[85%] rounded-2xl rounded-bl-sm border border-ai/40 bg-ai/10 p-3 text-sm text-text-primary"
        >
          <p className="mb-1 flex items-center gap-1.5 text-[11px] font-medium text-ai">
            <Bot size={13} aria-hidden="true" />
            {s.botName}
          </p>
          {s.answer}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.3 }}
          className="inline-flex items-center gap-2 rounded-full bg-ai/15 px-3 py-1 text-xs font-medium text-ai"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ai" />
          {s.tag}
        </motion.p>
      </div>
    </Scene>
  );
}

// Demonstração interativa da primeira tela: três abas, cada uma com uma
// situação diferente. Identificada como demonstração com dados fictícios.
export function HeroShowcase() {
  const t = useTranslations().home.hero.showcase;

  const items: TabItem<ShowcaseTab>[] = [
    { id: "sites", label: t.tabs.sites, panel: <SitesScene /> },
    { id: "systems", label: t.tabs.systems, panel: <SystemsScene /> },
    { id: "ai", label: t.tabs.ai, panel: <AiScene /> },
  ];

  return (
    <figure className="hero-panel relative overflow-hidden rounded-2xl border border-border-strong bg-surface p-4 shadow-2xl shadow-black/30 sm:p-6">
      {/* Gradiente pontual: um único brilho violeta de IA no canto. */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-ai/10 blur-3xl" />
      <div className="relative flex items-center justify-between gap-3">
        <p className="text-xs text-text-muted">{t.caption}</p>
      </div>
      <div className="relative mt-4">
        <Tabs label={t.tablistLabel} items={items} />
      </div>
    </figure>
  );
}
