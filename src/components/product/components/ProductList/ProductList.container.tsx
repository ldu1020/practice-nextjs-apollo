/** @format */

import Link from 'next/link';
import React from 'react';

interface Props {
  productList: Product[];
  removeProduct: (id: number) => void;
}

const ProductListContainer: React.FC<Props> = ({
  productList,
  removeProduct,
}) => {
  return (
    <div>
      {productList.map((li) => {
        return (
          <div key={li.id}>
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
    </div>
  );
};

export default ProductListContainer;
