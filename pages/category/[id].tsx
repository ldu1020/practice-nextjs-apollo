/** @format */

import { useState } from "react";
import { GET_CATEGORY_DETAIL } from "../../graphql/category";
import ListItem from "../../src/components/ListItem";
import { useRouter } from "next/router";
import { client } from "../../graphql/client-provider";
import Layout from "../../src/components/Layout";
import ListWrapper from "../../src/components/ListWrapper";

type Props = {
  id: string;
};

const CategoryDetail = ({ id }: Props) => {
  const [state, setstate] = useState<null | CategoryDetail>();
  const router = useRouter();
  client
    .query({
      query: GET_CATEGORY_DETAIL,
      variables: { id },
    })
    .then((res) => {
      console.log(res);
      setstate(res.data.Category);
    });
  const ProductData = {
    reference: "Product-Name",
    price: "Price",
  };

  const clickFn = [
    {
      name: "Go To Product Detail",
      clickFn: (id: string) => {
        router.push(`/product/${id}`);
      },
      argKeyOfDataSet: "id",
    },
  ];

  if (state) {
    return (
      <Layout title="CATEGORY DETAIL">
        <h3>Category : {state.name}</h3>
        <h4>{state.name}'s Product list</h4>
        <ListWrapper>
          {state.Products.map((li) => {
            return (
              <ListItem
                key={li.id}
                data={li}
                infoSet={ProductData}
                clickFnSet={clickFn}
              />
            );
          })}
        </ListWrapper>
      </Layout>
    );
  } else {
    return <div>데이터 조회실패</div>;
  }
};
CategoryDetail.getInitialProps = function (ctx: any) {
  const { id } = ctx.query;
  return { id };
};

export default CategoryDetail;
