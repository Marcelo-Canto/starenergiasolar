"use client";

import { useRef } from "react";
import { m, useScroll, useSpring } from "motion/react";

/**
 * Único trecho client da timeline: a linha que preenche conforme a leitura das etapas.
 * Vertical no mobile, horizontal no desktop. Animação só de transform (scale).
 */
export function ProcessRail({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} className="relative">
      <div className="absolute top-2 bottom-2 left-[19px] w-px bg-white/12 lg:top-[19px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto" aria-hidden />
      <m.div style={{ scaleY: progress }} className="absolute top-2 bottom-2 left-[19px] w-px origin-top bg-gradient-to-b from-solar to-orange lg:hidden" aria-hidden />
      <m.div
        style={{ scaleX: progress }}
        className="absolute top-[19px] right-0 left-0 hidden h-px origin-left bg-gradient-to-r from-solar to-orange lg:block"
        aria-hidden
      />
      {children}
    </div>
  );
}
