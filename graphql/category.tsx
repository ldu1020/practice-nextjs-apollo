import { useQuery, gql, useMutation } from "@apollo/client";

export const GET_ALL_CATEGORY = gql`
  query AllCategories($page: Int, $perPage: Int) {
    allCategories(page: $page, perPage: $perPage) {
      id
      name
    }
  }
`;

export const FETCH_ADD_CATEGORY = gql`
  mutation CreateCategory($id: ID!, $name: String!) {
    createCategory(id: $id, name: $name) {
      id
      name
    }
  }
`;

export const FETCH_REMOVE_CATEGORY = gql`
  mutation RemoveCATEGORY($id: ID!) {
    removeCategory(id: $id)
  }
`;

export const GET_CATEGORY_DETAIL = gql`
  query Category($id: ID!) {
    Category(id: $id) {
      id
      name
      Products {
        id
        reference
        price
      }
    }
  }
`;

export function useGetAllCategory() {
  return useQuery(GET_ALL_CATEGORY);
}

export function useAddCategory() {
  return useMutation(FETCH_ADD_CATEGORY);
}

export function useRemoveCategory() {
  return useMutation(FETCH_REMOVE_CATEGORY);
}

export function useGetCategoryDetail(id: number) {
  return useQuery(GET_CATEGORY_DETAIL, { variables: { id } });
}
