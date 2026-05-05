const STORE_PRODUCTS = [
    // 🔥 COMBOS PARA EMAGRECIMENTO E CONTROLE DE PESO (23% OFF)
    { 
        id: 101, sku: "COMBO-START", name: "Combo Start (O Básico que Funciona)", category: "combos-emagrecimento", 
        desc: "Dê o primeiro passo para a sua melhor versão sem complicação! O Combo Start é perfeito para quem tem uma rotina corrida e quer iniciar a perda de peso com praticidade. O Shake substitui a sua refeição mais calórica do dia (como o café da manhã ou jantar), entregando proteínas, fibras e 23 vitaminas com apenas cerca de 200 calorias. Junto com ele, o nosso famoso Chá Termogênico (Herbal Concentrate) atua como um acelerador diário, ajudando o corpo a aumentar o gasto calórico e a combater a retenção de líquidos (o famoso inchaço). É menos caloria entrando e mais energia sendo gasta!", 
        items: ["1x Shake (Fórmula 1 - 550g)", "1x Herbal Concentrate (51g)"],
        priceDe: 468.0, pricePor: 360.36, isCombo: true,
        flavors: ["Escolha os sabores no checkout"],
        image: "assets/shake.png" 
    },
    { 
        id: 102, sku: "COMBO-SECA", name: "Combo Seca Barriga (Aceleração e Limpeza)", category: "combos-emagrecimento", 
        desc: "O segredo para afinar a silhueta não é passar fome, é nutrir o corpo e limpar o intestino! Neste combo, você leva a nossa refeição inteligente (Shake) combinada com o NutreV, nossa bebida vegetal que deixa sua refeição muito mais cremosa, rica em proteínas e zero lactose. A verdadeira mágica acontece com a dupla Herbal Concentrate e Fiber Concentrate: enquanto o chá acelera o seu metabolismo e te dá disposição, as fibras líquidas fazem uma verdadeira 'faxina interna', regulando seu intestino e ajudando a murchar a barriga logo nos primeiros dias de uso.", 
        items: ["1x Shake (550g)", "1x NutreV", "1x Herbal Concentrate (51g)", "1x Fiber Concentrate (Líquido)"],
        priceDe: 753.0, pricePor: 579.81, isCombo: true,
        flavors: ["Escolha os sabores no checkout"],
        image: "assets/fiber.png"
    },
    { 
        id: 103, sku: "COMBO-T30", name: "Combo Transformação Definitiva (T30 Premium)", category: "combos-emagrecimento", 
        desc: "O arsenal completo para quem decidiu mudar de corpo e de vida! Este é o programa ideal para 30 dias de foco total. Além de garantir as suas refeições diárias super proteicas (Shakes + NutreV) e o acelerador metabólico de alto rendimento (Chá 102g), este combo inclui a tecnologia do Shape Control. Formulado com Extrato de Laranja Moro (Morosil) e Picolinato de Cromo, ele age cirurgicamente auxiliando na redução da gordura abdominal (aquela gordura teimosa da barriga) e ajuda a inibir a incontrolável vontade de comer doces. É o fim da autossabotagem e o início do seu novo corpo.", 
        items: ["2x Shakes (550g)", "2x NutreV", "1x Herbal Concentrate (102g)", "1x Shape Control (Cápsulas)"],
        priceDe: 1352.0, pricePor: 1041.04, isCombo: true,
        flavors: ["Escolha os sabores no checkout"],
        image: "assets/shapecontrol.png"
    },

    // 💪 COMBOS PARA GANHO DE MASSA MAGRA (HIPERTROFIA) (23% OFF)
    { 
        id: 104, sku: "COMBO-CONSTRUTOR", name: "Combo Construtor Diário (Recuperação e Força)", category: "combos-ganho", 
        desc: "O músculo não cresce durante o treino, ele cresce na recuperação! Este combo une os dois suplementos mais estudados e essenciais do mundo para quem quer músculos firmes e definidos. Nossa Creatina Premium (100% pura) vai te dar a força explosiva necessária para pegar mais peso e evitar a perda de massa magra com a idade. Logo após o treino, o Whey Protein 3W entra em ação entregando 25g de proteínas com 3 velocidades de absorção (isolado, concentrado e hidrolisado) para reconstruir as fibras musculares imediatamente. Sem adição de açúcares, é o parceiro ideal para a sua hipertrofia limpa.", 
        items: ["1x Whey Protein 3W (510g)", "1x Creatina Premium (150g)"],
        priceDe: 437.0, pricePor: 336.49, isCombo: true,
        flavors: ["Chocolate / Neutro"],
        image: "assets/whey3w.png"
    },
    { 
        id: 105, sku: "COMBO-ATLETA", name: "Combo Atleta de Alta Performance (Linha H24 Completa)", category: "combos-ganho", 
        desc: "O combustível dos campeões! Se você treina pesado (CrossFit, corrida, musculação intensa), seu corpo exige uma nutrição de elite. Durante o treino, o CR7 Drive (criado com Cristiano Ronaldo) repõe seus eletrólitos e fornece 4 tipos de carboidratos para manter sua energia no topo, evitando cãibras. No pós-treino, a união de Whey 3W, Creatina e a L-Glutamina pura garantem que a sua janela de absorção seja aproveitada ao máximo, acelerando a recuperação muscular brutalmente e blindando o seu sistema imune contra o desgaste físico extremo.", 
        items: ["1x Whey Protein 3W", "1x Creatina Premium", "1x CR7 Drive", "1x Glutamina"],
        priceDe: 760.0, pricePor: 585.20, isCombo: true,
        flavors: ["Chocolate / Berry / Neutro"],
        image: "assets/tricore.png"
    },

    // ⚡ COMBOS PARA ENERGIA EXTREMA E FOCO (23% OFF)
    { 
        id: 106, sku: "COMBO-FOCO", name: "Combo Foco e Produtividade Mental", category: "combos-energia", 
        desc: "Sua rotina está esgotando a sua bateria? Esqueça o café que ataca o estômago ou os energéticos cheios de açúcar. Este combo é o verdadeiro 'botão de ligar' do seu cérebro. O N-R-G, à base de guaraná autêntico, atua como um biorregulador, garantindo estado de alerta contínuo sem causar picos de fadiga. O Liftoff é a ignição pura: uma bebida refrescante que entrega Taurina, Cafeína e altíssima dose de Vitaminas B e C para transformar alimento em energia real, promovendo um foco absurdo para você destruir nas metas de trabalho e estudos.", 
        items: ["1x N-R-G (Pó)", "1x Liftoff"],
        priceDe: 463.0, pricePor: 356.51, isCombo: true,
        flavors: ["Guaraná / Amora"],
        image: "assets/liftoff.png"
    },
    { 
        id: 107, sku: "COMBO-HYPE", name: "Combo Hype Drink (A Bebida Fenômeno)", category: "combos-energia", 
        desc: "A receita alquímica que virou febre nas academias e no mundo corporativo de todo o Brasil! O Hype Drink não é um simples produto, é a combinação exata de 4 suplementos de alta tecnologia. Juntos no mesmo copo com muito gelo, eles entregam energia extrema, hidratação profunda, bloqueio do cansaço mental e um poderoso efeito termogênico que ajuda o seu corpo a desinchar e queimar calorias enquanto você treina ou trabalha. Tem 3 vezes menos calorias que os energéticos comuns e entrega 125 vezes mais magnésio. Prove o hype e nunca mais treine sem ele!", 
        items: ["1x Liftoff", "1x N-R-G (Pó)", "1x Herbal Concentrate (51g)", "1x CR7 Drive"],
        priceDe: 928.0, pricePor: 714.56, isCombo: true,
        flavors: ["Tropical / Guaraná / Berry"],
        image: "assets/nrg.png"
    },

    // 🛡️ COMBOS PARA MELHORAR O INTESTINO E A IMUNIDADE (23% OFF)
    { 
        id: 108, sku: "COMBO-FAXINA", name: "Combo Faxina Refrescante (Saúde Digestiva)", category: "combos-saude", 
        desc: "Você sabia que um intestino travado é o maior inimigo da barriga chapada e do emagrecimento? Com a correria, quase ninguém consome as 25g de fibras diárias necessárias. O Combo Faxina Resolve isso! O Fiber Concentrate é uma bebida líquida deliciosa que hidrata enquanto solta o intestino e murcha a barriga. Já o Fiber Powder é uma fibra em pó 'invisível' e sem sabor que você pode misturar na sua comida, suco ou shake sem alterar o gosto, garantindo que o seu sistema digestivo funcione como um reloginho todos os dias.", 
        items: ["1x Fiber Concentrate", "1x Fiber Powder"],
        priceDe: 449.0, pricePor: 345.73, isCombo: true,
        flavors: ["Uva / Neutro"],
        image: "assets/fiberpowder.png"
    },
    { 
        id: 109, sku: "COMBO-BLINDAGEM", name: "Combo Blindagem e Desinflamação Celular", category: "combos-saude", 
        desc: "A verdadeira saúde (e beleza) começa no intestino! Se o seu corpo vive inflamado, você adoece fácil e não emagrece. O Fiber Immune não só regula a flora intestinal, mas blinda o seu corpo com Vitamina C, Zinco e Selênio. A Glutamina pura entra atuando diretamente na recuperação da parede do intestino e fortalecendo o seu sistema imunológico de forma poderosa. Para fechar o ciclo de desinflamação, nosso Herbalifeline (Ômega-3 super purificado) protege suas células, limpa o sistema cardiovascular e melhora ativamente a sua memória e função cerebral. É a fundação perfeita para uma vida longa e sadia.", 
        items: ["1x Fiber Concentrate Immune", "1x Glutamina", "1x Herbalifeline (Ômega-3)"],
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
