/** @format */

import ProductComponent from '../src/features/product';
import { ApolloProvider } from '@apollo/client';
import { client } from '../generated/graphql';
import Layout from '../src/components/Layout';

const IndexPage = () => (
    <Layout title="PRODUCT">
      <ApolloProvider client={client}>
        <ProductComponent />
      </ApolloProvider>
    </Layout>
);

export default IndexPage;
