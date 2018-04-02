import React from 'react';

const default_colors = ['black', 'red'];

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>

        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors.join(', ')}</p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: default_colors
};


export default Spaceship;
