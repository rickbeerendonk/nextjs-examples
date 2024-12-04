/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

// Async!
export default async function Page({ params }) {
  const id = (await params).id;
  return <h1>Page {id}</h1>;
}
