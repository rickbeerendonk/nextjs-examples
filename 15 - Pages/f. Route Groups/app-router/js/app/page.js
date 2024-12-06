/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="sub1">Page 1</Link>
        </li>
        <li>
          <Link href="sub2">Page 2</Link>
        </li>
        <li>
          <Link href="sub3">Page 3</Link>
        </li>
        <li>
          <Link href="sub4">Page 4</Link>
        </li>
      </ul>
    </>
  );
}
