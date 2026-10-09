"use client";

import { LazyMotion, MotionConfig } from "motion/react";

/*
 * O runtime de animação do Motion é carregado depois da página, em um chunk separado
 * (LazyMotion + componentes `m`). `strict` impede o uso acidental de `motion.*`,
 * que traria o pacote completo para o bundle inicial.
 */
const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
