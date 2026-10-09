import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { SolutionsBento } from "@/components/sections/SolutionsBento";
import { SubscriptionBand } from "@/components/sections/SubscriptionBand";
import { FlagshipProject } from "@/components/sections/FlagshipProject";
import { Process } from "@/components/sections/Process";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ResidentialSplit } from "@/components/sections/ResidentialSplit";
import { BusinessFeature } from "@/components/sections/BusinessFeature";
import { MaintenanceSection } from "@/components/sections/MaintenanceSection";
import { AboutStatement } from "@/components/sections/AboutStatement";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { homeFaq } from "@/data/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Energia Solar em Uberlândia | STAR Energia Solar",
  description:
    "Energia solar em Uberlândia com a STAR: mais de 600 projetos instalados, usinas, manutenção e energia por assinatura. Há mais de 7 anos no mercado.",
  path: "/",
});

/**
 * Narrativa da home: proposta → prova → soluções → processo → projetos →
 * residencial → empresarial → manutenção → sobre → atendimento → dúvidas → CTA.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ProofBar />
      <SolutionsBento />
      <SubscriptionBand />
      <FlagshipProject />
      <Process />
      <ProjectsPreview />
      <ResidentialSplit />
      <BusinessFeature />
      <MaintenanceSection />
      <AboutStatement />
      <ServiceArea />
      <Faq items={homeFaq} />
      <CtaBand />
    </>
  );
}
