import React, { Component } from "react";
import ReactDOM from "react-dom";

import Operation from "./Operation";

class Numbers extends Component {
  render() {
    return (
      <div>
        <Operation operation="*" valueClick={this.props.valueClick} />
        <Operation operation="+" valueClick={this.props.valueClick} />
        <Operation operation="-" valueClick={this.props.valueClick} />
        <Operation operation="/" valueClick={this.props.valueClick} />
      </div>
    )
  }
}

export default Numbers;
