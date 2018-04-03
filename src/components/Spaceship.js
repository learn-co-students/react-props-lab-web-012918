import React from 'react';

class Spaceship extends React.Component {
  render(){
    const { name, speed, hasRockets, colors } = this.props;
    return(
      <div>
        <p>Name: {name}</p>
        <p>Speed: {speed}</p>
        <p>Rockets: {hasRockets}</p>
        <p>Colors: {colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
