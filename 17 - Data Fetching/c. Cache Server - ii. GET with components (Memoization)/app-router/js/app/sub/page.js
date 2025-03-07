/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import ServerData from '../components/ServerData';

// React will memoize fetching the same URL twice within the same request.
// A new unmemoized fetch will be made on each new request.

export default async function Page() {
  let res = await fetch('http://localhost:3100');
  let obj = await res.json();
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
