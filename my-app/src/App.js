import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>

        <p className= "App-intro">
        
          Hi {this.props.name}!

        </p>

        <p className="App-clock">
        
          The time is {time}.
        
        </p>

      </div>
    );
  }

}


export default App;
