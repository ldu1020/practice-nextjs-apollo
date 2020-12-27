/** @format */

import React from "react";
import { useRouter } from "next/router";
import ListItem from "../../../../components/ListItem";
import StyledListWrapper from "../../../../components/ListWrapper";

interface Props {
  categoryList: Category[];
  removeCategory: (id: number) => void;
}

const CategoryListContainer: React.FC<Props> = ({
  categoryList,
  removeCategory,
}) => {
  const router = useRouter();
  console.log(categoryList);

  const goToDetailCategory = (id: string) => {
    router.push(`/category/${id}`);
  };

  const infoSet = {
    name: "Category-Name",
  };

  const clickFnSets = [
    {
      name: "REMOVE",
      argKeyOfDataSet: "id",
      clickFn: removeCategory,
    },
    {
      name: "GO TO DETAIL",
      argKeyOfDataSet: "id",
      clickFn: goToDetailCategory,
    },
  ];

  return (
    <StyledListWrapper>
      {categoryList.map((li) => {
        return (
          <ListItem
            key={li.id}
            data={li}
            infoSet={infoSet}
            clickFnSet={clickFnSets}
          />
        );
      })}
    </StyledListWrapper>
  );
};

export default CategoryListContainer;
