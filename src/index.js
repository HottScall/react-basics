// import the React & ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const buttonText = {text: 'Click Me!'}
  const labelText = "Enter Name: "

  return(
    <div>
    <label for="name" class="label">
      {labelText}
    </label>
    <input id="name" type="text" />
    <button style={{backgroundColor: 'blue', color: 'white'}}>
    {buttonText.text}
    </button>
    </div>);
};

// Take React component and show it on the screen

ReactDOM.render(<App />, document.querySelector('#root'));
