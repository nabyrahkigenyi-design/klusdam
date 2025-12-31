// src/lib/projects.ts

export type Category =
  | "Badkamers"
  | "Vloeren"
  | "Laminaat"
  | "Stuc/Schilder"
  | "Timmerwerk"
  | "Traprenovatie"
  | "Behangwerk"
  | "Metselwerk"
  | "Loodgieterij"
  | "Overig";

export type Project = {
  id: string;         // unique id for the album
  title: string;
  category: Category;
  tags?: string[];
  images: string[];   // <--- array of image URLs (put your ImgBB direct links here)
};

// List and order of categories to show in UI
export const PROJECT_CATEGORIES: Category[] = [
  "Badkamers",
  "Vloeren",
  "Laminaat",
  "Stuc/Schilder",
  "Timmerwerk",
  "Traprenovatie",
  "Behangwerk",
  "Metselwerk",
  "Loodgieterij",
  "Overig",
];

// ---- Example dataset (replace image URLs with your ImgBB links) ----
// Each project has multiple distinct image URLs in `images` array.
export const projects: Project[] = [
  {
    id: "badk-1",
    title: "Badkamer renovatie – donker marmer",
    category: "Badkamers",
    tags: ["badkamer", "tegelzetter"],
    images: [
      "https://i.ibb.co/35NJSdXx/8.jpg",
      "https://i.ibb.co/s90X4CNz/bathroom-design.jpg",
      "https://i.ibb.co/wrwwGcYS/Bathroom-Tile-Designs.jpg",
      "https://i.ibb.co/8gsnQCkL/hoofd-Tegelwerk.jpg",
      "https://i.ibb.co/S4qN791C/jpg.jpg",
      "https://i.ibb.co/cX8mM2FF/Project-Zandvoort.jpg",
      "https://i.ibb.co/bgzxpV2j/Wij-realiseren-uw-droom-badkamer-Designa-Architectuur.jpg",
    ],
  },

  {
    id: "badk-2",
    title: "Badkamer – inloopdouche & nis",
    category: "Badkamers",
    tags: ["inloopdouche"],
    images: [
      "https://i.ibb.co/qM0Zr8hy/2.jpg",
      "https://i.ibb.co/pBRq6qgD/3.jpg",
      "https://i.ibb.co/3mpvnfG9/4.jpg",
      "https://i.ibb.co/dJfDjbcH/5.jpg",
      "https://i.ibb.co/B5mp3w6N/6.jpg",
    ],
  },

  {
    id: "vloer-1",
    title: "Plavuizen grootformaat",
    category: "Vloeren",
    tags: ["plavuizen"],
    images: [
      "https://i.ibb.co/ycJLF4mp/092091021.jpg",
      "https://i.ibb.co/rGWbsRmd/Afbeelding-van-Whats-App-op-2023-08-11-om-15-23-55-1920w-jpg.webp",
      "https://i.ibb.co/XrgHXXHX/d3304cc6-58ff-4283-847c-1fc541724f46.jpg",
      "https://i.ibb.co/35d1qFcx/IMG-1569-jpg.avif",
      "https://i.ibb.co/Gfq1ZxDr/metgroep-footer01.jpg",
      "https://i.ibb.co/zhpQ12YG/renovatiesloopwerkzaamheden-binnenshuis.jpg",
      "https://i.ibb.co/BDwYSGj/sloopbedrijf-in-rotterdam-jpg.webp",
    ],
  },

  {
    id: "lam-1",
    title: "Laminaat warm eiken",
    category: "Laminaat",
    tags: ["laminaat"],
    images: [
      "https://i.ibb.co/wh7DDMkh/hoofd-Laminaat-leggen.jpg",
      "https://i.ibb.co/zWWqWDMy/legrichting-1024x768.jpg",
      "https://i.ibb.co/FbNXNNLT/Legservice-Parket-verlijmd-visgraat-8784e341-b6dc-49b5-a203-533a62023177-jpg.webp",
      "https://i.ibb.co/vFZqGYc/premium-uw-vloer-gratis.jpg",
      "https://i.ibb.co/3mPNqyjk/Vloeren-laminaat-leggen-klikken.jpg",
      "https://i.ibb.co/bRN6dMH8/Whats-App-Image-2025-10-26-at-13-20-09.jpg",
      "https://i.ibb.co/WNTqQKYQ/Whats-App-Image-2025-10-26-at-13-20-10-1.jpg",
      "https://i.ibb.co/jZGv0HCq/Whats-App-Image-2025-10-26-at-13-20-10-2.jpg",
      "https://i.ibb.co/9m8PTfb6/Whats-App-Image-2025-10-26-at-13-20-10-3.jpg",
    ],
  },

  {
    id: "stuk-1",
    title: "Stucwerk en schilder",
    category: "Stuc/Schilder",
    tags: ["stukadoor", "schilder"],
    images: [
      "https://i.ibb.co/Swksd1jk/image.jpg",
      "https://i.ibb.co/Zpcm4Mv7/3.jpg",
      "https://i.ibb.co/hFfCFZmb/4.jpg",
      "https://i.ibb.co/HpFfB2Fc/5.jpg",
      "https://i.ibb.co/6RThDd8f/Buiten-schilderen-voor-en-na-boeidelen-opknappen.jpg",
      "https://i.ibb.co/nssJw0TH/verticale-of-horizontaleof-schuine-strepen-schilderen.jpg",
      "https://i.ibb.co/TDqQSt3X/Faster-Drywall-Finishing-Fine-Homebuilding.jpg",
      "https://i.ibb.co/RGqxZgGJ/hoelang-moet-stucwerk-drogen.webp",
      "https://i.ibb.co/q2QRxrt/Hoofd-stucwerk.jpg",
      "https://i.ibb.co/xSqLLKgr/I-Hate-Spackeling.jpg",
      "https://i.ibb.co/cXYKNrhS/Stucadoorsbedrijf-Peter-Jansen-Stucadoor-in-Stiens-Friesland.jpg",
      "https://i.ibb.co/WpPRZRnj/Stukadoor-gezocht-Prijs-Advies.jpg",
    ],
  },

  {
    id: "tim-1",
    title: "Timmerwerk – maatwerk kast",
    category: "Timmerwerk",
    tags: ["timmerwerk"],
    images: [
      "https://i.ibb.co/vCP1gM0q/Go-ralskie-wne-trze.jpg",
      "https://i.ibb.co/4g0wpcFn/hoofd-Timmerwerk-jpg.webp",
      "https://i.ibb.co/7dy8Rh2G/timmerwerk-jpeg.jpg",
      "https://i.ibb.co/WNb5FpXf/Umbau-und-Erweiterung-in-der-Indianersiedlung-Ko-ln-Zollstock-CATALANOQUIEL-Architekten-BDA.jpg",
      "https://i.ibb.co/4gWN3KsY/X.jpg",
      "https://i.ibb.co/cSDWkscJ/ZARNESTI-HOUSE-AIM.jpg",
      "https://i.ibb.co/4wpQTchX/image.jpg",
    ],
  },

  {
    id: "trap-1",
    title: "Traprenovatie – overzettreden",
    category: "Traprenovatie",
    tags: ["trap"],
    images: [
      "https://i.ibb.co/j9D7dVNk/2.jpg",
      "https://i.ibb.co/mV03bNvh/Chique-hal-Den-Breejen-Interieur.jpg",
      "https://i.ibb.co/DHRdyjpJ/Hallway-Black-white-wood.jpg",
      "https://i.ibb.co/9M5YVQK/hoofd-Traprenovatie.jpg",
      "https://i.ibb.co/FLnCHtNR/Opentrap.jpg",
      "https://i.ibb.co/CKS9jpcP/Trap-gestoffeerd-met-Cunera-Schaft-sisal-tapijt-in-visgraat.jpg",
      "https://i.ibb.co/Z1JxMmxf/Traprenovatie-met-PVC-trapbekleding-Vloeren-Trappen.jpg",
    ],
  },

  {
    id: "behang-1",
    title: "Behangwerk – patroon",
    category: "Behangwerk",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
    ],
  },

  {
    id: "mets-1",
    title: "Metselwerk & voeg",
    category: "Metselwerk",
    images: [
       "https://i.ibb.co/b56gqW7T/Blokverband-metselwerk.jpg",
       "https://i.ibb.co/WvR12F9S/hoofd-metselwerk.webp",
       "https://i.ibb.co/8SkcPR4/Metselwerk-rond-raam.jpg",
       "https://i.ibb.co/HLfxJcxg/Moderne-jaren-30-woning.jpg",
       "https://i.ibb.co/Rp3YX4hB/Moderne-tweewoonst-B-B.jpg",
       "https://i.ibb.co/KBmpgk7/Mossoux-Architecten.jpg",
    ],
  },

  {
    id: "lood-1",
    title: "Loodgieterij – leidingen & afvoer",
    category: "Loodgieterij",
    images: [
      "https://i.ibb.co/1fH1Gh1Z/image.jpg",
      "https://i.ibb.co/hxh30yG7/2.jpg",
      "https://i.ibb.co/yc98WLcD/3.jpg",
      "https://i.ibb.co/PyF19Sr/4.jpg",
      "https://i.ibb.co/x88Q4CpM/hoofd-Loodgieterij.jpg"
    ],
  },

  {
    id: "overig-1",
    title: "Diverse renovatieprojecten",
    category: "Overig",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    ],
  },
];

// Utility: counts per category
export function categoryCounts(list: Project[] = projects): Record<Category, number> {
  const base = Object.fromEntries(PROJECT_CATEGORIES.map((c) => [c, 0])) as Record<Category, number>;
  for (const p of list) {
    base[p.category] = (base[p.category] ?? 0) + p.images.length; // count images
  }
  return base;
}
