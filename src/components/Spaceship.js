// Code The Spaceship Component Here
// In the components/Spaceship.js file, create a Spaceship React component
// This component has several props:
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])

import React from 'react'

class Spaceship extends React.Component {
  render() {
    return (
      <div>
      <h1>{this.props.name}</h1>
      <h3>Speed: {this.props.speed}</h3>
      <h3>Has Rockets: {this.props.hasRockets}</h3>
      <h3>Colors: {this.props.colors.join(' , ')}</h3>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship
