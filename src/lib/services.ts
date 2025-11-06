// src/lib/services.ts
export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  img: string;        // hero background
  bullets: string[];
  images: string[];   // 6 images for the gallery (replace with ImgBB links)
  intro?: string;     // optional richer intro paragraph
  faq?: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "laminaat-leggen",
    title: "Laminaat laten leggen",
    excerpt:
      "Strak gelegd laminaat met perfecte plinten en nette afwerking. Snel, stofarm en volgens afspraak.",
    img: "https://i.ibb.co/jPvG1bZ1/laminaat-1.jpg",
    bullets: [
      "Strakke legpatronen (recht, visgraat, Hongaarse punt).",
      "Vakkundig afgewerkte plinten, dilataties en afkitten.",
      "Stofarm, snel en zonder verrassingen.",
      "Scherpe planning en heldere communicatie.",
    ],
    images: [
        "https://i.ibb.co/jPvG1bZ1/laminaat-1.jpg",
        "https://i.ibb.co/fV9nfn5r/laminaat-2.jpg",
        "https://i.ibb.co/LdZD4SzL/laminaat-4.jpg",
        "https://i.ibb.co/MkGqPZ5t/laminaat-5.jpg",
        "https://i.ibb.co/4gJBpwsN/laminaat-unsplash.jpg",
        "https://i.ibb.co/v4XRLXLX/laminnat-3.jpg",
    ],
    intro:
      "We adviseren over ondervloeren, patronen en plintprofielen. Ons team werkt netjes met beschermde looproutes en dagelijks opgeruimde werkplek.",
  },

  {
    slug: "badkamer-renovatie",
    title: "Badkamer renovatie",
    excerpt:
      "Compleet vernieuwde badkamer: tegelwerk, sanitair, leidingwerk en afwerking. Eén aanspreekpunt, duidelijke planning.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Vlak en waterdicht tegelwerk (wanden en vloeren).",
      "Inloopdouche, nisjes, maatwerk betimmering.",
      "Loodgieterij & elektra conform normering.",
      "Heldere planning en garantie op de oplevering.",
    ],
    images: [
      "https://images.unsplash.com/photo-1549187774-b4e9f044ff5d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca5?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564540574749-5c9a0e4d3c49?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542317854-37f2b6a8fb15?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e86b31?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    ],
    intro:
      "We denken mee over indeling, vochtbestendige materialen en onderhoudsgemak. Tijdens het werk blijft je woning netjes en leefbaar.",
    faq: [
      {
        q: "Hoe lang duurt een complete badkamerrenovatie?",
        a: "Gemiddeld 10–15 werkdagen, afhankelijk van omvang en levertijden. Je krijgt vooraf een heldere planning.",
      },
      {
        q: "Werken jullie stofarm?",
        a: "Ja, we dekken af, zetten stofschotten waar nodig en gebruiken professionele afzuiging.",
      },
    ],
  },

  {
    slug: "plavuizen-vloer",
    title: "Plavuizen vloer leggen",
    excerpt:
      "Strak gelegde plavuizen, perfect gevoegd en uitgevlakt. Ook grootformaat en visgraat patronen.",
    img: "https://images.unsplash.com/photo-1560185008-b033106af2d1?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Grootformaat en patronen zoals visgraat.",
      "Vlak volgens toleranties, strak voegwerk.",
      "Vloerverwarming-vriendelijke opbouw en lijmen.",
      "Nauwkeurige inmetingen en nette oplevering.",
    ],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612157777902-5382bc6e864b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop",
    ],
  },

  {
    slug: "schilder",
    title: "Schilderwerk",
    excerpt:
      "Strak en duurzaam schilderwerk binnen en buiten. Voorbereiding, reparatie en professionele afwerking.",
    img: "https://i.ibb.co/YTWmppVT/hoofd-Schilderwerk.jpg",
    bullets: [
      "Voorbewerking: ontvetten, schuren, plamuren.",
      "A-merk verven, juiste laagopbouw.",
      "Strakke snijranden, nette ruimtes.",
      "Heldere afspraken en nazorg.",
    ],
    images: [
      "https://i.ibb.co/Swksd1jk/image.jpg",
      "https://i.ibb.co/Zpcm4Mv7/3.jpg",
      "https://i.ibb.co/hFfCFZmb/4.jpg",
      "https://i.ibb.co/HpFfB2Fc/5.jpg",
      "https://i.ibb.co/6RThDd8f/Buiten-schilderen-voor-en-na-boeidelen-opknappen.jpg",
      "https://i.ibb.co/nssJw0TH/verticale-of-horizontaleof-schuine-strepen-schilderen.jpg",
    ],
  },

  {
    slug: "stukadoor",
    title: "Stukadoor",
    excerpt:
      "Strak stucwerk klaar voor verf of behang. Wand- en plafondafwerking met oog voor detail.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Glad stucwerk of lichte structuur.",
      "Haakse hoeken en nette aansluitingen.",
      "Snelle droging met juiste ventilatie.",
      "Schoon opgeleverd en stofbeperkt.",
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542240170-2a1c9a789b6e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542317854-37f2b6a8fb15?q=80&w=1600&auto=format&fit=crop",
    ],
  },

  {
    slug: "tegelzetter",
    title: "Tegelzetter",
    excerpt:
      "Nauwkeurig tegelwerk met strakke voegen, in natte ruimtes en woonvloeren. Patronen en grootformaat.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Laser-uitlijnen en strak snijwerk.",
      "Waterdichte opbouw in badkamers/WC.",
      "Grootformaat en visgraat mogelijk.",
      "Correcte voeg- en kitafwerking.",
    ],
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185008-b033106af2d1?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612157777902-5382bc6e864b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop",
    ],
  },

  {
    slug: "vloerverwarming",
    title: "Vloerverwarming",
    excerpt:
      "Comfortabele, energiezuinige vloerverwarming: infrezen, verdelers en druktest. Klaar voor afwerkvloer/tegels.",
    img: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Infrezen, leggen en aansluiten van groepen.",
      "Waterzijdig inregelen en druktest.",
      "Samen met plavuizen of laminaat mogelijk.",
      "Uitleg over bediening en nazorg.",
    ],
    images: [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612157777902-5382bc6e864b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185008-b033106af2d1?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e86b31?q=80&w=1600&auto=format&fit=crop",
    ],
  },

  {
    slug: "wc-renovatie",
    title: "WC renovatie",
    excerpt:
      "Compacte renovatie van toilet: tegelwerk, hangtoilet, nis en afwerking. Snel klaar en supernetjes.",
    img: "https://images.unsplash.com/photo-1542317854-37f2b6a8fb15?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Strak tegelwerk en voeg-/kitafwerking.",
      "Inbouwreservoir, hangtoilet en nisje.",
      "Snelle doorlooptijd, stofarm.",
      "Transparante kosten en planning.",
    ],
    images: [
      "https://images.unsplash.com/photo-1542317854-37f2b6a8fb15?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca5?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549187774-b4e9f044ff5d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564540574749-5c9a0e4d3c49?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542240170-2a1c9a789b6e?q=80&w=1600&auto=format&fit=crop",
    ],
  },

  {
    slug: "timmerwerk",
    title: "Timmerwerk",
    excerpt:
      "Maatwerk interieurbouw, plafonds, wanden en reparaties. Strak en duurzaam met oog voor detail.",
    img: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Maatwerk kasten, ombouwen en koofwerk.",
      "Egalisatie, aftimmering en afwerking.",
      "Passend advies bij materiaalkeuze.",
      "Netjes gewerkt: afdekken en opruimen.",
    ],
    images: [
      "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1600&auto=format&fit=crop",
    ],
  },
];
