"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, Phone, X } from "lucide-react";

import { navLinks } from "@/lib/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        aria-expanded={open}
        aria-label="Abrir menu"
        className="inline-flex size-11 items-center justify-center rounded-[8px] border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/40"
        onClick={() => setOpen(true)}
        type="button"
      >
        <Menu className="size-5" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog">
          <button
            aria-label="Fechar menu"
            className="absolute inset-0 bg-slate-950/45 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            type="button"
          />
          <aside className="absolute inset-y-0 right-0 flex w-[88vw] max-w-sm flex-col bg-[#f6fbfa] shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 p-5">
              <div className="flex items-center gap-3">
                <Image
                  alt=""
                  className="h-10 w-auto"
                  height={64}
                  src="/brand/ecos-mark.png"
                  width={92}
                />
                <div>
                  <p className="text-sm font-semibold leading-5 text-slate-950">
                    ECOS DO OCEANO BUSINESS
                  </p>
                  <p className="text-xs text-slate-500">
                    Consultoria e formação
                  </p>
                </div>
              </div>
              <button
                aria-label="Fechar menu"
                className="inline-flex size-9 items-center justify-center rounded-[8px] text-slate-600 hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-200"
                onClick={() => setOpen(false)}
                type="button"
              >
                <X className="size-4" />
              </button>
            </div>

            <nav className="grid gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  className="block rounded-[8px] px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white hover:text-[#1070C0]"
                  href={link.href}
                  key={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto grid gap-3 border-t border-slate-200 p-4">
              <Link
                className="flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[#1070C0] px-4 text-sm font-semibold text-white"
                href="mailto:info@ecosoceanobusiness.com"
                onClick={() => setOpen(false)}
              >
                <Mail className="size-4" />
                Enviar email
              </Link>
              <Link
                className="flex h-11 items-center justify-center gap-2 rounded-[8px] border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800"
                href="tel:+244925414392"
                onClick={() => setOpen(false)}
              >
                <Phone className="size-4" />
                925 414 392
              </Link>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
