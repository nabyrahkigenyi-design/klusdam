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
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564540574749-5c9a0e4d3c49?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542317854-37f2b6a8fb15?q=80&w=1600&auto=format&fit=crop"
    ],
  },

  {
    id: "badk-2",
    title: "Badkamer – inloopdouche & nis",
    category: "Badkamers",
    tags: ["inloopdouche"],
    images: [
      "https://images.unsplash.com/photo-1549187774-b4e9f044ff5d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca5?q=80&w=1600&auto=format&fit=crop"
    ],
  },

  {
    id: "vloer-1",
    title: "Plavuizen grootformaat",
    category: "Vloeren",
    tags: ["plavuizen"],
    images: [
      "https://images.unsplash.com/photo-1560185008-b033106af2d1?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop"
    ],
  },

  {
    id: "lam-1",
    title: "Laminaat warm eiken",
    category: "Laminaat",
    tags: ["laminaat"],
    images: [
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
    ],
  },

  {
    id: "stuk-1",
    title: "Stucwerk en schilder",
    category: "Stuc/Schilder",
    tags: ["stukadoor", "schilder"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1600&auto=format&fit=crop"
    ],
  },

  {
    id: "tim-1",
    title: "Timmerwerk – maatwerk kast",
    category: "Timmerwerk",
    tags: ["timmerwerk"],
    images: [
      "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1600&auto=format&fit=crop"
    ],
  },

  {
    id: "trap-1",
    title: "Traprenovatie – overzettreden",
    category: "Traprenovatie",
    tags: ["trap"],
    images: [
      "https://images.unsplash.com/photo-1554104707-a76b270e4aaa?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1600&auto=format&fit=crop"
    ],
  },

  {
    id: "behang-1",
    title: "Behangwerk – patroon",
    category: "Behangwerk",
    images: [
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
    ],
  },

  {
    id: "mets-1",
    title: "Metselwerk & voeg",
    category: "Metselwerk",
    images: [
      "https://images.unsplash.com/photo-1559521783-1d1599583485?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542240170-2a1c9a789b6e?q=80&w=1600&auto=format&fit=crop"
    ],
  },

  {
    id: "lood-1",
    title: "Loodgieterij – leidingen & afvoer",
    category: "Loodgieterij",
    images: [
      "https://images.unsplash.com/photo-1562310507-026c0941f172?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1536596431816-7c7d7b6a9c73?q=80&w=1600&auto=format&fit=crop"
    ],
  },

  {
    id: "overig-1",
    title: "Diverse renovatieprojecten",
    category: "Overig",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e86b31?q=80&w=1600&auto=format&fit=crop"
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
