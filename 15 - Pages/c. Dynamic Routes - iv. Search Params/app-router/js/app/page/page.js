/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import Link from 'next/link';

// Async!
export default async function Page(props) {
  console.log('Props', props);
  console.log('Props.searchParams', await props.searchParams);

  const id = Number((await props.searchParams).id) || 1;
  return (
    <>
      <h1>Page {id}</h1>
      <Link href={`?id=${id + 1}`}>Go to Page {id + 1}</Link>
    </>
  );
}
