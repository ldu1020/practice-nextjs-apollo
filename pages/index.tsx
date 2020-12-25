/** @format */

import Layout from '../components/Layout';
import ProductComponent from '../src/components/product';
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
