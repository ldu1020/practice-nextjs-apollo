/** @format */

import React from "react";
import {
  useAddProduct,
  useRemoveProduct,
  useGetAllProduct,
} from "../../../../../graphql/product";
import ProductPresenter from "./Product.presenter";

const ProductContainer = () => {
  const PER_PAGE = 7;

  const { data, fetchMore, refetch } = useGetAllProduct(0, 7);
  const [addProduct] = useAddProduct();
  const [removeProduct] = useRemoveProduct();

  const handleAddProduct = (item: Product) => {
    addProduct({ variables: item });
    !data || (data.allProducts.length <= PER_PAGE && refetch());
  };

  const handleRemoveProduct = (id: number) => {
    removeProduct({ variables: { id } }).then(() => {
      refetch({ page: 0, perPage: 0 });
    });
  };

  const handleFetchMoreList = () => {
    const PER_PAGE = 7;
    if (data) {
      fetchMore({
        variables: {
          page: Math.ceil((data.allProducts.length + 1) / PER_PAGE),
          perPage: PER_PAGE,
        },
      });
    }
  };

  return (
    <ProductPresenter
      productList={data ? data.allProducts : []}
      addProduct={handleAddProduct}
      removeProduct={handleRemoveProduct}
      fetchMoreList={handleFetchMoreList}
    />
  );
};

export default ProductContainer;
