/** @format */

import { GET_PRODUCT_DETAIL } from "../../graphql/graphql";
import { useState } from "react";
import { client } from "../../graphql/client-provider";
import Layout from "../../src/components/Layout";
import Link from "next/link";

type Props = {
  id: string;
};

const ProductDetail = ({ id }: Props) => {
  const [state, setstate] = useState<null | ProductDetail>();
  client
    .query({
      query: GET_PRODUCT_DETAIL,
      variables: { id },
    })
    .then((res) => {
      setstate(res.data.Product);
    });
  if (state) {
    return (
      <Layout title="PRODUCT DETAIL">
        <h3>name: {state.reference}</h3>
        <h3>
          category:{" "}
          {
            <Link href={`/category/${state.category_id}`} passHref>
              <a>{state.Category?.name}</a>
            </Link>
          }
        </h3>
        <div>
          <h3>subscription:</h3>
          <p>{state.description}</p>
        </div>
      </Layout>
    );
  } else {
    return <div>데이터 조회실패</div>;
  }
};

ProductDetail.getInitialProps = function (ctx: any) {
  const { id } = ctx.query;
  return { id };
};

export default ProductDetail;
