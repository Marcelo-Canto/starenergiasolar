"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "motion/react";
import { CaretLeft, CaretRight, X, ArrowsOut } from "@phosphor-icons/react";
import type { Photo } from "@/data/projects";
import { cn } from "@/lib/cn";

const ease = [0.23, 1, 0.32, 1] as const;

/** Mosaico de 4 fotos da home: alternância larga/estreita entre as duas linhas. */
const mosaic = [
  { cell: "lg:col-span-8", frame: "aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[440px]", sizes: "(min-width: 1024px) 66vw, 100vw" },
  { cell: "lg:col-span-4", frame: "aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[440px]", sizes: "(min-width: 1024px) 33vw, 100vw" },
  { cell: "lg:col-span-4", frame: "aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[320px]", sizes: "(min-width: 1024px) 33vw, 100vw" },
  { cell: "lg:col-span-8", frame: "aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[320px]", sizes: "(min-width: 1024px) 66vw, 100vw" },
];

type Props = { images: Photo[]; variant?: "mosaic" | "masonry"; label: string };

export function ProjectGallery({ images, variant = "masonry", label }: Props) {
  const [index, setIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastIndex = useRef(0);

  const open = (i: number) => {
    lastIndex.current = i;
    setDirection(0);
    setIndex(i);
  };
  const close = useCallback(() => {
    setIndex(null);
    triggers.current[lastIndex.current]?.focus();
  }, []);
  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex((i) => {
        if (i === null) return i;
        const next = (i + delta + images.length) % images.length;
        lastIndex.current = next;
        return next;
      });
    },
    [images.length],
  );

  const isOpen = index !== null;
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Tab") {
        // Mantém o foco dentro do lightbox
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusables?.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, go]);

  const current = index !== null ? images[index] : null;

  const trigger = (img: Photo, i: number, frame: string, sizes: string, overlayCaption: boolean) => (
    <button
      ref={(el) => {
        triggers.current[i] = el;
      }}
      type="button"
      onClick={() => open(i)}
      aria-label={`Ampliar foto: ${img.caption}`}
      className={cn("group relative block w-full cursor-zoom-in overflow-hidden rounded-[20px] bg-navy/10 text-left", frame)}
    >
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        alt={img.alt}
        sizes={sizes}
        className={cn(
          "w-full transition-transform duration-700 ease-(--ease-out-strong) group-hover:scale-[1.03]",
          overlayCaption ? "absolute inset-0 h-full object-cover" : "h-auto",
        )}
      />
      {overlayCaption && (
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/75 to-transparent px-5 pt-12 pb-4 text-[14px] font-medium text-white">
          {img.caption}
        </span>
      )}
      <span
        className="pointer-events-none absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-white/95 text-navy opacity-0 shadow-sm transition-[opacity,transform] duration-200 ease-(--ease-out-strong) group-hover:opacity-100 group-focus-visible:opacity-100"
        aria-hidden
      >
        <ArrowsOut size={18} weight="bold" />
      </span>
    </button>
  );

  return (
    <>
      {variant === "mosaic" ? (
        <ul aria-label={label} className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12">
          {images.map((img, i) => {
            const cfg = mosaic[i % mosaic.length];
            return (
              <li key={img.src} className={cfg.cell}>
                {trigger(img, i, cfg.frame, cfg.sizes, true)}
              </li>
            );
          })}
        </ul>
      ) : (
        <ul aria-label={label} className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {images.map((img, i) => (
            <li key={img.src} className="mb-5 break-inside-avoid">
              <figure>
                {trigger(img, i, "", "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw", false)}
                <figcaption className="mt-3 text-sm text-muted">{img.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}

      <AnimatePresence>
        {current && (
          <m.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Foto ampliada: ${current.caption}`}
            className="on-dark fixed inset-0 z-[70] flex flex-col bg-navy-950/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease }}
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <div className="flex items-center justify-between px-4 py-4 text-white sm:px-6">
              <p className="text-sm text-white/70 tabular-nums" aria-live="polite">
                {index! + 1} de {images.length}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Fechar"
                className="grid size-11 cursor-pointer place-items-center rounded-full bg-white/10 transition-[background-color,transform] duration-200 hover:bg-white/20 active:scale-95"
              >
                <X size={20} weight="bold" aria-hidden />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20" onClick={(e) => e.target === e.currentTarget && close()}>
              <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                <m.figure
                  key={current.src}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40, scale: direction === 0 ? 0.97 : 1 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.28, ease }}
                  drag={images.length > 1 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60 || info.velocity.x < -400) go(1);
                    else if (info.offset.x > 60 || info.velocity.x > 400) go(-1);
                  }}
                  className="flex max-h-full w-full max-w-6xl touch-pan-y flex-col items-center"
                >
                  <Image
                    src={current.src}
                    width={current.width}
                    height={current.height}
                    alt={current.alt}
                    sizes="(min-width: 1280px) 1152px, 100vw"
                    loading="eager"
                    className="max-h-[calc(100dvh-11rem)] w-auto rounded-[16px] object-contain"
                  />
                  <figcaption className="mt-4 text-center text-[15px] text-white/80">{current.caption}</figcaption>
                </m.figure>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Foto anterior"
                    className="absolute left-2 grid size-12 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition-[background-color,transform] duration-200 hover:bg-white/20 active:scale-95 max-sm:bottom-0 sm:left-6"
                  >
                    <CaretLeft size={22} weight="bold" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Próxima foto"
                    className="absolute right-2 grid size-12 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition-[background-color,transform] duration-200 hover:bg-white/20 active:scale-95 max-sm:bottom-0 sm:right-6"
                  >
                    <CaretRight size={22} weight="bold" aria-hidden />
                  </button>
                </>
              )}
            </div>
            <div className="h-6 sm:h-10" aria-hidden />
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
