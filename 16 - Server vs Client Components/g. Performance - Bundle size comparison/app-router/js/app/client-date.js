/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

'use client';

// Client Component using the same heavy library (date-fns)
// The library code IS sent to the client
import { format, addDays, differenceInDays } from 'date-fns';
import { useState } from 'react';

export default function ClientDateDisplay() {
  const [daysToAdd, setDaysToAdd] = useState(7);

  const today = new Date();
  const futureDate = addDays(today, daysToAdd);
  const daysUntil = differenceInDays(futureDate, today);

  return (
    <div
      style={{
        padding: '15px',
        border: '2px solid #ef4444',
        borderRadius: '8px',
        margin: '10px 0',
        backgroundColor: '#fef2f2'
      }}
    >
      <h3>Client Component with date-fns</h3>
      <p>
        <strong>Today:</strong> {format(today, 'PPPP')}
      </p>
      <p>
        <strong>Future date:</strong> {format(futureDate, 'PPPP')}
      </p>
      <p>
        <strong>Days until:</strong> {daysUntil} days
      </p>

      <div style={{ marginTop: '10px' }}>
        <label>
          Days to add:
          <input
            type="number"
            value={daysToAdd}
            onChange={e => setDaysToAdd(Number(e.target.value))}
            style={{ marginLeft: '10px', padding: '5px', width: '80px' }}
          />
        </label>
      </div>

      <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        💡 The date-fns library (~200KB) is included in the client bundle
        because this component needs interactivity.
      </p>
    </div>
  );
}
