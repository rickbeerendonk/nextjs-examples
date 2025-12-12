/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

'use client';

import { useState } from 'react';

// This is a Client Component (has 'use client' directive)
// It can use hooks and handle interactivity
export default function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div
      style={{
        padding: '15px',
        border: '2px solid #0070f3',
        borderRadius: '8px',
        margin: '10px 0'
      }}
    >
      <h3>Client Component: Counter</h3>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(c => c + 1)}
        style={{ marginRight: '10px' }}
      >
        Increment
      </button>
      <button onClick={() => setCount(initialValue)}>Reset</button>
    </div>
  );
}
