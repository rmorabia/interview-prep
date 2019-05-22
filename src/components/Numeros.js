import React, { Component } from "react";
import ReactDOM from "react-dom";

import Number from "./Number";

class Numbers extends Component {

  render() {
    return (
      <div>
       { [1,2,3,4,5,6,7,8,9,0].map((i) => <Number number={i} valueClick={this.props.valueClick} /> )}
      </div>
    );
  }
}

export default Numbers;
