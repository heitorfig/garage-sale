interface Product {
  id?: number;
  title: string;
  price: number;
  sold?: boolean;
  photo: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Apple iPhone X',
    price: 84900,
    sold: false,
    photo: 'https://picsum.photos/200'
  }
];
