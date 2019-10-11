// import the React & ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>
      <label for="name" class="label">
        Enter your name:
      </label>
      <input id="name" type="text" />
    </div>);
};

// Take React component and show it on the screen

ReactDOM.render(<App />, document.querySelector('#root'));
