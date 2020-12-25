/** @format */

import React, { useState } from 'react';
import Input from '../../../../components/Input';

interface Props {
  addProduct: (item: Product) => void;
}

const AddProductFormContainer: React.FC<Props> = ({ addProduct }) => {
  const [state, setstate] = useState({
    id: 0,
    reference: '',
    price: 0,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setstate({
      ...state,
      [name]: name === 'price' ? (Number(value) ? Number(value) : 0) : value,
    });
  };
  const onClick = () => {
    addProduct({...state,id:Date.now()});
    setstate({
      id: 0,
      reference: '',
      price: 0,
    });
  };
  return (
    <div>
      <Input
        type='text'
        label="제품명"
        name='reference'
        onChange={onChange}
        value={state.reference}
      />
      <Input type='text' name='price' onChange={onChange} value={state.price} />
      <button onClick={onClick}>add</button>
    </div>
  );
};

export default AddProductFormContainer;
