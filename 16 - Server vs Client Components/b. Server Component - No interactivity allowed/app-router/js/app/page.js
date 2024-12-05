/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { useState } from 'react';

export default function Home() {
  // Not allowed
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Server Component</h1>
      <button onClick={() => setCount(c => c + 1)}>
        Clicked {count} times
      </button>
    </>
  );
}
