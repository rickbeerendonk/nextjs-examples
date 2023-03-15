/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

function Index() {
  const name = 'React';

  return (
    <ol>
      <li>Use value: {name}</li>
      <li>Use expression: {'hello '.toUpperCase() + 2023}</li>
      <li>Skip compilation 1: {'{name}'}</li>
      <li>Skip compilation 2: &#123;name&#125;</li>
    </ol>
  );
}

export default Index;
