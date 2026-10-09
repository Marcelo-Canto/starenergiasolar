import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { WHATSAPP_URL } from "@/lib/whatsapp";

/** Botão flutuante de WhatsApp, sempre visível, no verde que as pessoas já reconhecem. */
export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a STAR no WhatsApp (abre em nova aba)"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-10px_rgb(18_140_66/0.7)] ring-1 ring-white/30 transition-transform duration-200 ease-(--ease-out-strong) hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6 sm:size-[60px]"
    >
      <WhatsappLogo size={32} weight="fill" aria-hidden />
    </a>
  );
}
