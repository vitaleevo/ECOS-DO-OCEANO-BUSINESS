import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { ContactCard } from "@/components/site/contact-card";
import { PageHero } from "@/components/site/page-hero";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { contactDetails } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contactos",
  description:
    "Contactos da ECOS DO OCEANO BUSINESS em Luanda, Angola.",
};

export default function ContactosPage() {
  return (
    <main className="min-h-screen bg-[#f6fbfa] text-slate-950">
      <PageHero
        badge="Contactos"
        description="Fale com a ECOS DO OCEANO BUSINESS para consultoria, gestão de formação, apoio técnico e programas corporativos em Angola."
        image="/media/internet/hero-port.jpg"
        imageAlt="Terminal portuário com contentores organizados"
        primaryHref={contactDetails.emailHref}
        primaryLabel="Enviar email"
        secondaryHref={contactDetails.phoneHref}
        secondaryLabel="Ligar agora"
        title="Vamos estruturar o próximo programa institucional com rigor."
      />

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <Badge className="mb-5 bg-[#EAF6FF] text-[#1070C0]">
              Fale connosco
            </Badge>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
              Escolha o canal mais directo para iniciar a conversa.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Indique o tipo de serviço pretendido, o contexto da organização e
              o objectivo principal. A partir daí, a equipa poderá orientar os
              próximos passos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-[8px] bg-[#1070C0] px-6 text-sm font-semibold text-white hover:bg-[#0B5FA5]"
                )}
                href={contactDetails.emailHref}
              >
                <Mail className="size-4" />
                {contactDetails.email}
              </Link>
              <Link
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-[8px] border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                )}
                href={contactDetails.phoneHref}
              >
                <Phone className="size-4" />
                {contactDetails.phone}
              </Link>
            </div>
          </div>

          <ContactCard />
        </div>
      </section>

      <section className="bg-[#062332] px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Badge className="mb-5 border-white/15 bg-black/25 text-white">
            Localização
          </Badge>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
            Atendimento institucional a partir de Luanda.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-sky-50">
            {contactDetails.address}
          </p>
        </div>
      </section>
    </main>
  );
}

