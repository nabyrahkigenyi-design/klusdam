"use client";

import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

export default function ServicesGrid() {
  return (
    <section id="mogelijkheden" className="py-16 md:py-20 bg-white" data-reveal>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold">Bekijk onze mogelijkheden</h2>
          <Link href="/diensten" className="hidden md:inline-flex text-bronze font-semibold">
            Alle diensten →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <article key={svc.slug} className="rounded-xl overflow-hidden border border-black/10 bg-white group">
              <div className="relative h-44">
                <Image
                  src={svc.img}
                  alt={svc.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">{svc.title}</h3>
                <p className="mt-2 text-sm opacity-80 line-clamp-3">{svc.excerpt}</p>
                <div className="mt-4">
                  <Link
                    href={`/diensten/${svc.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-bronze"
                  >
                    Lees meer →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Link href="/diensten" className="inline-flex text-bronze font-semibold">
            Alle diensten →
          </Link>
        </div>
      </div>
    </section>
  );
}
