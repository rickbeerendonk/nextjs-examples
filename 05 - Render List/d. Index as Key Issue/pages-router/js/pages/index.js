/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import React from 'react';

function Home() {
  const [items, setItems] = React.useState(['one', 'two', 'three']);

  function insertTop() {
    setItems(i => [i.length + 1, ...i]);
  }

  return (
    <>
      <p style={{ color: 'gray' }}>
        Add some text in an input and observe what happens if you click the
        button.
      </p>

      <button onClick={insertTop}>Insert at Top</button>

      <ul>
        {
          // Prefer map (instead of for-loops):
          items.map((item, index) => (
            <li key={index}>
              <input placeholder={item} />
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default Home;
