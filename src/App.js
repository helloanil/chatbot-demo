import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
import logo from './logo.svg';
import 'typeface-roboto';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
