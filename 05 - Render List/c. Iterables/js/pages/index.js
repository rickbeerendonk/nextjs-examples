/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

function Home() {
  const names = new Set(['A', 'B', 'C']);

  return (
    <>
      <h1>List</h1>
      <ul>
        {Array.from(names, name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;
