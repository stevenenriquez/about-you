import React from 'react';
import logo from './img/calc.png';
import './App.css';
import AgeCalc from './components/AgeCalc.js';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Typography variant='h3' style={{fontFamily: 'cursive', paddingTop:'20px'}}>
          Age Calculator
        </Typography>
      </header>
      <div className="Content">
        <AgeCalc/>
        <div className="Link">
          <a
            className="App-link"
            href="http://www.stevenenriquez.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Steven's Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
