// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;
    //declare the props

    return (
      <div>
        <h1>Spaceship Name: {name}</h1>
        //the brackets determine the variable
        <h2>Ship Info:</h2>
        <h2>Speed: {speed}</h2>
        <h2>Rockets: {hasRockets ? "True" : "False"}</h2>
        //if true it says yes, false if no
        <ul>
          {colors.map((color, index) => <li>{color}</li>)}
        </ul>
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
