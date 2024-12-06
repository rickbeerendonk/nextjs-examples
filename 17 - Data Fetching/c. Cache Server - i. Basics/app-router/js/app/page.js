/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

export default async function Page() {
  let res = await fetch('http://localhost:3100');
  let obj = await res.json();
  return (
    <>
      <h1>Fetched at {new Date().toLocaleTimeString()}</h1>
      <p style={{ color: 'gray' }}>
        Start the server in the _server folder first
      </p>
      <div>Server response</div>
      <ul>
        <li>Name: {obj.name}</li>
        <li>Time: {obj.time}</li>
        <li>Request number: {obj.requestNr}</li>
      </ul>
    </>
  );
}
