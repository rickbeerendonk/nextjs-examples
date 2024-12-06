/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import styles from './ServerData.module.css';

export default async function ServerData() {
  let res = await fetch('http://localhost:3100', { method: 'POST' });
  let obj = await res.json();
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
