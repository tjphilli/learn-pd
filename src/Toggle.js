import React, { Component } from 'react';
import './Toggle.css';

class Toggle extends Component {
  constructor () {
    super()
    this.state = {
      toggled: false
    }
    this.changeToggle = this.changeToggle.bind(this)
  }
  changeToggle (e) {
    this.props.myFunc()
  }
  render() {
    return <div className={"Toggle " + (this.props.isToggled ? "toggled" : "untoggled")} onClick={this.changeToggle}>{this.props.name}</div>;
  }
}

export default Toggle; // Don’t forget to use export default!
