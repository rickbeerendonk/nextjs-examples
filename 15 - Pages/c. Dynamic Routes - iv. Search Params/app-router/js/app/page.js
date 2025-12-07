/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="page?id=1">Go to Page 1</Link>
        </li>
        <li>
          <Link href="page?id=2">Go to Page 2</Link>
        </li>
        <li>
          <Link href="page?id=3">Go to Page 3</Link>
        </li>
      </ul>
    </>
  );
}
