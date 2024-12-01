/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

function Home() {
  const show = false;

  return (
    <>
      <h3>Conditional:</h3>
      {show ? (
        <>
          <div>Invisible</div>
          <div>Also Invisible</div>
        </>
      ) : (
        <>
          <div>Visible</div>
          <div>Also Visible</div>
        </>
      )}
    </>
  );
}

export default Home;
