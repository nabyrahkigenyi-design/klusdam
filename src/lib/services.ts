// src/lib/services.ts

export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  img: string;        // hero background
  bullets: string[];
  images: string[];   // gallery images
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

  // Let op: slug behouden om bestaande links niet te breken
  {
    slug: "plavuizen-vloer",
    title: "Gietvloer",
    excerpt:
      "Naadloze gietvloer met moderne uitstraling. Slijtvast, onderhoudsvriendelijk en geschikt voor vloerverwarming.",
    img: "https://i.ibb.co/qFYnC3qh/gietvloer.jpg",
    bullets: [
      "Naadloos en strak eindresultaat.",
      "PU- en epoxy gietvloeren mogelijk.",
      "Geschikt voor vloerverwarming.",
      "Duurzaam, waterdicht en onderhoudsvriendelijk.",
    ],
    images: [
      "https://i.ibb.co/HT7pzNvq/6516cebb816a4907c137d26e-IMG-1473-kopie.webp",
      "https://i.ibb.co/7Jz2Z9LY/epoxyvloeren.jpg",
      "https://i.ibb.co/ccYGQBjD/epoxyvloer-keuken-1024x768.jpg",
      "https://i.ibb.co/qFYnC3qh/gietvloer.jpg",
      "https://i.ibb.co/N6BMq8Dn/hoofd-Gietvloer.jpg",
      "https://i.ibb.co/dJ5640Wn/pu-gietvloer.jpg",
    ],
    intro:
      "Wij adviseren over type gietvloer, kleur en afwerking. De vloer wordt in meerdere lagen aangebracht voor een duurzaam en strak resultaat.",
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
    img: "https://i.ibb.co/3mpvnfG9/4.jpg",
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
    intro:
      "Wij maken en monteren maatwerk dat past bij jouw woning. We werken netjes, meten nauwkeurig in en leveren strak af.",
  },

  // ------------------ NIEUWE DIENSTEN ------------------

  {
    slug: "sloopwerk",
    title: "Sloopwerk",
    excerpt:
      "Vakkundig sloopwerk met oog voor veiligheid en nette afvoer. Ideaal voor renovatie en verbouwing.",
    img: "https://i.ibb.co/ycJLF4mp/092091021.jpg",
    bullets: [
      "Binnen- en buitensloop (wanden, vloeren, keukens, badkamers).",
      "Stofbeperkt werken met afscherming waar nodig.",
      "Afvoer van puin en bouwafval.",
      "Voorbereiding voor de volgende bouwfase.",
    ],
    images: [
      "https://i.ibb.co/ycJLF4mp/092091021.jpg",
      "https://i.ibb.co/rGWbsRmd/Afbeelding-van-Whats-App-op-2023-08-11-om-15-23-55-1920w-jpg.webp",
      "https://i.ibb.co/XrgHXXHX/d3304cc6-58ff-4283-847c-1fc541724f46.jpg",
      "https://i.ibb.co/35d1qFcx/IMG-1569-jpg.avif",
      "https://i.ibb.co/Gfq1ZxDr/metgroep-footer01.jpg",
      "https://i.ibb.co/zhpQ12YG/renovatiesloopwerkzaamheden-binnenshuis.jpg",
      "https://i.ibb.co/BDwYSGj/sloopbedrijf-in-rotterdam-jpg.webp",
    ],
    intro:
      "We slopen gecontroleerd en veilig. De werkplek wordt netjes achtergelaten en het afval voeren we volgens afspraak af.",
  },

  {
    slug: "raam-en-deurmontage",
    title: "Raam- en deurmontage",
    excerpt:
      "Vakkundige montage van ramen en deuren voor betere isolatie, veiligheid en een strakke afwerking.",
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Montage en afstelling van ramen en deuren.",
      "Goede kierdichting voor comfort en energiebesparing.",
      "Netjes aftimmeren en afwerken.",
      "Geschikt voor renovatie en nieuwbouw.",
    ],
    images: [],
  },

  {
    slug: "keukenmontage",
    title: "Keukenmontage",
    excerpt:
      "Professionele keukenmontage: kasten plaatsen, stellen en een strakke, nette oplevering.",
    img: "https://images.unsplash.com/photo-1556912167-f556f1f39df1?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Monteren en stellen van keukenkasten.",
      "Uitsparingen en maatwerk waar nodig.",
      "Aansluiten van apparatuur (in overleg).",
      "Netjes afgewerkt en klaar voor gebruik.",
    ],
    images: [],
  },

  {
    slug: "tuinmuur-en-hekwerk",
    title: "Tuinmuur en hekwerk",
    excerpt:
      "Stevige tuinmuren en hekwerk voor veiligheid, privacy en een nette uitstraling.",
    img: "https://images.unsplash.com/photo-1595433707802-3c92bda4f7a4?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Metselen of plaatsen van tuinmuur.",
      "Plaatsen van hekwerk en poorten.",
      "Duurzame materialen en stevige montage.",
      "Strakke lijnen en nette afwerking.",
    ],
    images: [],
  },

  {
    slug: "op-maat-kastbouwen",
    title: "Op maat kastbouwen",
    excerpt:
      "Maatwerk kasten die perfect passen: strak ontwerp, slimme indeling en duurzame afwerking.",
    img: "https://images.unsplash.com/photo-1598300053545-d2b42bba0b88?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Inbouwkasten, garderobekasten en tv-meubels.",
      "Slimme indeling en maximale benutting van ruimte.",
      "Netjes gemonteerd en strak afgewerkt.",
      "Materiaal- en afwerkingsadvies mogelijk.",
    ],
    images: [],
  },

  {
    slug: "loodgieterij",
    title: "Loodgieterij",
    excerpt:
      "Betrouwbaar loodgieterswerk: leidingwerk, sanitair en afvoer. Netjes en volgens afspraak.",
    img: "https://i.ibb.co/x88Q4CpM/hoofd-Loodgieterij.jpg",
    bullets: [
      "Leidingwerk voor water en afvoer.",
      "Sanitair aansluiten en vervangen.",
      "Lekreparaties en onderhoud.",
      "Netjes gewerkt en duidelijk overleg.",
    ],
    images: [
      "https://i.ibb.co/1fH1Gh1Z/image.jpg",
      "https://i.ibb.co/hxh30yG7/2.jpg",
      "https://i.ibb.co/yc98WLcD/3.jpg",
      "https://i.ibb.co/PyF19Sr/4.jpg",
      "https://i.ibb.co/x88Q4CpM/hoofd-Loodgieterij.jpg"
    ],
  },

  {
    slug: "elektriciteit",
    title: "Elektriciteit",
    excerpt:
      "Veilige en nette elektrische werkzaamheden: stopcontacten, verlichting en aanpassingen in huis.",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Aanleggen en verplaatsen van stopcontacten en schakelaars.",
      "Verlichting plaatsen (binnen/buiten).",
      "Netjes wegwerken van kabels en goten.",
      "Veilig werken en duidelijke afspraken.",
    ],
    images: [],
  },

  {
    slug: "traprenovatie",
    title: "Traprenovatie",
    excerpt:
      "Geef je trap een nieuwe uitstraling met een duurzame en strakke renovatie.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Overzettreden of nieuwe bekleding mogelijk.",
      "Strakke afwerking en duurzame materialen.",
      "Snel uitgevoerd met minimale overlast.",
      "Moderne uitstraling passend bij je interieur.",
    ],
    images: [
      "https://i.ibb.co/j9D7dVNk/2.jpg",
      "https://i.ibb.co/mV03bNvh/Chique-hal-Den-Breejen-Interieur.jpg",
      "https://i.ibb.co/DHRdyjpJ/Hallway-Black-white-wood.jpg",
      "https://i.ibb.co/9M5YVQK/hoofd-Traprenovatie.jpg",
      "https://i.ibb.co/FLnCHtNR/Opentrap.jpg",
      "https://i.ibb.co/CKS9jpcP/Trap-gestoffeerd-met-Cunera-Schaft-sisal-tapijt-in-visgraat.jpg",
      "https://i.ibb.co/Z1JxMmxf/Traprenovatie-met-PVC-trapbekleding-Vloeren-Trappen.jpg",],
  },

  {
    slug: "metselwerk",
    title: "Metselwerk",
    excerpt:
      "Professioneel metselwerk voor binnen en buiten: nieuw, herstel of aanpassingen.",
    img: "https://i.ibb.co/WvR12F9S/hoofd-metselwerk.webp",
    bullets: [
      "Nieuw metselwerk en herstelwerk.",
      "Strakke voegen en nette afwerking.",
      "Sterke en duurzame constructies.",
      "Voor renovatie, aanbouw en tuinwerk.",
    ],
    images: [
      "https://i.ibb.co/b56gqW7T/Blokverband-metselwerk.jpg",
       "https://i.ibb.co/WvR12F9S/hoofd-metselwerk.webp",
       "https://i.ibb.co/8SkcPR4/Metselwerk-rond-raam.jpg",
       "https://i.ibb.co/HLfxJcxg/Moderne-jaren-30-woning.jpg",
       "https://i.ibb.co/Rp3YX4hB/Moderne-tweewoonst-B-B.jpg",
       "https://i.ibb.co/KBmpgk7/Mossoux-Architecten.jpg",
    ],
  },
];
