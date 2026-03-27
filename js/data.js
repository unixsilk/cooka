const DEMO_RECIPES = [
  {
    id: "1",
    title: {
      de: "Tomaten-Knoblauch-Pasta",
      tr: "Domatesli Sarımsaklı Makarna",
      sq: "Makarona me Domate dhe Hudhër"
    },
    summary: {
      de: "Eine schnelle Feierabend-Pasta mit Tomaten, Knoblauch und Olivenöl.",
      tr: "Domates, sarımsak ve zeytinyağı ile hızlı bir akşam yemeği.",
      sq: "Makarona e shpejtë me domate, hudhër dhe vaj ulliri."
    },
    persons: 2,
    rating: 4.6,
    time_min: 20,
    categories: ["vegetarian", "main_dish"],
    ingredients: {
      de: ["250 g Pasta", "2 Knoblauchzehen", "300 g Tomaten", "2 EL Olivenöl", "Salz, Pfeffer"],
      tr: ["250 g makarna", "2 diş sarımsak", "300 g domates", "2 YK zeytinyağı", "Tuz, karabiber"],
      sq: ["250 g makarona", "2 thelpinj hudhre", "300 g domate", "2 lugë gjelle vaj ulliri", "Kripë, piper"]
    },
    nutrition: {
      kcal: 520,
      protein_g: 16,
      carbs_g: 72,
      fat_g: 18
    },
    image_url: "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8c91?auto=format&fit=crop&w=900&q=80",
    steps: {
      de: [
        "Pasta al dente kochen.",
        "Knoblauch in Olivenöl anbraten, Tomaten und Salz zugeben.",
        "Pasta mit der Sauce mischen und mit Kräutern abschließen."
      ],
      tr: [
        "Makarnayı diri kıvamda haşlayın.",
        "Sarımsağı zeytinyağında çevirin, domates ve tuz ekleyin.",
        "Makarnayı sosla karıştırıp otlarla bitirin."
      ],
      sq: [
        "Zieni makaronat al dente.",
        "Skuq hudhrën në vaj ulliri, shto domatet dhe kripën.",
        "Përziej makaronat me salcën dhe mbylle me erëza."
      ]
    }
  },
  {
    id: "2",
    title: {
      de: "Blechhähnchen",
      tr: "Fırın Tepsi Tavuk",
      sq: "Pulë në Tepsi"
    },
    summary: {
      de: "Ein Blech, knusprige Haut und geröstetes Gemüse.",
      tr: "Tek tepsi, çıtır deri ve fırınlanmış sebzeler.",
      sq: "Një tepsi, lëkurë krokante dhe perime të pjekura."
    },
    persons: 4,
    rating: 4.8,
    time_min: 35,
    categories: ["main_dish"],
    ingredients: {
      de: ["4 Hähnchenschenkel", "1 Paprika", "1 Zucchini", "2 EL Öl", "Gewürze"],
      tr: ["4 tavuk but", "1 biber", "1 kabak", "2 YK yağ", "Baharatlar"],
      sq: ["4 kofsha pule", "1 spec", "1 kungull", "2 lugë gjelle vaj", "Erëza"]
    },
    nutrition: {
      kcal: 610,
      protein_g: 38,
      carbs_g: 12,
      fat_g: 44
    },
    image_url: "https://images.unsplash.com/photo-1516685018646-549d1933063b?auto=format&fit=crop&w=900&q=80",
    steps: {
      de: [
        "Hähnchen und Gemüse würzen.",
        "Bei 220C 30-35 Minuten rösten.",
        "Hähnchen ruhen lassen und mit Bratensaft servieren."
      ],
      tr: [
        "Tavuk ve sebzeleri baharatlayın.",
        "220C'de 30-35 dakika pişirin.",
        "Tavuğu dinlendirip tepsi suyuyla servis edin."
      ],
      sq: [
        "Erëzo pulën dhe perimet.",
        "Piqe në 220C për 30-35 minuta.",
        "Lëre pulën të pushojë dhe shërbe me lëngun e tepsisë."
      ]
    }
  },
  {
    id: "3",
    title: {
      de: "Einfache Linsensuppe",
      tr: "Basit Mercimek Çorbası",
      sq: "Supë e Thjeshtë Me Thjerrëza"
    },
    summary: {
      de: "Wärmend, sättigend und ideal für Reste.",
      tr: "Sıcak, doyurucu ve ertesi güne uygun.",
      sq: "Ngrohëse, e ngopshme dhe ideale për të nesërmen."
    },
    persons: 4,
    rating: 4.4,
    time_min: 40,
    categories: ["vegetarian", "main_dish"],
    ingredients: {
      de: ["200 g Linsen", "1 Zwiebel", "2 Karotten", "1 Selleriestange", "Brühe"],
      tr: ["200 g mercimek", "1 soğan", "2 havuç", "1 sap kereviz", "Et suyu"],
      sq: ["200 g thjerrëza", "1 qepë", "2 karota", "1 kërcell selino", "Lëng perimesh"]
    },
    nutrition: {
      kcal: 420,
      protein_g: 22,
      carbs_g: 58,
      fat_g: 10
    },
    image_url: "https://images.unsplash.com/photo-1543352634-4f690a3bcb55?auto=format&fit=crop&w=900&q=80",
    steps: {
      de: [
        "Zwiebeln, Karotten und Sellerie anschwitzen.",
        "Linsen, Brühe und Gewürze zugeben.",
        "Köcheln lassen und mit Zitrone abschließen."
      ],
      tr: [
        "Soğan, havuç ve kerevizi soteleyin.",
        "Mercimek, et suyu ve baharatları ekleyin.",
        "Yumuşayana kadar pişirin, limonla bitirin."
      ],
      sq: [
        "Kaurdis qepën, karotat dhe selinon.",
        "Shto thjerrëzat, lëngun dhe erëzat.",
        "Ziej deri sa të zbuten, përfundo me limon."
      ]
    }
  },
  {
    id: "4",
    title: {
      de: "Frischer Minztee",
      tr: "Taze Naneli Çay",
      sq: "Çaj i Freskët me Nenexhik"
    },
    summary: {
      de: "Heiß oder kalt, super einfach.",
      tr: "Sıcak ya da soğuk, çok kolay.",
      sq: "I nxehtë ose i ftohtë, shumë i thjeshtë."
    },
    persons: 2,
    rating: 4.2,
    time_min: 10,
    categories: ["drink", "vegetarian"],
    ingredients: {
      de: ["1 Bund Minze", "500 ml Wasser", "1-2 TL Honig"],
      tr: ["1 demet nane", "500 ml su", "1-2 TK bal"],
      sq: ["1 tufë nenexhik", "500 ml ujë", "1-2 lugë çaji mjaltë"]
    },
    nutrition: {
      kcal: 35,
      protein_g: 0,
      carbs_g: 8,
      fat_g: 0
    },
    image_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    steps: {
      de: ["Wasser aufkochen.", "Minze ziehen lassen.", "Mit Honig süßen."],
      tr: ["Suyu kaynatın.", "Naneyi demleyin.", "Balla tatlandırın."],
      sq: ["Ziej ujin.", "Lëre nenexhikun të ziejë.", "Ëmbëlso me mjaltë."]
    }
  },
  {
    id: "5",
    title: {
      de: "Risi e bisi (Erbsen-Risotto)",
      tr: "Risi e bisi (Bezelyeli risotto)",
      sq: "Risi e bisi (Risoto me bizele)"
    },
    summary: {
      de: "Italienischer Klassiker mit Erbsen, Risottoreis, Speck und Sbrinz.",
      tr: "Bezelye, risotto pirinci, pastırma ve Sbrinz ile İtalyan klasiği.",
      sq: "Klasik italian me bizele, oriz risoto, proshutë dhe Sbrinz."
    },
    persons: 4,
    time_min: 30,
    categories: ["main_dish"],
    ingredients: {
      de: [
        "1 Frühlingszwiebel",
        "60 g Speckwürfeli",
        "7 dl Gemüsebouillon",
        "150 g Risotto-Reis",
        "150 g tiefgekühlte Erbsen (aufgetaut)",
        "1½ EL Butter",
        "2 EL Mandelscheiben",
        "30 g geriebener Sbrinz",
        "Salz, Pfeffer"
      ],
      tr: [
        "1 taze soğan",
        "60 g küp pastırma",
        "7 dl sebze suyu",
        "150 g risotto pirinci",
        "150 g dondurulmuş bezelye (çözdürülmüş)",
        "1,5 YK tereyağı",
        "2 YK badem dilimleri",
        "30 g rendelenmiş Sbrinz",
        "Tuz, karabiber"
      ],
      sq: [
        "1 qepë e njomë",
        "60 g proshutë në kubikë",
        "7 dl lëng perimesh",
        "150 g oriz risoto",
        "150 g bizele të ngrira (të shkrira)",
        "1,5 lugë gjelle gjalpë",
        "2 lugë gjelle bajame fleta",
        "30 g Sbrinz i grirë",
        "Kripë, piper"
      ]
    },
    nutrition: {
      kcal: 660,
      protein_g: 24,
      carbs_g: 71,
      fat_g: 30
    },
    source_name: "MiGusto",
    source_url: "https://migusto.migros.ch/de/rezepte/risi-e-bisi",
    image_url: "https://recipeimages.migros.ch/crop/v-w-1600-h-1200-a-center_center/023406296212b98b3506b8e93e49a7c03cf4ea43/risi-e-bisi-0-4-3.jpg",
    steps: {
      de: [
        "Frühlingszwiebel fein hacken.",
        "Speck anbraten, Zwiebel kurz mitdünsten.",
        "Mit Bouillon ablöschen, Reis zugeben und bei kleiner Hitze ca. 20 Minuten garen; kurz vor Schluss Erbsen einrühren.",
        "Butter portionsweise einarbeiten.",
        "Mandeln ohne Fett rösten, mit Sbrinz, Salz und Pfeffer abschmecken und darüberstreuen."
      ],
      tr: [
        "Taze soğanı ince doğrayın.",
        "Pastırmayı kavurun, soğanı kısa süre soteleyin.",
        "Sebze suyunu ekleyin, pirinci katıp kısık ateşte yaklaşık 20 dakika pişirin; son dakikalarda bezelyeyi ekleyin.",
        "Tereyağını azar azar yedirin.",
        "Bademleri yağsız kavurun, Sbrinz, tuz ve karabiberle tatlandırıp üzerine serpin."
      ],
      sq: [
        "Grije imët qepën e njomë.",
        "Skuq proshutën dhe kaurdis shkurt qepën.",
        "Shto lëngun e perimeve, orizin dhe gatuaj në zjarr të ulët rreth 20 minuta; në fund shto bizelet.",
        "Shto gjalpin pak nga pak.",
        "Piq bajamet pa vaj, rregullo me Sbrinz, kripë dhe piper dhe spërkat sipër."
      ]
    }
  },
  {
    id: "6",
    title: {
      de: "Erdbeer-Trifle",
      tr: "Çilekli Trifle",
      sq: "Trifle me Luleshtrydhe"
    },
    summary: {
      de: "Schichtdessert im Glas mit Erdbeeren, Burrata-Quark-Creme und Cantucci.",
      tr: "Bardakta katmanlı tatlı: çilek, burrata‑lor kreması ve cantucci.",
      sq: "Ëmbëlsirë me shtresa në gotë: luleshtrydhe, krem burrata‑gjizë dhe cantucci."
    },
    persons: 6,
    time_min: 30,
    categories: ["dessert", "vegetarian"],
    ingredients: {
      de: [
        "500 g Erdbeeren",
        "1 Burrata (125 g)",
        "250 g Magerquark",
        "200 g Crème fraîche",
        "1 Vanilleschote",
        "40 g Puderzucker",
        "2 dl Rahm",
        "150 g Cantucci mit Mandeln"
      ],
      tr: [
        "500 g çilek",
        "1 burrata (125 g)",
        "250 g lor peyniri",
        "200 g crème fraîche",
        "1 vanilya çubuğu",
        "40 g pudra şekeri",
        "2 dl krema",
        "150 g bademli cantucci"
      ],
      sq: [
        "500 g luleshtrydhe",
        "1 burrata (125 g)",
        "250 g gjizë e lehtë",
        "200 g crème fraîche",
        "1 bisht vaniljeje",
        "40 g sheqer pluhur",
        "2 dl krem",
        "150 g cantucci me bajame"
      ]
    },
    nutrition: {
      kcal: 470,
      protein_g: 11,
      carbs_g: 32,
      fat_g: 33
    },
    image_url: "https://recipeimages.migros.ch/crop/v-w-530-h-398-a-center_center/4795adfde69e3b5ec55d80d190bd554390623b5a/erdbeer-trifle-0-4-3.jpg",
    steps: {
      de: [
        "Einige Erdbeeren mit Grün beiseitelegen, restliche Erdbeeren vierteln.",
        "Burrata halbieren, den cremigen Kern herauslösen. Hülle fein hacken und mit Quark und Crème fraîche verrühren.",
        "Vanillemark auskratzen, mit Puderzucker unter die Creme rühren. Rahm steif schlagen und unterheben.",
        "Cantucci grob hacken.",
        "Erdbeeren, Creme und Cantucci schichtweise in Gläser füllen und mit den beiseitegelegten Erdbeeren dekorieren."
      ],
      tr: [
        "Biraz çileği sapıyla ayırın, kalanları dörde bölün.",
        "Burratayı ikiye kesin, kremalı içi çıkarın. Kabuğu ince doğrayıp lor ve crème fraîche ile karıştırın.",
        "Vanilyayı çıkarıp pudra şekeriyle kremaya karıştırın. Kremayı çırpıp yedirin.",
        "Cantucci’yi iri doğrayın.",
        "Çilek, krema ve cantucci’yi bardaklara katmanlayın, ayırdığınız çileklerle süsleyin."
      ],
      sq: [
        "Disa luleshtrydhe me bisht lëri mënjanë, të tjerat ndaj në katër.",
        "Prit burratën përgjysmë, nxirr zemrën kremoze. Lëvoren grije imët dhe përzieje me gjizë dhe crème fraîche.",
        "Nxirr vaniljen, përzieje me sheqer pluhur në krem. Rrih kremin dhe përzieje lehtë.",
        "Cantucci-t i grijmë trashë.",
        "Shtrijo luleshtrydhe, krem dhe cantucci në gota dhe dekoro me luleshtrydhet e lëna mënjanë."
      ]
    },
    source_name: "MiGusto",
    source_url: "https://migusto.migros.ch/de/rezepte/erdbeer-trifle"
  }
];
