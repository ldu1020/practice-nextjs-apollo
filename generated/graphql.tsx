/** @format */

import {
  useQuery,
  gql,
  useMutation,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: new InMemoryCache(),
});

export const AllProduct = gql`
  {
    allProducts {
      id
      price
      reference
    }
  }
`;

export const fetchAddProdcut = gql`
  mutation CreateProduct($id: ID!, $reference: String!, $price: Float!) {
    createProduct(
      id: $id
      category_id: 0
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
      reference
      price
    }
  }
`;

export const fetchRemoveProduct = gql`
  mutation RemoveProduct($id: ID!) {
    removeProduct(id: $id)
  }
`;

export const fetchUpdateCustomer = gql`
  mutation UpdateCustomer($id: ID!, $name: String) {
    updateCustomer(id: $id, first_name: $name, last_name: "") {
      id
      first_name
      last_name
    }
  }
`;

export const fetchProductDetail = gql`
  query Product($id: ID!) {
    Product(id: $id) {
      id
      category_id
      reference
      price
      description
    }
  }
`;

export function useGetAllProduct() {
  return useQuery(AllProduct);
}

export function useAddProduct() {
  return useMutation(fetchAddProdcut);
}

export function useRemoveProduct() {
  return useMutation(fetchRemoveProduct);
}

export function useUpdateCustomer() {
  return useMutation(fetchUpdateCustomer);
}

export function useGetProductDetail(id: number) {
  return useQuery(fetchProductDetail, { variables: { id } });
}
