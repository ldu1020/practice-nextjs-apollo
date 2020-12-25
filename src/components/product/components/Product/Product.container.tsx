/** @format */

import React, { useEffect, useState } from 'react';
import ProductListContainer from '../ProductList/ProductList.container';
import AddProductFormContainer from '../AddProductForm/AddProductForm.container';
import {
  useAddProduct,
  useRemoveProduct,
  useGetAllProduct,
} from '../../../../../generated/graphql';

const ProductContainer = () => {
  const [state, setState] = useState<Product[]>([]);
  const { data, error } = useGetAllProduct();
  const [addProduct, { data: data2 }] = useAddProduct();
  const [removeProduct] = useRemoveProduct();

  useEffect(() => {
    data && setState(data.allProducts);
  }, [data]);

  const handleAddProduct = (item: Product) => {
    setState([...state, item]);
    addProduct({ variables: item });
    console.log(data2);
  };

  const handleRemoveProduct = (id: number) => {
    const updated = state.filter((li) => li.id !== id);
    setState(updated);
    removeProduct({ variables: { id } });
  };

  return (
    <div>
      <AddProductFormContainer addProduct={handleAddProduct} />
      <ProductListContainer
        productList={state}
        removeProduct={handleRemoveProduct}
      />
    </div>
  );
};

export default ProductContainer;
