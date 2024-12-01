/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import Greeting from '../components/Greeting';
import List from '../components/List';

function Home() {
  return (
    <List greet="Hello">
      <Greeting name="Alexandra" />
      <Greeting name="Benjamin" />
      <Greeting name="Charlotte" greet="Good morning" />
    </List>
  );
}

export default Home;
