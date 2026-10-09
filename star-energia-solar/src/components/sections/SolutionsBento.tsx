import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lightning, CirclesThreePlus, SolarPanel, Bank } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { photos, type Photo } from "@/data/projects";
import { services, type Service } from "@/data/services";
import { type } from "@/lib/type";
import { cn } from "@/lib/cn";

type Tile = { service: Service; photo: Photo; className: string; sizes: string };

/** Os 4 serviços com página própria ganham foto real; a composição é assimétrica de propósito. */
const tiles: Tile[] = [
  { service: services.residencial, photo: photos.residenciaFrontal, className: "lg:col-span-7 lg:h-[420px]", sizes: "(min-width: 1024px) 58vw, 100vw" },
  { service: services.usina, photo: photos.usinaDetalhe, className: "lg:col-span-5 lg:h-[420px]", sizes: "(min-width: 1024px) 42vw, 100vw" },
  { service: services.empresarial, photo: photos.metalicaExaustor, className: "lg:col-span-5 lg:h-[360px]", sizes: "(min-width: 1024px) 42vw, 100vw" },
  { service: services.manutencao, photo: photos.quadroDps, className: "lg:col-span-7 lg:h-[360px]", sizes: "(min-width: 1024px) 58vw, 100vw" },
];

const more = [
  { service: services.instalacao, icon: Lightning },
  { service: services.sistemas, icon: CirclesThreePlus },
  { service: services.paineis, icon: SolarPanel },
  { service: services.financiamento, icon: Bank },
];

function ServiceTile({ tile, delay }: { tile: Tile; delay: number }) {
  const { service, photo } = tile;
  return (
    <Reveal delay={delay} className={cn("min-w-0", tile.className)}>
      <Link
        href={service.href}
        className="group relative flex aspect-[4/3] h-full flex-col justify-end overflow-hidden rounded-[20px] bg-navy text-white sm:aspect-[16/10] lg:aspect-auto"
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={tile.sizes}
          className="object-cover transition-transform duration-700 ease-(--ease-out-strong) group-hover:scale-[1.035]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/35 to-navy-950/0" aria-hidden />
        <span className="relative flex items-end justify-between gap-6 p-6 sm:p-8">
          <span>
            <span className="block text-[24px] leading-tight font-bold tracking-[-0.03em] sm:text-[28px]">{service.label}</span>
            <span className="mt-2 block max-w-[38ch] text-[15px] leading-relaxed text-white/80">{service.description}</span>
          </span>
          <span
            className="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 ring-1 ring-white/25 backdrop-blur-sm transition-[background-color,color,transform] duration-300 ease-(--ease-out-strong) group-hover:bg-solar group-hover:text-navy-950 group-active:scale-95"
            aria-hidden
          >
            <ArrowUpRight size={18} weight="bold" />
          </span>
        </span>
      </Link>
    </Reveal>
  );
}

export function SolutionsBento() {
  return (
    <section id="solucoes" aria-labelledby="solucoes-title" className="py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 id="solucoes-title" className={`${type.h2} text-navy`}>
            Soluções em energia solar para cada projeto
          </h2>
          <p className={`${type.body} mt-5 max-w-xl text-muted`}>
            Da casa ao galpão industrial: projeto, instalação, manutenção, financiamento e energia por assinatura.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:gap-5 lg:grid-cols-12">
          {tiles.map((tile, i) => (
            <ServiceTile key={tile.service.name} tile={tile} delay={(i % 2) * 80} />
          ))}
        </div>

        <Reveal className="mt-14">
          <h3 className="text-sm font-semibold text-navy">Também na STAR</h3>
          <ul className="mt-5 grid gap-x-8 gap-y-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {more.map(({ service, icon: Icon }) => (
              <li key={service.name}>
                <Link href={service.href} className="group flex gap-3.5">
                  <Icon size={24} weight="duotone" className="mt-0.5 shrink-0 text-blue" aria-hidden />
                  <span>
                    <span className="block font-semibold tracking-[-0.01em] text-navy underline decoration-transparent decoration-2 underline-offset-4 transition-colors duration-200 group-hover:decoration-solar">
                      {service.name}
                    </span>
                    <span className="mt-1 block text-[14.5px] leading-relaxed text-muted">{service.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
