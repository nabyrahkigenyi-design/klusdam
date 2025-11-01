"use client";

import Link from "next/link";
import Image from "next/image";
import { services, svcTitle, svcExcerpt } from "@/lib/services";
import { useI18n } from "@/lib/i18n";

export default function ServicesGrid() {
  const { lang, t } = useI18n() as any;

  return (
    <section id="mogelijkheden" className="py-16 md:py-20 bg-white" data-reveal>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold">{t("view_options")}</h2>
          <Link
            href="/contact"
            className="hidden md:inline-block border border-bronze text-charcoal px-4 py-2 rounded hover:bg-bronze/10 font-semibold"
          >
            {t("cta_quote")}
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s) => {
            const title = svcTitle(s, lang);
            const excerpt = svcExcerpt(s, lang);
            return (
              <Link
                key={s.slug}
                href={`/diensten/${s.slug}`}
                className="group rounded-xl overflow-hidden bg-white border border-black/5 shadow hover:shadow-lg transition"
              >
                <div className="h-48 w-full overflow-hidden relative">
                  <Image
                    src={s.img}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{title}</h3>
                  <p className="text-sm opacity-80 mt-1">{excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-bronze mt-3 font-semibold">
                    {t("read_more")} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
