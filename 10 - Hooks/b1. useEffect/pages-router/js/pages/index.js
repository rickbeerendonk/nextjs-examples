/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import MousePosition from '../components/MousePosition';

function Home() {
  const [visible, setVisible] = React.useState(true);

  function handleShowHide() {
    setVisible(v => !v);
  }

  return (
    <>
      <button onClick={handleShowHide}>{visible ? 'Hide' : 'Show'}</button>
      {visible && <MousePosition />}
    </>
  );
}

export default Home;
