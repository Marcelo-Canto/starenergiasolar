"use client";

import { useId, useState } from "react";
import { Plus } from "@phosphor-icons/react";
import type { FaqItem } from "@/data/faq";
import { cn } from "@/lib/cn";

/**
 * Acordeão acessível: botões com aria-expanded/aria-controls, painéis com role=region.
 * A abertura usa grid-template-rows (0fr → 1fr) em CSS: sem medir altura em JS e sem biblioteca.
 * As respostas ficam sempre no HTML (indexáveis); fechadas, ficam inertes.
 */
export function FaqAccordion({ items, defaultOpen = 0 }: { items: FaqItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const id = useId();

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${id}-q${i}`;
        const panelId = `${id}-a${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex min-h-16 w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
              >
                <span className="min-w-0 text-[17px] font-semibold tracking-[-0.015em] text-navy transition-colors duration-200 group-hover:text-blue sm:text-lg">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full border transition-[background-color,border-color,color,transform] duration-250 ease-(--ease-out-strong) group-active:scale-90",
                    isOpen ? "rotate-45 border-navy bg-navy text-white" : "border-line text-navy group-hover:border-navy/40",
                  )}
                  aria-hidden
                >
                  <Plus size={16} weight="bold" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              inert={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-(--ease-out-strong)",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-[62ch] pr-12 pb-6 text-[16px] leading-relaxed text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
