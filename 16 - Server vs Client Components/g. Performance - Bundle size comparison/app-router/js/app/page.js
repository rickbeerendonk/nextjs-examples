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
    </>
  );
}
