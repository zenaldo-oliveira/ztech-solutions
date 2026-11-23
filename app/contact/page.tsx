import { ContactContent } from "@/components/contact/ContactContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | MyCod",
  description:
    "Fale com a MyCod pelo WhatsApp ou envie uma mensagem: sistemas web, SaaS, aplicativos, automações e soluções com inteligência artificial para a sua empresa.",
  keywords: [
    "contato MyCod",
    "orçamento de software",
    "desenvolvimento de sistemas para empresas",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
