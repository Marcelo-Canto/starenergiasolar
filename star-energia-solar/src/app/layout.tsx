import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { JsonLd } from "@/components/ui/JsonLd";
import { IS_PLACEHOLDER_DOMAIN, SITE_URL, site } from "@/lib/site";
import { localBusinessSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Energia Solar em Uberlândia | STAR Energia Solar",
    template: "%s | STAR Energia Solar",
  },
  applicationName: site.name,
  formatDetection: { telephone: false },
  // Versão com domínio provisório não deve ser indexada
  ...(IS_PLACEHOLDER_DOMAIN ? { robots: { index: false, follow: false } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#062b63",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={geist.variable} suppressHydrationWarning>
      <head>
        {/* Marca que o JS está ativo: só assim o reveal esconde conteúdo antes de animar */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh overflow-x-clip">
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <MotionProvider>
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </MotionProvider>
        <RevealObserver />
      </body>
    </html>
  );
}
