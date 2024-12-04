/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Page 1</h1>
      <Link href="page2">Go to Page 2</Link>
    </>
  );
}
