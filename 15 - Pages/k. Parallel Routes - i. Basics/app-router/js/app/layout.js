/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

export const metadata = {
  title: 'Demo',
  description: 'Demo app'
};

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
