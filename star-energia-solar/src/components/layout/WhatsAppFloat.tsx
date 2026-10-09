"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a STAR Energia Solar pelo WhatsApp (abre em nova aba)"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex h-14 items-center gap-2 rounded-full bg-[#128C4A] pr-5 pl-3 text-white shadow-[0_12px_32px_-12px_rgb(0_0_0/0.55)] ring-1 ring-white/20 transition-transform hover:scale-[1.03] active:scale-95 sm:right-6 sm:bottom-6"
    >
      <span className="grid size-9 place-items-center rounded-full bg-white text-[#128C4A]">
        <WhatsappLogo size={21} weight="fill" aria-hidden />
      </span>
      <span className="text-[14px] font-semibold max-sm:sr-only">Falar pelo WhatsApp</span>
    </a>
  );
}
