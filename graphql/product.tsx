/** @format */

import { useQuery, gql, useMutation } from "@apollo/client";

export const GET_ALL_PRODUCT = gql`
  query AllProduct($page: Int, $perPage: Int) {
    allProducts(page: $page, perPage: $perPage) {
      id
      category_id
      reference
      price
      Category {
        name
      }
    }
  }
`;

export const FETCH_ADD_PRODUCT = gql`
  mutation CreateProduct(
    $id: ID!
    $reference: String!
    $price: Float!
    $category_id: ID!
  ) {
    createProduct(
      id: $id
      category_id: $category_id
      reference: $reference
      width: 0
      height: 0
      price: $price
      thumbnail: ""
      image: ""
      description: ""
      stock: 0
    ) {
      id
      category_id
      reference
      price
    }
  }
`;

export const FETCH_REMOVE_PRODUCT = gql`
  mutation RemoveProduct($id: ID!) {
    removeProduct(id: $id)
  }
`;

export const GET_PRODUCT_DETAIL = gql`
  query Product($id: ID!) {
    Product(id: $id) {
      id
      category_id
      reference
      price
      description
      Category {
        name
      }
    }
  }
`;

export function useGetAllProduct(page: number = 0, perPage: number = 0) {
  return useQuery(GET_ALL_PRODUCT, { variables: { page, perPage } });
}

export function useAddProduct() {
  return useMutation(FETCH_ADD_PRODUCT);
}

export function useRemoveProduct() {
  return useMutation(FETCH_REMOVE_PRODUCT);
}

export function useGetProductDetail(id: number) {
  return useQuery(GET_PRODUCT_DETAIL, { variables: { id } });
}
