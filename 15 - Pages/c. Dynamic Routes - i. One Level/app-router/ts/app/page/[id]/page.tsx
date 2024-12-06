/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import Link from 'next/link';

type PageProps = {
  params: Promise<{ id: string }>;
};

// Async!
export default async function Page({ params }: PageProps) {
  const id = Number((await params).id);
  return (
    <>
      <h1>Page {id}</h1>
      <Link href={`${id + 1}`}>Go to Page {id + 1}</Link>
    </>
  );
}
