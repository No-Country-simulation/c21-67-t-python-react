export interface propsProduct {
  id: number;
  name: string;
  description: string;
  image?: string;
  price: string;
  stock: number;
  created_at: string;
  updated_at: string;
  category_id: number;
}
export interface dataProduct {
  name: string;
  price: string;
  description: string;
  stock: number;
  category_id: number;
}
