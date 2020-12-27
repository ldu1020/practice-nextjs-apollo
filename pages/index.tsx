/** @format */

import Link from "next/link";
import Layout from "../src/components/Layout";

const IndexPage = () => (
  <Layout title="home">
    <Link href="/product" passHref>
      <a>=== Go To Product List</a>
    </Link>
    <Link href="/category" passHref>
      <a>=== Go To Category LIst</a>
    </Link>
  </Layout>
);

export default IndexPage;
