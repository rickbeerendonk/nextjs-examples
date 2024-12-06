/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

'use client';

import { useRouter } from 'next/navigation';

// useRouter:
// - Programmatic client-side navigation
// - No Prefetching by default

// push():
// - Navigate to a new URL
// - The URL is add to the browser's history

export default function Home() {
  const router = useRouter();

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => router.push('sub1')}>Go to Page 1</button>
      <div style={{ height: '800px' }}></div>
      <button onClick={() => router.push('sub2')}>Go to Page 2</button>
    </>
  );
}
