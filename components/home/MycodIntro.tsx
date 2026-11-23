"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Abertura da marca MyCod sobre a home: só a vinheta, sem textos nem controles.
// Toca a cada carregamento completo da página (recarregar a aba exibe de novo).
// Navegação interna pelo menu não repete. Tenta tocar com som; se o navegador
// bloquear, toca no mudo e, no primeiro toque ou tecla do visitante, libera o
// áudio. Esc fecha a abertura. Ao terminar, falhar ou demorar para iniciar,
// libera a home com um fade curto. Com prefers-reduced-motion, a home aparece
// direto (ver a classe motion-reduce:hidden no marcado).

const SRC = "/brand/MyCod-vinheta.mp4";
// Cor de fundo da camada, enquanto o vídeo não ocupa a tela.
const BACKGROUND = "#442c6a";
const FADE_MS = 150;
const START_TIMEOUT_MS = 3000;

type Phase = "playing" | "leaving" | "done";
type Decision = "play" | "skip";

// Marca, por carregamento da página, que a abertura já foi decidida. Um reload
// reinicia este módulo e a abertura volta; trocar de rota no site não.
let decidedThisLoad = false;

export function MycodIntro() {
  // Renderiza a camada já no servidor e na hidratação: nada de flash da home.
  const [phase, setPhase] = useState<Phase>("playing");
  const decisionRef = useRef<Decision | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const startedRef = useRef(false);

  const isPlaying = () => phase === "playing" && decisionRef.current === "play";

  // Encerra: para o vídeo e começa o fade para a home.
  const finish = useCallback(() => {
    videoRef.current?.pause();
    setPhase((current) => (current === "playing" ? "leaving" : current));
  }, []);

  // Decide uma vez por montagem. Strict mode mantém a ref entre os ciclos de
  // efeito, então a decisão não muda no meio do caminho.
  useEffect(() => {
    if (decisionRef.current === null) {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const skip = reduced || decidedThisLoad;
      decisionRef.current = skip ? "skip" : "play";
      if (!skip) decidedThisLoad = true;
    }
    if (decisionRef.current === "skip") setPhase("done");
  }, []);

  // Começa com som; se o navegador bloquear, volta ao mudo. Sem aviso, sem botão.
  useEffect(() => {
    if (!isPlaying()) return;
    const video = videoRef.current;
    if (!video) return;
    let unlock: (() => void) | null = null;

    const removeUnlock = () => {
      if (!unlock) return;
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
      unlock = null;
    };

    video.muted = false;
    video.play().catch(() => {
      video.muted = true;
      video.play().then(
        () => {
          unlock = () => {
            removeUnlock();
            video.muted = false;
            video.play().catch(() => {
              video.muted = true;
            });
          };
          window.addEventListener("pointerdown", unlock);
          window.addEventListener("keydown", unlock);
          window.addEventListener("touchstart", unlock);
        },
        finish,
      );
    });

    return removeUnlock;
    // isPlaying depende de phase; o efeito roda uma vez por fase "playing".
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, finish]);

  // Demora para iniciar: libera a home.
  useEffect(() => {
    if (!isPlaying()) return;
    const timer = window.setTimeout(() => {
      if (!startedRef.current) finish();
    }, START_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, finish]);

  // Trava a rolagem da home enquanto a vinheta toca.
  useEffect(() => {
    if (!isPlaying()) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // Teclado: Esc fecha a abertura. Tab fica preso à camada, que não tem
  // controles, para o foco não cair na home escondida.
  useEffect(() => {
    if (!isPlaying()) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") finish();
      else if (event.key === "Tab") event.preventDefault();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, finish]);

  // Fade concluído: a camada sai do DOM.
  useEffect(() => {
    if (phase !== "leaving") return;
    const timer = window.setTimeout(() => setPhase("done"), FADE_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <>
    {/* Sem JavaScript a vinheta não toca nem se fecha: esconde a camada para não bloquear a home. */}
    <noscript>
      <style>{`section[aria-label="Abertura da MyCod"]{display:none}`}</style>
    </noscript>
    <section
      aria-label="Abertura da MyCod"
      className={`fixed inset-0 isolate z-[70] flex items-center justify-center overflow-hidden ease-out motion-reduce:hidden ${
        phase === "leaving" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundColor: BACKGROUND,
        transitionProperty: "opacity",
        transitionDuration: `${FADE_MS}ms`,
      }}
    >
      <video
        ref={videoRef}
        src={SRC}
        playsInline
        preload="auto"
        onPlaying={() => {
          startedRef.current = true;
        }}
        onEnded={finish}
        onError={finish}
        aria-hidden="true"
        className="relative z-0 block h-full w-full object-cover portrait:h-auto portrait:aspect-[9/16] portrait:object-contain portrait:[mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] portrait:[-webkit-mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]"
      />
      {/* Fundo: cópia desfocada do mesmo vídeo, sem controles e sem eventos. Preenche
          as faixas que o "contain" deixa, sem cortar os quadradinhos nem o monograma. */}
      <video
        src={SRC}
        muted
        autoPlay
        playsInline
        preload="auto"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute -inset-[25%] -z-10 h-[150%] w-[150%] max-w-none object-cover blur-2xl"
      />
    </section>
    </>
  );
}
