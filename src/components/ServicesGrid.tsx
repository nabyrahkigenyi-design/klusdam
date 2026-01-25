"use client";

import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { useI18n } from "@/lib/i18n";

type Props = {
  limit?: number;
};

export default function ServicesGrid({ limit }: Props) {
  const { t } = useI18n();

  const list = typeof limit === "number"
    ? services.slice(0, limit)
    : services;

  return (
    <section id="mogelijkheden" className="py-16 md:py-20 bg-white" data-reveal>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            {t("view_options")}
          </h2>

          {typeof limit === "number" && (
            <Link href="/diensten" className="hidden md:inline-flex text-bronze font-semibold">
              {t("all_services")} →
            </Link>
          )}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((svc) => (
            <Link
              key={svc.slug}
              href={`/diensten/${svc.slug}`}
              className="group block rounded-xl overflow-hidden border border-black/10 bg-white
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
              aria-label={t(svc.titleKey)}
            >
              <div className="relative h-44">
                <Image
                  src={svc.img}
                  alt={t(svc.titleKey)}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold">{t(svc.titleKey)}</h3>
                <p className="mt-2 text-sm opacity-80 line-clamp-3">
                  {t(svc.excerptKey)}
                </p>

                <div className="mt-4 inline-flex items-center gap-1 font-semibold text-bronze">
                  {t("read_more")} →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {typeof limit === "number" && (
          <div className="mt-6 md:hidden">
            <Link href="/diensten" className="inline-flex text-bronze font-semibold">
              {t("all_services")} →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
