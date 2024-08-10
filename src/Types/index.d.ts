interface Product {
  id: number;
  img: string;
  title: string;
  star: ReactNode;
  reviews: string;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string;
  category: string;
}

interface filterProps {
  handleChange: () => void;
}

export type { Product, filterProps };
