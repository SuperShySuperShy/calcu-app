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

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    const key = e.key;
    const keyMapping = {
      '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
      '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
      '+': '+', '-': '-', '*': '*', '/': '/',
      Enter: '=', '=': '=', Backspace: '⌫', Escape: 'C',
    };

    // Check if the pressed key is in the mapping
    if (keyMapping[key] !== undefined) {
      this.handleButtonClick(keyMapping[key]);
    }
  };

  handleButtonClick = (value) => {
    if (value === '=') {
      try {
        this.setState({ result: eval(this.state.input) });
      } catch (error) {
        this.setState({ result: "Error" });
      }
    } else if (value === 'C') {
      this.setState({ input: "", result: "" });
    } else if (value === '⌫') { // Backspace button
      this.setState({ input: this.state.input.slice(0, -1) });
    } else {
      this.setState({ input: this.state.input + value });
    }
  };

  
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
