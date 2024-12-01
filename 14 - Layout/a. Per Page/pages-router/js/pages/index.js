/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import Link from 'next/link';

import Layout from '../components/layout';

function Home() {
  return (
    <Layout>
      <h1>Page 1</h1>
      <Link href="page2">Go to Page 2</Link>
    </Layout>
  );
}

export default Home;
