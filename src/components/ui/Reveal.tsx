import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Atraso em ms, para escalonar itens de uma mesma grade. */
  delay?: number;
  as?: "div" | "li" | "section" | "article" | "figure";
  id?: string;
};

/**
 * Entrada discreta ao rolar. Server Component: só marca o elemento;
 * o RevealObserver (único, no layout) adiciona data-revealed quando ele entra na tela.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div", id }: Props) {
  return (
    <Tag
      id={id}
      data-reveal=""
      className={cn(className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
