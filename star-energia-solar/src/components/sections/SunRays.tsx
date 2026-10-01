import { cn } from "@/lib/cn";

/**
 * Raios solares geométricos, derivados do sol da logo.
 * Linhas finas, decorativas e ocultas para leitores de tela.
 */
export function SunRays({ className, count = 11 }: { className?: string; count?: number }) {
  const rays = Array.from({ length: count }, (_, i) => {
    const angle = (-100 + (i * 110) / (count - 1)) * (Math.PI / 180);
    const inner = 118;
    const outer = i % 2 === 0 ? 300 : 230;
    return {
      x1: 300 + Math.cos(angle) * inner,
      y1: 300 + Math.sin(angle) * inner,
      x2: 300 + Math.cos(angle) * outer,
      y2: 300 + Math.sin(angle) * outer,
    };
  });
  const stroke = "url(#ray)";
  return (
    <svg viewBox="0 0 600 600" fill="none" aria-hidden className={cn("pointer-events-none", className)}>
      <defs>
        <linearGradient id="ray" x1="0" y1="600" x2="600" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F28A00" />
          <stop offset="1" stopColor="#F6B400" />
        </linearGradient>
      </defs>
      <path d="M 196 300 A 104 104 0 0 1 382 238" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      {rays.map((r, i) => (
        <line key={i} {...r} stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      ))}
    </svg>
  );
}
