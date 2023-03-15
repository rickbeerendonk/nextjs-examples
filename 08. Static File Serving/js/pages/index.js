/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import Image from 'next/image';

function Index() {
  return (
    <>
      <h1>Static File Serving</h1>

      {/* Try to compile without width or height */}
      <Image
        src="/img/parade.png"
        alt="flower parade"
        width={500}
        height={375}
      />
    </>
  );
}

export default Index;
