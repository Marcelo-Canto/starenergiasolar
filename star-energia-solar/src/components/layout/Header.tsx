"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "motion/react";
import { List, X, InstagramLogo, MapPin, Phone, CaretDown } from "@phosphor-icons/react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/Button";
import { mainNav } from "@/data/nav";
import { servicePages } from "@/data/services";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const ease = [0.23, 1, 0.32, 1] as const;

const linkCls =
  "relative inline-flex min-h-11 items-center gap-1.5 rounded-full px-3.5 text-[14.5px] font-medium transition-colors duration-200 after:absolute after:inset-x-3.5 after:bottom-2 after:h-[2px] after:origin-left after:rounded-full after:bg-solar after:transition-transform after:duration-300 after:ease-(--ease-out-strong)";
const mobileLinkCls = "flex min-h-[60px] items-center text-[24px] font-semibold tracking-[-0.03em] text-navy active:text-blue";
const linkIdle = "text-ink/75 after:scale-x-0 hover:text-navy hover:after:scale-x-100";
const linkActive = "text-navy after:scale-x-100";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLLIElement>(null);
  const servicesBtnRef = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Estado "rolado" por IntersectionObserver: sem listener de scroll
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Dropdown de serviços: fecha com Esc e com clique fora
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        servicesBtnRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [servicesOpen]);

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
  const isActive = (href: string) => !href.includes("#") && (current === href || current.startsWith(`${href}/`));
  const inServices = servicePages.some((s) => s.href === current);

  // Abre no hover só em dispositivos com mouse; o clique funciona em qualquer um
  const hover = (value: boolean) => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setServicesOpen(value), value ? 60 : 160);
  };

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
              <li ref={servicesRef} className="relative" onPointerEnter={() => hover(true)} onPointerLeave={() => hover(false)}>
                <button
                  ref={servicesBtnRef}
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls="menu-servicos"
                  onClick={() => setServicesOpen((v) => !v)}
                  className={cn(linkCls, "cursor-pointer", inServices || servicesOpen ? linkActive : linkIdle)}
                >
                  Serviços
                  <CaretDown
                    size={13}
                    weight="bold"
                    aria-hidden
                    className={cn("transition-transform duration-200 ease-(--ease-out-strong)", servicesOpen && "rotate-180")}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <m.div
                      id="menu-servicos"
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.98 }}
                      transition={{ duration: 0.16, ease }}
                      className="absolute top-full left-0 w-[640px] origin-top-left pt-2"
                    >
                      <ul className="grid grid-cols-2 gap-1 rounded-[20px] bg-white p-3 shadow-[0_24px_60px_-24px_rgb(6_43_99/0.35)] ring-1 ring-line">
                        {servicePages.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              onClick={() => setServicesOpen(false)}
                              aria-current={current === s.href ? "page" : undefined}
                              className="block rounded-[12px] px-4 py-3 transition-colors duration-150 hover:bg-canvas aria-[current=page]:bg-canvas"
                            >
                              <span className="block text-[15px] font-semibold text-navy">{s.label}</span>
                              <span className="mt-0.5 block text-[13px] leading-snug text-muted">{s.description}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </m.div>
                  )}
                </AnimatePresence>
              </li>
              {mainNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={active ? "page" : undefined} className={cn(linkCls, active ? linkActive : linkIdle)}>
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
                <nav aria-label="Navegação do menu" className="border-t border-line">
                  <ul>
                    <m.li initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, ease, delay: 0.05 }} className="border-b border-line">
                      <button
                        type="button"
                        aria-expanded={mobileServices}
                        aria-controls="menu-movel-servicos"
                        onClick={() => setMobileServices((v) => !v)}
                        className={cn(mobileLinkCls, "w-full cursor-pointer justify-between", inServices && "text-blue")}
                      >
                        Serviços
                        <span className={cn("grid size-9 place-items-center rounded-full border border-line transition-transform duration-250 ease-(--ease-out-strong)", mobileServices && "rotate-180")}>
                          <CaretDown size={16} weight="bold" aria-hidden />
                        </span>
                      </button>
                      <div
                        id="menu-movel-servicos"
                        inert={!mobileServices}
                        className={cn(
                          "grid transition-[grid-template-rows,opacity] duration-300 ease-(--ease-out-strong)",
                          mobileServices ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <ul className="overflow-hidden">
                          {servicePages.map((s) => (
                            <li key={s.href}>
                              <Link
                                href={s.href}
                                onClick={() => setOpen(false)}
                                aria-current={current === s.href ? "page" : undefined}
                                className="flex min-h-11 items-center gap-3 text-[16px] font-medium text-ink/80 active:text-blue aria-[current=page]:font-semibold aria-[current=page]:text-blue"
                              >
                                <span className="h-px w-4 bg-solar" aria-hidden />
                                {s.label}
                              </Link>
                            </li>
                          ))}
                          <li className="h-3" aria-hidden />
                        </ul>
                      </div>
                    </m.li>
                    {mainNav.map((item, i) => (
                      <m.li
                        key={item.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.32, ease, delay: 0.09 + i * 0.04 }}
                        className="border-b border-line"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={isActive(item.href) ? "page" : undefined}
                          className={cn(mobileLinkCls, "aria-[current=page]:text-blue")}
                        >
                          {item.label}
                        </Link>
                      </m.li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-auto space-y-5 pt-8">
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
                      <a href={site.phone.tel} aria-label={`Ligar para ${site.phone.display}`} className="grid size-11 place-items-center rounded-full border border-line text-navy">
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
                </div>
              </Container>
            </m.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
