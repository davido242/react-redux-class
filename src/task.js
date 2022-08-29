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

// Extracting state logig to Redux

// First, define an action type ADD and set it to a variable ADD

const ADD = "ADD";

// Secondly, to define an action creator addMessage() which creates the action to add message

const addMessage = (message) => {
  return {
    type: ADD,
    message
  };
};

// Thirdly, is to use the es6 default previousstate parameter to give it an initial value

const messageReducer = (previousState = [], action) => {
  switch (action.type) {
    case ADD:
      return [...previousState, action.message];
      break;
      
      default:
        return previousState;
  }
};

const store = Redux.createStore(messageReducer);



export default DisplayMessages;
