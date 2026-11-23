import { HowItWorksContent } from "@/components/how-it-works/HowItWorksContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como funciona | MyCod",
  description:
    "Diagnóstico, proposta, materiais, desenvolvimento, aprovação, publicação e suporte contínuo: o que a MyCod faz e o que você precisa fazer em cada etapa.",
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
