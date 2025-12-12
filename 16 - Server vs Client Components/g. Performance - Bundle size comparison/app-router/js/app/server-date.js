/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

// Server Component using a heavy library (date-fns)
// The library code is NOT sent to the client
import { format, addDays, differenceInDays } from 'date-fns';

export default function ServerDateDisplay() {
  const today = new Date();
  const nextWeek = addDays(today, 7);
  const daysUntil = differenceInDays(nextWeek, today);

  return (
    <div
      style={{
        padding: '15px',
        border: '2px solid #10b981',
        borderRadius: '8px',
        margin: '10px 0',
        backgroundColor: '#f0fdf4'
      }}
    >
      <h3>Server Component with date-fns</h3>
      <p>
        <strong>Today:</strong> {format(today, 'PPPP')}
      </p>
      <p>
        <strong>Next week:</strong> {format(nextWeek, 'PPPP')}
      </p>
      <p>
        <strong>Days until:</strong> {daysUntil} days
      </p>
      <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        💡 The date-fns library (~200KB) is used on the server. The client only
        receives the formatted HTML output.
      </p>
    </div>
  );
}
