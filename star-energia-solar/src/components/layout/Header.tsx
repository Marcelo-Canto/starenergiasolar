"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "motion/react";
import { List, X, InstagramLogo, MapPin, Phone } from "@phosphor-icons/react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/Button";
import { mainNav } from "@/data/nav";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const ease = [0.23, 1, 0.32, 1] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Estado "rolado" por IntersectionObserver: sem listener de scroll
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Menu móvel: trava o scroll, fecha com Esc, mantém o foco dentro do painel
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const items = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        const first = toggleRef.current;
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    const mq = window.matchMedia("(min-width: 1280px)");
    const onMq = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  // Com trailingSlash o pathname vem como "/usina-solar/": normaliza para comparar com os links
  const current = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const isActive = (href: string) => !href.includes("#") && current === href;

  return (
    <>
      <div ref={sentinelRef} className="pointer-events-none absolute top-0 h-3 w-full" aria-hidden />
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ease-(--ease-out-strong)",
          // Sem backdrop-filter com o menu aberto: ele criaria um containing block para o painel fixo
          open
            ? "border-line bg-white"
            : scrolled
              ? "border-line/80 bg-white/85 shadow-[0_8px_30px_-22px_rgb(6_43_99/0.4)] backdrop-blur-xl backdrop-saturate-150"
              : "border-transparent bg-white/0",
        )}
      >
        <Container className="relative z-10 flex items-center justify-between gap-6">
          <div className={cn("flex items-center transition-[height] duration-300 ease-(--ease-out-strong)", scrolled ? "h-[68px]" : "h-[76px] lg:h-[88px]")}>
            <Logo className={cn("transition-[height] duration-300 ease-(--ease-out-strong)", scrolled ? "h-[54px]" : "h-[60px] lg:h-[70px]")} />
          </div>

          <nav aria-label="Navegação principal" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {mainNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative inline-flex min-h-11 items-center rounded-full px-3.5 text-[14.5px] font-medium transition-colors duration-200",
                        "after:absolute after:inset-x-3.5 after:bottom-2 after:h-[2px] after:origin-left after:rounded-full after:bg-solar after:transition-transform after:duration-300 after:ease-(--ease-out-strong)",
                        active ? "text-navy after:scale-x-100" : "text-ink/70 after:scale-x-0 hover:text-navy hover:after:scale-x-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:contents">
              <WhatsAppButton size="sm">Solicitar orçamento</WhatsAppButton>
            </span>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movel"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-white text-navy transition-[transform,border-color] duration-200 hover:border-navy/30 active:scale-95 xl:hidden"
            >
              <AnimatePresence initial={false} mode="wait">
                <m.span
                  key={open ? "x" : "list"}
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: 0.15, ease }}
                  className="grid place-items-center"
                >
                  {open ? <X size={20} weight="bold" aria-hidden /> : <List size={20} weight="bold" aria-hidden />}
                </m.span>
              </AnimatePresence>
            </button>
          </div>
        </Container>

        <AnimatePresence>
          {open && (
            <m.div
              id="menu-movel"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.34, ease: [0.32, 0.72, 0, 1] }}
              className="fixed inset-x-0 top-0 h-dvh overflow-y-auto bg-white pt-[77px] lg:pt-[89px] xl:hidden"
            >
              <Container className="flex min-h-full flex-col pb-[max(2rem,env(safe-area-inset-bottom))]">
                <nav aria-label="Navegação do menu" className="border-t border-line pt-2">
                  <ul>
                    {mainNav.map((item, i) => (
                      <m.li
                        key={item.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.32, ease, delay: 0.05 + i * 0.03 }}
                        className="border-b border-line"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={isActive(item.href) ? "page" : undefined}
                          className="flex min-h-14 items-center justify-between text-[24px] font-semibold tracking-[-0.03em] text-navy active:text-blue aria-[current=page]:text-blue"
                        >
                          {item.label}
                        </Link>
                      </m.li>
                    ))}
                  </ul>
                </nav>
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="mt-auto space-y-5 pt-10"
                >
                  <WhatsAppButton size="lg" className="w-full">
                    Solicitar orçamento
                  </WhatsAppButton>
                  <div className="flex items-center justify-between gap-4 text-sm text-muted">
                    <p className="flex gap-2">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-navy" aria-hidden />
                      <span>
                        {site.address.street}
                        <br />
                        {site.address.district}, {site.address.city} - {site.address.region}
                      </span>
                    </p>
                    <div className="flex gap-2">
                      <a
                        href={site.phone.tel}
                        aria-label={`Ligar para ${site.phone.display}`}
                        className="grid size-11 place-items-center rounded-full border border-line text-navy"
                      >
                        <Phone size={20} aria-hidden />
                      </a>
                      <a
                        href={site.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram da STAR Energia Solar (abre em nova aba)"
                        className="grid size-11 place-items-center rounded-full border border-line text-navy"
                      >
                        <InstagramLogo size={20} aria-hidden />
                      </a>
                    </div>
                  </div>
                </m.div>
              </Container>
            </m.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
