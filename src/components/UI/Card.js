import "./Card.css";

import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const classes = "card " + this.props.className;
    return (
      <div className={classes}>{this.props.children}</div>
    )
  }
}

// function Card(props) {
//   const classes = "card " + props.className;
//   return <div className={classes}>{props.children}</div>;
// }
// export default Card;
