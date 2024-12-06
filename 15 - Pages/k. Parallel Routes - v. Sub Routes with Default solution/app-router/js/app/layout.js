/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

export const metadata = {
  title: 'Demo',
  description: 'Demo app'
};

// Use slots:
// - Folder names starting with '@' are reserved for slots
// - Slots don't have a route
export default function RootLayout({ children, first, second }) {
  return (
    <html lang="en">
      <body>
        <header>
          {first} <hr />
        </header>
        <main>{children}</main>
        <footer>
          <hr />
          {second}
        </footer>
      </body>
    </html>
  );
}
