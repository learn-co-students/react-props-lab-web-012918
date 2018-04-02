import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <small>Colors: {this.props.colors.join(', ')}</small>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  speed: 'slow',
  colors: ['black', 'red']
};

export default Spaceship;
