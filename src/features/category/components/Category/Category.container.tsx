/** @format */

import React from "react";
import {
  useAddCategory,
  useGetAllCategory,
  useRemoveCategory,
} from "../../../../../graphql/category";
import Layout from "../../../../components/Layout";
import AddCategoryFormContainer from "../AddCategoryFrom/AddCategoryForm.contanier";
import CategoryListContainer from "../CategoryList/CategoryList.Container";

const CategoryContainer = () => {
  const { data, loading, error, refetch } = useGetAllCategory();
  const [addCategory] = useAddCategory();
  const [removeCategory] = useRemoveCategory();

  const handleAddCategory = (item: Category) => {
    addCategory({ variables: item });
    refetch();
  };

  const handleRemoveCategory = (id: number) => {
    removeCategory({ variables: { id } });
    refetch();
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <Layout title="CATEGORIES">
      <AddCategoryFormContainer addCategory={handleAddCategory} />
      <CategoryListContainer
        removeCategory={handleRemoveCategory}
        categoryList={data.allCategories}
      />
    </Layout>
  );
};

export default CategoryContainer;
