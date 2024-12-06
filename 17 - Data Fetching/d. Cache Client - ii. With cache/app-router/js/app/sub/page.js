/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

'use client';

import { useEffect, useState } from 'react';
import ServerData from '../components/ServerData';

export default function Page() {
  const [obj, setObj] = useState({});

  useEffect(() => {
    async function fetchObj() {
      // Opt individual fetch into caching
      let res = await fetch('http://localhost:3100', { cache: 'force-cache' });
      setObj(await res.json());
    }
    fetchObj();
  }, []);

  return (
    <>
      <h1>Sub at {new Date().toLocaleTimeString()}</h1>
      <p style={{ color: 'gray' }}>
        Start the server in the _server folder first
      </p>
      <div>Server response</div>
      <ul>
        <li>Name: {obj.name}</li>
        <li>Time: {obj.time}</li>
        <li>Request number: {obj.requestNr}</li>
      </ul>
      <ServerData />
    </>
  );
}
