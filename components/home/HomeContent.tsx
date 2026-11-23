"use client";

import { EntriesSection } from "@/components/home/sections/EntriesSection";
import { MycodIntro } from "@/components/home/MycodIntro";
import { HeroSection } from "@/components/home/sections/HeroSection";
import { PathsSection } from "@/components/home/sections/PathsSection";
import { PreviewsSection } from "@/components/home/sections/PreviewsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { useTranslations } from "@/lib/i18n/LanguageContext";

// Fluxo de venda: abertura com demonstração → serviços (problema e exemplo)
// → projetos reais → como funciona → dúvidas → orçamento (WhatsApp e
// configurador como opção secundária). Âncoras: #inicio, #entradas, #exemplos,
// #processo, #duvidas, #contato.
export function HomeContent() {
  const h = useTranslations().commercial.home;

  return (
    <>
      <MycodIntro />
      <HeroSection />
      <EntriesSection />
      <PreviewsSection />
      <ProcessSection steps={h.process.steps} eyebrow={h.process.eyebrow} title={h.process.title} />
      <FaqSection limit={5} />
      <PathsSection />
    </>
  );
}
