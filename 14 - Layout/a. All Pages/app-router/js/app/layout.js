/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import './globals.css';

export const metadata = {
  title: 'Demo',
  description: 'Demo app'
};

export default function RootLayout({ children }) {
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
