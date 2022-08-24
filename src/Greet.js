import React from "react";

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessages = this.submitMessages.bind(this);

  }
  
  handleChange(e) {
    this.setState({
      input: e.target.value,
      messages: this.state.messages,
    });
  }

  submitMessages() {
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input],
    });
  }
  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button onClick={this.submitMessages}>Submit</button>
        <ul>
          {this.state.messages.map((x, i) => {
            return <li key={i}>{x}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default DisplayMessages;
