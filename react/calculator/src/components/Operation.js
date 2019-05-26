import React, { Component } from "react";
import ReactDOM from "react-dom";

class Operation extends Component {
  render() {
    return (
      <button name={this.props.operation} onClick={this.props.valueClick}>
        {this.props.operation}
      </button>
    )
  }
}

export default Operation;
