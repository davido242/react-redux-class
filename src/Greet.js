// React Redux Class begins 7th July, 2022
import { useEffect } from 'react';

function Greet({ name }) {
  const message = `Hello, ${name}!`;
  useEffect(() => {
    document.title = `Greetings to ${name}`; 
  }, [name]);
  return <div>{message}</div>;
}

export default Greet;