import { BuildContent } from "@/components/builder/BuildContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Montar meu projeto | MyCod",
  description:
    "Escolha a solução, marque as funcionalidades e envie um resumo organizado do seu projeto para a MyCod pelo WhatsApp. Sem cobrança e sem compromisso no envio.",
  alternates: {
    canonical: "/build",
  },
};

export default function BuildPage() {
  return <BuildContent />;
}
