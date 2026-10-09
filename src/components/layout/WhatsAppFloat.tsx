"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

/**
 * Aparece depois que o topo da página sai da tela (o hero já tem o CTA) e some
 * quando o rodapé ou a área de contato aparecem. Tudo por IntersectionObserver.
 */
export function WhatsAppFloat() {
  const pathname = usePathname();
  const [pastTop, setPastTop] = useState(false);
  const [nearEnd, setNearEnd] = useState(false);

  useEffect(() => {
    const top = new IntersectionObserver(([e]) => setPastTop(!e.isIntersecting));
    // Primeira seção visível (o <main> pode começar com <script> de JSON-LD)
    const topEl = document.querySelector("#conteudo > section");
    if (topEl) top.observe(topEl);

    // O callback só recebe as entradas que mudaram: guarda o estado de cada alvo
    const visibleEnds = new Set<Element>();
    const end = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visibleEnds.add(e.target);
        else visibleEnds.delete(e.target);
      }
      setNearEnd(visibleEnds.size > 0);
    });
    document.querySelectorAll("footer, #contato").forEach((el) => end.observe(el));
    return () => {
      top.disconnect();
      end.disconnect();
    };
  }, [pathname]);

  const visible = pastTop && !nearEnd;

  return (
    <AnimatePresence>
      {visible && (
        <m.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a STAR no WhatsApp (abre em nova aba)"
          initial={{ opacity: 0, scale: 0.9, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 12 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          whileTap={{ scale: 0.94 }}
          className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex h-14 items-center gap-2 rounded-full bg-navy pr-5 pl-3 text-white shadow-[0_12px_32px_-12px_rgb(4_28_66/0.6)] ring-1 ring-white/10 sm:right-6 sm:bottom-6"
        >
          <span className="grid size-9 place-items-center rounded-full bg-solar text-navy-950">
            <WhatsappLogo size={20} weight="fill" aria-hidden />
          </span>
          <span className="text-[14px] font-semibold max-sm:sr-only">WhatsApp</span>
        </m.a>
      )}
    </AnimatePresence>
  );
}
