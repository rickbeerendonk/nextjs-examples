/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import styles from './layout.module.css';

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Application Title</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Copyright</footer>
    </>
  );
}

export default Layout;
