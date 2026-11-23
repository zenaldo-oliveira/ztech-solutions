// Monograma "M" da MyCod, recriado a partir do quadro final da vinheta
// (public/brand/MyCod-vinheta.mp4). Traço reto, topo plano e V central que
// desce até cerca de 86% da altura. Usa currentColor, então herda a cor do
// texto ou do fundo onde estiver.
type MycodMarkProps = {
  className?: string;
  title?: string;
};

export function MycodMark({ className = "", title }: MycodMarkProps) {
  return (
    <svg
      viewBox="0 0 111 100"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M0 0H19.6L54.4 55L89.2 0H110.6V100H89.2V36L57.6 86H51.2L20 37V100H0Z"
      />
    </svg>
  );
}
