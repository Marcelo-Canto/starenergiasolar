import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WhatsAppButton } from "@/components/ui/Button";
import { type } from "@/lib/type";

type Section = { heading: string; paragraphs: string[] };
type Props = {
  category: string;
  title: string;
  intro: string;
  path: string;
  updated: string;
  sections: Section[];
  note?: string;
};

export function BlogArticle({ category, title, intro, path, updated, sections, note }: Props) {
  return (
    <>
      <section className="bg-canvas py-12 sm:py-16">
        <Container>
          <Breadcrumbs items={[{ name: "Início", path: "/" }, { name: "Blog", path: "/blog" }, { name: title, path }]} />
          <article className="mx-auto max-w-3xl py-8 sm:py-12">
            <p className="text-xs font-bold tracking-[0.16em] text-blue">{category.toUpperCase()}</p>
            <h1 className={`${type.h1Page} mt-5 text-navy`}>{title}</h1>
            <p className={`${type.lead} mt-6 text-muted`}>{intro}</p>
            <p className="mt-5 text-sm text-muted">Revisado em {updated} · STAR Energia Solar</p>
          </article>
        </Container>
      </section>
      <section className="py-14 sm:py-20">
        <Container>
          <article className="prose-star mx-auto max-w-3xl">
            {sections.map((section) => (
              <section key={section.heading} className="mb-10">
                <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-[17px] leading-8 text-muted">{paragraph}</p>)}
              </section>
            ))}
            {note && <p className="rounded-xl border border-line bg-canvas p-5 text-sm leading-relaxed text-muted">{note}</p>}
            <div className="mt-12 rounded-2xl bg-navy p-7 text-white sm:p-9">
              <h2 className="text-2xl font-bold">Quer avaliar uma solução para seu imóvel?</h2>
              <p className="mt-3 leading-relaxed text-white/75">Converse com a equipe da STAR Energia Solar em Uberlândia e tire suas dúvidas sobre o seu projeto.</p>
              <div className="mt-6"><WhatsAppButton>Falar com a STAR</WhatsAppButton></div>
            </div>
            <p className="mt-8"><Link href="/blog" className="font-semibold text-navy underline decoration-solar decoration-2 underline-offset-4">← Voltar ao blog</Link></p>
          </article>
        </Container>
      </section>
    </>
  );
}
