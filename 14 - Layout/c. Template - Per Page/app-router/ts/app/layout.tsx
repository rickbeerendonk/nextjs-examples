/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo',
  description: 'Demo app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Root layout with globals.css</h1>
        <hr />
        <div>{children}</div>
      </body>
    </html>
  );
}
