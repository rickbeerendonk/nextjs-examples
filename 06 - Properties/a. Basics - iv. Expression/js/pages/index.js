/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import Greeting from '../components/Greeting';

function Index() {
  return (
    <Greeting
      greeting={new Date().getHours() < 12 ? 'Good morning' : 'Hello'}
      name="World"
    />
  );
}

export default Index;
