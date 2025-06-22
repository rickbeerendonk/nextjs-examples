/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

// Define client component
'use client';

import { useState } from 'react';

export default function Home() {
  // Allowed
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Client Component</h1>
      <button onClick={() => setCount(c => c + 1)}>
        Clicked {count} times
      </button>
    </>
  );
}
