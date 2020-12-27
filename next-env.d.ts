/** @format */

/// <reference types="next" />
/// <reference types="next/types/global" />

interface Product {
  id: number;
  price: number;
  reference: string;
  category_id: number;
  Category?: {
    name: any;
  };
}

interface ProductDetail extends Product {
  description: string;
}

interface Category {
  id: number;
  name: string;
}

interface CategoryDetail extends Category {
  Products: Product[];
}
