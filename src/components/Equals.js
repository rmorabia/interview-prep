import React, { Component } from "react";
import ReactDOM from "react-dom";

class Equals extends Component {
  render() {
    return (
      <button onClick={this.props.doTheMath}></button>
    );
  }
}

export default Equals;
