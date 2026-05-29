import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { methodSteps, services } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Serviços de consultoria institucional, gestão da formação, apoio técnico e desenvolvimento organizacional.",
};

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-[#f6fbfa] text-slate-950">
      <PageHero
        badge="Serviços"
        description="Soluções institucionais com método, execução e continuidade para organizações públicas, privadas e equipas técnicas."
        image="/media/internet/modern-office.jpg"
        imageAlt="Ambiente corporativo moderno"
        primaryHref="/contactos"
        primaryLabel="Solicitar proposta"
        secondaryHref="/metodologia"
        secondaryLabel="Ver metodologia"
        title="Consultoria, formação e apoio técnico com execução clara."
      />

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Badge className="mb-5 bg-[#EAF6FF] text-[#1070C0]">
                Portfólio de serviços
              </Badge>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
                Serviços estruturados para melhorar processos, equipas e
                capacidade institucional.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Cada serviço pode ser contratado isoladamente ou integrado num
              programa maior de desenvolvimento institucional.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Card
                className="min-h-64 rounded-[8px] border-0 bg-white py-0 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
                key={service.title}
              >
                <CardHeader className="p-6">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex size-12 items-center justify-center rounded-[8px] bg-[#EAF6FF] text-[#1070C0]">
                      <service.icon className="size-6" />
                    </div>
                    <div className="text-[#50A0E0]" aria-hidden="true">
                      <ArrowRight className="size-5" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="pt-3 text-base leading-7">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#062332] px-5 py-16 text-white sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Badge className="mb-5 border-white/15 bg-black/25 text-white">
              Execução
            </Badge>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">
              Serviço bom precisa de método antes, durante e depois.
            </h2>
            <p className="mt-6 text-base leading-8 text-sky-50">
              A ECOS organiza o trabalho para que a entrega não dependa de
              improviso: diagnóstico, plano, implementação e avaliação.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {methodSteps.map((step, index) => (
              <div
                className="rounded-[8px] border border-white/10 bg-white/8 p-6"
                key={step.title}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-[8px] bg-white text-[#1070C0]">
                    <step.icon className="size-6" />
                  </div>
                  <span className="text-sm font-semibold text-[#80C0E0]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-sky-50">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[8px] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Precisa de uma solução adaptada ao seu contexto?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Envie uma solicitação e a equipa poderá orientar a melhor
              combinação entre consultoria, formação e apoio técnico.
            </p>
          </div>
          <Link
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-[8px] bg-[#1070C0] px-6 text-sm font-semibold text-white hover:bg-[#0B5FA5]"
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
