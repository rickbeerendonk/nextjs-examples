/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

export async function getServerSideProps() {
  return {
    props: { name: new Date().toString() }
  };
}

function Home({ name }) {
  return <h1>Hello {name}!</h1>;
}

export default Home;
