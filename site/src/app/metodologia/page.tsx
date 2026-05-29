import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { methodSteps } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Metodologia",
  description:
    "Metodologia de trabalho da ECOS DO OCEANO BUSINESS: diagnóstico, planeamento, implementação e avaliação.",
};

const governanceItems = [
  "Objectivos claros e alinhados com a liderança",
  "Cronograma, responsabilidades e recursos definidos",
  "Acompanhamento técnico durante a implementação",
  "Relatórios e recomendações para continuidade",
];

export default function MetodologiaPage() {
  return (
    <main className="min-h-screen bg-[#f6fbfa] text-slate-950">
      <PageHero
        badge="Metodologia"
        description="Um processo simples, mensurável e acompanhado de perto para reduzir improviso e aumentar a qualidade da entrega."
        image="/media/internet/strategy-workshop.jpg"
        imageAlt="Profissionais em reunião de planeamento"
        primaryHref="/contactos"
        primaryLabel="Iniciar conversa"
        secondaryHref="/servicos"
        secondaryLabel="Ver serviços"
        title="Clareza antes da execução. Evidência depois da entrega."
      />

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Badge className="mb-5 bg-[#EAF6FF] text-[#1070C0]">
              Processo de trabalho
            </Badge>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">
              Uma sequência pensada para transformar necessidade em execução
              acompanhada.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Cada projecto começa com compreensão do contexto, passa por
              planeamento rigoroso e termina com avaliação dos resultados e
              próximos passos.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {methodSteps.map((step, index) => (
              <div
                className="rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200"
                key={step.title}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-[8px] bg-[#EAF6FF] text-[#1070C0]">
                    <step.icon className="size-6" />
                  </div>
                  <span className="text-sm font-semibold text-[#50A0E0]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Badge className="mb-5 bg-[#EAF6FF] text-[#1070C0]">
              Governança da entrega
            </Badge>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
              Acompanhamento técnico para que a entrega não fique apenas no
              plano.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {governanceItems.map((item) => (
              <div
                className="flex min-h-20 items-center gap-3 rounded-[8px] bg-[#f6fbfa] p-4 ring-1 ring-slate-200"
                key={item}
              >
                <CheckCircle2 className="size-5 shrink-0 text-[#1070C0]" />
                <span className="text-sm font-medium leading-6 text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#062332] px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold leading-tight">
              Quer aplicar esta metodologia no seu próximo programa?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-sky-50">
              A equipa pode ajudar a estruturar o diagnóstico e o plano inicial.
            </p>
          </div>
          <Link
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-[8px] bg-white px-6 text-sm font-semibold text-[#0B4F8A] hover:bg-sky-50"
            )}
            href="/contactos"
          >
            Contactar
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

