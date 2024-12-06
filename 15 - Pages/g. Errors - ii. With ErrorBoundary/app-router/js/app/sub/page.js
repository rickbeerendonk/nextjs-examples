/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

function Page1() {
  if (Math.random() > 0.5) {
    throw new Error('Error in Page2');
  }
  return <h1>Page 1</h1>;
}

export default Page1;
