export class ProductListItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
  detail?: string;
}


export const productList: ProductListItem[] = [
  {
    id: 1,
    name: 'T-Shirt',
    image: 'https://cdn.shopify.com/s/files/1/0407/0829/products/White_t-shirt_back_1024x1024.jpg?v=1511411218',
    quantity: 5,
    price: 10,
    detail: `Velit irure ullamco cupidatat ea. Cillum laboris esse est ex aute deserunt adipisicing sint
    reprehenderit Lorem proident Lorem. In nulla fugiat esse excepteur laboris fugiat officia ipsum tempor.
    Officia irure aliquip laboris labore enim deserunt. Enim sit exercitation do occaecat mollit pariatur
    deserunt incididunt ullamco sit. Ipsum consectetur fugiat culpa ad incididunt nostrud deserunt.`
  },
  {
    id: 2,
    name: 'Shirt',
    image: 'http://brandstore.vistaprint.in/render/undecorated/product/PVAG-0Q4K507W3K1Y/RS-K82Q06W655QY/jpeg?compression=95&width=700',
    quantity: 3,
    price: 12,
    detail: `Ex ad eiusmod ut sunt laboris officia culpa irure ipsum. Duis culpa dolor
    fugiat et eiusmod dolore non ea non ullamco. Exercitation eu pariatur
    elit proident dolore Lorem officia enim fugiat veniam labore occaecat
    esse exercitation. Elit nisi et fugiat occaecat.`
  },
  {
    id: 3,
    name: 'Jeans',
    image: 'https://www.revzilla.com/product_images/0084/6856/agv_sport_alloy_kevlar_jeans_750x750.jpg',
    quantity: 2,
    price: 18
  },
  {
    id: 4,
    name: 'Scarf',
    image: 'https://www.rankandstyle.com/media/products/b/bp-reversible-scarf-winter-scarves.jpg',
    quantity: 1,
    price: 100
  }
];

