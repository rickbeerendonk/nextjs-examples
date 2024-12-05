/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import Link from 'next/link';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="page/1">Go to Page 1</Link>
        </li>
        <li>
          <Link href="page/2">Go to Page 2</Link>
        </li>
        <li>
          <Link href="page/3">Go to Page 3</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
