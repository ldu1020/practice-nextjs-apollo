/** @format */

import {
  useQuery,
  gql,
  useMutation,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        allProducts :{
          keyArgs:false,
          merge(exiting=[],incoming){
            return [...exiting,...incoming]
          }
        }
      }
    }
  }
})

export const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: cache,
});

export const GET_ALL_PRODUCT = gql`
   query AllProduct($page:Int,$perPage:Int){
    allProducts(page:$page,perPage:$perPage){
      id
      category_id
      reference
      price
    }}
`;

export const FETCH_ADD_PRODUCT = gql`
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

export const FETCH_UPDATE_PRODUCT = gql`
  mutation UpdateCustomer($id: ID!, $name: String) {
    updateCustomer(id: $id, first_name: $name, last_name: "") {
      id
      first_name
      last_name
    }
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
    }
  }
`;

export function useGetAllProduct(page:number = 0,perPage:number = 7) {
  return useQuery(GET_ALL_PRODUCT,{variables:{page,perPage}});
}

export function useAddProduct() {
  return useMutation(FETCH_ADD_PRODUCT);
}

export function useRemoveProduct() {
  return useMutation(FETCH_REMOVE_PRODUCT);
}

export function useUpdateCustomer() {
  return useMutation(FETCH_UPDATE_PRODUCT);
}

export function useGetProductDetail(id: number) {
  return useQuery(GET_PRODUCT_DETAIL, { variables: { id } });
}
