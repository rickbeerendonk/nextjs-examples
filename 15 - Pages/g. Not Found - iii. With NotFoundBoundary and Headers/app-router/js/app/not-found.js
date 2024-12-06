/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

// 1. Import headers
import { headers } from 'next/headers';

// 2. Async component
export default async function NotFound() {
  // 3. Get headers
  const headersList = await headers();
  // 4. Get referer
  const referer = headersList.get('referer');

  return (
    <div>
      <h2>Not Found</h2>
      <p>
        <u>Referer:</u> {JSON.stringify(referer)}
      </p>
      <p>
        <u>Headers:</u> {JSON.stringify(headersList)}
      </p>
    </div>
  );
}
