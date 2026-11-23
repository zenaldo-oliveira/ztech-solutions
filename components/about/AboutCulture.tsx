"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { useTranslations } from "@/lib/i18n/LanguageContext";

// Cultura da MyCod: propósito, missão e visão, e os valores com a forma como
// são praticados. Textos do documento "MyCod — Cultura e identidade" (v1),
// traduzidos em lib/i18n/dictionaries (pt, en, es). Cartões empilhados no
// celular e em grade a partir de sm/md.
export function AboutCulture() {
  const t = useTranslations();
  const c = t.about.culture;

  const statements = [
    { label: c.purposeLabel, text: c.purpose },
    { label: c.missionLabel, text: c.mission },
    { label: c.visionLabel, text: c.vision },
  ];

  return (
    <Section id="cultura">
      <Container>
        <SectionHeader eyebrow={c.eyebrow} title={c.title} description={c.description} />

        <Reveal>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {statements.map((item) => (
              <li key={item.label} className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{item.label}</p>
                <p className="mt-3 text-pretty text-base leading-relaxed text-text-primary">{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12">
          <h3 className="text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">{c.valuesTitle}</h3>

          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {c.values.map((value) => (
              <li key={value.name} className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <h4 className="text-base font-semibold text-text-primary">{value.name}</h4>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-text-muted">{c.howLabel}</p>
                <p className="mt-1 text-pretty text-sm leading-relaxed text-text-secondary">{value.how}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border-accent bg-accent/5 p-5 sm:p-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{c.openingLabel}</p>
            <p className="mt-3 text-pretty text-base leading-relaxed text-text-primary">{c.opening}</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{c.toneLabel}</p>
            <p className="mt-3 text-pretty text-base leading-relaxed text-text-secondary">{c.tone}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
