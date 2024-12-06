/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

function Error({ error, reset }) {
  useEffect(() => {
    // f.e. Send the error to a Reporting Service
    console.error(error);
  }, [error]);

  function handleResetClick() {
    // Attempt to recover by trying to re-render
    reset();
  }

  return (
    <div style={{ color: 'red' }}>
      <h2>Something went wrong!</h2>
      <button onClick={handleResetClick}>Try again</button>
    </div>
  );
}

export default Error;
