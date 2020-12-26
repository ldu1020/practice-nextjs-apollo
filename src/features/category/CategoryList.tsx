/** @format */

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'
import ListItem from '../../components/ListItem';



interface Props {
  categoryList: Category[];
  removeCategory: (id: number) => void;
}

const StyledListWrapper = styled.div`
  height:25rem;
  overflow-y : auto;
  border:0.5px solid gray;
  padding: 1rem;
  border-radius:0.5rem;
`

const CategoryListContainer: React.FC<Props> = ({
  categoryList,
  removeCategory,
}) => {
  const router = useRouter()
  console.log(categoryList)


  const goToDetailCategory = (id:string) =>{
    router.push(`/category/${id}`)
  }

  const infoSet = {
    name:"분류명",
  }

  const clickFnSets = [{
    name:"제거하기",
    argKeyOfDataSet:"id",
    clickFn: removeCategory
  },{
    name:"상세보기",
    argKeyOfDataSet:"id",
    clickFn: goToDetailCategory
  }]

  return (
    <StyledListWrapper >
      {categoryList.map((li) => {
        return (
          <ListItem key={li.id} data={li} infoSet={infoSet} clickFnSet={clickFnSets}/>
        );
      })}
    </StyledListWrapper>
  );
};

export default CategoryListContainer;
