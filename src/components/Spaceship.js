// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render(){
    return(
      <div className='spaceship'>
        <h1>{this.props.name}</h1>
        <h2>{this.props.speed}</h2>
        <h3>Has Rockets: {this.props.hasRockets}</h3>
        <h3>{this.props.colors.join(' & ')}</h3>
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
