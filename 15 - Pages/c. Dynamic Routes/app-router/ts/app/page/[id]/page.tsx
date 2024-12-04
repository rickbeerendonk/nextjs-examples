/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

type PageProps = {
  params: Promise<{ id: string }>;
};

// Async!
export default async function Page({ params }: PageProps) {
  const id = (await params).id;
  return <h1>Page {id}</h1>;
}
