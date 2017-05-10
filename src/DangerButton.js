import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file

class DangerButton extends Component {
  render() {
    return <Button name={this.props.name} color="red" />;
  }
}

export default DangerButton;
