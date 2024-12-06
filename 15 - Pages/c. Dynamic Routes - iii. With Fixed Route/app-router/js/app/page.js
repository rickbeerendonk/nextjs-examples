/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="page/1">Go to Page 1 (dynamic)</Link>
        </li>
        <li>
          <Link href="page/2">Go to Page 2 (dynamic)</Link>
        </li>
        <li>
          <Link href="page/3">Go to Page 3 (dynamic)</Link>
        </li>
        <li>
          <Link href="page/100">Go to Page 100 (fixed)</Link>
        </li>
      </ul>
    </>
  );
}
