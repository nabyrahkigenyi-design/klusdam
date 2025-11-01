"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";

const diensten = [
  { slug: "laminaat", name: "Laminaat laten leggen" },
  { slug: "badkamer-renovatie", name: "Badkamerrenovatie" },
  { slug: "plavuizen-vloer", name: "Plavuizen vloer" },
  { slug: "schilder", name: "Schilder" },
  { slug: "stukadoor", name: "Stukadoor" },
  { slug: "tegelzetter", name: "Tegelzetter" },
  { slug: "vloerverwarming", name: "Vloerverwarming" },
  { slug: "wc-renovatie", name: "WC renovatie" },
  { slug: "timmerwerk", name: "Timmerwerk" },
];

export default function Navbar() {
  const { t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") { setMenuOpen(false); setMobileOpen(false); }
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Bigger logo area with placeholder image box */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-xl bg-bronze/20 border border-bronze/30 grid place-items-center overflow-hidden">
            {/* Replace src with your logo later */}
            <img src="/logo-placeholder-house.svg" alt="Klusdam logo" className="w-10 h-10 opacity-80" />
          </div>
          <span className="font-bold text-xl tracking-wide">Klusdam</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-[17px]">
          <Link href="/" className="hover:text-bronze font-semibold">{t("home")}</Link>

          <div className="relative" ref={menuRef}>
            <button
              className="hover:text-bronze inline-flex items-center gap-1 font-semibold"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-haspopup="menu"
            >
              {t("diensten")} <span>▾</span>
            </button>
            {menuOpen && (
              <div role="menu" className="absolute left-0 mt-2 bg-white shadow-lg rounded-md p-3 w-80 border border-black/5">
                <ul className="grid grid-cols-2 gap-1 text-sm">
                  {diensten.map((d) => (
                    <li key={d.slug}>
                      <Link
                        className="block px-2 py-2 rounded hover:bg-cream hover:text-bronze"
                        href={`/diensten/${d.slug}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {d.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="border-t mt-2 pt-2 text-xs">
                  <Link href="/diensten" onClick={() => setMenuOpen(false)} className="text-bronze">
                    {t("all_services")} →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/over-ons" className="hover:text-bronze font-semibold">{t("over")}</Link>
          <Link href="/projecten" className="hover:text-bronze font-semibold">{t("projecten")}</Link>
          <Link href="/contact" className="hover:text-bronze font-semibold">{t("contact")}</Link>
        </nav>

        <button
  className="md:hidden inline-flex items-center justify-center rounded-lg p-3 ring-1 ring-black/10"
  aria-label="Open menu"
  onClick={() => setMobileOpen((v) => !v)}
>
  {/* Bigger hamburger icon */}
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
</button>

      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-3 space-y-2">
            <Link href="/" className="block font-semibold" onClick={() => setMobileOpen(false)}>{t("home")}</Link>
            <details className="border rounded-md">
              <summary className="cursor-pointer px-3 py-2">{t("diensten")}</summary>
              <ul className="p-3 grid grid-cols-1 gap-2 text-sm">
                {diensten.map((d) => (
                  <li key={d.slug}>
                    <Link href={`/diensten/${d.slug}`} onClick={() => setMobileOpen(false)}>{d.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="px-3 pb-3 text-xs">
                <Link href="/diensten" onClick={() => setMobileOpen(false)} className="text-bronze">{t("all_services")} →</Link>
              </div>
            </details>
            <Link href="/over-ons" className="block" onClick={() => setMobileOpen(false)}>{t("over")}</Link>
            <Link href="/projecten" className="block" onClick={() => setMobileOpen(false)}>{t("projecten")}</Link>
            <Link href="/contact" className="block" onClick={() => setMobileOpen(false)}>{t("contact")}</Link>
          </div>
        </div>
      )}
    </header>
  );
}
