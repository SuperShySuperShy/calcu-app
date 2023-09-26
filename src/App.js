import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      result: ""
    };
  }

  
  render() {
    return (
      <div className="calculator">
        <div className="header">
          <h2>Welcome to My Calculator App</h2>
        </div>
        <div className="display">
          <input type="text" value={this.state.input} readOnly />
          <div className="result">{this.state.result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => this.handleButtonClick('7')}>7</button>
          <button onClick={() => this.handleButtonClick('8')}>8</button>
          <button onClick={() => this.handleButtonClick('9')}>9</button>
          <button onClick={() => this.handleButtonClick('+')}>+</button>
          <button onClick={() => this.handleButtonClick('4')}>4</button>
          <button onClick={() => this.handleButtonClick('5')}>5</button>
          <button onClick={() => this.handleButtonClick('6')}>6</button>
          <button onClick={() => this.handleButtonClick('-')}>-</button>
          <button onClick={() => this.handleButtonClick('1')}>1</button>
          <button onClick={() => this.handleButtonClick('2')}>2</button>
          <button onClick={() => this.handleButtonClick('3')}>3</button>
          <button onClick={() => this.handleButtonClick('*')}>*</button>
          <button onClick={() => this.handleButtonClick('C')}>C</button>
          <button onClick={() => this.handleButtonClick('0')}>0</button>
          <button onClick={() => this.handleButtonClick('=')}>=</button>
          <button onClick={() => this.handleButtonClick('/')}>/</button>
          <button onClick={() => this.handleButtonClick('⌫')}>⌫</button>
          <button onClick={() => this.handleButtonClick('00')}>00</button>
        </div>
      </div>
    );
  }
}

export default App;
