/** @format */

import React from "react";
import ListItem from "../../../../components/ListItem";
import { useRouter } from "next/router";
import StyledListWrapper from "../../../../components/ListWrapper";

interface Props {
  productList: Product[];
  removeProduct: (id: number) => void;
  fetchMoreList: () => void;
}

const ProductListContainer: React.FC<Props> = ({
  productList,
  removeProduct,
  fetchMoreList,
}) => {
  const router = useRouter();

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const { currentTarget } = e;

    const isEndOfScroll =
      currentTarget.scrollTop + currentTarget.clientHeight >=
      currentTarget.scrollHeight;

    isEndOfScroll && fetchMoreList();
  };

  const goToDetailProduct = (id: string) => {
    router.push(`/product/${id}`);
  };

  const infoSet = {
    reference: "Product-Name",
    price: "Price($)",
    category_name: "Category",
  };

  const clickFnSets = [
    {
      name: "DELETE",
      argKeyOfDataSet: "id",
      clickFn: removeProduct,
    },
    {
      name: "GO TO DETAIL",
      argKeyOfDataSet: "id",
      clickFn: goToDetailProduct,
    },
  ];

  return (
    <StyledListWrapper onScroll={handleScroll}>
      {productList.map((li) => {
        const data = {
          ...li,
          category_name: li.Category ? li.Category.name : "해당없음",
        };
        return (
          <ListItem
            key={li.id}
            data={data}
            infoSet={infoSet}
            clickFnSet={clickFnSets}
          />
        );
      })}
    </StyledListWrapper>
  );
};

export default ProductListContainer;
