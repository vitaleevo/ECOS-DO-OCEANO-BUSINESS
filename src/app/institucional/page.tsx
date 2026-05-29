import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, CheckCircle2, Sparkles } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { differentiators } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Institucional",
  description:
    "Conheça a ECOS DO OCEANO BUSINESS, empresa angolana de consultoria, formação e desenvolvimento institucional.",
};

export default function InstitucionalPage() {
  return (
    <main className="min-h-screen bg-[#f6fbfa] text-slate-950">
      <PageHero
        badge="Institucional"
        description="Conheça a empresa, a sua missão, visão e forma de contribuir para o fortalecimento das organizações em Angola."
        image="/media/internet/team-session.jpg"
        imageAlt="Equipa reunida em sessão de trabalho"
        primaryHref="/servicos"
        primaryLabel="Ver serviços"
        secondaryHref="/contactos"
        secondaryLabel="Contactar"
        title="Uma parceira técnica para instituições que precisam crescer com organização."
      />

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[34rem] overflow-hidden rounded-[8px] bg-black">
            <Image
              alt="Ambiente corporativo moderno"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              src="/media/internet/modern-office.jpg"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <p className="max-w-md text-2xl font-semibold leading-tight">
                Processos eficientes, capacitação contínua e gestão profissional
                como base para instituições mais fortes.
              </p>
            </div>
          </div>

          <div>
            <Badge className="mb-5 bg-[#EAF6FF] text-[#1070C0]">
              Quem somos
            </Badge>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
              A ECOS DO OCEANO BUSINESS actua na intersecção entre estratégia,
              formação e operação.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Somos uma empresa angolana especializada em consultoria, gestão
                da formação, apoio técnico e desenvolvimento institucional.
              </p>
              <p>
                A nossa actuação combina planeamento estratégico, organização
                operacional e acompanhamento técnico, garantindo maior
                eficiência, qualidade e capacidade de resposta às exigências do
                mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <Card className="rounded-[8px] border-0 bg-[#f6fbfa] py-0 shadow-sm ring-1 ring-slate-200">
            <CardHeader className="p-7">
              <div className="mb-5 flex size-12 items-center justify-center rounded-[8px] bg-[#EAF6FF] text-[#1070C0]">
                <Sparkles className="size-6" />
              </div>
              <CardTitle className="text-2xl">Missão</CardTitle>
              <CardDescription className="pt-3 text-base leading-8">
                Contribuir para o fortalecimento institucional e desenvolvimento
                profissional através de soluções de consultoria, formação e
                apoio técnico com elevados padrões de qualidade.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="rounded-[8px] border-0 bg-[#f6fbfa] py-0 shadow-sm ring-1 ring-slate-200">
            <CardHeader className="p-7">
              <div className="mb-5 flex size-12 items-center justify-center rounded-[8px] bg-[#EAF6FF] text-[#1070C0]">
                <BadgeCheck className="size-6" />
              </div>
              <CardTitle className="text-2xl">Visão</CardTitle>
              <CardDescription className="pt-3 text-base leading-8">
                Ser uma referência nacional em consultoria, gestão da formação e
                desenvolvimento institucional, promovendo inovação, eficiência e
                excelência operacional.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge className="mb-5 bg-[#EAF6FF] text-[#1070C0]">
              Diferenciais
            </Badge>
            <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
              Qualidade técnica com compromisso institucional.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              A proposta de valor combina acompanhamento próximo, rigor
              operacional e soluções ajustadas às necessidades reais de cada
              organização.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div
                className="flex min-h-20 items-center gap-3 rounded-[8px] bg-white p-4 shadow-sm ring-1 ring-slate-200"
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
    </main>
  );
}
