/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="sub">Go to Sub Page</Link>
    </>
  );
}