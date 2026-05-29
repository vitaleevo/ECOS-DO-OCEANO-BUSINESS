import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { areas } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Áreas de Actuação",
  description:
    "Áreas de actuação da ECOS DO OCEANO BUSINESS: marítima, offshore, petrolífera, técnica profissional e corporativa.",
};

export default function AreasDeActuacaoPage() {
  return (
    <main className="min-h-screen bg-[#f6fbfa] text-slate-950">
      <PageHero
        badge="Áreas de actuação"
        description="Formação e consultoria para sectores técnicos, corporativos e institucionais onde disciplina operacional é essencial."
        image="/media/internet/ocean-vessel.jpg"
        imageAlt="Navio de contentores no mar"
        primaryHref="/servicos"
        primaryLabel="Ver serviços"
        secondaryHref="/contactos"
        secondaryLabel="Falar com a equipa"
        title="Actuação preparada para sectores onde o detalhe importa."
      />

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Badge className="mb-5 bg-[#EAF6FF] text-[#1070C0]">
                Cobertura técnica
              </Badge>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
                Sectores de actuação ligados à formação, operação e
                desenvolvimento organizacional.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              A empresa adapta cada programa ao nível de maturidade, sector e
              necessidade operacional do cliente.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {areas.map((area) => (
              <Card
                className="rounded-[8px] border-0 bg-white py-0 shadow-sm ring-1 ring-slate-200"
                key={area.title}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <Image
                    alt={area.title}
                    className="object-cover transition duration-500 hover:scale-105"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    src={area.image}
                  />
                  <div className="absolute inset-0 bg-black/45" />
                  <div className="absolute bottom-5 left-5 flex size-12 items-center justify-center rounded-[8px] bg-white text-[#0B4F8A] shadow-lg">
                    <area.icon className="size-6" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold">{area.title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-600">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#062332] px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Badge className="mb-5 border-white/15 bg-black/25 text-white">
              Programas à medida
            </Badge>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
              Cada sector exige uma resposta própria.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-sky-50">
              A ECOS ajusta conteúdos, logística, acompanhamento e indicadores
              de acordo com o contexto institucional do cliente.
            </p>
          </div>
          <Link
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-[8px] bg-white px-6 text-sm font-semibold text-[#0B4F8A] hover:bg-sky-50"
            )}
            href="/contactos"
          >
            Solicitar orientação
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
