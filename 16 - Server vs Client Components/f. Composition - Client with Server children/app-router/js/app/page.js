/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

// This is a Server Component
// It's being passed as children to a Client Component
import Tabs from './tabs';

// Server Component that will be passed as children
async function ServerContent() {
  // Simulate server-side data fetching
  const data = await new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          users: ['Alice', 'Bob', 'Charlie'],
          timestamp: new Date().toISOString()
        }),
      100
    );
  });

  return (
    <div
      style={{
        padding: '10px',
        backgroundColor: '#e8f5e9',
        borderRadius: '4px',
        margin: '10px 0'
      }}
    >
      <h4>Server Component Content</h4>
      <p>
        <strong>Data fetched on server at:</strong> {data.timestamp}
      </p>
      <ul>
        {data.users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function Home() {
  return (
    <>
      <h1>Composition: Client Component with Server Children</h1>

      <div
        style={{
          margin: '20px 0',
          padding: '15px',
          backgroundColor: '#fffacd',
          borderRadius: '8px'
        }}
      >
        <h2>The Pattern</h2>
        <p>
          Client Components <strong>cannot directly import</strong> Server
          Components.
        </p>
        <p>
          But they <strong>can receive</strong> Server Components as children or
          props!
        </p>
      </div>

      {/* 
        Tabs is a Client Component, but we're passing ServerContent as children.
        This works because the Server Component is rendered by the Server Component (Home),
        and then passed to the Client Component as a prop.
      */}
      <Tabs>
        <ServerContent />
      </Tabs>
    </>
  );
}
