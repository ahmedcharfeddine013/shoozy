interface Product {
  img: string;
  title: string;
  star: ReactNode; // To represent JSX elements like <AiFillStar />
  reviews: string;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string;
  category: string;
}

export type { Product };
