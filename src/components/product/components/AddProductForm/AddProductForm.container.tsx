/** @format */

import React, { useState } from 'react';

interface Props {
  addProduct: (item: Product) => void;
}

const AddProductFormContainer: React.FC<Props> = ({ addProduct }) => {
  const [state, setstate] = useState({
    id: Date.now(),
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
    addProduct(state);
    setstate({
      id: Date.now() + 1,
      reference: '',
      price: 0,
    });
  };
  return (
    <div>
      <input
        type='text'
        name='reference'
        onChange={onChange}
        value={state.reference}
      />
      <input type='text' name='price' onChange={onChange} value={state.price} />
      <button onClick={onClick}>add</button>
    </div>
  );
};

export default AddProductFormContainer;
