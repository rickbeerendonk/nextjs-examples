/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import Link from 'next/link';

type PageProps = {
  searchParams: Promise<{ id?: string }>;
};

// Async!
export default async function Page({ searchParams }: PageProps) {
  const id = Number((await searchParams).id) || 1;
  return (
    <>
      <h1>Page {id}</h1>
      <Link href={`?id=${id + 1}`}>Go to Page {id + 1}</Link>
    </>
  );
}
