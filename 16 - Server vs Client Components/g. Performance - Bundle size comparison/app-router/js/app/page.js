/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import ServerDateDisplay from './server-date';
import ClientDateDisplay from './client-date';

export default function Home() {
  return (
    <>
      <h1>Performance: Bundle Size Comparison</h1>

      <div
        style={{
          margin: '20px 0',
          padding: '15px',
          backgroundColor: '#fffacd',
          borderRadius: '8px'
        }}
      >
        <h2>The Concept</h2>
        <p>
          Both components below use the <code>date-fns</code> library (~200KB).
        </p>
        <p>
          But only the Client Component includes it in the JavaScript bundle
          sent to users.
        </p>
      </div>

      <ServerDateDisplay />
      <ClientDateDisplay />

      <div
        style={{
          margin: '20px 0',
          padding: '15px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px'
        }}
      >
        <h2>Bundle Size Impact</h2>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '10px'
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#e0e0e0' }}>
              <th
                style={{
                  padding: '8px',
                  border: '1px solid #ccc',
                  textAlign: 'left'
                }}
              >
                Component Type
              </th>
              <th
                style={{
                  padding: '8px',
                  border: '1px solid #ccc',
                  textAlign: 'left'
                }}
              >
                Library Included?
              </th>
              <th
                style={{
                  padding: '8px',
                  border: '1px solid #ccc',
                  textAlign: 'left'
                }}
              >
                Client Bundle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ccc' }}>
                Server Component
              </td>
              <td style={{ padding: '8px', border: '1px solid #ccc' }}>
                ❌ No
              </td>
              <td style={{ padding: '8px', border: '1px solid #ccc' }}>
                Only HTML sent
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ccc' }}>
                Client Component
              </td>
              <td style={{ padding: '8px', border: '1px solid #ccc' }}>
                ✅ Yes
              </td>
              <td style={{ padding: '8px', border: '1px solid #ccc' }}>
                +200KB JavaScript
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        style={{
          margin: '20px 0',
          padding: '15px',
          backgroundColor: '#e0f2fe',
          borderRadius: '8px'
        }}
      >
        <h2>Teaching Points</h2>
        <ul>
          <li>
            📦 <strong>Server Components:</strong> Heavy libraries run on
            server, output is HTML
          </li>
          <li>
            📦 <strong>Client Components:</strong> All dependencies are included
            in the client bundle
          </li>
          <li>
            ⚡ <strong>Performance Impact:</strong>
            <ul>
              <li>Smaller JavaScript bundles = Faster downloads</li>
              <li>Less parsing/execution = Faster Time to Interactive (TTI)</li>
              <li>Better performance on slow networks and devices</li>
            </ul>
          </li>
          <li>
            🎯 <strong>Best Practice:</strong> Use Server Components by default,
            Client Components only when needed
          </li>
          <li>
            💡 <strong>Tip:</strong> Run <code>npm run build</code> to see
            actual bundle sizes in your project
          </li>
        </ul>
      </div>

      <div
        style={{
          margin: '20px 0',
          padding: '15px',
          backgroundColor: '#fef3c7',
          borderRadius: '8px'
        }}
      >
        <h2>Try This</h2>
        <ol>
          <li>Open DevTools → Network tab</li>
          <li>Reload the page</li>
          <li>Look at the JavaScript files being downloaded</li>
          <li>
            Notice that date-fns is only loaded for the interactive component
          </li>
        </ol>
        <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
          💡 Teaching Note: This demonstrates one of the key benefits of React
          Server Components. By keeping heavy computations and libraries on the
          server, we significantly reduce the amount of JavaScript shipped to
          users, resulting in faster page loads and better user experience,
          especially on slower devices and networks.
        </p>
      </div>
    </>
  );
}
