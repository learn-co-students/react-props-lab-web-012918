// Code The Spaceship Component Here
import React from "react";

export default class Spaceship extends React.Component{
  render() {
    const { name, speed, hasRockets, colors } = this.props;

    return(
      <div>
        <p>{name}</p>
        <p>{speed}</p>
        <p>{hasRockets ? "Yes" : "No"}</p>
        <p>{colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
};
