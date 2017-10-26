import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FromSelector from './components/CurrencyFrom';
import ToSelector from './components/CurrencyTo';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <FromSelector />
        <ToSelector />
      </MuiThemeProvider>
    );
  }
}

export default App;
