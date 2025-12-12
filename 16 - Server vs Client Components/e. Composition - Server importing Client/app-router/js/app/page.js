/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

// This is a Server Component (no 'use client' directive)
// It can import and render Client Components
import Counter from './counter';

export default async function Home() {
  // Simulating server-side data fetching
  const serverData = await new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          timestamp: new Date().toISOString(),
          message: 'This data was fetched on the server'
        }),
      100
    );
  });

  return (
    <>
      <h1>Composition: Server Component importing Client Component</h1>

      <div
        style={{
          margin: '20px 0',
          padding: '15px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px'
        }}
      >
        <h2>Server Component (this page)</h2>
        <p>
          <strong>Server Data:</strong> {serverData.message}
        </p>
        <p>
          <strong>Timestamp:</strong> {serverData.timestamp}
        </p>
        <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
          💡 This is rendered on the server. No JavaScript is needed for this
          static content.
        </p>
      </div>

      {/* Server Component can import and render Client Components */}
      <Counter initialValue={10} />

      <div
        style={{
          margin: '20px 0',
          padding: '15px',
          backgroundColor: '#fffacd',
          borderRadius: '8px'
        }}
      >
        <h2>Teaching Points</h2>
        <ul>
          <li>✅ Server Components can import and render Client Components</li>
          <li>✅ Server Components are rendered first on the server</li>
          <li>
            ✅ Client Components are hydrated on the client for interactivity
          </li>
          <li>✅ This creates a component tree: Server → Client</li>
          <li>✅ Props flow from Server to Client components</li>
        </ul>
        <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
          💡 Teaching Note: This is the most common pattern. Use Server
          Components by default, and add Client Components only where you need
          interactivity. This minimizes the JavaScript bundle sent to the
          client.
        </p>
      </div>
    </>
  );
}
