/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

'use client';

import { useState } from 'react';

// Unhandled Runtime Error
//
// Hydration failed because the server rendered HTML didn't match the client.
// As a result this tree will be regenerated on the client.
// This can happen if a SSR - ed Client Component used

export default function Home() {
  // Server: navigator = {}
  const [online, setOnline] = useState(navigator.onLine);

  function renderNavigatorProps() {
    let items = [];
    for (let prop in navigator) {
      items.push(
        <li key={prop}>
          {prop}: {JSON.stringify(navigator[prop])}
        </li>
      );
    }
    return <ul>{items}</ul>;
  }

  return (
    <>
      <h1>You are {online ? 'online' : 'offline'}</h1>
      {renderNavigatorProps()}
    </>
  );
}
