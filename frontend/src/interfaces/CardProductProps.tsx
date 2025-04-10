export interface CardProductProps {
  title: string;
  price: number;
  image: string;
  rating: number;
  onAddToCart?: () => void;
  discount?: number;
  category?: string;
  publishedAt?: string;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// const randomDate = () => {
//   const now = new Date();
//   const daysAgo = Math.floor(Math.random() * 30); // từ 0 đến 29 ngày trước
//   const date = new Date(now.setDate(now.getDate() - daysAgo));
//   return date.toISOString();
// };
const randomDate = (pastDays = 90) => {
  const now = new Date();
  const past = new Date(now);
  past.setDate(past.getDate() - pastDays);

  const randomTime =
    past.getTime() + Math.random() * (now.getTime() - past.getTime());
  return new Date(randomTime).toISOString();
};

export const listProducts: CardProductProps[] = shuffleArray([
  ...Array.from({ length: 5 }, (_, i) => ({
    title: `T-shirt ${i + 1}`,
    price: 100 + Math.floor(Math.random() * 50),
    image: "/images/products/T-shirt.png",
    rating: Math.min(5, 4 + Math.random()), // đảm bảo <= 5
    discount: i % 2 === 0 ? 15 : undefined,
    category: "t-shirt",
    onAddToCart: () => console.log(`Added T-shirt ${i + 1} to cart`),
    publishedAt: randomDate(),
  })),
  ...Array.from({ length: 5 }, (_, i) => ({
    title: `Short ${i + 1}`,
    price: 80 + Math.floor(Math.random() * 40),
    image: "/images/products/short.png",
    rating: Math.min(5, 4.2 + Math.random()),
    discount: i % 3 === 0 ? 10 : undefined,
    category: "short",
    onAddToCart: () => console.log(`Added Short ${i + 1} to cart`),
    publishedAt: randomDate(),
  })),
  ...Array.from({ length: 5 }, (_, i) => ({
    title: `Jean ${i + 1}`,
    price: 120 + Math.floor(Math.random() * 60),
    image: "/images/products/jean.png",
    rating: Math.min(5, 4.5 + Math.random()),
    discount: i % 4 === 0 ? 20 : undefined,
    category: "jean",
    onAddToCart: () => console.log(`Added Jean ${i + 1} to cart`),
    publishedAt: randomDate(),
  })),
  ...Array.from({ length: 5 }, (_, i) => ({
    title: `Polo ${i + 1}`,
    price: 90 + Math.floor(Math.random() * 50),
    image: "/images/products/polo.png",
    rating: Math.min(5, 4.3 + Math.random()),
    discount: i % 2 === 0 ? 12 : undefined,
    category: "polo",
    onAddToCart: () => console.log(`Added Polo ${i + 1} to cart`),
    publishedAt: randomDate(),
  })),
  ...Array.from({ length: 5 }, (_, i) => ({
    title: `Shirt ${i + 1}`,
    price: 90 + Math.floor(Math.random() * 50),
    image: "/images/products/shirt.png",
    rating: Math.min(5, 4.3 + Math.random()),
    discount: i % 2 === 0 ? 12 : undefined,
    category: "shirt",
    onAddToCart: () => console.log(`Added Shirt ${i + 1} to cart`),
    publishedAt: randomDate(),
  })),
]);
