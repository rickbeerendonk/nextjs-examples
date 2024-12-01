/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import React from 'react';

import ClickMe from '../components/ClickMe';

function Home() {
  const [id, setId] = React.useState(0);

  function handleClick() {
    setId(i => i + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Change ID</button>
      <br />
      <ClickMe key={id} />
    </>
  );
}

export default Home;
