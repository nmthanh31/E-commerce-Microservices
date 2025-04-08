export interface CardProductProps {
  title: string;
  price: number;
  image: string;
  rating: number;
  onAddToCart?: () => void;
  discount?: number;
}