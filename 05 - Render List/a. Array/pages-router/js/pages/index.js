/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

function Home() {
  const names = ['Alexandra', 'Benjamin', 'Charlotte'];

  return (
    <>
      <h1>Greetings</h1>
      <ul>
        {
          // Prefer map (instead of for-loops):
          names.map(name => (
            <li key={name}>Hello {name}</li>
          ))
        }
      </ul>
    </>
  );
}

export default Home;
