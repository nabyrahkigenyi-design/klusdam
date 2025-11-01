"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";
import { useI18n } from "@/lib/i18n";
import type { Service } from "@/lib/services";
import { svcTitle, svcExcerpt, svcBullets } from "@/lib/services";

export default function ServiceContent({ svc }: { svc: Service }) {
  const { lang } = useI18n();
  const title = svcTitle(svc, lang as any);
  const excerpt = svcExcerpt(svc, lang as any);
  const bullets = svcBullets(svc, lang as any);

  return (
    <main>
      <section className="relative" data-reveal>
        <div className="absolute inset-0 -z-10">
          <Image src={svc.img} alt={title} fill className="object-cover" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="fade-dark rounded-xl p-6 md:p-10 text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
            <p className="mt-3 text-lg opacity-90">{excerpt}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#offerte"
                className="bg-bronze text-charcoal px-5 py-3 rounded font-semibold"
              >
                Vrijblijvende offerte
              </a>
              <a
                href="tel:+31687727705"
                className="border border-white/60 px-5 py-3 rounded font-medium hover:bg-white/10"
              >
                Bel direct
              </a>
            </div>
            <div className="mt-3 text-sm">
              <a href="/diensten" className="underline underline-offset-4">
                ← Alle diensten
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-8"
        data-reveal
      >
        <article className="md:col-span-2 space-y-5">
          <h2 className="text-2xl font-bold">Waarom kiezen voor Klusdam</h2>
          <ul className="list-disc pl-5 space-y-2">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
            <li>Premium materialen en A-merk gereedschap voor duurzaam resultaat.</li>
            <li>Heldere offertes en planning. Geen verrassingen achteraf.</li>
            <li>Netjes werken: afdekking, stofbeperking en dagelijkse oplevering schoon.</li>
            <li>Lokale vakmensen met jaren ervaring in Schiedam en regio Rotterdam.</li>
          </ul>

          <h3 className="text-xl font-semibold">Onze werkwijze</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Gratis opname en advies op locatie.</li>
            <li>Transparante offerte met planning en materialen.</li>
            <li>Professionele uitvoering met vaste contactpersoon.</li>
            <li>Oplevering met garantie en nazorg.</li>
          </ol>
        </article>

        <aside className="bg-cream p-6 rounded-xl" id="offerte" data-reveal>
          <h3 className="font-semibold">Vrijblijvende offerte</h3>
          <p className="text-sm opacity-80">
            Vul je gegevens in. We reageren snel.
          </p>
          <ContactForm compact />
        </aside>
      </section>
    </main>
  );
}
