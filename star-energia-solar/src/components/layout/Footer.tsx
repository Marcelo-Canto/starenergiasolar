import Link from "next/link";
import Image from "next/image";
import { InstagramLogo, WhatsappLogo, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { servicePages } from "@/data/services";

const companyNav = [
  { href: "/", label: "Início" },
  { href: "/#solucoes", label: "Soluções" },
  { href: "/projetos", label: "Projetos" },
  { href: "/blog", label: "Blog de energia solar" },
  { href: "/#sobre", label: "Sobre a STAR" },
  { href: "/#faq", label: "Perguntas frequentes" },
  { href: "/#contato", label: "Contato" },
];

const linkCls = "inline-flex min-h-8 items-center text-white/70 transition-colors duration-200 hover:text-white";
const headingCls = "text-[13px] font-semibold tracking-[0.02em] text-white";

export function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-navy-950 text-white">
      <div className="pv-grid-dark pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden />
      <Container className="relative">
        <div className="grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-12 lg:gap-10">
          <div className="md:col-span-2 lg:col-span-4">
            {/* A logo tem texto azul-marinho: fica sobre uma placa clara para manter a leitura */}
            <Link href="/" aria-label={`${site.name}, página inicial`} className="inline-flex rounded-[16px] bg-white px-4 py-3">
              <Image src={site.logo.src} width={site.logo.width} height={site.logo.height} alt={site.name} sizes="200px" className="h-[60px] w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">
              Energia solar em Uberlândia: projetos, instalação, usinas e manutenção de sistemas fotovoltaicos há {site.experience}.
            </p>
          </div>

          <nav aria-label="Empresa" className="lg:col-span-2">
            <p className={headingCls}>Empresa</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 md:grid-cols-1">
              {companyNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Serviços" className="lg:col-span-3">
            <p className={headingCls}>Serviços</p>
            <ul className="mt-4">
              {servicePages.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={linkCls}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2 lg:col-span-3">
            <p className={headingCls}>Contato</p>
            <ul className="mt-4 space-y-1 text-[15px]">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${linkCls} gap-3`}>
                  <WhatsappLogo size={19} weight="fill" className="text-solar" aria-hidden />
                  WhatsApp {site.phone.display}
                </a>
              </li>
              <li>
                <a href={site.phone.tel} className={`${linkCls} gap-3`}>
                  <Phone size={19} className="text-solar" aria-hidden />
                  Ligar {site.phone.display}
                </a>
              </li>
              <li>
                <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" className={`${linkCls} gap-3`}>
                  <InstagramLogo size={19} className="text-solar" aria-hidden />
                  {site.links.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={site.links.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-3 py-1 text-white/70 transition-colors duration-200 hover:text-white"
                >
                  <MapPin size={19} className="mt-0.5 shrink-0 text-solar" aria-hidden />
                  <address className="not-italic">
                    {site.address.street}
                    <br />
                    {site.address.district}, {site.address.city} - {site.address.region}
                    <br />
                    CEP {site.address.postalCode}
                  </address>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-[13px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.name}. Todos os direitos reservados.</p>
          <p>Site desenvolvido pela {site.agency}</p>
        </div>
      </Container>
    </footer>
  );
}
