// Code The Spaceship Component Here

import React from 'react'

export default class Spaceship extends React.Component {
  render() {
    const {name, speed, hasRockets, colors} = this.props
    return (
      <div>
        <h2>Name: {name}</h2>
        <p>Speed: {speed}</p>
        <p>Has Rockets? {hasRockets}</p>
        <p>Colors: {colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
