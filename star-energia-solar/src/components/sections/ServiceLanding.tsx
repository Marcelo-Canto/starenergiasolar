import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink, WhatsAppButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { type } from "@/lib/type";

type Props = {
  title: string;
  eyebrow: string;
  description: string;
  path: string;
  intro: string;
  sections: { title: string; body: string }[];
  faqs?: { question: string; answer: string }[];
  children?: ReactNode;
};

export function ServiceLanding({ title, eyebrow, description, path, intro, sections, faqs = [], children }: Props) {
  const crumbs = [{ name: "Início", path: "/" }, { name: title, path }];
  return (
    <>
      <JsonLd data={[
        breadcrumbSchema(crumbs),
        serviceSchema(title, description, path),
        ...(faqs.length ? [{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }] : []),
      ]} />
      <section className="relative isolate overflow-hidden bg-canvas py-12 sm:py-16 lg:py-20">
        <div className="pv-grid pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden />
        <Container>
          <Breadcrumbs items={crumbs} />
          <div className="max-w-4xl py-8 sm:py-12">
            <p className="mb-5 text-xs font-bold tracking-[0.18em] text-blue sm:text-sm">{eyebrow}</p>
            <h1 className={`${type.h1Page} max-w-4xl text-navy`}>{title}</h1>
            <p className={`${type.lead} mt-7 max-w-3xl text-muted`}>{intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppButton size="lg">Consultar meu projeto</WhatsAppButton>
              <ButtonLink href="/projetos" variant="outline" size="lg" icon="arrow">Conhecer projetos da STAR</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section, index) => (
              <article key={section.title} className="rounded-2xl border border-line bg-white p-7 sm:p-9">
                <p className="text-sm font-bold tabular-nums text-solar">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-4 text-xl font-bold tracking-tight text-navy sm:text-2xl">{section.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{section.body}</p>
              </article>
            ))}
          </div>
          {children}
          {faqs.length > 0 && (
            <div className="mx-auto mt-16 max-w-4xl">
              <h2 className={`${type.h2} text-navy`}>Perguntas frequentes</h2>
              <div className="mt-7 divide-y divide-line border-y border-line">
                {faqs.map((item) => (
                  <details key={item.question} className="group py-5">
                    <summary className="cursor-pointer list-none pr-8 font-semibold text-navy marker:hidden">
                      {item.question}
                      <span className="float-right text-blue transition-transform group-open:rotate-45" aria-hidden>+</span>
                    </summary>
                    <p className="mt-3 max-w-3xl leading-relaxed text-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
