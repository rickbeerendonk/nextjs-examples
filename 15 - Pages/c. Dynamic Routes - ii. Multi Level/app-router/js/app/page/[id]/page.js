/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import Link from 'next/link';

// Async!
export default async function Page({ params }) {
  const id = Number((await params).id);
  return (
    <>
      <h1>Page {id}</h1>
      <Link href={`${id + 1}`}>Go to Page {id + 1}</Link>
    </>
  );
}
