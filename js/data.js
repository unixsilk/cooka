const DEMO_RECIPES = [
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
    meal_type: "drink",
    cuisine: ["international"],
    diet: ["vegetarian"],
    time_bucket: "under_15",
    difficulty: "easy",
    occasion: ["everyday"],
    season: ["all_year"],
    ingredients_core: ["mint", "water", "honey"],
    ingredients_structured: [
      { item: "Minze", quantity: 1, unit: "bundle", note: "", optional: false },
      { item: "Wasser", quantity: 500, unit: "ml", note: "", optional: false },
      { item: "Honig", quantity: 1.5, unit: "tsp", note: "1-2 TL", optional: true }
    ],
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
    meal_type: "main_dish",
    cuisine: ["italian"],
    diet: ["omnivore"],
    time_bucket: "under_30",
    difficulty: "medium",
    occasion: ["family"],
    season: ["all_year"],
    ingredients_core: [
      "spring_onion",
      "bacon",
      "vegetable_broth",
      "risotto_rice",
      "peas",
      "butter",
      "almonds",
      "sbrinz",
      "salt",
      "pepper"
    ],
    ingredients_structured: [
      { item: "Frühlingszwiebel", quantity: 1, unit: "piece", note: "", optional: false },
      { item: "Speckwürfeli", quantity: 60, unit: "g", note: "", optional: false },
      { item: "Gemüsebouillon", quantity: 7, unit: "dl", note: "", optional: false },
      { item: "Risotto-Reis", quantity: 150, unit: "g", note: "", optional: false },
      { item: "Erbsen (aufgetaut)", quantity: 150, unit: "g", note: "", optional: false },
      { item: "Butter", quantity: 1.5, unit: "tbsp", note: "", optional: false },
      { item: "Mandelscheiben", quantity: 2, unit: "tbsp", note: "", optional: false },
      { item: "Sbrinz", quantity: 30, unit: "g", note: "gerieben", optional: false },
      { item: "Salz", quantity: null, unit: null, note: "", optional: true },
      { item: "Pfeffer", quantity: null, unit: null, note: "", optional: true }
    ],
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
    meal_type: "dessert",
    cuisine: ["international"],
    diet: ["vegetarian"],
    time_bucket: "under_30",
    difficulty: "medium",
    occasion: ["guests"],
    season: ["spring", "summer"],
    ingredients_core: [
      "strawberries",
      "burrata",
      "quark",
      "creme_fraiche",
      "vanilla",
      "powdered_sugar",
      "cream",
      "cantucci"
    ],
    ingredients_structured: [
      { item: "Erdbeeren", quantity: 500, unit: "g", note: "", optional: false },
      { item: "Burrata", quantity: 1, unit: "piece", note: "125 g", optional: false },
      { item: "Magerquark", quantity: 250, unit: "g", note: "", optional: false },
      { item: "Crème fraîche", quantity: 200, unit: "g", note: "", optional: false },
      { item: "Vanilleschote", quantity: 1, unit: "piece", note: "", optional: false },
      { item: "Puderzucker", quantity: 40, unit: "g", note: "", optional: false },
      { item: "Rahm", quantity: 2, unit: "dl", note: "", optional: false },
      { item: "Cantucci mit Mandeln", quantity: 150, unit: "g", note: "", optional: false }
    ],
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
