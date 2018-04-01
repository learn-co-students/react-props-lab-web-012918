import React from 'react'

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>Speed: {this.props.speed}</p>
        <p>{this.props.hasRockets ? "We haz rockets" : "We got no rockets"}</p>
        <ul>
          {this.props.colors.map((color) => {return <li>{color}</li>} )}
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

export default Spaceship