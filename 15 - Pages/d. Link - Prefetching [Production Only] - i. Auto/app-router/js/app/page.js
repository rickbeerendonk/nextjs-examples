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
      <Link href="sub1">Go to Page 1</Link>
      <div style={{ height: '800px' }}></div>
      <Link href="sub2">Go to Page 2</Link>
    </>
  );
}
