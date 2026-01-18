// src/lib/services.ts

export type Service = {
  slug: string;

  // i18n keys (translate these via t() in components)
  titleKey: string;
  excerptKey: string;
  bulletsKeys: string[];
  introKey?: string;

  // media
  img: string; // hero/background image
  images: string[]; // gallery images
};

export const services: Service[] = [
  {
    slug: "laminaat-leggen",
    titleKey: "svc_title_laminaat",
    excerptKey: "svc_excerpt_laminaat",
    bulletsKeys: ["svc_b_laminaat_1", "svc_b_laminaat_2", "svc_b_laminaat_3", "svc_b_laminaat_4"],
    introKey: "svc_intro_laminaat",
    img: "https://i.ibb.co/jPvG1bZ1/laminaat-1.jpg",
    images: [
      "https://i.ibb.co/jPvG1bZ1/laminaat-1.jpg",
      "https://i.ibb.co/fV9nfn5r/laminaat-2.jpg",
      "https://i.ibb.co/LdZD4SzL/laminaat-4.jpg",
      "https://i.ibb.co/MkGqPZ5t/laminaat-5.jpg",
      "https://i.ibb.co/4gJBpwsN/laminaat-unsplash.jpg",
      "https://i.ibb.co/v4XRLXLX/laminnat-3.jpg",
    ],
  },

  {
    slug: "badkamer-renovatie",
    titleKey: "svc_title_badkamer",
    excerptKey: "svc_excerpt_badkamer",
    bulletsKeys: ["svc_b_badkamer_1", "svc_b_badkamer_2", "svc_b_badkamer_3", "svc_b_badkamer_4"],
    introKey: "svc_intro_badkamer",
    img: "https://i.ibb.co/8gsnQCkL/hoofd-Tegelwerk.jpg",
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

  // NOTE: slug kept to avoid breaking existing links
  {
    slug: "plavuizen-vloer",
    titleKey: "svc_title_gietvloer",
    excerptKey: "svc_excerpt_gietvloer",
    bulletsKeys: ["svc_b_gietvloer_1", "svc_b_gietvloer_2", "svc_b_gietvloer_3", "svc_b_gietvloer_4"],
    introKey: "svc_intro_gietvloer",
    img: "https://i.ibb.co/qFYnC3qh/gietvloer.jpg",
    images: [
      "https://i.ibb.co/HT7pzNvq/6516cebb816a4907c137d26e-IMG-1473-kopie.webp",
      "https://i.ibb.co/7Jz2Z9LY/epoxyvloeren.jpg",
      "https://i.ibb.co/ccYGQBjD/epoxyvloer-keuken-1024x768.jpg",
      "https://i.ibb.co/qFYnC3qh/gietvloer.jpg",
      "https://i.ibb.co/N6BMq8Dn/hoofd-Gietvloer.jpg",
      "https://i.ibb.co/dJ5640Wn/pu-gietvloer.jpg",
    ],
  },

  {
    slug: "schilder",
    titleKey: "svc_title_schilder",
    excerptKey: "svc_excerpt_schilder",
    bulletsKeys: ["svc_b_schilder_1", "svc_b_schilder_2", "svc_b_schilder_3", "svc_b_schilder_4"],
    img: "https://i.ibb.co/YTWmppVT/hoofd-Schilderwerk.jpg",
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
    titleKey: "svc_title_stukadoor",
    excerptKey: "svc_excerpt_stukadoor",
    bulletsKeys: ["svc_b_stukadoor_1", "svc_b_stukadoor_2", "svc_b_stukadoor_3", "svc_b_stukadoor_4"],
    img: "https://i.ibb.co/q2QRxrt/Hoofd-stucwerk.jpg",
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
    titleKey: "svc_title_tegelzetter",
    excerptKey: "svc_excerpt_tegelzetter",
    bulletsKeys: ["svc_b_tegelzetter_1", "svc_b_tegelzetter_2", "svc_b_tegelzetter_3", "svc_b_tegelzetter_4"],
    img: "https://i.ibb.co/3mpvnfG9/4.jpg",
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
    titleKey: "svc_title_vloerverwarming",
    excerptKey: "svc_excerpt_vloerverwarming",
    bulletsKeys: [
      "svc_b_vloerverwarming_1",
      "svc_b_vloerverwarming_2",
      "svc_b_vloerverwarming_3",
      "svc_b_vloerverwarming_4",
    ],
    img: "https://i.ibb.co/r8q6MkJ/Vario-Komp-droogbouw-vloerverwarming.jpg",
    images: ["https://i.ibb.co/7Jh5PTGX/7.jpg",
"https://i.ibb.co/fVj3zJNz/11.jpg",
"https://i.ibb.co/j9S9y5nX/Adobe-Stock-307645879-scaled.jpg",
"https://i.ibb.co/BKLwrkS0/c754861a-597b-4fdb-a986-6d3ba1bba73f.jpg",
"https://i.ibb.co/JwyNQpmT/download.jpg",
"https://i.ibb.co/Gvs1ydsF/hoe-werkt-vloerverwarming.jpg",
"https://i.ibb.co/ksLQ09kh/Infrezen-vloerverwarming-Fermacell.jpg",
"https://i.ibb.co/gFjjk17P/stofvrij-infrezen-e1747642097853.jpg",
"https://i.ibb.co/r8q6MkJ/Vario-Komp-droogbouw-vloerverwarming.jpg",
"https://i.ibb.co/cc4hgvry/Vloerverwarming-leggen.jpg",]
  },

  {
    slug: "wc-renovatie",
    titleKey: "svc_title_wc",
    excerptKey: "svc_excerpt_wc",
    bulletsKeys: ["svc_b_wc_1", "svc_b_wc_2", "svc_b_wc_3", "svc_b_wc_4"],
    img: "https://i.ibb.co/wrwwGcYS/Bathroom-Tile-Designs.jpg",
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
    titleKey: "svc_title_timmerwerk",
    excerptKey: "svc_excerpt_timmerwerk",
    bulletsKeys: ["svc_b_timmerwerk_1", "svc_b_timmerwerk_2", "svc_b_timmerwerk_3", "svc_b_timmerwerk_4"],
    introKey: "svc_intro_timmerwerk",
    img: "https://i.ibb.co/4g0wpcFn/hoofd-Timmerwerk-jpg.webp",
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

  // ------------------ NEW SERVICES (as keys) ------------------

  {
    slug: "sloopwerk",
    titleKey: "svc_title_sloopwerk",
    excerptKey: "svc_excerpt_sloopwerk",
    bulletsKeys: ["svc_b_sloopwerk_1", "svc_b_sloopwerk_2", "svc_b_sloopwerk_3", "svc_b_sloopwerk_4"],
    introKey: "svc_intro_sloopwerk",
    img: "https://i.ibb.co/ycJLF4mp/092091021.jpg",
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
    slug: "raam-en-deurmontage",
    titleKey: "svc_title_raam_deur",
    excerptKey: "svc_excerpt_raam_deur",
    bulletsKeys: ["svc_b_raam_deur_1", "svc_b_raam_deur_2", "svc_b_raam_deur_3", "svc_b_raam_deur_4"],
    img: "https://i.ibb.co/CN8Dtqw/hoofd-raam-en-deurmontage.jpg",
    images: [

      "https://i.ibb.co/sxQpwd2/0j88k6ddqb8b1.jpg",
"https://i.ibb.co/CsSMJZZB/111459.jpg",
"https://i.ibb.co/35QfxSx9/111461.jpg",
"https://i.ibb.co/JFxhvZq0/233740.jpg",
"https://i.ibb.co/gZF55Ygb/deuren-voordeuren-2.jpg",
"https://i.ibb.co/0RWsScN6/ey-Jid-WNr-ZXQi-Oi-Ji-ZW5pd-GVja-C0y-MDIz-Iiwia2-V5-Ijoib-WVka-WEv-UHJv-ZHVjd-GVu-L09w-ZW5zb-GFhbm-Rl.png",
"https://i.ibb.co/Zp0211Sn/Foto-1-Dictator-0001-1024x683.jpg",
"https://i.ibb.co/jk0QqxMc/holzhaustuer-01.jpg",
"https://i.ibb.co/CN8Dtqw/hoofd-raam-en-deurmontage.jpg",
"https://i.ibb.co/Fk0YGDNJ/Openslaande-deuren-tuin-zijlichten-kunststof-1024x768.jpg",
    ],
  },

  {
    slug: "keukenmontage",
    titleKey: "svc_title_keuken",
    excerptKey: "svc_excerpt_keuken",
    bulletsKeys: ["svc_b_keuken_1", "svc_b_keuken_2", "svc_b_keuken_3", "svc_b_keuken_4"],
    img: "https://i.ibb.co/qLF2gn1x/download-5.jpg",
    images: [

      "https://i.ibb.co/jknLm85R/download-1.jpg",
"https://i.ibb.co/vxsQxqqJ/download-2.jpg",
"https://i.ibb.co/whC7w7jN/download-3.jpg",
"https://i.ibb.co/rGRz6XCp/download-4.jpg",
"https://i.ibb.co/qLF2gn1x/download-5.jpg",
"https://i.ibb.co/bg6PNd6j/download.jpg",
    ],
  },

  {
    slug: "tuinmuur-en-hekwerk",
    titleKey: "svc_title_tuinmuur",
    excerptKey: "svc_excerpt_tuinmuur",
    bulletsKeys: ["svc_b_tuinmuur_1", "svc_b_tuinmuur_2", "svc_b_tuinmuur_3", "svc_b_tuinmuur_4"],
    img: "https://i.ibb.co/wZS6Fxmm/download-3.jpg",
    images: [

"https://i.ibb.co/LdPPxLq3/Berton-paal-IJssel-antraciet-eindmodel-308-Tuindeco.jpg",
"https://i.ibb.co/99Lc5Y12/download-1.jpg",
"https://i.ibb.co/tPK1J3Ny/download-2.jpg",
"https://i.ibb.co/wZS6Fxmm/download-3.jpg",
"https://i.ibb.co/FvkMSWs/download-4.jpg",
"https://i.ibb.co/XrChpZYC/download.jpg",
"https://i.ibb.co/JRsxjs5n/Elemes-betonker-t-s-otthonfel-j-t-si-t-mogat-ssal.jpg",
"https://i.ibb.co/k2gQhb04/Ook-in-Balk-hebben-we-verschillende-beton-schuttingen-neergezet-Dit-is-een-voorbeeld-van-een-betons.jpg",
"https://i.ibb.co/tw1jpq79/Realisaties.jpg",
"https://i.ibb.co/Kc5SnQLb/Rustique.jpg",
    ],
  },

  {
    slug: "op-maat-kastbouwen",
    titleKey: "svc_title_kasten",
    excerptKey: "svc_excerpt_kasten",
    bulletsKeys: ["svc_b_kasten_1", "svc_b_kasten_2", "svc_b_kasten_3", "svc_b_kasten_4"],
    img: "https://i.ibb.co/wrdQ9nnf/Hoofd-Op-maat-kastbouwen-jpg.webp",
    images: [
      "https://i.ibb.co/tPmbGhXk/64da34c8c30f30ecaee11e63-schuifdeurkast-op-maat-gemaakt.jpg",
"https://i.ibb.co/wrdQ9nnf/Hoofd-Op-maat-kastbouwen-jpg.webp",
"https://i.ibb.co/K4vVtNZ/image-php.jpg",
"https://i.ibb.co/ZRhnCDzL/inbouwkast-met-schuifdeuren-q3zoe4kmr050o27o9g9s4bp49nhdhpyxvid1q4j4w8.png",
"https://i.ibb.co/NgDKdTxM/kasten-op-maat.webp",
"https://i.ibb.co/FbNTNTjV/kasten-op-maat-laten-maken.jpg",
"https://i.ibb.co/pB65nbB2/Kast-op-maat-laten-maken-2.jpg",
"https://i.ibb.co/0k9SDs3/kledingkast-op-zolder-onder-een-schuin-dak.jpg",
"https://i.ibb.co/JWn1QntW/large-spuitwerk-kast-landelijke-hoekkast-4b5f0cf930.webp",
"https://i.ibb.co/bMpSz5wY/moebel-planen-schrank-flur-weiss-buttler-korr-hq.jpg",
"https://i.ibb.co/dJcLXZkb/zwarte-paneel-schuifdeuren-op-maat-webp.jpg",
    ],
  },

  {
    slug: "loodgieterij",
    titleKey: "svc_title_loodgieterij",
    excerptKey: "svc_excerpt_loodgieterij",
    bulletsKeys: ["svc_b_loodgieterij_1", "svc_b_loodgieterij_2", "svc_b_loodgieterij_3", "svc_b_loodgieterij_4"],
    img: "https://i.ibb.co/x88Q4CpM/hoofd-Loodgieterij.jpg",
    images: [
      "https://i.ibb.co/1fH1Gh1Z/image.jpg",
      "https://i.ibb.co/hxh30yG7/2.jpg",
      "https://i.ibb.co/yc98WLcD/3.jpg",
      "https://i.ibb.co/PyF19Sr/4.jpg",
      "https://i.ibb.co/x88Q4CpM/hoofd-Loodgieterij.jpg",
    ],
  },

  {
    slug: "elektriciteit",
    titleKey: "svc_title_elektriciteit",
    excerptKey: "svc_excerpt_elektriciteit",
    bulletsKeys: ["svc_b_elektriciteit_1", "svc_b_elektriciteit_2", "svc_b_elektriciteit_3", "svc_b_elektriciteit_4"],
    img: "https://i.ibb.co/HDKyy9TK/hoofd-Elektriciteit.jpg",
    images: [
      "https://i.ibb.co/TD41zGzB/image.jpg",
      "https://i.ibb.co/Nnx39t83/2.jpg",
      "https://i.ibb.co/XrJ9mc8h/3.jpg",
      "https://i.ibb.co/99Lfc2q4/4.jpg",
      "https://i.ibb.co/yBh53tTH/depositphotos-22834592-stock-photo-hand-of-an-electrician.webp",
      "https://i.ibb.co/ksJv0tPD/depositphotos-272301270-stock-photo-hands-of-an-electrician-electrician.webp",
      "https://i.ibb.co/HDKyy9TK/hoofd-Elektriciteit.jpg",
      "https://i.ibb.co/0yZ5zCVz/Veilig-werken-met-elektriciteit-Stratt-01.jpg",
      "https://i.ibb.co/8DSvJB5m/Zelf-elektriciteit-leggen-klus-vol-vertrouwen-met-hulp-van-experts.jpg",
      "https://i.ibb.co/SXW9Gkgr/zelf-elektriciteit-plaatsen.jpg",
    ]
  },

  {
    slug: "traprenovatie",
    titleKey: "svc_title_trap",
    excerptKey: "svc_excerpt_trap",
    bulletsKeys: ["svc_b_trap_1", "svc_b_trap_2", "svc_b_trap_3", "svc_b_trap_4"],
    img: "https://i.ibb.co/9M5YVQK/hoofd-Traprenovatie.jpg",
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
    slug: "metselwerk",
    titleKey: "svc_title_metselwerk",
    excerptKey: "svc_excerpt_metselwerk",
    bulletsKeys: ["svc_b_metselwerk_1", "svc_b_metselwerk_2", "svc_b_metselwerk_3", "svc_b_metselwerk_4"],
    img: "https://i.ibb.co/WvR12F9S/hoofd-metselwerk.webp",
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
