// src/lib/services.ts
// Multilingual services data. Default language is NL; other languages override title/excerpt.
// You can replace any img URL with your ImgBB direct link (e.g. https://i.ibb.co/xxxxx.jpg)

export type Lang = "nl" | "en" | "de" | "fr" | "tr" | "ar";

export type Service = {
  slug: string;
  img: string;            // hero + card image
  title: string;          // default (NL)
  excerpt: string;        // default (NL)
  bullets: string[];      // default (NL)
  i18n?: Partial<Record<Lang, Partial<Pick<Service, "title" | "excerpt" | "bullets">>>>;
};

export const services: Service[] = [
  {
    slug: "laminaat",
    img: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop",
    title: "Laminaat laten leggen",
    excerpt: "Strak gelegd, duurzaam en geluiddempend. Inclusief ondervloer en plinten.",
    bullets: [
      "Vakkundige plaatsing met strak patroon",
      "Ondervloer en plinten exact op maat",
      "Nauwkeurige afwerking rond kozijnen en leidingen",
    ],
    i18n: {
      en: { title: "Laminate flooring", excerpt: "Neat, durable laminate—incl. underlay & skirting." },
      de: { title: "Laminat verlegen", excerpt: "Sauber verlegt, langlebig – inkl. Dämmung & Leisten." },
      fr: { title: "Pose de stratifié", excerpt: "Pose soignée et durable – sous-couche & plinthes." },
      tr: { title: "Laminat döşeme", excerpt: "Düzgün ve dayanıklı – şilte ve süpürgelik dahil." },
      ar: { title: "تركيب أرضيات لامينيت", excerpt: "تركيب متقن ومتين مع عازل وقوائم." },
    },
  },
  {
    slug: "badkamer-renovatie",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    title: "Badkamerrenovatie",
    excerpt: "Complete renovaties: leidingen, tegelwerk, sanitair en afwerking met garantie.",
    bullets: [
      "Volledige coördinatie: sloop tot afmontage",
      "Waterdicht systeem en perfecte afschot",
      "A-merk materialen en nette afwerking",
    ],
    i18n: {
      en: { title: "Bathroom renovation", excerpt: "Full remodel: plumbing, tiling, fixtures & finish." },
      de: { title: "Badsanierung", excerpt: "Komplette Sanierung: Leitungen, Fliesen, Sanitär." },
      fr: { title: "Rénovation de salle de bain", excerpt: "Réseaux, carrelage, sanitaires & finitions complètes." },
      tr: { title: "Banyo tadilatı", excerpt: "Tesisat, seramik, armatür ve son işleriyle komple." },
      ar: { title: "تجديد الحمّامات", excerpt: "تجديد كامل: تمديدات، تبليط، صحيات وتشطيبات." },
    },
  },
  {
    slug: "plavuizen-vloer",
    img: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1600&auto=format&fit=crop",
    title: "Plavuizen vloer",
    excerpt: "Strak tegelwerk op patroon, vlak, met de juiste voegen en dilataties.",
    bullets: [
      "Perfecte uitlijning en voegbreedte",
      "Patronen: visgraat, recht, halfsteens, etc.",
      "Vlak en duurzaam met de juiste lijm/primer",
    ],
    i18n: {
      en: { title: "Tiled floors", excerpt: "Perfect alignment, patterns, durable finish." },
      de: { title: "Fliesenboden", excerpt: "Saubere Verlegung, Muster und langlebige Oberfläche." },
      fr: { title: "Sol carrelé", excerpt: "Alignement précis, motifs et finition durable." },
      tr: { title: "Seramik zemin", excerpt: "Kusursuz hizalama, desenler ve dayanıklı sonuç." },
      ar: { title: "أرضيات بلاط", excerpt: "محاذاة دقيقة ونقوش وتشطيب متين." },
    },
  },
  {
    slug: "schilder",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop",
    title: "Schilder",
    excerpt: "Binnen- en buitenschilderwerk met strakke lijnen en duurzame lakken.",
    bullets: [
      "Voorbehandeling en herstel van ondergronden",
      "Strakke randen, stofarm, snel droog",
      "Topcoats met hoge slijtvastheid",
    ],
    i18n: {
      en: { title: "Painting", excerpt: "Interior & exterior painting with durable finishes." },
      de: { title: "Malerarbeiten", excerpt: "Innen/Außen – präzise Kanten, langlebige Lacke." },
      fr: { title: "Peinture", excerpt: "Intérieur/extérieur, finitions durables et nettes." },
      tr: { title: "Boya", excerpt: "İç/dış boya – dayanıklı ve temiz işçilik." },
      ar: { title: "أعمال الدهان", excerpt: "دهان داخلي وخارجي بتشطيبات متينة." },
    },
  },
  {
    slug: "stukadoor",
    img: "https://i.ibb.co/9mPfb95T/stukadoor.jpg",
    title: "Stukadoor",
    excerpt: "Strakke wanden en plafonds: sausklaar, behangklaar, sierpleister.",
    bullets: [
      "Perfecte vlakheid en hoeken",
      "Sausklaar of sierpleister, naar wens",
      "Stofbeperkt en netjes opgeleverd",
    ],
    i18n: {
      en: { title: "Plastering", excerpt: "Perfectly smooth walls & ceilings." },
      de: { title: "Verputzarbeiten", excerpt: "Glatte Wände/Decken oder Strukturputz." },
      fr: { title: "Plâtrerie", excerpt: "Murs/plafonds lisses ou enduits décoratifs." },
      tr: { title: "Sıva", excerpt: "Düz tavan/duvar veya dekoratif sıva." },
      ar: { title: "أعمال اللياسة", excerpt: "جدران وأسقف ملساء أو لياسة ديكورية." },
    },
  },
  {
    slug: "tegelzetter",
    img: "https://images.unsplash.com/photo-1584622781564-1f1a43d2b3cf?q=80&w=1600&auto=format&fit=crop",
    title: "Tegelzetter",
    excerpt: "Wand- en vloertegels op waterpas, met perfecte snedes en voegen.",
    bullets: [
      "Haarscherpe snedes (zaag/tegelknipper)",
      "Perfecte uitlijning en vlakheid",
      "Voeg- en kitwerk met topmaterialen",
    ],
    i18n: {
      en: { title: "Tiling", excerpt: "Walls & floors tiled level with clean cuts." },
      de: { title: "Fliesenleger", excerpt: "Wand/ Boden – exakt geschnitten & verlegt." },
      fr: { title: "Carrelage", excerpt: "Murs/sols au niveau, coupes nettes." },
      tr: { title: "Seramik döşeme", excerpt: "Düzgün kesimler, düzgün derzler." },
      ar: { title: "تبليط", excerpt: "تبليط الجدران والأرضيات بمستوى دقيق." },
    },
  },
  {
    slug: "vloerverwarming",
    img: "https://images.unsplash.com/photo-1615876234886-fd9a39f2a91a?q=80&w=1600&auto=format&fit=crop",
    title: "Vloerverwarming",
    excerpt: "Frezen, verdelers en legplannen voor gelijkmatige warmte en laag verbruik.",
    bullets: [
      "Vakkundig frezen en buizen leggen",
      "Optimale verdeler en zones",
      "Na-isolatie en juiste opbouwhoogtes",
    ],
    i18n: {
      en: { title: "Underfloor heating", excerpt: "Even heat, low consumption—pro installation." },
      de: { title: "Fußbodenheizung", excerpt: "Gleichmäßige Wärme, fachgerecht installiert." },
      fr: { title: "Chauffage au sol", excerpt: "Chaleur homogène & consommation réduite." },
      tr: { title: "Yerden ısıtma", excerpt: "Dengeli ısı ve düşük tüketim." },
      ar: { title: "تدفئة أرضية", excerpt: "حرارة متوازنة واستهلاك منخفض بتثبيت احترافي." },
    },
  },
  {
    slug: "wc-renovatie",
    img: "https://images.unsplash.com/photo-1572038572866-4e4c27c1c31b?q=80&w=1600&auto=format&fit=crop",
    title: "WC renovatie",
    excerpt: "Compact en strak: hangtoilet, betegeling, kit en ventilatie.",
    bullets: [
      "Strakke tegelverdeling in kleine ruimtes",
      "Hangtoilet en inbouwreservoir",
      "Net kitwerk en ventilatieoplossing",
    ],
    i18n: {
      en: { title: "WC renovation", excerpt: "Compact & clean—tiling, wall-hung toilet, sealing." },
      de: { title: "WC-Sanierung", excerpt: "Kompakt & sauber – Fliesen, Hänge-WC, Fugen." },
      fr: { title: "Rénovation WC", excerpt: "WC suspendu, carrelage, joints & ventilation." },
      tr: { title: "WC yenileme", excerpt: "Kompakt ve şık çözüm." },
      ar: { title: "تجديد المرحاض", excerpt: "حلول مدمجة أنيقة: تبليط ومرحاض معلّق." },
    },
  },
  {
    slug: "timmerwerk",
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1600&auto=format&fit=crop",
    title: "Timmerwerk",
    excerpt: "Maatwerk kasten, kozijnen, plafonds en herstelwerk door vakmensen.",
    bullets: [
      "Maatwerk oplossingen en strakke inbouw",
      "Duurzame houtsoorten en beslag",
      "Nauwkeurige afwerking en lak",
    ],
    i18n: {
      en: { title: "Carpentry", excerpt: "Custom cabinetry, frames, ceilings & repairs." },
      de: { title: "Tischlerarbeiten", excerpt: "Maßanfertigungen, Zargen, Decken & Reparaturen." },
      fr: { title: "Menuiserie", excerpt: "Sur-mesure: rangements, huisseries, plafonds." },
      tr: { title: "Marangozluk", excerpt: "Özel dolaplar, kasalar ve onarımlar." },
      ar: { title: "أعمال النجارة", excerpt: "خزائن ومشغولات خشبية مخصّصة وإصلاحات." },
    },
  },
];

// helpers to access localized fields
export function svcTitle(s: Service, lang: Lang) {
  return s.i18n?.[lang]?.title ?? s.title;
}
export function svcExcerpt(s: Service, lang: Lang) {
  return s.i18n?.[lang]?.excerpt ?? s.excerpt;
}
export function svcBullets(s: Service, lang: Lang) {
  return s.i18n?.[lang]?.bullets ?? s.bullets;
}
