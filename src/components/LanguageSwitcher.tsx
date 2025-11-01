"use client";
import { useI18n } from "@/i18n/Provider";

const langs = [
  { code: "nl", label: "Nederlands", flag: "nl" },
  { code: "en", label: "English",   flag: "gb" },
  { code: "de", label: "Deutsch",   flag: "de" },
  { code: "fr", label: "Français",  flag: "fr" },
  { code: "es", label: "Español",   flag: "es" },
  { code: "ar", label: "العربية",    flag: "sa" },
] as const;

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const current = langs.find(l => l.code === lang) ?? langs[0];

  return (
    <div className="relative">
      <button className="inline-flex items-center gap-2">
        <img alt={current.label} src={`https://flagcdn.com/w20/${current.flag}.png`} width={20} height={14} />
        <span className="hidden sm:inline">{current.label}</span>
      </button>
      <div className="absolute right-0 mt-2 bg-white border border-black/10 rounded shadow p-2 w-44 z-50">
        {langs.map(l => (
          <button
            key={l.code}
            onClick={() => setLang(l.code as any)}
            className="w-full text-left px-2 py-1 rounded hover:bg-cream flex items-center gap-2"
          >
            <img alt={l.label} src={`https://flagcdn.com/w20/${l.flag}.png`} width={20} height={14} />
            <span>{l.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
