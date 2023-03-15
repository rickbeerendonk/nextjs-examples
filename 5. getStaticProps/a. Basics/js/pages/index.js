/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

export default function Index({ name }) {
  return <h1>Hello {name}!</h1>;
}

export async function getStaticProps() {
  return {
    props: { name: 'Next.js' }
  };
}
