/** @format */

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';



interface Props {
  productList: Product[];
  removeProduct: (id: number) => void;
  fetchMoreList:()=>void
}

const StyledListWrapper = styled.div`
  height:20rem;
  overflow-y : auto;
`

const ProductListContainer: React.FC<Props> = ({
  productList,
  removeProduct,
  fetchMoreList
}) => {

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

  return (
    <StyledListWrapper onScroll={handleScroll}>
      {productList.map((li) => {
        return (
          <div key={li.id}>
            <h1>{li.id}</h1>
            <h4>{li.reference}</h4>
            <p>{li.price} $</p>

            <button
              onClick={() => {
                removeProduct(li.id);
              }}>
              제거
            </button>
            <Link href={`/products/${li.id}`}>
              <button>상세보기</button>
            </Link>
          </div>
        );
      })}
    </StyledListWrapper>
  );
};

export default ProductListContainer;
