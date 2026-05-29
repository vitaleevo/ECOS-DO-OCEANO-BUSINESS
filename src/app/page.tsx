import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Compass,
  Factory,
  Handshake,
  Route,
} from "lucide-react";

import { PageHero } from "@/components/site/page-hero";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { areas, heroMetrics, services } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const institutionalPages = [
  {
    href: "/institucional",
    icon: Building2,
    title: "Institucional",
    description:
      "Conheça a empresa, missão, visão, diferenciais e compromisso com o desenvolvimento institucional.",
  },
  {
    href: "/servicos",
    icon: Handshake,
    title: "Serviços",
    description:
      "Consultoria, gestão da formação, apoio técnico e programas corporativos estruturados.",
  },
  {
    href: "/areas-de-actuacao",
    icon: Factory,
    title: "Áreas de actuação",
    description:
      "Formação marítima, offshore, petrolífera, técnica profissional e consultoria organizacional.",
  },
  {
    href: "/metodologia",
    icon: Route,
    title: "Metodologia",
    description:
      "Um processo claro para diagnosticar, planear, implementar e medir resultados.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6fbfa] text-slate-950">
      <PageHero
        large
        badge="Angola | consultoria, formação e desenvolvimento institucional"
        description="Parceiro técnico para instituições que precisam organizar processos, capacitar equipas e executar programas com rigor operacional."
        image="/media/internet/hero-port.jpg"
        imageAlt="Terminal portuário visto de cima com contentores organizados"
        primaryHref="/institucional"
        primaryLabel="Conhecer a empresa"
        secondaryHref="/contactos"
        secondaryLabel="Falar com a equipa"
        title="ECOS DO OCEANO BUSINESS"
      />

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-3 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                className="rounded-[8px] bg-[#062332] p-6 text-white shadow-sm"
                key={metric.value}
              >
                <p className="text-3xl font-semibold">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-sky-50">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Badge className="mb-5 bg-[#EAF6FF] text-[#1070C0]">
                Site institucional
              </Badge>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
                Informação organizada por páginas, com leitura clara para
                clientes, parceiros e instituições.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              A página inicial apresenta a marca e encaminha cada visitante para
              o conteúdo certo: perfil institucional, serviços, áreas de
              actuação, metodologia e contactos.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {institutionalPages.map((item) => (
              <Link href={item.href} key={item.href}>
                <Card className="min-h-72 rounded-[8px] border-0 bg-white py-0 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader className="p-6">
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div className="flex size-12 items-center justify-center rounded-[8px] bg-[#EAF6FF] text-[#1070C0]">
                        <item.icon className="size-6" />
                      </div>
                    <div className="text-[#50A0E0]" aria-hidden="true">
                      <ArrowRight className="size-5" />
                    </div>
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="pt-3 text-base leading-7">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[34rem] overflow-hidden rounded-[8px] bg-black">
            <Image
              alt="Equipa reunida em sessão de trabalho"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              src="/media/internet/team-session.jpg"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-normal text-[#80C0E0]">
                Missão
              </p>
              <p className="mt-3 max-w-lg text-2xl font-semibold leading-tight">
                Fortalecer instituições e desenvolver profissionais através de
                consultoria, formação e apoio técnico com qualidade.
              </p>
            </div>
          </div>

          <div>
            <Badge className="mb-5 bg-[#EAF6FF] text-[#1070C0]">
              Perfil resumido
            </Badge>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
              Uma empresa angolana criada para transformar organização em
              capacidade real de execução.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                A ECOS DO OCEANO BUSINESS actua em consultoria, gestão da
                formação, apoio técnico e desenvolvimento institucional.
              </p>
              <p>
                O trabalho combina planeamento estratégico, organização
                operacional e capacitação profissional para apoiar instituições
                públicas e privadas em Angola.
              </p>
            </div>
            <Link
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 h-12 rounded-[8px] bg-[#1070C0] px-6 text-sm font-semibold text-white hover:bg-[#0B5FA5]"
              )}
              href="/institucional"
            >
              Ver página institucional
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#062332] px-5 py-16 text-white sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Badge className="mb-5 border-white/15 bg-black/25 text-white">
                Actuação
              </Badge>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
                Competências institucionais ligadas a sectores técnicos e
                corporativos.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-sky-50">
              O detalhe de cada área e serviço está distribuído nas páginas
              internas, com conteúdo próprio para uma navegação institucional.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {areas.map((area) => (
              <Card
                className="rounded-[8px] border-white/10 bg-white/8 py-0 text-white ring-1 ring-white/10"
                key={area.title}
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    alt={area.title}
                    className="object-cover transition duration-500 hover:scale-105"
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    src={area.image}
                  />
                  <div className="absolute inset-0 bg-black/45" />
                  <div className="absolute bottom-4 left-4 flex size-11 items-center justify-center rounded-[8px] bg-white text-[#0B4F8A] shadow-lg">
                    <area.icon className="size-5" />
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-sky-50">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 rounded-[8px] bg-white px-6 text-sm font-semibold text-[#0B4F8A] hover:bg-sky-50"
              )}
              href="/areas-de-actuacao"
            >
              Ver áreas de actuação
              <ArrowRight className="size-4" />
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-[8px] border-white/25 bg-black/25 px-6 text-sm font-semibold text-white hover:bg-white/15 hover:text-white"
              )}
              href="/servicos"
            >
              Ver serviços
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge className="mb-5 bg-[#EAF6FF] text-[#1070C0]">
              Serviços em destaque
            </Badge>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
              Soluções pensadas para instituições que precisam de execução
              organizada.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <div
                className="flex gap-4 rounded-[8px] bg-white p-5 shadow-sm ring-1 ring-slate-200"
                key={service.title}
              >
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#1070C0]" />
                <div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#062332] px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Badge className="mb-5 border-white/15 bg-black/25 text-white">
              Próximo passo
            </Badge>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
              Precisa apresentar a ECOS DO OCEANO BUSINESS a um parceiro ou
              cliente?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-sky-50">
              A estrutura multi-page facilita a leitura institucional e dá mais
              peso à marca em propostas, reuniões e contactos formais.
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
            <Compass className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
