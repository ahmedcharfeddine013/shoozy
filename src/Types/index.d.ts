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

export interface filterProps {
  handleChange: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
}

export type { Product, filterProps };
