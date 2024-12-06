/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="page/1">Go to Page 1</Link>
          <ul>
            <li>
              <Link href="page/1/1">Go to Page 1 - 1</Link>
            </li>
            <li>
              <Link href="page/1/12">Go to Page 1 - 2</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="page/2">Go to Page 2</Link>
          <ul>
            <li>
              <Link href="page/2/1">Go to Page 2 - 1</Link>
            </li>
            <li>
              <Link href="page/2/2">Go to Page 2 - 2</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="page/3">Go to Page 3</Link>
        </li>
      </ul>
    </>
  );
}
