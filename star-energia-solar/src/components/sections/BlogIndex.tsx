import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { type } from "@/lib/type";

const articles = [
  {
    href: "/blog/energia-solar-vale-a-pena-em-uberlandia",
    category: "Planejamento",
    title: "Energia solar vale a pena em Uberlândia?",
    description: "Veja quais fatores avaliar antes de investir em um sistema fotovoltaico para sua casa ou empresa.",
    read: "5 min de leitura",
  },
  {
    href: "/blog/como-funciona-energia-solar-por-assinatura",
    category: "Energia por assinatura",
    title: "Como funciona a energia solar por assinatura?",
    description: "Entenda o conceito, os créditos de energia e o que conferir antes de aderir a um plano.",
    read: "4 min de leitura",
  },
  {
    href: "/blog/quando-fazer-manutencao-paineis-solares",
    category: "Manutenção",
    title: "Quando fazer a manutenção dos painéis solares?",
    description: "Sinais que merecem atenção e por que a avaliação deve considerar cada sistema.",
    read: "4 min de leitura",
  },
];

export function BlogIndex() {
  return (
    <section className="bg-canvas py-12 sm:py-16 lg:py-20">
      <Container>
        <Breadcrumbs items={[{ name: "Início", path: "/" }, { name: "Blog", path: "/blog" }]} />
        <div className="max-w-3xl py-10 sm:py-14">
          <p className="mb-4 text-xs font-bold tracking-[0.18em] text-blue sm:text-sm">CONTEÚDO E ORIENTAÇÃO</p>
          <h1 className={`${type.h1Page} text-navy`}>Blog de energia solar da STAR</h1>
          <p className={`${type.lead} mt-6 text-muted`}>Informações para ajudar você a entender sistemas fotovoltaicos, manutenção e alternativas de energia em Uberlândia.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article key={article.href} className="flex flex-col rounded-2xl border border-line bg-white p-7 sm:p-8">
              <p className="text-xs font-bold tracking-[0.12em] text-blue">{article.category.toUpperCase()}</p>
              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-navy">{article.title}</h2>
              <p className="mt-4 flex-1 leading-relaxed text-muted">{article.description}</p>
              <p className="mt-6 text-xs text-muted">{article.read}</p>
              <Link href={article.href} className="mt-4 inline-flex items-center gap-2 font-semibold text-navy underline decoration-solar decoration-2 underline-offset-4">
                Ler artigo <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
