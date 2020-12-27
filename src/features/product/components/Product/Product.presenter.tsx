import * as React from "react";
import Layout from "../../../../components/Layout";
import AddProductFormContainer from "../AddProductForm/AddProductForm.container";
import ProductListContainer from "../ProductList/ProductList.container";

interface Props {
  productList: Product[];
  addProduct: (item: Product) => void;
  removeProduct: (id: number) => void;
  fetchMoreList: () => void;
}

const ProductPresenter: React.FC<Props> = ({
  productList,
  addProduct,
  removeProduct,
  fetchMoreList,
}) => {
  return (
    <Layout title="PRODUCTS">
      <AddProductFormContainer addProduct={addProduct} />
      <ProductListContainer
        productList={productList}
        removeProduct={removeProduct}
        fetchMoreList={fetchMoreList}
      />
    </Layout>
  );
};

export default ProductPresenter;
