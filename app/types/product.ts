export interface Reviews {
  reviewerName: string;
  comment: string;
  date: string;
  rating: number;
}

export interface Product {
  id: number;
  title: string;
  rating: number;
  price: number;
  discountPercentage: number;
  stock: number;
  thumbnail: string;
  category: string;
  description: string;
  tags: string[];
  reviews: Reviews[];
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}