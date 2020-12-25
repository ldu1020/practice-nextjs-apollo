/** @format */

import Layout from '../../components/Layout';
import { client, GET_PRODUCT_DETAIL } from '../../generated/graphql';
import { useState } from 'react';

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
      <Layout title={`${state.reference} | Next.js + TypeScript Example`}>
        <h1>{state.reference}</h1>
        <p>{state.description}</p>
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
