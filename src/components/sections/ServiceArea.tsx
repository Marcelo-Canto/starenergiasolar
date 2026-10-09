import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo, InstagramLogo, Phone } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MapPreview } from "@/components/ui/MapPreview";
import { EvaluationForm } from "@/components/forms/EvaluationForm";
import { site } from "@/lib/site";
import { facadePhoto } from "@/data/projects";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { type } from "@/lib/type";

const linkCls = "font-medium text-navy underline decoration-solar decoration-2 underline-offset-4 hover:text-blue";
const contactCls = "inline-flex min-h-11 items-center gap-3 text-[15px] font-medium text-ink transition-colors hover:text-blue";

/** Área de atendimento: SEO local, contato direto, prévia leve do mapa e o formulário de orçamento. */
export function ServiceArea() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-canvas py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <Reveal>
            <h2 id="contato-title" className={`${type.h2} text-navy`}>
              Energia solar em Uberlândia e região
            </h2>
            <p className={`${type.body} mt-6 text-muted`}>
              A STAR Energia Solar é uma empresa de energia solar em Uberlândia, com sede no bairro Santa Mônica. Atendemos casas,
              comércios, indústrias e propriedades da cidade e da região com{" "}
              <Link href="/energia-solar-residencial" className={linkCls}>
                energia solar residencial
              </Link>
              ,{" "}
              <Link href="/energia-solar-empresarial" className={linkCls}>
                projetos para empresas
              </Link>
              ,{" "}
              <Link href="/usina-solar" className={linkCls}>
                usinas solares
              </Link>{" "}
              e{" "}
              <Link href="/manutencao-energia-solar" className={linkCls}>
                limpeza de painéis solares
              </Link>
              .
            </p>

            <ul className="mt-8 grid gap-1 sm:grid-cols-2">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={contactCls}>
                  <WhatsappLogo size={20} weight="fill" className="text-orange" aria-hidden />
                  WhatsApp {site.phone.display}
                </a>
              </li>
              <li>
                <a href={site.phone.tel} className={contactCls}>
                  <Phone size={20} className="text-orange" aria-hidden />
                  Ligar {site.phone.display}
                </a>
              </li>
              <li className="sm:col-span-2">
                <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" className={contactCls}>
                  <InstagramLogo size={20} className="text-orange" aria-hidden />
                  {site.links.instagramHandle}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={80} className="mt-8">
            <figure className="mb-5">
              <Image
                src={facadePhoto.src}
                width={facadePhoto.width}
                height={facadePhoto.height}
                alt={facadePhoto.alt}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[2/1] w-full rounded-[20px] object-cover"
              />
              <figcaption className="mt-3 text-sm text-muted">{facadePhoto.caption}</figcaption>
            </figure>
            <MapPreview />
          </Reveal>
        </div>

        <Reveal delay={60} className="lg:col-span-5 lg:col-start-8">
          <div id="orcamento" className="scroll-mt-28 rounded-[20px] bg-white p-7 shadow-[0_24px_60px_-36px_rgb(6_43_99/0.35)] ring-1 ring-line sm:p-9">
            <h3 className="text-2xl font-bold tracking-[-0.03em] text-navy">Solicitar orçamento</h3>
            <p className="mt-2 mb-8 text-[15px] leading-relaxed text-muted">
              Conte um pouco sobre o seu projeto. A equipe da STAR responde pelo WhatsApp.
            </p>
            <EvaluationForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
