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
      </div>

      {/* Server Component can import and render Client Components */}
      <Counter initialValue={10} />
    </>
  );
}
