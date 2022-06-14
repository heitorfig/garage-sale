interface Product {
  id?: number;
  title: string;
  price: number;
  sold?: boolean | string[];
  photo?: string;
  stock: number;
}

export const products: Product[] = [
  {
    title: "Cabides de Plástico",
    price: 50,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652398128/garage-sale/cabide_gsts8a.webp",
    stock: 0,
    sold: ["Roberta"],
  },
  {
    title: "Fruteira de Mesa de Inox",
    price: 1200,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652398327/garage-sale/fruteira_fmabo0.webp",
    stock: 0,
    sold: ["AE Estofados"],
  },
  {
    title: "Modelador de Cachos Oster",
    price: 6000,
    stock: 1,
  },
  {
    title: "Camera 360 Positivo Smart",
    price: 15000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652398499/garage-sale/camera-360_qpihtl.webp",
    stock: 1,
  },
  {
    title: "Chapéu de Praia",
    price: 2000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652399091/garage-sale/chapeu_zzkt4f.webp",
    stock: 1,
  },
  {
    title: "Mesa de Jantar Bennet com 6 cadeiras",
    price: 180000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652365143/garage-sale/mesa_y5jkj6.webp",
    stock: 0,
    sold: ["Flávia"]
  },
  {
    title: "Escorredor de Pratos em Inox",
    price: 3500,
    stock: 0,
    sold: ["Mari"]
  },
  {
    title: "Fruteira branca com 4 gavetas",
    price: 10000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652400224/garage-sale/fruteira-1_tmzij1.webp",
    stock: 0,
    sold: ["AE Estofados"]
  },
  {
    title: "Garrafa Térmica Bkind 1L",
    price: 7500,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652399213/garage-sale/garrafa-bkind_mv5cdv.webp",
    stock: 1,
  },
  {
    title: "Garrafa Térmica Branca 500ml",
    price: 2500,
    stock: 1,
  },
  {
    title: "Impressora HP Deskjet Ink Advantage 2676",
    price: 18000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652399351/garage-sale/impressora_dx03lg.webp",
    sold: ["Sonia"],
    stock: 0,
  },
  {
    title: "Cobertor de Microfibra Camesa",
    price: 3500,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652399440/garage-sale/cobertor_axkzyy.webp",
    stock: 0,
    sold: ["Vizinha", "Amiga Roberta"],
  },
  {
    title: "Jogo de Facas Tramontina Plenus",
    price: 6000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652359290/garage-sale/jogo-facas_fpjam4.webp",
    sold: ["Rosemari"],
    stock: 0,
  },
  {
    title: "Jogo de Panelas e Frigideira Inox Record",
    price: 60000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652399629/garage-sale/jogo-panelas_w8pchz.webp",
    sold: ["Andrea"],
    stock: 0,
  },
  {
    title: "Mesa de Centro",
    price: 15000,
    stock: 1,
  },
  {
    title: "Porteiro Inteligente Positivo",
    price: 30000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652399709/garage-sale/porteiro_lcwwo5.webp",
    stock: 1,
  },
  {
    title: "Xiaomi Desk Lamp 1",
    price: 20000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652399767/garage-sale/xiaomi-lamp_usje9p.webp",
    stock: 1,
  },
  {
    title: "Sensor de Porta AGL",
    price: 6000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652399820/garage-sale/sensor-agl_mqqscf.webp",
    stock: 5,
  },
  {
    title: "Lâmpada RGB LED Smart Positivo",
    price: 3000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652642694/garage-sale/lampada_zfxikb.jpg",
    stock: 6,
  },
  {
    title: "Sensor de Presença AGL",
    price: 4000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652399881/garage-sale/sensor-agl-2_nlqeqy.webp",
    stock: 1,
  },
  {
    title: "Tábua de Passar Roupa",
    price: 2000,
    sold: ["Sonia"],
    stock: 0,
  },
  {
    title: "Tapete de Atividades Infantil",
    price: 18000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652399951/garage-sale/tapete_bt83nf.webp",
    stock: 1,
  },
  {
    title: "Telefone Sem Fio Motorola",
    price: 5000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652400012/garage-sale/telefone_kgmt5z.webp",
    stock: 1,
  },
  {
    title: "Torradeira Oster Gourmet",
    price: 12000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652365938/garage-sale/torradeira_t6j0qc.webp",
    stock: 0,
    sold: ["Mari"],
  },
  {
    title: "Piscina Intex 4485 litros com filtro e acessórios",
    price: 50000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652400062/garage-sale/piscina_ccpmnn.webp",
    stock: 0,
    sold: ["Vô Reinaldo"],
  },
  {
    title: "Espelho de Mesa Dupla Face",
    price: 2000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652365690/garage-sale/espelho_fyyq45.webp",
    sold: ["Miau"],
    stock: 0,
  },
  {
    title: "Conjunto Tomada Tramontina Liz 20A",
    price: 500,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652358836/garage-sale/conjunto-tomada_uategv.webp",
    stock: 4,
  },
  {
    title: "Placa Cega Tramontina Liz",
    price: 200,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652358613/garage-sale/placa-cega_ixczo3.webp",
    stock: 5,
  },
  {
    title: "Trava pra Gaveta Ordene",
    price: 1200,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652365582/garage-sale/protetor_coovws.webp",
    stock: 1,
  },
  {
    title: "Base para Notebook C3Tech",
    price: 5000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652365493/garage-sale/cooler_ipwwve.webp",
    sold: ["Miau"],
    stock: 0,
  },
  {
    title: "815 Cards de Magic",
    price: 8000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652400136/garage-sale/cards_rhtl2y.webp",
    stock: 0,
    sold: ["Alexandre Desconhecido"],
  },
  {
    title: "Livro Guerra Civil Marvel",
    price: 1000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652358969/garage-sale/guerra-civil_hhpt0a.webp",
    stock: 1,
  },
  {
    title: "Pegador de Sorvete de Plástico",
    price: 200,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652365256/garage-sale/colher-sorvete_u3jluz.webp",
    sold: ["Andrea"],
    stock: 0,
  },
  {
    title: "Carregador USB 1.5A",
    price: 1000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652365345/garage-sale/carregador_wcgsyt.webp",
    sold: ["Andrea"],
    stock: 0,
  },
  {
    title: "Inalador Ultrassonico Omron",
    price: 15000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652365421/garage-sale/inalador_w0ipbd.webp",
    stock: 1,
  },
  { title: "Sofá Cama Retrátil", price: 150000, sold: ["Sonia"], stock: 0 },
  { title: "Kit Varal de Chão", price: 8000, sold: ["Vera"], stock: 0 },
  {
    title: "Bebedouro com Compressor Electrolux",
    price: 35000,
    sold: ["Vera"],
    stock: 0,
  },
  {
    title: "Cortinha Persiana Blackout",
    price: 8000,
    sold: ["Vera", "Andrea"],
    stock: 0,
  },
  {
    title: "Fogão de Indução Fischer - 4 Bocas",
    price: 150000,
    sold: ["Andrea"],
    stock: 0,
  },
  {
    title: "Pote Hermético de Vidro com Tampa de Bambu Oikos - 250ml",
    price: 1500,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652751568/garage-sale/pote-250_hudxnr.jpg",
    stock: 0,
    sold: ["Andrea"],
  },
  {
    title: "Pote Hermético de Vidro com Tampa de Bambu Oikos - 500ml",
    price: 2000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652751568/garage-sale/pote-500_orgqxt.jpg",
    stock: 0,
    sold: ["Andrea"],
  },
  {
    title: "Pote Hermético de Vidro com Tampa de Bambu Oikos - 800ml",
    price: 2500,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652751568/garage-sale/pote-800_vkyloa.jpg",
    stock: 0,
    sold: ["Andrea"],
  },
  {
    title: "Pote Hermético de Vidro com Tampa de Bambu Oikos - 1100ml",
    price: 2500,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652751568/garage-sale/pote-1100_leupzm.jpg",
    stock: 0,
    sold: ["Roberta", "Andrea"],
  },
  {
    title: "SONOFF Módulo Relé Wi-Fi",
    price: 2000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652758788/garage-sale/sonoff_kl5p8f.webp",
    stock: 2,
  },
  {
    title: "Frigideira Elétrica Oster",
    price: 15000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652922991/garage-sale/sarten_pvyfxw.webp",
    stock: 0,
    sold: ["Rose"]
  },
  {
    title: "Jogo Americano Le Lis Casa Cadiz - Bege Médio",
    price: 700,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652923116/garage-sale/jogo-americano_rbqelj.jpg",
    stock: 0,
    sold: ["Mari"]
  },
  {
    title: "Jogo de Tigelas de Sobremesa Nadir - 6 unidades",
    price: 2500,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652923274/garage-sale/jogo-tigela_scf6ww.webp",
    stock: 0,
    sold: ["Andrea"]
  },
  {
    title: "Assadeira Oval Marinex Opaline",
    price: 1200,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652923448/garage-sale/assadeira_emibqz.jpg",
    stock: 0,
    sold: ["Rose"],
  },
  {
    title: "Assadeira de Pizza Tramontina",
    price: 2500,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_lpad,h_640,w_640/v1652923576/garage-sale/assadeira_rkkvgu.webp",
    stock: 0,
    sold: ["Mãe"],
  },
];
