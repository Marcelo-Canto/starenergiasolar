"use client";

import { useEffect } from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Google Analytics 4. Só carrega quando NEXT_PUBLIC_GA_ID está definido (ex.: G-XXXXXXXXXX).
 * Além das visitas, registra o evento "whatsapp_click" a cada clique em um link de WhatsApp,
 * que é a conversão principal do site.
 */
export function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a[href*='wa.me']");
      if (!link) return;
      window.gtag?.("event", "whatsapp_click", {
        link_text: link.textContent?.trim().slice(0, 60),
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
