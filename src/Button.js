import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return <button className="Button">{this.props.name}</button>;
  }
}

export default Button; // Don’t forget to use export default!
