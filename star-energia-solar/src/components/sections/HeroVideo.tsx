"use client";

import { useEffect, useRef, useState } from "react";

const SRC = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/videos/hero-energia-solar.mp4`;

/**
 * Vídeo de fundo do hero (imagem ilustrativa, em loop e sem som).
 * Só começa a baixar depois que a página carregou, para não atrasar o conteúdo principal:
 * até lá aparece a imagem estática (poster). Não toca no celular, com "reduzir movimento" nem com economia de dados.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    const large = window.matchMedia("(min-width: 1024px)").matches;
    if (reduced || saveData || !large) return;

    const start = () => {
      video.src = SRC;
      video.play().catch(() => {});
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      tabIndex={-1}
      onCanPlay={() => setReady(true)}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
    />
  );
}
