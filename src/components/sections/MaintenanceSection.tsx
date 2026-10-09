import Image from "next/image";
import { Broom, Pulse, ChatCircleText } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { photos } from "@/data/projects";
import { type } from "@/lib/type";

const items = [
  { icon: Broom, title: "Limpeza de painéis solares", text: "Remoção de poeira e sujeira que se acumulam sobre os módulos." },
  { icon: Pulse, title: "Verificação do sistema", text: "Checagem do funcionamento e das conexões, conforme a necessidade." },
  { icon: ChatCircleText, title: "Orientação", text: "Recomendações sobre os próximos cuidados com o seu sistema." },
];

/** Composição centrada: título no eixo, fotos técnicas nas laterais e os cuidados no meio. */
export function MaintenanceSection() {
  return (
    <section id="manutencao" aria-labelledby="manutencao-title" className="py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 id="manutencao-title" className={`${type.h2} text-navy`}>
            Limpeza e manutenção de energia solar
          </h2>
          <p className={`${type.body} mx-auto mt-6 max-w-2xl text-muted`}>
            Painéis expostos ao tempo acumulam sujeira, e o sistema precisa de acompanhamento. A STAR cuida da limpeza e da manutenção
            de sistemas residenciais e empresariais.
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-3">
            <Image
              src={photos.inversorParede.src}
              width={photos.inversorParede.width}
              height={photos.inversorParede.height}
              alt={photos.inversorParede.alt}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              className="aspect-[4/5] w-full rounded-[20px] object-cover"
            />
          </Reveal>
          <Reveal delay={60} className="md:order-last lg:order-none lg:col-span-3">
            <Image
              src={photos.quadroMontado.src}
              width={photos.quadroMontado.width}
              height={photos.quadroMontado.height}
              alt={photos.quadroMontado.alt}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              className="aspect-[4/5] w-full rounded-[20px] object-cover lg:translate-y-10"
            />
          </Reveal>
          <Reveal delay={120} className="md:col-span-2 lg:col-span-6 lg:pl-6">
            <ul className="divide-y divide-line border-y border-line">
              {items.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4 py-6">
                  <Icon size={26} weight="duotone" className="mt-0.5 shrink-0 text-blue" aria-hidden />
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-navy">{title}</h3>
                    <p className="mt-1.5 text-[15.5px] leading-relaxed text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ButtonLink href="/manutencao-energia-solar" variant="outline" icon="arrow" className="mt-8">
              Como funciona a manutenção
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
