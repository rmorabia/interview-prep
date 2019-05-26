import React, { Component } from "react";
import ReactDOM from "react-dom";

import Numeros from "./components/Numeros"
import Operations from "./components/Operations"
import Equals from "./components/Equals"

class App extends Component {

  constructor () {
    super()
    this.state = {
      mathOperation: ''
    }
    this.valueClick = this.valueClick.bind(this)
    this.doTheMath = this.doTheMath.bind(this)
    this.clearOutput = this.clearOutput.bind(this)
  }

  valueClick(e) {
    console.log('e')
    const value = e.target.name;
    this.setState({mathOperation: this.state.mathOperation + '' +  value})
  }

  doTheMath(e) {
    const result = eval(this.state.mathOperation)
    this.setState({mathOperation: result })
  }

  clearOutput() {
    this.setState({mathOperation: ''})
  }


  render() {
    return (
      <div>
         <input name="math" value={this.state.mathOperation} />
         <Numeros valueClick={this.valueClick} />
         <Operations valueClick={this.valueClick} />
         <Equals doTheMath={this.doTheMath}/>
         <button name="clear" onClick={this.clearOutput}>Clear</button>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
