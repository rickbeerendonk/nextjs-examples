/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

function Home() {
  const hide = true;

  return (
    <>
      <h3>Conditional:</h3>
      {!hide || <div>Visible</div>}
    </>
  );
}

export default Home;
