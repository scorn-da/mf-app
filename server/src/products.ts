export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Cosmo Spinner',
    price: 5.99,
    description: 'A cosmo fidget spinner that spins the planet',
    image: 'http://localhost:8080/fidget-1.jpg',
    longDescription: 'Our Cosmo Spinner is fun, functional, and maybe just the best spinner in the world'
  },
  {
    id: 2,
    name: 'Holy Spinner',
    price: 3.99,
    description: 'A holy fidget spinner that spins the hole',
    image: 'http://localhost:8080/fidget-2.jpg',
    longDescription: 'Our Holy Spinner is fun, functional, and maybe just the best spinner in the world'
  },
  {
    id: 3,
    name: 'Color Spinner',
    price: 2.99,
    description: 'A colored fidget spinner that spins colors',
    image: 'http://localhost:8080/fidget-3.jpg',
    longDescription: 'Our Color Spinner is fun, functional, and maybe just the best spinner in the world'
  },
  {
    id: 4,
    name: 'Red Spinner',
    price: 1.99,
    description: 'A red fidget spinner that spins the routes',
    image: 'http://localhost:8080/fidget-4.jpg',
    longDescription: 'Our Red Spinner is fun, functional, and maybe just the best spinner in the world'
  },
  {
    id: 5,
    name: 'Wheel Spinner',
    price: 6.99,
    description: 'A wheel fidget spinner that spins wheels',
    image: 'http://localhost:8080/fidget-5.jpg',
    longDescription: 'Our Wheel Spinner is fun, functional, and maybe just the best spinner in the world'
  },
  {
    id: 6,
    name: 'Steel Spinner',
    price: 7.99,
    description: 'A steel fidget spinner that spins steel',
    image: 'http://localhost:8080/fidget-6.jpg',
    longDescription: 'Our Steel Spinner is fun, functional, and maybe just the best spinner in the world'
  }
];

export default products;