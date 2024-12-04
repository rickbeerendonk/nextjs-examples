/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1>Static File Serving</h1>
      <img src="/img/parade.png" alt="flower parade" width={500} height={375} />
    </>
  );
}
