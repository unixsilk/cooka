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
  },
  {
    id: "7",
    title: {
      de: "Zucchetti-Speck-Tartelettes mit Ei",
      tr: "Yumurta ile kabaklı pastırmalı tarteletler",
      sq: "Tarteletta me kungulleshkë, proshutë dhe vezë"
    },
    summary: {
      de: "Mit Salat als kleine Mahlzeit oder als Party-Fingerfood erfreuen die Tartelettes mit Zucchetti, Speck und Ei nicht nur den Gaumen, sondern auch das Auge.",
      tr: "Salatayla küçük bir öğün ya da parti fingerfood olarak, kabak, pastırma ve yumurtalı tarteletler hem göze hem damağa hitap eder.",
      sq: "Me sallatë si vakt i lehtë ose fingerfood për festa, tartelettat me kungulleshkë, proshutë dhe vezë kënaqin si shijen ashtu edhe syrin."
    },
    persons: 8,
    time_min: 85,
    meal_type: "main_dish",
    cuisine: ["swiss"],
    diet: ["omnivore"],
    time_bucket: "over_60",
    difficulty: "medium",
    occasion: ["guests"],
    season: ["spring", "summer"],
    ingredients_core: [
      "zucchini",
      "bacon",
      "eggs",
      "cream",
      "salt",
      "pepper",
      "butter",
      "flour",
      "water",
      "boiled_eggs"
    ],
    ingredients_structured: [
      { item: "Zucchetti", quantity: 500, unit: "g", note: "klein", optional: false },
      { item: "Bratspecktranchen", quantity: 200, unit: "g", note: "", optional: false },
      { item: "Eier", quantity: 3, unit: "piece", note: "", optional: false },
      { item: "Halbrahm", quantity: 2, unit: "dl", note: "", optional: false },
      { item: "Salz", quantity: null, unit: null, note: "", optional: true },
      { item: "Pfeffer", quantity: null, unit: null, note: "", optional: true },
      { item: "Gekochte Eier", quantity: 4, unit: "piece", note: "", optional: false },
      { item: "Butter", quantity: 50, unit: "g", note: "kalt", optional: false },
      { item: "Halbweissmehl", quantity: 250, unit: "g", note: "", optional: false },
      { item: "Ei", quantity: 1, unit: "piece", note: "", optional: false },
      { item: "Wasser", quantity: 0.5, unit: "dl", note: "", optional: false },
      { item: "Salz", quantity: 0.5, unit: "tsp", note: "", optional: false }
    ],
    categories: ["main_dish", "fingerfood", "baking"],
    ingredients: {
      de: [
        "Für 8 Förmchen à ca. 11 cm Ø",
        "500 g kleine Zucchetti",
        "Butter und Mehl für die Förmchen",
        "200 g Bratspecktranchen",
        "3 Eier",
        "2 dl Halbrahm",
        "Salz",
        "Pfeffer",
        "4 gekochte Eier",
        "Teig:",
        "50 g Butter, kalt",
        "250 g Halbweissmehl",
        "1 Ei",
        "0,5 dl Wasser",
        "1/2 TL Salz"
      ],
      tr: [
        "8 kalıp (yaklaşık 11 cm) için",
        "500 g küçük kabak",
        "Kalıplar için tereyağı ve un",
        "200 g pastırma",
        "3 yumurta",
        "2 dl krema (yarım yağlı)",
        "Tuz",
        "Karabiber",
        "4 haşlanmış yumurta",
        "Hamur:",
        "50 g tereyağı, soğuk",
        "250 g beyaz un",
        "1 yumurta",
        "0,5 dl su",
        "1/2 TK tuz"
      ],
      sq: [
        "Për 8 forma (rreth 11 cm)",
        "500 g kungulleshkë të vogla",
        "Gjalpë dhe miell për format",
        "200 g proshutë",
        "3 vezë",
        "2 dl krem (gjysmë yndyre)",
        "Kripë",
        "Piper",
        "4 vezë të ziera",
        "Brumë:",
        "50 g gjalpë, i ftohtë",
        "250 g miell i bardhë",
        "1 vezë",
        "0,5 dl ujë",
        "1/2 lugë çaji kripë"
      ]
    },
    nutrition: {
      kcal: 420,
      protein_g: 18,
      carbs_g: 25,
      fat_g: 27
    },
    image_url: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=900&q=80",
    video_url: "https://www.youtube.com/watch?v=",
    steps: {
      de: [
        "Für den Teig Butter würfeln und mit Mehl verreiben. Ei, Wasser und Salz zugeben, rasch zu einem Teig formen und ca. 30 Minuten kühl stellen.",
        "Backofen auf 180 °C Ober-/Unterhitze vorheizen. Zucchetti längs in dünne Streifen hobeln.",
        "Förmchen buttern und mehlen. Teig in 8 Stücke teilen, zu Rondellen auswallen und in die Förmchen legen.",
        "Boden und Rand etwas andrücken, Zucchetti und Speck spiralförmig einsetzen.",
        "Eier und Rahm verquirlen, mit Salz und Pfeffer würzen.",
        "Je ca. 4 EL Guss in die Förmchen geben und ca. 35 Minuten backen.",
        "Tartelettes aus den Förmchen lösen, gekochte Eier halbieren, anrichten und servieren."
      ],
      tr: [
        "Hamur için tereyağını küp doğrayıp unla ovun. Yumurta, su ve tuzu ekleyip hızlıca hamur yapın, 30 dk soğutun.",
        "Fırını 180 °C alt‑üst ısıtın. Kabakları uzun ince şeritler halinde dilimleyin.",
        "Kalıpları yağlayıp unlayın. Hamuru 8 parçaya bölüp açın ve kalıplara yerleştirin.",
        "Tabanı ve kenarları bastırın, kabak ve pastırmayı spiral şekilde dizin.",
        "Yumurta ve kremayı çırpıp tuz‑karabiberle tatlandırın.",
        "Her kalıba yaklaşık 4 YK karışım dökün ve 35 dk pişirin.",
        "Tarteletleri çıkarın, haşlanmış yumurtaları ikiye bölüp servis edin."
      ],
      sq: [
        "Për brumin, prite gjalpin në kube dhe fërkoje me miellin. Shto vezën, ujin dhe kripën, formo shpejt brumin dhe ftohe 30 min.",
        "Ngroh furrën në 180 °C sipër/poshtë. Prij kungulleshkët në shirita të hollë.",
        "Lyji format me gjalpë dhe miell. Ndaje brumin në 8 pjesë, hape dhe vendose në forma.",
        "Shtyp lehtë bazën dhe anët, vendos kungulleshkat dhe proshutën në spiral.",
        "Rrih vezët me kremin dhe rregullo me kripë e piper.",
        "Hidhu rreth 4 lugë gjelle përzierje në çdo formë dhe piq për 35 min.",
        "Nxirr tartelettat, përgjysmo vezët e ziera dhe shërbe."
      ]
    },
    source_name: "MiGusto",
    source_url: "https://migusto.migros.ch/de/rezepte/zucchetti-speck-tartelettes-mit-ei"
  },
  {
    id: "8",
    title: {
      de: "TikTok Rezept",
      tr: "TikTok Tarifi",
      sq: "Recetë TikTok"
    },
    summary: {
      de: "TikTok-Video von @kookmutsjes.",
      tr: "@kookmutsjes TikTok videosu.",
      sq: "Video TikTok nga @kookmutsjes."
    },
    persons: 2,
    time_min: 15,
    meal_type: "snack",
    cuisine: ["international"],
    diet: ["omnivore"],
    time_bucket: "under_15",
    difficulty: "easy",
    occasion: ["everyday"],
    season: ["all_year"],
    ingredients_core: [],
    ingredients_structured: [],
    categories: ["snack"],
    ingredients: {
      de: [],
      tr: [],
      sq: []
    },
    nutrition: {
      kcal: 0,
      protein_g: 0,
      carbs_g: 0,
      fat_g: 0
    },
    image_url: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=900&q=80",
    video_url: "https://www.tiktok.com/@kookmutsjes/video/7597834018301791510",
    steps: {
      de: ["Siehe Video."],
      tr: ["Videoya bakın."],
      sq: ["Shih videon."]
    },
    source_name: "TikTok",
    source_url: "https://www.tiktok.com/@kookmutsjes/video/7597834018301791510"
  }
];
