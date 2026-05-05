const STORE_PRODUCTS = [
    { 
        id: 1, sku: "148K", name: "BCAA 5:1:1 204G TABLETES", category: "h24", 
        desc: "A proteção que o seu músculo exige. Aminoácidos essenciais (Leucina, Isoleucina e Valina) e Vitamina B6. Previne fadiga muscular e acelera a recuperação pós-treino.", 
        priceDe: 264.0, pricePor: 203.53, flavors: ["Tabletes"],
        image: "assets/bcaa.png"
    },
    { 
        id: 2, sku: "1923", name: "BEAUTY BOOSTER COLÁGENO 240G", category: "saude", 
        desc: "Estética e firmeza de dentro para fora. Colágeno Verisol, Whey Protein, vitaminas A, B, C, D e E. Reduz rugas, aumenta elasticidade e fortalece unhas e cabelos.", 
        priceDe: 301.0, pricePor: 238.68, flavors: ["Frutas Vermelhas"],
        image: "assets/beauty.png"
    },
    { 
        id: 3, sku: "1445", name: "CR7 DRIVE BARRY MIX", category: "performance", 
        desc: "A bebida dos campeões. Equilíbrio perfeito de eletrólitos, carboidratos de ação escalonada e vitaminas B. Hidrata e gera energia constante no exercício.", 
        priceDe: 243.0, pricePor: 200.74, flavors: ["Berry Mix"],
        image: "assets/cr7.png"
    },
    { 
        id: 4, sku: "325K", name: "CREATINA 150G", category: "performance", 
        desc: "O suplemento mais estudado para rendimento atlético e preservação de força. 100% creatina pura monohidratada para auxiliar contra a perda de massa magra.", 
        priceDe: 181.0, pricePor: 144.02, flavors: ["Neutro"],
        image: "assets/creatina.png"
    },
    { 
        id: 5, sku: "FIBER-MIX", name: "FIBER CONCENTRATE", category: "saude", 
        desc: "A faxina interna refrescante. Regula o trânsito intestinal e auxilia na hidratação, 3g de fibras por porção.", 
        priceDe: 206.0, pricePor: 150.73, flavors: ["Uva", "Manga", "Limão com Mel"],
        image: "assets/fiber.png"
    },
    { 
        id: 6, sku: "0927", name: "FIBER POWDER", category: "saude", 
        desc: "A fibra invisível que transforma qualquer refeição. Sem sabor, pode ser adicionada em shakes, sucos ou na comida sem alterar o paladar.", 
        priceDe: 243.0, pricePor: 192.14, flavors: ["Neutro"],
        image: "assets/fiberpowder.png"
    },
    { 
        id: 7, sku: "146K", name: "GLUTAMINA 150G", category: "h24", 
        desc: "Aliada da recuperação e vitalidade. L-Glutamina pura para reconstrução e recuperação muscular após treinos intensos. Suporte fundamental para sua imunidade.", 
        priceDe: 80.0, pricePor: 62.57, flavors: ["Neutro"],
        image: "assets/glutamina.png"
    },
    { 
        id: 8, sku: "HERBAL-102", name: "HERBAL CONCENTRATE 102G", category: "energia", 
        desc: "Versão econômica do acelerador diário, +60 porções. Auxilia na hidratação, queima de calorias e combate ao inchaço.", 
        priceDe: 364.0, pricePor: 283.95, flavors: ["Original", "Canela", "Laranja e Especiarias"],
        image: "assets/tea102.png"
    },
    { 
        id: 9, sku: "004K", name: "HERBAL CONCENTRATE 357G", category: "energia", 
        desc: "O acelerador do metabolismo no formato de maior rendimento. Mais de 200 porções do blend de chás para manter seu foco e energia o mês todo.", 
        priceDe: 1072.0, pricePor: 886.7, flavors: ["Original"],
        image: "assets/tea357.png"
    },
    { 
        id: 10, sku: "HERBAL-51", name: "HERBAL CONCENTRATE 51G", category: "energia", 
        desc: "O seu acelerador botânico diário. Rica em antioxidantes e cafeína, acelera temporariamente o metabolismo e ajuda na disposição.", 
        priceDe: 222.0, pricePor: 171.41, flavors: ["Original", "Limão"],
        image: "assets/tea51.png"
    },
    { 
        id: 11, sku: "0065", name: "HERBALIFELINE ÔMEGA 3", category: "saude", 
        desc: "O poderoso desinflamatório. Ômega-3 de óleos de peixes de águas profundas e livres de contaminação. Essencial para saúde cardiovascular.", 
        priceDe: 281.0, pricePor: 217.73, flavors: ["Cápsulas"],
        image: "assets/omega.png"
    },
    { 
        id: 12, sku: "1639", name: "NUTREV (SUBSTITUTO DO LEITE)", category: "emagrecimento", 
        desc: "A alternativa perfeita ao leite. Bebida vegetal à base de proteína isolada de soja, rica em fibras prebióticas e baixa gordura.", 
        priceDe: 79.0, pricePor: 65.83, flavors: ["Original"],
        image: "assets/nutrev.png"
    },
    { 
        id: 13, sku: "SHAKE-550", name: "SHAKE 550G (TODOS OS SABORES)", category: "emagrecimento", 
        desc: "A sua refeição inteligente e prática. ~19g de proteína de alta qualidade, 23 vitaminas e minerais para controle de peso com saúde.", 
        priceDe: 246.0, pricePor: 191.42, 
        flavors: ["Baunilha", "Chocolate", "Cookies", "Morango", "Doce de Leite", "Coco", "Maracujá", "Banana", "Paçoca"],
        image: "assets/shake.png"
    },
    { 
        id: 14, sku: "318K", name: "SHAPE CONTROL (MOROSIL)", category: "energia", 
        desc: "A ciência a favor da redução de medidas. Extrato de Laranja Moro (Morosil) e Picolinato de Cromo para auxiliar na queima de gordura abdominal.", 
        priceDe: 338.0, pricePor: 268.35, flavors: ["Cápsulas"],
        image: "assets/shapecontrol.png"
    },
    { 
        id: 15, sku: "1417", name: "TRI-CORE PROTEIN BLEND", category: "h24", 
        desc: "Nutrição completa para atletas de resistência. Blend de proteínas e carboidratos inteligentes para máxima performance e recuperação.", 
        priceDe: 467.0, pricePor: 387.39, flavors: ["Chocolate"],
        image: "assets/tricore.png"
    }
];
