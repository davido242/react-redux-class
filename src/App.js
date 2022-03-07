import React from 'react';
// import ReactDOM from 'react-dom';
import Greet from './Greet';

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };

    if (this.state.input.length > 15) {
      inputStyle.border = '3px solid red';
    }
    const expression = inputStyle.border = '3px solid red' ? true : false;

    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
          <br />
          <br />
          < Greet Greet={expression} />
      </div>
    );
  }
};

export default GameOfChance;