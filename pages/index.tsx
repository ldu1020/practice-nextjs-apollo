/** @format */

import ProductComponent from '../src/features/product';
import { ApolloProvider } from '@apollo/client';
import { client } from '../generated/graphql';
import Layout from '../src/components/Layout';
import CategoryContainer from '../src/features/category/category';

const IndexPage = () => (
  <div>
      <ApolloProvider client={client}>
    <Layout title="PRODUCT">
        <ProductComponent />
    </Layout>
    <Layout title="Category">
      <CategoryContainer />
    </Layout>
      </ApolloProvider>
  </div>
    
);

export default IndexPage;
