/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import Image from 'next/image';

function Home() {
  return (
    <>
      <h1>Image</h1>
      <p>Also look at next.config.js</p>

      {/* Try to compile without width or height */}
      <Image
        src="/img/octopus.jpg"
        alt="flower octopus"
        width={500}
        height={375}
      />
    </>
  );
}

export default Home;
