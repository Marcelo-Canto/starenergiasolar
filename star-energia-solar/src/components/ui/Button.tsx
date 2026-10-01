import Link from "next/link";
import { WhatsappLogo, ArrowRight } from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/cn";
import { WHATSAPP_URL } from "@/lib/whatsapp";

type Variant = "solar" | "navy" | "outline" | "light";
type Size = "sm" | "md" | "lg";

/*
 * Tamanho e variante são props, não classes sobrescritas: utilitários conflitantes
 * (hidden x inline-flex, min-h-12 x min-h-14) não têm ordem garantida no CSS.
 * `className` serve só para layout externo (margem, largura).
 * Estados: hover (só em dispositivos com mouse, padrão do Tailwind 4), focus-visible global, active com escala.
 */
const base =
  "group/btn inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold tracking-[-0.01em] transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-(--ease-out-strong) active:scale-[0.97] cursor-pointer select-none";

const sizes: Record<Size, string> = {
  sm: "min-h-11 px-5 text-[14px]",
  md: "min-h-12 px-6 text-[15px]",
  lg: "min-h-14 px-7 text-base",
};

const variants: Record<Variant, string> = {
  solar:
    "bg-solar text-navy-950 shadow-[inset_0_1px_0_rgb(255_255_255/0.45),0_10px_24px_-14px_rgb(242_140_0/0.75)] hover:bg-[#ffc414] hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.45),0_14px_28px_-14px_rgb(242_140_0/0.85)]",
  navy: "bg-navy text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] hover:bg-blue",
  outline: "border border-navy/20 bg-white/70 text-navy hover:border-navy/45 hover:bg-white",
  light: "border border-white/25 text-white hover:border-white/60 hover:bg-white/[0.07]",
};

type Props = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  icon?: "whatsapp" | "arrow" | "none";
  ariaLabel?: string;
};

export function ButtonLink({ href, variant = "solar", size = "md", className, children, icon = "none", ariaLabel }: Props) {
  const content = (
    <>
      {icon === "whatsapp" && <WhatsappLogo size={size === "sm" ? 18 : 20} weight="fill" aria-hidden />}
      <span>{children}</span>
      {icon === "arrow" && (
        <ArrowRight
          size={16}
          weight="bold"
          aria-hidden
          className="transition-transform duration-200 ease-(--ease-out-strong) group-hover/btn:translate-x-0.5"
        />
      )}
    </>
  );
  const cls = cn(base, sizes[size], variants[variant], className);

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}

/** CTA de WhatsApp. Todos apontam para o mesmo link oficial. */
export function WhatsAppButton({
  children,
  variant = "solar",
  size = "md",
  className,
}: {
  children: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <ButtonLink
      href={WHATSAPP_URL}
      variant={variant}
      size={size}
      icon="whatsapp"
      className={className}
      ariaLabel={`${children}: conversar pelo WhatsApp (abre em nova aba)`}
    >
      {children}
    </ButtonLink>
  );
}
