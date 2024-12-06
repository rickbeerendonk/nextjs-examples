/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { useEffect, useState } from 'react';
import styles from './ServerData.module.css';

export default function ServerData() {
  const [obj, setObj] = useState({});

  useEffect(() => {
    async function fetchObj() {
      // Opt individual fetch into caching (force-cache) or no caching (no-store)
      let res = await fetch('http://localhost:3100', { cache: 'no-store' });
      //let res = await fetch('http://localhost:3100', { cache: 'force-cache' });
      setObj(await res.json());
    }
    fetchObj();
  }, []);

  return (
    <div className={styles.div}>
      <h2>Server Data at {new Date().toLocaleTimeString()}</h2>
      <div>Server response</div>
      <ul>
        <li>Name: {obj.name}</li>
        <li>Time: {obj.time}</li>
        <li>Request number: {obj.requestNr}</li>
      </ul>
    </div>
  );
}
