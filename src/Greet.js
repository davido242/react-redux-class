import React from 'react';
import ReactDOM from 'react-dom';

class Greet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <h1>Text should not be more than 15 in length!</h1>
      )
  }
}

export default Greet;