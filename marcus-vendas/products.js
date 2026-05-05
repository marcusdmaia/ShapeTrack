const STORE_PRODUCTS = [
    // 🔥 COMBOS PARA EMAGRECIMENTO E CONTROLE DE PESO (23% OFF)
    { 
        id: 101, sku: "COMBO-START", name: "Combo Start (O Básico que Funciona)", category: "combos-emagrecimento", 
        desc: "Dê o primeiro passo para a sua melhor versão sem complicação! Perfeito para quem tem uma rotina corrida e quer iniciar a perda de peso com praticidade. Shake (550g) + Chá Termogênico (51g).", 
        priceDe: 468.0, pricePor: 360.36, isCombo: true,
        flavors: ["Escolha os sabores no checkout"],
        image: "assets/shake.png" 
    },
    { 
        id: 102, sku: "COMBO-SECA", name: "Combo Seca Barriga (Aceleração e Limpeza)", category: "combos-emagrecimento", 
        desc: "O segredo para afinar a silhueta não é passar fome, é nutrir o corpo e limpar o intestino! Shake + NutreV + Chá (51g) + Fibras Líquidas (Fiber Concentrate).", 
        priceDe: 753.0, pricePor: 579.81, isCombo: true,
        flavors: ["Escolha os sabores no checkout"],
        image: "assets/fiber.png"
    },
    { 
        id: 103, sku: "COMBO-T30", name: "Combo Transformação Definitiva (T30 Premium)", category: "combos-emagrecimento", 
        desc: "O arsenal completo para quem decidiu mudar de corpo e de vida! 30 dias de foco total: 2 Shakes + 2 NutreV + Chá (102g) + Shape Control (Morosil).", 
        priceDe: 1352.0, pricePor: 1041.04, isCombo: true,
        flavors: ["Escolha os sabores no checkout"],
        image: "assets/shapecontrol.png"
    },

    // 💪 COMBOS PARA GANHO DE MASSA MAGRA (HIPERTROFIA) (23% OFF)
    { 
        id: 104, sku: "COMBO-CONSTRUTOR", name: "Combo Construtor Diário (Recuperação e Força)", category: "combos-ganho", 
        desc: "O músculo cresce na recuperação! Une os dois suplementos mais essenciais para músculos firmes: Whey Protein 3W (510g) + Creatina Premium (150g).", 
        priceDe: 437.0, pricePor: 336.49, isCombo: true,
        flavors: ["Chocolate / Neutro"],
        image: "assets/whey3w.png"
    },
    { 
        id: 105, sku: "COMBO-ATLETA", name: "Combo Atleta de Alta Performance (Linha H24)", category: "combos-ganho", 
        desc: "O combustível dos campeões! Nutrição de elite para treinos pesados: Whey 3W + Creatina + CR7 Drive + Glutamina. Blindagem e recuperação brutal.", 
        priceDe: 760.0, pricePor: 585.20, isCombo: true,
        flavors: ["Chocolate / Berry / Neutro"],
        image: "assets/tricore.png"
    },

    // ⚡ COMBOS PARA ENERGIA EXTREMA E FOCO (23% OFF)
    { 
        id: 106, sku: "COMBO-FOCO", name: "Combo Foco e Produtividade Mental", category: "combos-energia", 
        desc: "O verdadeiro 'botão de ligar' do seu cérebro. Estado de alerta contínuo e foco absurdo para trabalho e estudos: N-R-G (Pó) + Liftoff.", 
        priceDe: 463.0, pricePor: 356.51, isCombo: true,
        flavors: ["Guaraná / Amora"],
        image: "assets/liftoff.png"
    },
    { 
        id: 107, sku: "COMBO-HYPE", name: "Combo Hype Drink (A Bebida Fenômeno)", category: "combos-energia", 
        desc: "A receita alquímica que virou febre! Energia extrema, hidratação profunda e queima calórica: Liftoff + N-R-G + Chá (51g) + CR7 Drive.", 
        priceDe: 928.0, pricePor: 714.56, isCombo: true,
        flavors: ["Tropical / Guaraná / Berry"],
        image: "assets/nrg.png"
    },

    // 🛡️ COMBOS PARA MELHORAR O INTESTINO E A IMUNIDADE (23% OFF)
    { 
        id: 108, sku: "COMBO-FAXINA", name: "Combo Faxina Refrescante (Saúde Digestiva)", category: "combos-saude", 
        desc: "Um intestino travado é o maior inimigo da barriga chapada. Fiber Concentrate (Líquido) + Fiber Powder (Pó invisível) para regular seu sistema.", 
        priceDe: 449.0, pricePor: 345.73, isCombo: true,
        flavors: ["Uva / Neutro"],
        image: "assets/fiberpowder.png"
    },
    { 
        id: 109, sku: "COMBO-BLINDAGEM", name: "Combo Blindagem e Desinflamação Celular", category: "combos-saude", 
        desc: "A saúde começa no intestino! Fiber Immune (Limão e Mel) + Glutamina + Herbalifeline (Ômega-3). Proteção celular e mente sã.", 
        priceDe: 572.0, pricePor: 440.44, isCombo: true,
        flavors: ["Limão e Mel / Neutro"],
        image: "assets/fiberimmune.png"
    },

    // 🛍️ PRODUTOS INDIVIDUAIS (14% OFF - BRONZE)
    { 
        id: 1, sku: "148K", name: "BCAA 5:1:1 204G TABLETES", category: "individual", 
        desc: "Proteção muscular e recuperação acelerada com aminoácidos essenciais.", 
        priceDe: 264.0, pricePor: 227.04, flavors: ["Tabletes"],
        image: "assets/bcaa.png"
    },
    { 
        id: 2, sku: "1923", name: "BEAUTY BOOSTER COLÁGENO 240G", category: "individual", 
        desc: "Colágeno Verisol para firmeza da pele, unhas e cabelos.", 
        priceDe: 301.0, pricePor: 258.86, flavors: ["Frutas Vermelhas"],
        image: "assets/beauty.png"
    },
    { 
        id: 3, sku: "1445", name: "CR7 DRIVE BARRY MIX", category: "individual", 
        desc: "Hidratação e energia para performance esportiva.", 
        priceDe: 243.0, pricePor: 208.98, flavors: ["Berry Mix"],
        image: "assets/cr7.png"
    },
    { 
        id: 4, sku: "325K", name: "CREATINA 150G", category: "individual", 
        desc: "Força explosiva e preservação de massa magra.", 
        priceDe: 181.0, pricePor: 155.66, flavors: ["Neutro"],
        image: "assets/creatina.png"
    },
    { 
        id: 5, sku: "FIBER-MIX", name: "FIBER CONCENTRATE", category: "individual", 
        desc: "Fibra líquida refrescante para regulação intestinal.", 
        priceDe: 206.0, pricePor: 177.16, flavors: ["Uva", "Manga", "Limão"],
        image: "assets/fiber.png"
    },
    { 
        id: 6, sku: "0927", name: "FIBER POWDER", category: "individual", 
        desc: "Fibra em pó sem sabor para misturar em qualquer alimento.", 
        priceDe: 243.0, pricePor: 208.98, flavors: ["Neutro"],
        image: "assets/fiberpowder.png"
    },
    { 
        id: 7, sku: "146K", name: "GLUTAMINA 150G", category: "individual", 
        desc: "Recuperação muscular e suporte imunológico avançado.", 
        priceDe: 80.0, pricePor: 68.80, flavors: ["Neutro"],
        image: "assets/glutamina.png"
    },
    { 
        id: 8, sku: "HERBAL-102", name: "HERBAL CONCENTRATE 102G", category: "individual", 
        desc: "Acelerador metabólico e termogênico refrescante.", 
        priceDe: 364.0, pricePor: 313.04, flavors: ["Original", "Canela", "Laranja"],
        image: "assets/tea102.png"
    },
    { 
        id: 9, sku: "HERBAL-51", name: "HERBAL CONCENTRATE 51G", category: "individual", 
        desc: "Versão compacta do acelerador metabólico diário.", 
        priceDe: 222.0, pricePor: 190.92, flavors: ["Original", "Limão"],
        image: "assets/tea51.png"
    },
    { 
        id: 10, sku: "0065", name: "HERBALIFELINE ÔMEGA 3", category: "individual", 
        desc: "Saúde cardiovascular e desinflamação celular.", 
        priceDe: 281.0, pricePor: 241.66, flavors: ["Cápsulas"],
        image: "assets/omega.png"
    },
    { 
        id: 11, sku: "1639", name: "NUTREV", category: "individual", 
        desc: "O substituto saudável do leite com zero lactose.", 
        priceDe: 79.0, pricePor: 67.94, flavors: ["Original"],
        image: "assets/nutrev.png"
    },
    { 
        id: 12, sku: "SHAKE-550", name: "SHAKE 550G", category: "individual", 
        desc: "Refeição nutritiva e prática para controle de peso.", 
        priceDe: 246.0, pricePor: 211.56, 
        flavors: ["Baunilha", "Chocolate", "Cookies", "Morango", "Doce de Leite", "Coco", "Maracujá", "Banana", "Paçoca"],
        image: "assets/shake.png"
    },
    { 
        id: 13, sku: "318K", name: "SHAPE CONTROL", category: "individual", 
        desc: "Tecnologia Morosil para redução de gordura abdominal.", 
        priceDe: 338.0, pricePor: 290.68, flavors: ["Cápsulas"],
        image: "assets/shapecontrol.png"
    },
    { 
        id: 14, sku: "WHEY-3W", name: "WHEY PROTEIN 3W (510G)", category: "individual", 
        desc: "Proteína de alta performance para ganho de massa magra.", 
        priceDe: 256.0, pricePor: 220.16, flavors: ["Chocolate"],
        image: "assets/whey3w.png"
    },
    { 
        id: 15, sku: "NRG-PO", name: "N-R-G (GUARANÁ EM PÓ)", category: "individual", 
        desc: "Energia e foco mental prolongado com guaraná autêntico.", 
        priceDe: 252.0, pricePor: 216.72, flavors: ["Guaraná"],
        image: "assets/nrg.png"
    },
    { 
        id: 16, sku: "LIFTOFF", name: "LIFTOFF (15 SACHÊS)", category: "individual", 
        desc: "Bebida energética efervescente com taurina e cafeína.", 
        priceDe: 211.0, pricePor: 181.46, flavors: ["Amora Intenso"],
        image: "assets/liftoff.png"
    },
    { 
        id: 17, sku: "FIBER-IMMUNE", name: "FIBER CONCENTRATE IMMUNE", category: "individual", 
        desc: "Saúde digestiva com reforço para sua imunidade.", 
        priceDe: 211.0, pricePor: 181.46, flavors: ["Limão e Mel"],
        image: "assets/fiberimmune.png"
    }
];
