import Image from "next/image";
import { Layers3, Mail, MapPin, MenuSquare, Phone } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { contactDetails } from "@/lib/site-content";

export function ContactCard() {
  return (
    <Card className="rounded-[8px] border-white/10 bg-white py-0 text-slate-950 shadow-2xl">
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <Image
            alt=""
            className="h-12 w-auto"
            height={64}
            src="/brand/ecos-mark.png"
            width={92}
          />
          <div>
            <h3 className="font-semibold">{contactDetails.company}</h3>
            <p className="text-sm text-slate-500">{contactDetails.legalName}</p>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="grid gap-5 text-sm leading-6 text-slate-700">
          <div className="flex gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-[#1070C0]" />
            <span>{contactDetails.address}</span>
          </div>
          <div className="flex gap-3">
            <Phone className="mt-0.5 size-5 shrink-0 text-[#1070C0]" />
            <span>Telefone: {contactDetails.phone}</span>
          </div>
          <div className="flex gap-3">
            <Mail className="mt-0.5 size-5 shrink-0 text-[#1070C0]" />
            <span>{contactDetails.email}</span>
          </div>
          <div className="flex gap-3">
            <MenuSquare className="mt-0.5 size-5 shrink-0 text-[#1070C0]" />
            <span>Contribuinte nº {contactDetails.taxpayer}</span>
          </div>
          <div className="flex gap-3">
            <Layers3 className="mt-0.5 size-5 shrink-0 text-[#1070C0]" />
            <span>{contactDetails.website}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

