// Code The Spaceship Component Here
import React from 'react'

export default class Spaceship extends React.Component {
  render(){
    return(
      <div className="spaceship">
        <h1> Welcome aboard the {this.props.name} </h1>
        <h3> You will experience {this.props.speed} </h3>
        <p> The legend that we have rockets is {this.props.hasRockets} </p>
        <p> Our colors are {this.props.colors.join(', ')} </p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
