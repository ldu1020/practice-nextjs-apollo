/** @format */

import React, { useState } from 'react';
import Input from '../../components/Input';

interface Props {
  addCategory: (item: Category) => void;
}

const AddCategoryFormContainer: React.FC<Props> = ({ addCategory }) => {
  const [state, setstate] = useState({
    id: 0,
    name: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setstate({
      ...state,
      [name]: value,
    });
  };
  const onClick = () => {
    addCategory({...state,id:Date.now()});
    setstate({
      id: 0,
      name: "",
    });
  };
  return (
    <div>
      <Input
        type='text'
        label="분류명"
        name='name'
        onChange={onChange}
        value={state.name}
      />
      <button onClick={onClick}>add</button>
    </div>
  );
};

export default AddCategoryFormContainer;
