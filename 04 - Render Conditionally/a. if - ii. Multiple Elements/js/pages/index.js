/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

function Home() {
  const show = true;

  return (
    <>
      <h3>Conditional:</h3>
      {show && (
        <>
          <div>Visible</div>
          <div>Also Visible</div>
        </>
      )}
    </>
  );
}

export default Home;
