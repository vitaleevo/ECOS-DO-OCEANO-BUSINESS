import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  large?: boolean;
};

export function PageHero({
  badge,
  title,
  description,
  image,
  imageAlt,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  large = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden bg-black text-white",
        large ? "min-h-[88svh]" : "min-h-[62svh]"
      )}
    >
      <Image
        alt={imageAlt}
        className="object-cover"
        fill
        priority
        sizes="100vw"
        src={image}
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 sm:px-8">
        <div
          className={cn(
            "max-w-3xl py-20",
            large ? "sm:py-32" : "sm:py-24"
          )}
        >
          <Badge className="mb-7 border-white/20 bg-black/25 px-3 py-1 text-white backdrop-blur">
            {badge}
          </Badge>
          <h1
            className={cn(
              "max-w-4xl font-semibold leading-[1.03]",
              large ? "text-5xl sm:text-6xl lg:text-7xl" : "text-4xl sm:text-5xl lg:text-6xl"
            )}
          >
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-sky-50 sm:text-xl">
            {description}
          </p>

          {(primaryHref && primaryLabel) || (secondaryHref && secondaryLabel) ? (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {primaryHref && primaryLabel ? (
                <Link
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 rounded-[8px] bg-white px-6 text-sm font-semibold text-[#0B4F8A] shadow-xl hover:bg-sky-50"
                  )}
                  href={primaryHref}
                >
                  {primaryLabel}
                  <ArrowRight className="size-4" />
                </Link>
              ) : null}
              {secondaryHref && secondaryLabel ? (
                <Link
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 rounded-[8px] border-white/25 bg-black/25 px-6 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 hover:text-white"
                  )}
                  href={secondaryHref}
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
