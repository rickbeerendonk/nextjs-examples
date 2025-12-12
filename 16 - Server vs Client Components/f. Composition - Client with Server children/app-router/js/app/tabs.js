/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

'use client';

import { useState } from 'react';

// This is a Client Component that accepts children
// The children can be Server Components!
export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div
      style={{
        border: '2px solid #0070f3',
        borderRadius: '8px',
        padding: '15px',
        margin: '20px 0'
      }}
    >
      <h3>Client Component: Tab Container</h3>

      <div style={{ marginBottom: '15px' }}>
        <button
          onClick={() => setActiveTab('tab1')}
          style={{
            marginRight: '10px',
            padding: '8px 16px',
            backgroundColor: activeTab === 'tab1' ? '#0070f3' : '#e0e0e0',
            color: activeTab === 'tab1' ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Tab 1
        </button>
        <button
          onClick={() => setActiveTab('tab2')}
          style={{
            padding: '8px 16px',
            backgroundColor: activeTab === 'tab2' ? '#0070f3' : '#e0e0e0',
            color: activeTab === 'tab2' ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Tab 2
        </button>
      </div>

      <div
        style={{
          padding: '15px',
          backgroundColor: '#f9f9f9',
          borderRadius: '4px'
        }}
      >
        {activeTab === 'tab1' ? (
          <div>
            <h4>Tab 1 Content</h4>
            {/* Server Component children will be rendered here */}
            {children}
          </div>
        ) : (
          <div>
            <h4>Tab 2 Content</h4>
            <p>This is tab 2 content (client-side only)</p>
          </div>
        )}
      </div>

      <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        💡 This Client Component manages tab state and accepts children as a
        prop
      </p>
    </div>
  );
}
