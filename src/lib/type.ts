/** Escala tipográfica compartilhada, para títulos consistentes entre seções e páginas. */
export const type = {
  display: "text-[42px] leading-[0.98] font-bold tracking-[-0.045em] sm:text-[56px] lg:text-[64px] xl:text-[72px]",
  h1Page: "text-[38px] leading-[1.02] font-bold tracking-[-0.042em] sm:text-[52px] lg:text-[60px]",
  h2: "text-[32px] leading-[1.04] font-bold tracking-[-0.038em] sm:text-[44px] lg:text-[48px]",
  h2Sm: "text-[28px] leading-[1.08] font-bold tracking-[-0.032em] sm:text-[34px]",
  h3: "text-xl font-semibold tracking-[-0.02em]",
  lead: "text-lg leading-relaxed sm:text-xl sm:leading-relaxed",
  body: "text-[16.5px] leading-relaxed",
} as const;
