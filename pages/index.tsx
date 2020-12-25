/** @format */

import Layout from '../src/components/Layout';
import ProductComponent from '../src/features/product';
import { ApolloProvider } from '@apollo/client';
import { client } from '../generated/graphql';

const IndexPage = () => (
  <ApolloProvider client={client}>
    <Layout title='Home | Next.js + TypeScript Example'>
      <ProductComponent />
    </Layout>
  </ApolloProvider>
);

export default IndexPage;
