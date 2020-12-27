/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetAllCategory } from "../../../../../graphql/category";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";

interface Props {
  addProduct: (item: Product) => void;
}

const InputWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 50%;
  height: 100%;
`;

const Form = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const AddProductFormContainer: React.FC<Props> = ({ addProduct }) => {
  const { data, refetch: refetchCategories } = useGetAllCategory();
  const [state, setState] = useState({
    id: 0,
    category_id: 0,
    reference: "",
    price: 0,
  });

  useEffect(() => {
    refetchCategories();
  }, []);

  const categoryArr = data ? data.allCategories : [];

  const onChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]:
        name === "price" || name === "category_id"
          ? Number(value)
            ? Number(value)
            : 0
          : value,
    });
  };
  const onClick = () => {
    addProduct({ ...state, id: Date.now() });
    setState({
      id: 0,
      category_id: 0,
      reference: "",
      price: 0,
    });
  };
  return (
    <Form>
      <InputWrapper>
        <Input
          type="text"
          label="PRODUCT-NAME"
          name="reference"
          onChange={onChange}
          value={state.reference}
        />
        <Input
          type="text"
          label="PRICE"
          name="price"
          onChange={onChange}
          value={state.price}
        />
        <Select label="CATEGORY" name="category_id" onChange={onChange}>
          {categoryArr.map((li: Category) => {
            return (
              <option key={li.id} value={li.id}>
                {li.name}
              </option>
            );
          })}
        </Select>
      </InputWrapper>
      <Button onClick={onClick}>ADD</Button>
    </Form>
  );
};

export default AddProductFormContainer;
