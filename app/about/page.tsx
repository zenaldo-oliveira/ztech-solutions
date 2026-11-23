import { AboutContent } from "@/components/about/AboutContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a MyCod",
  description:
    "A MyCod desenvolve sistemas web, SaaS, aplicativos, automações e soluções com inteligência artificial para empresas que querem digitalizar processos e ganhar mais controle sobre suas operações.",
  keywords: [
    "MyCod",
    "empresa de desenvolvimento de software",
    "sistemas empresariais",
    "SaaS",
    "React",
    "Next.js",
    "TypeScript",
  ],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
