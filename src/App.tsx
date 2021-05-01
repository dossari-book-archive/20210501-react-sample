import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <p>hello</p>
      <p>world</p>
      <div>
        <label htmlFor="inputForHtmlFor1">htmlFor:&nbsp;</label>
        <input id="inputForHtmlFor1" className="inputForHtmlFor" tabIndex={2} />&nbsp;
        <input id="inputForHtmlFor2" className="inputForHtmlFor" tabIndex={1} />
      </div>
      <img src={logo} />
    </React.Fragment>
  );
}

export default App;
