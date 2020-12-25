/** @format */

import Link from 'next/link';

import { User } from '../../interfaces';
import Layout from '../../src/components/Layout';
import List from '../../src/components/List';

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title='Users List | Next.js + TypeScript Example'>
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href='/'>
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);



export default WithStaticProps;
