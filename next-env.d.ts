/** @format */

/// <reference types="next" />
/// <reference types="next/types/global" />

interface Product {
  id: number;
  price: number;
  reference: string;
}

interface ProductDetail extends Product {
  category_id: number;
  description: string;
}
