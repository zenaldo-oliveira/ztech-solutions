"use client";

import { WhatsAppCta } from "@/components/contact/WhatsAppCta";
import { motion } from "framer-motion";
import { HeroShowcase } from "@/components/home/HeroShowcase";
import { AnimatedH1 } from "@/components/ui/AnimatedH1";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useTranslations } from "@/lib/i18n/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

// Entrada do Hero igual no servidor e no navegador (só deslocamento, sem
// opacidade). Com movimento reduzido, a MotionConfig global torna a
// transição instantânea e o CSS de [data-reveal] anula o deslocamento
// desde o HTML — sem depender da preferência na primeira renderização.
function fadeUp(delay: number) {
  return {
    "data-reveal": "",
    initial: { y: 12 },
    animate: { y: 0 },
    transition: { duration: 0.7, ease: EASE, delay },
  };
}

// Primeira tela: título e subtítulo aprovados, ações à esquerda e a
// demonstração interativa à direita. No celular, a coluna de texto (com os
// botões) vem antes da demonstração.
export function HeroSection() {
  const hero = useTranslations().home.hero;

  return (
    <Section id="inicio" variant="hero" className="brand-hero overflow-x-clip xl:pb-16">
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">
        <div className="min-w-0 max-w-xl lg:max-w-none">
          <AnimatedH1
            {...fadeUp(0.05)}
            text={hero.title}
            wordRise
            className="hero-word-rise text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]"
          />

          <motion.p
            {...fadeUp(0.12)}
            className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div {...fadeUp(0.2)} className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              {/* Ação principal: leva ao bloco de orçamento da própria home, que
                  não depende do número de WhatsApp ainda pendente. */}
              <WhatsAppCta
                label={hero.ctaWhatsApp}
                ariaLabel={hero.ctaWhatsApp}
                variant="inverse"
                size="md"
                className="h-12 w-full whitespace-nowrap sm:w-auto"
              />

              {/* Opção secundária: o configurador continua acessível em /build. */}
              <Button href="/build" variant="onBrand" className="h-12 w-full whitespace-nowrap sm:w-auto">
                {hero.ctaConfigurator}
              </Button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-text-muted">{hero.assurance}</p>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.28)} className="min-w-0">
          <HeroShowcase />
        </motion.div>
      </Container>
    </Section>
  );
}
