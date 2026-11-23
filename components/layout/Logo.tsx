import Link from "next/link";
import { MycodMark } from "@/components/brand/MycodMark";
import { SITE_NAME } from "@/lib/site";

type LogoProps = {
  className?: string;
  // Classes do nome em texto (ex.: esconder na Sidebar recolhida).
  nameClassName?: string;
  onClick?: () => void;
  // Mantido por compatibilidade com quem usa o Logo; o M é SVG, sem carregamento.
  priority?: boolean;
};

// Monograma "M" em um quadrado roxo + nome da marca em texto. O nome em texto
// fica legível em tamanhos pequenos, onde o desenho completo se perderia.
export function Logo({ className = "", nameClassName = "", onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={SITE_NAME}
      className={`inline-flex min-w-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`}
    >
      <span
        aria-hidden="true"
        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--brand-purple)] text-white"
      >
        <MycodMark className="h-4 w-auto" />
      </span>
      <span
        className={`truncate text-[15px] font-semibold tracking-tight text-text-primary ${nameClassName}`}
      >
        {SITE_NAME}
      </span>
    </Link>
  );
}
