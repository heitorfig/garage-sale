interface Product {
  id?: number;
  title: string;
  price: number;
  sold?: boolean | string;
  photo?: string;
}

export const products: Product[] = [
  {
    title: "32 Cabides de Plástico",
    price: 1600,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652398128/garage-sale/cabide_gsts8a.webp",
  },
  {
    title: "Fruteira de Mesa de Inox",
    price: 1200,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652398327/garage-sale/fruteira_fmabo0.webp",
  },
  {
    title: "Modelador de Cachos Oster",
    price: 6000,
  },
  {
    title: "Camera 360 Positivo Smart",
    price: 15000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652398499/garage-sale/camera-360_qpihtl.webp",
  },
  {
    title: "Chapéu de Praia",
    price: 2000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652399091/garage-sale/chapeu_zzkt4f.webp",
  },
  {
    title: "Mesa de Jantar Bennet com 6 cadeiras",
    price: 180000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652365143/garage-sale/mesa_y5jkj6.webp",
  },
  {
    title: "Escorredor de Pratos em Inox",
    price: 3500,
  },
  {
    title: "Fruteira branca com 4 gavetas",
    price: 10000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652400224/garage-sale/fruteira-1_tmzij1.webp",
  },
  {
    title: "Garrafa Térmica Bkind 1L",
    price: 7500,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652399213/garage-sale/garrafa-bkind_mv5cdv.webp",
  },
  {
    title: "Garrafa Térmica Branca 500ml",
    price: 2500,
  },
  {
    title: "Impressora HP Deskjet Ink Advantage 2676",
    price: 18000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652399351/garage-sale/impressora_dx03lg.webp",
    sold: 'Sonia'
  },
  {
    title: "Cobertor de Microfibra Camesa",
    price: 3500,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652399440/garage-sale/cobertor_axkzyy.webp",
  },
  {
    title: "Jogo de Facas Tramontina Plenus",
    price: 6000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652359290/garage-sale/jogo-facas_fpjam4.webp",
    sold: 'Rosemari'
  },
  {
    title: "Jogo de Panelas e Frigideira Inox Record",
    price: 60000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652399629/garage-sale/jogo-panelas_w8pchz.webp",
    sold: 'Andrea'
  },
  {
    title: "Mesa de Centro",
    price: 15000,
  },
  {
    title: "Porteiro Inteligente Positivo",
    price: 30000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652399709/garage-sale/porteiro_lcwwo5.webp",
  },
  {
    title: "Xiaomi Desk Lamp 1",
    price: 20000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652399767/garage-sale/xiaomi-lamp_usje9p.webp",
  },
  {
    title: "Sensor de Porta AGL",
    price: 6000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652399820/garage-sale/sensor-agl_mqqscf.webp",
  },
  {
    title: "Sensor de Presença AGL",
    price: 4000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652399881/garage-sale/sensor-agl-2_nlqeqy.webp",
  },
  {
    title: "Tábua de Passar Roupa",
    price: 2000,
    sold: 'Sonia'
  },
  {
    title: "Tapete de Atividades Infantil",
    price: 18000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652399951/garage-sale/tapete_bt83nf.webp",
  },
  {
    title: "Telefone Sem Fio Motorola",
    price: 5000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652400012/garage-sale/telefone_kgmt5z.webp",
  },
  {
    title: "Torradeira Oster Gourmet",
    price: 12000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652365938/garage-sale/torradeira_t6j0qc.webp",
  },
  {
    title: "Piscina Intex 4485 litros com filtro e acessórios",
    price: 75000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652400062/garage-sale/piscina_ccpmnn.webp",
  },
  {
    title: "Espelho de Mesa Dupla Face",
    price: 2000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652365690/garage-sale/espelho_fyyq45.webp",
    sold: 'Miau'
  },
  {
    title: "Conjunto Tomada Tramontina Liz 20A",
    price: 500,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652358836/garage-sale/conjunto-tomada_uategv.webp",
  },
  {
    title: "Placa Cega Tramontina Liz",
    price: 200,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652358613/garage-sale/placa-cega_ixczo3.webp",
  },
  {
    title: "Trava pra Gaveta Ordene",
    price: 1200,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652365582/garage-sale/protetor_coovws.webp",
  },
  {
    title: "Base para Notebook C3Tech",
    price: 5000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652365493/garage-sale/cooler_ipwwve.webp",
    sold: 'Miau'
  },
  {
    title: "815 Cards de Magic",
    price: 8000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652400136/garage-sale/cards_rhtl2y.webp",
  },
  {
    title: "Livro Guerra Civil Marvel",
    price: 1000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652358969/garage-sale/guerra-civil_hhpt0a.webp",
  },
  {
    title: "Pegador de Sorvete de Plástico",
    price: 200,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652365256/garage-sale/colher-sorvete_u3jluz.webp",
    sold: 'Andrea'
  },
  {
    title: "Carregador USB 1.5A",
    price: 1000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652365345/garage-sale/carregador_wcgsyt.webp",
    sold: 'Andrea'
  },
  {
    title: "Inalador Ultrassonico Omron",
    price: 15000,
    photo:
      "https://res.cloudinary.com/heitorfigbr/image/upload/c_scale,w_640/v1652365421/garage-sale/inalador_w0ipbd.webp",
  },
  { title: "Sofá Cama Retrátil", price: 150000, sold: "Sonia" },
  { title: "Kit Varal de Chão", price: 8000, sold: "Vera" },
  { title: "Bebedouro com Compressor Electrolux", price: 35000, sold: "Vera" },
  { title: "Cortinha Persiana Blackout", price: 8000, sold: "Vera" },
  {
    title: "Fogão de Indução Fischer - 4 Bocas",
    price: 150000,
    sold: "Andrea",
  },
];
