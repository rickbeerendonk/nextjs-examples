/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import Switch from './Switch';
import Bottom from './Bottom';

class Middle extends React.Component {
  shouldComponentUpdate() {
    // Prevents legacy context changes from reaching child components.
    // New context API fixes this.
    return false;
  }
  render() {
    return (
      <>
        <Bottom />
        <Switch />
      </>
    );
  }
}

export default Middle;
