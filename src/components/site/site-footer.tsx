import Link from "next/link";
import { Anchor } from "lucide-react";

import { navLinks } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-[#04121e] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-300 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <Anchor className="size-5 text-[#80C0E0]" />
          <span>ECOS DO OCEANO BUSINESS</span>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <Link className="hover:text-white" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

