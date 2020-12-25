/** @format */

import React from 'react';
import styled from 'styled-components';
import ListItem from '../../../../components/ListItem';
import { useRouter } from 'next/router'



interface Props {
  productList: Product[];
  removeProduct: (id: number) => void;
  fetchMoreList:()=>void
}

const StyledListWrapper = styled.div`
  height:25rem;
  overflow-y : auto;
  border:0.5px solid gray;
  padding: 1rem;
  border-radius:0.5rem;
`

const ProductListContainer: React.FC<Props> = ({
  productList,
  removeProduct,
  fetchMoreList
}) => {
  const router = useRouter()

  const handleScroll = (e:React.UIEvent<HTMLDivElement, UIEvent>) => {
    const {currentTarget} = e
    if (
      currentTarget.scrollTop + currentTarget.clientHeight >=
      currentTarget.scrollHeight
    ) {
    fetchMoreList()
    console.log("fetch!!")
    }
  };

  const goToDetailProduct = (id:string) =>{
    router.push(`/products/${id}`)
  }

  const infoSet = {
    reference:"제품명",
    price:"가격"
  }

  const clickFnSets = [{
    name:"제거하기",
    argKeyOfDataSet:"id",
    clickFn: removeProduct
  },{
    name:"상세보기",
    argKeyOfDataSet:"id",
    clickFn: goToDetailProduct
  }]

  return (
    <StyledListWrapper onScroll={handleScroll}>
      {productList.map((li) => {
        return (
          <ListItem key={li.id} data={li} infoSet={infoSet} clickFnSet={clickFnSets}/>
        );
      })}
    </StyledListWrapper>
  );
};

export default ProductListContainer;
