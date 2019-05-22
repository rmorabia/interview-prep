import React, { Component } from "react";
import ReactDOM from "react-dom";

class Number extends Component {
  render() {
    return (
      <button name={this.props.number} onClick={this.props.valueClick}>
        {this.props.number}
      </button>
    );
  }
}

export default Number;
