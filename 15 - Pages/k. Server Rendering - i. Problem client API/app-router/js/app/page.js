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
  const [online, setOnline] = useState(navigator.onLine);

  return <h1>You are {online ? 'online' : 'offline'}</h1>;
}
