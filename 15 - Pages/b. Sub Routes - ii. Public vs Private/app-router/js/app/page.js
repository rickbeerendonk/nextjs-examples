/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import Link from 'next/link';

// <Link> allows for:
// - Client-side navigation
// - Prefetching

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="sub_private">Go to Private</Link>
        </li>
        <li>
          <Link href="sub_public">Go to Public</Link>
        </li>
      </ul>
    </>
  );
}
