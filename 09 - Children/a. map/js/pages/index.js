/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import Greeting from '../components/Greeting';
import List from '../components/List';

function Index() {
  return (
    <List>
      <Greeting name="Alexandra" />
      <Greeting name="Benjamin" />
      <Greeting name="Charlotte" />
    </List>
  );
}

export default Index;
