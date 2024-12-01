/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

function Home() {
  const names = ['Alexandra', 'Benjamin', 'Charlotte'];

  return (
    <>
      <h1>Greetings</h1>
      <ol>
        {
          // Prefer map (instead of for-loops):
          names.map((name, index) => (
            <li key={name} value={index}>
              Hello {name}
            </li>
          ))
        }
      </ol>
    </>
  );
}

export default Home;
