"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/contact/whatsapp";
import { useTranslations } from "@/lib/i18n/LanguageContext";

// Seção do Hero (início). Enquanto ela estiver visível no celular, o atalho
// flutuante fica oculto para não cobrir a demonstração nem a ação principal.
const HERO_SECTION_ID = "inicio";
// Só no celular: no desktop e no tablet o atalho permanece sempre visível.
const MOBILE_QUERY = "(max-width: 767px)";

const BASE_CLASSES =
  "fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-background shadow-lg transition-[transform,opacity] duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none";

// Atalho fixo para o WhatsApp (número e mensagem vêm de lib/contact/whatsapp).
// z-30: abaixo do overlay do drawer mobile (z-40) — com o menu aberto, o botão
// não pode ficar clicável por cima do painel.
export function FloatingWhatsapp() {
  const t = useTranslations();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById(HERO_SECTION_ID);
    const media = window.matchMedia(MOBILE_QUERY);
    let observer: IntersectionObserver | null = null;

    const observe = () => {
      observer?.disconnect();
      observer = null;
      if (!target || !media.matches) return;
      observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), { threshold: 0 });
      observer.observe(target);
    };

    const onMediaChange = () => {
      if (!media.matches) setHidden(false);
      observe();
    };

    observe();
    media.addEventListener("change", onMediaChange);
    return () => {
      media.removeEventListener("change", onMediaChange);
      observer?.disconnect();
      // Ao sair da página do Hero (ou trocar de rota), o atalho volta a aparecer.
      setHidden(false);
    };
  }, [pathname]);

  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.cta.whatsappAriaLabel}
      aria-hidden={hidden || undefined}
      inert={hidden}
      className={`${BASE_CLASSES} ${hidden ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <MessageCircle size={26} strokeWidth={2.5} aria-hidden="true" />
    </a>
  );
}
