import Image from "next/image";
import Link from "next/link";

import { MobileMenu } from "@/components/site/mobile-menu";
import { buttonVariants } from "@/components/ui/button";
import { navLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link className="flex items-center gap-3 text-white" href="/">
          <Image
            alt=""
            className="h-10 w-auto drop-shadow-sm"
            height={64}
            priority
            src="/brand/ecos-mark.png"
            width={92}
          />
          <span className="hidden max-w-52 text-sm font-semibold leading-5 sm:inline">
            ECOS DO OCEANO BUSINESS
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-[8px] border border-white/15 bg-black/25 p-1 text-sm font-medium text-white shadow-2xl backdrop-blur-md lg:flex">
          {navLinks.map((link) => (
            <Link
              className="rounded-[6px] px-4 py-2 transition hover:bg-white/12 hover:text-sky-50"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          className={cn(
            buttonVariants({ size: "lg" }),
            "hidden h-10 rounded-[8px] bg-white px-4 font-semibold text-[#0B4F8A] shadow-lg hover:bg-sky-50 lg:inline-flex"
          )}
          href="/contactos"
        >
          Solicitar proposta
        </Link>

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

