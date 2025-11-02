"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

/* ---------- Types ---------- */
export type Lang = "nl" | "en" | "de" | "fr" | "tr" | "ar";

/* ---------- Dictionary (yours, unchanged) ---------- */
const dict: Record<Lang, Record<string, string>> = {
  nl: {
    home: "Home", diensten: "Diensten", over: "Over ons", projecten: "Projecten", contact: "Contact",
    cta_quote: "Vrijblijvende offerte", call_now: "Bel direct",
    hero_h: "Bouw, renovatie en afbouw in Schiedam",
    hero_p: "Laminaat, badkamers, plavuizen, schilderwerk, stukadoor, tegelzetter, vloerverwarming, WC renovatie en timmerwerk. Eén aanspreekpunt, vakwerk gegarandeerd.",
    view_options: "Bekijk onze mogelijkheden", read_more: "Lees meer", all_services: "Alle diensten",
    recent_projects: "Recente projecten", reviews_h: "Wat onze klanten zeggen",
  },
  en: {
    home: "Home", diensten: "Services", over: "About us", projecten: "Projects", contact: "Contact",
    cta_quote: "Free quote", call_now: "Call now",
    hero_h: "Construction and renovation in Schiedam",
    hero_p: "Laminate floors, bathrooms, tiling, painting, plastering, underfloor heating, WC renovation and carpentry. One point of contact. Guaranteed craftsmanship.",
    view_options: "Explore our services", read_more: "Read more", all_services: "All services",
    recent_projects: "Recent projects", reviews_h: "What our clients say",
  },
  de: {
    home: "Startseite", diensten: "Leistungen", over: "Über uns", projecten: "Projekte", contact: "Kontakt",
    cta_quote: "Unverbindliches Angebot", call_now: "Jetzt anrufen",
    hero_h: "Bau und Renovierung in Schiedam",
    hero_p: "Laminat, Bäder, Fliesen, Maler- und Putzarbeiten, Fußbodenheizung, WC-Renovierung und Tischlerarbeiten.",
    view_options: "Unsere Leistungen", read_more: "Mehr lesen", all_services: "Alle Leistungen",
    recent_projects: "Aktuelle Projekte", reviews_h: "Was unsere Kunden sagen",
  },
  fr: {
    home: "Accueil", diensten: "Services", over: "À propos", projecten: "Projets", contact: "Contact",
    cta_quote: "Devis gratuit", call_now: "Appeler",
    hero_h: "Construction et rénovation à Schiedam",
    hero_p: "Parquet stratifié, salles de bain, carrelage, peinture, plâtrerie, chauffage au sol, WC et menuiserie.",
    view_options: "Découvrez nos services", read_more: "En savoir plus", all_services: "Tous les services",
    recent_projects: "Projets récents", reviews_h: "Ce que disent nos clients",
  },
  tr: {
    home: "Ana sayfa", diensten: "Hizmetler", over: "Hakkımızda", projecten: "Projeler", contact: "İletişim",
    cta_quote: "Ücretsiz teklif", call_now: "Hemen ara",
    hero_h: "Schiedam’da inşaat ve renovasyon",
    hero_p: "Laminat, banyo, fayans, boya, alçı, yerden ısıtma, WC yenileme ve marangozluk.",
    view_options: "Hizmetlerimize göz atın", read_more: "Devamını oku", all_services: "Tüm hizmetler",
    recent_projects: "Son projeler", reviews_h: "Müşterilerimiz ne diyor",
  },
  ar: {
    home: "الرئيسية", diensten: "الخدمات", over: "من نحن", projecten: "المشاريع", contact: "اتصل بنا",
    cta_quote: "عرض مجاني", call_now: "اتصل الآن",
    hero_h: "أعمال البناء والتجديد في سخيدام",
    hero_p: "أرضيات خشبية، حمامات، تبليط، دهان، لياسة، تدفئة أرضية، تجديد مرحاض وأعمال نجارة.",
    view_options: "تعرّف على خدماتنا", read_more: "اقرأ المزيد", all_services: "كل الخدمات",
    recent_projects: "أحدث المشاريع", reviews_h: "ماذا يقول عملاؤنا",
  },
};

/* ---------- Cookie helpers (persist 1 year) ---------- */
function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
  return m ? decodeURIComponent(m.pop() as string) : null;
}
function setCookie(name: string, value: string, days = 365) {
  if (typeof document === "undefined") return;
  const maxAge = days * 24 * 60 * 60;
  // Lax is fine for a language cookie
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

/* ---------- Context ---------- */
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const I18nCtx = createContext<Ctx | null>(null);

/* ---------- Provider ---------- */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, _setLang] = useState<Lang>("nl");

  // On mount: prefer cookie, then localStorage, else default "nl"
  useEffect(() => {
    const fromCookie = getCookie("lang") as Lang | null;
    const fromLS = (typeof localStorage !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    const initial = fromCookie || fromLS;
    if (initial && ["nl", "en", "de", "fr", "tr", "ar"].includes(initial)) {
      _setLang(initial);
    }
    // keep tabs in sync
    const onStorage = (e: StorageEvent) => {
      if (e.key === "lang" && e.newValue && ["nl","en","de","fr","tr","ar"].includes(e.newValue)) {
        _setLang(e.newValue as Lang);
        setCookie("lang", e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setLang = (l: Lang) => {
    _setLang(l);
    // write to both cookie and localStorage for compatibility
    setCookie("lang", l);
    try { localStorage.setItem("lang", l); } catch {}
  };

  const t = useMemo(() => {
    const d = dict[lang] || dict.nl;
    return (k: string) => d[k] ?? dict.nl[k] ?? k;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

/* ---------- Hook ---------- */
export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}

/* ---------- Flags (unchanged) ---------- */
export const flags: Record<Lang, { label: string; src: string }> = {
  nl: { label: "Nederlands", src: "https://flagcdn.com/nl.svg" },
  en: { label: "English",   src: "https://flagcdn.com/gb.svg" },
  de: { label: "Deutsch",   src: "https://flagcdn.com/de.svg" },
  fr: { label: "Français",  src: "https://flagcdn.com/fr.svg" },
  tr: { label: "Türkçe",    src: "https://flagcdn.com/tr.svg" },
  ar: { label: "العربية",   src: "https://flagcdn.com/sa.svg" },
};
