"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

const data = [
  { name: "Fam. Jansen", text: "Badkamer volledig gerenoveerd. Strak tegelwerk en goede communicatie.", stars: 5, src: "google" },
  { name: "S. De Vries", text: "Plavuizen vloer gelegd op vloerverwarming. Netjes en volgens planning.", stars: 5, src: "werkspot" },
  { name: "M. Ahmed", text: "Snel geholpen met stukadoors- en schilderwerk. Aanrader.", stars: 4, src: "google" },
];

function Stars({ n }: { n: number }) {
  return <span>{"★".repeat(n)}{"☆".repeat(5 - n)}</span>;
}

export default function Testimonials() {
  const { t } = useI18n();
  const [i, setI] = useState(0);
  const [slide, setSlide] = useState<"in"|"out">("in");

  useEffect(() => {
    const int = setInterval(() => {
      setSlide("out");
      setTimeout(() => { setI((v) => (v + 1) % data.length); setSlide("in"); }, 250);
    }, 4000);
    return () => clearInterval(int);
  }, []);

  const r = data[i];

  return (
    <section id="reviews" className="relative" data-reveal>
      <div className="absolute inset-0 -z-10">
        <img src="https://images.unsplash.com/photo-1582582621951-48f397a776ba?q=80&w=1920&auto=format&fit=crop"
             alt="Achtergrond" className="w-full h-full object-cover" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="fade-dark rounded-xl p-6 md:p-10 text-white max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold">{t("reviews_h")}</h2>
          <div className="mt-4 min-h-[160px]">
            <div className={`transition-all duration-300 ${slide === "in" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
              <p className="text-lg">“{r.text}”</p>
              <div className="mt-3 text-sm opacity-90 flex items-center gap-3">
                <Stars n={r.stars} /> – {r.name}
                {r.src === "google" && (
                  <span className="ml-2 inline-flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded">
                    <img src="/google_g.svg" alt="" className="w-4 h-4" /> Google
                  </span>
                )}
                {r.src === "werkspot" && (
                  <span className="ml-2 inline-flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded">
                    <img src="/werkspot_w.svg" alt="" className="w-4 h-4" /> Werkspot
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-4 opacity-80 text-xs">Echte reviews. Beschikbaar op aanvraag.</div>
        </div>
      </div>
    </section>
  );
}
