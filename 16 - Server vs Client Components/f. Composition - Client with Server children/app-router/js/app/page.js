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
      <p style={{ fontSize: '12px', color: '#666' }}>
        💡 This component is rendered on the server, then passed to the Client
        Component
      </p>
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

      <div
        style={{
          margin: '20px 0',
          padding: '15px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px'
        }}
      >
        <h2>Teaching Points</h2>
        <ul>
          <li>
            🚫 Client Components <strong>cannot import</strong> Server
            Components directly
          </li>
          <li>
            ✅ But they <strong>can receive</strong> Server Components as
            children/props
          </li>
          <li>✅ This creates a component tree: Server → Client → Server</li>
          <li>✅ The parent Server Component renders both components</li>
          <li>
            ✅ This pattern is useful for:
            <ul>
              <li>Interactive wrappers (tabs, accordions, modals)</li>
              <li>Client-side layouts with server-side content</li>
              <li>Keeping data fetching in Server Components</li>
            </ul>
          </li>
        </ul>
        <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
          💡 Teaching Note: This is the &quot;composition pattern&quot; or
          &quot;slot pattern&quot;. It&apos;s a powerful way to combine the
          benefits of both Server and Client Components. The client component
          doesn&apos;t know or care that its children are Server Components.
        </p>
      </div>
    </>
  );
}
