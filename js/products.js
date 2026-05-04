/**
 * SHAPETRACK MASTER PRODUCT DATABASE
 * Central source of truth for SKUs, Prices, Categories and Descriptions.
 */

const SHAPETRACK_PRODUCTS = [
    { 
        sku: "148K", name: "BCAA 5:1:1 204G TABLETES", category: "h24", 
        desc: "A proteção que o seu músculo exige. Aminoácidos essenciais (Leucina, Isoleucina e Valina) e Vitamina B6. Previne fadiga muscular e acelera a recuperação para quem pega pesado no treino.", 
        flavors: "Tabletes", pv: 25.85, 
        prices: { consumer: 264.0, c14: 203.53, c23: 187.2, c32: 170.87, c25: 187.2, c35: 173.65, c42: 164.16, c50: 153.32 } 
    },
    { 
        sku: "1923", name: "BEAUTY BOOSTER COLÁGENO 240G", category: "saude", 
        desc: "Estética e firmeza de dentro para fora. Colágeno Verisol, Whey Protein, vitaminas A, B, C, D e E. Reduz rugas finas, aumenta elasticidade e fortalece unhas e cabelos.", 
        flavors: "Frutas Vermelhas", pv: 27.8, 
        prices: { consumer: 301.0, c14: 238.68, c23: 214.52, c32: 190.36, c25: 214.52, c35: 194.47, c42: 180.44, c50: 164.4 } 
    },
    { 
        sku: "1445", name: "CR7 DRIVE BARRY MIX", category: "performance", 
        desc: "A bebida dos campeões. Equilíbrio perfeito de eletrólitos, carboidratos de ação escalonada e vitaminas B. Hidrata e gera energia constante no exercício.", 
        flavors: "Berry Mix (Frutas Silvestres)", pv: 26.75, 
        prices: { consumer: 243.0, c14: 200.74, c23: 183.28, c32: 165.82, c25: 183.75, c35: 169.21, c42: 159.04, c50: 147.41 } 
    },
    { 
        sku: "325K", name: "CREATINA 150G", category: "performance", 
        desc: "O suplemento mais estudado para rendimento atlético e preservação de força. 100% creatina pura monohidratada para auxiliar contra a perda de massa magra.", 
        flavors: "Neutro", pv: 18.45, 
        prices: { consumer: 181.0, c14: 144.02, c23: 131.01, c32: 118.0, c25: 131.01, c35: 120.21, c42: 112.65, c50: 104.01 } 
    },
    { 
        sku: "497K", name: "FIBER CONCENTRATE LIMÃO E MEL", category: "saude", 
        desc: "A faxina interna refrescante. A versão Immune blinda a imunidade com Zinco, Vitamina C e Selênio.", 
        flavors: "Limão com Mel (Immune)", pv: 20.3, 
        prices: { consumer: 206.0, c14: 150.73, c23: 135.48, c32: 120.22, c25: 135.48, c35: 122.82, c42: 113.95, c50: 103.82 } 
    },
    { 
        sku: "498K", name: "FIBER CONCENTRATE MANGA", category: "saude", 
        desc: "A faxina interna refrescante. Regula o trânsito intestinal e auxilia na hidratação, 3g de fibras por porção.", 
        flavors: "Manga", pv: 20.3, 
        prices: { consumer: 206.0, c14: 150.73, c23: 135.48, c32: 120.22, c25: 135.48, c35: 122.82, c42: 113.95, c50: 103.82 } 
    },
    { 
        sku: "496K", name: "FIBER CONCENTRATE UVA", category: "saude", 
        desc: "A faxina interna refrescante. Regula o trânsito intestinal e auxilia na hidratação, 3g de fibras por porção.", 
        flavors: "Uva", pv: 20.3, 
        prices: { consumer: 206.0, c14: 150.73, c23: 135.48, c32: 120.22, c25: 135.48, c35: 122.82, c42: 113.95, c50: 103.82 } 
    },
    { 
        sku: "0927", name: "FIBER POWDER", category: "gourmet", 
        desc: "A fibra invisível que transforma qualquer refeição. Sem sabor, pode ser adicionada em shakes, sucos ou na comida.", 
        flavors: "Neutro", pv: 24.65, 
        prices: { consumer: 243.0, c14: 192.14, c23: 172.69, c32: 153.25, c25: 172.69, c35: 156.55, c42: 145.25, c50: 132.34 } 
    },
    { 
        sku: "146K", name: "GLUTAMINA 150G", category: "h24", 
        desc: "Aliada da recuperação e vitalidade. L-Glutamina pura para reconstrução e recuperação muscular após treinos intensos.", 
        flavors: "Neutro", pv: 9.1, 
        prices: { consumer: 80.0, c14: 62.57, c23: 57.5, c32: 52.43, c25: 57.5, c35: 53.29, c42: 50.34, c50: 46.97 } 
    },
    { 
        sku: "061K", name: "HERBAL CONCENTRATE 102G - CANELA", category: "energia", 
        desc: "Versão econômica do acelerador diário, +60 porções. Auxilia na hidratação, queima de calorias e combate ao inchaço.", 
        flavors: "Canela", pv: 37.6, 
        prices: { consumer: 364.0, c14: 283.95, c23: 255.21, c32: 226.47, c25: 255.21, c35: 231.36, c42: 214.66, c50: 195.58 } 
    },
    { 
        sku: "062K", name: "HERBAL CONCENTRATE 102G - LARANJA", category: "energia", 
        desc: "Versão econômica do acelerador diário, +60 porções. Auxilia na hidratação, queima de calorias e combate ao inchaço.", 
        flavors: "Laranja e Especiarias", pv: 37.6, 
        prices: { consumer: 364.0, c14: 283.95, c23: 255.21, c32: 226.47, c25: 255.21, c35: 231.36, c42: 214.66, c50: 195.58 } 
    },
    { 
        sku: "059K", name: "HERBAL CONCENTRATE 102G - ORIGINAL", category: "energia", 
        desc: "Versão econômica do acelerador diário, +60 porções. Auxilia na hidratação, queima de calorias e combate ao inchaço.", 
        flavors: "Original", pv: 37.6, 
        prices: { consumer: 364.0, c14: 283.95, c23: 255.21, c32: 226.47, c25: 255.21, c35: 231.36, c42: 214.66, c50: 195.58 } 
    },
    { 
        sku: "004K", name: "HERBAL CONCENTRATE 357G - ORIGINAL", category: "economica", 
        desc: "O acelerador do metabolismo no formato de maior rendimento. Mais de 200 porções do blend de chás.", 
        flavors: "Original", pv: 138.05, 
        prices: { consumer: 1072.0, c14: 886.7, c23: 796.96, c32: 707.21, c25: 796.96, c35: 722.47, c42: 670.33, c50: 610.74 } 
    },
    { 
        sku: "063K", name: "HERBAL CONCENTRATE 51G - LIMÃO", category: "energia", 
        desc: "O seu acelerador botânico diário. Rica em antioxidantes e cafeína, acelera temporariamente o metabolismo.", 
        flavors: "Limão", pv: 21.45, 
        prices: { consumer: 222.0, c14: 171.41, c23: 154.06, c32: 136.71, c25: 154.06, c35: 139.66, c42: 129.58, c50: 118.06 } 
    },
    { 
        sku: "060K", name: "HERBAL CONCENTRATE 51G - ORIGINAL", category: "energia", 
        desc: "O seu acelerador botânico diário. Rica em antioxidantes e cafeína, acelera temporariamente o metabolismo.", 
        flavors: "Original", pv: 21.45, 
        prices: { consumer: 222.0, c14: 171.41, c23: 154.06, c32: 136.71, c25: 154.06, c35: 139.66, c42: 129.58, c50: 118.06 } 
    },
    { 
        sku: "0065", name: "HERBALIFELINE", category: "saude", 
        desc: "O poderoso desinflamatório. Ômega-3 de óleos de peixes de águas profundas e livres de contaminação.", 
        flavors: "Cápsulas em gel", pv: 27.7, 
        prices: { consumer: 281.0, c14: 217.73, c23: 195.7, c32: 173.66, c25: 195.7, c35: 177.41, c42: 164.61, c50: 149.97 } 
    },
    { 
        sku: "1639", name: "NUTREV", category: "emagrecimento", 
        desc: "A alternativa perfeita ao leite. Bebida vegetal à base de proteína isolada de soja, rica em fibras prebióticas.", 
        flavors: "Original / Lácteo", pv: 7.4, 
        prices: { consumer: 79.0, c14: 65.83, c23: 62.06, c32: 58.29, c25: 62.06, c35: 58.93, c42: 56.74, c50: 54.24 } 
    },
    { 
        sku: "0951", name: "SHAKE BAUNILHA CREMOSO", category: "emagrecimento", 
        desc: "A sua refeição inteligente e prática. ~19g de proteína de alta qualidade, 23 vitaminas e minerais.", 
        flavors: "Baunilha Cremoso", pv: 25.75, 
        prices: { consumer: 246.0, c14: 191.42, c23: 172.04, c32: 152.67, c25: 172.04, c35: 155.96, c42: 144.71, c50: 131.84 } 
    },
    { 
        sku: "3144", name: "SHAKE CHOCOLATE SENSATION", category: "emagrecimento", 
        desc: "A sua refeição inteligente e prática. ~19g de proteína de alta qualidade, 23 vitaminas e minerais.", 
        flavors: "Chocolate Sensation", pv: 25.75, 
        prices: { consumer: 246.0, c14: 191.42, c23: 172.04, c32: 152.67, c25: 172.04, c35: 155.96, c42: 144.71, c50: 131.84 } 
    },
    { 
        sku: "318K", name: "SHAPE CONTROL - 30 CÁPSULAS", category: "energia", 
        desc: "A ciência a favor da redução de medidas. Extrato de Laranja Moro (Morosil) e Picolinato de Cromo.", 
        flavors: "Cápsulas", pv: 35.35, 
        prices: { consumer: 338.0, c14: 268.35, c23: 241.19, c32: 214.03, c25: 241.19, c35: 218.64, c42: 202.86, c50: 184.83 } 
    },
    { 
        sku: "1417", name: "TRI-CORE PROTEIN BLEND CHOCOLATE", category: "h24", 
        desc: "Nutrição completa para atletas de resistência. Blend de proteínas e carboidratos inteligentes.", 
        flavors: "Chocolate", pv: 46.8, 
        prices: { consumer: 467.0, c14: 387.39, c23: 352.2, c32: 317.02, c25: 352.59, c35: 323.34, c42: 302.87, c50: 279.48 } 
    }
];
