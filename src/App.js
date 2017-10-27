import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Converter from './components/Converter';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Converter />
      </MuiThemeProvider>
    );
  }
}

export default App;
