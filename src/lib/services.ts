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
    img: "https://i.ibb.co/8gsnQCkL/hoofd-Tegelwerk.jpg",
    bullets: [
      "Vlak en waterdicht tegelwerk (wanden en vloeren).",
      "Inloopdouche, nisjes, maatwerk betimmering.",
      "Loodgieterij & elektra conform normering.",
      "Heldere planning en garantie op de oplevering.",
    ],
    images: [
      "https://i.ibb.co/qM0Zr8hy/2.jpg",
"https://i.ibb.co/pBRq6qgD/3.jpg",
"https://i.ibb.co/3mpvnfG9/4.jpg",
"https://i.ibb.co/dJfDjbcH/5.jpg",
"https://i.ibb.co/B5mp3w6N/6.jpg",
"https://i.ibb.co/35NJSdXx/8.jpg",
"https://i.ibb.co/s90X4CNz/bathroom-design.jpg",
"https://i.ibb.co/wrwwGcYS/Bathroom-Tile-Designs.jpg",
"https://i.ibb.co/8gsnQCkL/hoofd-Tegelwerk.jpg",
"https://i.ibb.co/S4qN791C/jpg.jpg",
"https://i.ibb.co/cX8mM2FF/Project-Zandvoort.jpg",
"https://i.ibb.co/bgzxpV2j/Wij-realiseren-uw-droom-badkamer-Designa-Architectuur.jpg",
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
    title: "Gietvloer",
    excerpt:
      "Strak gelegde plavuizen, perfect gevoegd en uitgevlakt. Ook grootformaat en visgraat patronen.",
    img: "https://i.ibb.co/qFYnC3qh/gietvloer.jpg",

    bullets: [
      "Grootformaat en patronen zoals visgraat.",
      "Vlak volgens toleranties, strak voegwerk.",
      "Vloerverwarming-vriendelijke opbouw en lijmen.",
      "Nauwkeurige inmetingen en nette oplevering.",
    ],
    images: [
      "https://i.ibb.co/HT7pzNvq/6516cebb816a4907c137d26e-IMG-1473-kopie.webp",
      "https://i.ibb.co/7Jz2Z9LY/epoxyvloeren.jpg",
      "https://i.ibb.co/ccYGQBjD/epoxyvloer-keuken-1024x768.jpg",
      "https://i.ibb.co/qFYnC3qh/gietvloer.jpg",
      "https://i.ibb.co/N6BMq8Dn/hoofd-Gietvloer.jpg",
      "https://i.ibb.co/3xmdG9K/IMG-20241107-WA0000.jpg",
      "https://i.ibb.co/SwG8Vv9X/Installatie-gietvloer-1.jpg",
      "https://i.ibb.co/dJ5640Wn/pu-gietvloer.jpg",
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
    img: "https://i.ibb.co/q2QRxrt/Hoofd-stucwerk.jpg",
    bullets: [
      "Glad stucwerk of lichte structuur.",
      "Haakse hoeken en nette aansluitingen.",
      "Snelle droging met juiste ventilatie.",
      "Schoon opgeleverd en stofbeperkt.",
    ],
    images: [
      "https://i.ibb.co/TDqQSt3X/Faster-Drywall-Finishing-Fine-Homebuilding.jpg",
      "https://i.ibb.co/RGqxZgGJ/hoelang-moet-stucwerk-drogen.webp",
      "https://i.ibb.co/q2QRxrt/Hoofd-stucwerk.jpg",
      "https://i.ibb.co/xSqLLKgr/I-Hate-Spackeling.jpg",
      "https://i.ibb.co/cXYKNrhS/Stucadoorsbedrijf-Peter-Jansen-Stucadoor-in-Stiens-Friesland.jpg",
      "https://i.ibb.co/WpPRZRnj/Stukadoor-gezocht-Prijs-Advies.jpg",
    ],
  },

  {
    slug: "tegelzetter",
    title: "Tegelzetter",
    excerpt:
      "Nauwkeurig tegelwerk met strakke voegen, in natte ruimtes en woonvloeren. Patronen en grootformaat.",
    img:  "https://i.ibb.co/3mpvnfG9/4.jpg",
    bullets: [
      "Laser-uitlijnen en strak snijwerk.",
      "Waterdichte opbouw in badkamers/WC.",
      "Grootformaat en visgraat mogelijk.",
      "Correcte voeg- en kitafwerking.",
    ],
    images: [
      "https://i.ibb.co/qM0Zr8hy/2.jpg",
      "https://i.ibb.co/pBRq6qgD/3.jpg",
      "https://i.ibb.co/3mpvnfG9/4.jpg",
      "https://i.ibb.co/dJfDjbcH/5.jpg",
      "https://i.ibb.co/B5mp3w6N/6.jpg",
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
    ],
  },

  {
    slug: "wc-renovatie",
    title: "WC renovatie",
    excerpt:
      "Compacte renovatie van toilet: tegelwerk, hangtoilet, nis en afwerking. Snel klaar en supernetjes.",
    img: "https://i.ibb.co/wrwwGcYS/Bathroom-Tile-Designs.jpg",
    bullets: [
      "Strak tegelwerk en voeg-/kitafwerking.",
      "Inbouwreservoir, hangtoilet en nisje.",
      "Snelle doorlooptijd, stofarm.",
      "Transparante kosten en planning.",
    ],
    images: [
      "https://i.ibb.co/qM0Zr8hy/2.jpg",
"https://i.ibb.co/pBRq6qgD/3.jpg",
"https://i.ibb.co/3mpvnfG9/4.jpg",
"https://i.ibb.co/dJfDjbcH/5.jpg",
"https://i.ibb.co/B5mp3w6N/6.jpg",
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
    slug: "timmerwerk",
    title: "Timmerwerk",
    excerpt:
      "Maatwerk interieurbouw, plafonds, wanden en reparaties. Strak en duurzaam met oog voor detail.",
    img: "https://i.ibb.co/4g0wpcFn/hoofd-Timmerwerk-jpg.webp",
    bullets: [
      "Maatwerk kasten, ombouwen en koofwerk.",
      "Egalisatie, aftimmering en afwerking.",
      "Passend advies bij materiaalkeuze.",
      "Netjes gewerkt: afdekken en opruimen.",
    ],
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
];
