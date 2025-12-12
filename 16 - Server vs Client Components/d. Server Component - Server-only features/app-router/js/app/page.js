/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import fs from 'fs/promises';
import path from 'path';

// Server Component: Can use Node.js APIs directly
export default async function Home() {
  // 1. File system access (server-only)
  const filePath = path.join(process.cwd(), 'package.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const packageData = JSON.parse(fileContent);

  // 2. Environment variables (server-only - not exposed to client)
  // Note: In Next.js, only NEXT_PUBLIC_* variables are exposed to client
  const serverEnv = process.env.NODE_ENV;

  // 3. Heavy computation (stays on server, doesn't block client)
  const computeFactorial = n => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };
  const heavyComputation = computeFactorial(20);

  // 4. Server-side timestamp
  const serverTime = new Date().toISOString();

  return (
    <>
      <h1>Server Component - Server-only Features</h1>

      <section
        style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc' }}
      >
        <h2>1. File System Access</h2>
        <p>
          <strong>Demo:</strong> Reading package.json directly from the server
        </p>
        <p>Next.js Version: {packageData.dependencies.next}</p>
        <p>React Version: {packageData.dependencies.react}</p>
      </section>

      <section
        style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc' }}
      >
        <h2>2. Environment Variables</h2>
        <p>
          <strong>Demo:</strong> Accessing server-side environment variables
        </p>
        <p>NODE_ENV: {serverEnv}</p>
      </section>

      <section
        style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc' }}
      >
        <h2>3. Heavy Computation</h2>
        <p>
          <strong>Demo:</strong> Computing 20! (factorial) on the server
        </p>
        <p>Result: {heavyComputation.toLocaleString()}</p>
      </section>

      <section
        style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc' }}
      >
        <h2>4. Server-side Timestamp</h2>
        <p>
          <strong>Demo:</strong> Timestamp from when the page was rendered on
          the server
        </p>
        <p>Server Time: {serverTime}</p>
      </section>
    </>
  );
}
