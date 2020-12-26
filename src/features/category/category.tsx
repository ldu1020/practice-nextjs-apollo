/** @format */

import React, { useEffect, useState } from 'react';
import { useAddCategory, useGetAllCategory, useRemoveCategory } from '../../../generated/category';
import AddCategoryFormContainer from './AddCategoryForm';
import CategoryListContainer from './CategoryList';


const CategoryContainer = () => {
  const [state, setState] = useState<Category[]>([]);
  const { data, error, fetchMore } = useGetAllCategory();
  const [addCategory, { data: data2 }] = useAddCategory();
  const [removeCategory] = useRemoveCategory();
  useEffect(() => {
    data && setState(data.allCategories);
    console.log(data)
  }, [data]);

  const handleAddCategory = (item: Category) => {
    setState([...state, item]);
    addCategory({ variables: item });
    console.log(data2);
  };

  const handleRemoveCategory = (id: number) => {
    const updated = state.filter((li) => li.id !== id);
    setState(updated);
    removeCategory({ variables: { id } });
  };



  return (
    <>
    <AddCategoryFormContainer addCategory={handleAddCategory}/>
    <CategoryListContainer removeCategory={handleRemoveCategory} categoryList={state}/>
    </>
  );
};

export default CategoryContainer;
