/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import Link from 'next/link';

export const metadata = {
  title: 'Demo',
  description: 'Demo app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>
            <Link href="/">App</Link>
          </h1>
          <hr />
        </header>
        {children}
      </body>
    </html>
  );
}
