/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

function Page({ id }) {
  return <h1>Page {id}</h1>;
}

/*
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false
  };
}
*/

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id
    }
  };
}

export default Page;
