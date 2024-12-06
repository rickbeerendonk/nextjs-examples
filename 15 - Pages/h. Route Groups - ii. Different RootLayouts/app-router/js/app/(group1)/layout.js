/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section style={{ backgroundColor: 'lightblue' }}>{children}</section>
      </body>
    </html>
  );
}
