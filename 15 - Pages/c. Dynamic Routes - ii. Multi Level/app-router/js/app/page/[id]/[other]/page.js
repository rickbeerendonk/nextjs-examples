/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import Link from 'next/link';

// Async!
export default async function Page({ params }) {
  const id = Number((await params).id);
  const other = Number((await params).other);
  return (
    <>
      <h1>
        Page {id} - {other}
      </h1>
      <Link href={`${other + 1}`}>
        Go to Page {id} - {other + 1}
      </Link>
    </>
  );
}
