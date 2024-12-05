/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

export default function SubLayout({ children }) {
  return (
    <>
      <section>
        <p>Contend added in the (sub)layout</p>
      </section>
      <section>{children}</section>
    </>
  );
}
