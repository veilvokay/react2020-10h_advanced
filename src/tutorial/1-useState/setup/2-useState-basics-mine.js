import React, { useState } from 'react';
// useState -function

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState('random title 😊');
  const handleClick = () => {
    if(text === 'random title 😊') {
      setText('hello world 🌍');
    } else {
      setText('random title 😊');
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>change title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
