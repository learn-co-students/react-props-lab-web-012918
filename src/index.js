import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship name="Millennium Falcon"
  speed= 'warp speed'
  hasRockets= 'true'
  colors= ['orange', 'grey', 'yellow'] 
  />,
  document.getElementById('global')
);
